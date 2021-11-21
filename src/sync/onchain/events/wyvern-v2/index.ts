import { Interface } from "@ethersproject/abi";
import { Log } from "@ethersproject/abstract-provider";

import { batchQueries, db } from "@common/db";
import { logger } from "@common/logger";
import { baseProvider } from "@common/provider";
import { EventInfo } from "@events/index";
import { parseEvent } from "@events/parser";

const abi = new Interface([
  `event OrderCancelled(bytes32 indexed hash)`,
  `event OrdersMatched(
    bytes32 buyHash,
    bytes32 sellHash,
    address indexed maker,
    address indexed taker,
    uint256 price,
    bytes32 indexed metadata
  )`,
]);

export const getOrderCancelledEventInfo = (
  contracts: string[] = []
): EventInfo => ({
  provider: baseProvider,
  filter: {
    topics: [abi.getEventTopic("OrderCancelled"), null, null],
    address: contracts,
  },
  syncCallback: async (logs: Log[]) => {
    const queries: any[] = [];
    for (const log of logs) {
      try {
        const baseParams = parseEvent(log);

        const parsedLog = abi.parseLog(log);
        const hash = parsedLog.args.hash.toLowerCase();

        queries.push({
          query: `
            select add_cancel_event(
              $/hash/,
              $/address/,
              $/block/,
              $/blockHash/,
              $/txHash/,
              $/txIndex/,
              $/logIndex/
            )
          `,
          values: {
            hash,
            ...baseParams,
          },
        });
      } catch (error) {
        logger.error(
          "wyvern_v2_order_cancelled_callback",
          `Invalid log ${log}: ${error}`
        );
      }
    }

    await batchQueries(queries);
  },
  fixCallback: async (blockHash) => {
    await db.none("select remove_cancel_events($/blockHash/)", { blockHash });
  },
});

export const getOrdersMatchedEventInfo = (
  contracts: string[] = []
): EventInfo => ({
  provider: baseProvider,
  filter: {
    topics: [abi.getEventTopic("OrdersMatched"), null, null, null],
    address: contracts,
  },
  syncCallback: async (logs: Log[]) => {
    const queries: any[] = [];
    for (const log of logs) {
      try {
        const baseParams = parseEvent(log);

        const parsedLog = abi.parseLog(log);
        const buyHash = parsedLog.args.buyHash.toLowerCase();
        const sellHash = parsedLog.args.sellHash.toLowerCase();
        const maker = parsedLog.args.maker.toLowerCase();
        const taker = parsedLog.args.taker.toLowerCase();
        const price = parsedLog.args.price.toLowerCase();

        queries.push({
          query: `
            select add_fill_event(
              $/buyHash/,
              $/sellHash/,
              $/maker/,
              $/taker/,
              $/price/,
              $/address/,
              $/block/,
              $/blockHash/,
              $/txHash/,
              $/txIndex/,
              $/logIndex/
            )
          `,
          values: {
            buyHash,
            sellHash,
            maker,
            taker,
            price,
            ...baseParams,
          },
        });
      } catch (error) {
        logger.error(
          "wyvern_v2_orders_matched_callback",
          `Invalid log ${log}: ${error}`
        );
      }
    }

    await batchQueries(queries);
  },
  fixCallback: async (blockHash) => {
    await db.none("select remove_fill_events($/blockHash/)", { blockHash });
  },
});

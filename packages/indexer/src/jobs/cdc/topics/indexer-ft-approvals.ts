/* eslint-disable @typescript-eslint/no-explicit-any */
import { redisWebsocketPublisher } from "@/common/redis";
import { KafkaEventHandler } from ".";

// Create a class implementing KafkaEventHandler for each event type
export class IndexerApprovalEventsHandler extends KafkaEventHandler {
  topicName = "indexer.public.ft_approvals";
  queueName = "indexer-ft-approvals";
  queue = null;
  worker = null;

  protected async handleInsert(payload: any): Promise<void> {
    if (!payload.after) {
      return;
    }

    await redisWebsocketPublisher.publish(
      "events",
      JSON.stringify({
        event: "approval.created.v2",
        tags: {},
        data: payload.after,
      })
    );
  }

  protected async handleUpdate(payload: any): Promise<void> {
    if (!payload.after) {
      return;
    }

    await redisWebsocketPublisher.publish(
      "events",
      JSON.stringify({
        event: "approval.updated.v2",
        tags: {},
        data: payload.after,
      })
    );
  }

  protected async handleDelete(): Promise<void> {
    // probably do nothing here
  }
}

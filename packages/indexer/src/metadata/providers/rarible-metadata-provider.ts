/* eslint-disable @typescript-eslint/no-explicit-any */

import { config } from "@/config/index";
import { TokenMetadata } from "../types";

import axios from "axios";
import _ from "lodash";

export class SimplehashMetadataProvider {
  async _getTokensMetadata(
    tokens: { contract: string; tokenId: string }[]
  ): Promise<TokenMetadata[]> {
    const url =
      config.chainId === 1
        ? "https://ethereum-api.rarible.org/v0.1/nft/items/byIds"
        : "https://ethereum-api-staging.rarible.org/v0.1/nft/items/byIds";
    const data = await axios
      .post(url, {
        ids: tokens.map(({ contract, tokenId }) => `${contract}:${tokenId}`),
      })
      .then((response) => response.data);

    return data.map(this.parse).filter(Boolean);
  }

  // async _getTokensMetadataBySlug(
  //   slug: string,
  //   continuation?: string
  // ): Promise<TokenMetadataBySlugResult> {}

  parse = (asset: any) => {
    try {
      // Image
      let imageUrl = null;
      if (!imageUrl) {
        imageUrl = asset.meta?.image?.url?.["PREVIEW"];
      }
      if (!imageUrl) {
        imageUrl = asset.meta?.image?.url?.["BIG"];
      }
      if (!imageUrl) {
        imageUrl = asset.meta?.image?.url?.["ORIGINAL"];
      }

      // Media
      let mediaUrl = null;
      if (!mediaUrl) {
        mediaUrl = asset.meta?.animation?.url?.["ORIGINAL"];
      }

      // Attributes
      const attributes = asset.meta.attributes?.reduce((result: any, trait: any) => {
        if (trait.value) {
          result.push({
            key: trait.key ?? "property",
            value: trait.value,
            kind: isNaN(trait.value) ? "string" : "number",
            rank: 1,
          });
        }
        return result;
      }, []);

      // Token descriptions are a waste of space for most collections we deal with
      // so by default we ignore them (this behaviour can be overridden if needed).
      return {
        contract: asset.contract,
        tokenId: asset.tokenId,
        collection: _.toLower(asset.contract),
        name: asset.meta.name,
        imageUrl,
        mediaUrl,
        attributes,
      };
    } catch {
      // Skip any errors
    }

    return undefined;
  };
}

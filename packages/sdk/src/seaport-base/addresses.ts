import { ChainIdToAddress, Network } from "../utils";

export const OpenseaConduitKey: ChainIdToAddress = {
  [Network.Ethereum]: "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
  [Network.EthereumGoerli]: "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
  [Network.EthereumSepolia]: "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
  [Network.Bsc]: "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
  [Network.Optimism]: "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
  [Network.Polygon]: "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
  [Network.Arbitrum]: "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
  [Network.ArbitrumNova]: "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
  [Network.Mumbai]: "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
  [Network.Avalanche]: "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
  [Network.Base]: "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
  [Network.Zora]: "0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",
};

export const ReservoirConduitKey: ChainIdToAddress = {
  [Network.Ethereum]: "0xf3d63166f0ca56c3c1a3508fce03ff0cf3fb691e000000000000000000000000",
  [Network.EthereumGoerli]: "0xf3d63166f0ca56c3c1a3508fce03ff0cf3fb691e000000000000000000000000",
  [Network.EthereumSepolia]: "0xf3d63166f0ca56c3c1a3508fce03ff0cf3fb691e000000000000000000000000",
  [Network.Bsc]: "0xf3d63166f0ca56c3c1a3508fce03ff0cf3fb691e000000000000000000000000",
  [Network.Optimism]: "0xf3d63166f0ca56c3c1a3508fce03ff0cf3fb691e000000000000000000000000",
  [Network.Polygon]: "0xf3d63166f0ca56c3c1a3508fce03ff0cf3fb691e000000000000000000000000",
  [Network.Mumbai]: "0xf3d63166f0ca56c3c1a3508fce03ff0cf3fb691e000000000000000000000000",
  [Network.Arbitrum]: "0xf3d63166f0ca56c3c1a3508fce03ff0cf3fb691e000000000000000000000000",
  [Network.ScrollAlpha]: "0xf3d63166f0ca56c3c1a3508fce03ff0cf3fb691e000000000000000000000000",
  [Network.MantleTestnet]: "0x7e727520b29773e7f23a8665649197aaf064cef1000000000000000000000000",
  [Network.LineaTestnet]: "0x7e727520b29773e7f23a8665649197aaf064cef1000000000000000000000000",
  [Network.Zora]: "0xf3d63166f0ca56c3c1a3508fce03ff0cf3fb691e000000000000000000000000",
  [Network.Base]: "0xf3d63166f0ca56c3c1a3508fce03ff0cf3fb691e000000000000000000000000",
  [Network.Linea]: "0xf3d63166f0ca56c3c1a3508fce03ff0cf3fb691e000000000000000000000000",
  [Network.Avalanche]: "0xf3d63166f0ca56c3c1a3508fce03ff0cf3fb691e000000000000000000000000",
  [Network.PolygonZkevm]: "0xf3d63166f0ca56c3c1a3508fce03ff0cf3fb691e000000000000000000000000",
  [Network.Ancient8Testnet]: "0xf3d63166f0ca56c3c1a3508fce03ff0cf3fb691e000000000000000000000000",
  [Network.Scroll]: "0xf3d63166f0ca56c3c1a3508fce03ff0cf3fb691e000000000000000000000000",
};

export const ConduitController: ChainIdToAddress = {
  [Network.Ethereum]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.Bsc]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.Optimism]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.Polygon]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.Arbitrum]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.EthereumGoerli]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.EthereumSepolia]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.ArbitrumNova]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.ZoraTestnet]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.Mumbai]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.BaseGoerli]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.ScrollAlpha]: "0x3070a7ea1bc31049068f055f9b31f5d2d7bdfb5d",
  [Network.MantleTestnet]: "0x9c390efb05e09982e23993ebfa3b32c190e25f4b",
  [Network.LineaTestnet]: "0xc04dd964ed36c0e4796f53a7168393ed4fc38ff6",
  [Network.Zora]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.Avalanche]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.Base]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.Linea]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.PolygonZkevm]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.Zksync]: "0x4c68886e1db29168a6672e614412191591aca502",
  [Network.Ancient8Testnet]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.Scroll]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.ImmutableZkevmTestnet]: "0x119e7a6f1b21a370383bae957c97ddc54bb0885f",
};

// https://github.com/ProjectOpenSea/seaport/blob/0a8e82ce7262b5ce0e67fa98a2131fd4c47c84e9/contracts/conduit/ConduitController.sol#L493
export const ConduitControllerCodeHash: ChainIdToAddress = {
  [Network.Ethereum]: "0x023d904f2503c37127200ca07b976c3a53cc562623f67023115bf311f5805059",
  [Network.EthereumGoerli]: "0x023d904f2503c37127200ca07b976c3a53cc562623f67023115bf311f5805059",
  [Network.EthereumSepolia]: "0x023d904f2503c37127200ca07b976c3a53cc562623f67023115bf311f5805059",
  [Network.Bsc]: "0x023d904f2503c37127200ca07b976c3a53cc562623f67023115bf311f5805059",
  [Network.Optimism]: "0x023d904f2503c37127200ca07b976c3a53cc562623f67023115bf311f5805059",
  [Network.Polygon]: "0x023d904f2503c37127200ca07b976c3a53cc562623f67023115bf311f5805059",
  [Network.ArbitrumNova]: "0x023d904f2503c37127200ca07b976c3a53cc562623f67023115bf311f5805059",
  [Network.Arbitrum]: "0x023d904f2503c37127200ca07b976c3a53cc562623f67023115bf311f5805059",
  [Network.ZoraTestnet]: "0x023d904f2503c37127200ca07b976c3a53cc562623f67023115bf311f5805059",
  [Network.BaseGoerli]: "0x023d904f2503c37127200ca07b976c3a53cc562623f67023115bf311f5805059",
  [Network.Mumbai]: "0x023d904f2503c37127200ca07b976c3a53cc562623f67023115bf311f5805059",
  [Network.ScrollAlpha]: "0xfde822a5f8cca372c4a13e06a9a2baea0f8a45e42347603e34607fab3aacea4c",
  [Network.MantleTestnet]: "0xfde822a5f8cca372c4a13e06a9a2baea0f8a45e42347603e34607fab3aacea4c",
  [Network.LineaTestnet]: "0xfde822a5f8cca372c4a13e06a9a2baea0f8a45e42347603e34607fab3aacea4c",
  [Network.Zora]: "0x023d904f2503c37127200ca07b976c3a53cc562623f67023115bf311f5805059",
  [Network.Avalanche]: "0x023d904f2503c37127200ca07b976c3a53cc562623f67023115bf311f5805059",
  [Network.Base]: "0x023d904f2503c37127200ca07b976c3a53cc562623f67023115bf311f5805059",
  [Network.Linea]: "0x023d904f2503c37127200ca07b976c3a53cc562623f67023115bf311f5805059",
  [Network.PolygonZkevm]: "0x023d904f2503c37127200ca07b976c3a53cc562623f67023115bf311f5805059",
  [Network.Ancient8Testnet]: "0x023d904f2503c37127200ca07b976c3a53cc562623f67023115bf311f5805059",
  [Network.Scroll]: "0x023d904f2503c37127200ca07b976c3a53cc562623f67023115bf311f5805059",
  [Network.ImmutableZkevmTestnet]:
    "0xceb6348957edd152aac3647410e1b78d2568622135855ddbda06b98ab0cfb7f5",
};

export const OperatorFilterRegistry: ChainIdToAddress = {
  [Network.Ethereum]: "0x000000000000aaeb6d7670e522a718067333cd4e",
  [Network.EthereumGoerli]: "0x000000000000aaeb6d7670e522a718067333cd4e",
  [Network.Bsc]: "0x000000000000aaeb6d7670e522a718067333cd4e",
  [Network.Optimism]: "0x000000000000aaeb6d7670e522a718067333cd4e",
  [Network.Polygon]: "0x000000000000aaeb6d7670e522a718067333cd4e",
  [Network.Arbitrum]: "0x000000000000aaeb6d7670e522a718067333cd4e",
  [Network.Avalanche]: "0x000000000000aaeb6d7670e522a718067333cd4e",
  [Network.Base]: "0x000000000000aaeb6d7670e522a718067333cd4e",
};

// Zones

export const OpenSeaProtectedOffersZone: ChainIdToAddress = {
  [Network.Ethereum]: "0x000000e7ec00e7b300774b00001314b8610022b8",
  [Network.EthereumGoerli]: "0x000000e7ec00e7b300774b00001314b8610022b8",
  [Network.EthereumSepolia]: "0x000000e7ec00e7b300774b00001314b8610022b8",
  [Network.Bsc]: "0x000000e7ec00e7b300774b00001314b8610022b8",
  [Network.Optimism]: "0x000000e7ec00e7b300774b00001314b8610022b8",
  [Network.Polygon]: "0x000000e7ec00e7b300774b00001314b8610022b8",
  [Network.Arbitrum]: "0x000000e7ec00e7b300774b00001314b8610022b8",
  [Network.Avalanche]: "0x000000e7ec00e7b300774b00001314b8610022b8",
  [Network.Base]: "0x000000e7ec00e7b300774b00001314b8610022b8",
  [Network.Zora]: "0x000000e7ec00e7b300774b00001314b8610022b8",
  [Network.ArbitrumNova]: "0x000000e7ec00e7b300774b00001314b8610022b8",
  [Network.Mumbai]: "0x000000e7ec00e7b300774b00001314b8610022b8",
  [Network.BaseGoerli]: "0x000000e7ec00e7b300774b00001314b8610022b8",
  [Network.ZoraTestnet]: "0x000000e7ec00e7b300774b00001314b8610022b8",
};

export const FxHashPausableZone: ChainIdToAddress = {
  [Network.EthereumGoerli]: "0x096cfb6826a5441a58fc13889f719651f9cf215d",
  [Network.EthereumSepolia]: "0x096cfb6826a5441a58fc13889f719651f9cf215d",
};

// TODO: Deploy to all other supported networks
export const ReservoirCancellationZone: ChainIdToAddress = {
  [Network.Ethereum]: "0xaa0e012d35cf7d6ecb6c2bf861e71248501d3226",
  [Network.EthereumGoerli]: "0x49b91d1d7b9896d28d370b75b92c2c78c1ac984a",
  [Network.Polygon]: "0xfb2b693819e866ec87e574903f6e4943723c8ff7",
  [Network.Mumbai]: "0xfb2b693819e866ec87e574903f6e4943723c8ff7",
};

export const OkxCancellationZone: ChainIdToAddress = {
  [Network.Ethereum]: "0x2de95b9afd737b0814e5e6013593a9437c5532d5",
  [Network.Optimism]: "0x2de95b9afd737b0814e5e6013593a9437c5532d5",
  [Network.Bsc]: "0x2de95b9afd737b0814e5e6013593a9437c5532d5",
  [Network.Polygon]: "0x2de95b9afd737b0814e5e6013593a9437c5532d5",
  [Network.Base]: "0x2de95b9afd737b0814e5e6013593a9437c5532d5",
  [Network.Arbitrum]: "0x2de95b9afd737b0814e5e6013593a9437c5532d5",
  [Network.ArbitrumNova]: "0x2de95b9afd737b0814e5e6013593a9437c5532d5",
  [Network.Avalanche]: "0x2de95b9afd737b0814e5e6013593a9437c5532d5",
  [Network.Zksync]: "0xea93132c3a66383d89713570fc580dc3fd296083",
  [Network.Linea]: "0x633ac791c6967b89aebf9e385f47ac03182d96c9",
  [Network.PolygonZkevm]: "0x10a8c9065692dffd48df1935e67a2744667fd9d0",
};

export const ImmutableProtectedZone: ChainIdToAddress = {
  [Network.ImmutableZkevmTestnet]: "0x63441cbfbd15dd8f5e92598e535661ac5acb808e",
};

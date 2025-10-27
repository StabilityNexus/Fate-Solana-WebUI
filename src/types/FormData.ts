export type FormData = {
  poolName: string;
  poolDescription?: string;
  pairId: string;
  assetAddress: string;
  bullCoinName: string;
  bullCoinSymbol: string;
  bearCoinName: string;
  bearCoinSymbol: string;
  protocolFee: string;
  mintFee: string;
  burnFee: string;
  poolCreatorFee: string;
  poolCreatorAddress?: string;
  initialSuiAmount?: string;
};
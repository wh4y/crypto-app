export interface CryptoStats {
    total: number,
    total24hVolume: string,
    totalCoins: number,
    totalExchanges: number,
    totalMarketCap: string,
    totalMarkets: number,
    loading: boolean,
}

export interface HomePageState {
    cryptoStats: CryptoStats,
}
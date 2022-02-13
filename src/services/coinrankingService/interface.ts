import {AxiosResponse} from "axios";
import {CryptoStats} from "../../store/reducers/homePageReducer/types/reducerTypes";
import {Coin} from "../../store/reducers/currenciesPageReducer/types/reducerTypes";

interface IResponse {
    status: 'success' | 'fail',
    data: any
}

//-----------------------------------------------

export interface GetCoinsResponse extends IResponse {
    data: {
        stats: CryptoStats,
        coins: Coin[],
    },
}

export interface GetStatsResponse extends IResponse {
    data: GetCoinsResponse['data']['stats'],
}

//_______________________________________________

interface Link {
    name: string,
    type: string,
    url: string,
}

export interface ICoin {
    uuid: string,
    symbol: string,
    name: string,
    description: string,
    color: string,
    iconUrl: string,
    websiteUrl: string,
    links: Link[],
    supply: {
        confirmed: boolean,
        total: string,
        circulating: string,
    }
    numberOfMarkets: number,
    numberOfExchanges: number,
    "24hVolume": string,
    marketCap: string,
    price: string,
    btcPrice: string,
    priceAt: number,
    change: string,
    rank: number,
    sparkline: string[],
    allTimeHigh: {
        price: string,
        timestamp: number
    }
    coinrankingUrl: string,
    tier: number,
    lowVolume: boolean,
    listedAt: number,
}

export interface GetCoinInfoResponse extends IResponse {
    data: {
        coin: ICoin,
    }
}

export default interface ICoinrankingService {
    readonly getCoins: (count?: number) => Promise<AxiosResponse<GetCoinsResponse>>,
    readonly getStats: () => Promise<GetStatsResponse>,
    readonly getCoinInfo: (uuid: string) => Promise<AxiosResponse<GetCoinInfoResponse>>,
}
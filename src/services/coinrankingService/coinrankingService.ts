import {API} from './../API';
import ICoinrankingService from "./interface";

class CoinrankingService implements ICoinrankingService {
    public readonly getCoins;
    public readonly getStats;
    public readonly getCoinInfo;

    constructor() {
        this.getCoins = async (count: number = 100) => {
            const response = await API.get(`/coins?limit=${count}`);
            return response.data;
        }
        this.getStats = async () => {
            const response = await API.get(`/stats`);
            return response.data;
        };
        this.getCoinInfo = async (uuid: string) => {
            const response = await API.get(`/coin/${uuid}`);
            return response.data.data;
        };
    }
}

export default new CoinrankingService();
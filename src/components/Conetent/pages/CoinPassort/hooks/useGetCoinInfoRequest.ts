import {useEffect, useState} from "react";
import {ICoin} from "../../../../../services/coinrankingService/interface";
import CoinrankingService from "../../../../../services/coinrankingService/coinrankingService";

export default (uuid: string) => {

    const [coin, setCoin] = useState<ICoin>();

    useEffect(() => {
        if (!coin) CoinrankingService.getCoinInfo(uuid)
            .then(response => {
                    setCoin(response.coin);
                }
            )
            .catch(console.log);
    }, [uuid, coin]);

    return coin;
}
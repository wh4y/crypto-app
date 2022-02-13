import {Coin} from "../../../../../store/reducers/currenciesPageReducer/types/reducerTypes";
import {ChangeEvent, useEffect, useState} from "react";


const setFilteredCoins = (currencies: Coin[], setCoins: Function, searchTerm: string) => {
    const filteredCoins = currencies.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setCoins(filteredCoins);
}

export default <T extends Coin[]>(currencies: T) => {
    const [coins, setCoins] = useState<Coin[]>(currencies);
    const [searchTerm, setTerm] = useState('');

    const handleInputChange = <T extends ChangeEvent<HTMLInputElement>>(e: T) => setTerm(e.currentTarget.value);

    useEffect(() => setFilteredCoins(currencies, setCoins, searchTerm), [currencies, searchTerm]);

    return {
        coins,
        handleInputChange,
        searchTerm
    }
}
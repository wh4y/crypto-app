import React, {FC, useEffect, useState} from 'react';
import {Col, Input, Row} from "antd";
import './styles/currenscies.scss';
import useGetCurrenciesRequest from "./hooks/useGetCurrenciesRequest";
import {useScrollTo} from "../../../../Packages/useScrollTo";
import useCurrencySearch from "./hooks/useCurrencySearch";
import Text from "antd/es/typography/Text";
import CurrenciesSkeleton from "./CurrenciesSkeleton/CurrenciesSkeleton";
import CurrencyCard from "./CurrencyCard/CurrencyCard";


interface IProps {
    simplified: boolean,
}

const Currencies: FC<IProps> = ({simplified}) => {
    const {currencies, loading} = useGetCurrenciesRequest(simplified);
    const {coins, handleInputChange, searchTerm} = useCurrencySearch(currencies);

    useScrollTo(0, 0);

    return (
        <>
            {
                simplified ?
                    null :
                    <Input
                        className={'currency-input'}
                        placeholder={'input coin name...'}
                        value={searchTerm} type="text"
                        onChange={handleInputChange}
                    />
            }
            <Row className={'currencies-holder'} gutter={[32, 32]}>
                {
                    (coins.length !== 0) ? coins.map((item) =>
                        <CurrencyCard key={item.uuid} item={item}/>
                    ) : loading ?
                        null :
                        <Col className={'search-message__oops'} span={24} key={'oops-search-message'}>
                            <Text>oops... we have nothing to show you.</Text>
                        </Col>
                }
                {
                    loading ? <CurrenciesSkeleton loading={loading}/> : null
                }
            </Row>
        </>
    );
};

export default Currencies;
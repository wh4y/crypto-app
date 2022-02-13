import React, {FC, useEffect} from 'react';
import {Card, Col} from "antd";
import {Link} from "react-router-dom";
import millify from "millify";
import {Coin} from "../../../../../store/reducers/currenciesPageReducer/types/reducerTypes";

interface IProps {
    item: Coin,
}

const CurrencyCard: FC<IProps> = ({item}) => {

    return (
        <Col className={'currency-holder'} xs={12} md={8} lg={6} key={item.uuid}>
            {
                <Card extra={<img className={'currency-icon'} src={item.iconUrl}/>} hoverable
                      title={item.name}>
                    <Link className={'card-link'} to={`/currency/${item.uuid}`}/>
                    <p>Price: {millify(+item.price)}</p>
                    <p>Market Cap: {millify(+item.marketCap)}</p>
                    <p>Daily Change: {millify(+item.change)}</p>
                </Card>
            }
        </Col>
    );
};

export default CurrencyCard;
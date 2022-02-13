import React, {FC} from 'react';
import {useParams} from "react-router-dom";
import useGetCoinInfoRequest from "./hooks/useGetCoinInfoRequest";
import {useScrollTo} from "../../../../Packages/useScrollTo";
import Title from 'antd/lib/typography/Title';
import {Skeleton} from "antd";
import './styles/coinPassport.scss';


const CoinPassport: FC = () => {

    const uuid = useParams<'uuid'>().uuid;

    let coin = useGetCoinInfoRequest(uuid as string);

    useScrollTo(0, 0);

    return (
        <div className={'coin-passport'}>
            <Title>
                {
                    coin ?
                        <>
                            <div className={'coin-passport__header'}>{coin?.name} <img src={coin.iconUrl} alt="ava"/>
                            </div>
                            <div
                                className={'coin-passport__description'}
                                dangerouslySetInnerHTML={{__html: coin!.description}}
                            />
                        </> :
                        <>
                            <Skeleton active paragraph={{rows: 0}}/>
                            <Skeleton active paragraph={{rows: 5}}/>
                            <Skeleton active paragraph={{rows: 7}}/>
                            <Skeleton active paragraph={{rows: 6}}/>
                            <Skeleton active paragraph={{rows: 4}}/>
                        </>
                }
            </Title>
        </div>
    );
};

export default CoinPassport;
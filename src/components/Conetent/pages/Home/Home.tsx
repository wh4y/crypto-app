import React, {FC} from 'react';
import {Col, Row, Skeleton, Typography} from "antd";
import './styles/home.scss';
import useGetCryptoStatsRequest from "./hooks/useGetCryptoStatsRequest";
import millify from "millify";
import Currencies from "../Currencies/Currencies";
import {useScrollTo} from "../../../../Packages/useScrollTo";

const {Title} = Typography;

const Home: FC = () => {

    useScrollTo(0, 0);

    const {
        totalCoins,
        totalExchanges,
        totalMarketCap,
        total24hVolume,
        totalMarkets,
        loading
    } = useGetCryptoStatsRequest();



    return (
        <Typography className={'home-content'}>
            <article className={'home-content__article'}>
                <Title level={2} className={'page-title'}>
                    Global Crypto Statistics
                </Title>
                <Row>
                    <Col span={12} sm={8} className={'home-content__fragment'}>
                        <Title level={5} className={'home-content__subtitle'}>Total Crypto Currencies</Title>
                        {
                            loading ? <Skeleton active paragraph={{rows: 0}}/> :
                                <span className={'home-content__text'}>{totalCoins}</span>
                        }
                    </Col>
                    <Col span={12} sm={8} className={'home-content__fragment'}>
                        <Title level={5} className={'home-content__subtitle'}>Total Exchanges</Title>
                        {
                            loading ? <Skeleton active paragraph={{rows: 0}}/> :
                                <span className={'home-content__text'}>{totalExchanges}</span>
                        }
                    </Col>
                    <Col span={12} sm={8} className={'home-content__fragment'}>
                        <Title level={5} className={'home-content__subtitle'}>Total Market Cap</Title>
                        {
                            loading ? <Skeleton active paragraph={{rows: 0}}/> :
                                <span className={'home-content__text'}>{millify(+totalMarketCap)}</span>
                        }
                    </Col>
                    <Col span={12} sm={8} className={'home-content__fragment'}>
                        <Title level={5} className={'home-content__subtitle'}>Total 24h Volume</Title>
                        {
                            loading ? <Skeleton active paragraph={{rows: 0}}/> :
                                <span className={'home-content__text'}>{millify(+total24hVolume)}</span>
                        }
                    </Col>

                    <Col md={12} sm={8} className={'home-content__fragment'}>
                        <Title level={5} className={'home-content__subtitle'}>Total Markets</Title>
                        {
                            loading ? <Skeleton active paragraph={{rows: 0}}/> :
                                <span className={'home-content__text'}>{totalMarkets}</span>
                        }
                    </Col>
                </Row>
            </article>
            <article>
                <Title level={2} className={'page-title'}>
                    Top 10 Crypto Currencies
                </Title>
                <div className={'home-content__fragment'}>
                    <Title level={5} className={'home-content__subtitle home-content__subtitle_mb'}>Top 10 Crypto Currencies</Title>
                    <Currencies simplified={true}/>
                </div>
            </article>
        </Typography>
    );
};

export default Home;
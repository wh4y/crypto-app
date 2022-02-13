import {Card, Col, Skeleton} from "antd";
import React, {FC} from "react";

interface IProps {
    loading: boolean
}

const CurrenciesSkeleton: FC<IProps> = ({loading}) => {
    return (
        <>
            {
                (new Array(50)).fill(0, 0, 50).map((_, i) => <Col key={'skeleton_card_' + i} xs={21} sm={12}
                                                                  md={8}
                                                                  lg={6}>
                    <Card
                        className={'skeleton_currency_card'}
                    >
                        <Skeleton loading={loading} avatar active paragraph={{rows: 4}}/>
                    </Card>
                </Col>)
            }
        </>
    );
}

export default CurrenciesSkeleton;
import React, {FC} from 'react';
import {Breadcrumb, Typography} from "antd";
import './styles/footer.scss';
import {NavLink} from "react-router-dom";

const {Title} = Typography;

const Footer: FC = () => {
    return (
        <footer className={'footer'}>
            <div className={'footer__content-holder'}>
                <Title level={2} className={'footer__title'}>
                    All rights reserved
                </Title>
                <Breadcrumb className={'footer__breadcrumb'}>
                    <Breadcrumb.Item>
                        <NavLink to="/">Home</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <NavLink to="/currencies">Currencies</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <NavLink to="/exchanges">Exchanges</NavLink>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <NavLink to="/news">News</NavLink>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </footer>
    );
};

export default Footer;
import React, {FC} from 'react';
import {Dropdown, Typography, Menu as AntdMenu} from "antd";
import './styles/menu.scss'
import {NavLink} from "react-router-dom";
import burgerMenuIcon from './../../../images/burger-menu-icon.png';
import {AlignLeftOutlined, AreaChartOutlined, HomeOutlined, TransactionOutlined} from "@ant-design/icons";

const dropDownMenu = (
    <AntdMenu>
        <AntdMenu.Item key={'dropdown-home-elem'}>
            <NavLink to={'/'}>
                <HomeOutlined/><span>Home</span>
            </NavLink>
        </AntdMenu.Item>
        <AntdMenu.Item key={'dropdown-currencies-elem'}>
            <NavLink to={'/currencies'}>
                <AreaChartOutlined/><span>Currencies</span>
            </NavLink>
        </AntdMenu.Item>
        <AntdMenu.Item key={'dropdown-exchanges-elem'}>
            <NavLink to={'/exchanges'}>
                <TransactionOutlined/><span>Exchanges</span>
            </NavLink>
        </AntdMenu.Item>
        <AntdMenu.Item key={'dropdown-news-elem'}>
            <NavLink to={'/news'}>
                <AlignLeftOutlined/><span>News</span>
            </NavLink>
        </AntdMenu.Item>
    </AntdMenu>
);

const Menu: FC = () => {
    return (
        <Typography className={'navigation__menu'}>
            <NavLink to={'/'}>
                <HomeOutlined/><span>Home</span>
            </NavLink>
            <NavLink to={'/currencies'}>
                <AreaChartOutlined/><span>Currencies</span>
            </NavLink>
            <NavLink to={'/exchanges'}>
                <TransactionOutlined/><span>Exchanges</span>
            </NavLink>
            <NavLink to={'/news'}>
                <AlignLeftOutlined/><span>News</span>
            </NavLink>
            <Dropdown className={'dropdown-menu'} overlay={dropDownMenu} trigger={['click']}>
                <img
                    className={'burger-icon'}
                    src={burgerMenuIcon}
                    alt="burger menu icon"
                />
            </Dropdown>
        </Typography>
    );
};

export default Menu;
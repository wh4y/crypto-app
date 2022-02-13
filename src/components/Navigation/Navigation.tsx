import React, {FC} from 'react';
import logo from './../../images/logo.png';
import './styles/navigation.scss';
import {Link} from "react-router-dom";
import Menu from "./Menu/Menu";


const Navigation: FC = () => {
    return (
        <div className={'navigation'}>
            <Link to={'/'} className={'navigation__logo-container'}>
                <img src={logo} className="navigation__logo"/>
            </Link>
            <Menu/>
        </div>
    );
};

export default Navigation;
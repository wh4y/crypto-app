import React, {FC} from 'react';
import './styles/content.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Currencies from "./pages/Currencies/Currencies";
import Exchanges from "./pages/Exchanges/Exchanges";
import News from "./pages/News/News";
import CoinPassport from "./pages/CoinPassort/CoinPassport";

const Content: FC = () => {
    return (
        <main className={'content-holder'}>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/currencies'} element={<Currencies simplified={false}/>}/>
                <Route path={'/exchanges'} element={<Exchanges/>}/>
                <Route path={'/news'} element={<News/>}/>
                <Route path={'/currency/:uuid'} element={<CoinPassport/>}/>
            </Routes>
        </main>
    );
};

export default Content;



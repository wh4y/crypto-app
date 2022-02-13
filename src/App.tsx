import React from 'react';
import './app.scss';
import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Conetent/Content";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="app-container">
            <div className={'app-container__upper-elements'}>
                <Navigation/>
                <Content/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;

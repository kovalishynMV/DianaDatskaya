import React from 'react';
import './header.css';
import logo from './img/logo.svg';
import bg from './img/bg.png';

class Header extends React.Component {
    render() {
        return (
            <div className="header-main">
                <div className="center-header">
                    <div className="logo" />
                </div>

                <div className="page-name-block">
                    <p className="page-name">ГЛАВНАЯ</p>
                    <p className="page-name">МАГАЗИН</p>
                    <p className="page-name">ДОСТАВКА И ОПЛАТА</p>
                    <p className="page-name">О НАС</p>
                    <p className="page-name">КОНТАКТЫ</p>
                    <p className="page-name">БЛОГ</p>
                </div>
            </div>
        );
    }
}

export default Header;
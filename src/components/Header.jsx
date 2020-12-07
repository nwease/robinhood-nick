import React from 'react';
import '../css/Header.css';
import Logo from '../assets/robinhood.svg';

function Header() {
    return (
        <div className='header'>
            <h1>
                HEADER
            </h1>

            <div className='header__wrapper'>
                <div className='header__logo'>
                    <img src={Logo} width={25} alt='Robinhood Logo'/>
                </div>

                <div className='header__search'>
                    <div className='header__searchContainer'>
                        <input type='text' placeholder='Search'/>
                    </div>
                </div>

                <div className='header__menuItems'>
                    <a href='#'>
                        Free Stocks
                    </a>

                    <a href='#'>
                        Portfolio
                    </a>

                    <a href='#'>
                        Cash
                    </a>

                    <a href='#'>
                        Messages
                    </a>

                    <a href='#'>
                        Account
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
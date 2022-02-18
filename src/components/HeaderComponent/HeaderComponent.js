import React from "react";
import styles from './HeaderComponent.module.scss'
import logo from '../../assets/logo.png';

export const HeaderComponent = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header__user}>
                    <img src={logo} alt="logo"/>
                    <span>Chuck Norris</span>
                </div>
            </div>
        </header>
    );
};

import React from "react";
import styles from './JokeComponent.module.scss'
import chuck from '../../assets/chuck.png';

export const JokeComponent = ({joke}) => {
    return (
        <div className={styles.joke}>
            <div className="container">
                <div className={`${styles.joke__area} mt-150`}>
                    <span>{joke}</span>
                </div>
                <img className={styles.joke__image} src={chuck} alt="Chuck"/>
            </div>
        </div>
    );
};

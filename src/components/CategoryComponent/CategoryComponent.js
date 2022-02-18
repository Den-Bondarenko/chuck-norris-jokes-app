import React, {useContext} from "react";
import styles from './CategoryComponent.module.scss'
import {ActiveCategoryJokeContext} from "../../contexts/ActiveCategoryJokeContext";
import {getRandomCategoryJoke} from "../../api/queries";

export const CategoryComponent = ({name}) => {
    const {activeCategory, setActiveCategory, setJoke} = useContext(ActiveCategoryJokeContext);
    const onCategoryClick = (category) => {
        if(category === activeCategory) {
            return;
        }

        setActiveCategory(category);
        getRandomCategoryJoke(category).then(({value}) => setJoke(value))
    };

    return (
        <div
            onClick={() => onCategoryClick(name)}
            className={`${styles.category} ${activeCategory === name ? styles.categoryActive : ""}`}
        >{name}</div>
    );
};
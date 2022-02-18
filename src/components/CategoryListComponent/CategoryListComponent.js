import React from "react";
import {CategoryComponent} from "../CategoryComponent/CategoryComponent";
import styles from './CategoryListComponent.module.scss'

export const CategoryListComponent = ({categories}) => {
    const categoryList = categories.map((name, index) => <CategoryComponent key={index} name={name.toLowerCase()}/>);

    return (
        <div className={`${styles.categories} mt-30`}>{categoryList}</div>
    );
};

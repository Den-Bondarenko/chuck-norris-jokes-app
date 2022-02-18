import React, {useEffect, useState} from "react";
import {CategoryListComponent} from "../CategoryListComponent/CategoryListComponent";
import {JokeComponent} from "../JokeComponent/JokeComponent";
import {getAllCategories, getRandomJoke} from "../../api/queries";
import {ActiveCategoryJokeContext} from "../../contexts/ActiveCategoryJokeContext";

export const HeroSectionComponent = () => {
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState("");
    const [joke, setJoke] = useState("");
    const value = {activeCategory, setActiveCategory, joke, setJoke};


    useEffect( () => {
        getAllCategories().then(setCategories);
        getRandomJoke().then(({value}) => setJoke(value));
    }, []);

    return (
        <div className="container text-center">
            <h1>Categories</h1>
            <ActiveCategoryJokeContext.Provider value={value}>
                <CategoryListComponent categories={categories}/>
                <JokeComponent joke={joke}/>
            </ActiveCategoryJokeContext.Provider>
        </div>
    );
};

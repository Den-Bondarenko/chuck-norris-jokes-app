import {createContext} from 'react';
export const ActiveCategoryJokeContext = createContext({
    activeCategory: "",
    setActiveCategory: () => {},
    joke: "",
    setJoke: () => {},
});
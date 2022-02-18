import {url} from "./api-path";

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const json = await response.json();

        return json;
    } catch (error) {
        throw new Error("Something wrong");
    }
};

export const getRandomJoke = async () => await fetchData(`${url}/random`);
export const getRandomCategoryJoke = async (category) => fetchData(`${url}/random?category=${category}`);
export const getAllCategories = async () => fetchData(`${url}/categories`);
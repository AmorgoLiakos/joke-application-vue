import {fetchData} from "@/composables/fetchData.js";

export const toggleCollection =  async (jokeID) => {
    let currentJoke = await fetchData('https://official-joke-api.appspot.com/jokes/'+jokeID);
    let currentCollection = localStorage.getItem('myCollection') || '[]'
    let currentCollectionParsed = JSON.parse(currentCollection);

    const isIncluded = currentCollectionParsed.some( joke => joke.id === currentJoke.id);

    if (isIncluded) {
        currentCollectionParsed = currentCollectionParsed.filter(joke => joke.id !== currentJoke.id);
    }else {
        currentCollectionParsed.push(currentJoke)
    }

    localStorage.setItem('myCollection', JSON.stringify(currentCollectionParsed));
}
import {ref, onMounted} from 'vue'
import {defineStore} from 'pinia'
import {fetchData} from "@/composables/fetchData.js";

export const useCollectionStore = defineStore('collection', ()=>{
    const collection = ref()
    const searchedJokes = ref('')

    const fillCollection = ()=> {
        let currentCollection = localStorage.getItem('myCollection') || '[]'
        collection.value = JSON.parse(currentCollection);
    }

    const fillSearchCollection = ()=> {
        let currentCollection = localStorage.getItem('myCollection') || '[]'
        searchedJokes.value = JSON.parse(currentCollection);
    }

    const toggleJokeFromCollection =  async (jokeID) => {
        let currentJoke = await fetchData('https://official-joke-api.appspot.com/jokes/'+jokeID);
        const isIncluded = collection.value.some( joke => joke.id === currentJoke.id);

        if (isIncluded) {
            collection.value = collection.value.filter(joke => joke.id !== currentJoke.id);
        }else {
            collection.value.push(currentJoke)
        }

        const isIncludedSearched = searchedJokes.value.some( joke => joke.id === currentJoke.id);

        if (isIncludedSearched) {
            searchedJokes.value = searchedJokes.value.filter(joke => joke.id !== currentJoke.id);
        }else {
            searchedJokes.value.push(currentJoke)
        }

        localStorage.setItem('myCollection', JSON.stringify(collection.value));
    }

    const inCollectionCheck = (idToCheck) => {
        return collection.value.some( joke => joke.id === idToCheck);
    }

    const searchFunc = (stringInput) => {
        searchedJokes.value = collection.value.filter(joke => joke.setup.toLowerCase().includes(stringInput.toLowerCase()) || joke.punchline.toLowerCase().includes(stringInput.toLowerCase()));
    }

    const sortFunc = () => {
        searchedJokes.value.sort((joke1, joke2) => {
            return joke1.setup.toLowerCase() > joke2.setup.toLowerCase() ? 1 : -1;
        })
        localStorage.setItem('myCollection', JSON.stringify(searchedJokes.value));
    }

    onMounted(() => {
        fillCollection()
        fillSearchCollection()
    })

    return {
        collection,
        searchedJokes,
        toggleJokeFromCollection,
        inCollectionCheck,
        searchFunc,
        sortFunc
    }
})


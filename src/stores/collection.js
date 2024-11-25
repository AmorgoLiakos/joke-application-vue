import {ref, onMounted} from 'vue'
import {defineStore} from 'pinia'
import {fetchData} from "@/composables/fetchData.js";

export const useCollectionStore = defineStore('collection', ()=>{
    const collection = ref({})

    const fillCollection = ()=> {
        let currentCollection = localStorage.getItem('myCollection') || '[]'
        collection.value = JSON.parse(currentCollection);
    }

    const toggleJokeFromCollection =  async (jokeID) => {
        let currentJoke = await fetchData('https://official-joke-api.appspot.com/jokes/'+jokeID);
        const isIncluded = collection.value.some( joke => joke.id === currentJoke.id);

        if (isIncluded) {
            collection.value = collection.value.filter(joke => joke.id !== currentJoke.id);
        }else {
            collection.value.push(currentJoke)
        }

        localStorage.setItem('myCollection', JSON.stringify(collection.value));
    }

    const inCollectionCheck = (idToCheck) => {
        return collection.value.some( joke => joke.id === idToCheck);
    }

    onMounted(() => {
        fillCollection()
    })

    return {
        collection,
        toggleJokeFromCollection,
        inCollectionCheck
    }
})


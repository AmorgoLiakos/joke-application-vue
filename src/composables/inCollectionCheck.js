export const inCollectionCheck = (idToCheck) => {
    let currentCollection = localStorage.getItem('myCollection') || '[]'
    let currentCollectionParsed = JSON.parse(currentCollection);
    return currentCollectionParsed.some( joke => joke.id === idToCheck);
}
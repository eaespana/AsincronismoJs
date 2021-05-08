const fetchData = require('./../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
    .then(data => {
        console.log(data.info.count);
        // Se vuelve a hacer la promesa el personaje de 1 => Rick
        return fetchData(`${API}${data.results[0].id}`);
    })
    .then(data => {
        // Se espera a que la primera promesa se cumpla.
        console.log(data.name);
        // Se vuelve a hacer la promesa para saber la dimensión de Rick
        return fetchData(data.origin.url)
    })
    .then(data => {
        // Obtenemos la dimensión de Rick
        console.log(data.dimension);
    })
    // Si existe error.
    .catch(err => {
        console.log(err);
    });
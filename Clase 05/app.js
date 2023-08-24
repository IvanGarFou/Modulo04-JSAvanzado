// Consumir la API DE Rick and Morty y nos va a mostrar los caracteres
const axios = require('axios')

//Constante con la URL de la api
const urlAPI = 'https://rickandmortyapi.com/api/character'

//Funcion para obtener y mostrar los datos 
async function getCharacters() {
    try{
        //Codigo Principal 
        const response = await axios.get(urlAPI)
        const characters = response.data.results

        console.log('Personajes de Rick and Morty')
        characters.forEach(character => {
            console.log(`${character.name}`)
            console.log(`${character.gender}`)
        })


    }catch(error){
        //Muestre un error
        console.log('Error al obtener la informacion', error)
    }
}

getCharacters()

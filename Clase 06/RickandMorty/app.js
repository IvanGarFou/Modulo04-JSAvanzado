const characterContainer = document.getElementById('characters')
const urlAPI = 'https://rickandmortyapi.com/api/character'

function displayChar(characters) {
    characters.forEach(character => {
        const characterDiv = document.createElement('div')

        characterDiv.innerHTML = 
            `<h2>${character.name}</h2>
             <p>${character.status}</p>
             <img src="${character.image}" alt="${character.name}">
            `;
        
        characterContainer.appendChild(characterDiv)
    } )
}

//Obtener los datos de la api
fetch(urlAPI)
    .then(response => response.json()) //Recibimos la respuesta en un formato JSON
    .then(data => {
        const characters = data.results  //Los datos de mi resultado los almacenamos en mi constante
        console.log(characters)
        displayChar(characters)  //Llamamos a la funcion display junto con los datos
    })
    .catch(error => console.log('Error: ', error))

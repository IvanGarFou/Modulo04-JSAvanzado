const characterContainer = document.getElementById('characters');

const urlApi = 'https://pokeapi.co/api/v2/pokemon';

function displayChar(characters) {
    characters.forEach(character => {
        const characterDiv = document.createElement('div');

        characterDiv.innerHTML = 
            `<h2 class="card-title">${character.name}</h2>
            <img src="${character.sprites}" alt="${character.name}">
            `;
        characterContainer.appendChild(characterDiv);
    });
}


fetch(urlApi)
    .then(response => response.json())
    .then(data => {
        const characters = data.results;
        console.log(characters);
        displayChar(characters)
    })
    .catch(error => console.log('error: ', error))
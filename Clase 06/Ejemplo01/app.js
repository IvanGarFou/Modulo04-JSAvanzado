const axios = require('axios')
const urlAPI = 'https://randomuser.me/api/'

axios.get(urlAPI)
    .then(response => {
        const userData = response.data.results[0]

        console.log('Nombre: ', userData.name.first, userData.name.last)
        console.log('Email: ', userData.email)
        
    } )
    .catch(error => {
        console.log('Hubo un error al consumir la api', error)
    })
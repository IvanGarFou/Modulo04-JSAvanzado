//Simular una solicitud a un servidor para obtener datos del usuario
const userData = (userId) => {
    return new Promise((resolve, reject) => {

        setTimeout(() =>{
            
            const usersData = {
                1: {name: 'Ivan', age: 122},
                2: {name: 'Dolores', age: 120},
                3: {name: 'Miguel', age: 90}
            }

            const userData = usersData[userId]

            if(userData){
                resolve(userData) //Si la promesa se cumple
            }else{
                reject(new Error('Usuario no encontrado')) //Si la promesa lo rechaza
            }
        }, 2000)
    })
}


userData(4)
    .then((user) => {console.log("Datos del usuario", user)})
    .catch((error) => {console.log('Error al obtener datos: ', error)})
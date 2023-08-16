
const promesa = new Promise((resolve, reject ) => {
    //Nosotros vamos a crear una tarea asincrona
    setTimeout(() => {
        const exito = false 

        if(exito){
            resolve("Operacion ha sido completada de manera exitosa")
        }else{
            reject("Error 404 Not Found")
        }

    }, 2000)
})

promesa
    .then(resultado => {
        console.log(resultado)
    })
    .catch(error => {
        console.log(error)
    })
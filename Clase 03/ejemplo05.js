const calcularOperacion = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            if(typeof numero !== 'number'){
                reject(new Error('El valor no es un numero'))
            }else{
                const resultado = numero * 5
                resolve(resultado)
            }
        }, 2000)
    })
}

calcularOperacion('HolaMundo').then((resultado) => { console.log(resultado)}).catch((error) => {console.log(error)})
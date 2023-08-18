function prepararPizza(especialidad, tiempo) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Pizza preparada:${especialidad}`)
        }, tiempo);
    })
}

//arreglo de promesas
const ordenPizzas = [
    prepararPizza('Hawaiana',2000),
    prepararPizza('3 Quesos',3000),
    prepararPizza('Mexicana', 4000),
    prepararPizza('Napolitana',1500)
]


//Con promesas
/*
Promise.all(ordenPizzas)
    .then(pizzas => {
        pizzas.map(pizza => console.log(pizza))
    })
    .catch(error => console.error(error))
*/

//Con async await
async function mandarOrdenPizzas() {
    try{
        const pizzasPreparadas = await Promise.all(ordenPizzas)
        pizzasPreparadas.map(pizza => console.log(pizza))
    }catch(error){
        console.error(error)
    }
}

mandarOrdenPizzas()
//Proceso para crear una pizza

//1. Reunir los ingredientes

function reunirIngredientes() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Ingredientes reunidos')
        }, 2000);
    })
}

//2. Armar la masa

function prepararMasa() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Masa cocida')
        }, 1500);
    }
    )
}

function agregarToppings() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Toppings agregados')
        }, 500);
    }
    )
}

function hornearPizza() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(false)
                resolve('Pizza horneada')
            else
                reject(new Error('Se quemó la pizza'))
        }, 2500);
    }
    )
}

//Promesas

reunirIngredientes()
.then(
    ingredientes => {
        console.log("HACER PIZZA CON PROMESAS")
        console.log(ingredientes)
        return prepararMasa()
    }
).then(
    masaPreparada => {
        console.log(masaPreparada)
        return agregarToppings()
    }
).then(
    toppingAgregado => {
        console.log(toppingAgregado)
        return hornearPizza()
    }
).then(
    pizzaPreparada => {
        console.log(pizzaPreparada)
        console.log('Lista para comer!')
    }
).catch(
    error => console.log('Error en la pizzeria', error)
).finally( () =>
    console.log('Cerrar pizzeria')
)


//Async/await
/*
async function preparaPizza() {
    try{

        const ingredientes = await reunirIngredientes()
        console.log("HACER PIZZA CON ASYNC/AWAIT")
        console.log(ingredientes)
    
        const masa = await prepararMasa()
        console.log(masa)
    
        const toppings = await agregarToppings()
        console.log(toppings)
    
        const pizzaHorneada = await hornearPizza()
        console.log(pizzaHorneada)
        console.log('Lista para comer!')
    }catch(error){
        console.log('Error en la pizzeria', error)
    }finally{
        console.log('Cerrar pizzeria')
    }
}

preparaPizza()*/
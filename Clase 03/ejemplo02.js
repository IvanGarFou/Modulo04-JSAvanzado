const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10)

    setTimeout(
        () => number > 5 ? resolve(number) : reject(new Error('Menor a 5')), 2000
    )
})

promise
    .then(number => console.log(number))
    .catch(error => console.error(error))
    .finally(() => {console.log('Tarea Finalizada')})

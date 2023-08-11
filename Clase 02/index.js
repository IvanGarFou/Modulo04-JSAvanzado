const taskInput = document.getElementById("taskInput")
const addTaskBtn = document.getElementById("addTaskBtn")
const taskList = document.getElementById("taskList")

function cleanInput() {
    taskInput.value =""
}

function agregarTarea(description, callback) {
    setTimeout(() => {
        //Creo la tarea
        const listItem = document.createElement('li')
        listItem.className ='list-group-item' //Diseño de bootstrap
        listItem.textContent = description
        //Agrego a la lista de tareas
        taskList.appendChild(listItem)
        callback()
    }, 500);
}


addTaskBtn.addEventListener('click', function() {
    const description = taskInput.value.trim()
    //console.log(description)
    if(description !== ''){
        agregarTarea(description, cleanInput)
    }
})
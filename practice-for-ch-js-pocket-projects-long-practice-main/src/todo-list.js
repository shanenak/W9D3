const todoForm = document.querySelector(".add-todo-form")
const lsItems = JSON.parse(window.localStorage.getItem("todos")) || [];

const addTodoListener = function(event) {
    event.preventDefault();
    let input = document.querySelector("input[name='add-todo']")
    lsItems.push({name: input.value, done: false})
    localStorage.setItem("todos", JSON.stringify(lsItems))
    addToDos()
}


export const addToDos = function(){
    const todosList = document.querySelector(".todos")
    lsItems.forEach((ele) => {
        const li = document.createElement("li")
        const label = document.createElement("label")
        label.innerText = ele.value;
        const input = document.createElement("input")
        input.type = "checkbox"
        label.appendChild(input)
        li.appendChild(label)
        todosList.appendChild(li)
    })
}

export const todoList = function () {
    todoForm.addEventListener("submit", addTodoListener);
}

let input = document.getElementById("input");
let addBtn = document.getElementById("plus-btn");
let ul = document.getElementsByTagName("ul")[0];

const todoEl = [];

function createTodo() {
    ul.innerHTML = '';

    todoEl.forEach((todo, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <div class="text">${todo.inputText}</div>
        <div class="btn">
            <i class="fa-solid fa-pen-to-square edit" onclick="editTodo(${index})"></i>
            <i class="fa-sharp fa-solid fa-trash delete" onclick="deleteTodo(${index})"></i>
        </div>
        `;

        ul.appendChild(li);
    })

}


function addTodo(e) {
    e.preventDefault();

    const inputText = input.value;

    if (inputText.trim() !== '') {

        const todo = {
            inputText: inputText
        };
        todoEl.push(todo);

        createTodo()
        input.value = '';
    }

}

// Editing Todo list
function editTodo(index) {
    const todo = todoEl[index].inputText;

    input.value = todo;

    todoEl.splice(index, 1);

    createTodo();
}


//////// Deleting Todo
function deleteTodo(index) {
    todoEl.splice(index, 1);

    createTodo();
}

addBtn.addEventListener("click", addTodo);
createTodo();
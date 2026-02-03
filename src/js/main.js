const container = document.getElementById('container'),
    btn_add = document.getElementById('btn_add'),
    title = document.getElementById('title'),
    desc = document.getElementById('desc'),
    filter = document.getElementById("filter");

function cheked() {
    const todos = JSON.parse(localStorage.getItem("todos")) ?? [];
    return todos;
}

function addTodo() {
    if (title.value.trim() === "" || desc.value.trim() === "")
        return;

    const todo = {
        title: title.value,
        desc: desc.value,
        completed: false
    }
    const todos = cheked();
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
    title.value = "";
    desc.value = "";
}

function renderTodos() {
    const todos = cheked();
    container.innerHTML = "";
    todos.forEach((todo, index) => {
        const todoElement = document.createElement("div");
        todoElement.classList.add("card");
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = todo.title;
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerText = todo.desc;
        const completeButton = document.createElement("button");
        completeButton.classList.add("btn", "btn-primary");
        completeButton.style.backgroundColor = todo.completed ? "green" : "primary";
        completeButton.dataset.role = index;
        completeButton.innerText = todo.completed ? "Completed" : "Mark as Completed";
        todoElement.appendChild(cardBody);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(completeButton);
        container.appendChild(todoElement);
    });

}

renderTodos();
btn_add.addEventListener("click", addTodo);

document.addEventListener("click", function (e) {
    if (e.target.dataset.role) {
        const index = e.target.dataset.role;
        const todos = cheked();
        todos[index].completed = true;
        localStorage.setItem("todos", JSON.stringify(todos));
        renderTodos();
    }
});

filter.addEventListener("input", filter_todos)

function filter_todos() {
    const todos = cheked();
    container.innerHTML = "";
    todos.forEach((todo, index) => {
        if (todo.title.toLowerCase().includes(filter.value.toLowerCase())) {
            const todoElement = document.createElement("div");
            todoElement.classList.add("card");
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.innerText = todo.title;
            const cardText = document.createElement("p");
            cardText.classList.add("card-text");
            cardText.innerText = todo.desc;
            const completeButton = document.createElement("button");
            completeButton.classList.add("btn", "btn-primary");
            completeButton.style.backgroundColor = todo.completed ? "green" : "primary";
            completeButton.dataset.role = index;
            completeButton.innerText =
                todo.completed ? "Completed" : "Mark as Completed";
            todoElement.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(completeButton);
            container.appendChild(todoElement);


        }
    });
}
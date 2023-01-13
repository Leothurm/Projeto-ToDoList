// seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let oldInputValue;

//funções
const saveTodo = (text) => {

    const todo = document.createElement("div")
        todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
        todoTitle.innerHTML = text
        // cria uma constante e o valor atribuido será o que a pessoa digitar no input
        todo.appendChild(todoTitle)

        const doneBtn = document.createElement("button")
        doneBtn.classList.add("finish-todo")
        doneBtn.innerHTML = '<i class="fa-solid fa-check btn-icon"></i>'
        todo.appendChild(doneBtn)

        const editBtn = document.createElement("button")
        editBtn.classList.add("edit-todo")
        editBtn.innerHTML = '<i class="fa-solid fa-pen btn-icon"></i>'
        todo.appendChild(editBtn)
        
        const deleteBtn = document.createElement("button")
        deleteBtn.classList.add("remove-todo")
        deleteBtn.innerHTML = '<i class="fa-solid fa-xmark btn-icon"></i>'
        todo.appendChild(deleteBtn)

        console.log(todo)

    todoList.appendChild(todo)
    //faz adicionar na lista da tela



    todoInput.value="";
    todoInput.focus();
    //faz apos adicionar uma tarefa, zerar o input e voltar automaticamente para adicionar outra tarefa
};

const toggleForms = () => {
    editForm.classList.toggle("hide")
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
    //faz adicionar a class "hide" nesses elementos
}

const updateTodo = (text) => {
    const todos = document.querySelectorAll(".todo")

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3")

        if(todoTitle.innerHTML === oldInputValue){
            todoTitle.innerText = text
        }
    }) 
}

//Eventos

todoForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    /*esse evento acima faz o botão de adicionar a tarefa executar e não
    recarregar a página*/ 

    const inputValue = todoInput.value
    if(inputValue){
        saveTodo(inputValue)
        //save todo
    }
});

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    //constante para mapear os botoes que serão selecionados
    const parentEl = targetEl.closest("div")
    // constante para identificar a div mais proxima ao elemento clickado
    let todoTitle;

    if(parentEl && parentEl.querySelector("h3")){
        todoTitle = parentEl.querySelector("h3").innerText;
    }


    if(targetEl.classList.contains("finish-todo")){
        //esse if faz identificar o botão que eu quero selecionar procurando o texto finish-todo
        parentEl.classList.toggle("done")
        //faz adicionar uma classe na div ao clickar no botao e des-selecionar ao clickar novamente
    }

    if (targetEl.classList.contains("remove-todo")){
        parentEl.remove()
    }

    if(targetEl.classList.contains("edit-todo")){
        toggleForms();

        editInput.value = todoTitle
        oldInputValue = todoTitle
    }

});

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault()
    toggleForms()
});

editForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const editInputValue = editInput.value

    if(editInputValue){
        updateTodo(editInputValue)
    }

    toggleForms()
})
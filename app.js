const todoForm = document.querySelector('#todo-form')



'use strict';
let banco = [
    {'tarefa': 'Estudar JS' },
    {'tarefa': 'Malhar' }

]



const criarItem = (tarefa) => {
    const item = document.createElement("div");
    item.classList.add("todo-item");
    item.innerHTML = `
        <h3>${tarefa}</h3>
    <button class="finish-todo">
        <i class="fa-solid fa-check btn-icon"></i>
    </button>
    <button class="edit-todo">
        <i class="fa-solid fa-pen btn-icon"></i>
    </button>
    <button class="remove-todo">
        <i class="fa-solid fa-xmark btn-icon"></i>
    </button>
        `;
    document.getElementById("todo-list").appendChild(item);
};


const limparTarefas = () =>{
    const todoList = document.getElementById('todo-list')
    while(todoList.firstChild){
        todoList.removeChild(todoList.lastChild);
    }
}


const atualizarTela = () => {
    limparTarefas();
    banco.forEach(item => criarItem(item.tarefa))
}

const inserirItem = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;
    if (tecla === 'Enter'){
        banco.push({'tarefa': texto })
        atualizarTela();
        evento.target.value = '';
    }
}

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
})


document.getElementById('newItem').addEventListener('keypress', inserirItem);

atualizarTela();

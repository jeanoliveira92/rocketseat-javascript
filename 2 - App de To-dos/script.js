var listElement = document.querySelector('#container ul');
var inputElement = document.querySelector('#container input');
var btnElement = document.querySelector('#container button');

var todos = JSON.parse(localStorage.getItem('ToDoList')) || [
    'Fazer Café',
    'Estudar Javascript',
    'Acessar Comunidade de Rocketseat'
];

function renderList() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var nodeText = document.createTextNode(todo + " ");

        var pos = todos.indexOf(todo);
        var linkText = document.createTextNode('[x]');
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'removeListElement(' + pos + ')');
        linkElement.appendChild(linkText);

        todoElement.appendChild(nodeText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }

    saveToStorage();
}

function addListElement() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';

    renderList();
}

function removeListElement(pos) {
    todos.splice(pos, 1);

    renderList();
}

function saveToStorage() {
    localStorage.setItem('ToDoList', JSON.stringify(todos));
}

renderList();

btnElement.onclick = addListElement;
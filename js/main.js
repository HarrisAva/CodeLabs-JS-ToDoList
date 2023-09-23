
 // ====== HTML element selectors and event listerners =========

 // Element selectors
 const body = document.body;
 const overlay = document.querySelector('.overlay');
 const form = document.querySelector('#todo-form');
 const input = document.querySelector('.todo-input');
 const todoList = document.querySelector('.todo-list');
 const allTodos = []; 

 // Event listeners for 'focus' event on the 'input' and runs the 'focusInput' function
 input.addEventListener('focus', focusInput);

 // Event listerners for 'click' event on the 'overlay' and runs the 'endFocus' function
 overlay.addEventListener('click', endFocus);

 // Event listerner for 'submit' event on the 'form' and runs the 'createTodo' function
 form.addEventListener('submit', createTodo);

 // =========== Function Declarations ============

 // Function: Add the 'focus-form' class on the body when the form is in focus
 function focusInput() {
     body.classList.add('focus-form');
 }

 // Function: Removes the 'focus-form' class on the body when the form is out of focus
 function endFocus() {
     body.classList.remove ('focus-form');
 }

 // Function: Create a new Todo when it is submitted
 function createTodo(e) {

     // prevents the form from submitting
     e.preventDefault();

     // grab info from the input box
     const todoInput = input.value;

     // create a new list from anchor tag, add innerText, href and target attributes. Append the elements together
     const todoContainer = document.createElement('li');
     const newTodo = document.createElement('a');
     newTodo.className = 'todo';

     // Dynamically insert into HTML
     todoContainer.appendChild(newTodo);
     todoList.appendChild(todoContainer);

    // Reset the input box
     form.reset();

    // add new 'todo' to allTodos array
     allTodos.push(todoInput);

     saveTodoListToStorage(allTodos);

        
// Function: save todo list to Local Storage
    function saveTodoListToStorage(todos = []) {
        localStorage.setItem('todo_list', JSON.stringify(todos));

     

// Function: Pull 'populateTodoList(allTodos)' from Local Storage on application start

     function populateTodoList(todos = []) {

        // loop over all 'todos' and create a new todo for each element one by one
        todoList.innerHTML = todos
        .map (
            (todo) => `<li class='todo-input' name="todo"> ${todo} </li>`
        )
        .join("");
    }

        // Pull 'populateTodoList(allTodos)' from Local Storage on application start
        const allTodos = JSON.parse(localStorage.getItem('todo_list')) || [];
        populateTodoList(allTodos);
    
    }

}
    

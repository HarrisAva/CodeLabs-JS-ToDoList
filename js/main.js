
 // ====== HTML element selectors and event listerners =========
 const body = document.body;
 const overlay = document.querySelector('.overlay');
 const form = document.querySelector('#todo-form');
 const input = document.querySelector('.todo-input');
 const todoList = document.querySelector('.todo-list');
 const allLinks = []; 

 // Event listeners for 'focus' event on the 'input' and runs the 'focusInput' function
 input.addEventListener('focusin', focusInput);

 // Event listerners for 'click' event on the 'overlay' and runs the 'endFocus' function
 overlay.addEventListener('focusout', endFocus);

 // Event listerner for 'submit' event on the 'form' and runs the 'createTodo' function
 form.addEventListener('submit', createTodo);

 // =========== Function Declarations ============

 // Function: Add the 'focus-form' class on the body when the form is in focus
 function focusInput() {
     body.classList.add('focus-form');
 }

 // Function: Removes the 'focus-form' class on the body when the form is out of focus
 function endFocus() {
     if (body.classList.contains('focus-form')) body.classList.remove ('focus-form');
 }

 // Function: Create a new Todo when it is submitted
 function createTodo(e) {

     // prevents the form from submitting
     e.preventDefault();

     // grab info from the input box
     const url = input.value;

     // create a new list from anchor tag, add innerText, href and target attributes. Append the elements together
     const todoContainer = document.createElement('li');
     const newTodo = document.createElement('a');
     newTodo.className = 'todo';
     newTodo.innerText = url;
     newTodo.href = url;
     newTodo.target = '_blank';

    //   console.log("newTodo:", newTodo);

     // Dynamically insert into HTML
     todoContainer.appendChild(newTodo);
     todoList.appendChild(todoContainer);

    // Reset the input box
     form.reset();

    // add new 'todo' to allTodo array
     allLinks.push(url);

    // repopulate HTML list 
     populateTodoList(allLinks);

    // save list to Local Storage
     saveTodoListToStorage(allLinks);

 }
   
// Function: pull in data from Local Storage on applicationpopulates HTML with a list of Todo 
function populateTodoList(allTodos = []) {

    // loop over all 'todos' and create a new todo for each element one by one
    allLinks.innerHTML = allTodos
    .map (
        (todo) => `<li> <a class='todo' href= ${todo} target='_blank'> ${todo}</a> </li>`
    )
    .join(":");
}

// Function: save todo list to Local Storage
function saveTodoListToStorage(allTodos = []) {
    localStorage.setItem('todo_list', JSON.stringify(allTodos));

}

// Pull 'populateTodoList(allLinks)' from Local Storage on application start
    const allTodos = JSON.parse(localStorage.getItem('todo_list')) || [];
    populateTodoList(allTodos);


    



const toDoInput = document.getElementById("toDoInput");
const addTaskButton = document.getElementById("addTaskButton");
const todoList = document.getElementById("todoList");

addTaskButton.onclick = function addTask() {
    const taskInput = toDoInput.value;
    if (taskInput !== '') { //only add if the input is not empty
        const liElement = document.createElement('li'); //create a new list item
        const paragraphElement = document.createElement('p'); //create a new paragraph element
        paragraphElement.textContent = taskInput; //set the text of the paragraph to the input value

        const checkbox = document.createElement('input'); //create checkbox element
        checkbox.type = 'checkbox'; //set the type of the input to checkbox
        checkbox.classList.add('checkbox'); //add a class to the checkbox for styling

        const removeTaskButton = document.createElement('button'); //create remove button element
        removeTaskButton.textContent = 'Remove Task'; //set the text of the button
        removeTaskButton.classList.add('removeTaskButton'); //add a class to the button for styling

        liElement.appendChild(paragraphElement); //add the button to the list item
        liElement.appendChild(checkbox); //add the checkbox to the list item
        liElement.appendChild(removeTaskButton); //add the button to the list item
        
        todoList.appendChild(liElement); //add the list item to the todo list
        toDoInput.value = ''; //reset the input field

        removeTaskButton.onclick = function removeTask() {  //function to remove the task when the button is clicked
            liElement.remove(); 
        }
    }
}
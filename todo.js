const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']")
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const NewTodoText = todoInput.value;
    const newLi = document.createElement("li")
    const newLiInnerHtml = `<span class="text">${NewTodoText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`
    newLi.innerHTML = newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value = "";
})

todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done")){
        const todoText= e.target.parentNode.previousElementSibling;
        todoText.style.textDecoration = "line-through"
    }

    if(e.target.classList.contains("remove")){
        const todoText= e.target.parentNode.parentNode;
        todoText.remove();
    }
    
})


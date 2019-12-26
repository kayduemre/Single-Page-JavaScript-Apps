//select forms
const todoform = document.querySelector("#todoform");
const workform = document.querySelector("#workform");
const complateform = document.querySelector("#complateform");

const todoadd = document.querySelector("#todoadd");
const todoupdate = document.querySelector("#todoupdate");
const tododelete = document.querySelector("#tododelete");

const cmldoadd = document.querySelector("#complateadd");
const cmlupdate = document.querySelector("#complateupdate");
const cmldelete = document.querySelector("#complatedelete");

const todotext = document.querySelector("#todotext");
const worktext = document.querySelector("#worktext");
const cmltext = document.querySelector("#complatetext");

const todobody = document.querySelectorAll(".list-group")[0];
//const workingbody = document.querySelectorall(".input-group mb-3")[1];
//const complatebody = document.querySelectorall(".input-group mb-3")[2];
console.log(todobody);


eventlistener();

function eventlistener(){

    todoform.addEventListener("submit", addtodo);
}
function addtodo(e){
    const newtodo = todotext.value.trim(); //trim clean space
    addtodoUI(newtodo);
    
    e.preventDefault();

}
function addtodoUI(newtodo){
    const pdiv = document.createElement("div");
    const cdiv = document.createElement("div");
    const button = document.createElement("button");
    const todo = document.createElement("a");
    const working = document.createElement("a");
    const complate = document.createElement("a");
    const input = document.createElement("text");
    const li = document.createElement("li");
    const ppdiv = document.createElement("div");

    ppdiv.className = "input-group mb-3";

    li.classList = "list-group-item d-flex justify-content-between";
    
    input.className = "form-control";
    input.type = "text";

    todo.className = "dropdown-item";
    todo.href = "#";
    todo.innerHTML = "To Do";

    working.className = "dropdown-item";
    working.href = "#";
    working.innerHTML = "On Working";

    complate.className = "dropdown-item";
    complate.href = "#";
    complate.innerHTML = "Complate"; 

    pdiv.className="input-group-prepend";
    cdiv.className = "dropdown-menu"
    
    button.className = "btn btn-outline-secondary dropdown-toggle";
    button.type = "button";
    button.innerHTML = "State";
    

    pdiv.appendChild(button);
    pdiv.appendChild(cdiv);
    pdiv.appendChild(input);
    cdiv.appendChild(todo);
    cdiv.appendChild(working);
    cdiv.appendChild(complate);
    ppdiv.appendChild(pdiv);
    li.appendChild(ppdiv);
    input.appendChild(document.createTextNode(newtodo));

    todobody.appendChild(li);

    

    console.log(todobody);
    
}
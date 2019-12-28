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
const workingbody = document.querySelectorAll(".list-group")[1];
const complatebody = document.querySelectorAll(".list-group")[2];


eventlistener();

function eventlistener(){

    todoform.addEventListener("submit", addtodo);
    workform.addEventListener("submit", addworking);
    complateform.addEventListener("submit", addcomplate);

}
function addcomplate(e){
    const pointer = "complate";
    const newcomplate = cmltext.value.trim();
    addtodoUI(newcomplate, pointer);
    e.preventDefault();

}
function addworking(e){
    const pointer = "working";
    const newworking = worktext.value.trim();
    addtodoUI(newworking, pointer);
    e.preventDefault();
}
function addtodo(e){
    const pointer = "todo";
    const newtodo = todotext.value.trim(); //trim clean space
    addtodoUI(newtodo, pointer);
    
    e.preventDefault();

}

function addtodoUI(newtodo, pointer){
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

    if (pointer === "todo") {
        todobody.appendChild(li);
    }
    else if (pointer === "working") {
        workingbody.appendChild(li);
    }
    else if (pointer === "complate")
    {
        complatebody.appendChild(li);
    }
    
}

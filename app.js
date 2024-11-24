let inputBox=document.querySelector('.input-box');
let addBtn=document.querySelector('.add-btn');
let mainToDo=document.querySelector('.todo');

let cnt=0;
let todos=[];
const divEl=document.createElement('div');
divEl.setAttribute('id','items-container')

const addOperation=()=>{
    
    if(inputBox.value.length==0) return;
    todos.push({
        id:cnt,
        title:inputBox.value,
    })
    cnt++;
    inputBox.value='';
    render();
}
addBtn.addEventListener('click',addOperation);

const deleteOperation=(todoItem)=>{
    todos = todos.filter((item) => item.id !== todoItem.id);
    render();
}

const todoItem=(todo)=>{
    const div=document.createElement('div');
    div.setAttribute('id','item')
    const h4=document.createElement('h4');
    const button=document.createElement('button');
    button.innerHTML='DELETE';
    button.addEventListener('click',()=>deleteOperation(todo));
    h4.innerHTML=todo.title;
    div.appendChild(h4);
    div.appendChild(button);
    return div;
}
const render=()=>{
    divEl.innerHTML='';
    for(let todo of todos){
        const element=todoItem(todo);
        divEl.appendChild(element);
        mainToDo.appendChild(divEl);
    }
}

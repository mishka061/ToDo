let form = document.querySelector('#form') //Получаем форму
let inPut = document.querySelector('#input') //Получаем кнопку
let taskList = document.querySelector('#taskList') //Получаем ul
let emptylist = document.querySelector('#emptyList') //Получаем li
let sum = document.querySelector('.count')
let closeTask = document.querySelector('.close-Task')


form.addEventListener('submit', addTask) 
taskList.addEventListener('click', deleteTask)
taskList.addEventListener('click', doneTask)

let count = 0
let toCloseTask = 0

function addTask(event){
    if(inPut.value == ''){
        alert('Поле ввода пустое')
    }else{
        event.preventDefault() //Отменяем отправку формы
        let taskText = inPut.value
        // Формируем разметку
        let taskHtml = `
        <li class="group-list"> 
            <span class="task-title">${taskText}</span>
            <div class="task-item__buttons">
                <button type="button" data-action="done" class="btn-action">
                <span class="btn-add">V</span>
                </button>
                <button type="button" data-action="delete" class="btn-action">
                <span class="btn-close">X</span>
                </button>
            </div>
        </li>`
       //вставляем полученный li в конец ul
        taskList.insertAdjacentHTML('beforeend', taskHtml)
        inPut.value = '' 
        //делаем проверку,если длина li больше 1,то скрываем emptyList 
        if(taskList.children.length > 1){
            emptylist.classList.add('none')
        }
        sum.innerHTML =  ++count
    }
   
}    
function deleteTask(event){
    if(event.target.dataset.action !== 'delete'){
        return
    }else {
        let delTask = event.target.closest('.group-list')
        delTask.remove()
        if(taskList.children.length == 1){
            emptylist.classList.remove('none')
        }
        sum.innerHTML =  --count
        closeTask.innerHTML = --toCloseTask 
        if(toCloseTask <= 0){
            closeTask.innerHTML = 'Нет отмеченных задач' 
        }
    }
 
}
function doneTask(event){
    if(event.target.dataset.action !== 'done')return

    const parenNode = event.target.closest('.group-list')
    const taskTitle = parenNode.querySelector('.task-title')
    taskTitle.classList.toggle('task-title--done')
    closeTask.innerHTML = ++toCloseTask
 
}




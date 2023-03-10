let form = document.querySelector('#form') //Получаем форму
let inPut = document.querySelector('#input') //Получаем кнопку
let taskList = document.querySelector('#taskList') //Получаем ul
let emptylist = document.querySelector('#emptyList') //Получаем li
let sum = document.querySelector('.count')

form.addEventListener('submit', addTask) //При нажимании кнопки,вызываем функцию

let count = 0
function addTask(event){
    event.preventDefault() //Отменяем отправку формы
    let taskText = inPut.value //достаем значение из инпута
    // Формируем разметку
    let taskHtml = `
    <li class="group-list"> 
        <span class="task-title">${taskText}</span>
        <div class="task-item__buttons">
            <button type="button" data-action="done" class="btn-action">
                <img src="./img/tick.svg" alt="Done" width="18" height="18">
            </button>
            <button type="button" data-action="delete" class="btn-action">
                <img src="./img/cross.svg" alt="Done" width="18" height="18">
            </button>
        </div>
    </li>`
   //вставляем полученный li в конец ul
    taskList.insertAdjacentHTML('beforeend', taskHtml)
    inPut.value = '' //очищаем инпут
    //делаем проверку,если длина li больше 1,то скрываем emptyList 
    if(taskList.children.length > 1){
        emptylist.classList.add('none')
    }
    
    sum.innerHTML=  ++count
}    
let form = document.querySelector('#form') //Получаем форму
let inPut = document.querySelector('#input') //Получаем кнопку
let taskList = document.querySelector('#taskList') //Получаем ul
let emptylist = document.querySelector('#emptyList') //Получаем li
let sum = document.querySelector('.count')

form.addEventListener('submit', addTask) //При нажимании кнопки,вызываем функцию
taskList.addEventListener('click', deleteTask)
// taskList.addEventListener('click', downTask)

let count = 0
function addTask(event){
    if(inPut.value == ''){
        alert('Поле ввода пустое')
    }else{
        event.preventDefault() //Отменяем отправку формы
        let taskText = inPut.value //достаем значение из инпута
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
        inPut.value = '' //очищаем инпут
        //делаем проверку,если длина li больше 1,то скрываем emptyList 
        if(taskList.children.length > 1){
            emptylist.classList.add('none')
        }
        sum.innerHTML=  ++count
    }

}    
function deleteTask(event){
    if(event.target.dataset.action !== 'delete')remove
    let delTask = event.target.closest('.group-list')
    delTask.remove()
    if(taskList.children.length == 1){
        emptylist.classList.remove('none')
    }
    sum.innerHTML=  --count
}
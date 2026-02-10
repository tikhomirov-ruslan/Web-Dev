// DOM 
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const emptyListElement = document.querySelector('.empty-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function init() { // инициализация и загрузка из локалки
    renderTasks();

    if (tasks.length > 0) {
        emptyListElement.style.display = 'none';
    }
}

function renderTasks() { // рендер
    taskList.innerHTML = '';
    
    if (tasks.length === 0) {
        emptyListElement.style.display = 'flex';
        taskList.appendChild(emptyListElement);
        return;
    }
    
    emptyListElement.style.display = 'none';
    
    tasks.forEach((task, index) => {
        const taskItem = createTaskElement(task, index);
        taskList.appendChild(taskItem);
    });
}

function createTaskElement(task, index) {
    const li = document.createElement('li');
    li.className = 'task-item';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTaskComplete(index));
    
    // текст задания
    const taskContent = document.createElement('div');
    taskContent.className = 'task-content';
    
    const taskText = document.createElement('span');
    taskText.className = `task-text ${task.completed ? 'completed' : ''}`;
    taskText.textContent = task.text;
    
    taskContent.appendChild(taskText);
    
    // кнопка удаления
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', (e) => {
        e.stopPropagation();
        deleteTask(index);
    });
    
    // создание
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'task-actions';
    actionsDiv.appendChild(deleteButton);
    
    // таблица
    li.appendChild(checkbox);
    li.appendChild(taskContent);
    li.appendChild(actionsDiv);
    
    return li;
}

function addTask(event) {  // добавление задания
    event.preventDefault();
    
    const taskText = taskInput.value.trim();
    
    if (!taskText) {
        alert('Please enter a task description');
        return;
    }
    
    const newTask = {
        text: taskText,
        completed: false,
        id: Date.now()
    };
    
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    
    taskInput.value = '';
    taskInput.focus();
}

function toggleTaskComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

function deleteTask(index) { // удаление задания
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    }
}

// Сохранение
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

taskForm.addEventListener('submit', addTask);

taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        taskForm.dispatchEvent(new Event('submit'));
    }
});

// Инициализация
document.addEventListener('DOMContentLoaded', init);
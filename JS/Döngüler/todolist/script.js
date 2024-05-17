// HTML öğelerine erişim
const todoInput = document.getElementById('task');
const addBtn = document.querySelector('.button');
const todoList = document.getElementById('list');

// Toast bildirimleri için gerekli öğelere erişim
const successToast = document.getElementById('liveToast');
const errorToast = document.querySelector('.toast.error');

// Toast bildirimlerini gösteren fonksiyon
function showToast(toastElement) {
  $(toastElement).toast('show');
}

// Görevleri Local Storage'a kaydeden fonksiyon
function saveTodos() {
  const todos = [];
  document.querySelectorAll('#list li').forEach(li => {
    todos.push({
      text: li.firstChild.textContent.trim(),
      completed: li.classList.contains('completed')
    });
  });
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Görevleri Local Storage'dan yükleyen fonksiyon
function loadTodos() {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.forEach(todo => {
    const todoItem = createTodoElement(todo.text, todo.completed);
    todoList.appendChild(todoItem);
  });
}

// Yeni görev öğesi oluşturan fonksiyon
function createTodoElement(text, completed = false) {
  const todoItem = document.createElement('li');
  todoItem.textContent = text;

  if (completed) {
    todoItem.classList.add('completed');
  }

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Tamamlandı';
  completeBtn.classList.add('btn', 'btn-success', 'btn-sm', 'ml-2');
  completeBtn.addEventListener('click', function() {
    todoItem.classList.toggle('completed');
    saveTodos();
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '&times;';
  deleteBtn.classList.add('close');
  deleteBtn.addEventListener('click', function() {
    todoItem.remove();
    saveTodos();
  });

  todoItem.appendChild(completeBtn);
  todoItem.appendChild(deleteBtn);
  return todoItem;
}

// Görev ekleme fonksiyonu
function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText) {
    const todoItem = createTodoElement(todoText);
    todoList.appendChild(todoItem);
    todoInput.value = '';

    saveTodos();
    showToast(successToast);
  } else {
    showToast(errorToast);
  }
}

// Sayfa yüklendiğinde görevleri yükle
document.addEventListener('DOMContentLoaded', loadTodos);

// "Ekle" butonuna tıklanınca görev ekleme fonksiyonunu çalıştır
addBtn.addEventListener('click', addTodo);

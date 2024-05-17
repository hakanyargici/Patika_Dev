// script.js dosyasına ekle
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

// Görev ekleme fonksiyonu
function addTodo() {
    const todoText = todoInput.value.trim();
  
    if (todoText) {
      const todoItem = document.createElement('li');
      todoItem.textContent = todoText;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = '&times;';
      deleteBtn.classList.add('close');
      
      deleteBtn.addEventListener('click', function() {
        todoItem.remove();
      });
  
      todoItem.appendChild(deleteBtn);
      todoList.appendChild(todoItem);
      todoInput.value = '';
  
      // Başarılı toast bildirimi göster
      showToast(successToast);
    } else {
      // Hata toast bildirimi göster
      showToast(errorToast);
    }
  }
  
  // "Ekle" butonuna tıklanınca görev ekleme fonksiyonunu çalıştır
  addBtn.addEventListener('click', addTodo);
  
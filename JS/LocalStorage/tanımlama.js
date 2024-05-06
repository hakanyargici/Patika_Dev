/* ##### ##### ###### ##### ##### ###### ##### ###### ##### ##### */
/* ##### LocalStorage ile Veri Eklemek, Düzenlemek ve Silme ##### */

/*

Local Storage Nedir?

Anlık istenmeyen veri kayıplarını önlemek için cookie yani çerez dediğimiz sistemlere geçici veri saklanabilir. Ancak çerezler dosyanın 4kb ile sınırlı olması hemde üçüncü şahıslar tarafından erişilebilir olması localstorage()'ı yaygınlaşmasına neden oldu.
Bu sayede eskiden cookie’ler ile yaptığımız işlemler daha güvenli ve daha hızlı şekilde yapılabilir hale gelmiştir. Daha hızlı çalışmasının nedeni artık veriler her sunucu istediğinde değil, sadece çağırıldıklarında gelmektedir. Veriler key/value şeklinde saklanmaktadır ve web sayfaları sadece kendi oluşturdukları verilere erişebilmektedir. Birçok tarayıcı Web Storage API yapısıyla uyumlu şekilde çalışabilmektedir.

Nasıl Kullanılır?

* localStorage();
* sessionStorage();

2 kayıt türü arasındaki en temel fark localStorage() kayıtları zaman aşımı olmaksızın tutarken sessionStorage() kayıtları oturum sonlanana kadar yada veri kaybolana kadar tutmaktadır. Ancak her ikiside kullanıcı tarafından okunabilir ve değiştirilebilinirdir.


*/

// Veri Ekleme: localStorage() built-in fonksiyonları ile veriler üzerinden işlem yapmaktadır. setItem() metodu ile kayıt alır. Bu metot 2 parametre alır; ilki olan 'key' yani anahtar adı ikinicisi olan 'value' yani o anahtara karşılık gelen ifadeyi temsil etmektedir.
window.localStorage.setItem("key","value");

// Veri Okuma: localStorage() üzerinde kayıtlı olan anahtarları okumak için getItem methodu kullanılır. Metoda atanılan parametreyi cevap olarak çevirir.
window.localStorage.getItem("key");

// Veri Silme: 2 farklı metot bulunmaktadır. Tüm verileri silmek için clear() metodu kullanırken sadece bir anahtar silmek için removeItem() kullanılır.
window.localStorage.removeItem("key");
window.localStorage.clear();


/* ##### ##### UYGULAMA ÖRNEĞİ ##### ##### */
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
});
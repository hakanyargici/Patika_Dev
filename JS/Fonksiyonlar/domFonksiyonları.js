/* ##### ##### ###### ##### ##### ##### ##### ##### ##### ##### ##### */
/* ##### ##### Etkinlik Ekleme Ve özelliklerine Ulaşma ##### ##### */

// Etkinlikler yani "events"ler uygulanacak eylemlerin ne zaman gerçekleşeceğinin öğrenilmesine ve sonrasında kodun çalıştırılmasına olanak sağlar. Sayfa üzerindeki eylemlere göre bir çok etkinlik eklemek mümkündür. 

// element.addEventListener(event, functionName);


const button = document.querySelector("#button");
//nesneye bir etkinlik atandı.Burada ilk olarak tip ('click')
//ikinci olarak da aşağıda fonksiyon tanımlanır ,fonksiyon ismi parametre olarak girilir. 
button.addEventListener('click',btnClicked);
  function btnClicked(){
  alert("Buton Tıklandı!!!")
}

// Mouse Etkinliği: Mouse tıklaması ile gerçekleşen etkinlikltir.

const btn = document.querySelector("#text");
btn.addEventListener('dblclick',clickFonksiyonu);
  
//fonksiyonda id=text olan element çağrılarak innerHTML ile içeriği değiştirildi.
function clickFonksiyonu(){
  document.getElementById("text").innerHTML = "Değişti!";
}

const color = document.querySelector("#select");
color.addEventListener('change' ,selectBox); //color değişkenine change etkinliği etkinliği atandı ve fonksiyon ismi parametre olarak atandı

function selectBox(event){ //selectBox isimli fonksiyon ile selectbox her seçildiğinde etkinlik tipi =change ve değeri consola yazılmaktadır 
  console.log("Etkinlik tipi : " + event.type);
  console.log("deger : " + event.target.value);
}

// Kabarcıklanma Etkinliği(Event Bubbling) ve Yakalama Etkinliği(Event Capturing)
// 1. Kabarcıklanma Etkinliği (Event Bubbling):

const selectBox = document.querySelector('#selectColor');
const btnN = document.querySelector('#btnN');
const form = document.querySelector('.inputText');  
const cerceve = document.querySelector('.container');
selectBox.addEventListener('click' ,function(){
    console.log("selectBox");    
  })
form.addEventListener('click',function(){
    console.log("form");
  })
cerceve.addEventListener('click',function(){
    console.log('cerceve');
  })
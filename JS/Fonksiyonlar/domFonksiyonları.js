/* ##### ##### ###### ##### ##### ##### ##### ##### ##### ##### ##### */
/* ##### ##### Etkinlik Ekleme Ve özelliklerine Ulaşma ##### ##### */

// Etkinlikler yani "events"ler uygulanacak eylemlerin ne zaman gerçekleşeceğinin öğrenilmesine ve sonrasında kodun çalıştırılmasına olanak sağlar. Sayfa üzerindeki eylemlere göre bir çok etkinlik eklemek mümkündür. 

element.addEventListener(event, functionName);

//id =button olan nesne seçildi
const button = document.querySelector("#button");
//nesneye bir etkinlik atandı.Burada ilk olarak tip ('click')
//ikinci olarak da aşağıda fonksiyon tanımlanır ,fonksiyon ismi parametre olarak girilir. 
button.addEventListener('click',btnClicked);
  function btnClicked(){
    alert("Buton Tıklandı!!!")
    }

// Çıktı : Buton Tıklandı!!!
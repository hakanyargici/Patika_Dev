/* ##### ##### ###### ##### ##### ##### ##### */
/* ##### ##### DOM NEDİR ##### ##### ##### */

// Dom, yani "Document Object Model", programların ve komut dosyalarının bir belgenin içeriğine, yapısına ve stiline dinamik olarak erişimesine ve güncelleştirilmesine olanağ sağlayan bir platfrom ve dilden bağımsız bir arayüzdür.


/* ##### ##### ###### ##### ##### ##### ##### */
/* ##### ##### Etiket ve Öğe Seçimi ##### ##### */

// getElementById(''); Sayfada bulunan HTML etiketlerinin ID'leri referans alarak seçme işlemi yapılır.

// getElementByTagName(''); Elemanların etiket isimlerine göre seçmek için kullanılır. Girdi olarak HTML elementini alır ve buna uygun bir HTML Collection döndürür.

// getElementByName(''); Elemanları isimlerine göre getirmek içim getElementsByName() metodu kullanılır. Elemanların name değerlerine göre bir NodeList objesi döndürür.

// getElementByClassName(''); DOM'da istediğimiz class name'i taşıyan tüm elemanları seçmek için getElementsByClassName() metodunu kullanırız. Bu metot bize bir HTMLCollection döndürür. Ve kullanırken class isminin başına nokta "." koymamanız gerekir.

// Query Selector: querySelector() yöntemi, CSS seçicilere dayalı olarak DOM'dan HTML elemanlarını seçmemize izin veren iki modern JS yönteminden biridir. Bu yöntem ile hem CSS class'larını hemde  id'lerini kullanabilirsiniz. Bunu yaparken class için ön ek olan nokta "." ve id'ler için kare "#" kullanmak gerekir. Eşleşen ilk elemanı döndürür.

// querySelectorAll(); metod, standart querySelector() ile aynı çalışmakta olup ter farklı eşleşen ilk elemanı döndürmek yerine tüm elemanları bir NodeList objesi olarak döndürür.


/* ##### ##### ###### ##### ##### ##### ##### ##### ##### */
/* ##### ##### Prompt ile Kullanıcıdan Bilgi Almak ##### ##### */

// prompt(); ile kullanıcıdan bilgi ister ve document.write yada console.log() ile yazdırailabilinir.

function istek() {
    var kelime = prompt("Bir Değer Giriniz", "Lütfen sadece kelime giriniz...");
    document.write(kelime);
}

/* ##### ##### ###### ##### ##### ##### ##### ##### ##### ##### ##### #####*/
/* ##### ##### Liste İçerisindeki Öğeye Erişmek ve Yeni Öğe Eklemek ##### ##### */

// two olarak tanımladığımız değişkenimizin içerisinde döngü yardımı ile dönelim ve alternate sınıfına sahip olarak öğelerin renklerini değiştirelim. Döngü kullanmamızın bir sebebi de getElementsByClassName metodunun bize nodeList dönüyor olması.

for (let i = 0; i < tho.length; i++) {
    two[i].style.color = "red";
}

// querySelector ile öğeye öğeye erişmek için: 

var urun = document.querySelector('#veri');
var ekle = document.querySelector('#ekle');

ekle.addEventListener("click",function(){
    // createElement ile yeni bir listItem (li) oluşturuyoruz
    var li=document.createElement("li"); 
    
    // Input ile gelen veriyi "li" içerisine metin olarak giriyoruz.
    li.textContent=veri.value; 
    
    // appendChild ile oluşturduğumuz elementi "liste" isimli değişkenimizin içerisine ekliyoruz.
    liste.appendChild(li);
                
    // Veri inputu içerisindeki metni siliyoruz.
    veri.value = "";
});
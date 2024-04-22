/* ##### ##### ###### ##### ##### */
/* ##### ##### DOM NEDİR ##### ##### */

// Dom, yani "Document Object Model", programların ve komut dosyalarının bir belgenin içeriğine, yapısına ve stiline dinamik olarak erişimesine ve güncelleştirilmesine olanağ sağlayan bir platfrom ve dilden bağımsız bir arayüzdür.


/* ##### ##### Etiket ve Öğe Seçimi ##### ##### */

// getElementById(''); Sayfada bulunan HTML etiketlerinin ID'leri referans alarak seçme işlemi yapılır.

// getElementByTagName(''); Elemanların etiket isimlerine göre seçmek için kullanılır. Girdi olarak HTML elementini alır ve buna uygun bir HTML Collection döndürür.

// getElementByName(''); Elemanları isimlerine göre getirmek içim getElementsByName() metodu kullanılır. Elemanların name değerlerine göre bir NodeList objesi döndürür.

// getElementByClassName(''); DOM'da istediğimiz class name'i taşıyan tüm elemanları seçmek için getElementsByClassName() metodunu kullanırız. Bu metot bize bir HTMLCollection döndürür. Ve kullanırken class isminin başına nokta "." koymamanız gerekir.

// Query Selector: querySelector() yöntemi, CSS seçicilere dayalı olarak DOM'dan HTML elemanlarını seçmemize izin veren iki modern JS yönteminden biridir. Bu yöntem ile hem CSS class'larını hemde  id'lerini kullanabilirsiniz. Bunu yaparken class için ön ek olan nokta "." ve id'ler için kare "#" kullanmak gerekir. Eşleşen ilk elemanı döndürür.

// querySelectorAll(); metod, standart querySelector() ile aynı çalışmakta olup ter farklı eşleşen ilk elemanı döndürmek yerine tüm elemanları bir NodeList objesi olarak döndürür.


/* ##### ##### Prompt ile Kullanıcıdan Bilgi Almak ##### ##### */

// prompt(); ile kullanıcıdan bilgi ister ve document.write yada console.log() ile yazdırailabilinir.

function istek() {
    var kelime = prompt("Bir Değer Giriniz", "Lütfen sadece kelime giriniz...");
    document.write(kelime);
}


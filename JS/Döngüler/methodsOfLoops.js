/* ##### ##### ###### ##### ##### ##### ##### ##### */
/* ##### ##### JavaScript Döngü Metotları ##### ##### */

// filter(): Bir Array metodu olan filter(), dizi elemanlarını döngüye alıp, istediğimiz koşula sahip olanlarla yeni bir dizi oluşturmak için kullanılır.

const products = ["Mikrofon","Kablo","Telefon","Bilgisayar","Mouse","Klavye","Ekran"]


const newProducts = products.filter(eleman => eleman.length > 5)
console.log(newProducts); //["Mikrofon", "Telefon", "Bilgisayar", "Klavye"]


const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
    },
    {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
      }
];

//Soru 1: Yukarıdaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük olan kişiyi getirin.
    const bigOne = person.filter(yaşıBüyük => yaşıBüyük.age > 30);
    console.log(bigOne);
//Soru 2: Yukarıdaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.
    const onlyKnowJs = person.filter(jsBilen => jsBilen.languages.includes("JavaScript"));
    console.log(onlyKnowJs);



/* ##### ##### ###### ##### ##### ###### ##### ##### ##### ##### ##### */
/* ##### ##### ###### ##### ##### ###### ##### ##### ##### ##### ##### */
/* ##### ##### ###### ##### ##### ###### ##### ##### ##### ##### ##### */



// map(): Map methodundan önce javaScript'te Array(Dizi)'leri kısaca hatırlayalım. Diziler aslında bir veri yapısıdır ve bellek üzerinde aynı tipte veri tutabilmemizi sağlar. Bir değişken tanımladığımızı düşünürsek eğer bu bizim için tek bir değer tutacaktır. Diziler ise bir değişkenin altında birden fazla değer tutabilmemizi sağlar. Daha sonra bu tanımladığımız dizinin elemanlarına farklı farklı ulaşmak istersek indeks üzerinden ulaşabiliriz.

/*

array.map(): Array Map metodu, parametre ile kendisine gönderilen dizinin her bir elemanı için ayrı ayrı çalışır ve belirlenen işleme tabi tutup, yeni bir dizi meydana getiri

array.map( function(value, index, array), this);

*/

// Örnek 1: Bir dizinin tüm elemanlarını 2 ile çarpan fonksiyon;

const sayilar = [2, 3, 4, 5, 10]
const yeniArray = sayilar.map(deger => {
    return deger * 2
})

console.log(sayilar);
//[2, 3, 4, 5, 10]
console.log(yeniArray);
//[4, 6, 8, 10, 20]
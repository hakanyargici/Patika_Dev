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
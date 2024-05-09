/* ##### ###### ##### ##### ##### ##### ##### ##### ##### ##### ##### ##### ##### ##### ##### */
/* ##### ##### Array (Dizi) Metotlarının Kullanımı ve Array içinde Array Oluşturma ##### ##### */

const alisverisListem = ["elma", "ekmek", "süt", "kaşar", "peynir", "salam"];

/* 
    .includes()
    Bir elemanın dizi içerisinde bulunup bulunmadığını kontrol eder. Boolean (true/false) yanıt döndürür.
*/

console.log(alisverisListem.includes("elma"));


/* 
    .slice()
    Bir dizinin belirli bir kısmını koplayarak farklı bir değişkene aktarır
*/

var sliceDeneme = alisverisListem.slice(0,3);
console.log(sliceDeneme);


/*
    .join()
    Dizi elemanları arasına yeni bir string değer atar. Herhangi bir değer girilmeden boş bir şekilde aktarılırsa "," atar.
*/

var joinDeneme = alisverisListem.join();
console.log(joinDeneme);


/* 
    .concat()
    Farklı dizileri birleştirerek tek bir dizi oluşturur.
*/

var alisverisSepetim2 = "Muz";
var tekSepet = alisverisListem.concat(alisverisSepetim2);
console.log(tekSepet);


/* ##### ###### ##### ##### ##### ##### ##### ##### ##### ##### ##### ##### ##### ##### ##### */
/* ##### ###### ##### ##### ##### ##### ##### ##### ##### ##### ##### ##### ##### ##### ##### */
/* ##### ###### ##### ##### ##### ##### ##### ##### ##### ##### ##### ##### ##### ##### ##### */

/* 
    Soru 1: Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)
*/

let dizi = [2,5,8,11,15,17];

dizi.forEach(function(sayi1){
    if(sayi1 >= 5)
        console.log(sayi1*5);
});


/* 
    Soru 2: Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.
*/

let array = [3,6,9,14,16];

// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

function myFunction (array){
// Kodunuzu buraya yazın.
}

myFunction(array);
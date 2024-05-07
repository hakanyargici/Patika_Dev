/* ##### ##### ###### ##### ##### ##### ##### ##### ##### ##### ##### ##### ##### ##### */
/* ##### ##### Dizi(Array) Oluşturmak ve Dizi İçindeki Elemanlara Ulaşmak ##### ##### */

// Array oluşturmak için:
let domain = "Kodluyoruz";
let isActive = true;
var items = [
    1,
    2,
    3,
    isActive,
    domain
]
let emptyArray = []; // Boş Dizi Oluşturma.

// Array içerisindeki eleman sayısını öğrenmek için:
console.log(items.length);

//Array içerisindeki ilk elemanın çağırılması:
console.log(items[0]);

// Array içerisindeki son elemanın çağırılması:
console.log(items[4]);

function sonElemanıBulma(){
    for(i = 1; i <= (items.length); i++){
        if (i == items.length){
            console.log("Array'in son değeri: ", items[i - 1]);
        }
    }
}
sonElemanıBulma();

// Değişken İçerisindeki bilginin Array olup olmama durumu:
console.log(
    typeof(items)
);
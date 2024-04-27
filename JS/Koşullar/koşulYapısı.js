/* ##### ##### ###### ##### ##### ##### ##### */
/* ##### Koşul Yapısı Kullanımı(If/Else) ##### */

// JavaScript'te de şartların doğru olup olmadığını kontrol etmek için If/Else ifadeleri kullanılır. If else yapısı içerisinde koşulun sağlandığı kodlar if içerisinde yer alırken, koşulun sağlanmadığı kodlar ise else içerisinde yer alır. Eğer ilk koşul yanlışsa başka bir koşul belirtmek amacıyla else if kullanılır. If/Else kullanımı aşağıdaki gibidir:

var x = 5;
var y = 7;

if(x > y) {
    console.log(x + " sayisi" + y + " sayısından büyüktür." );
}

else {
    console.log(y + " sayisi" + " " + x + " sayısından büyüktür.");
}

// Örnek 1 - Tahmin Oyunu: Bilgisyar tarafından 10'a kadar oluşturulan rastgele sayıyı bulalım:

var randomSayi = Math.floor(Math.random() * 10);
var tahmin = prompt("Bir sayı ve rastgele sayıyı bulmaya çalış!");

if (tahmin === randomSayi){
    alert("Bildin!");
} else if (tahmin == ""){
    alert("Boş değer girildi!");
} else if (tahmin == null){
    alert("Griş yapmaktan vazgeçtiniz!")
} else {
    alert("Bir daha dene :(, Random sayı: " + randomSayi);
}


/* ##### Hacker Rank - Challenge ##### */

function isWeird(input) {
    const n = parseInt(input.trim(), 10); 
    if(n % 2 !== 0) {
        console.log("Weird");
    } else {
        if(2 <= n && n <= 5) {
            console.log("Not Weird");
        } else if (6 <= n && n <= 20) {
            console.log("Weird");
        } else if (n > 20)
            console.log("Not Weird");
    }
}

// Standart girdiyi oku
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    isWeird(inputString);
});
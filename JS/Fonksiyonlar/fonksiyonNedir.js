/* ##### ##### ###### ##### ##### ##### ##### ##### ##### ##### ##### */
/* ##### ##### Fonksiyon Nedir? Neden Kullanırız? ##### ##### ##### */

/* 

Fonksiyonlar ardından anlaşışacağı gibi belli bir amacı gerçekleştirmek için oluşturulmuş yapıladır. Koda işlevsellik katmak için bunu sık sık kullanırız. Tanımı ise:

    Fonksiyonu Adlandırmak:
    * İlk olarak function ibaresinde sonra fonksiyon adı yazılır: Bir fonksiyonun adı varsa bunlar Regular/Named Functions deriz.
    * Burada önemli olan kodun okunabilirliği açısından fonksiyonu işlevine uygun bir biçimde adlandırmaktır, dahası bu bir işlevi belirttiği için fonksiyon adımız bir eylem olmalıdır. Bunun için bazı ön ekler kullanabiliriz.

    Fonksiyon Parametreleri ve Gövdesi:
    * Sonrasında parantezler içinde alacağı parametreler belirlenir. Parametre olması zorunlu olmadığı gibi fazla parametre geçmek kodun okunurluğunu bozabilir.
    * Parametre alan fonksiyonları kullandığımız zaman o parametrelere kendimiz bir değer atarız. Atanan bu değere argüman adı verilir.
*/

function addition(sayi1,sayi2){
    console.log(sayi1+sayi2);
}
//add değişkenine 1+2 değerini fonksiyon kullanarak atadık.
var add = addition(1,2);   
console.log(addition);


/* ##### ##### Fonksiyon Kapsamı ##### ##### ##### */

//global değişkenleri tanımlıyoruz
var sayi1 = 5;
var sayi2 = 2;   
function addition(){
    var sayi3 = 3;             //sayi3 adında lokal bir değişken tanımlıyoruz
    return sayi1+sayi2+sayi3;  //Fonksiyon içinde global ve local değişkenleri kullanıyoruz
}

function multiplication(){
    return sayi1*sayi3;  
//Burada hata alıyoruz: bunun nedeni başka bir fonksiyonun içinde tanımlı olan sayi3 lokal değişkenini kapsamı dışında 
//kullanmaya çalışmamız. sayi1 değişkeni ise global olduğundan burada kullanılabilir
}


/* ##### ##### Fonksiyon Bildirimi(Function Declaration) ##### ##### ##### */

function mesaVer(ad, soyad) {
    alert(`Merhaba ${ad} ${soyad}`);
}
  
mesajVer("Arturo", "Kelesoglu", "Mr."); /* çıktı: Merhaba Arturo Kelesoglu (Bu örnekte parametrelere geçilen argüman sayısı 3'tür(Arturo, Kelesoglu, Mr.). Parametre sayısı ise 2'dir(ad,soyad). Bu yüzden fazlalıklar(Mr.) önemsenmez.*/
mesajVer("Arturo"); /* çıktı: Merhaba Arturo undefined (Bu örnekte parametrelere geçilen argüman sayısı 1'dir.(Arturo). Parametre sayısı ise 2'dir(ad,soyad). Bu yüzden eksiklikler undefined döner. */
mesajVer(); // çıktı Merhaba undefined undefined (Yukarıdaki örnekle aynı mantıktadır.)


/* ##### ##### ###### ##### ##### ##### ##### ##### ##### ##### ##### */
/* ##### ##### Fonksiyona Parametre (params) ve Geridönüş (return) Eklemek ##### ##### ##### */

// Fonksiyonlar, parametreli veya parametresiz fonksiyonlar, değer döndüren veya değer döndürmeyen fonksiyonlar olarak farklı şekillerde oluşturulabilir. Hangi fonksiyon tipini kullanacağımız, yazmak istediğimiz algoritmanın ihtiyacına göre değişmektedir.

function toplama(a, b) { // a ve b toplanacak iki sayıyı temsil eden fonksiyon parametreleri(girdileri)    
    var sonuc = a+b; // Fonksiyonda aldığımız parametrelerle yaptığımız işlem
	return sonuc;  	// Herhangi iki sayının toplamından elde edeceğimiz işlem sonucunu, return ifadesinden hemen sonra belirtiyoruz.
} 


// Örnek 1 - Herhangi bir yarıçapa sahip bir dairenin alanını hesaplayan fonksiyonu yazınız.

const PI = 3.14; // Formülde kullandığımız sabit sayı pi'yi bu şekilde alabiliriz.
function daireAlaniHesaplama (r) { // Fonksiyonumuz, r parametresini alıyor. 
    var islemSonucu = PI*r*r; // Dairenin alanını hesaplayacak işlemimiz.
    return islemSonucu;		 // return ifadesiyle sonucu dönüyoruz.
}

var donenSonuc = daireAlaniHesaplama(3); // Argüman olarak, alanını hesaplamak istediğimiz herhangi bir dairenin yarıçapı için 3 rakamı verildi. 
console.log(donenSonuc); // 28.25999999 sonucunu göreceğiz.


// Örnek 2 - Farklı yarıçaplardaki iki farklı dairenin, alanarı çarpımını veren bir fonksiyon yazınız.

function daireAlaniHesaplama (r, PI = 3.14)  { 
    return PI*r*r;		
}

function carpma (a1, a2) {
    return a1*a2;
}

var alan1 = daireAlaniHesaplama(5); // 5 ve 6 argümanları için dairelerin alanları hesaplandı.
var alan2 = daireAlaniHesaplama(6); 
var donenSonuc = carpma(alan1, alan2); // Hesaplanan alanlar argüman olarak verildi.
console.log(donenSonuc);  			  // 354.9456 olarak hesaplandı.


/* ##### ##### Hacker Rank Challange ##### ##### */

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function factorial(n){
    if (n === 0) {
        return 1;
    }
    else if (n<0){
        return "No factorial for negative numbers";
    }
    else if (n > 0){
        let fact = 1;
        for (let i = n ; i > 0; i--){
            fact = fact * i;
        }
        return fact;
    }
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}
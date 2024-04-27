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


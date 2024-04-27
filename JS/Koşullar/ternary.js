/* ##### ##### ###### ##### ##### ##### ##### */
/* ##### ##### Ternary Operator ##### ##### */

/* 
Ternary operatörü, 3 adet parametre alan tek jS operatörüdür. If kullanarak kontrol etmek istediğimiz koşullarda ternary operatör kullanarak satır sayısı olarak avantaj sağlar.

Ternary Opartörünün Aldığı 3 Parametre:
    * İlk önce bir condition belirtiriz ve sonrasında hemen bir ? koyarız.
    * Sonrasında, eğer yazdığımız condition doğru ise ne yapmak istediğimizi belirtir ve sonuna : koyarız
    * Ve koşul
*/

var money = 40;
var canBuy = 
    (money < 17) ? "Satın alamazsın..":
    (money > 30) ? "Satın alabilirsin..":
    "Para miktarını girmen gerekmektedir..";

console.log(canBuy) // "Satın alabilirsin.."
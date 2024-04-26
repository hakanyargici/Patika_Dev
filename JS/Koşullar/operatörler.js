/* ##### ##### ###### ##### ##### ###### ##### ##### ##### ##### */
/* ##### Karşılaştırma Operatörleri ve Mantıksal Operatörler ##### */

// Karşılaştırma operatörleri, değerler arasında eşitlik ve farkı bulmak için kullanılır. Bu iki değerin karşılaştırmasını yaparak true ve false değer alırız.

var a = 10;
var b = "10";
var c = 12;
var d = "Kodluyoruz";

// "==" - Eşitse
console.log(a == b); // true

// "===" - Hem değeri hem türü eşitse
console.log(a === b); // false

// "!=" - Eşit değilse
console.log(a != b); // false
console.log(a !== b); // true

// "<" - Küçükse
console.log(a < c); // true
console.log(c <= a); // false

// ">" - Büyükse
console.log(a > c); // false
console.log(c >= a); // true


// JavaScript mantıksal operatörleri kullanarak karşılaştırma işlemini birden fazla koşula göre yapabiliriz. Birden fazla koşulu karşılaştırıp operatörün işlevine göre true (doğru) veya false (yanlış) sonucunu verir.

// "&&" - Ve
console.log(a == b && a < d) // false
console.log(a == b && d == "Kodluyoruz") // true

// "||" - Veya
console.log(a == b || a < d) // true
console.log(a == c || d == "Kodlamıyoruz") // false

// "!" - Değil
console.log(!(a > 11 || d == "Kodluyoruz")); // false
/* ##### ##### ###### ##### ##### ##### ##### ##### ##### ##### ##### ##### */
/* ##### ##### Diziye Yeni Eleman Eklemek, Çıkartmak ve Güncellemek ##### ##### */


var sports = ["Basketbol", "Futbol", "Tenis"];
console.log(sports);


// Diziye eleman eklemek için push(), unshift() ve splice() metotları kullanılır.

// .push()
sports.push("Beyzbol"); // Beyzbol elemanı dizinin sonuna eklendi.
console.log(sports);

// .unshift()
sports.unshift("Handbol"); // Handbol elemanı dizinin başına eklendi.
console.log(sports);

// .splice() metot diziye hem eleman eklemek için hem de eleman silmek için kullanılır. Metodun ilk parametresi işlemin yapılacağı index numarası ikinici ise kaç eleman sileneceğini bildirir.
sports.splice(1, 0, "Okçuluk");
console.log(sports);


// Diziden eleman silmek için shift() ve splice methotları kullanılır.

// .shift()
sports.shift(); // Dizinin ilk indisindeki elemanı siler
console.log(sports);

// .splice()
sports.shift(1, 1) // Dizinin 1. indisindeki elemanı siler
console.log(sports);
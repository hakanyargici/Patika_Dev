/* ##### ##### ###### ##### ##### ##### ##### */
/* ##### Çoklu Koşul Yapısı Kullanımı ##### */

// JavaScript'te if-else koşul yapısındaki koşulların arttığı durumlarda kod okunabilirliğini artırmak ve daha performanslı sayılabilecek bir yapı olan switch yapısı tercih edilebilir.


// Örnek 1: Hava Durumu

let hava = "Gunesli";
switch(hava) {
  case "Yagmurlu":
      console.log("Semsiyeni yanina almayi unutma");
      break;
  case "Gunesli":
      console.log("Hafif giyin");
      break;
  case "Bulutlu":
      console.log("Disari cik");
      break;
  case "Karlı":
      console.log("Kalin giyin");
      break;
  case "Firtinali":
      console.log("Bir süre disari cikma");
      break;
  default:
      console.log("Bilinmeyen hava durumu:" , hava);
      break;
}

console.log(hava);


// Örnek 2: Hesap Makinesi

let islem = function(a, b, operator) {
    switch(operator) {
        case 'topla':
            return a + b;
        break;
        case 'cikar':
            return a - b;
        break;
        case 'carp':
            return a * b;
        break;
        case 'bol':
            return a / b;
        break;
        default:
            return 'Tanimlanmamis islem';
        break;
    }
};
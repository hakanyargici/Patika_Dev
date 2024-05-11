/* ##### ##### ###### ##### ##### ##### ##### ##### */
/* ##### ##### JavaScript Döngü Kullanımı ##### ##### */


// For Döngüsü: 
for (var i = 0; i < 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    };
};


/*
    Break & Continue Kullanımı: Break ve continue döngülerde sıklıkla kullandığımız önem arz eden ifadelerimizdendir. Döngüye müdahale etmemizi ve akışı kontrol etmemizi sağlarlar.

    Break: break ifadesi içinde bulunduğu döngüyü sonlandırmak diğer bir deyişle döngüden çıkılması hizmetini sunar. Bu hususta öneminin yeniden vurgulanması gereken nokta "break" ifadesinin sadece kendine en yakın yani içinde bulunduğu döngü içerisinde geçerli oluşudur.----> İç içe döngüler örneğinde daha net anlaşılacaktır.

    Etiketli Break: Etiketli break ifadeleri ise başına konulduğu döngü sistemini sonlandırır.

    Continue: Continue ifadesi ise bulunduğu döngü içinde o anki çalışacak olan devir işlemini pas geçerek bir sonraki devir işlemini başlatır. Yine burada da vurgulanması gereken nokta "continue" ifadesinin sadece kendine en yakın yani içerisinde bulunduğu döngü içinde geçerli oluşudur.

    Etiketli Continue: Etiketli continue ifadeleri ise başına konulduğu döngü sistemini etkiler.
*/


// While Döngüsü: While döngüsü oluşturabilmek için ilk olarak parametre olarak bir koşul vermemiz gerekmektedir verdiğimiz koşul sağlandığı sürece döngü devam eder. Bu koşul sınırsız olursa döngü de sonsuz kere devam eder ve biz bunu istemeyiz genel olarak sonlanacağı bir durumla döngü sonlandırılmalıdır.
var arabalar = ["Mercedes", "Audi", "Bmw", "Skoda", "Seat"];
var counter = 0;
while(arabalar[i]){
    console.log(arabalar[i]);
    i++;
}


// forEach: JavaScript'te forEach , döngü oluşturmamızı ve bu döngüyü sırayla çalıştırmamızı sağlayan bir array metodudur.
const animals = ["cat" , "dog" , "bird", "horse"];
  
animals.forEach((value , index , array) => {
  console.log('value: ', value );
  console.log('value parametresinin aldığı index :', index );
  console.log('array:' , array );
});

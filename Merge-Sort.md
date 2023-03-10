#[16,21,11,8,12,22]  Merge Sort türüne göre aşamalarını ve Big-O gösterimini yazınız.

*Merge Sort türüne göre aşamaları;

1. Adım: Eleman listesi 16,21,11 ve 8,12,22 olarak 2 parçaya bölünür.
2. Adım: 2 parçaya bölünen eleman listesi 16,21 | 11 ve 8,12 | 22 olarak kendi içlerinde 2 parçaya daha ayrılır.
3. Adım: En ufak parçalarına ayrılan elemanlar arasında büyüklük ve küçüklük sorgusu yapılır.
         İlk kısım için;
             1. Adım: 16 ve 21 arasında yapılan sorgu da 16 küçük çıkar.
             2. Adım: Yan tarafında ayrıldıkları dizi ile kontrol gerçekleşir ve bu durumda 11,16,21 olarak ilk kısım sıralanır.
         İkinci kısım için;
             1. Adım: 8 ve 12 arasında yapılan sorgu da 8 küçük çıkar.
             2. Adım: Yan tarafında ayrıldıkları dizi ile kontrol gerçekleşir ve bu durumda 8,12,22 olarak ikinci kısım sıralanır.
4. Adım: 11,16,21 | 8,12,22 olarak ayrılan 2 parça arasında her iki dizinin 0. Index'lerinden başlayarak sorgu gerçekleşir.
         Bu durumda sayı dizisi "8,11,12,16,21,22" olur.


*Big-O türün için;

O(log n) olarak ifade edilir.

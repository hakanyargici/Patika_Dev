# [7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

1. Adım: Listenin en küçük elemanı ele alınan "2" listenin başına gelir ve liste 2,3,5,8,7,9,4,15,6 olur.
2. Adım: Listenin 2. en küçük elemanı olan "3", 2. sırada olduğu için bir sonra ki küçük sayı olan "4" aranır. Bu durum da liste, 2,3,4,8,7,9,5,15,6 olur.
3. Adım: Listenin 4. en küçük elemanı olan "5" aranır ve liste 2,3,4,5,7,9,8,15,6 olur.
4. Adım: Listenin 5. en küçük elemanı olan "6" aranır ve liste 2,3,4,5,6,9,8,15,7 olur.

# [22,27,16,2,18,6] Dizinin insertion sort türüne göre aşamalarını, Big-O gösterimini ve Time Complexity: Dizi sıralandıktan sonra 18 sayısı worst, best ve avarage case'lerden hangisinin kapsamına girdiğini yazınız.

*Insterstion Sort Türüne Göre Aşamaları İçin;

1. Adım: 22 ve 27 arasında büyüklük kontrolü sağlanır ve sayı dizisi 22,27,16,2,18,6 olur.
2. Adım: 27 ve 16 arasında büyüklük kontrolü sağlanır ve sayı dizisi 22,16,27,2,18,6 olur.
3. Adım: 27 ile yer değişen 16 sayısının 22 ile kontrolü sağlanır ve sayı dizisi 16,22,27,2,18,6 olur.
4. Adım: Dizinin 3. Index'i olan 2 sayısı, bir önce ki sayılar ile kontrolü sağlanır ve sayı dizisi 2,16,22,27,18,6 olur.
5. Adım: Dizinin 4. Index'i olan 8 sayısı, bir önce ki sayılar ile kontrolü sağlanır ve sayı dizisi 2,16,18,22,27,6 olur.
5. Adım: Dizinin 5. Index'i olan 6 sayısı, bir önce ki sayılar ile kontrolü sağlanır ve sayı dizisi 2,6,16,18,22,27 olur.

*Bıg-O Gösterimi Aşamaları İçin;

1. Adım: n.(n+1)/2 formülü ile 5 Index'li dizimizi 6.(6+1)/2 formülü ile yazarız.
2. Adım: 6.7/2 olan işlemin cevabı "21"'dir.

*Tıme Complexity İçin;

Dizi küçükten boyüğü sıralandığı zaman 2,6,16,18,22,27 şeklinde olur. Buna bağlı olarak;

Avarage Case: Dizi sıralandığı zaman 18 dizinin en ortanca sayısı olduğu için en ideal seneryoyu temsil eder.
Best Case: Dizi sıralandığı zaman 2 istenilen en iyi senaryoyu temsil eder.
Worst Case: Dizi sıralandığı zaman 27 istenilen durum en kötü senaryoyu temsil eder.

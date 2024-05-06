/* ##### ##### ###### ##### ##### ###### ##### ###### ##### ##### */
/* ##### LocalStorage İçine Farklı Türde Veriler Eklemek ##### */

let user = "Kodluyoruz";
localStorage.setItem("userInfo", user);

// User objesini localStorage'da tutmak için setItem() fonksiyonu yukarıdaki gibi kullanılabilir. localStorage() içindeki görüntüsü aşağıda verilmiştir. Ancak daha kompleks objeler için bu kod satırı yetersizdir.
let userStatus = {userName: 'Kodluyoruz', isActive: true};
localStorage.setItem("user", userStatus);

// Daha kompleks işlemler için
localStorage.setItem("user", JSON.stringify(userStatus));

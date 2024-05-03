var userName = document.getElementById("myName");
var clockInfo = document.getElementById("myClock");
var reqName = prompt("Lütfen İsminizi Girin");


// Kullanıcı Adı İsteği
function bilgiIstek(){
    userName.innerHTML = reqName;
}

// Tarih Bilgisi
function showTime(){
    var userDate = new Date();
    var day = userDate.getDate();
    var month = userDate.getMonth() + 1;
    var year = userDate.getFullYear();
    var hours = userDate.getHours();
    var minutes = userDate.getMinutes();
    myClock.innerHTML = hours + ":" + minutes + " - " + day + "/" + month + "/" + year;

}

showTime();
bilgiIstek();

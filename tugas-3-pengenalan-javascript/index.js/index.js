// SOAL 1
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

var pertama1 = pertama.substring(0,4);
var pertama2 = pertama.substring(12,18);
var kedua1 = kedua.substring(0,6);
var kedua2 = kedua.substring(7,17).toUpperCase();
console.log(pertama1 +" "+pertama2+" "+kedua1+" "+kedua2);

// SOAL 2
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

var intpertama = parseInt(kataPertama);
var intkedua = parseInt(kataKedua);
var intKetiga = parseInt(kataKetiga);
var intKeempat = parseInt(kataKeempat);

console.log(kataPertama * kataKedua + kataKeempat - kataKetiga  );

// SOAL 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4,13); // do your own! 
var kataKetiga = kalimat.substring(15,18); 
var kataKeempat = kalimat.substring(19,25);
var kataKelima = kalimat.substring(25); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

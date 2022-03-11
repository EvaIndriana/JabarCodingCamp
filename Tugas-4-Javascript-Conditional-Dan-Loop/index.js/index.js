
//nilai >= 85 indeksnya A
//nilai >= 75 dan nilai < 85 indeksnya B
//nilai >= 65 dan nilai < 75 indeksnya c
//nilai >= 55 dan nilai < 65 indeksnya D
//nilai < 55 indeksnya E
 
// SOAL 1

var nilai = 90;
if( nilai >=85){
    console.log("INDEX A");
}else if(nilai >= 75 && nilai < 85){
    console.log("INDEX B");
}else if(nilai >= 65 && nilai < 75){
    console.log("INDEX C");
}else if(nilai >= 55 && nilai < 65){
    console.log("INDEX D");
}else{
    console.log("INDEX E");
}

var batas = "=========================";
console.log(batas)
//console.log("=========================")

//SOAL 2
var tanggal = 5;
var bulan = 1;
var tahun = 2001

var bulan = 1;
switch(bulan) {
  case 1:  
   { console.log('05 januari 2001');
    break; }
  case 2:  
    { console.log('salah input data');
     break; }
  default: 
   { console.log('mohon masukan data valid'); }
}

var batas = "=========================";
console.log(batas)

//SOAL 3
var s ="";
for( var n = 0; n<3; n++){
    for (var j = 0; j <= n; j++){
        s += "#";
    }
    s +="\n"
}
console.log(s)

var batas = "=========================";
console.log(batas)

var s ="";
for( var n = 0; n<7; n++){
    for (var n = 0; n <= n; n++){
        s += "#";
    }
    s +="\n"
}
console.log(s)

var batas = "=========================";
console.log(batas)


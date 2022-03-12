
//soal 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
console.log(daftarHewan[4]);
console.log(daftarHewan[0]);
console.log(daftarHewan[2]);
console.log(daftarHewan[3]);
console.log(daftarHewan[1]);

console.log("=================");

//soal 2

function introduce(perkenalan){
    var perkenalan = "nama saya" + perkenalan.name +
                        ", umur saya " + perkenalan.age +
                        ", alamat saya di " + perkenalan.address +
                        ", dan saya punya hobby yaitu  " + perkenalan.hobby
                        return perkenalan;
}
var data = {name : " Eva", age : 21, address : "kab.sukabumi", hobby : "olahraga"}
var perkenalan = introduce(data);
console.log(perkenalan);

console.log("=================");

//soal 3
function hitung_huruf_vokal(str){
    var  count = str.match(/[aiueo]/gi).length;
    return count;
}
var hitung_1 = hitung_huruf_vokal("Muhammad");
var hitung_2 = hitung_huruf_vokal("Iqbal");
console.log(hitung_1, hitung_2); 

console.log("=================");

//soal 4

 function tampilkanAngka(angka = 0) {
    return angka  + angka 
  }
   
  console.log(tampilkanAngka(0))
  console.log(tampilkanAngka(1)) 
  console.log(tampilkanAngka(2)) 
  console.log(tampilkanAngka(3)) 
  console.log(tampilkanAngka(5)) 
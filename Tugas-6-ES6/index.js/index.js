//soal 1
const luas = (alas, tinggi) => {
      const luas_segitiga = 0.5 * alas * tinggi;
      return `alas: ${alas} \n tinggi : ${tinggi} \n luas segitiga : ${luas_segitiga}`
}
const alas = 10;
const tinggi = 10;
console.log(luas(alas, tinggi));
console.log("\n")
console.log("==============================");


//soal 2


//soal 3
var studentName = {
  firstName: 'Muhaamd',
  lastName: 'Iqbal Mubaroq',
  address: 'Jalan Ranamanyar',
  hobby: 'playing football'
};

const {firstName, lastName, address,hobby} = studentName
console.log(firstName, lastName, address,hobby);

console.log("==============================");

//soal 4
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

const combined = [...west, ...east]
console.log(combined);

console.log("\n")
console.log("==============================");

//soal 5
const planet = "earth";
const view = "glass"
const hasil = `lorem ${view} dolor sit amet consectetur adipiscing elit ${planet}`;
console.log(hasil);


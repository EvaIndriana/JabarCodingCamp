function readBooks(time, book, callback ) {
  console.log(`saya membaca ${book.name}`)
  setTimeout(function(){
      let sisaWaktu = 0
      if(time >= book.timeSpent) {
          sisaWaktu = time - book.timeSpent
          console.log(`saya sudah membaca ${book.name}, sisa waktu saya ${sisaWaktu}`)
          callback(sisaWaktu) //menjalankan function callback
      } else {
          console.log('waktu saya habis')
          callback(time)
      }   
  }, book.timeSpent)
}

module.exports = readBooks 

// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
function readBooks(time){
    console.log(time);
}


//===========================================================


//=========================================================
books.forEach(element => readBooks(10000, element, (callbackFn) => {
      console.log(callbackFn)
  }))
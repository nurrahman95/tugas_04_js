var x = 178;
var y=  171;
var z=  174;

var pertama;
var kedua;
var ketiga;

function tinggibadan() {
  if (x>y) {
    if (x>z) {
      console.log("x paling tinggi");
      pertama=x;
      kedua=y;
      ketiga=z;

    } else {
      console.log("x ke 2 paling tinggi");
      pertama=z;
      kedua=x;
      ketiga=y;
    }

  }else if (x<z) {
    console.log(" x paling kecil");
    pertama=y;
    kedua=z;
    ketiga=x;
  }

}



tinggibadan()
console.log(pertama,kedua,ketiga)

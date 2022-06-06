function penampilAngka(stringAngka) {
    var genap = [];
      var ganjil = [];
      var i = 0;
  
          for( i; i < penampilAngka.length; i++) {
              if (penampilAngka[i] % 2 == 1) {
                  genap.push(nomor[i]);
              }else{
                  ganjil.push(nomor[i])
              }
          }
  }
  
  //Test case
  console.log(ganjil)
  console.log(penampilAngka("12345678")); // '1357'
  console.log(penampilAngka("1346789")); // '1379'
  console.log(penampilAngka("1298967")); // '1997'
  console.log(penampilAngka("43447453")); // '3753'
  console.log(penampilAngka("46824")); // ''
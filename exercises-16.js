function totalDigitRekursif(angka) {
    // you can only write your code here!
    var strAngka = String(angka);

    if(strAngka.length == 1) {
        return Number(angka);
    }
    else {
        var balikNum = strAngka[0]
        console.log(Number(balikNum))
        return Number(balikNum) + totalDigitRekursif(strAngka)
    }
    
  }
  
// TEST CASES
  console.log(totalDigitRekursif(512)); // 8
//   console.log(totalDigitRekursif(1542)); // 12
//   console.log(totalDigitRekursif(5)); // 5
//   console.log(totalDigitRekursif(21)); // 3
//   console.log(totalDigitRekursif(11111)); // 5
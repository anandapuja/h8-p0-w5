/*
Function angkaPrimaRange adalah function menerima angka dan memiliki 
ouput array berisi angka-angka perima sebelum angka tersesbut
cobalah kerjakan soal ini dengan modular function 

Rules : 
Dilarang menggunakan built-in function selain .push()
*/

function angkaPrima(angka) {
    // your code here

    let hasil = []
    for(i = 1; i <= angka; i++) {
        hasil.push(i);
    }
    return hasil;

}

function angkaPrimaRange(num) {
    // your code here
    let prima = angkaPrima(num)
    // console.log(prima)

    let arrNum = []
    for(i = 0; i < prima.length; i++) {

        if(prima[i] == 1){
            
        }
        else if(prima[i] == 2 || prima [i] == 3){
            arrNum.push(prima[i])
        }
        else{
            let isPrime = true;
            for(j = 2; j < prima[i]; j++) {
                if(prima[i] % j == 0) {
                    isPrime = false;
                }
            }
            if(isPrime) {
                arrNum.push(prima[i])
            }

        }
    }
    
    return arrNum
}

// TEST CASES
console.log(angkaPrimaRange(6)); // [ 1, 2, 3, 5 ]
console.log(angkaPrimaRange(33)); // [ 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ]
/**
Diberikan sebuah function subset() yang menerima 2 parameter berisi
array. Yaitu arr1 dan arr2 yang keduanya berisi angka.
Function subset akan mengecek apakah arr1 merupakan subset dari arr2.
Artinya, semua angka di arr1 harus berada di arr2.
Angka di arr1 adalah angka unik, sehingga tidak ada angka yang muncul
2 kali di arr1.
 
RULES:
WAJIB MENULISKAN PSEUDOCODE SEBELUM MEMBUAT CODE
Dilarang menggunakan built-in function selain .push()
 
*/

//Tulislah Pseudocode disini
/*
SET nilai to empty array
FOR i to arr1 length
    FOR j to arr2 length
        IF arr1 equal to arr2
        push to nilai TRUE
    ENDFOR
ENDFOR

SET nilaiAkhir to TRUE
FOR i to nilai length
    IF nilai i FALSE
    RETURN false
ENDFOR

RETURN nilaiAkhir
*/


function subset(arr1,arr2) {
 //tulis function disini

    // YANG DIKERJAKAN TADI
    let nilai = [];

    for(i = 0; i < arr1.length; i++) {
        let flag = false;
        for(j = 0; j < arr2.length; j++) {
            if( arr1[i] == arr2[j] ) {
                flag = true;
            }
        }
        nilai.push(flag)
    }

    let flag2 = false;
    for(i = 0; i < nilai.length; i++) {
        if(nilai[i] == false) {
            flag2 = true;
        }
    }
    return !flag2;
}

console.log(subset([3,9,5],[1, 3, 9, 5, 8, 44])); //true
console.log(subset([1,3], [1,3,5,7,8])) //true
console.log(subset([4, 8, 7], [7, 4, 4, 4, 9, 8])) //true
console.log(subset([1, 3], [1, 33])) //false
console.log(subset([1, 3, 10], [10, 8, 8, 8])) //false


/*

*****
*   *
*   *
*   *
*****

*/

// let bintang = 5;
// for(i = 1; i <= 5; i++) {
//     if(i == 1 || i == 5) {
//         let temp = '';
//         for(j = 1; j <= 5; j++) {
//             temp += '*';
//         }
//         console.log(temp);
//     }
//     if(i != 1 && i != 5) {
//         let temp2 = '';
//         for(k = 1; k <= 5; k++) {
//             if(k == 1 || k == 5) {
//                 temp2 += '*';
//             }
//             else {
//                 temp2 += ' ';
//             }
//         }
//         console.log(temp2)
//     }
// }
/*
Buatlah sebuah program untuk merubah multidimensi array menjadi sebuah array
Input:
    Program ini menerima sebuah input berupa multidimensi array
Proses :
    Buatlah sebuah array baru
    Lakukan penambahan data dengan urutan dari kiri kebawah (column)
    Ilustrasi :
    ⭣[1, 2, 3,]
    ⭣['c', 'd', 'e']
    Setelah itu pindah ke kolom sebelahnya dst.
*/

function interleave(data) {
    // your code here
    if(data.length == '0') {
        return `[]`
    }
    let arrResult = [];
    for(i = 0; i < data[0].length; i++) {
        for(j = 0; j < data.length; j++) {
            arrResult.push(data[j][i]);
        }
    }
    return arrResult
}

console.log(interleave([[1, 2, 3], ["c", "d", "e"]]))
//[1, "c", 2, "d", 3, "e"]
console.log(interleave([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
// [1, 4, 7, 2, 5, 8, 3, 6, 9]
console.log(interleave([]))
// []
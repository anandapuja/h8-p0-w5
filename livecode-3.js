/**
Reverse Image 

Diberikan sebuah array 2 dimensi yang berisi angka. Tugas kalian adalah mengubah isi dari elemen-elemen array tersebut.
Yang harus diubah ada 3 hal:
1. Urutan dari array di dalam array-2-dimensi harus dibalik, jadi array di paling akhir harus ditaruh di paling awal.
2. Urutan dari item di dalam array harus diubah urutannya, jadi item yang berada di paling kanan akan berada di paling kiri.
3. Jika ada angka 0 pada index tersebut, maka angka tersebut harus ditukar dengan angka 1 dan begitu juga sebaliknya

Lihatlah test-case untuk contoh kasus

RULES:
-Dilarang menggunakan built-in function selain .push()

*/
  
function reverse(arr){
    //implementasi function disini 

      var balik = []
        for(j = arr.length-1; j >=0; j--) {
          balik.push(arr[j]);
        }
      // console.log(balik) 

      for(i = 0; i < balik.length; i++) {
          for(j = 0; j < balik[i].length; j++) {
              if(balik[i][j] == 1) {
                balik[i][j] = 0;
              }
              else if(balik[i][j] == 0) {
                balik[i][j] = 1;
              }
          }
      }
      /* YANG DIKERJAKAN TADI SALAH PAHAM SAMA SOAL */
      // var penampung = 0;
      // for(i = 0; i < balik.length; i++) {
      //       penampung = balik[i][0];
      //       balik[i][0] = balik[i][balik[i].length-1];
      //       balik[i][balik[i].length-1] = penampung
      // }

      // return balik;

      /* PERBAIKAN KODE */
      var resultAkhir = []
      var resultSementara = []
      for(i = 0; i < balik.length; i++){
          for(j = balik[i].length-1; j >= 0; j--) {
              resultSementara.push(balik[i][j]);
          }
          resultAkhir.push(resultSementara);
          resultSementara = [];
      }

      return resultAkhir;
}


console.log(reverse(
    [[1, 2, 3],
    [0, 1, 5],
    [0, 3, 1]]));
/**
[ [ 0, 3, 1 ], 
  [ 5, 0, 1 ], 
  [ 3, 2, 0 ] ]
 */

console.log(reverse([[1,2,3],[4,5,6],[7,8,9]])); 
// /*
// [ [ 9, 8, 7 ], 
//   [ 6, 5, 4 ], 
//   [ 3, 2, 0 ] ] */

console.log(reverse([[1,2,3,4], [0,1,2,3,4], [0,0,1,3,4], [1,3,4,5,6,7,8]]))
// /*
// [
//   [ 8, 7, 6, 5,
//     4, 3, 0 ],
//   [ 4, 3, 0, 1, 1 ],
//   [ 4, 3, 2, 0, 1 ],
//   [ 4, 3, 2, 0 ]
// ]
// */

console.log(reverse([])); //[]
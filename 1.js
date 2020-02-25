/*
Title Givers 
Function titleGivers akan menerima dua parameter dimana parameter pertama merupakan array yang berisi nama.
Dan pada bagian kedua, adalah title yang akan di berikan kepada pemilik nama di array yang di berikan.
Jika title yang di berikan di mulai dengan koma `,` maka title akan di tuliskan.
Jika tidak, maka title akan di tuliskan di depan dan dipisahkan dengan spasi ` `.
Contoh ada pada test case.

[RULE]
- Buatlah pseudocode!
- Dilarang menggunakan built-in function kecuali .push()
*/

function titleGivers(targetArr, title) {
  // your code here..
  let nama = [];
  for(i = 0; i < targetArr.length; i++) {
      if(title[0] == ',') {
          nama.push(`${targetArr[i]}${title}`)
      }
      else{
          nama.push(`${title} ${targetArr[i]}`)
      }
  }

  return nama
}

console.log(titleGivers(['Awtian Akbar', 'Kobayakawa Sena', 'Yoichi Hiruma'], 'Mr.'));
// [ 'Mr. Awtian Akbar',
//   'Mr. Kobayakawa Sena',
//   'Mr. Yoichi Hiruma' ]

console.log(titleGivers(['Dre', 'Brock', 'Leorio'], 'Dr.'));
// [ 'Dr. Dre', 'Dr. Brock', 'Dr. Leorio' ]

console.log(titleGivers(['Boush', 'Squee', 'Spleen', 'Spoon'], ', ST'));
// [ 'Boush, ST', 'Squee, ST', 'Spleen, ST', 'Spoon, ST' ]
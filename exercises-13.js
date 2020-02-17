// Logic Challenge - Most Frequent Largest Numbers

function sorting(arrNumber) {
  // code di sini
  for(i = 0; i < arrNumber.length; i++) {
      let temp;
      for(j = 0; j <arrNumber.length; j++) {
          if(arrNumber[i] > arrNumber[j]) {
              temp = arrNumber[i];
              arrNumber[i] = arrNumber[j];
              arrNumber[j] = temp
          }
      }
  }

  return arrNumber;
}

function getTotal(arrNumber) {
  // code di sini
  
  // console.log(arrNumber)
  var temp = []
  for(i = 0; i < arrNumber.length; i++) {
      var cek = false;
      for(j = 0; j < temp.length; j++) {
          if(arrNumber[i] == temp[j][0]) {
            temp[j][1]++;  
            cek = true;
          }
      }

      if(!cek) {
          temp.push([arrNumber[i], 1])
      }

  }
  // console.log (temp)
  if(arrNumber.length == 0) {
      return `''`;
  }

  return `angka paling besar adalah ${temp[0][0]} dan jumlah kemunculan sebanyak ${temp[0][1]} kali`;
  
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  // console.log(listSort)
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
//Logic Challenge - Cari Pelaku (Regex)

function cariPelaku(str) {
    // you can only write your code here!
    let pelaku = str.match(/abc/gi).length;
    // console.log(pelaku);
    return pelaku;
  }
  
  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3
  console.log(cariPelaku('babcbacabc')); // 2
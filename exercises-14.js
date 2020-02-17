// Logic Challenge - Password Generator

function changeVocals (str) {

    //code di sini
    let hurufVokal = 'aiueoAIUEO';
    let hurufPengganti = 'bjvfpBJVFP'

    let namaBaru = '';
    for(i = 0; i < str.length; i++) {
        let flag = false;
        for(j = 0; j < hurufVokal.length; j++) {
            if(str[i] == hurufVokal[j]) {
                namaBaru += hurufPengganti[j];
                flag = true;
            }
        }
        if(!flag) {
            namaBaru += str[i];
        }
        if(str[i] == ' '){
            namaBaru += ' ';
        }
    }
    return namaBaru;

}
  
function reverseWord (str) {

    // code di sini
    let revVokal = '';
    for(i = str.length-1; i >= 0; i--) {
        revVokal += str[i];
    }
    return revVokal;

}
  
function setLowerUpperCase (str) {

    //code di sini
    let besar = str.toUpperCase();
    let kecil = str.toLowerCase();
    let ukuran = ''
    for(i = 0; i < str.length; i++) {
        if(str[i] == besar[i]) {
            ukuran += kecil[i];
        }
        else if(str[i] == kecil[i]) {
            ukuran += besar[i];
        }
    }
    return ukuran;

}
  
function removeSpaces (str) {
    //code di sini

    let result = '';
    for(i = 0; i < str.length; i++) {
        if(str[i] != ' ') {
            result += str[i];
        }
    }
    return result;

}
  
function passwordGenerator (name) {

    //code di sini
    let vokal = changeVocals(name);
    // console.log(vokal)

    let reverseVokal = reverseWord(vokal);
    // console.log(reverseVokal)

    let lowerCase = setLowerUpperCase(reverseVokal);
    // console.log(lowerCase)

    let hapusSpasi = removeSpaces(lowerCase);

    if(name.length <= 4) {
        return `Minimal karakter yang diinputkan adalah 5 karakter`;
    }
    return hapusSpasi;

}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
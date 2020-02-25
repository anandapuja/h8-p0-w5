/*
GET TEMAN
function getTeman menerima 2 paramater yang pertama adalah array of strings dan yg ke 
parameter kedua adalah string.
function ini akan mencari teman yang memiliki nomer indonesia dan gendernya laki-laki

Rules: 
 Dilarang menggunakan built-in function selain .push()
*/

function getTeman(data, template) {
    // your code here..


    let result = [];
    let objData = {}
    for(i = 0; i < data.length; i++) {

        let strMahasiswa = ''
        let mahasiswa = []

        for(k = 0; k < data[i].length; k++) {
            if(data[i][k] == ',') {
                mahasiswa.push(strMahasiswa);
                strMahasiswa = ''
            }
            else{
                strMahasiswa += data[i][k]
            }
        }

        mahasiswa.push(strMahasiswa);
        // console.log(mahasiswa)

        objData = {
            fullName: `${mahasiswa[0]} ${mahasiswa[1]}`,
            gender: mahasiswa[2],
            phone: mahasiswa[3]
        }

        // console.log(objData)
        for(j = 0; j < mahasiswa[3].length; j++){
            // console.log(mahasiswa[3].length)
            if(mahasiswa[3][2] == '2') {
                result.push(objData);
                break;
            }
        }
    }

    return result;

}

const datas = [
    "Claudette,Dreng,Female,+63-952-343-8477",
    "Wilton,Jarville,Male,+62-388-568-9918",
    "Cosette,Jachimczak,Female,+351-759-588-8682",
    "Verne,Antunes,Male,+62-459-995-2535"
]


console.log(getTeman(datas, "firstName,lastName,gender,phone"))
// [
//     {
//       fullName: 'Wilton Jarville',
//       gender: 'Male',
//       phone: '+62-388-568-9918'
//     },
//     {
//       fullName: 'Verne Antunes',
//       gender: 'Male',
//       phone: '+62-459-995-2535'
//     }
// ]
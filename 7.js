/*
Get List Movies
adalah function yang memiliki input array yang merupakan kumpulan array dengan format 
['rating', 'name', 'waktu hitungan jam',  'year']
function ini adalah modular function. bentuk dari function getListMovies DILARANG UNTUK DI UBAH 

Input dari function ini adalah object
yang menggroupkan movies berdasarkan tahunnya dan data movie sudah di sorting berdasarkan rating dan waktu berbentuk menit 

Rules :
Dilang menggunakan built-in function selain .push() 

*/


/* Function converstionTime akan mengubah value waktu dalam kumpulan array menjadi waktu format menit
Ouput array 2D:
[
    [ 8, 'Avatar Eng', 90, 2015 ],
    [ 10, 'Anna & Eli', 150, 2013 ],
    ...
]
*/
function converstionTime(list) {
    // your code here..

    let arrResult = []
    let arr = [];
    let time;
    for(i = 0; i < cartoons.length; i++) {

        let waktuJam = ''
        let waktuMenit = ''

        let isTitikDua = false;
        for(j = 0; j < cartoons[i][2].length; j++) {
            if(cartoons[i][2][j] == ':') {
                isTitikDua = true;
            }
            if(!isTitikDua) {
                waktuJam += cartoons[i][2][j]
            }
            else if(isTitikDua && cartoons[i][2][j] == Number(cartoons[i][2][j])) {
                waktuMenit += cartoons[i][2][j]
            }
        }

        time = Number(waktuJam) * 60 + Number(waktuMenit)

        arr.push(cartoons[i][0], cartoons[i][1], time, cartoons[i][3])
        arrResult.push(arr)
        arr = []

    }
    // console.log(arrResult)
    return arrResult

}

/* Function sortByRating akan mengurutkan movies berdasarkan ratingnya secara descanding
ouput berupa array of array
[
    [ 8, 'Avatar Eng', 90, 2015 ],
    [ 10, 'Anna & Eli', 150, 2013 ],
    [ 6, 'Hungry Bird', 120, 2013 ],
    ... 
] 
*/
function sortByRating(list) {
    // your code here..
    let timeResult = converstionTime(cartoons)
    // console.log(timeResult)
    let temp;
    for(i = 0; i < timeResult.length; i++){
        for(j = 0; j < timeResult.length; j++){
            if(timeResult[i][0] > timeResult[j][0]){
                temp = timeResult[i]
                timeResult[i] = timeResult[j]
                timeResult[j] = temp
            }
        }
    }

    return timeResult
}


/*Function groupByYear akan menggelompokkan data movies berdasarkan tahunnyanya
Ouput berupa object dengan keyname tahun dan value dari tahun adalah array of objects
format object untuk permovienya
{name : '<name>', time: '<time in minute> minutes', rating : '<rating>/10'}
*/
function groupByYear(arr) {
    // your code here..
    let sorting = sortByRating(cartoons)
    // console.log(sorting)

    let objResult = {}
    for(i = 0; i < sorting.length; i++) {
        let isTahun = false;
        let objFilm = {}
        if(objResult[sorting[i][3]] == undefined) {
            objResult[sorting[i][3]] = []
            objFilm.name = sorting[i][1],
            objFilm.time = sorting[i][2] + ' minutes',
            objFilm.rating = sorting[i][0] + ' /10'
            objResult[sorting[i][3]].push(objFilm)
            isTahun = true;
        }
        if(!isTahun){
            objFilm.name = sorting[i][1],
            objFilm.time = sorting[i][2] + ' minutes',
            objFilm.rating = sorting[i][0] + ' /10'
            objResult[sorting[i][3]].push(objFilm)
        }
        // console.log(objResult[sorting[3]])
        // break;
        // if(!isTahun)
    }
    return objResult

}


/* Function getListMovies akan memberikan data movies yang sudah di arrage tahun dan rating, 
    dan sudah mengkonfersi waktu pada data movie berupa menit. */
function getListMovies(movie) {
    return groupByYear(sortByRating(converstionTime(movie)))
}

var cartoons = [
    [8, 'Avatar Eng', '1:30', 2015],
    [10, 'Anna & Eli', '2:30', 2013],
    [6, 'Hungry Bird', '2:00', 2013],
    [9, 'Lion Kong', '1:20', 2020],
    [5, 'Megomind', '1:15', 2015],
    [6, 'Sonyc', '2:10', 2020],
    [5, 'Zoopio', '1:20', 2015]
]

console.log(getListMovies(cartoons))
/*
{
    '2013': [
        { name: 'Anna & Eli', time: '150 minutes', rating: '10/10' },
        { name: 'Hungry Bird', time: '120 minutes', rating: '6/10' }
    ],
    '2015': [
        { name: 'Avatar Eng', time: '90 minutes', rating: '8/10' },
        { name: 'Megomind', time: '75 minutes', rating: '5/10' },
        { name: 'Zoopio', time: '80 minutes', rating: '5/10' }
    ],
    '2020': [
        { name: 'Lion Kong', time: '80 minutes', rating: '9/10' },
        { name: 'Sonyc', time: '130 minutes', rating: '6/10' }
    ]
}
*/
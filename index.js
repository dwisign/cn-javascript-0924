var cars = "Avanza, Mobilio, Ayla, Brio, Jazz"
console.log(cars)
//document.writeln(cars)

var gretting = "Hello World"
console.log(gretting)
//document.writeln(gretting)

var dataString = "Ini string"
var dataNumber = 1
var dataBoolean = true //false
var a = 20
var b = 30
var result = a*b

console.log(dataString)
console.log(dataNumber)
console.log(dataBoolean)
console.log(result)


//VAR & CONST
// var dataString = "Ini bukan String"
// console.log(dataString)

// const dataConst = "hello"
// const dataConst = "World"
// console.log(dataConst)


//OPERATION ARITMETIKA
const resultTambah = 3 + 5
console.log(resultTambah)

const resultKurang = '3' - 5
console.log('TEST', resultKurang)

const resultBagi = 10 / 4
console.log(resultBagi)

const resultSisaBagi = 10 % 4
console.log(resultSisaBagi)


//OPERATOR PERBANDINGAN
const resultTipeData = 5 === '5' //akan ngecek tipe data
//const resultTipeData = 5 == '5' //tidak ngecek tipe data
console.log(resultTipeData)

const resultLebihDari = 5 > 3
console.log(resultLebihDari)

const resultKurangDari = 5 < 3
console.log(resultKurangDari)


//OPERATOR LOGIKA
const nilaiUjian = 75
const nilaiAbsen = 75

const lulusUjian = nilaiUjian >= 75
const lulusAbsen = nilaiAbsen >= 75

const lulusSempurna = lulusUjian && lulusAbsen
const lulusSaja = lulusUjian || lulusAbsen

console.log('Lulus Sempurna:', lulusSempurna)
console.log('Lulus Saja:', lulusSaja)


//CONDITIONAL
// if (nilaiUjian >= 75) {
//     console.log('LULUS')
// } else {
//     console.log('TIDAK LULUS')
// }

if (nilaiUjian >= 75 && nilaiAbsen >= 75){
    console.log("LULUS SEMPURNA")
}else if(nilaiUjian < 75 && nilaiAbsen >= 75){
    console.log("LULUS SAJA")
}else if(nilaiUjian >= 75 && nilaiAbsen < 75){
    console.log("LULUS SAJA")
}else {
    console.log("TIDAK LULUS")
}

//TERNERY OPERATOR
const kelulusanSiswa = nilaiUjian >= 75 && nilaiAbsen >= 75 ? 'LULUS SEMPURNA' : (nilaiUjian < 75 && nilaiAbsen >= 75) || nilaiUjian >= 75 && nilaiAbsen < 75 ? 'LULUS SAJA' : 'TIDAK LULUS'
console.log('HASIL KELULUSAN: ', kelulusanSiswa)


//ARRAY
const mobil = [
    'Ayla',
    'Agya',
    'Calya',
    'Sigra',
    'Jazz',
    'Mobilio',
    'BRV'
]
console.log(mobil)
console.table(mobil)



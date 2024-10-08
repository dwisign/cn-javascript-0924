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

//get data index n
console.log('Data Index ke 4 = ', mobil[4])

//Find length/jumlah data
console.log(mobil.length)

//ARRAY METHODS
mobil.push('Kijang')
console.log(mobil)


//LOOPING

//for
for(index = 0; index < mobil.length; index += 1){
    console.log(mobil[index])
}

//for in
const user = {
    fullName : 'Jhon',
    email : 'jhon@mail.co',
    age:  '25'
}
let print = ''
for(let data in user){
    print += user[data] + ' '
}
console.log(print)


//for of
// let print2 = ''
// for(let data2 of user){
//     print2 += data2
// }
// console.log(print2)

const food = [
    {
        id : 1,
        rasa: 'Manis',
        warna: 'Merah',
        bentuk: 'Bulat'
    },
    {
        id : 2,
        rasa: 'Pahit',
        warna: 'Kuning',
        bentuk: 'Kotak'
    },
    {
        id : 3,
        rasa: 'Asam',
        warna: 'Hijau',
        bentuk: 'Bulat'
    }
]
food.forEach(foods => {
    for(let value in foods){
        console.log(`${foods[value]}`)
        //data = `${foods[value]}`
        //document.getElementsByTagName('p').innerHTML = data
    }
})


//FUNCTION

//declaration
function userLogin(fullname, email){
    console.log(`Full Name: ${fullname}, Email: ${email}`)
}
userLogin('Dwi Pamungkas', 'dw.pamungkas@gmail.com')


//expression1
const userLogin2 = function(fullname, email){
    const resultUser = `Full Name: ${fullname}, Email: ${email}`
    return resultUser
}
console.log(userLogin2('Dwi Pamungkas', 'dw.pamungkas@gmail.com'))


//expression2 - arrow function
const userLogin3 = (fullname, email) => {
    const resultUser = `Full Name: ${fullname}, Email: ${email}`
    return resultUser
}
console.log(userLogin3('Dwi Pamungkas', 'dw.pamungkas@gmail.com'))



/////////////// Date ////////////////
let now = new Date()

// console.log(now);

// 1. getFullYear - hozirgi yil

let currYear = now.getFullYear()

console.log('Yil:' , currYear);


// 2. getMonth - hozirgi oy


const oylar = [
    'Yanvar',
    'Fevral',
    'Mart',
    'Aprel',
    'May',
    'Iyun',
    'Iyul',
    'Avgust',
    'Sentabr',
    'Oktabr',
    'Noyabr',
    'Dekabr',
]

let currMonth = now.getMonth()
let month = oylar[currMonth]
console.log('Oy:' , month);

// console.log('Oy:' , currMonth + 1);



// 3.  getDay() - hozirgi hafta kun

const kunlar = [
    'Dushanba',
    'Seshanba',
    'Chorshnba',
    'Payshanba',
    'Juma',
    'Shanba',
    'Yakshanba',
]

let currWeekDay = now.getDay() - 1
let day = kunlar[currWeekDay]
console.log('Kun:' , day);


// 4. getHours() - hozirgi soat
let currHour = now.getHours()
console.log('Soat:' , currHour);

// 5. getMinutes() - hozirgi daqiqa
let currMinute = now.getMinutes()
console.log('Daqiqa' , currMinute);

// 6. getSeconds() - hozirgi soniya
let currSecond = now.getSeconds()
console.log('Soniya:' , currSecond);


// ///////////////////// Timerlar /////////////////////////////
// setTimeOut() - funksiyani malum bir vaqtdan kegin ishga tushurib beradi
let timeout1 = setTimeout(() => {
    alert('Tizim da xammasi joyida')
}, 3000)

// clearTimeout - stTimeOut() ni toxtab qoyadi
clearTimeout(timeout1)

// 2. setInterval() - malum bir soniya da tohtmay ishlab turadi
let interval1 = setInterval(() => {
    console.log("Har 1 soniyada ishga tushadi"); 
} , 1000)


// clearTimeout - setInterval() ni toxtab qoyadi
clearInterval(interval1)











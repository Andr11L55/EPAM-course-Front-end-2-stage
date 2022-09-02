function getAge(date){
    // let today = new Date(2020, 9, 22)
    let today = new Date()
    console.log(today.getFullYear())
    let age = today.getFullYear() - date.getFullYear()
    console.log(age)
      if (today.getMonth() <= date.getMonth() && today.getDate() !== date.getDate()) {
        age -= 1;
      }else if(today.getMonth() > date.getMonth() || today.getDate() <= date.getDate()){
          age
      }
    return age
}
const birthday22 = new Date(2000, 9, 22);
const birthday23 = new Date(2000, 9, 23);
console.log(getAge(birthday22)) // 20 (assuming today is the 22nd October)
console.log(getAge(birthday23)) // 19 (assuming today is the 22nd October)

function getWeekDay(date){
    // if(date === Date.now()){
    //     let today = new Date(2020, 9, 22)
    //     date = today
    // }
     let weeks = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
     let data = new Date(date)
    if(weeks[data.getDay()]===weeks[0]){
        weeks[data.getDay()]=weeks[6]
        console.log()
        return weeks[data.getDay()]
    }
    return weeks[data.getDay()-1]
}
console.log(getWeekDay(Date.now())) // "Thursday" (if today is the 22nd October)
console.log(getWeekDay(new Date(2020, 9, 22))) // "Thursday"

function getAmountDaysToNewYear(){
    let today = new Date()
    let msPerDay = 24*60*60*1000;
    // let today = new Date(2021, 7, 30)
    // let today = new Date(2021, 0, 1)
    let newYear = new Date(2022, 0, 1)
    if(today.getDate()===newYear.getDate() && today.getMonth()===newYear.getMonth()){
        return Math.round((newYear.getTime() - today.getTime())/msPerDay)
    }
    
    return Math.round((newYear.getTime() - today.getTime())/msPerDay)
}
console.log(getAmountDaysToNewYear()) // 124 (if today is the 30th August)
console.log(getAmountDaysToNewYear()) // 365 (if today is the 1st January)

function getProgrammersDay(year){
    let date
    if(year%4===0){
        date = new Date(year, 8, 12 )
    }else{
        date = new Date(year, 8, 13 )
    }
    let data = date.toString().split(' ')
    return `${data[2]} ${data[1]}, ${year} (${getWeekDay(date)})`
}
console.log(getProgrammersDay(2020)) // "12 Sep, 2020 (Saturday)"
console.log(getProgrammersDay(2019)) // "13 Sep, 2019 (Friday)"

function howFarIs(day){
    const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)
    const daysNumbers = {
        'monday':1,
        'tuesday':2, 
        'wednesday':3, 
        'thursday':4, 
        'friday':5,
        'saturday':6, 
        'sunday':7 
    }
    let today = daysNumbers[getWeekDay(new Date()).toLowerCase()]
    let date = daysNumbers[day.toLowerCase()]
    console.log()
    if(today===date){
        return `Hey, today is ${getWeekDay(new Date())} =)` 
    }else if(today > date){
       return `It's ${7-today+date} day(s) left till ${capitalizeFirstLetter(day)}.`
    }else{
        return `It's ${date-today} day(s) left till ${capitalizeFirstLetter(day)}.`
    }
}
console.log(howFarIs('friday')) // "It's 1 day(s) left till Friday." (on October 22nd)
console.log(howFarIs('Thursday'))// "Hey, today is Thursday =)" (on October 22nd)

// function isValidIdentifier(val){
//     let reg = /[A-Za-z_$]{1}[A-Za-z0-9_$]{0,55}/gi
//     let test = val.match(reg) 
//     console.log(test)
//     if(test[0]===val){
//         return true
//     }else{
//         return false
//     }
// }
const isValidIdentifier = variableName => !!variableName.match('^[a-zA-Z$_][a-zA-Z$_0-9]*$');


console.log(isValidIdentifier('myVar')); // false
// isValidIdentifier('myVar!'); // false
// isValidIdentifier('myVar$'); // true
// isValidIdentifier('myVar_1'); // true
// isValidIdentifier('1_myVar'); // false


const capitalize = (text) => text.replace(/(\b[a-z](?!\s))/g, (x) => x.toUpperCase());

console.log(capitalize("My name is John Smith. I am 27."))

const isValidAudioFile = (fileName) => {
    let fileParts = fileName.split('.');
    // console.log(fileParts)
    if(fileParts[0].replace(/[^a-zA-Z]/g,"")!==fileParts[0]) {
        return false;
    }
    switch(fileParts[1]){
        case 'mp3':
        case 'flac':
        case 'alac':
        case 'aac': return true;
        default: return false; 
    }
}

console.log(isValidAudioFile('file.mp4')); // false
console.log(isValidAudioFile('my_file.mp3')); // false
console.log(isValidAudioFile('File.mp3')); // true

const getHexadecimalColors = (text) => text.match(/#([a-f0-9]{3}){1,2}\b/gi)


console.log(getHexadecimalColors("color: #3f3; background-color: #AA00ef; and: #abcd"))

const isValidPassword = (password) => !!password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")

console.log(isValidPassword('agent007'), // false (no uppercase letter)
isValidPassword('AGENT007'), // false (no lowercase letter)
isValidPassword('AgentOOO'), // false (no numbers)
isValidPassword('Age_007'),// false (too short)
isValidPassword('Agent00888')
)

const addThousandsSeparators = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

console.log(addThousandsSeparators("1234567890")); // "1,234,567,890"
console.log(addThousandsSeparators(1234567890)); 

const getAllUrlsFromText = (text) => text.match(/(https?:\/\/[^\s]+)/g) || [] 

const text1 = 'We use https://translate.google.com/ to translate some words and phrases from https://angular.io/ ';
const text2 = "JavaScript is the best language for beginners!"
 // ["https://translate.google.com/", "https://angular.io/"]
 // []
 // (error)
console.log(getAllUrlsFromText(text1))
console.log(getAllUrlsFromText(text2))
// console.log(getAllUrlsFromText())
// ... ( залишилося6 рядків)


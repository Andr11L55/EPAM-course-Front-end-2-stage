function reverseNumber(num) {
    return console.log(
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num))                 
}
console.log(`Reverse numbers:`)
reverseNumber(12345)
reverseNumber(-56789)

function forEach(arr, func) {
    for(let i = 0; i < arr.length; i++) {
        func(arr[i])
    }
    }
    console.log(`ForEach method:`)
forEach([2,5,8], (el) => console.log(el) ) 

function map(arr, func) {
    const tempArr = []
    forEach(arr, (element) => {
        tempArr.push(func(element))
    })
    return tempArr;
 }
 console.log(`Map method:`)
 console.log(map([2, 5, 8], (el) => el + 3 )) // returns [5, 8, 11]
 console.log(map([1, 2, 3, 4, 5], (el) => el * 2 )) // returns [2, 4, 6, 8, 10]

function filter(arr, func) {
    let tempArr = [];
    forEach(arr, (element) => {
        if(func(element)){
            tempArr.push(element)
        }
    })
    return tempArr; 
}
console.log(`Filter method:`)
console.log(filter([2, 5, 1, 3, 8, 6], (el) => el > 3 )) // returns [5, 8, 6]
console.log(filter([1, 4, 6, 7, 8, 10], (el) => el % 2 === 0 )) //returns [4, 6, 8, 10]

const people = [
    {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'age': 39,
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
    },
    {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'age': 38,
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
    },
    {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'age': 2,
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
    },
    {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'age': 17,
    'eyeColor': 'green',
    'name': 'Weiss',
    'favoriteFruit': 'banana'
    }
    ]
    
function getAdultAppleLovers(data) {
    let arr = filter(data, (el) => el.age > 18 && el.favoriteFruit === 'apple')
    return map(arr, (el) => el.name);
}
console.log(`Apple lovers:`)
console.log(getAdultAppleLovers(people))
 
function getKeys(obj) {
    console.log(Object.keys(obj))
}
console.log(`Get keys:`)
getKeys({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [“keyOne”, “keyTwo”, “keyThree”]

function getValues(obj) {
    console.log(Object.values(obj))
 }
 console.log(`Get values:`)
getValues({keyOne: 1, keyTwo: 2, keyThree: 3}) // returns [1, 2, 3]

 function showFormattedDate(dateObj) {
    const month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov', 'Dec']
    // console.log(new Date('2018-08-27T01:10:00'))
    // const date = new Date('2018-08-27T01:10:00')
    // console.log(date.getDate())
    console.log(`It is ${dateObj.getDate()} of ${month[dateObj.getMonth()]}, ${dateObj.getFullYear()}`)
 }
 console.log('Date format:')
 showFormattedDate(new Date('2018-08-27T01:10:00')) // returns ‘It is 27 of Aug, 2018’
 // every month should be showed as 3 letters (e.g. Feb, Apr or Dec)
 showFormattedDate(new Date())

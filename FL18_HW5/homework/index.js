function isEquals(num1,num2){
    return num1===num2
}
console.log(`Function 1:`)
console.log(isEquals(3,3))

function isBigger(num1,num2){
    return num1>=num2
}
console.log(`Function 2:`)
console.log(isBigger(5,-1))

function storeNames(...arg){
        return arg
}
console.log(`Function 3:`)
console.log(storeNames('Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy'))
// => ['Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy']

function getDifference(num1,num2){
    if(num2>num1){
        let a=num1
        num1=num2
        num2=a;
    }
    // return Math.abs(num1-num2)
    return num1-num2
}

console.log(`Function 4:`)
console.log(getDifference(5, 3)) // => 2
console.log(getDifference(5, 8)) // => 3

function negativeCount(arr){
    let count=0
    for (let i of arr){   
        if (i<0){
            count++
        }
    }
    return count
}
console.log(`Function 5:`)
console.log(negativeCount([4, 3, 2, 9])) // => 0
console.log(negativeCount([0, -3, 5, 7])) // => 1

function letterCount(str1, str2){
    let counter=0
    for(let letter1 of str1){
        for(let letter2 of str2){
            if(letter1===letter2){
                counter++
            }
    } 
        }  
    return counter
}
console.log(`Function 6:`)
console.log(letterCount('Marry', 'r')) // => 2
console.log(letterCount('Barny', 'y'))// => 1
console.log(letterCount('', 'z')) // => 0

// function countPoints(games) {
//     let total = 0;
//     games.map(match => { 
//             let x = +(match[0]+match[1]+match[2])
//         // console.log(x)
//        let y = +(match[4]+match[5]+match[6])
//         // console.log(y)
//         if(x>y){
//             total+=3
//         }else if(x===y){
//             total+=1
//         }
//         return total
// }
// )
//     return total
// }

function countPoints(games) {
    let total=0
    games.map(game => {
        if (+game.split(':')[0] > +game.split(':')[1]) {
 total+=3
//  console.log(total) 
} else if(+game.split(':')[0] === +game.split(':')[1]) {
 total+=1 
//  console.log(total) 
}else{
    total+=0
}
    return total
}
    )
    return total
}

console.log(`Function 7:`)
console.log(countPoints(['100:90', '110:98', '100:100', '95:46', '54:90', '99:44', '90:90', '111:100'])) // => 17
// console.log(countPoints(['100:90 ', '110:98 ', '100:100', '95 :46 ', '54 :90 ', '99 :44 ', '90 :90 ', '111:100'])) // => 17
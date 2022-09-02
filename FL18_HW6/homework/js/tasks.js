// 1
const getMaxEvenElement = arr => {
    return arr.reduce((result, number) => number % 2 === 0 && number > result ? number : result, 0)
  }
  const arr = ['1', '3' , '4', '2', '5']
console.log(getMaxEvenElement(arr));

// 2
let a = 3;
let b = 5;

[a,b] = [b,a]

console.log(a); ///5
console.log(b);///3
 
// 3?
const getValue = value => {
     return value===null || value===undefined ? '-' : value
    //  return value || '-'
}

console.log(getValue(0)); ///0
console.log(getValue(4)); /// 4
console.log(getValue("someText")); /// someText
console.log(getValue(null)); /// -
console.log(getValue(undefined)); //// -

// 4?
const getObjFromArray = arr => {
//    ???? // for(let i of arr){
    //     // console.log(i[0]);
    //     return Object.assign({} , i[1]);  
    // }
       
    return Object.fromEntries(arr);
}
const arrayOfArrays = [
    ["name", "dan"],
    ["age", "21"],
    ["city", "lviv"]
]
console.log(getObjFromArray(arrayOfArrays)); /// object

// 5
const addUniqueId = (obj) => {
    let obj_un = Object.assign({},obj)
    let id = Symbol()
    // console.log(obj_un);
    obj_un['id']=id
    return obj_un

}

const obj1 = { name: "nick"}
console.log(addUniqueId(obj1));
console.log(addUniqueId({name: "buffy"}));
console.log(Object.keys(obj1).includes('id')); ///false

// 6
const getRegroupedObject = (obj) => {
    let {details, name: firstName } = obj
    let {university, id, age} = details
    // console.log(user);
    let obj1 = Object.assign({})
    obj1['university'] = university
    obj1['user'] = {
        age,
        firstName,
        id
    }
    return obj1;
}

const oldObj = {
    name: "willow",
    details: {
        id: 1,
        age: 47,
        university: "LNU"
    }
};
console.log(getRegroupedObject(oldObj));

// 7
const getArrayWithUniqueElements = (arr) => {
    return [...new Set(arr)]
    
}

const arr1 = [2 , 3, 4 , 2 , 4 , 'a' , 'c' , 'a']
console.log(getArrayWithUniqueElements(arr1)); // [2,3,4, "a" , "c"]

// 8
const hideNumber = number => {
    return number.slice(6,10).padStart(10,'******')
}
const phoneNumber = '0123456789'
console.log(hideNumber(phoneNumber));

// 9
function add(a, b){
    if(arguments.length===2){
      return a+b
    }else{
        throw Error(`b is required`);
    }
}
console.log(add(2,3)); /// 5
console.log(add(2)); /// error

// 10
function* generateIterableSequence(){
    yield 'I'
    yield 'love'
    yield 'EPAM'
}
const generatorObject = generateIterableSequence()
for(let value of generatorObject){
    console.log(value); /// I br love br EPAM
}
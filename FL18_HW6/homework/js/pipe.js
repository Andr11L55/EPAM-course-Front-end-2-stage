function isFunction(functionToCheck) {
	return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}


const pipe = (value, ...funcs) => {
	for(let i=0;i<funcs.length;i++){
		if(isFunction(funcs[i])){
			// value = funcs[i+2](funcs[i+1](funcs[i](value)))	
			value = funcs[i](value)
			console.log(value) 
		}else {
			value=`Provided argument at position ${i} is not a function!`
			console.log(value)
			break;
		}
	}
	return value
}

const replaceUnderscoreWithSpace = (value) => value.replace(/_/g, ' ');
const capitalize = (value) =>
	value
		.split(' ')
		.map((val) => val.charAt(0).toUpperCase() + val.slice(1))
		.join(' ');
const appendGreeting = (value) => `Hello, ${value}!`;

const error = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, '');

alert(error); // Provided argument at position 2 is not a function!

const result = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, appendGreeting);

alert(result); // Hello, John Doe!



// let lowCase = (value) => value.toLowerCase()
// let birth = (value) => `Happy birthday, ${value}!!!`
// const happy = pipe('JOHN DOE', lowCase, birth)
// alert(happy)
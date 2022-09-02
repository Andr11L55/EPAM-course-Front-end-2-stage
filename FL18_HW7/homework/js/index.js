$(document).ready(function() {
    let result = 0;
    let prevEntry = 0;
    let operation = null;
    let currentEntry = '0';
    updateScreen(result);
    
    $('.button').on('click', function() { 
      let buttonPressed = $(this).html();
      console.log(buttonPressed);
    
      
      if (buttonPressed === 'C') {
        result = 0;
        currentEntry = '0';
        $('.screen').css({'color':'black'})

      } else if (buttonPressed === 'CE') {
        currentEntry = '0';
      } else if (buttonPressed === 'back') {
        currentEntry = currentEntry.substring(0, currentEntry.length-1);
      } else if (buttonPressed === '+/-') {
        currentEntry *= -1;
      } else if (buttonPressed === '.') {
        currentEntry += '.';
      } else if (isNumber(buttonPressed)) {
        if (currentEntry === '0') {
            currentEntry = buttonPressed;
        }else{
            currentEntry = currentEntry + buttonPressed;
      }
     }else if(isOperator(buttonPressed)) {
        prevEntry = parseFloat(currentEntry);
        operation = buttonPressed;
    
        currentEntry = '';
      }else if(buttonPressed === '%') {
        currentEntry = currentEntry / 100;
      }else if (buttonPressed === 'sqrt') {
        currentEntry = Math.sqrt(currentEntry);
      }else if (buttonPressed === '1/x') {
        currentEntry = 1 / currentEntry;
      }else if (buttonPressed === 'pi') {
        currentEntry = Math.PI;
      }else if (buttonPressed === '=') {
        currentEntry = operate(prevEntry, currentEntry, operation);
        operation = null;
        
      }
      
      updateScreen(currentEntry);
    });
  });
  
  let updateScreen = function(displayValue) {
    displayValue = displayValue.toString();
    
    $('.screen').html(displayValue.substring(0, 10));
  };
  
  let isNumber = function(value) {
    return !isNaN(value);
  }
  
  let isOperator = function(value) {
    return value === '/' || value === '*' || value === '+' || value === '-';
  };
  
 let operate = function(a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a, b, operation);
    
    if (operation === '+'){
      logline(a,b,operation)
        return a + b; 
    }
    if (operation === '-') {
      logline(a,b,operation)
        return a - b;
    }
    if (operation === '*'){
      logline(a,b,operation)
         return a * b;
    }
    if (operation === '/'){
        if(b===0){
            $('.screen').css({'color':'red'});
            return 'Error'
        }else{
          logline(a,b,operation)
         return a / b;   
        }
         
        }
  }
  const deleteEl = () => {
    const logs = document.getElementsByClassName('logs')
    console.log(logs[0].childNodes);
    logs[0].removeChild(logs[0].childNodes[9]);
    
  }
  const logline = (num1, num2, operator) => {
    const logs = document.querySelector('.logs')
    if(operator==='+'){
      if(num1===48 || num2 === 48 || num1+num2===48){
      logs.innerHTML+=`<li class="text">
      <i class="far fa-circle btn-circle"></i><u>${num1}${operator}${num2}=${num1+num2}</u>
      <i onclick="deleteEl()" class="fas fa-times btn-cross"></i></li>`
      }else{
        logs.innerHTML+=`<li class="text">
      <i class="far fa-circle btn-circle"></i>${num1}${operator}${num2}=${num1+num2}
      <i onclick="deleteEl()" class="fas fa-times btn-cross"></i></li>`
      }
      
    }else if(operator==='-'){
      if(num1===48 || num2 === 48 || num1-num2===48){
        logs.innerHTML+=`<li class="text">
        <i class="far fa-circle btn-circle"></i><u>${num1}${operator}${num2}=${num1-num2}</u>
        <i onclick="deleteEl()" class="fas fa-times btn-cross"></i></li>`
        }else{
      logs.innerHTML+=`<i class="far fa-circle btn-circle"></i><li class="text">${num1}${operator}${num2}=${num1-num2}
      </li><i onclick="deleteEl()" class="fas fa-times btn-cross"></i>`
    }
  }else if(operator==='*'){
    if(num1===48 || num2 === 48 || num1*num2===48){
      logs.innerHTML+=`<li class="text">
      <i class="far fa-circle btn-circle"></i><u>${num1}${operator}${num2}=${num1*num2}</u>
      <i onclick="deleteEl()" class="fas fa-times btn-cross"></i></li>`
      }else{
     logs.innerHTML+=`<i class="far fa-circle btn-circle"></i><li class="text">${num1}${operator}${num2}=${num1*num2}
     </li><i onclick="deleteEl()" class="fas fa-times btn-cross"></i>` 
    }
  }else if(operator==='/'){
    if(num1===48 || num2 === 48 || num1/num2===48){
      logs.innerHTML+=`<li class="text">
      <i class="far fa-circle btn-circle"></i><u>${num1}${operator}${num2}=${num1/num2}</u>
      <i onclick="deleteEl()" class="fas fa-times btn-cross"></i></li>`
      }else{
      logs.innerHTML+=`<i class="far fa-circle btn-circle"></i><li class="text">${num1}${operator}${num2}=${num1/num2}
      </li><i onclick="deleteEl()" class="fas fa-times btn-cross"></i>`
    }
  }else{
      logs.innerHTML+=' '
    }
    console.log(logs); 
  }
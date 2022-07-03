// let screen = document.getElementById('screen');
// buttons = document.querySelectorAll('button');
// let screenValue = '';
// for (item of buttons) {
//     item.addEventListener('click', (e) => {
//         buttonText = e.target.innerText;
//         console.log('Button text is ', buttonText);
//         if (buttonText == 'X') {
//             buttonText = '*';
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }
//         else if (buttonText == 'C') {
//             screenValue = "";
//             screen.value = screenValue;
//         }
//         else if (buttonText == '=') {
//             screen.value = eval(screenValue);
//         }
//         else {
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }

//     })
// }

let screen=document.getElementById('screen');
let buttons=document.querySelectorAll("button");
let val='';
// let buttonText=e.target.innerText;
for (item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;

        let emp='';
        
        if(buttonText=='X'){
            buttonText='*'
            
            val+=buttonText;
            screen.value=val;
            
            
        }
        else if(buttonText=='C'){
            val='';
            screen.value=val;
            
        }
        else if (buttonText=='='){
            emp=eval(val)
            screen.value=emp;
            
        
            
        }
        else if(buttonText=='('){
           
            val=val.slice(0,val.length-1)
            screen.value=val
        }
       
        else{
            val+=buttonText;
            screen.value=val;
            
        }
    })
}

// function handle(){
    
// }
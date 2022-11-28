let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue='';


for(item of buttons){
    item.addEventListener('click', (e) => {
        buttoText = e.target.innerText;

        if(buttoText== 'x'){
            buttoText='*';
            screenValue+=buttoText;
            screen.value=screenValue;
        }
        else if(buttoText=='⌫'){
            
            screenValue=screenValue.slice(0,-1);
            screen.value=screenValue;
        }
        else if(buttoText== '÷'){
            buttoText='/';
            screenValue+=buttoText;
            screen.value=screenValue;
        }
        else if(buttoText== 'C'){
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttoText== 'π'){
            screenValue="3.14";
            screen.value+=screenValue;
        }
        else if(buttoText== '='){
            screen.value=eval(screenValue);
            
        }       
        else{
            screenValue+=buttoText;
            screen.value=screenValue;
        }
    })
}
const pin_generate=document.getElementById('pin-generate');
const pin_number=document.getElementById('pin_number');
const allbutton=document.getElementById('allbutton');
const buttonvalue=document.getElementById('buttonvalue');
let number=document.getElementById("number");
let count=parseInt(number.innerText);
console.log(typeof count);

//generate pin
pin_generate.addEventListener('click',function(){
    let random_number=(Math.round(Math.random()*10000)).toString();
    console.log(random_number);

    if(random_number.length==4){
        pin_number.value=random_number;
    }
})
//pick value from calculator
allbutton.addEventListener('click',function(event){
    let buttonvaluecollect=(event.target.innerText).toString();
    buttonvalue.value+=buttonvaluecollect;
    console.log(event.target.innerText);
})
 

//submit button click korle kaj ki korbe
document.getElementById('submit').addEventListener('click',function(){
   
     if(pin_number.value.length==0 || buttonvalue.value.length==0){
        document.getElementById('match').classList.add('d-none');
        document.getElementById('nomatch').classList.add('d-none');

    }
    else if((pin_number.value)==(buttonvalue.value) && (pin_number.value.length>0==buttonvalue.value>0)){
        document.getElementById('match').classList.remove('d-none');
        document.getElementById('nomatch').classList.add('d-none');
        document.getElementById('count_btn').classList.add('d-none')

    }
    else{
        
        document.getElementById('nomatch').classList.remove('d-none'); 
       
        document.getElementById('count_btn').classList.remove('d-none')
        document.getElementById('match').classList.add('d-none');
        count--;
        number.innerText=count;
        if(count===0){
            document.getElementById('count_btn').classList.add('d-none')
            document.getElementById('nomatch').classList.add('d-none'); 
            pin_number.value="";
            buttonvalue.value="";
            count=3
        }
        

    }
    
})
//
function reastartcalculation(){
    window.location='index.html';
}
function calculation(arg){
   
  
    let box = document.getElementById('box');
    if( box.style.color === "red"){
       box.style.color='';
       box.value='';
       box.style.borderStyle="";
       box.style.borderColor="";
    }
    box.value = box.value+arg;
    
}

function cancelation(){
    let box = document.getElementById('box');
    if( box.style.color === "red"){
        box.style.color='';
        box.value='';
     }
    box.value = box.value.slice(0,-1);
    document.getElementById('result').innerHTML='';
    box.style.borderStyle="";
    box.style.borderColor="";
}

function result(){
    let box = document.getElementById('box');
   // let value = box.value
    let regex = /[+\-*%\/]/;
    let status = regex.test(box.value);
    if(!status){
        return;
    }
    try{ 
    let input = box.value.replace(/^0+(?=\d)/, ''); // Remove leading zeros
    const result = eval(input);
   // box.value= result;
   if (typeof result === "undefined") {
    document.getElementById('result').innerHTML ='';
   // console.log("Var is Box is :"+box+' result '+result)
     return;  
    }
   
    document.getElementById('result').innerHTML =  result;
    box.style.borderStyle="";
    box.style.borderColor="";

    }catch{
        box.value = "Give correct values";
        document.getElementById('box').style.color="red";
        document.getElementById('result').innerHTML='';
        document.getElementById('box').style.borderStyle="solid";
        document.getElementById('box').style.borderColor="red";
    }
}
document.addEventListener('keydown', function(event) {
    const key = event.key;
    const box = document.getElementById('box');

    if (key === 'Escape') {
        restartCalculation();
    } else if (key === 'Backspace') {
        cancelation();
    } else if (key === 'Enter') {
        result();
    } else if (/^[0-9+\-*/.=]$/.test(key)) {
        if (key === '=') {
            result();
        } else {
            calculation(key);
        }
    }
});



var display =  document.querySelector(".counter-display");
var inc  =  document.querySelector(".incrementer");
var reset  =  document.querySelector(".reset");
var dec  =  document.querySelector(".decrementer");

var counter= 0;
var interval;

function iCounter(){
    counter++;
    display.innerHTML=counter;
}

inc.addEventListener("click",()=>{
    var interval = setInterval(iCounter,1000); 
    
    dec.addEventListener("click",()=>{
        clearInterval(interval);
    })
    
    reset.addEventListener("click",()=>{
        counter = 0;
        display.innerHTML = counter;
        clearInterval(interval);
    })
})
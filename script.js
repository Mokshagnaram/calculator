
let total = 0;
let sign = 0;
let cal = 0;
let x = 0;
let y = "0";
function one(){
    document.getElementById("display-total").innerHTML += 1;
    if(sign == 0){
  
        x = document.getElementById("display-total").innerText;
    }
    if(sign != 0){
        y = document.getElementById("display-total").innerText ;  
    }
  
}
function two(){
    document.getElementById("display-total").innerHTML += 2;
    if(sign == 0){
        x = document.getElementById("display-total").innerText;
    }
    if(sign != 0){
        y = document.getElementById("display-total").innerText ;  
    }
   
}
function three(){

    document.getElementById("display-total").innerHTML += 3;
    if(sign == 0){

        x = document.getElementById("display-total").innerText;
    }
    if(sign != 0){
        y = document.getElementById("display-total").innerText ;  
    }

}

function four(){
    document.getElementById("display-total").innerHTML += 4;
    if(sign == 0){
 
        x = document.getElementById("display-total").innerText;
    }
    if(sign != 0){
        y = document.getElementById("display-total").innerText ;  
    }
}

function five(){
    document.getElementById("display-total").innerHTML += 5;
    if(sign == 0){
        x = document.getElementById("display-total").innerText;
    }
    if(sign != 0){
        y = document.getElementById("display-total").innerText ;  
    }

}
function six(){
    document.getElementById("display-total").innerHTML += 6;
    if(sign == 0){
        x = document.getElementById("display-total").innerText;
    }
    if(sign != 0){
        y = document.getElementById("display-total").innerText ;  
    }
 
}
function seven(){
    document.getElementById("display-total").innerHTML += 7;
    if(sign == 0){
        x = document.getElementById("display-total").innerText;
    }
    if(sign != 0){
        y = document.getElementById("display-total").innerText ;  
    }

}
function eight(){
    document.getElementById("display-total").innerHTML += 8;
    // x += "8";
    if(sign == 0){
        x = document.getElementById("display-total").innerText;
    }
    if(sign != 0){
        y = document.getElementById("display-total").innerText ;  
    }
  
}
function nine(){
    document.getElementById("display-total").innerHTML += 9;
    if(sign == 0){
        x = document.getElementById("display-total").innerText;
        console.log(x);
    }
    if(sign != 0){
        y = document.getElementById("display-total").innerText ;  
    }
  
}
function zero(){
    document.getElementById("display-total").innerHTML += 0;
    if(sign == 0){
        x = document.getElementById("display-total").innerText;
    }
    if(sign != 0){
        y = document.getElementById("display-total").innerText ;  
    }

}
function csign(){
    cal = document.getElementById("display-total").innerText
    document.getElementById("display-total").innerText = cal * -1;
}
function percent(){
    sign = 5;
   x = document.getElementById("display-total").innerHTML;
   document.getElementById("display-total").innerHTML = null;

}
function add(){
    sign = 1;
    x =   document.getElementById("display-total").innerHTML;
    document.getElementById("display-total").innerHTML = null;
    
}
function sub(){
    x =  document.getElementById("display-total").innerHTML;
    document.getElementById("display-total").innerHTML = null;
    sign = 2;
}
function multi(){
    x =   document.getElementById("display-total").innerHTML;
    document.getElementById("display-total").innerHTML = null;
    sign = 3;
}
function divide(){
    x =   document.getElementById("display-total").innerHTML;
    document.getElementById("display-total").innerHTML = null;
    sign = 4;
}
function point(){
    document.getElementById("display-total").innerHTML += '.';
}
function equal(){
    x = Number(x);
    y =Number(y);
    if(sign == 1){
        total = x + y; 
    }
    if(sign == 2){
        total = x-y;  
    }
    if(sign == 3){
        total = y*x;  
    }
    if(sign == 4){
        total = x/y;  
    }
    if(sign == 5){
        total = (x/100)*y;
    }
    document.getElementById("display-total").innerHTML = total;
    sign = 0;

}
function ac(){
    document.getElementById("display-total").innerHTML = null;
    total = 0;
    x = null;
    y = null;
    sign = 0;
}


var nombreFour = 0;
function four(){
    nombreFour +=1;
    document.getElementById("nbrfour").innerHTML = nombreFour;
   if(nombreFour)
         document.getElementById("nbrcanele").innerHTML = nombreCanele -=25;
    if(nombreCanele <= 24)
       document.getElementById("fourbut").disabled = true; 
}


var nombreCanele = 0;
var click = 0;
function cuisiner(){
    nombreCanele +=1;
    document.getElementById("nbrcanele").innerHTML = nombreCanele;
    if (nombreCanele >= 25)
                    document.getElementById("fourbut").disabled = false;
    else
    document.getElementById("fourbut").disabled = true;
    if(nombreCanele >=100)
        document.getElementById("clicker").disabled = false;
    else
    document.getElementById("clicker").disabled = true;
}


var nombreClicker = 0;
function clicker(){
    nombreClicker +=1;
    document.getElementById("nbrclick").innerHTML = nombreClicker;
    if(nombreClicker)
        document.getElementById("nbrcanele").innerHTML = nombreCanele -=100;
    if(nombreCanele <= 99)
        document.getElementById("clicker").disabled = true;
}


var nombreCanele = 1;
var nbrcanele = document.getElementById("nbrcanele");
function addsec()
{
    
  nbrcanele.innerHTML = nombreCanele;
  nombreCanele++;

if(nombreClicker+=1)
setInterval(addsec,1000)

}
/*
window.onload = clicker()
setTimeout(clicker(){
    document.getElementById("nbrcanele").click();
    3000;
}
*/
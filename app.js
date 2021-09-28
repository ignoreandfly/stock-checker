var initialprice = document.querySelector("#initial");
var initialquantity = document.querySelector("#quantity");
var currentprice = document.querySelector("#stocks");
var btnclick = document.querySelector("#btn-click");
var outputbox = document.querySelector("#output-box")
function clickHandler(){
var ip = initialprice.value ;
var quantity = initialquantity.value ;
var curr = currentprice.value;
if (ip <0 || quantity<o || curr<0){
    outputbox.innerText="Please enter valid values"}
    else {

calculate(ip,quantity,curr);}
}

function calculate(initial,quant,current){
    initial = parseFloat(initial)
    current = parseFloat(current)
    let delta = Math.abs(current-initial)
    let money = delta*quant
    let percentage = (delta/initial)*100
    let x = 5
    if(initial>current){
        outputbox.innerText = "You lost some money" + "Money lost: " + delta + "In terms of percentage " + percentage
    }
    else if(current>initial){
        outputbox.innerText = "You made some profit "+ "Money gained: "+ delta + "In terms of percentage " +  percentage
    }
    else {
        outputbox.innerText = "No profit no loss"
    }
    for(let i = 0 ; i < 10 ; i++) {
        console.log(x)
    }
    console.log(x)
}

btnclick.addEventListener("click", clickHandler)
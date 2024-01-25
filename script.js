// 1 access the buttons value
// 2 access the inputbox 
// 3 fill the value into inputbox
// 4 check if the value of button is = then take the value of inputbox and calcult
// 5 and show the result into inputbox
// 6 check if button value = x then take the value of inputbox and remove the a right side single charector
// 7 check if button value = AC then cleare all old text

let buttons = document.querySelectorAll(".button");
let inputBox = document.querySelector("#inputBox");


buttons.forEach( (button) =>{
    button.addEventListener("click", (e) =>{
        if(e.target.value === "x"){
            inputBox.value = String(inputBox.value).slice(0,-1)
        }else if(e.target.value === "AC"){
            inputBox.value = "";
        }else if(e.target.value === "="){
            inputBox.value = eval(inputBox.value)
        }
        else{inputBox.value = inputBox.value+e.target.value;}
    })
})
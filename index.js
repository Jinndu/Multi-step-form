// EXTRA VAR
var next1 = document.querySelector(".next1");
var sec2a = document.querySelector(".sec2a");
var sec2b = document.querySelector(".sec2b")
var sec2c = document.querySelector(".sec2c")

var addOnCharge1 = document.querySelector(".add-on-charge1");
var addOnCharge2 = document.querySelector(".add-on-charge2")
var addOnCharge3 = document.querySelector(".add-on-charge3")

// NAVIGATION BUTTONS
next1.addEventListener("click",function(){
    sec2a.style.display="none";
    sec2b.style.display="flex";
    document.querySelector(".num2").classList.add("num");
    document.querySelector(".num1").classList.remove("num");
})
document.querySelector(".previous1").addEventListener("click",function(){
    sec2b.style.display="none";
    sec2a.style.display="flex";
    document.querySelector(".num1").classList.add("num");
    document.querySelector(".num2").classList.remove("num");
})

document.querySelector(".next2").addEventListener("click",function(){
    sec2b.style.display = "none";
    sec2c.style.display = "flex";
    document.querySelector(".num3").classList.add("num");
    document.querySelector(".num2").classList.remove("num");
})
document.querySelector(".previous2").addEventListener("click",function(){
    sec2c.style.display = "none";
    sec2b.style.display = "flex";
    document.querySelector(".num2").classList.add("num");
    document.querySelector(".num3").classList.remove("num");
})

// TOGGLE SWITCH
var checkbox = document.querySelector(".switch input");
var op2 = document.querySelector(".op2");
var op1 = document.querySelector(".op1");

var arcadeP = document.querySelector(".arcade-p");
var advancedP = document.querySelector(".advanced-p");
var proP = document.querySelector(".pro-p");
var free = document.querySelectorAll(".free");


checkbox.addEventListener("click",function() {
    if (checkbox.checked) {
        op2.style.color = "hsl(213, 96%, 18%)";
        op1.style.color = "black";
        arcadeP.textContent = "$90/yr";
        advancedP.textContent = "$120/yr";
        proP.textContent = "$150/yr";
        for (let i = 0; i < free.length; i++) {
           free[i].style.display = "inline"
        }
        addOnCharge1.textContent = "$10/yr"
        addOnCharge2.textContent = "$10/yr"
        addOnCharge3.textContent = "$10/yr"
    } else {
        op2.style.color = "black";
        op1.style.color = "hsl(213, 96%, 18%)";
        arcadeP.textContent = "$9/mo"
        advancedP.textContent = "$12/mo"
        proP.textContent = "$5/mo"
        for (let i = 0; i < free.length; i++) {
            free[i].style.display = "none"
         }
         addOnCharge1.textContent = "$1/mo"
         addOnCharge2.textContent = "$1/mo"
         addOnCharge3.textContent = "$1/mo"
 
    }
})
////////// SELECTED ADD-ONS

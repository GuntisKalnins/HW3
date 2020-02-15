const outCont = document.querySelector(".output-cont");
const subBtn = document.getElementById("submitBtn");
const resBtn = document.getElementById("resetBtn");

function onSubmmit() {
     onReset()
     let minInp  = parseInt(document.getElementById("min-value").value);
     let maxInp = parseInt(document.getElementById("max-value").value);
     let fizzInp = parseInt(document.getElementById("fizz-value").value);
     let buzzInp = parseInt(document.getElementById("buzz-value").value);    
    
     if (minInp <= 0 || minInp > 99 || maxInp <= 0 || maxInp > 100 ||fizzInp <= 0 || fizzInp > 100 || buzzInp <= 0 || buzzInp > 100) {
          return window.alert("Invalid input value. Please try again!");
     } else {
          gameEngine(minInp, maxInp, fizzInp, buzzInp);
     }        
}

function gameEngine (minInp, maxInp, fizzInp, buzzInp) {
     for (let i = minInp; i <= maxInp; i++) {
          if (i % fizzInp === 0 && i % buzzInp === 0) {

               let fbDiv = document.createElement("div");
               outCont.appendChild(fbDiv);           
               let fbTxt = document.createTextNode(i + " = FizzBuzz!");
               fbDiv.classList.add("fb-div-box");
               fbDiv.id = `divId${i}`;
               fbDiv.appendChild(fbTxt);               

          } else if (i % fizzInp === 0) {

               let fDiv = document.createElement("div");
               outCont.appendChild(fDiv);
               let fTxt = document.createTextNode(i + " = Fizz!");
               fDiv.classList.add("f-div-box");
               fDiv.id = `divId${i}`;
               fDiv.appendChild(fTxt);

          } else if (i % buzzInp === 0) {
               
               let bDiv = document.createElement("div");
               outCont.appendChild(bDiv);
               let bTxt = document.createTextNode(i + " = Buzz!");
               bDiv.classList.add("b-div-box");
               bDiv.id = `divId${i}`;
               bDiv.appendChild(bTxt);
               
          } else {

               let nDiv = document.createElement("div"); 
               outCont.appendChild(nDiv);
               let nTxt = document.createTextNode(i);
               nDiv.classList.add("n-div-box");
               nDiv.id = `divId${i}`;
               nDiv.appendChild(nTxt);               
                
          }
     }     
}

function onReset() {
     while (outCont.firstChild) {
         outCont.removeChild(outCont.firstChild);
     }
}

function defVal() {
     let minInp  = document.getElementById("min-value");
     let maxInp = document.getElementById("max-value");
     let fizzInp = document.getElementById("fizz-value");
     let buzzInp = document.getElementById("buzz-value");   
     minInp.value = 1;
     maxInp.value = 100;
     fizzInp.value = 3;
     buzzInp.value = 5;
}

function resetAll() {
     onReset();
     defVal();
}

function addListeners() {
     subBtn.addEventListener("click", onSubmmit);
     resBtn.addEventListener("click", onReset);
     defBtn.addEventListener("click", defVal);
     bigRes.addEventListener("click", resetAll);
}

function main() {
     addListeners()     
}

main();

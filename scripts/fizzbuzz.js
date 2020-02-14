var outCont = document.querySelector(".output-cont");
var subBtn = document.getElementById("submitBtn");
var resBtn = document.getElementById("resetBtn");

function onSubmmit() {
     onReset()
     var minInp  = document.getElementById("min-value").value;
     var maxInp = document.getElementById("max-value").value;
     var fizzInp = document.getElementById("fizz-value").value;
     var buzzInp = document.getElementById("buzz-value").value;

     console.log(minInp, maxInp, fizzInp ,buzzInp)
     
     for(let i = minInp; i <= maxInp; i++) {
          if (i % fizzInp === 0 && i % buzzInp === 0) {

               var fbDiv = document.createElement("div");
               outCont.appendChild(fbDiv);           
               var fbTxt = document.createTextNode(i + " = FizzBuzz!");
               fbDiv.classList.add("fb-div-box");
               fbDiv.id = `divId${i}`;
               fbDiv.appendChild(fbTxt);               

          } else if (i % fizzInp === 0) {

               var fDiv = document.createElement("div");
               outCont.appendChild(fDiv);
               var fTxt = document.createTextNode(i + " = Fizz!");
               fDiv.classList.add("f-div-box");
               fDiv.id = `divId${i}`;
               fDiv.appendChild(fTxt);

          } else if (i % buzzInp === 0) {
               
               var bDiv = document.createElement("div");
               outCont.appendChild(bDiv);
               var bTxt = document.createTextNode(i + " = Buzz!");
               bDiv.classList.add("b-div-box");
               bDiv.id = `divId${i}`;
               bDiv.appendChild(bTxt);
               
          } else {

               var nDiv = document.createElement("div"); 
               outCont.appendChild(nDiv);
               var nTxt = document.createTextNode(i);
               nDiv.classList.add("n-div-box");
               nDiv.id = `divId${i}`;
               nDiv.appendChild(nTxt);               
                
          }
    }     
}


function onReset() {
     while (outCont.firstChild) {
         outCont.removeChild(outCont.firstChild)
     }
}

function addListeners() {
     subBtn.addEventListener("click", onSubmmit);
     resBtn.addEventListener("click", onReset);
}



function main() {
     addListeners()     
}

main();

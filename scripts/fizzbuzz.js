var outCont = document.querySelector(".output-cont");
var subBtn = document.getElementById("submitBtn");
var resBtn = document.getElementById("resetBtn");


function onSubmmit() {
     var minInp  = document.querySelector("#min-value").value;
     var maxInp = document.querySelector("#max-value").value;
     var fizzInp = document.querySelector("#fizz-value").value;
     var buzzInp = document.querySelector("#buzz-value").value;

     console.log(minInp, maxInp, fizzInp ,buzzInp)
     
     for(let i = minInp; i <= maxInp; i++) {
          if (i % fizzInp === 0 && i % buzzInp === 0) {
               console.log(i+"fb")          
          } else if (i % fizzInp === 0) {
               console.log(i+"f")
          } else if (i % buzzInp === 0) {
               console.log(i+"b")  
          } else {
               console.log(i)          
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


/*var 
const gameCheck = (start, end, fizz, buzz) => {

     

     for(var i = start; i <= end; i++) {
          if ( i % fizz === 0 && i % buzz === 0) {
               var fbDiv = document.createElement("div"); 
               var fbTxt = document.createTextNode(i + " :FizzBuzz! ");
               fbDiv.classList.add("div-box");
               fbDiv.id = `divId${i}`;
               fbDiv.appendChild(fbTxt);
               document.body.appendChild(fbDiv);               
          } else if ( i % fizz === 0) {
               var fDiv = document.createElement("div"); 
               var fTxt = document.createTextNode(i + " :Fizz! ");
               fDiv.classList.add("div-box");
               fDiv.id = `divId${i}`;
               fDiv.appendChild(fTxt);
               document.body.appendChild(fDiv);               
          } else if ( i % buzz === 0) {
               var bDiv = document.createElement("div"); 
               var bTxt = document.createTextNode(i + " :Buzz! ");
               bDiv.classList.add("div-box");
               bDiv.id = `divId${i}`;
               bDiv.appendChild(bTxt);
               document.body.appendChild(bDiv);               
          } else {
               var nDiv = document.createElement("div"); 
               var nTxt = document.createTextNode(i + " :Number! ");
               nDiv.classList.add("div-box");
               nDiv.id = `divId${i}`;
               nDiv.appendChild(nTxt);
               document.body.appendChild(nDiv);               
          
          }
    }
}

*/
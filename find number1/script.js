let randomNumber =  parseInt(Math.floor((Math.random())*100))
// document.getElementById('button').addEventListener("click", guess)
let but = document.getElementById('button');
but.addEventListener("click", guess)
let input = document.getElementById('text');
console.log(input);

let reset = document.querySelector('.buton');
reset.addEventListener("click", ()=>{
    window.location.reload();
})



let counter = 0;
function guess(){
       
    
    if (input.value === ""){
        alert("please enter a value")
    } if (isNaN(input.value)){
        alert("please enter a number")
    } if (input.value > 100 || input.value < 1){
        let answer = confirm('Please enter a number from 1 to 100') 
        if (answer === true || answer === false){
            document.getElementById("text").value  ="";
            document.getElementById("result").innerText ="";
        }
        
    }

    
    let inputNumber = parseInt(document.getElementById("text").value)        
        counter ++;
        // console.log(typeof(inputNumber));
       console.log(randomNumber);
        if (randomNumber > inputNumber){
            document.getElementById("result").innerText  = "Enter higher number!"
        }else if (randomNumber < inputNumber){
            document.getElementById("result").innerText = "Enter lower number!"
    
        }          
        else if (randomNumber === inputNumber){
            document.getElementById("result").innerText = "you won"
            
        }
    let count = document.querySelector('.p');
    count.innerHTML = counter.toString();
    // count.innerHTML = String(counter);


   
    
    }

 
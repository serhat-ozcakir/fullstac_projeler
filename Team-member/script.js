
// const input = document.querySelector("input")

// console.log(input.value)

// input.addEventListener("click", myFunction)

// function myFunction(){
//     const element = document.body;

//     // element.classList.add("dark-mode")
//     // button.innerText="light-mode"
   
//     if (input.value == "dark-mode"){
//         element.classList.add("dark-mode")
//         input.value = "light-mode"
//     } else  {
//         input.value == "light-mode"
//         element.classList.add("light-mode")
//         input.value ="dark-mode"
//     }
// }

const button = document.querySelector("span")
console.log(button)

button.addEventListener("click", myFunction)

function myFunction(){
    const element = document.body;
    element.classList.toggle("dark-mode")
    
}
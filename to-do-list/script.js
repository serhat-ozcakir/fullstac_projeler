const btn = document.querySelector(".btn");
const toDoItem = document.querySelector(".input");
const array = document.querySelector(".array")
// const par = document.querySelector(".par");
btn.addEventListener("click", () => {
   
    if (toDoItem.value === ""){
        alert("please enter a value")
        document.querySelector(".box").innerHTML="";
     }
   
    array.innerHTML += `<p class="box">
     <button class="btn-left" onclick="check(this)"><i class="far fa-check-square"></i></button>
     ${toDoItem.value}
     <button class="delete" onclick="Delete(this);"><i class="fas fa-trash-alt"></i></button>
     </p>`;

 
})


function check(element){
    element.parentNode.classList.add("line-t")
    // element.parentNode.setAttribute("", "line-t")
    // element.parentNode.classList.toggle("line-t")
 }
 function Delete(currentEl) {
   currentEl.parentNode.parentNode.removeChild(currentEl.parentNode);
   console.log(currentEl);
 }



// btn.addEventListener("click", check2())
   
   
// function check(element){
//     // element.parentNode.classList.add("line-t")
//     // element.parentNode.setAttribute("", "line-t")
//     // element.parentNode.classList.toggle("line-t")
// }

// function Delete(currentEl) {
//     currentEl.parentNode.parentNode.removeChild(currentEl.parentNode);
//     console.log(currentEl);
// }

// btn.addEventListener("click", check2())
// function chec2(){
     
// }

// let through = document.createElement("button");
// let sil = document.createElement("button");
// let icon1 = document.createElement("icon");
// let icon2 = document.createElement("icon");

// icon1.classList.add("far fa-check-square");
// icon2.classList.add("fas fa-trash-alt");

// through.classList.add("btn-left");
// sil.classList.add("delete");

// through.appendChild(icon1);
// sil.appendChild(icon2);

// par.appendChild(through);
// par.appendChild(sil);
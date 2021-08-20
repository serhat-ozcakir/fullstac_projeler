const input = document.querySelector('.input-mik1');
const input2 = document.querySelector('.input-mik2');
console.log(input2);
console.log(input);


const eksi = document.querySelector('.btn1');
console.log(eksi);

const arti = document.querySelector('.btn2');
console.log(arti);


const eksi1 = document.querySelector('#btn3');
console.log(eksi1);
const arti1 = document.querySelector('#btn4');



eksi.addEventListener("click", ()=>{
    
    if (isNaN(input.value)){
        alert("please enter a number");
        
    }
    
    if((Number(input.value)) === 1) {return};
    if(((input.value)) === "") {return};
    
    
    input.value--;
    
})


arti.addEventListener("click", ()=>{
    if (isNaN(input.value)){
        alert("please enter a number")}
        // if((Number(input.value)) === 10) {return};
        if(((input.value)) === "") {return};
        
        input.value++;
 })

eksi1.addEventListener("click", ()=>{
    if((Number(input2.value)) === 1) {return};
    if(((input2.value)) === "") {return};
    input2.value--;
                    
})

arti1.addEventListener("click", ()=>{
    
    if (isNaN(input2.value)){
        alert("please enter a number")}
    // if((Number(input2.value)) === 10) {return};
    if(((input2.value)) === "") {return};
    input2.value++;
      
})

const fullName = document.getElementById("name");
console.log(fullName);

const remainCharSpan = document.getElementById("charCount");
console.log(remainCharSpan);

const showRemainder = () => {
    if(fullName.value.length > 0){
        remainCharSpan.style.visibility = "visible";
        remainCharSpan.innerText = fullName.value.length + "/40";
    } else{
        remainCharSpan.style.visibility = "hidden";
    }
}




const validateEmail = () =>{
    let email = document.getElementById("email");
    let errorSpan= document.getElementById("errorSpan");
    

    const regexPattern = /\S+\@+\S+\.+\S/;

    if(email.value=="" || email.value.length === 0){
        errorSpan.style.visibility="hidden";
    } else{
        errorSpan.style.visibility="visible";
    }

    if(!regexPattern.test(email.value)){
        errorSpan.innerHTML="invalid email adress"
        errorSpan.style.color="red";
    }else{
        errorSpan.innerText="valid email adress";
        errorSpan.style.color="green";
    }
}

const validatePhone= () =>{
    let phone = document.getElementById("phone");
    let errorPhone = document.getElementById("errorPhone");

    const regexPhone=/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{2}(-|\s)\d{2}$/;

    if(phone.value=="" || phone.value.length === 0 ){
        errorPhone.style.visibility ="hidden";
        
    } else{
        errorPhone.style.visibility ="visible"; 
    }

    if(!regexPhone.test(phone.value)){
        errorPhone.innerText="Please enter correct number";
        errorPhone.style.color="red";
    }else{
        errorPhone.innerText="your phone number is valid";
        errorPhone.style.color="green"
    }
}

const myButton = () =>{
   let button = document.querySelector('.button');
   button.style.backgroundColor ="green";
}

const myButton1 = () =>{
    let button = document.querySelector('.button');
    button.style.backgroundColor ="orange";

}

const myAdress = () =>{
    let adress = document.getElementById("adress");
    let charAdress = document.getElementById("charAdress");

    if(adress.value.length > 0){
        charAdress.innerText = adress.value.length + "/40"
    }else{
        charAdress.innerText="";  
    }
}

const myCity = () =>{
    let city = document.getElementById("city");
    let charCity = document.getElementById("charCity");

    if(city.value.length > 0){
        charCity.innerText = city.value.length + "/40"
    }else{
        charCity.innerText="";  
    }
}
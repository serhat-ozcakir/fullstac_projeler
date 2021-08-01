const buton =  document.querySelector('button');
console.log(buton);

function myOverFunction(){
    // buton.classList.add("active");
    buton.style.backgroundColor="red";
    buton.style.transition="all 1s";
}

function myOutFunction(){
        buton.style.backgroundColor="rgb(104, 233, 104)";
};
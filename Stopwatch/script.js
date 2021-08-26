let seconds = 0;
let minutes = 0;
let hours = 0;
////////////////////////////
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
///////////////////////////////////
let interval = null;
//////////////////////////////7
let status= "stopped"

console.log(status)


function stopWatch(){
    
    seconds++;

    if(seconds / 60 === 1){
        seconds=0;
        minutes++

        if(minutes / 60 ===1){
            minutes=0;
            hours++
        }
    }

    if (seconds <10){
        displaySeconds = "0" + seconds.toString();
    }else{
        displaySeconds=0
    }

    if (minutes <10){
        displayMinutes = "0" + minutes.toString();
    }else{
        displayMinutes=0
    }

    if (hours <10){
        displayHours = "0" + hours.toString();
    }else{
        displayHours=0
    }


    document.getElementById('display').innerHTML=displayHours + ":" + displayMinutes + ":" + displaySeconds;

    
}
// console.log(document.getElementById('display'));

// window.setInterval(stopWatch, 1000);

function startStop(){
    if(status === "stopped"){
        interval = setInterval(stopWatch, 1000);
        document.getElementById("startstop").innerHTML="Stop";
        status = "started"
    }else{
        clearInterval(interval);
        document.getElementById("startstop").innerHTML = "Start"
        status = "stopped"
    }
}

function reset(){
    clearInterval(interval);
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById("display").innerHTML= "00:00:00";
    document.getElementById("startStop").innerHTML="Start"
}
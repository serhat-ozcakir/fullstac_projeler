function showTime(){
    let clock = document.querySelector('p');
    const time = new Date();
    const newTime = time.toLocaleTimeString();
    clock.innerHTML = newTime + " PM"

}

showTime();

const times = setInterval(() => showTime(), 1000);

// function reminder(){
//     let title = document.querySelector('h3');
//     title.innerHTML = "Ölüm var";
// }
// reminder();

// const uyari = setInterval(() => reminder(), 5000);


// function deleteReminder(){
//     let son = document.querySelector('h3');
//     son.innerHTML = "";
// }
// deleteReminder();

// const uyari2 = setInterval(() => deleteReminder(), 10000);
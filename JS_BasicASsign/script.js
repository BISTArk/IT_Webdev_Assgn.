
const first_sec = document.getElementById("date_sec");
let date_details = [];
const date = new Date();

date_details.push(`Year : ${date.getFullYear()}`);
date_details.push(`Month : ${date.getMonth()}`);
date_details.push(`Day : ${date.getDay()}`);
date_details.push(`Date : ${date.getDate()}`);
date_details.push(`Hour : ${date.getHours()}`);
date_details.push(`Minute : ${date.getMinutes()}`);
date_details.push(`Seconds : ${date.getSeconds()}`);
date_details.push(`Milliseconds : ${date.getMilliseconds()}`);
date_details.push(`Time : ${date.getTime()}`);
date_details.push(`TimeZone Offset : ${date.getTimezoneOffset()}`);

for (const x of date_details) {
    const li = document.createElement('span');
    li.innerHTML = x;
    first_sec.prepend(li);
}

const start_time = new Date().getTime();

for (let i = 0; i < 5000; i++) {
    const r = Math.random()*255;
    const g = Math.random()*255;
    const b = Math.random()*255;
    first_sec.style.backgroundColor = `rgb(${r},${g},${b})`;
    console.log(`rgb(${r},${g},${b})`);
}

const end_time = new Date().getTime();

document.getElementById("time-diff").innerHTML = (`Time_difference = ${end_time-start_time} ms`);


//show details filled in the form in a dialog-box

function formsub(){
    // e.preventDefault();
    const name = document.getElementById("feedback");
    let result = "Results Sent ->";
    for (const X of name) {
        result+=`${X.name} : ${X.value}\n`
    }
    alert(result);
    name.reset();
}

document.getElementById("feedback").reset();
document.getElementById("submit-btn").addEventListener("click", function(event){
    event.preventDefault();
    formsub();
  });
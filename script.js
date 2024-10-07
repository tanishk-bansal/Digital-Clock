let time=document.getElementById("time");
let timeformat=document.getElementById("timeformat");

setInterval(() => {

    let date=new Date();
    console.log(date);

    let hrs=date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds();

    time.innerText=`${hrs} : ${minute}: ${second}`;

    if(hrs<12){
        timeformat.innerText="AM";
    }
    else{
        timeformat.innerText="PM";
    }  
    
}, 1000);
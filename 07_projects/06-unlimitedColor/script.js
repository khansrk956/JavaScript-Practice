// generate a random color
const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i=0; i < 6; i++){
        color += hex[Math.floor((Math.random() * 16))];
    }
    return color;
}

let intervalId; // Declare a interval on global level.

const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor,1000)
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null; // flush out   
};

const btnStart = document.querySelector("#start");
btnStart.addEventListener('click', startChangingColor);



const btnStop = document.querySelector("#stop");
btnStop.addEventListener('click',stopChangingColor);
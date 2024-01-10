let counter = 0;
function Counter1(){
    counter++;
    console.log(" Tick " + counter);

}

setInterval(Counter1, 1000);

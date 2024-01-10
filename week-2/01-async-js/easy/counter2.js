let counter = 0;

function CounterwithoutInterval() {
    counter++;
    console.log(" Tick: " + counter);
    setTimeout(CounterwithoutInterval, 1000);
}

CounterwithoutInterval();

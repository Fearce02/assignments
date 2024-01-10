/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve("Promise1");
        }, t * 1000); 
    }); 
}

function wait2(t) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise2");
        }, t * 1000);
    })

}

function wait3(t) {
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            resolve("promise3");
        }, t * 1000);
    })

}

function calculateTime(t1, t2, t3) {
    const Startime = newDate().getTime();
    return new Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(
        (result) => {
            const endtime = newDate().getTime();
            console.log(result);
            console.log(`took ${endTime - startTime} milliseconds to resolve all promises`);
            return endtime - startTime;
        }

    )


}

module.exports = calculateTime;


// function task (done) {
//     console.log("doing some task");
//     done();
// }

// task (function () {
//     console.log("task was done");
// })

// console.log("we did a task")

 /* ************************* */

// function done(){
//     console.log("task was done")
// }

// setTimeout(done, 2000)
// //done()

// console.log("we did a task")

/* ************************* */


function task (done) {
    console.log("doing some task");
    setTimeout(done,1000)
}

task (function () {
    console.log("task was done");
})

console.log("we did a task")
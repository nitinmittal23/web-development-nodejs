const x = 10;

function myFun(){
    const x = 20;

    console.log("line 6 " + x);
    if (true){
        const x = 30;

        console.log("line 10 "  + x)
    }
    console.log("line 12 " + x)
}
myFun()
console.log("line 16 " + x);
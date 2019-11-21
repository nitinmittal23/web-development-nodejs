let x = 10;

function myFun(){
    let x = 20;
    x+=1;
    console.log("line 6 " + x);
    if (true){
        let x = 30;
        x+=1;
        console.log("line 10 "  + x)
    }
    console.log("line 12 " + x)
}

myFun()
console.log("line 16 " + x);
function createGreeter (name){
    let firstName = name.split(" ")[0];
    function greeter () {
        console.log("Hello "+firstName);
    }
    return greeter;
}

let anjaliGreeter = createGreeter("Anjali Joshi");
anjaliGreeter();

let nitinGreeter = createGreeter("Nitin Mittal");
nitinGreeter();

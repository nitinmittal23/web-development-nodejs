function getFirstName(fullName){
    return fullName.split(" ")[0]
}

function greeter (findName, fullName){
    let firstName = findName(fullName);
    console.log("hello "+firstName);
}

greeter(getFirstName, "Anjali Joshi");

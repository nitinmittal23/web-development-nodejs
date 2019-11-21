function person(name , age){
    this.firstName = name.split(" ")[0]
    this.lastName = name.split(" ")[1]
    //let mAge = age
    //now 'age' is like a private variable
    this.isAdult = function(){return age>18  }
}

let p = new person("Anjali Joshi", 20)
let h = new person("Nitin Mittal",21)
console.log(p)
console.log(p.isAdult())
console.log(h)
console.log(h.isAdult())

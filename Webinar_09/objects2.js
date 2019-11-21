let obj = {
    aNumber: 123,
    aString: "asdasa",
    aFunction: function(){
        return (this.aNumber + this.aString)
    }
}

console.log(obj.aFunction())

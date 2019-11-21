let obj = {
    a: 10,
    b: "hello",
    c: true,
    d: {
        p:10,
        q:20,
        r: {
            s:"inner"
        }

    }

}
console.log(obj.d.r.s)
obj.l = 111 //new properties added to object
delete obj.b //properties deleted from object
console.log(obj)

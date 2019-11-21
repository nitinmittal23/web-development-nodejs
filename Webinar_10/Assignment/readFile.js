const fs = require('fs')
fs.readFile(__dirname + "/myFile.txt",function(err,data){
    if (err) throw err;
    let a = (data.toString())
    let r = a.split("\n")
    let dict = {};
    for (var item in r){

        var b = r[item];
        var flag = false;
        for(var i in dict){
            if(i == b){
                flag = true;
                break; 
            }
        }
        if (flag == true) {dict[b]++}
        else {dict[b] = 1}
    }
    var data = ""
    for (item in dict){
        var temp = item + ": " + dict[item] + "\n"
        var res = data.concat(temp)
        data = res;
    }
    
    fs.writeFile(__dirname + "/myNewFile.txt", data, function(err){
        if (err) throw err
        console.log("file was written")
    })
})


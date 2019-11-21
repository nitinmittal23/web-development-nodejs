function download(url){
    return new Promise(function(resolve,reject){
        if (!url.startsWith("http")){
            reject(new Error("url does not start with http"))
        }
        else {
            console.log("start download: "+ url)
            setTimeout(function(){ //Fake 3 second download task
                let filename = url.split("/").pop()
                resolve(filename)
            },3000)
        }
    })
}

function resize (filename) {
    return new Promise(function(resolve, reject){
        if (!filename.endsWith(".png")){
            reject(new Error("file is not png"))
        } else {
            console.log("start resize: "+ filename)
            setTimeout(function(){
                let resizedfile = filename.split(".")[0] + "-resized.png"
                resolve(resizedfile)
            },3000)
        }
    })
}

function upload(resizedfile){
    return new Promise(function(resolve, reject){
        console.log("start upload: "+ resizedfile)
        setTimeout(function(){
            let uploadedUrl = "http://imgur.com/" + resizedfile
            resolve(uploadedUrl)
        },3000)
    })
}

download ('http//cb.lk/logo.png')
    .then(resize)
    .then(upload)
    .then(function(uploadedUrl){
        console.log("file was uplaoded to:  " + uploadedUrl)
    }) 
    .catch(function(err){
        console.error(err)
    })


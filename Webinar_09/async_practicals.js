function downloadFiles(url, downlaoded){
    //We are downloading the file here
    //let's assume it takes 3 seconds to download
    //We use setTimeout to generate fake delay
    console.log("Downloading file: " + url)
    setTimeout(function(){
        let filePath = "C:\\downloads\\" + url.split('/').pop()
        console.log("File was downlaoded to: " + filePath)
        downlaoded(filePath)
    },3000)
}

function resizeFile(filePath, resized){
    //we are resizing the file. It take 3 seconds
    //we again use a fake timeout delay
    console.log("we are resizing: "+ filePath)
    setTimeout(function(){
        let newPath = filePath.split(".")[0] + "-resized." + filePath.split(".")[1]
        resized(newPath)
    },3000)
}

function uploadFiles(diskPath, uploaded){
    //We will upload this file, it takes 3 seconds,
    //we will use another fake settimeout delay logic
    setTimeout(function(){
        let uploadedPath = "https://cb.lk/upload/" + diskPath.split('\\').pop();
        console.log("We uploaded to " + uploadedPath)
        uploaded(uploadedPath)
    }, 3000)
}

downloadFiles("https:\\google.com\logo.png", function(downloadedPath){
    resizeFile(downloadedPath, function(resizedPath){
        uploadFiles(resizedPath, function(uploadedUrl){
            console.log("Uploaded successfully to: " + uploadedUrl)
        })
    }) 
})


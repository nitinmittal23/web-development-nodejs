const express = require('express')
const path = require('path')
const fareUtils = require('./fareutils')


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, 'public_static')))

app.post('/calcfare',  (req,res)=> {
    let km = parseFloat(req.body.km)
    let min = parseInt(req.body.min)

    // let fare = 50
    // fare += (km>5) ? ((km - 5)*10) : 0
    // fare += (min>15) ? ((min-15)*2) : 0
    let fare = fareUtils.calcFare(km, min)

    res.send({fare: fare})
})

app.get('/rate', (req,res)=> {
    res.send(fareUtils.rate)
})

app.listen(2222, () => console.log ('server started on http://localhost:2222'))
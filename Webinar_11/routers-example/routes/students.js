const route = require('express').Router()

let student = [
    {name: "Rahul",  college: "DTU", year: "I"},
    {name: "Neha",  college: "NSIT", year: "IV"},
    {name: "saksham",  college: "IIT", year: "II"},
    {name: "anjali",  college: "MAIT", year: "III"},
]

route.get('/', (req,res) => res.send(student))
route.get('/add', (req,res) => {
    student.push({
        name: req.query.name,
        college: req.query.college,
        year: req.query.year
    })
    res.send(student)
})
route.post('/', (req,res)=> {
    student.push({
        name: req.body.name,
        college: req.body.college,
        year: req.body.year
    })
    res.send(student)
})
route.get('/:id',(req,res) => res.send(student[req.params.id]))

module.exports = route
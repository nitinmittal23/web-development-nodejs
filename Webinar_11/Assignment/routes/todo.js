const route = require('express').Router()

let todo = [
    {task: "playing", done: "true"},
    {task: "studying", done: "false"},
    {task: "coding", done: "true"},
    {task: "eating", done: "true"},
    {task: "writing", done: "false"}
]

route.get('/', (req, res) => res.send(todo))
route.post('/', (req, res) => {
    todo.push({
        task: req.body.task,
        done: req.body.done
    })
    res.send(todo)
})
route.patch(':/id',(req,res) => {
    todo[req.params.id].task = req.body.task
    todo[req.params.id].done = req.body.done
    res.send(todo)
})

route.delete(":/id", (req,res) => {
    todo.splice(req.params.id,1)
    res.send(todo)
})


route.get('/:id',(req,res) => res.send(todo[req.params.id]))
module.exports = route


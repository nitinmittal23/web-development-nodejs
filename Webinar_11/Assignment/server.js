const express = require('express')
const srv = express()

const todolist = require('./routes/todo')

srv.use(express.json())
srv.use(express.urlencoded({extended: true}))

srv.use('/todolist',todolist)

srv.listen(1423)

const Product = require('../../db').Product
const route = require('express').Router()

route.get('/', (req,res)=>{
    //Get all products
    Product.findAll()
        .then((products)=>{
            res.status(200).send(products)
        })
        .catch((err)=>{
            res.status(500).send({
                error: "could not retrive users"
            })
        })
})

route.post('/', (req,res)=>{
    //Add a new product
    User.create({
        name: req.body.name
    }).then((user)=>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(501).send({
            error: "could not add new user"
        })
    })
})

exports = module.exports = route
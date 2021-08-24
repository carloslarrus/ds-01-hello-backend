const express = require('express')
const app = express()

const modulesDCI = ['HTML/CSS', 'JavaScript', 'DOM', 'SPA', 'Backend', 'Fullstack', 'Final Project']

app.get("/json", (request, response ) =>{
    response.json(modulesDCI)
})

app.listen(5000, () =>{
    console.log('using PORT 5000')
    console.log('http://localhost:5000')
})
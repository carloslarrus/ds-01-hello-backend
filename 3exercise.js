const express = require("express")
const app = express()
const cors = require('cors')

const arrModulesDCI = [
    'HTML/CSS', 'JavaScript', 'DOM', 'SPA', 'Backend', 'Fullstack', 'Final Project'
]

app.use(cors())

app.get("/", (request, response) =>{
    const arrLi =arrModulesDCI.map(item => {
        if(item !== arrModulesDCI[4]){
            return( `<li>${item}</li>`)
        } else{
            return( `<li><b>${item}</b></li>`)
        }
        })
   
    const arrString = arrLi.join('')
    response.send(arrString)
})

app.get("/json", (request, response) =>{
  response.json(arrModulesDCI)
})

app.listen(5002, () =>{
    console.log('http://localhost:5002')
})


app.use( cors() )
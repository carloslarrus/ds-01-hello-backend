const express = require('express')
const app = express()

const modulesDCI = ['HTML/CSS', 'JavaScript', 'DOM', 'SPA', 'Backend', 'Fullstack', 'Final Project']

app.get("/json", (request, response ) =>{

    // var ul = document.createElement('ul')
    // ul.appendChild(li)
    const arrLi = modulesDCI.map(item => {
      
        if(item === modulesDCI[4]){
            return( `<li><b>${item}</b></li>`)
        } else{
            return( `<li>${item}</li>`)
        }
    })
    const arrString = arrLi.join('')
    response.send(`<ul>${arrString}</ul>`)
})

app.listen(5001, () =>{
   
    console.log('http://localhost:5001')
})
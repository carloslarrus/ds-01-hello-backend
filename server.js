const express = require('express')
const app = express()

const arrTeachers = [
    {id : '1', name : 'Alejandra'},
    {id : '2', name : 'Ghassan'},
    {id : '3', name : 'Mansour'},
]

app.get("/teachers", (request, response) => {
   

    console.log("training!!!")
    response.json(arrTeachers)
})

app.get("/teachers/:id", (request, response) =>{
   
    const {id} = request.params
    console.log(request.params)
    const teacherFound = arrTeachers.find(teacher => teacher.id == id)
    response.json(teacherFound)
})

app.listen(5000, () =>{
    console.log('first self made API')
})
const express = require("express")
var path = require('path')
var favicon = require('serve-favicon')

const app = express()
const port = 3000

app.set("view engine","ejs")
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.get("/",(req,res)=>{

    res.render("index")
})

const userRouter = require("./routers/project")

app.use("/projects", userRouter)

app.listen(port)
console.log(`server starting on localhost:${port}`)
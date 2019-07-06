const ip = require("ip")
const bodyParser = require("body-parser")
const express = require("express")
const app = express()

// global variables/config
const port = 3000
const thisApiUrl = `http://${ip.address()}:${port}`

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


const server = app.listen(port, function () {
    console.log("=================================")
    console.log("Api running") 
    console.log("   ", thisApiUrl)

    console.log("=================================")
    console.log("    ")
})


// routes
app.get("/", (req, res) => {
    res.status(200).send({
        message: 'wazzuh'
    })
})
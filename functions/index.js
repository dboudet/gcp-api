const functions = require("firebase-functions")
const express = require("express")
const app = express()

app.get('/baseball-teams', (req,res) => {
    res.send('Go Marlins')
})
app.get('/basketball', (req,res) => {
    res.send('Miami Heat')
})
app.get('/florida', (req,res) => {
    res.send('Go Gators!')
})

exports.app = functions.https.onRequest(app)

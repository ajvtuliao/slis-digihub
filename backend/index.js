const express = require('express');
const session = require('express-session')
const cookieParser = require('cookie-parser')
const crypto = require('crypto')
const path = require('path')
const app = express()
const oneDay = 1000 * 60 * 60 * 24;
const port = 5000

app.use(express.static(path.join(__dirname + '/../frontend/dist')))
app.use(express.json())

app.use(session({
    secret: crypto.randomBytes(32).toString('hex'),
    saveUninitialized: false,
    cookie: {maxAge: oneDay},
    resave: true,
    rolling: true,
    cookie: {
        expires: 20 * 1000
    }
}))

app.use(cookieParser())


app.post('/login', (req, res) => {
    if (req.body.username == 'admin' && req.body.password == 'admin') {
        var session = req.session
        session.username = req.body.username
        res.json({
            login: true
        })
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/')
})

app.get('/admin', (req, res) => {
    var session = req.session
    if (!session.username) {
        res.redirect('/')
    } else {
        res.sendFile(
            path.resolve(__dirname + '/../frontend/dist', 'index.html')
        )
    }
})

app.get('/isLoggedIn', (req, res) => {
    var session = req.session
    if (session.username) {
        res.json({
            login: true
        })
    } else {
        res.json({
            login: false
        })
    }
})

app.get('*', (req, res) => {
    res.sendFile(
        path.resolve(__dirname + '/../frontend/dist', 'index.html')
    )
})

app.listen(port, () => {
    console.log(`Starting app at port ${port}`)
})
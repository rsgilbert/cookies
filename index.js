const { Console } = require('console');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(req.headers)
    res.setHeader('set-cookie', ['backend=express','runtime=nodejs'])
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/test', (req, res) => {
    console.log(req.headers)
    const expDate = new Date(new Date().getTime() + 1 * 60 * 1000) // 1 minute from now
    const expDateStr = expDate.toUTCString();
    console.log(expDate, 'str', expDateStr)
    res.setHeader('set-cookie', ['loveyou=true',`hateyou=false;expires=${expDateStr}`,'annoyedwithyou=yes; Max-Age=30'])
    res.send('I love you')
})

app.get('/cookies', (req, res) => {
    console.log(req.headers.cookie)
    res.json(req.headers.cookie)
})

app.listen(3000, console.log('listening on 3000'))
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
    res.setHeader('set-cookie', ['loveyou=true','bishop=white;domain=.','fav=gilbert;path=/cookies','song=starts;path=/test',])
    res.send('I love you')
})

app.get('/cookies', (req, res) => {
    console.log(req.headers.cookie)
    res.json(req.headers.cookie)
})

app.listen(3000, console.log('listening on 3000'))


const express = require('express');

const fs = require('fs');

const router = express.Router();

router.get('/login', (req, res, next) => {

    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="GET"><input id="username" placeholder="Enter your name" type="text" name="title"><button type="submit">add</button></form>');

})


router.get('/', (req, res, next) => {
    fs.readFile('chat.txt', (err, data) => {
        if (err) {
            console.group(err);
            data = 'No chat Exits'
        }
        res.send(`${data}
    <form action="/sec" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">
    <input type="text" id="message" name="message" placeholder="type a message">
    <input type="hidden" name="username" id="username">
    <button typr="submit">send</button>
    </form>
    `)
    })

});

router.post('/sec', (req, res, next) => {
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile("chat.txt", `${req.body.username}:${req.body.message}  `, { flag: 'a' }, (err) => {
        err ? console.log(err) : res.redirect('/');
    });

});


module.exports = router;
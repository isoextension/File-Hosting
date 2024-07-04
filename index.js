const express = require('express')
const app = express()
const fs = require('fs')

app.listen(1000, () => {
    console.log("Listening in port 1000")
})

app.get("/ContentDelivery/", (req, res) => {
    res.status(500).send('This is still in development, please be patient.')
    if (!req.body['File']) { 
        res.status(400).send('Bad Request\nExpected "file" header, got nothing'); 
        return;
    }
    if (fs.existsSync(req.body['File'])) {
        res.sendFile(`files/${fs.readFileSync(req.body['File'], 'utf-8')}`)
    }
})

app.use((req, res, next) => {
    res.status(404).sendFile('/catching/404/index.html')
});
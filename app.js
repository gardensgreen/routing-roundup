const express = require("express");

const app = express();
app.set('view engine', 'pug');


// app.all('*', (req, res) => {
//     const pageData = { 
//         path: req.path, 
//         method: req.method, 
//         randomNumber: Math.floor(Math.random() * 100) 
//     }
//     res.render('layout', pageData)
// })

app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

const port = 8081;
app.listen(port, () => console.log("Listening on port " + port));

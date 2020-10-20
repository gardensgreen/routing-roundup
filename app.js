const express = require("express");

const app = express();
app.set("view engine", "pug");



app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

app.get("/*xyz", (req, res) => {
    res.send("That's all I wrote.");
});

app.get('/capital-letters/:path', (req, res) => {
    let path = req.params.path;
    res.send((path).toUpperCase());
})

/*  app.get(/^\/(capital-letters)\/(.*)/, (req, res) => {
    let path = req.params[1];
    res.send(path.toUpperCase());
})  */

app.all("*", (req, res) => {
    const pageData = {
        path: req.path,
        method: req.method,
        randomNumber: Math.floor(Math.random() * 100),
    };
    res.render("layout", pageData);
});

const port = 8081;
app.listen(port, () => console.log("Listening on port " + port));

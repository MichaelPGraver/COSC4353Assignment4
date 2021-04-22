const express = require("express");
const bodyparser = require("body-parser");
const multer = require("multer");
const cookieparser = require("cookie-parser");
const cors = require("cors");
let form_parser = multer();
let app = express();

const {
    SignUp,
    logIn,
    ClientProfileManagement,
    priceMargin,
    fuelquote,
} = require("./endpoints");

app.use(
    cors({
        origin: true,
        credentials: true,
    })
);

app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(form_parser.none());

app.post("/api/SignUp", SignUp);
app.post("/api/LogIn", logIn);
app.post("/api/profileManagement", ClientProfileManagement);
app.post("/api/priceMargin", priceMargin);
app.post("api/fuelquote", fuelquote);

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname,'build','index.html'));
});

app.listen(8080);

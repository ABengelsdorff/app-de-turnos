"use strict";
const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const server = express();
server.listen(PORT, () => {
    console.log(`server listening on PORT ${PORT}`);
});


/*function calcularResultado() {
    const num1: number = 15;
    const num2: number = 15;
    const resultado: number = num1 + num2;
    console.log(resultado);
}

calcularResultado();*/

const express = require('express');
const fs = require('fs');

const router = express.Router();
const PATH = __dirname;
const removeExtension = file => file.split(".").shift();


fs.readdirSync(PATH).filter( file => {
    console.log(file);
    const ruta = removeExtension(file);
    ruta !== "index" &&  router.use(`/${ruta}`, require(`./${file}`));
}) 

module.exports = router; 
const express = require('express');
const app = express();

const hbs = require('hbs');

const port = process.env.PORT || 3000;

//Helpers
require('./hbs/helpers');

//Middleware
app.use(express.static(__dirname + '/public'));

//Express HBS engine
//Crear parciales
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    // res.send('Hola Mundo');
    // let salida = {
    //     nombre: 'Gabriel',
    //     edad: 24,
    //     url: req.url
    // }
    // res.send(salida);
    res.render('home', {
        nombre: 'GABRIELL Vidal',
        anio: new Date().getFullYear()
    });

});
app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });

});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});
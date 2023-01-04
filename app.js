const express = require('express');
const hbs = exphbs.create({});
const app = express();
const port = process.env.PORT|| 3000;
const router = require('./src/routes/index');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use('/', router)

app.listen(port, ()=>{
    console.log(`The server is listening to port ${port}`)
});
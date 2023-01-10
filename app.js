const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const port = process.env.PORT|| 3000;
const router = require('./src/routes/index');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use('/', router);

app.get('/', (req,res)=> { 
    res.render('home')

});


app.listen(port, () => {
    console.log('Server listening on: http://localhost:' + port);
  });
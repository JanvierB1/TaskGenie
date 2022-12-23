const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = process.env.PORT|| 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.engine('hbs', exphbs({extname:'.hbs'}));
app.search('view engine', 'hbs');

app.get('/', (req, res)=>{
    res.render('homePage');

})

app.listen(port, ()=>{
    console.log(`The server is listening to port ${port}`)
});
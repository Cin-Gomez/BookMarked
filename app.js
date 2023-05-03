require("dotenv").config();
const express =  require('express');
const expressLayouts = require('express-ejs-layouts');
require("express-async-errors");
const session = require("express-session");
const flash = require("connect-flash");
const rateLimiter = require("express-rate-limit"); //SECURITY
const helmet = require("helmet"); //SECURITY
const xss = require("xss-clean"); //SECURITY
const passport = require("passport");
const MongoDBStore = require("connect-mongodb-session")(session);

const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(expressLayouts);


app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const routes = require('./server/routes/bookRoutes.js')
app.use('/', routes);



const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`Listening on port ${port}`));

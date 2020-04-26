const express = require('express');
/* create an app using Express.js which makes creating a node server much easier. */
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
/* mongoose to create an interface with a mongodb */
const mongoose = require('mongoose');
/* use the Routes module from express to set up a REST API */
const Routes = express.Router();
/* Set the port to listen on */
const PORT = 4000;
/* import the model file for the user */
let USER = require('./models/user.model');
let PRODUCT = require('./models/product.model');
app.use(cors());
app.use(bodyParser.json());
/* create a connection to the mongoDb database */
mongoose.connect('mongodb://127.0.0.1:27017/shopping', {useNewUrlParser: true});
const connection = mongoose.connection;
/* open the connection to the database */
connection.once('open', function(){
  console.log("Connected to MongoDb database successfully!")
});
/* langing page route */
Routes.route('/').get(function(req, res) {
  PRODUCT.find(function(err, products) {
    if(err) {
      console.log(err);
    } else {
      res.json(products);
    }
  });
});
/**/
Routes.route('/user').get(function(req, res) {
  /*
    user landing page - display all products after being logged in
  */
});
/**/
Routes.route('/user/add').post(function(req, res)
{
  /*
    add new user to the site
  */

});
/**/
Routes.route('/user/:id').get(function(req, res)
{
  /*
    will show the information about the current user
    make non accessable if not logged in as that user
  */
});
/**/
Routes.route('/user/:id/update').post(function(req, res)
{
  /*
    update information about the logged in user
  */

});
/**/
Routes.route('/user/:id/cart').get(function(req, res)
{
  /*
    will show the users card and items in it
  */
});
/**/
Routes.route('/products').get(function(req, res)
{
  /*
    will show all products
  */
});
/* add new product */
Routes.route('/products/add').post(function(req, res)
{
  let product = new PRODUCT(req.body);
  product.save()
    .then(product => {
      res.status(200).json({'product add': 'added product successfully'});
    })
    .catch(err => {
      res.status(400).send('adding new product failed');
    });
});
/* product page by id*/
Routes.route('products/:id').get(function(req, res) {
  let id = req.params.id;
  PRODUCT.findById(id, function(err, product) {
    res.json(product);
  });
});
/**/
Routes.route('products/:id/update').get(function(req, res) {
  let id = req.params.id;
  /*
    update information about a product
  */
});

/*
  prepends /shopping to all routes, so when the endpoints send requests
  to the database it will go to the correct database on the localhost
*/
app.use('/shopping', Routes);

app.listen(PORT, function() {
  console.log("Server running on port: " + PORT);
});

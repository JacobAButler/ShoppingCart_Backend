const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let product = new Schema({

  product_id:{
    type:String
  },
  product_name:{
    type:String
  },
  product_description:{
    type: String
  },

  product_price:{
    type: Number
  },

  product_seller:{
    type:String
  },

  product_active:{
    type: Boolean
  }

});

module.exports = mongoose.model('product', product);

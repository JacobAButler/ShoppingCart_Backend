const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let user = new Schema({
  user_name: {
    type: String
  },
  user_address: {
    type:String
  },
  user_phone:{
    type: Number
  },
  user_cart:{
    type: Array
  },
  user_seller:{
    type: Boolean
  }
});

module.exports = mongoose.model('User', user);

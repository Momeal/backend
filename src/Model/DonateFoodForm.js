const mongoose = require("mongoose");

const donateFoodSchema = new mongoose.Schema({
    location: {
      type: String,
      required: true
    },
    food_item: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    date: {
      type: String,
      default: true
    },
    food_image1: {
      type: String,
     
    },
    food_image2: {
      type: String,
     
    },
    serving_size:{
        type: String,
        default: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

module.exports = mongoose.model('donateFood', donateFoodSchema);

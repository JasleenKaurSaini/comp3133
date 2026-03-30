const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema(
  {
    address: {
      building: String,
      street: String,
      zipcode: String,
      coord: [Number], // optional
    },
    city: String,          // ✅ your seed uses city
    cuisine: String,
    name: String,
    restaurant_id: String,
  },
  { collection: "Restaurants" }
);

module.exports = mongoose.model("Restaurant", RestaurantSchema);

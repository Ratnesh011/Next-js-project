const { default: mongoose } = require("mongoose");



const restaurantModel=new mongoose.Schema({
    email:String,
    password:String,
    restoname:String,
    city:String,
    contact:String,
    address:String

});

export const restaurantSchema=mongoose.models.restaurants  //restaurants is collection name which are created in mongodb
|| mongoose.model("restaurants",restaurantModel);
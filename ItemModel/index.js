const mongoose = require('mongoose')
const post = require('../PostModel/index')
const itemSchema = new mongoose.Schema({
    restaurantId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    },
    sideTag:{
       type:String
    },
    itemName: {
        type: String
    },
    itemDescription: {
        type: String
    },
    price: {
        type: String
    },
    itemImage: {
        type: String
    },
    vegOrNonVeg: {
        type: String
    },
 
 
 

}, {

    timeStamps: true
})
module.exports.item = new mongoose.model("item", itemSchema)

// const obj = [{
//     id: "1",
//     imgSrc: "../images/pexels-ella-olsson-1640772.jpg",
//     name: "AirCampus Sweets & Restaurant",
//     varaities: "Sweets, North Indian, Chinese, South Indian, Italian, Pizzas",
//     estTime: "30 MINS",
//     price: "250 FOR TWO",
//     rating: 4.2,
//     offer: "50% off | Use WELCOME50",
// }]
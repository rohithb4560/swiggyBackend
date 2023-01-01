const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  
    imgSrc: {
        type: String
    },
    name: {
        type: String
    },
    varaities: {
        type: String
    },
    estTime: {
        type: String
    },
    price: {
        type: String
    },
    rating: {
        type: String
    },
    offer: {
        type: String
    },
  

}, {

    timeStamps: true
})
module.exports.post = new mongoose.model("post", postSchema)

// const obj = [{
//     id: "1",
    // imgSrc: "../images/pexels-ella-olsson-1640772.jpg",
    // name: "AirCampus Sweets & Restaurant",
    // varaities: "Sweets, North Indian, Chinese, South Indian, Italian, Pizzas",
    // estTime: "30 MINS",
    // price: "250 FOR TWO",
    // rating: 4.2,
    // offer: "50% off | Use WELCOME50",
// }]
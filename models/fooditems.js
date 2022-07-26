const mongoose = require("mongoose");

const fooditemShcema = new mongoose.Schema({
    name: {
        type: String,
    },
    calories: {
        type: String ,
    },
    protein: {
        type: String,
    },
    carb: {
        type: String,
    },
    fat: {
        type: String,
    },
    acceptedUnits: {
        type: String,
        enum: ['ml','liter','kg','g'],
        // default: 'g',
    },
    itemWeight: {
        type: String,
    },
})

const foodItem = mongoose.model("foodItem" , fooditemShcema);
module.exports = foodItem;
const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ['Breakfast' , 'Lunch' ,'Evening' ,'Snack','Dinner'],
        default: 'Breakfast',
    },
    name: {
        type: String,
    },
    foodItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "foodItem",
        }
    ]
});

const meals = mongoose.model("meals" , mealSchema);
module.exports = meals;
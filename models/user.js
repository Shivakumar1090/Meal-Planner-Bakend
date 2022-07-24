const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    calorieRequirement:{
        type: String,
    },
    mealPlan: [
        {
            date: {
                type: String,
            },
            meals: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'meals'
                }
            ]
        },
    ],
});

const user = mongoose.model("user" , userSchema);
module.exports = user;
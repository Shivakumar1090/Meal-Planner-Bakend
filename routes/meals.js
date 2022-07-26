const express = require('express');
const router = express.Router();
const meal = require("../models/Meal");

router.get('/meals' , (req,res) => {
    try{
        meal.find()
            .then(data => res.status(200).json(data))
            .catch(err => res.status(422).json(err));
    } catch(err){
        res.json(err);
    }
})

router.post("/meal" , async(req,res) => {
    const new_meal = new meal({
        category: req.body.category,
        name: req.body.name,
        foodItems: req.body.foodItems,
    })

    try{
        await new_meal.save()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(422).json(err));
    } catch(err){
        res.status(422).json(err);
    }
})
module.exports = router;
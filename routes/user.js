const express = require('express');
const router = express.Router();
const user = require('../models/user');

router.post("/usermealplan" , async (req,res) => {
    const new_mealPlan = new user({
        name: req.body.name,
        calorieRequirement: req.body.calorieRequirement,
        mealPlan: req.body.mealPlan,
    });

    try{
        await new_mealPlan.save()   
            .then(data => res.status(200).json(data))
            .catch(err => res.status(422).json(err));
    } catch(err){
        res.status(422).json(err);
    }
})

module.exports = router;
const express = require('express');
const router = express.Router();
const fooditem = require('../models/fooditems');

router.get('/fooditems' , async(req,res) => {
    fooditem.find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
})

router.post('/fooditem' , async(req,res) => {
    const new_item = new fooditem({
        name: req.body.name,
        calories: req.body.calories,
        protein: req.body.protein,
        carb: req.body.carb,
        fat: req.body.fat,
        itemWeight: req.body.itemWeight,
        acceptedUnits: req.body.acceptedUnits,
    });

    await new_item.save()
            .then(data => {
                res.json(data);
            })
            .catch(err => res.json(err));
})

module.exports = router;
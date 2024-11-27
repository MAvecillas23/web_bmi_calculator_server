// import express and router
const express = require('express')
const router = express.Router()


// homepage
router.get('/', function(req, res, next) {
    res.render('index')
})

// when the submit button is clicked calculate bmi
router.get('/calculate', function(req, res,next) {
    // get the query data from the input fields
    const formData = req.query
    console.log(formData)
    // check is user entered height and weight
    if (formData.height === '' || formData.weight === '') {
        res.render('error_message', {error: 'Height and Weight fields must be entered'})
    }
    // check if user entered 0 in the height and weight fields
    else if (formData.height == 0 || formData.weight == 0) {
        res.render('error_message', {error: 'The Height and Weight fields cannot be 0'})
    }
    else {
        // calculate bmi using the query data
        const bmiDec = formData.weight / (formData.height * formData.height)
        // round to 2 decimals
        const bmi = bmiDec.toFixed(2)
        // render the results template with bmi calculation
        res.render('results', {bmi: bmi})
    }

})








module.exports = router
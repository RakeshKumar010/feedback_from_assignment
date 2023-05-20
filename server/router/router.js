const express = require('express')
const router = express.Router()
const feedbackModel = require('../schema/feedbackSchema')

router.post('/',async(req, res) => {
    let result =  feedbackModel(req.body)
    result = await result.save()
    res.send(result)
})
router.get('/alldata',async(req, res) => {
    let result = await feedbackModel.find()
    res.send(result)
})
router.delete('/alldata/:id',async(req, res) => {
    let result = await feedbackModel.deleteOne({_id:req.params.id})
    res.send(result)
})


module.exports = router;
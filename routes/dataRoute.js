const express = require('express')
const router = express.Router()
const { postData, getData } = require('../controllers/dataController')

router.post('/signup', postData)
router.post('/login', getData)



module.exports = router
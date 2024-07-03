// Load in Express framework
const express = require(`express`)

const { checkAccept} = require('../middlewares/api.js')

// Load in our controller/action instances
const starCtlr = require(`../controllers/star.js`)

// Create a new Router instance and call it "router"
const router = new express.Router()

// RESTful resource mappings
router.get(`/:id/edit`, starCtlr.form)
router.get(`/new`, starCtlr.form)
router.get(`/`, checkAccept, starCtlr.index)
router.post(`/`, checkAccept, starCtlr.create)
router.post(`/:id`, checkAccept, starCtlr.create)
router.get(`/:id`, checkAccept, starCtlr.show) 
router.put(`/:id`, checkAccept, starCtlr.update) 
router.delete(`/:id`, checkAccept, starCtlr.remove) 

// export "router"
module.exports = router

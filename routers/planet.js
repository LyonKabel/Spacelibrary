// Load in Express framework
const express = require(`express`)
const { checkAccept} = require('../middlewares/api.js')
// Load in our controller/action instances
const planetCtlr = require(`../controllers/planet.js`)

// Create a new Router instance and call it "router"
const router = new express.Router()

// RESTful resource mappings
router.get(`/:id/edit`, planetCtlr.form)
router.get(`/new`, planetCtlr.form)
router.get(`/`, checkAccept, planetCtlr.index)
router.post(`/`, checkAccept, planetCtlr.create)
router.post(`/:id`, checkAccept, planetCtlr.create)
router.get(`/:id`, checkAccept, planetCtlr.show) 
router.put(`/:id`, checkAccept, planetCtlr.update) 
router.delete(`/:id`, checkAccept, planetCtlr.remove) 


// export "router"
module.exports = router

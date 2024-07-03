// Load in Express framework
const express = require(`express`)
const { checkAccept} = require('../middlewares/api.js')
// Load in our controller/action instances
const galaxyCtlr = require(`../controllers/galaxy.js`)

// Create a new Router instance and call it "router"
const router = new express.Router()

// RESTful resource mappings
router.get(`/:id/edit`, galaxyCtlr.form)
router.get(`/new`, galaxyCtlr.form)
router.get(`/`, checkAccept, galaxyCtlr.index)
router.post(`/`, checkAccept, galaxyCtlr.create)
router.post(`/:id`, checkAccept, galaxyCtlr.create)
router.get(`/:id`, checkAccept, galaxyCtlr.show) 
router.put(`/:id`, checkAccept, galaxyCtlr.update) 
router.delete(`/:id`, checkAccept, galaxyCtlr.remove)

// export "router"
module.exports = router

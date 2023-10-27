const express = require('express')
const router = express.Router()
const { Get, Insert, GetByPK, Update, Delete } = require('../controller/profile.controller')
const { CheckPostProfile } = require('../middleware/middleware')

router.get('/', Get)
router.get('/:profileId', GetByPK)
router.post('/', CheckPostProfile, Insert)
router.put('/:profileId', Update)
router.delete('/:profileId', Delete)
module.exports = router
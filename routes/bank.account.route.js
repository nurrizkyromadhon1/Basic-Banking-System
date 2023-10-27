const express = require('express')
const router = express.Router()
const { Get, Insert, GetByPK, Update, Delete } = require('../controller/bank.accoount.controller')
const { CheckPostAccount } = require('../middleware/middleware')

router.get('/', Get)
router.get('/:accountId', GetByPK)
router.post('/', CheckPostAccount, Insert)
router.put('/:accountId', Update)
router.delete('/:accountId', Delete)
module.exports = router
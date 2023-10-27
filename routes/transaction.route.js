const express = require('express')
const router = express.Router()
const { Get, Insert, GetByPK, Update, Delete } = require('../controller/transaction.controller')
const { CheckPostTransaction } = require('../middleware/middleware')

router.get('/', Get)
router.get('/:transaction', GetByPK)
router.post('/', CheckPostTransaction, Insert)
router.put('/:transaction', Update)
router.delete('/:transaction', Delete)
module.exports = router
const router = require('express-promise-router')()
const { bank } = require('../controllers')

router.route('/:id').get(bank.get)
router.route('/').post(bank.create)
router.route('/').get(bank.getAll)
router.route('/:id').put(bank.update)
router.route('/:id').delete(bank.delete)

module.exports = router

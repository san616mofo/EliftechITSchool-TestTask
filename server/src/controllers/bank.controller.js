const genericCrud = require('./generic.controller')
const { Banks } = require('../models')

module.exports = { ...genericCrud(Banks) }

const express = require('express')
const mongoose = require('mongoose')
const { routes } = require('./src/routes')

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())

routes.forEach(item => {
	app.use(`/api/v1/${item}`, require(`./src/routes/${item}`))
})

const start = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://bastard:winteriscoming@cluster0.6gh7r.mongodb.net/mortgage-calculator?retryWrites=true&w=majority`
		)
		app.listen(PORT, () => console.log(`Server running at ${PORT}`))
	} catch (err) {
		console.log(err)
	}
}

start()

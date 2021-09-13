const {
	model,
	Schema,
	Schema: {
		Types: { ObjectId },
	},
} = require('mongoose')

const schema = new Schema({
	// Назва банку (e.g. - Raiffeisen Bank)
	bankName: { type: String, unique: true, required: true },
	// Перший кредит (e.g. - До 150 000₴)
	firstLoan: { type: String, default: '' },
	// На термін (e.g. - До 60 місяців)
	forTheTerm: { type: String, default: '' },
	// Ставка на рік (e.g. - 59.9%)
	ratePerYear: { type: String, default: '' },
	// Розгляд (e.g. - Миттєво)
	consideration: { type: String, default: '' },
	// Повторний кредит (e.g. - null)
	repeatCredit: { type: String, default: '' },
	// Необхідні документи (e.g. - Довідка про доходи, Паспорт громадянина України, ІПН)
	requiredDocuments: { type: String, default: '' },
	// Вік (e.g. - 23-69)
	age: { type: String, default: '' },
	// Працевлаштування (e.g. - Обов'язково)
	employment: { type: String, default: '' },
	// Кредитна історія (e.g. - Не можна з поганою кредитною історією)
	creditHistory: { type: String, default: '' },
	// Отримання (e.g. - Онлайн на карту)
	getting: { type: String, default: '' },
	// Дострокове погашення (e.g. - Можливо)
	earlyRepayment: { type: String, default: '' },
	// Пролонгація (e.g. - Немає)
	prolongation: { type: String, default: '' },
	// Способи погашення кредиту (e.g. - У відділеннях через касу або термінал, За банківськими реквізитами, Онлайн в особистому кабінеті МФО або через інтернет-банкінг, У терміналах самообслуговування)
	methodsRepaymentLoan: { type: String, default: '' },
})

module.exports = model('Banks', schema)

<template>
	<div class="flex items-center place-content-center">
		<div class="flex flex-col mr-16">
			<div class="flex justify-between mb-2">
				<label>Сума займу:</label>
				<input class="bg-transparent border" type="number" v-model="amountBorrowed" />
			</div>
			<div class="flex justify-between mb-2">
				<label>Річна процентна ставка (%):</label>
				<input class="bg-transparent border" type="number" v-model="annualInterestRate" />
			</div>
			<div class="flex justify-between">
				<label>Кількість щомісячних платежів:</label>
				<input class="ml-6 bg-transparent border" type="number" v-model="numberOfMonthlyPayments" />
			</div>
			<div class="flex items-center justify-center my-3">
				<button
					class="px-4 py-1 text-lg font-bold text-white bg-transparent border border-white rounded"
					@click="calculate"
				>Розрахувати</button>
			</div>
			<div>
				<span>Ваша іпотека:</span>
				<span class="ml-2 font-semibold">{{ monthlyPayment }}</span>
			</div>
		</div>

		<div>
			<div class="mb-2">
				<span>Виберіть свій банк:</span>
				<select class="ml-6 bg-transparent border">
					<option>Raiffeisen Bank</option>
					<option>Zecredit</option>
				</select>
			</div>
			<div class="flex justify-end">
				<button
					class="px-4 py-1 text-lg font-bold text-white bg-transparent border border-white rounded"
					@click="none"
				>Зберегти</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Calculator',
	props: [
		'default_amountBorrowed',
		'default_annualInterestRate',
		'default_numberOfMonthlyPayments',
	],
	components: {
	},
	data() {
		return {
			monthlyPayment: this.monthlyPayment,
			amountBorrowed: this.default_amountBorrowed,
			annualInterestRate: this.default_annualInterestRate,
			numberOfMonthlyPayments: this.default_numberOfMonthlyPayments
		}
	},
	methods: {
		calculate() {
			let P = this.amountBorrowed
			let r = this.annualInterestRate
			let n = this.numberOfMonthlyPayments
			this.monthlyPayment = Math.round((P * ((r / 100) / 12) * (1 + (r / 100) / 12) ** n) / ((1 + (r / 100) / 12) ** n - 1))
		}
	}
}
</script>

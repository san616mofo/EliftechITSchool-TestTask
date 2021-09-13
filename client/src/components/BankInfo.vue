<template >
	<div class="mx-auto mt-20">
		<form class="flex flex-col" @submit.prevent>
			<div class="mb-2 text-center">
				<h1 class="text-2xl font-semibold">Новий банк</h1>
			</div>
			<div class="flex flex-row mb-3">
				<div class="mr-10">
					<div class="flex justify-between mb-2">
						<label>Назва банку:</label>
						<input
							v-bind="bankName"
							@input="bankName = $event.target.value"
							class="bg-transparent border"
							type="text"
							placeholder
						/>
					</div>
					<div class="flex justify-between mb-2">
						<label>Перший кредит:</label>
						<input
							v-bind="firstLoan"
							@input="firstLoan = $event.target.value"
							class="bg-transparent border"
							type="text"
							placeholder
						/>
					</div>
					<div class="flex justify-between mb-2">
						<label>На термін:</label>
						<input
							v-bind="forTheTerm"
							@input="forTheTerm = $event.target.value"
							class="bg-transparent border"
							type="text"
							placeholder
						/>
					</div>
					<div class="flex justify-between mb-2">
						<label>Ставка:</label>
						<input
							v-bind="ratePerYear"
							@input="ratePerYear = $event.target.value"
							class="bg-transparent border"
							type="text"
							placeholder
						/>
					</div>
					<div class="flex justify-between mb-2">
						<label>Розгляд:</label>
						<input
							v-bind="consideration"
							@input="consideration = $event.target.value"
							class="bg-transparent border"
							type="text"
							placeholder
						/>
					</div>
					<div class="flex justify-between mb-2">
						<label>Повторний кредит:</label>
						<input
							v-bind="repeatCredit"
							@input="repeatCredit = $event.target.value"
							class="bg-transparent border"
							type="text"
							placeholder
						/>
					</div>
					<div class="flex justify-between">
						<label>Необхідні документи:</label>
						<input
							v-bind="requiredDocuments"
							@input="requiredDocuments = $event.target.value"
							class="ml-4 bg-transparent border"
							type="text"
							placeholder
						/>
					</div>
				</div>
				<div>
					<div class="flex justify-between mb-2">
						<label>Вік:</label>
						<input
							v-bind="age"
							@input="age = $event.target.value"
							class="bg-transparent border"
							type="text"
							placeholder
						/>
					</div>
					<div class="flex justify-between mb-2">
						<label>Працевлаштування:</label>
						<input
							v-bind="employment"
							@input="employment = $event.target.value"
							class="bg-transparent border"
							type="text"
							placeholder
						/>
					</div>
					<div class="flex justify-between mb-2">
						<label>Кредитна історія:</label>
						<input
							v-bind="creditHistory"
							@input="creditHistory = $event.target.value"
							class="bg-transparent border"
							type="text"
							placeholder
						/>
					</div>
					<div class="flex justify-between mb-2">
						<label>Отримання:</label>
						<input
							v-bind="getting"
							@input="getting = $event.target.value"
							class="bg-transparent border"
							type="text"
							placeholder
						/>
					</div>
					<div class="flex justify-between mb-2">
						<label>Дострокове погашення:</label>
						<input
							v-bind="earlyRepayment"
							@input="earlyRepayment = $event.target.value"
							class="bg-transparent border"
							type="text"
							placeholder
						/>
					</div>
					<div class="flex justify-between mb-2">
						<label>Пролонгація:</label>
						<input
							v-bind="prolongation"
							@input="prolongation = $event.target.value"
							class="bg-transparent border"
							type="text"
							placeholder
						/>
					</div>
					<div class="flex justify-between">
						<label>Способи погашення кредиту:</label>
						<input
							v-bind="methodsRepaymentLoan"
							@input="methodsRepaymentLoan = $event.target.value"
							class="ml-4 bg-transparent border"
							type="text"
							placeholder
						/>
					</div>
				</div>
			</div>
			<div class="flex justify-end">
				<button
					class="px-4 py-1 text-lg font-bold text-white bg-transparent border border-white rounded"
					@click="createBank"
				>Додати</button>
			</div>
		</form>
	</div>

	<div class="container mx-auto mt-10 mb-5">
		<div v-for="(bank, index) in banks" :key="bank.id" class="w-2/3 mx-auto mb-5 border border-white">
			<div class="grid items-center grid-cols-4 justify-items-center h-36">
				<div class="flex">
					<input
						v-if="bank.edit"
						v-model="bank.bankName"
						@blur="bank.edit = false; $emit('update')"
						@keyup.enter="bank.edit = false; $emit('update')"
						v-focus
						class="w-full px-2 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
					/>
					<div v-else>
						<label @click="bank.edit = true;">{{ bank.bankName }}</label>
					</div>
				</div>
				<div class="flex flex-col">
					<div class="mb-3">
						<div>Перший кредит</div>
						<div>{{ bank.firstLoan }}</div>
					</div>
					<div>
						<div>На термін</div>
						<div>{{ bank.forTheTerm }}</div>
					</div>
				</div>
				<div class="flex flex-col">
					<div class="mb-3">
						<div>Ставка</div>
						<div>{{ bank.ratePerYear }}</div>
					</div>
					<div>
						<div>Розгляд</div>
						<div>{{ bank.consideration }}</div>
					</div>
				</div>

				<div>
					<button
						@click="showDetails(bank)"
						class="px-4 py-2 mb-3 font-semibold bg-transparent border border-white rounded"
					>Детальніше</button>
					<button
						@click="removeBank(index)"
						class="px-4 py-2 font-semibold bg-transparent border border-white rounded"
					>Видалити</button>
				</div>
			</div>

			<div class="mb-5" :class="bank.isVisible ? activeClass : 'hidden'">
				<div class="px-3 py-2 mx-10 border border-white">
					<div>Повторний кредит</div>
					<div>{{ bank.repeatCredit }}</div>
				</div>

				<div class="grid grid-cols-2">
					<div class="pt-5 pl-10">
						<div class="mb-3">
							<div>Необхідні документи:</div>
							<div>{{ bank.requiredDocuments }}</div>
						</div>
						<div class="mb-3">
							<div>Вік:</div>
							<div>{{ bank.age }}</div>
						</div>
						<div class="mb-3">
							<div>Працевлаштування:</div>
							<div>{{ bank.employment }}</div>
						</div>
						<div class="mb-3">
							<div>Кредитна історія:</div>
							<div>{{ bank.creditHistory }}</div>
						</div>
						<div class="mb-3">
							<div>Отримання:</div>
							<div>{{ bank.getting }}</div>
						</div>
						<div class="mb-3">
							<div>Дострокове погашення:</div>
							<div>{{ bank.earlyRepayment }}</div>
						</div>
						<div class="mb-3">
							<div>Пролонгація:</div>
							<div>{{ bank.prolongation }}</div>
						</div>
					</div>
					<div class="pt-5">
						<div>
							<div>Способи погашення кредиту:</div>
							<div>{{ bank.methodsRepaymentLoan }}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BankInfo',
	data() {
		return {
			banks: [{
				bankName: "E-Groshi",
				firstLoan: "Дo 10 000₴",
				forTheTerm: "До 30 днів",
				ratePerYear: "0.1%",
				consideration: "Миттєво",
				repeatCredit: "До 30 000₴, ставка в день 2.2%, на термін до 30 днів",
				requiredDocuments: "Паспорт громадянина України, ІПН",
				age: "18-60",
				employment: "Не обов'язково",
				creditHistory: "Не можна з поганою кредитною історією",
				getting: "Онлайн на карту",
				earlyRepayment: "Можливо",
				prolongation: "Так",
				methodsRepaymentLoan: "За банківськими реквізитами, Онлайн в особистому кабінеті МФО або через інтернет-банкінг, В терміналах Приватбанку, У терміналах самообслуговування",
			},
			{
				bankName: "CreditPlus",
				firstLoan: "Дo 10 000₴",
				forTheTerm: "До 30 днів",
				ratePerYear: "0.1%",
				consideration: "Миттєво",
				repeatCredit: "До 20 000₴, ставка в день 1.9%, на термін до 30 днів",
				requiredDocuments: "Паспорт громадянина України, ІПН",
				age: "18-65",
				employment: "Не обов'язково",
				creditHistory: "Не можна з поганою кредитною історією",
				getting: "Онлайн на карту",
				earlyRepayment: "Можливо",
				prolongation: "Так",
				methodsRepaymentLoan: "За банківськими реквізитами, Онлайн в особистому кабінеті МФО або через інтернет-банкінг, В терміналах Приватбанку, У терміналах самообслуговування",
			},
			{
				bankName: "Ccloan",
				firstLoan: "До 8 000₴",
				forTheTerm: "До 30 днів",
				ratePerYear: "0.01%",
				consideration: "Миттєво",
				repeatCredit: "До 20 000₴, ставка в день 1.99%, на термін до 30 днів",
				requiredDocuments: "ІПН, Паспорт громадянина України",
				age: "18-65",
				employment: "Не обов'язково",
				creditHistory: "Не можна з поганою кредитною історією",
				getting: "Онлайн на карту, Готівкою у відділенні",
				earlyRepayment: "Можливо",
				prolongation: "Так",
				methodsRepaymentLoan: "За банківськими реквізитами, Онлайн в особистому кабінеті МФО або через інтернет-банкінг, В терміналах самообслуговування, В терміналах Приватбанку",
			},
			],
			bankName: '',
			firstLoan: '',
			forTheTerm: '',
			ratePerYear: '',
			consideration: '',
			repeatCredit: '',
			requiredDocuments: '',
			age: '',
			employment: '',
			creditHistory: '',
			getting: '',
			earlyRepayment: '',
			prolongation: '',
			methodsRepaymentLoan: '',

			isVisible: false,
			editedBank: null
		}
	},
	methods: {
		showDetails(bank) {
			bank.isVisible = !bank.isVisible;
			this.$forceUpdate();
		},
		createBank(event) {
			// event.stopPropagation()
			// event.preventDefault()
			const newBank = {
				// id: Date.now(),
				bankName: this.bankName,
				firstLoan: this.firstLoan,
				forTheTerm: this.forTheTerm,
				ratePerYear: this.ratePerYear,
				consideration: this.consideration,
				repeatCredit: this.repeatCredit,
				requiredDocuments: this.requiredDocuments,
				age: this.age,
				employment: this.employment,
				creditHistory: this.creditHistory,
				getting: this.getting,
				earlyRepayment: this.earlyRepayment,
				prolongation: this.prolongation,
				methodsRepaymentLoan: this.methodsRepaymentLoan
			}
			this.banks.push(newBank);
		},
		removeBank(index) {
			this.banks.splice(index, 1)
		},
		editBank(bank) {
			this.editedBank = bank
		}
	},
	directives: {
		focus: {
			inserted(el) {
				el.focus()
			}
		}
	}
}
</script>
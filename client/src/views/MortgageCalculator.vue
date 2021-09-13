<template>
	<div
		class="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-red-300 via-indigo-400 to-indigo-300"
	>
		<router-link :to="{ path: '/' }" class="absolute top-10 left-10">
			<button>Повернутися на головну</button>
		</router-link>
		<Calculator class="my-10" />
		<History />
	</div>
</template>

<script>
import Calculator from '../components/Calculator.vue'
import History from '../components/History.vue'
export default {
	name: 'MortgageCalculator',
	components: {
		Calculator,
		History
	}
}
</script>
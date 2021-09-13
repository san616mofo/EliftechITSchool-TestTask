<template>
	<div
		class="flex flex-col w-screen h-full min-h-screen bg-gradient-to-r from-red-300 via-indigo-400 to-indigo-300"
	>
		<router-link :to="{ path: '/' }" class="absolute top-10 left-10">
			<button>Повернутися на головну</button>
		</router-link>
		<BankInfo />
	</div>
</template>

<script>
import BankInfo from '../components/BankInfo.vue'
export default {
	name: 'BanksManagement',
	components: {
		BankInfo,
	}
}
</script>
<template>
	<div class="container mx-auto">
		<h2 class="mb-3 ml-16 text-2xl font-medium">Історія</h2>
		<table class="w-11/12 mx-auto table-auto min-w-max">
			<thead>
				<tr class="text-lg leading-normal text-gray-600 uppercase bg-gray-200">
					<th>Сума займу</th>
					<th>Річна процентна ставка</th>
					<th>Кількість щомісячних платежів</th>
					<th>Банк</th>
					<th>Іпотека</th>
				</tr>
			</thead>
			<tbody class="text-sm font-light text-gray-600">
				<tr class="bg-gray-100 border-b border-gray-200" v-for="item in history" :key="item.id">
					<td class="px-6 py-3 text-center whitespace-nowrap">{{ item.P }}</td>
					<td class="px-6 py-3 text-center whitespace-nowrap">{{ item.r }}</td>
					<td class="px-6 py-3 text-center whitespace-nowrap">{{ item.n }}</td>
					<td class="px-6 py-3 text-center whitespace-nowrap">{{ item.bank }}</td>
					<td class="px-6 py-3 text-center whitespace-nowrap">{{ item.mortgage }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: 'History',
	props: {
	},
	data: function () {
		let history = [{
			P: 500000,
			r: 27,
			n: 1,
			bank: "Raiffeisen Bank",
			mortgage: 511250,
		},
		{
			P: 270000,
			r: 19,
			n: 2,
			bank: "Zecredit",
			mortgage: 138215,
		}
		]
		return {
			'history': history
		}
	}
}
</script>
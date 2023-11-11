<script setup>
	import { useRoverState } from '@/stores/roverState'
	
	const roverState = useRoverState()
	const coordinates = computed(() => roverState.roverCords)

	function checkCurrentCordsEqualsPosition(cell, row) {
		return cell == coordinates.value.x && roverState.gridHeight - row - 1 == coordinates.value.y
	}
</script>

<template>
    <div class="dashboard-container__rover-grid">
		<div class="rover-grid__row" v-for="(row, r) in roverState.grid.reverse()">
			<span class="rover-grid__row__cell" v-for="(cell, c) in row">
				<span v-if="checkCurrentCordsEqualsPosition(c, r)">
					<img :class="roverState.directionName" src="@/assets/images/mars-rover.svg" alt="R">
				</span>
				<span v-else>.</span>
			</span>
		</div>
	</div>
</template>
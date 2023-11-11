import { acceptHMRUpdate, defineStore } from 'pinia'
import { initDirections } from '../utils/directions'
import { initGrid } from '../utils/grid'
import { ref, computed, reactive } from 'vue'

export const useRoverState = defineStore('roverState', () => {

	const gridHeight = 10
	const gridWidth = 10

	const grid = ref(initGrid(gridHeight, gridWidth))

	const defaultDirection = initDirections()
	const directionObject = ref(defaultDirection)
	const directionName = computed(() => directionObject.value.name)

  	const roverCords = reactive({
		x: 0,
		y: 0
	})

	const moveRover = (command: "F" | "B") => {
		const placement: 'x' | 'y' = directionObject.value.placement;
		const delta = directionObject.value[command];

  		roverCords[placement] = Math.max(0, Math.min(gridWidth - 1, roverCords[placement] + delta)); // To keep the cords in the range
	}

	const rotateRover = (command: string) => {
		if (command == 'L') {
			directionObject.value = directionObject.value.prev
		}

		if (command == 'R') {
			directionObject.value = directionObject.value.next
		}
	}

	const initCords = () => {
		roverCords.x = 0
		roverCords.y = 0
		directionObject.value = defaultDirection
	}

  	const handleCommands = (commands: string) => {
		initCords()

		for (const command of commands) {
			if (command == 'L' || command == 'R') {
				rotateRover(command)
			} else if (command == 'F' || command == 'B') {
				moveRover(command)
			}
		}
	}

  	return {
		roverCords,
		directionName,
		grid,
		gridHeight,
		gridWidth,
		handleCommands
	}
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRoverState, import.meta.hot))
}

<script setup lang="ts">
	import { useRoverState } from '@/stores/roverState'
    import { checkCommandValidity } from '@/utils/validations'

	const roverState = useRoverState()
	const coordinates = computed(() => roverState.roverCords)

	const commands = ref('')
	const hasErrors = ref(false)

	watchEffect(() => {
		commands.value = commands.value.toUpperCase()

		if (!checkCommandValidity(commands.value)) {
			hasErrors.value = true
			return;
		}

		hasErrors.value = false
		roverState.handleCommands(commands.value)
	})
</script>

<template>
    <div class="dashboard-container__details">
        <div class="dashboard__controllers">
            <div class="commands" :class="{ 'has-errors': hasErrors }">
                <label for="commands">enter commands</label>
                <div class="control">
                    <Icon name="ph:command-duotone" color="white" />
                    <input id="commands" type="text" placeholder="Commands.." v-model="commands" class="commands__input">
                    <span class="grid-dimensions">{{ roverState.gridHeight }} × {{ roverState.gridWidth }}</span>
                </div>
                <div class="commands__errors" v-if="hasErrors">invalid characters, check the guide please</div>
            </div>
            <div class="coordinates">
                <div class="coordinates__direction" :class="roverState.directionName">
                    <div class="triangle"></div>
                    <span>{{ roverState.directionName }}</span>
                </div>
                <div>
                    <div>X: {{ coordinates.x }}</div>
                    <div>Y: {{ coordinates.y }}</div>
                </div>
            </div>
        </div>
        <div class="dashboard-container__guide">
            <div class="dashboard-container__guide__title">guide</div>
            <div class="guide__commands">
                <div>
                    <span>F: Forward</span>
                    <span>B: Backward</span>
                </div>
                <div>
                    <span>L: Left</span>
                    <span>R: Right</span>
                </div>
            </div>
        </div>
    </div>
</template>
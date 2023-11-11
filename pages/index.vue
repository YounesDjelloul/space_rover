<script setup lang="ts">
	const container__dashboard = ref()
</script>

<template>
	<div class="container">
		<div class="container__welcome">
			<WelcomeSection :container__dashboard="container__dashboard" />
		</div>
		<div class="container__dashboard" ref="container__dashboard">
			<RoverDashboard />
		</div>
	</div>
</template>

<style lang="scss">
	@import "@/assets/sass/welcome-section.scss";

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.container {
		.container__welcome {
			height: 100vh;
		}

		.container__dashboard {
			height: 100%;
		}
	}
</style>
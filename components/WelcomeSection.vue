<script setup lang="ts">
    const props = defineProps(['container__dashboard'])
    
    const goDashboard = () => {
        props.container__dashboard?.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<template>
    <div>
        <div class="container__welcome__title">Welcome To The Space Rover Dashboard</div>
        <div class="trigger">
            <button class="container__welcome__go-dashboard" @click="goDashboard">go dashboard</button>
            <div class="container__welcome__arrows">
                <div class="chevron"></div>
                <div class="chevron"></div>
                <div class="chevron"></div>
            </div>
        </div>
    </div>
</template>
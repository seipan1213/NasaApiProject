<template>
	<h1>{{ props.title }}</h1>
</template>

<script setup >
const props = defineProps({
	title: String
})
</script>

<style scoped>
h1 {
	color: #364e96;
	padding: 0.5em 0;
	border-top: solid 3px #364e96;
	border-bottom: solid 3px #364e96;
	padding-left: 1rem;
}
</style>
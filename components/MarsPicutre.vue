<template>
	<div class="main">
		<img @click="changeMarsPhoto" class="photo" :src="marsInfoList[selectedIndex]?.img_src ?? ``" />
	</div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()

let marsInfoList = [];
const selectedIndex = ref(0);
const getNasaMarsResponse = async () => {
	const { data: data } = await useFetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', { query: { sol: 1000, api_key: runtimeConfig.nasaApiKey } })
	marsInfoList = data._value.photos
}
const changeMarsPhoto = () => {
	selectedIndex.value = Math.floor(Math.random() * marsInfoList.length);
};


// created
await getNasaMarsResponse();
changeMarsPhoto();

</script>

<style scoped>
.main {
	text-align: center;
}

.photo {
	max-height: 750px;
	width: 70vw;
}
</style>
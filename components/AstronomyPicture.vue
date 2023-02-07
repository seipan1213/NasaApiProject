<template>
	<div class="main">
		<img @click="changeSelect" class="photo" :src="apodInfoList[selectedIndex]?.url ?? ''" />
		<div class="detail">
			<span class="title"> {{ apodInfoList[selectedIndex]?.title ?? "" }}</span>
			<p class="explanation">
				{{ apodInfoList[selectedIndex]?.explanation ?? "" }}
			</p>
		</div>
	</div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();

let apodInfoList = [];
const selectedIndex = ref(0);
const getApodInfo = async () => {
	const { data: data } = await useFetch("https://api.nasa.gov/planetary/apod", {
		query: { start_date: "2023-01-01", api_key: runtimeConfig.nasaApiKey },
	});
	apodInfoList = data.value;
};
const changeSelect = () => {
	selectedIndex.value = Math.floor(Math.random() * apodInfoList.length);
};

// created
await getApodInfo();
changeSelect();
</script>

<style scoped>
.main {
	text-align: center;
}

.photo {
	height: 500px;
}

.detail {
	width: 1200px;
	position: relative;
	margin: 2em auto;
	padding: 0.5em 1em;
	border: solid 3px #95ccff;
	border-radius: 8px;
}

.detail .title {
	position: absolute;
	display: inline-block;
	top: -13px;
	left: 10px;
	padding: 0 9px;
	line-height: 1;
	font-size: 19px;
	background: #fff;
	color: #95ccff;
	font-weight: bold;
}

.detail p {
	margin: 0;
	padding: 0;
}
</style>

<script setup>
const route = useRoute();

const WEBSITE_TITLE = "Neil's Homepage";
const WEBSITE_DESC = "This homepage is the personal page of Nei-Chiung Perng. 彭念劬的個人網頁。";

useHead({
	title: route.meta.title || WEBSITE_TITLE,
	meta: [{ name: "description", content: route.meta.desc || WEBSITE_DESC }],
	link: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Noto Sans TC" }],
});
</script>

<template lang="pug">
div
	NuxtLayout
		NuxtPage
</template>

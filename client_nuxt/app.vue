<script setup>
provide("WEBSITE_NAME", "Neil's Homepage");
provide("WEBSITE_TITLE", "Neil's Homepage");
provide("WEBSITE_DESC", "This homepage is the personal page of Nei-Chiung Perng. 彭念劬的個人網頁。");
provide("FAVICON", "/images/neil.ico");
</script>

<template lang="pug">
div
	NuxtLayout
		NuxtPage
</template>

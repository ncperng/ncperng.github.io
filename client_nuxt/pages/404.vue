<template lang="pug">
.page
	section.container#page404
		.row: .col-12
			h2 404 Page
			h2 您要求的頁面目前不存在，將在 {{ timeout }} 秒後為您導引回首頁...
</template>

<script setup>
const timeout = ref(10);
const redirect = () => {
	if (timeout.value <= 0) return location.href = '/';
	setTimeout(redirect, 1000);
	timeout.value--;
}

onMounted(() => redirect());
</script>

<style lang="stylus">
// If needed.
</style>
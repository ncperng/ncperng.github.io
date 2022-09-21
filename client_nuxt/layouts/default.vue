<script setup>
const route = useRoute();

const WEBSITE_TITLE = inject("WEBSITE_TITLE");
const WEBSITE_DESC = inject("WEBSITE_DESC");

useHead({
	title: route.meta.title || WEBSITE_TITLE,
	meta: [{ name: "description", content: route.meta.desc || WEBSITE_DESC }],
	link: [{ rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Noto Sans TC" }],
});
</script>

<template lang="pug">
#container
	#page_header

	#text_area
		slot

	#menu
		#menu_position
			img(src="/images/menu.gif")
			ul
				li
					a(href="/") Homepage
				li
					a(href="/#publication") Publication List
				li
					a(href="/index_zh") 中文主頁
				li
					a(href="/map") 旅遊地圖

</template>

<style lang="stylus">
body
	font: 8pt/16pt Georgia, Noto Sans TC, "Times New Roman", Times, serif
	background: url(/images/body_bg.jpg) center center repeat-y rgb(0, 0, 0)
	a:link
		font-weight: bold
		text-decoration: none

#container
	width: 642px
	margin: 0px auto
	background: #fff url(/images/container_tile.jpg) repeat-y

#page_header
	height: 510px
	background-repeat: no-repeat
	background-image: url(/images/header.jpg)

h2
	display: block
	margin-block-start: 0.83em
	margin-block-end: 0.83em
	margin-inline-start: 0px
	margin-inline-end: 0px
	font-weight: bold
	font-size: 1.5em

h3
	display: block
	margin-block-start: 1em
	margin-block-end: 1em
	margin-inline-start: 0px
	margin-inline-end: 0px
	font-weight: bold
	font-size: 1.17em

a
	font-weight: bold
	text-decoration: none
	color: #48482d
	&:hover
		color: #fff

#menu
	position: absolute
	top: 520px
	#menu_position
		position: relative
		left: -115px
		width: 138px
		margin-top: 10px
		padding: 0 30px 10px 10px
		border: 0px solid gray
		font: 10px verdana, Noto Sans TC, sans-serif
		background-image: url(/images/linklist_bg.jpg)
		background-repeat: repeat-y
		background-position: right
		background-color: #abab8e
	ul
		margin: 0
		padding: 0
		li
			display: block
			margin-bottom: 5px
			padding-top: 2px
			line-height: 2.8ex
			list-style-type: none
			background: transparent
			a
				color #eee
				&:hover
					color: #48482d

#text_area
	padding: 0 55px 10px 75px
	h3
		margin-top: 10px
		border-bottom-style: double
	em
		color: #fff
		font-style: normal
	ul, ol
		padding-left: 15px
	p:first-letter
		font-size: 14pt

#update
	padding-top: 50px
	text-align: right
	color: #7A7A5E
</style>

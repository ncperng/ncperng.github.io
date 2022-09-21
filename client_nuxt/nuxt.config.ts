// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	ssr: false,

	target: "static",
	router: {
		base: "/ncperng.github.io/",
	},

	head: {
		meta: [
			{ name: "robots", conent: "index" },
			{ "http-equiv": "X-UA-Compatible", content: "IE=edge" },
			{ name: "language", content: "zh_Hant" },
			{ name: "viewport", content: "width=device-width, initial-scale=1, minimum-scale=1" },
		],
		// Cloudeep adopts CDN stylesheets and javascripts for specified versions.
		// prettier-ignore
		link: [
			{ rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css", integrity: "sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x", crossorigin: "anonymous", },
			{ rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/css/all.min.css", integrity: "sha256-jTIdiMuX/e3DGJUGwl3pKSxuc6YOuqtJYkM0bGQESA4=", crossorigin: "anonymous", },
			{ rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/vue-datepicker-next@1.0.2/index.css" },
		],
		// prettier-ignore
		script: [
			{ src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js", integrity: "sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4", crossorigin: "anonymous", },
			{ src: "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js" },
			{ src: "https://cdn.jsdelivr.net/npm/dayjs@1.9.6/dayjs.min.js" },
			{ src: "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.31/vue.global.prod.min.js" },
			{ src: "https://cdn.jsdelivr.net/npm/vue-datepicker-next@1.0.2/index.min.js" },
			{ src: "https://cdnjs.cloudflare.com/ajax/libs/sprintf/1.1.1/sprintf.min.js" },
			{ src: "https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.1.2/js.cookie.min.js" },
		],
	},

	vite: {
		css: {
			preprocessorOptions: {
				stylus: {
					additionalData: '@import "../assets/stylesheets/style.styl"',
				},
			},
		},
	},

	// prettier-ignore
	modules: [
		"@nuxtjs/dayjs", 
	],

	dayjs: {
		// If Chinese description quantifier is needed, such as '年' and '月'.
		// locales: ["zh-tw"],
		// defaultLocale: "zh-tw",
		defaultTimeZone: "Asia/Taipei",
		plugins: ["utc", "timezone"],
	},
});

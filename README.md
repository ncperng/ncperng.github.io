Create Nuxt Application
=======================

	```
	$ npx create-nuxt-app client_nuxt
	```

Please choose:
- Programming language **JavaScript**
- Package manager **Npm**
- UI framework **Bootstrap Vue**
- Nuxt.js modules **Axois**
- Linting tools **ESLint**
- Testing framework **None**
- Rendering mode **Universal (SSR / SSG)**
- Deployment target **Static (Static/Jamstack hosting)**
- Development tools **jsconfig.json**

To know more about Server-Send Rendering (SSR) and Static Site Generation (SSG), please check https://unicorn-utterances.com/posts/what-is-ssr-and-ssg.

	```
	to get started:

	$ cd client_nuxt
	$ npm run dev

	To build & start for production:

	$ cd client_nuxt
	$ npm run build
	$ npm run start
	```

Deploy to GitHub Static Hosting
-------------------------------

	Please refer to https://nuxtjs.org/deployments/github-pages/

	```
	$ npm install push-dir
	$ vi package.json

	"scripts": {
		"generate": "nuxt generate",
		"deploy": "push-dir --dir=dist --branch=gh-pages --cleanup"
	},


	$ npm generate
	$ npm deploy
	```

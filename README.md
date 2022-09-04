Create Nuxt Application
=======================

	```
	$ npx nuxi init client_nuxt
	$ git add client_nuxt
	$ git push origin master

	$ cd client_nuxt
	$ npm install
	$ npm run dev
	```

To know more about Server-Send Rendering (SSR) and Static Site Generation (SSG), please check https://unicorn-utterances.com/posts/what-is-ssr-and-ssg.

Deploy to GitHub Static Hosting
-------------------------------

Please refer to https://nuxtjs.org/deployments/github-pages/

We will use **push-dir** to create a branch named **gh-pages** with the generated .output/public, and then publish to GitHub. You should also modify your project settings:

- Settings -> (Code and automation) Pages -> (Build and deployment) Branch
- Choose **Deploy from a branch**
- Choose **gh-pages**
- **Save**

Then, we push the generated static page to branch **gh-pages** with push-dir.

	```
	$ npm install push-dir
	$ vi package.json

	"scripts": {
		"generate": "nuxt generate",
		"deploy": "push-dir --dir=.output/public --branch=gh-pages --cleanup"
	},

	$ vi nuxt.config.tx

	export default defineNuxtConfig({
		ssr: false,
	});


	$ npm run generate
	$ npm run deploy
	```

Please also reference "Configuring a publishing source for your GitHub Pages site" https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
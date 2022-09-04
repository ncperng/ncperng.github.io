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
	$ rm -rf client_nuxt/.git
	$ git add client_nuxt

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

We will use **push-dir** to create a branch named **gh-pages** with the generated /dist, and then publish to GitHub. You should also modify your project settings:

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
		"deploy": "push-dir --dir=dist --branch=gh-pages --cleanup"
	},


	$ npm run generate
	$ npm run deploy
	```

Please also reference "Configuring a publishing source for your GitHub Pages site" https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
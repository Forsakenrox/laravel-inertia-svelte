import { createInertiaApp } from '@inertiajs/inertia-svelte'
import { InertiaProgress } from '@inertiajs/progress'
// createInertiaApp({
//   resolve: name => require(`./Pages/${name}.svelte`),
//   setup({ el, App, props }) {
//     new App({ target: el, props })
//   },
// })

createInertiaApp({
	resolve: async name => {
		let page = await import(`./Pages/${name}.svelte`)
		return page
	},
	setup({ el, App, props }) {
		new App({ target: el, props })
	},
})

InertiaProgress.init()
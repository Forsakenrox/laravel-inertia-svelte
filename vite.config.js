import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path';
import laravel from 'laravel-vite-plugin';

// https://vitejs.dev/config/#config-intellisense
export default defineConfig(({ command, mode }) => {
	return {
		plugins: [
			svelte(),
			laravel({
				input: ['resources/css/app.css', 'resources/js/app.js'],
				refresh: true,
			}),
		],
		base: command === 'serve' ? '' : '/build/',
		publicDir: false,
		build: {
			manifest: true,
			outDir: resolve(__dirname, 'public/build'),
			rollupOptions: {
				input: [
					'resources/js/app.js',
					'resources/css/app.css',
				]
			},
		},
		resolve: {
			alias: {
				'@': resolve(__dirname, './resources/js')
			},
		},
		optimizeDeps: {
			include: [
				'@inertiajs/inertia',
				'@inertiajs/inertia-svelte',
			]
		}
	}
})
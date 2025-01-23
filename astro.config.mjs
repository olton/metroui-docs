// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sidebar from "./sidebar.mjs"

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Metro UI',
			logo: {
				light: '/src/assets/king-color.svg',
				dark: '/src/assets/king-color.svg',
			},
			favicon: '/src/assets/king.svg',
			social: {
				github: 'https://github.com/olton/metroui',
				discord: 'https://discord.gg/bRgdUP7g',
			},
			sidebar,
			customCss: [
				'./src/styles/index.css',
			],
			components: {
				Footer: './src/components/Footer.astro',
				SocialIcons: './src/components/SocialIcons.astro',
			},
			lastUpdated: true,
			head: [
				{
					tag: 'script',
					attrs: {
						src: 'https://public.codepenassets.com/embed/index.js',
						defer: true,
					},
				},
			]
		}),
	],
});

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator'
import starlightThemeRapide from 'starlight-theme-rapide'
import sidebar from "./sidebar.mjs"

const production = process.env.MODE === 'production';

const plugins = [
	starlightThemeRapide(),
]

if (!production) {
	plugins.push(starlightLinksValidator({
		errorOnRelativeLinks: false,
	}))
}

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Metro UI',
			logo: {
				light: '/src/assets/king-black.svg',
				dark: '/src/assets/king-white.svg',
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
				// {
				// 	tag: 'script',
				// 	attrs: {
				// 		src: 'https://public.codepenassets.com/embed/index.js',
				// 		defer: true,
				// 	},
				// },
			],
			plugins,
		}),
	],
});

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
			title: 'Metro UI 5.1',
			editLink: {
				baseUrl: 'https://github.com/olton/metroui-docs/edit/master/',
			},
			logo: {
				light: '/src/assets/king-black.svg',
				dark: '/src/assets/king-white.svg',
			},
			favicon: '/king-white.svg',
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
			plugins,
			expressiveCode: {
				themes: ['dark-plus', 'github-light']
			},
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 4,
			},
			credits: false,
			head: [
				{
					tag: 'script',
					attrs: {
						src: 'https://public.codepenassets.com/embed/index.js',
						defer: false,
					},
				}
			]
		}),
	],
});

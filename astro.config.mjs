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
	site: 'https://docs.metroui.org.ua',
	integrations: [
		starlight({
			title: 'Metro UI 5.1',
			editLink: {
				baseUrl: 'https://github.com/olton/metroui-docs/edit/master/',
			},
			logo: {
				light: '/src/assets/crown-black.svg',
				dark: '/src/assets/crown-white.svg',
			},
			favicon: '/crown-white.svg',
			social: [
				{icon: 'github', label: 'GitHub', href: 'https://github.com/olton/metroui'},
				{icon: 'discord', label: 'Discord', href: 'https://discord.gg/bRgdUP7g'},
			], 
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

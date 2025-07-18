export default [
    {
        label: "Getting Started",
        items: [
            {
                label: "Overview",
                slug: "overview",
            },
            {label: "Introduction", slug: "getting-started/intro"},
            {label: "Quick Start", slug: "getting-started/quick-start"},
            {label: "Project Structure", slug: "getting-started/project-structure"},
            {label: "Browsers", slug: "getting-started/browsers"},
            {label: "Download", slug: "getting-started/download"},
            {label: "Internationalization (i18n)", slug: "getting-started/i18n"},
            {label: "Work with Components", slug: "getting-started/components"},
            {label: "Components List", slug: "getting-started/components-list"},
            {label: "Component Structure", slug: "getting-started/component-structure"},
            {label: "Themes", slug: "getting-started/themes"},
            {label: "Theming Components", slug: "getting-started/theming-components"},
            {label: "Media Rules", slug: "getting-started/media-rules"},
            {label: "Bundlers", slug: "getting-started/bundlers"},
            {label: "Icons", slug: "getting-started/icons"},
        ],
    },
    {
        label: "Libraries",
        collapsed: true,
        items: [
            {label: "Overview", slug: "libraries/overview"},
            {label: "Dom", slug: "libraries/dom"},
            {label: "String", slug: "libraries/string"},
            {label: "Datetime", slug: "libraries/datetime"},
            {label: "Farbe", slug: "libraries/farbe"},
            {label: "Guardian", slug: "libraries/guardian"},
            {label: "Hooks", slug: "libraries/hooks"},
            {label: "Html", slug: "libraries/html"},
            {label: "Router", slug: "libraries/router"},
            {label: "Model", slug: "libraries/model"},
        ]
    },
    {
        label: "Common CSS",
        collapsed: true,
        items: [
            {label: "Overview", slug: "common-css/overview"},
            {label: "Animations", slug: "common-css/animations"},
            {label: "Border", slug: "common-css/border"},
            {label: "Colors", slug: "common-css/colors"},
            {label: "Cursors", slug: "common-css/cursors"},
            {label: "Display", slug: "common-css/display"},
            {label: "Embed", slug: "common-css/embed"},
            {label: "FlexBox", slug: "common-css/flex"},
            {label: "Float Utilities", slug: "common-css/float"},
            {label: "Font Defines", slug: "common-css/font"},
            {label: "Images", slug: "common-css/images"},
            {label: "Lists", slug: "common-css/lists"},
            {label: "Media Utilities", slug: "common-css/media"},
            {label: "Position", slug: "common-css/position"},
            {label: "Position Ext", slug: "common-css/position-ext"},
            {label: "Spacing", slug: "common-css/spacing"},
            {label: "Sizing", slug: "common-css/sizing"},
            {label: "Typography", slug: "common-css/typography"},
            {label: "Utils", slug: "common-css/utils"},
            {label: "Z-Index", slug: "common-css/z-index"},
        ]
    },
    {
        label: "Common JS",
        collapsed: true,
        items: [
            {label: "Overview", slug: "common-js/overview"},
            {label: "Globals", slug: "common-js/globals"},
            {label: "Utils", slug: "common-js/utils"},
            {label: "Extensions", slug: "common-js/extensions"},
        ]
    },
    {
        label: "Components",
        collapsed: true,
        autogenerate: {directory: "components", exclude: []},
    },
    {
        label: "Tools",
        collapsed: false,
        items: [
            {label: "Latte Testing Framework", link: "https://latte.org.ua"},
        ],
    },
    {
        label: "Resources",
        collapsed: false,
        items: [
            {label: "Metro UI Site", link: "https://metroui.org.ua"},
            {label: "GitHub", link: "https://github.com/olton/metroui"},
            {label: "AI Assistant", link: "https://t.me/Metroui_Assistant_bot"},
            {label: "Docs Source", link: "https://github.com/olton/metroui-docs"},
            {label: "Panda Templates", link: "https://panda.metroui.org.ua"},
            {label: "Premium Support", link: "https://korzh.com/metroui"},
            {label: "Discord Server", link: "https://discord.gg/cxrhV7pGG8"},
            {label: "Author", link: "https://pimenov.com.ua"},
        ]
    },
]

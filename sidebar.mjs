export default [
    {
        label: "Getting Started",
        items: [
            {
                label: "Overview",
                slug: "overview",
            },
            {label: "Introduction", slug: "getting-started/introduction"},
            {label: "Browsers", slug: "getting-started/browsers"},
            {label: "Download", slug: "getting-started/download"},
            {label: "Internationalization (i18n)", slug: "getting-started/i18n"},
            {label: "Components", slug: "getting-started/components"},
            {label: "Themes", slug: "getting-started/themes"},
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
            {label: "Animations", slug: "common-css/animations"},
            {label: "Border", slug: "common-css/border"},
            {label: "Cursors", slug: "common-css/cursors"},
            {label: "Display", slug: "common-css/display"},
            {label: "Embed", slug: "common-css/embed"},
            {label: "FlexBox", slug: "common-css/flex"},
            {label: "Images", slug: "common-css/images"},
            {label: "Lists", slug: "common-css/lists"},
            {label: "Position", slug: "common-css/position"},
            {label: "Spacing", slug: "common-css/spacing"},
            {label: "Sizing", slug: "common-css/sizing"},
            {label: "Typography", slug: "common-css/typography"},
            {label: "Utils", slug: "common-css/utils"},
            {label: "Colors", slug: "common-css/colors"},
            {label: "Z-Index", slug: "common-css/z-index"},
        ]
    },
    {
        label: "Common JS",
        collapsed: true,
        items: [
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
        label: "Resources",
        collapsed: false,
        items: [
            {label: "Latte Testing Framework", link: "https://latte.org.ua"},
            {label: "Metro UI Site", link: "https://metroui.org.ua"},
            {label: "Metro UI Repository", link: "https://github.com/olton/metroui"},
            {label: "Panda Templates", link: "https://panda.metroui.org.ua"},
            {label: "Premium Support", link: "https://korzh.com/metroui"},
            {label: "Author", link: "https://pimenov.com.ua"},
        ]
    },
]
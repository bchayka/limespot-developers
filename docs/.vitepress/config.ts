import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LimeSpot Developers",
  description: "Developer documentation for LimeSpot",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/hooks/use-storefront-version' },
    ],

    sidebar: [
      {
        text: 'Hooks',
        items: [
          { text: 'useStorefrontVersion', link: '/hooks/use-storefront-version' },
          { text: 'useRules', link: '/hooks/use-rules' },
          { text: 'usePageInfo', link: '/hooks/use-page-info' },
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bchayka/limespot-developers' }
    ]
  }
})

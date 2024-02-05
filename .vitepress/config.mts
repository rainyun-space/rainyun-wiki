import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "雨云宇宙 Wiki",
  description: "雨云宇宙 Wiki",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Wiki', link: '/wiki/wiki' },
      { text: '帮助', link: '/help/help' }
    ],

    sidebar: [
      {
        text: 'Wiki',
        items: [
          { text: 'Wiki', link: '/wiki/help' },
        ]
      },
      {
        text: '帮助',
        items: [
          { text: '帮助', link: '/help/help' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bingxin666/rainyun-wiki' }
    ]
  }
})

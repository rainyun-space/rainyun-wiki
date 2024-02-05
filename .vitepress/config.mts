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
      { text: '乐子', link: '/laugh/laugh' },
      { text: '八卦', link: '/bagua/bagua' },
      { text: '商业机密', link: '/secret/secret' },
      { text: '帮助', link: '/help/help' }
    ],

    sidebar: [
      {
        text: 'Wiki',
        items: [
          { text: 'Wiki', link: '/wiki/wiki' },
        ]
      },
      {
        text: '乐子',
        items: [
          { text: '乐子', link: '/laugh/laugh' },
        ]
      },
      {
        text: '八卦',
        items: [
          { text: '八卦', link: '/bagua/bagua' },
        ]
      },
      {
        text: '商业机密',
        items: [
          { text: '商业机密', link: '/secret/secret' },
        ]
      },
      {
        text: '帮助',
        items: [
          { text: '帮助', link: '/help/help' },
        ]
      },
      {
        text: '免责声明',
        items: [
          { text: '免责声明', link: '/notrainyunofficial' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rainyun-space/rainyun-wiki' }
    ],

    footer: {
      message: '除文档和图片外文件遵循 MIT 协议发布，文档和图片遵循 CC-BY-NC-SA 4.0 协议发布。',
      copyright: '雨云宇宙 Wiki © 2024'
    }
  }
})

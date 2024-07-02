import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "雨云宇宙 Wiki",
  description: "雨云宇宙 Wiki",
  head: [['link', { rel: 'icon', href: 'logo.png' }]],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🏠主页', link: '/' },
      { text: '📖Wiki', link: '/wiki/wiki' },
      { text: '😄乐子', link: '/laugh/laugh' },
      { text: '🤔八卦', link: '/bagua/bagua' },
      { text: '🔒小工具', link: '/tools/tools' },
      { text: '😲帮助', link: '/help/help' }
    ],

    logo: '/logo.png',

    search: {
      provider: 'local'
    },

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
          { text: 'CF 没有 CNAME 哥', link: '/laugh/cf-without-cname' },
          { text: '半夜破防哥', link: '/laugh/i-lost-my-eye' },
          {text: 'PVP 大蛇', link: '/laugh/pvp-da-she' },
          {text: 'DDoS 大蛇', link: '/laugh/ddos-loser'}
        ]
      },
      {
        text: '八卦',
        items: [
          { text: '林语', link: '/bagua/linyu' },
          { text: '搬砖狐', link: '/bagua/banzhuanhu' },
          { text: '感情酱', link: '/bagua/ganqingjiang' },
        ]
      },
      {
        text: '小工具',
        items: [
          { text: '小工具', link: '/tools/tools' },
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
    },

    editLink: {
      pattern: 'https://github.com/rainyun-space/rainyun-wiki/blob/main/:path'
    }
    
  }
})

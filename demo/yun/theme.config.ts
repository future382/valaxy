import { defineThemeConfig } from 'valaxy-theme-yun'

export default defineThemeConfig({
  // colors: {
  //   primary: 'red',
  // },
  // bg_image: {},

  banner: {
    enable: true,
    title: '云之彼端',
  },

  notice: {
    enable: false,
    content: '公告测试',
  },

  pages: [
    {
      name: '我的小伙伴们',
      url: '/links/',
      icon: 'ri-link-unlink',
      color: 'dodgerblue',
    },
    {
      name: '生物百科指北',
      url: '/biological-wiki/',
      icon: 'ri-file-marked-line',
      color: 'hotpink',
    },
  ],

  footer: {
    since: 2016,
    beian: {
      enable: false,
      icp: '苏ICP备17038157号',
    },
    icon: {
      animated: true,
    },
  },
})

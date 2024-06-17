import { defineValaxyConfig } from 'valaxy'
import type { ThemeConfig } from 'valaxy-theme-yun'
// import { addonBangumi } from 'valaxy-addon-bangumi'
import { addonComponents } from 'valaxy-addon-components'
import { addonTwikoo } from 'valaxy-addon-twikoo'

// import { addonTwikoo } from 'valaxy-addon-twikoo'

const safelist = [
  'i-ri-home-line',
]
import { defineValaxyConfig } from 'valaxy'
import { addonWaline } from 'valaxy-addon-waline'

export default defineValaxyConfig({
  // or write it in site.config.ts
  siteConfig: {
    // 启用评论
    comment: {
      enable: true
    },
  },

export default defineValaxyConfig<ThemeConfig>({
  devtools: true,
  // site config see site.config.ts or write in siteConfig
  // siteConfig: {},
  theme: 'yun',
  // see theme.config.ts or write in themeConfig
  // themeConfig in theme.config.ts
  unocss: {
    safelist,
  },
  markdown: {
    // default material-theme-palenight
    // theme: 'material-theme-palenight',
    theme: {
      // light: 'material-theme-lighter',
      light: 'github-light',
      // dark: 'material-theme-darker',
      dark: 'github-dark',
    },
    blocks: {
      tip: {
        icon: 'i-carbon-thumbs-up',
        text: 'ヒント',
        langs: {
          'zh-CN': '提示',
        },
      },
      warning: {
        icon: 'i-carbon-warning-alt',
        text: '注意',
      },
      danger: {
        icon: 'i-carbon-warning',
        text: '警告',
      },
      info: {
        text: 'información',
      },
    },
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        },
      },
    ],
  },
  addons: 
    [
    addonComponents(),

    // comments
    addonWaline({
      serverURL: 'https://waline.adkimsm.eu.org',
    }),
    addonTwikoo({
      envId: 'https://twikoo.adkimsm.eu.org＇,
    })

    
}

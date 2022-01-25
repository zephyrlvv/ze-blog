module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'ze-blog',
  description: 'this is my personal blog',
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar:[
      {
        text:'Group',
        link:'/fool/'
      }
    ]
  },
}
module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'ze-blog',
  description: 'this is my personal blog',
  base:'/docs/',
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar:[
      {
        text:'首页',
        link:'/',
      },
      {
        text:'Group',
       link:'/group/',
      }
    ]
  },
}
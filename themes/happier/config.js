const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2023-03-23', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    // { title: '欢迎来到我的博客', url: 'https://blog.happierx.top' },
    // { title: '悟以往之不谏，知来者之可追' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '悟已往之不谏',
  HEO_HERO_TITLE_2: '知来者之可追',
  HEO_HERO_TITLE_3: 'HAPPIER',
  HEO_HERO_TITLE_4: '开发中',
  HEO_HERO_TITLE_5: '敬请期待',
  HEO_HERO_TITLE_LINK: 'https://happierx.top',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '随便逛逛',

  // 英雄区显示三个置顶分类
  // HEO_HERO_CATEGORY_1: { title: '必看精选', url: '/tag/必看精选' },
  // HEO_HERO_CATEGORY_2: { title: '热门文章', url: '/tag/热门文章' },
  // HEO_HERO_CATEGORY_3: { title: '实用教程', url: '/tag/实用教程' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 分享与热心帮助',
    '💻 软件开发工程师',
    '🤖️ 数码科技爱好者',
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://github.com/happier-x',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: 'https://www.happierx.top',
  HEO_INFO_CARD_TEXT3: '了解更多',

  HEO_GROUP_ICONS: [
    {
      title_1: 'HTML',
      img_1: 'https://cdn.simpleicons.org/html5/white',
      color_1: '#E34F26',
      title_2: 'CSS',
      img_2: 'https://cdn.simpleicons.org/css/white',
      color_2: '#663399'
    },
    {
      title_1: 'JavaScript',
      img_1: 'https://cdn.simpleicons.org/javascript/white',
      color_1: '#F7DF1E',
      title_2: 'TypeScript',
      img_2: 'https://cdn.simpleicons.org/typescript/white',
      color_2: '#3178C6'
    },
    {
      title_1: 'Vue.js',
      img_1: 'https://cdn.simpleicons.org/vuedotjs/white',
      color_1: '#4FC08D',
      title_2: 'React',
      img_2: 'https://cdn.simpleicons.org/react/white',
      color_2: '#61DAFB'
    },
    {
      title_1: 'Node.js',
      img_1: 'https://cdn.simpleicons.org/nodedotjs/white',
      color_1: '#5FA04E',
      title_2: 'NestJS',
      img_2: 'https://cdn.simpleicons.org/nestjs/white',
      color_2: '#E0234E'
    },
    {
      title_1: 'Git',
      img_1: 'https://cdn.simpleicons.org/git/white',
      color_1: '#F05032',
      title_2: 'GitHub',
      img_2: 'https://cdn.simpleicons.org/github/white',
      color_2: '#181717'
    },
    {
      title_1: 'Electron',
      img_1: 'https://cdn.simpleicons.org/electron/white',
      color_1: '#47848F',
      title_2: 'uni-app',
      img_2: 'https://cdn.simpleicons.org/unpkg/white',
      color_2: '#2B9939'
    }
  ],

  // HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  // HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  // HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  // HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  // HEO_SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/how-to-question',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: '文章数:',
  HEO_SITE_TIME_TITLE: '建站天数:',
  HEO_SITE_VISIT_TITLE: '访问量:',
  HEO_SITE_VISITOR_TITLE: '访客数:',
}
export default CONFIG

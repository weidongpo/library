
module.exports = {
    title: "前端组件库",
    base: '/',
    description: '',
    host:'192.168.3.122',
    port: 6677,
    plugins: [
        'demo-container',
        '@vuepress/last-updated',
    ], // 配置插件
    markdown: {
        lineNumbers: true,//显示行号
    },
    alias: {
    },
    themeConfig: {
        navbar: true,//可以用来禁用所有的导航
        sidebarDepth: 3,//左侧标题显示的深度默认是2
        displayAllHeaders: false,// 默认值：false
        lastUpdated: '更新时间', // string | boolean
        nav: [
            { text: 'Home', link: '/' },
            { text: '组件', link: '/comps/' },
            { text: '混入', link: '/mixins/' },
            { text: '常见问题', link: '/questions/' },
            {
                text: '了解更多',
                items: [
                    {
                        text: '天行平台',
                        link: "http://10.0.2.9:25024"
                    },
                    {
                        text: 'vuePress',
                        link: 'https://v1.vuepress.vuejs.org/zh',
                    }
                ]
            }
        ],
        sidebar:[
            '',
            '/comps/'
        ]
    },
}
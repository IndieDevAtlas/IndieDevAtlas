module.exports = {
    plugins: [
        ['vuepress-plugin-auto-sidebar', {
            // 插件选项
            titleMode: "titlecase", // 将标题转换为 title case
        }]
    ],
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '出海&移民留学指南圣经',
            description: '出海&移民留学指南圣经',
            editLinkText: 'Edit this page on GitHub',
            lastUpdated: 'Last Updated',
        },
    },
    themeConfig: {
        repo: 'ikkkp/IndieDevAtlas',
        editLinks: true,    
        nav: [
            { text: '首页', link: '/' },
            { text: '出海相关', link: '/overseasAbout/' },
            { text: '产品经验', link: '/productAbout/' },
            { text: 'GitHub', link: 'https://github.com/your-username/your-repo', icon: 'github' } // Replace with your GitHub repo URL
        ],
    }

}

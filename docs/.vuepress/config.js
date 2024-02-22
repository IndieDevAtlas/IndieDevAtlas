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
        repo: 'IndieDevAtlas/IndieDevAtlas',
        editLinks: true,
        docsRepo: 'IndieDevAtlas/IndieDevAtlas', // 文档所在的仓库
        docsDir: 'docs', // 文档在仓库中的目录
        docsBranch: 'main', // 使用的分支  
        nav: [
            { text: '首页', link: '/' },
            { text: '出海相关', link: '/overseasAbout/' },
            { text: '产品经验', link: '/productAbout/' },
        ],
    }

}

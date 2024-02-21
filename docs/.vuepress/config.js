module.exports = {
    plugins: [
        ['vuepress-plugin-auto-sidebar', {
            // 插件选项
            titleMode: "titlecase", // 将标题转换为 title case
        }]
    ],
    themeConfig: {
        nav: [
            { text: '出海相关', link: '/overseasRef/' },
            { text: '产品经验', link: '/productRef/' },
            {
                text: '经验杂谈',
                items: [
                    { text: 'Item 1', link: '/item-1/' },
                    { text: 'Item 2', link: '/item-2/' }
                ]
            }
        ],
    }
}

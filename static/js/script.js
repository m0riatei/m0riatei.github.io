window.$docsify = {
    search: {
        paths: 'auto',
        placeholder: ' 🔍 开始搜索',
        noData: '😞 没有结果',
        depth: 6
    },
    pagination: {
        previousText: '上一页',
        nextText: '下一页',
        crossChapter: true
    },
    plugins: [
        function(hook) {
            var footer = [
                '<hr/>',
                '<footer>',
                    '<p>Copyright © 2000-2024 <span style="color: #42b983;"><b>安全节点</b></span> All Rights Reserved.</p>',
                    '<P>安全节点 由 <i><b>S.N.T</b></i> 管理维护 </p>',
                    '<p>iHacker.top</p>',
                '</footer>'
            ].join('');
            hook.afterEach(function(html) {
                return html + footer;
            });
        }
    ],
    el: '#app',
    name: '〔 <b>安全节点</b> 〕',
    repo: '',
    basePath: '/posts/',
    coverpage: true,
    homepage: 'index.md',
    loadNavbar: true,
    maxLevel: 4,
    subMaxLevel: 3,
    themeColor: '#ff5c5c',
    onlyCover: false,
    loadSidebar: true,
    autoHeader: true,
    auto2top: true,
    mergeNavbar: true,
    executeScript: true,
}
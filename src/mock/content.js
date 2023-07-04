const Mock = require('mockjs');

const data = Mock.mock({
    'list|10-20': [{
        'id|+1': 1,
        'date': '@date("yyyy-MM-dd")',
        //文章标签
        'tag|1': ['前端', '后端', '数据库', '服务器', '其他'],
        //文章标题
        'title': '@ctitle(10, 20)',
        //文章内容
        'content': '@cparagraph(10, 20)',
        //文章作者
        'author': '@cname',
        //文章浏览量
        'views|1-100': 100,
        //文章评论数
        'comments|1-100': 100,
        //文章点赞数
        'likes|1-100': 100,
    }],
});

module.exports = data
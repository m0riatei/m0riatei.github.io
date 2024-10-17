# 动态信息 #

<ul id="news"><li>Loading……</li></ul>

<p id="update" style="color: #ccc; display: none;">(更新时间：<span></span>)</p>

[查看更多](https://www.jianshu.com/u/8666e0fc2870)

<script>
    <!--
    $(function () {
        $.get('https://node.ihacker.top/jianshu/rss/data.json', {}, function (content) {
            $('#news').children().remove();
            $('#update>span').html(content.update);
            $('#update').css('display', 'block');
            var list = content.body;
            for (var i in list) {
                var li = '<li>' + list[i].create_time + ' | [<b>' + list[i].category + '</b>] <a href="' + list[i].href + '" target="_blank" rel="noopener">' + list[i].title + '</a></li>';
                $('#news').append(li);
            }
        });
    });
    -->
</script>

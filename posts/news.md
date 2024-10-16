<ul id="news"><li>Loading……</li></ul>

[查看更多](https://www.jianshu.com/u/8666e0fc2870)

<script>
    <!--
    $(function () {
        $.get('https://node.ihacker.top/jianshu/rss/', {}, function (content) {
            $('#news').children().remove();
            var list = content.body;
            for (var i in list) {
                var li = '<li>' + list[i].create_time + ' | [<b>' + list[i].category + '</b>] <a href="' + list[i].href + '" target="_blank" rel="noopener">' + list[i].title + '</a></li>';
                $('#news').append(li);
            }
        });
    });
    -->
</script>

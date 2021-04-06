    var start = 0
    var end = 10
    var num = $("#num")
    var unit = $("#unit")
    var year = $("#year")
    var time = $("#time")
    function opa() {
        $.ajax({
            url: 'api/request_movie',
            type: 'post',
            success: function (data) {
                option.series[0].data = data['movie_list'].slice(start, end)
                pe.setOption(option)
                num.text(data.res_box.num)
                unit.text(data.res_box.unit)
                year.text(data.res_time.date)
                time.text(data.res_time.time)
                console.log(data.res_time.time + "大哥别搞我啊！！！所有数据都是猫眼的，去爬他们，别爬我！我顶不住！\n" +
                    "数据来源 API: http://piaofang.maoyan.com/getBoxList?date=1&isSplit=true \n" +
                    "源码 www.github.com/DaLongmao2/wakaka \n" +
                    "好人一生平安！！！");
            },
            error: function () {

            }
        })
    }


    $(function () {
        var set_time = 1000
        opa()
        setInterval(opa, set_time)
        var span_number = $("#number")
         span_number.hover(function () {
             var input = "<select id=\"top\" name=\"number\">\n" +
                     "        <option value='10'>10</option>\n" +
                     "        <option value='20'>20</option>\n" +
                     "        <option value='50'>50</option>\n" +
                     "        <option value='-1'>所有</option>\n" +
                     "    </select>"
             $(this).html(input);
         }, function () {
             var top = $("#top").val();
             if (top==10 || top==20){
                 end = top
                 option.series[0].radius = ['40%', '65%']
                 $(this).html(top)
             }
             if (top==50){
                 end = top
                 option.series[0].radius = ['30%', '50%']
                 $(this).html(top)
             }
             if (top==-1){
                 end = top
                 option.series[0].radius = ['25%', '40%']
                 $(this).html('所有')
             }
         })
    });
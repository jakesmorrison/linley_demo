function requestData(url_base) {
    $.ajax({
        type: 'GET',
        url: url_base,
        success: function(msg) {


            var series = bw_chart.series[0], shift = series.data.length > 50;
            bw_chart.series[0].addPoint(msg.write_bw, false, shift);
            bw_chart.series[1].addPoint(msg.read_bw, false, shift);
            bw_chart.series[2].addPoint(msg.errors, false, shift);

            var series = db_chart.series[0], shift = series.data.length > 50;
            db_chart.series[0].addPoint(msg.tps, false, shift);


//            bw_chart.series[2].addPoint([msg.write_bw-5,msg.write_bw+5], false, shift);
//            bw_chart.series[3].addPoint([msg.read_bw-5,msg.read_bw+5], false, shift);
//            bw_chart.series[2].addPoint(msg.write_bw-msg.write_bw*.05, false, shift);
//            bw_chart.series[3].addPoint(msg.read_bw-msg.read_bw*.05, false, shift);

            bw_chart.redraw();
            db_chart.redraw();

            if (error_log_counter >=num_log_items){
                $('#error_logging').find('span').first().remove();
            }

            if(msg.errors>0){
                $('#error_logging').append("<span class='log_line myfont'><span class='date_time myfont'>"+new Date()+": </span><span class='errors myfont' style='color: red'>Error Count: "+msg.errors+"</span><br></span>");
            }
            else{
                $('#error_logging').append("<span class='log_line myfont'><span class='date_time'>"+new Date()+": </span><span class='errors myfont'>Error Count: "+msg.errors+"</span><br></span>");
            }
            error_log_counter += 1;

            $('#eps').html("Errors Per Second: "+msg.errors)

            if (pause === false){
                setTimeout(function(){requestData(url_base);}, 750);
            }

        }
    });
}

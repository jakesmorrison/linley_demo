function bubble_chart() {
    return new Highcharts.chart('bubble_chart', {
        chart: {
            type: 'scatter',
            plotBorderWidth: 0,
//            zoomType: 'xy',
            backgroundColor: null,
        },

        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },


        title: {
            text: 'Bandwidth vs. Error',
            align: 'left',
            style: {
                font: font_family,
                color: text_color,
                fontSize: 20,
            }

        },

        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Read Bandwidth',
                style: {
                    font: font_family,
                    color: text_color,
                    fontSize: '20px'
                },

            },
            gridLineColor: '#197F07',
            gridLineWidth: 0,
            lineWidth: 1,
            labels: {
                formatter: function() {
                    val = this.value;
                    return '' + val.toLocaleString() + 'Mbps';
                },
                style: {
                    font: font_family,
                    color: text_color,
                    fontSize: '16px'
                },
            }
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'Write Bandwidth',
                style: {
                    font: font_family,
                    color: text_color,
                    fontSize: '20px'
                },

            },
            maxPadding: 0.2,
            gridLineWidth: 0,
            lineWidth: 1,
            labels: {
                formatter: function() {
                    val = this.value;
                    return '' + val.toLocaleString() + 'Mbps';
                },
                style: {
                    font: font_family,
                    color: text_color,
                    fontSize: '16px'
                },
            }
        },

        tooltip: {
            enabled: false
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },

        series: [{
            data: []
        }]

    });
}
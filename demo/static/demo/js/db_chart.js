text_color = "black";
font_family = 'Ubuntu, sans-serif';

function db_chart() {
    return new Highcharts.Chart({
        chart: {
            borderWidth: 0,
            backgroundColor: null,
            renderTo: 'db_chart',
            defaultSeriesType: 'line',
            marginLeft: 120,
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
            text: 'In-Memory Database: Transactions Per Iteration',
            align: 'left',
            style: {
                fontFamily: font_family,
                color: text_color,
                fontSize: 25,
                fontWeight: 700,
            }
        },
//        subtitle: {
//            text: 'Transactions Per Second',
//            align: 'left',
//            style: {
//                font: font_family,
//                color: text_color,
//                fontSize: 16,
//            }
//        },
        legend: {
            enabled: false,
            itemStyle: {
                fontFamily: font_family,
                color: text_color
            },
            layout: 'horizontal',
            floating: false,
        },
        xAxis: {
            title: {
                text: '',
                style: {
                    fontFamily: font_family,
                    color: text_color,
                }

            },
            labels: {
                enabled: false
            },
            //      minorTickLength: 0,
            tickLength: 0,
            //      lineWidth: 0,
            //      minorGridLineWidth: 0,
            //      lineColor: 'transparent'
            gridLineColor: '#197F07',
            gridLineWidth: 0,
            lineWidth: 1,

        },
        yAxis: [{
            min: 0,
            title: {
                text: 'TPI',
                style: {
                    fontFamily: font_family,
                    color: text_color,
                    fontSize: '18px'
                }

            },
            labels: {
                formatter: function() {
                    val = this.value;
                    return '' + val.toLocaleString();
                },
                style: {
                    fontFamily: font_family,
                    color: text_color,
                    fontSize: '16px'
                },
            },
            //      minorTickLength: 0,
            //      tickLength: 0,
            //      lineWidth: 0,
            //      minorGridLineWidth: 0,
            //      lineColor: 'transparent',
            //      gridLineColor: 'transparent'
            gridLineColor: '#197F07',
            gridLineWidth: 0,
            lineWidth: 1,

        }],
        plotOptions: {
            areaspline: {
                fillOpacity: 0.75,
                lineWidth: 5,
                marker: {
                    enabled: false
                }
            },
            line: {
                lineWidth: 5,
                marker: {
                    enabled: false
                }
            },
            column: {
                pointPadding: .1,
                groupPadding: .1,
            },
            series: {
                marker: {
                    states: {
                        hover: {
                            enabled: false
                        }
                    }
                }
            }
        },
        series: [{
            name: 'TPS',
            data: [],
            color: '#9ACA3C',
        }]
    });
}
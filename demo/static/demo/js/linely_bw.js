text_color = "black";
font_family = 'Ubuntu, sans-serif';

function bw_chart() {
    return new Highcharts.Chart({
        chart: {
            borderWidth: 0,
            backgroundColor: null,
            renderTo: 'bw_chart',
            defaultSeriesType: 'area',
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
            text: 'Memory Bandwidth and Errors vs Time',
            align: 'left',
            style: {
                fontFamily: font_family,
                color: text_color,
                fontSize: 25,
                fontWeight: 700,
            }
        },
        legend: {
            itemStyle: {
                fontFamily: font_family,
                color: text_color,
                fontSize: 15,
            },
            layout: 'horizontal',
            floating: false,
        },
        xAxis: {
            title: {
                text: '',
                style: {
                    font: font_family,
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
//            max: 100,
            title: {
                text: 'Normalized Bandwidth (%)',
                style: {
                    fontFamily: font_family,
                    color: text_color,
                    fontSize: '18px'
                }

            },
            labels: {
                formatter: function() {
                    val = this.value;
                    return '' + val.toLocaleString() + '%';
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

        }, {
            min: 1,
//            type: 'logarithmic',
            gridLineColor: '#197F07',
            gridLineWidth: 0,
            lineWidth: 1,
            title: {
                text: 'Error Count',
                margin: 10,
                style: {
                    fontFamily: font_family,
                    color: text_color,
                    fontSize: '18px'
                }
            },
            labels: {
                formatter: function() {
                    val = this.value;
                    return '' + val.toLocaleString() + '';
                },
                style: {
                    fontFamily: font_family,
                    color: text_color,
                    fontSize: '16px'
                },
            },

            opposite: true
        }],
        plotOptions: {
            areaspline: {
                fillOpacity: 0.75,
                lineWidth: 5,
                marker: {
                    enabled: false
                }
            },
            area: {
                stacking: 'normal',
                lineWidth: 1,
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
            name: 'Write Bandwidth',
            data: [],
            color: '#9ACA3C',
        }, {
            name: 'Read Bandwidth',
            data: [],
            color: '#0077C8',
        },
//        {
//            name: 'Range Write',
//            data: [],
//            type: 'arearange',
//            lineWidth: 0,
//            linkedTo: ':previous',
//            color: '#FFB500',
//            fillOpacity: 0.3,
//            zIndex: 0,
//            marker: {
//                enabled: false
//            }
//        },
//        {
//            name: 'Range Read',
//            data: [],
//            type: 'areasplinerange',
//            lineWidth: 0,
//            linkedTo: ':previous',
//            color: 'rgb(238,118,35)',
//            fillOpacity: 0.3,
//            zIndex: 0,
//            marker: {
//                enabled: false
//            }
//        },
        {
            name: 'Errors',
            data: [],
            yAxis: 1,
            type: 'column',
            color: 'rgba(255, 75, 75, .7)',
            zIndex: 100,
            marker: {
                enabled: false
            }
        }]
    });
}
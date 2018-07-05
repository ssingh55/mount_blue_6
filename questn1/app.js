$(document).ready(function() {
        var myData = data;
        var seasonYear = [];

        for (let i = 0; i < myData.length; i++) {
            seasonYear[i] = myData[i].season;
        }
        var chart = {
            type: 'column'
        };
        var title = {
            text: 'Yearly number of matches'
        };

        var subtitle = {
            text: 'ipl stats charts'
        };

        var xAxis = {
            categories: Array.from(new Set(seasonYear))
        };

        var yAxis = {
            min: 0,
            title: {
                text: 'No. of matches'//,
                // align: 'high'
            },
            plotLines: [{
                  value: 0,
                  width: 1,
                  color: '#808080'
               }]
        };

        var plotOptions = {
            series: {
                // dataLabels: {
                //     enabled: true
                // },
                pointWidth: 30

            }
        };
        // var tooltip = {
        //        valueSuffix: '\xB0C'
        //     }

        var legend = {
               layout: 'vertical',
               align: 'right',
               verticalAlign: 'middle',
               borderWidth: 0
            };

        var series = new Array();
        for (var yr of Array.from(new Set(seasonYear)).sort()) {
            var count = 0;
            for (let i = 0; i < seasonYear.length; i++) {
                if (yr == seasonYear[i])
                    count++;
            }
            series.push({'name':yr,'data':[[yr,count]]});
        }
        // console.log(series);

        var json = {};
        json.chart = chart;
        json.title = title;
        json.subtitle = subtitle;
        json.yAxis = yAxis;
        json.xAxis = xAxis;
        // json.tooltip = tooltip;
        json.legend = legend;
        json.series = series;
        json.plotOptions = plotOptions;
        $('#container').highcharts(json);
    });
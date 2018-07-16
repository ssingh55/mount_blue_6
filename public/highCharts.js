$(document).ready(function() {

    //graph1
    fetch('/matchesPerYear')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            var chart = {
                type: 'column'
            };
            var title = {
                text: 'Matches per year'
            };
            var subtitle = {
                text: 'Source: Ipl  (Kaggle)'
            };
            var xAxis = {
                categories: Object.keys(myJson),
                crosshair: true
            };
            var yAxis = {
                min: 0,
                title: {
                    text: 'Matches'
                }
            };
            var plotOptions = {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            };
            var series = [{
                name: ['data'],
                'colorByPoint': true,
                data: Object.values(myJson)
            }];
            var json = {};
            json.chart = chart;
            json.title = title;
            json.subtitle = subtitle;
            json.xAxis = xAxis;
            json.yAxis = yAxis;
            json.series = series;
            json.plotOptions = plotOptions;
            $('#container1').highcharts(json);
        });

    //graph2
    fetch('/matchesWonPerTeam')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            let teamNames = Object.keys(myJson);
            let seriesData = [],
                years = new Set();
            for (var i = 0; i < teamNames.length; i++) {
                let data = [];
                for (let year = 2008; year < 2018; year++) {
                    if (myJson[teamNames[i]].hasOwnProperty(year))
                        data.push(myJson[teamNames[i]][year])
                    else
                        data.push(0)
                }
                seriesData.push({
                    name: teamNames[i],
                    data: data
                });
                Object.keys(myJson[teamNames[i]]).forEach((year) => {
                    years.add(year);
                })
            }
            var chart = {
                type: 'bar'
            };
            var title = {
                text: 'Matches won per team per year'
            };
            var subtitle = {
                text: 'Source: Ipl  (Kaggle)'
            };
            var xAxis = {
                categories: Array.from(years).sort(),
                crosshair: true
            };
            var yAxis = {
                min: 0,
                title: {
                    text: 'Matches'
                }
            };
            var plotOptions = {
                bar: {},
                series: {
                    stacking: 'normal'
                }
            };
            var series = seriesData;

            var json = {};
            json.chart = chart;
            json.title = title;
            json.subtitle = subtitle;
            json.xAxis = xAxis;
            json.yAxis = yAxis;
            json.series = series;
            json.plotOptions = plotOptions;
            $('#container2').highcharts(json);
        });

    //graph3
    fetch('/matchesExtraRunsPerTeam')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            var chart = {
                type: 'column'
            };
            var title = {
                text: 'Extra Runs Conceded Per Team'
            };
            var subtitle = {
                text: 'Source: Ipl  (Kaggle)'
            };
            var xAxis = {
                categories: Object.keys(myJson),
                crosshair: true
            };
            var yAxis = {
                min: 0,
                title: {
                    text: 'extra runs'
                }
            };
            var plotOptions = {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            };
            var series = [{
                name: ['Teams'],
                'colorByPoint': true,
                data: Object.values(myJson)
            }];
            var json = {};
            json.chart = chart;
            json.title = title;
            json.subtitle = subtitle;
            json.xAxis = xAxis;
            json.yAxis = yAxis;
            json.series = series;
            json.plotOptions = plotOptions;
            $('#container3').highcharts(json);
        });

    //graph4
    fetch('/topEconomicalBowlers')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            var chart = {
                type: 'column'
            };
            var title = {
                text: 'Top Economical Bowlers'
            };
            var subtitle = {
                text: 'Source: Ipl  (Kaggle)'
            };
            var xAxis = {
                categories: Object.keys(myJson),
                crosshair: true
            };
            var yAxis = {
                min: 0,
                title: {
                    text: 'Economy Rate'
                }
            };
            var plotOptions = {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            };
            var series = [{
                name: ['Players'],
                'colorByPoint': true,
                data: Object.values(myJson)
            }];
            var json = {};
            json.chart = chart;
            json.title = title;
            json.subtitle = subtitle;
            json.xAxis = xAxis;
            json.yAxis = yAxis;
            json.series = series;
            json.plotOptions = plotOptions;
            $('#container4').highcharts(json);
        });

    //graph5
    fetch('/topWicketTakers')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            var chart = {
                type: 'column'
            };
            var title = {
                text: 'Top Wicket taking Bowlers'
            };
            var subtitle = {
                text: 'Source: Ipl  (Kaggle)'
            };
            var xAxis = {
                categories: Object.keys(myJson),
                crosshair: true
            };
            var yAxis = {
                min: 0,
                title: {
                    text: 'Wicket takers'
                }
            };
            var plotOptions = {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            };
            var series = [{
                name: ['Players'],
                'colorByPoint': true,
                data: Object.values(myJson)
            }];
            var json = {};
            json.chart = chart;
            json.title = title;
            json.subtitle = subtitle;
            json.xAxis = xAxis;
            json.yAxis = yAxis;
            json.series = series;
            json.plotOptions = plotOptions;
            $('#container5').highcharts(json);
        });
});
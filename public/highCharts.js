$(document).ready(function () {

    //charts1


    fetch('/matchesPerYear')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
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


    //charts2


    fetch('/matchesWonPerTeam')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            // console.log(Object.keys(myJson))
            let teamNames = Object.keys(myJson);
            let seriesData = [],
                years = new Set();
            for (var i = 0; i < teamNames.length; i++) {
                var tempArray = Object.values(myJson[teamNames[i]])
                var tempObj = {
                    name: teamNames[i],
                    data: tempArray
                }
                seriesData.push(tempObj);
                Object.keys(myJson[teamNames[i]]).forEach((year) => {
                    years.add(year);
                })

            }
            // console.log(Array.from(years).sort());

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
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                },
                series: {
                    stacking: 'normal'
                }
            };
            // console.log(Object.values(myJson)[0]);
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



    //charts3


    fetch('/matchesExtraRunsPerTeam')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
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


    //charts4

    fetch('/topEconomicalBowlers')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
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

    //charts 5


    fetch('/topWicketTakers')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
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
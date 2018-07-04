$(document).ready(function() {
    var myData = data;
    var seasonYear = [];
    var teamList = [];
    var team = [];
    for (let i = 0; i < myData.length; i++) {
        seasonYear[i] = myData[i].season;
        teamList[i] = myData[i].team1;
    }
    teamList = Array.from(new Set(teamList));
    seasonYear = Array.from(new Set(seasonYear));
    for (let i = 0, temp = {}; i < myData.length; i++) {
        temp = {};
        if (myData[i].winner != '') {
            temp.season = myData[i].season;
            temp.winner = myData[i].winner;
            team.push(temp);
        }
    }

    var chart = {
        type: 'bar'
    };
    var title = {
        text: 'Matches winner'
    };
    var subtitle = {
        text: 'Number of matches won by each team each year'
    };

    var xAxis = {
        categories: Array.from(new Set(seasonYear))
    };
    var yAxis = {
        min: 0,
        title: {
            text: 'Winnings',
            align: 'low'
        },
        labels: {
            overflow: 'justify'
        }
    };
    // var tooltip = {
    // 	valueSuffix: ''
    // };
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
    // var legend = {
    //     layout: 'vertical',
    //     align: 'center',
    //     verticalAlign: 'top',
    //     x: 0,
    //     y: 200,
    //     floating: true,
    //     borderWidth: 1,

    //     backgroundColor: (
    //         (Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
    //         '#FFFFFF'),
    //     shadow: true
    // };
    var legend = {
    	layout: 'vertical',
               align: 'right',
               verticalAlign: 'middle',
               borderWidth: 0
    };
    var credits = {
        enabled: false
    };
    var series = [];
    var count;
    var temp = {};
    for (let teams of teamList) {
        temp = { name: '', data: [] };
        temp.name = teams;
        // console.log(teams);
        for (let seasonYr of seasonYear) {
            count = 0;
            // console.log(seasonYr);
            // console.log(teamList);
            for (let teamDetails1 of team) {
                // console.log(teamDetails1);
                if (seasonYr === teamDetails1.season) {
                    if (teams == teamDetails1.winner)
                        count++;
                }

            }
            // console.log(count);
            temp.data.push(count);
        }
        series.push(temp);
    }//for loop  ends
    var json={};
    json.chart = chart;
    json.title = title;
    json.subtitle = subtitle;
    // json.tooltip = tooltip;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.series = series;
    json.plotOptions = plotOptions;
    json.legend = legend;
    json.credits = credits;
    $('#container').highcharts(json);
});
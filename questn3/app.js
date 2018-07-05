$(document).ready(function() {
    var myData = data,id = [];
    var myData1 = data1;
    var teamPlaying = new Set();
    for (let i = 0, j = 0; i < myData.length; i++) {
        if (myData[i].season == '2016') {
            id[j] = myData[i].id;
            j++;
            teamPlaying.add(myData[i].team1);
        }
    }
    // teamPlaying = Array.from(teamPlaying);

    var chart = {
        type: 'column'
    };

    var title = {
        text: 'extra runs'
    };

    var subtitle = {
        text: 'extra runs conceded per team'
    };

    var xAxis = {
        categories:  ['Teams']//Array.from(teamPlaying)
    };

    var yAxis = {
        min: 0,
        title: {
            text: 'Extra runs '
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    };

    var legend = {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    };

    var series = new Array();
    var extra;
    var temp = {};
    for (let teams of teamPlaying) {
        extra = 0;
        temp = {};
        for (let j = 0; j < id.length; j++) {
            for (let i = 0; i < myData1.length; i++) {
                // console.log(myData1[i].id);
                if (myData1[i].match_id == id[j]) {
                    if (teams == myData1[i].bowling_team) {
                        extra = extra + Number(myData1[i].extra_runs);
                    }
                }
            }
        }
        temp.name = teams;
        temp.data = [extra];
        series.push(temp);
    }
    console.log(series);
    var json = {};
    json.chart = chart;
    json.title = title;
    json.subtitle = subtitle;
    json.yAxis = yAxis;
    json.xAxis = xAxis;
    // json.tooltip = tooltip;
    json.legend = legend;
    json.series = series;
    // json.plotOptions = plotOptions;
    $('#container').highcharts(json);
});
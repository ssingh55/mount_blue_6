$(document).ready(function() {
    var myData = data,
        myData1 = data1;

        // console.log(myData);
        // console.log(myData1);
    function findId(myData) {
        var id = [];
        myData.forEach(function(jsonItem) {
            if (jsonItem.season === '2015') {
                id.push(jsonItem.id);
            }
        });
        return id;
    }


    function findBowlerName(myData1, id) {
        var bowlerNameArray = new Set();
        console.log(myData1);
        myData1.forEach(function(jsonItem) {
            if (id.includes(jsonItem.match_id)) {
                bowlerNameArray.add(jsonItem.bowler);
            }
        });
        bowlerNameArray = Array.from(bowlerNameArray);
        // console.log(bowlerNameArray);
        return bowlerNameArray;
    }
    // console.log(findId(myData));
    console.log(findBowlerName(myData1, findId(myData)));



    var chart = {
        type: 'column'
    };

    var title = {
        text: 'Wicket taking Top charts'
    };

    var subtitle = {
        text: 'highest wicktes by bowler'
    };

    var xAxis = {
        categories: ['Bowler Name'] //Array.from(teamPlaying)
    };

    var yAxis = {
        min: 0,
        title: {
            text: 'Wickets taken '
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

    //series
    function findSeries(bowlerNameArray, myData1, id) {
        var totalRuns = 0,
            totalDeliveries = 0;
        var series = [],
            temp = {};
        bowlerNameArray.forEach(function(bowlerName) {
            temp = {};
            totalDeliveries = 0;
            myData1.forEach(function(jsonItem) {
                if (id.includes(jsonItem.match_id)) {
                    if (bowlerName === jsonItem.bowler) {
                        if (jsonItem.player_dismissed != '')
                            totalDeliveries++;
                    }

                }
            });
            temp.name = bowlerName;
            temp.data = [totalDeliveries];
            series.push(temp);

        });

        series.sort(function(a, b) {
            if (parseFloat(a.data[0].toFixed(4)) > parseFloat(b.data[0].toFixed(4))) return -1;
            else return 1;
        });

        // console.log(series);
        var temp = [];
        for (let i = 0; i < 10; i++)
            temp[i] = series[i];
        series = temp;
        return series;
    }
    var series = findSeries((findBowlerName(myData1, findId(myData))), myData1, findId(myData));
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
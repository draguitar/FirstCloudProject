var myObj = {}

myObj.getWeather = function(){
    /*
        新北:90717580
        台北:2306179
        桃園:2306254
        台中:2306181
        台南:2306182
        高雄:2306180
    */
    $.getJSON('https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202306254%20and%20u%3D%22c%22&format=json&callback=?', function(json) {
        var w_code1 = weather_con[json.query.results.channel.item.condition.code.toString()];
        var w_temp1 = json.query.results.channel.item.condition.temp + "℃";
        
        $('#weather1').val(w_temp1);
        $('#weather2').val(w_code1);
    });
   
    
    weather_con = {
        "0":"tornado",
        "1":"tropical storm",
        "2":"hurricane",
        "3":"severe thunderstorms",
        "4":"thunderstorms",
        "5":"mixed rain and snow",
        "6":"mixed rain and sleet",
        "7":"mixed snow and sleet",
        "8":"freezing drizzle",
        "9":"drizzle",
        "10":"freezing rain",
        "11":"showers",
        "12":"showers",
        "13":"snow flurries",
        "14":"light snow showers",
        "15":"blowing snow",
        "16":"snow",
        "17":"hail",
        "18":"sleet",
        "19":"dust",
        "20":"foggy",
        "21":"haze",
        "22":"smoky",
        "23":"blustery",
        "24":"windy",
        "25":"cold",
        "26":"cloudy",
        "27":"mostly cloudy (night)",
        "28":"mostly cloudy (day)",
        "29":"partly cloudy (night)",
        "30":"partly cloudy (day)",
        "31":"clear (night)",
        "32":"sunny",
        "33":"fair (night)",
        "34":"fair (day)",
        "35":"mixed rain and hail",
        "36":"hot",
        "37":"isolated thunderstorms",
        "38":"scattered thunderstorms",
        "39":"scattered thunderstorms",
        "40":"scattered showers",
        "41":"heavy snow",
        "42":"scattered snow showers",
        "43":"heavy snow",
        "44":"partly cloudy",
        "45":"thundershowers",
        "46":"snow showers",
        "47":"isolated thundershowers",
        "3200":"not available"
    };
}

myObj.search1 = function(){
    var root = 'https://jsonplaceholder.typicode.com/albums' ;
    userId = $('#userId').val();
    if (userId!=''){
        url = root + '?userId='+userId;
    }else{
        url = root ;
    }
    
    $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
            success: function(data) {
                var trHTML = '<tbody>';
                $.each(data, function (i, item) {
                    trHTML += '<tr><th scope="row">'+ (i+1) +'</th><td>'+ data[i].userId + '</td><td>' +data[i].id+'</td><td>'+ data[i].title + '</td></tr>';
                })
                $('#location').append(trHTML).append('</tbody>');
            },
            error: function(jqXHR) {
                alert("發生錯誤: " + jqXHR.status);
            }
    })
}

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
    document.getElementById('submitWeather').addEventListener('click', function(event){
        var req = new XMLHttpRequest();
        var url = "http://api.openweathermap.org/data/2.5/weather?";
        var appId = "&appid=82ebbe18f3740973cfcee4b1630c46cf";
        var cityName = document.getElementById("cityName").value;
        var zipCode = document.getElementById("zipCode").value;
        var payload;
        if(zipCode !== ""){
            payload = url + "zip=" + zipCode + ",us" + appId + "&units=imperial";
        } else {
            payload = url + "q=" + cityName + ",us" + appId + "&units=imperial";
        }
        req.open("GET", payload, true);
        req.addEventListener('load', function() {
            if (req.status >= 200 && req.status < 400) {
                var res = JSON.parse(req.responseText);
                displayWeatherResult(res);
            } else {
                console.log("Error: " + req.statusText);
            }
        });
        req.send();
        event.preventDefault();
    });

    document.getElementById('submitPersonInfo').addEventListener('click', function(event){
        var req = new XMLHttpRequest();
        var url = "http://httpbin.org/post";
        var payload = {
            'userName': null,
            'university': null,
            'major': null
        };
        payload.userName = document.getElementById('userName').value;
        payload.university = document.getElementById('university').value;
        payload.major = document.getElementById('major').value;
        req.open("POST", url, true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.addEventListener('load', function() {
            if (req.status >= 200 && req.status < 400) {
                var res = JSON.parse(JSON.parse(req.responseText).data);
                displayPersonResult(res);
            } else {
                console.log("Error: " + req.statusText);
            }
        });
        req.send(JSON.stringify(payload));
        event.preventDefault();
    });
}

function displayPersonResult(res){
    document.getElementById('nameResult').textContent = res.userName;
    document.getElementById('universityResult').textContent = res.university;
    document.getElementById('majorResult').textContent = res.major;
}

function displayWeatherResult(res){
    document.getElementById('temp').textContent = res.main.temp;
    document.getElementById('pressure').textContent = res.main.pressure;
    document.getElementById('humidity').textContent = res.main.humidity;
    document.getElementById('temp_min').textContent = res.main.temp_min;
    document.getElementById('temp_max').textContent = res.main.temp_max;
}


export default class {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;

    }


    createLink(url) {
        var link = document.createElement('link');
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = url;

        document.head.appendChild(link);
    }


    name(par) {

        document.addEventListener('DOMContentLoaded', par);

    }

    displayData_currentDay() {
        getStoredData = JSON.parse(window.localStorage.getItem('user'));
        let data = getStoredData;
        console.log(data.city);
        console.log(data.current.weather_icon);
        let icon_url = `http://openweathermap.org/img/wn/${data.current.weather_icon}@2x.png`;

        document.getElementById("weather_icon").src = icon_url;
        document.getElementById('weatherDescription').innerHTML = data.current.weather_description;
        document.getElementById('temp').innerHTML = math.round(data.current.temp);

        document.getElementById('mornTemp').innerHTML = math.round(data.day0.morn_temp);
        document.getElementById('aftTemp').innerHTML = math.round(data.day0.aft_temp);
        document.getElementById('eveTemp').innerHTML = math.round(data.day0.eve_temp);

    }

    async getHtml() {
        return "";
    }
}
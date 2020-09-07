

export default class {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;

    }


    removeTag(url) {
        let tag = document.querySelector(`link[href="${url}"]`);
        if (tag !== null) {
            tag.remove();
        }
    }

    listen(func) {
        window.addEventListener("popstate", func);
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

    showDays() {





        let sequence = [];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let now = new Date();
        let today = now.getDay();
        let count = 1;
        let otherDays = today;

        while (count < 8) {

            otherDays += 1;

            if (otherDays === 7) {

                otherDays = 0;
                sequence.push(days[otherDays]);

            } else {

                sequence.push(days[otherDays]);
            }


            console.log(sequence);
            count += 1;
        }

        //Loop and display all days stored in the new array created 'sequence';


        sequence.forEach(val => {
            console.log(sequence.indexOf(val));
            let num = sequence.indexOf(val);
            //document.getElementsByClassName('scroll-links').innerHTML = `<a href="" onClick="day${num}();"data-link>${val}</a>`;

        });

        console.log(sequence);

        let day1 = () => {

            let data = getStoredData;
            let icon_url = `http://openweathermap.org/img/wn/${data.day1.weather_icon}@2x.png`;

            document.getElementById("weather_icon").src = icon_url;
            document.getElementById('weatherDescription').innerHTML = data.day1.weather_description;
            document.getElementById('temp').innerHTML = Math.round(data.day1.max_temp);

            document.getElementById('mornTemp').innerHTML = Math.round(data.day1.morn_temp);
            document.getElementById('aftTemp').innerHTML = Math.round(data.day1.aft_temp);
            document.getElementById('eveTemp').innerHTML = Math.round(data.day1.eve_temp);

        }

        let day2 = () => {

            let data = getStoredData;
            let icon_url = `http://openweathermap.org/img/wn/${data.day2.weather_icon}@2x.png`;

            document.getElementById("weather_icon").src = icon_url;
            document.getElementById('weatherDescription').innerHTML = data.day2.weather_description;
            document.getElementById('temp').innerHTML = Math.round(data.day2.max_temp);

            document.getElementById('mornTemp').innerHTML = Math.round(data.day2.morn_temp);
            document.getElementById('aftTemp').innerHTML = Math.round(data.day2.aft_temp);
            document.getElementById('eveTemp').innerHTML = Math.round(data.day2.eve_temp);

        }

        let day3 = () => {

            let data = getStoredData;
            let icon_url = `http://openweathermap.org/img/wn/${data.day3.weather_icon}@2x.png`;

            document.getElementById("weather_icon").src = icon_url;
            document.getElementById('weatherDescription').innerHTML = data.day3.weather_description;
            document.getElementById('temp').innerHTML = Math.round(data.day3.max_temp);

            document.getElementById('mornTemp').innerHTML = Math.round(data.day3.morn_temp);
            document.getElementById('aftTemp').innerHTML = Math.round(data.day3.aft_temp);
            document.getElementById('eveTemp').innerHTML = Math.round(data.day3.eve_temp);

        }

        let day4 = () => {

            let data = getStoredData;
            let icon_url = `http://openweathermap.org/img/wn/${data.day4.weather_icon}@2x.png`;

            document.getElementById("weather_icon").src = icon_url;
            document.getElementById('weatherDescription').innerHTML = data.day4.weather_description;
            document.getElementById('temp').innerHTML = Math.round(data.day4.max_temp);

            document.getElementById('mornTemp').innerHTML = Math.round(data.day4.morn_temp);
            document.getElementById('aftTemp').innerHTML = Math.round(data.day4.aft_temp);
            document.getElementById('eveTemp').innerHTML = Math.round(data.day4.eve_temp);

        }


        let day5 = () => {

            let data = getStoredData;
            let icon_url = `http://openweathermap.org/img/wn/${data.day5.weather_icon}@2x.png`;

            document.getElementById("weather_icon").src = icon_url;
            document.getElementById('weatherDescription').innerHTML = data.day5.weather_description;
            document.getElementById('temp').innerHTML = Math.round(data.day5.max_temp);

            document.getElementById('mornTemp').innerHTML = Math.round(data.day5.morn_temp);
            document.getElementById('aftTemp').innerHTML = Math.round(data.day5.aft_temp);
            document.getElementById('eveTemp').innerHTML = Math.round(data.day5.eve_temp);

        }

        let day6 = () => {

            let data = getStoredData;
            let icon_url = `http://openweathermap.org/img/wn/${data.day6.weather_icon}@2x.png`;

            document.getElementById("weather_icon").src = icon_url;
            document.getElementById('weatherDescription').innerHTML = data.day6.weather_description;
            document.getElementById('temp').innerHTML = Math.round(data.day6.max_temp);

            document.getElementById('mornTemp').innerHTML = Math.round(data.day6.morn_temp);
            document.getElementById('aftTemp').innerHTML = Math.round(data.day6.aft_temp);
            document.getElementById('eveTemp').innerHTML = Math.round(data.day6.eve_temp);

        }

        let day7 = () => {

            let data = getStoredData;
            let icon_url = `http://openweathermap.org/img/wn/${data.day7.weather_icon}@2x.png`;

            document.getElementById("weather_icon").src = icon_url;
            document.getElementById('weatherDescription').innerHTML = data.day7.weather_description;
            document.getElementById('temp').innerHTML = Math.round(data.day7.max_temp);

            document.getElementById('mornTemp').innerHTML = Math.round(data.day7.morn_temp);
            document.getElementById('aftTemp').innerHTML = Math.round(data.day7.aft_temp);
            document.getElementById('eveTemp').innerHTML = Math.round(data.day7.eve_temp);

        }



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

        ///////////////////////////////////////////////////////////////////////////////




    }

    async getHtml() {
        return "";
    }
}
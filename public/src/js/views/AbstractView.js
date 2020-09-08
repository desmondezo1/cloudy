

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

        let tag = document.querySelector(`link[href="${url}"]`);
        if (tag !== null) {
            tag.remove();
        } else {
            var link = document.createElement('link');
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = url;

            document.head.appendChild(link);
        }

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
        let i = 0;
        while (i < sequence.length) {

            document.getElementsByClassName('scroll-links').innerHTML = `<a href="" onClick="day${i}();"data-link>${sequence[i]}</a>`;
            i += 1;
        }


        console.log(sequence);



    }



    //to check if the card is within the mobile viewport
    isInViewport(el) {

        if (el !== null) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)

            );
        }
    }


    checkScroll(isInViewport, el) {

        const box = el;

        document.addEventListener('scroll', function () {
            const messageText = isInViewport(box) ?
                console.log('The box is visible in the viewport') :
                console.log('The box is not visible in the viewport');


        }, {
            passive: true
        });
    }

    onRefresh(func) {
        // let res = '/results';

        // let page = location.pathname.match(res);

        // if (page !== null) {
        //     currentDay();
        // } 

        if (window.performance) {
            console.info("window.performance works fine on this browser");
        }
        console.info(performance.navigation.type);
        if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
            console.info("This page is reloaded");

            func();


        } else {
            console.info("This page is not reloaded");
        }

    }


    displayData_currentDay() {

        getStoredData = JSON.parse(window.localStorage.getItem('user'));
        let data = getStoredData;
        console.log(data.city);
        console.log(data.current.weather_icon);
        let icon_url = `https://openweathermap.org/img/wn/${data.current.weather_icon}@2x.png`;

        document.getElementById('city').innerHTML = data.city;
        document.getElementById("weather_icon_day0").src = icon_url;
        document.getElementById('weatherDescription_day0').innerHTML = data.current.weather_description;
        document.getElementById('temp_day0').innerHTML = math.round(data.current.temp);

        document.getElementById('mornTemp_day0').innerHTML = math.round(data.day0.morn_temp);
        document.getElementById('aftTemp_day0').innerHTML = math.round(data.day0.aft_temp);
        document.getElementById('eveTemp_day0').innerHTML = Math.round(data.day0.eve_temp);

        ///////////////////////////////////////////////////////////////////////////////

        let icon_url_day1 = `https://openweathermap.org/img/wn/${data.day1.weather_icon}@2x.png`;

        document.getElementById("weather_icon_day1").src = icon_url_day1;
        document.getElementById('weatherDescription_day1').innerHTML = data.day1.weather_description;
        document.getElementById('temp_day1').innerHTML = Math.round(data.day1.max_temp);

        document.getElementById('mornTemp_day1').innerHTML = Math.round(data.day1.morn_temp);
        document.getElementById('aftTemp_day1').innerHTML = Math.round(data.day1.aft_temp);
        document.getElementById('eveTemp_day1').innerHTML = Math.round(data.day1.eve_temp);

        ///////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////

        let icon_url_day2 = `https://openweathermap.org/img/wn/${data.day2.weather_icon}@2x.png`;

        document.getElementById("weather_icon_day2").src = icon_url_day2;
        document.getElementById('weatherDescription_day2').innerHTML = data.day2.weather_description;
        document.getElementById('temp_day2').innerHTML = Math.round(data.day2.max_temp);

        document.getElementById('mornTemp_day2').innerHTML = Math.round(data.day2.morn_temp);
        document.getElementById('aftTemp_day2').innerHTML = Math.round(data.day2.aft_temp);
        document.getElementById('eveTemp_day2').innerHTML = Math.round(data.day2.eve_temp);

        ///////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////

        let icon_url_day3 = `https://openweathermap.org/img/wn/${data.day3.weather_icon}@2x.png`;

        document.getElementById("weather_icon_day3").src = icon_url_day3;
        document.getElementById('weatherDescription_day3').innerHTML = data.day3.weather_description;
        document.getElementById('temp_day3').innerHTML = Math.round(data.day3.max_temp);

        document.getElementById('mornTemp_day3').innerHTML = Math.round(data.day3.morn_temp);
        document.getElementById('aftTemp_day3').innerHTML = Math.round(data.day3.aft_temp);
        document.getElementById('eveTemp_day3').innerHTML = Math.round(data.day3.eve_temp);

        ///////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////
        let icon_url_day4 = `https://openweathermap.org/img/wn/${data.day4.weather_icon}@2x.png`;

        document.getElementById("weather_icon_day4").src = icon_url_day4;
        document.getElementById('weatherDescription_day4').innerHTML = data.day4.weather_description;
        document.getElementById('temp_day4').innerHTML = Math.round(data.day4.max_temp);

        document.getElementById('mornTemp_day4').innerHTML = Math.round(data.day4.morn_temp);
        document.getElementById('aftTemp_day4').innerHTML = Math.round(data.day4.aft_temp);
        document.getElementById('eveTemp_day4').innerHTML = Math.round(data.day4.eve_temp);

        ///////////////////////////////////////////////////////////////////////////////

        let icon_url_day5 = `https://openweathermap.org/img/wn/${data.day5.weather_icon}@2x.png`;

        document.getElementById("weather_icon_day5").src = icon_url_day5;
        document.getElementById('weatherDescription_day5').innerHTML = data.day5.weather_description;
        document.getElementById('temp_day5').innerHTML = Math.round(data.day5.max_temp);

        document.getElementById('mornTemp_day5').innerHTML = Math.round(data.day5.morn_temp);
        document.getElementById('aftTemp_day5').innerHTML = Math.round(data.day5.aft_temp);
        document.getElementById('eveTemp_day5').innerHTML = Math.round(data.day5.eve_temp);

        ///////////////////////////////////////////////////////////////////////////////

        let icon_url_day6 = `https://openweathermap.org/img/wn/${data.day6.weather_icon}@2x.png`;

        document.getElementById("weather_icon_day6").src = icon_url_day6;
        document.getElementById('weatherDescription_day6').innerHTML = data.day6.weather_description;
        document.getElementById('temp_day6').innerHTML = Math.round(data.day6.max_temp);

        document.getElementById('mornTemp_day6').innerHTML = Math.round(data.day6.morn_temp);
        document.getElementById('aftTemp_day6').innerHTML = Math.round(data.day6.aft_temp);
        document.getElementById('eveTemp_day6').innerHTML = Math.round(data.day6.eve_temp);

        ///////////////////////////////////////////////////////////////////////////////
        let icon_url_day7 = `https://openweathermap.org/img/wn/${data.day7.weather_icon}@2x.png`;

        document.getElementById("weather_icon_day7").src = icon_url_day7;
        document.getElementById('weatherDescription_day7').innerHTML = data.day7.weather_description;
        document.getElementById('temp_day7').innerHTML = Math.round(data.day7.max_temp);

        document.getElementById('mornTemp_day7').innerHTML = Math.round(data.day7.morn_temp);
        document.getElementById('aftTemp_day7').innerHTML = Math.round(data.day7.aft_temp);
        document.getElementById('eveTemp_day7').innerHTML = Math.round(data.day7.eve_temp);

        ///////////////////////////////////////////////////////////////////////////////
    }


    async getHtml() {
        return "";
    }
}
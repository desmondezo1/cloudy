//export { displayData_currentDay as currentDay };
export default displayData_currentDay;
export { showResults as showResults };
// export { displayData_day1 as day1 };
// export { displayData_day2 as day2 };
// export { displayData_day3 as day3 };
// export { displayData_day4 as day4 };
// export { displayData_day5 as day5 };
// export { displayData_day6 as day6 };
// export { displayData_day7 as day7 };



//console.log(getStoredData);

function showResults(data) {

    let current_humidity = data.current.humidity,
        current_pressure = data.current.pressure,
        current_visibility = data.current.visibility,
        current_weather = data.current.weather[0].main,
        current_weather_description = data.current.weather[0].description,
        current_weather_icon = data.current.weather[0].icon,
        current_temperature = data.current.temp,
        day0_mornTemp = data.daily[0].feels_like.morn,
        day0_aftTemp = data.daily[0].feels_like.day,
        day0_eveTemp = data.daily[0].feels_like.eve;

    console.log(data.city);
    console.log(current_weather_icon);
    let icon_url = `https://openweathermap.org/img/wn/${current_weather_icon}@2x.png`;
    document.getElementById('city').innerHTML = ` ${data.city}`;
    document.getElementById("weather_icon").src = icon_url;
    document.getElementById('weatherDescription').innerHTML = current_weather_description;
    document.getElementById('temp').innerHTML = Math.round(+ current_temperature);

    document.getElementById('mornTemp').innerHTML = Math.round(day0_mornTemp);
    document.getElementById('aftTemp').innerHTML = Math.round(day0_aftTemp);
    document.getElementById('eveTemp').innerHTML = Math.round(day0_eveTemp);

    //navTo();
}

// displayData_currentDay();

function displayData_currentDay() {
    const getStoredData = JSON.parse(window.localStorage.getItem('user'));
    let data = getStoredData;
    console.log(data.city);
    console.log(data.current.weather_icon);
    document.getElementById('city').innerHTML = data.city;
    let icon_url = `https://openweathermap.org/img/wn/${data.current.weather_icon}@2x.png`;

    document.getElementById("weather_icon_day0").src = icon_url;
    document.getElementById('weatherDescription_day0').innerHTML = data.current.weather_description;
    document.getElementById('temp_day0').innerHTML = Math.round(data.current.temp);

    document.getElementById('mornTemp_day0').innerHTML = Math.round(data.day0.morn_temp);
    document.getElementById('aftTemp_day0').innerHTML = Math.round(data.day0.aft_temp);
    document.getElementById('eveTemp_day0').innerHTML = Math.round(data.day0.eve_temp);

    ///////////////////////////////////////////////////////////////////////////////

    let icon_url_day1 = `https://openweathermap.org/img/wn/${data.day1.weather_icon}@2x.png`;

    document.getElementById("weather_icon_day1").src = icon_url_day1;
    document.getElementById('weatherDescription_day1').innerHTML = data.day1.weather_description;
    document.getElementById('temp_day1').innerHTML = Math.round(data.day1.max_temp);

    console.log(`Day 1 data :${data.day1.weather_icon}`);

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


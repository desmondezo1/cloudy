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
    let icon_url = `http://openweathermap.org/img/wn/${current_weather_icon}@2x.png`;
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
    let icon_url = `http://openweathermap.org/img/wn/${data.current.weather_icon}@2x.png`;
    document.getElementById('city').innerHTML = ` ${data.city}`;
    document.getElementById("weather_icon").src = icon_url;
    document.getElementById('weatherDescription').innerHTML = data.current.weather_description;
    document.getElementById('temp').innerHTML = Math.round(+ data.current.temp);

    document.getElementById('mornTemp').innerHTML = Math.round(data.day0.morn_temp);
    document.getElementById('aftTemp').innerHTML = Math.round(data.day0.aft_temp);
    document.getElementById('eveTemp').innerHTML = Math.round(data.day0.eve_temp);

}

function displayData_day1() {

    let data = getStoredData;
    let icon_url = `http://openweathermap.org/img/wn/${data.day1.weather_icon}@2x.png`;

    document.getElementById("weather_icon").src = icon_url;
    document.getElementById('weatherDescription').innerHTML = data.day1.weather_description;
    document.getElementById('temp').innerHTML = Math.round(data.day1.max_temp);

    document.getElementById('mornTemp').innerHTML = Math.round(data.day1.morn_temp);
    document.getElementById('aftTemp').innerHTML = Math.round(data.day1.aft_temp);
    document.getElementById('eveTemp').innerHTML = Math.round(data.day1.eve_temp);

}

function displayData_day2() {

    let data = getStoredData;
    let icon_url = `http://openweathermap.org/img/wn/${data.current.weather_icon}@2x.png`;

    document.getElementById("weather_icon").src = icon_url;
    document.getElementById('weatherDescription').innerHTML = data.day2.weather_description;
    document.getElementById('temp').innerHTML = Math.round(data.day2.temp);

    document.getElementById('mornTemp').innerHTML = Math.round(data.day2.morn_temp);
    document.getElementById('aftTemp').innerHTML = Math.round(data.day2.aft_temp);
    document.getElementById('eveTemp').innerHTML = Math.round(data.day2.eve_temp);

}

function displayData_day3() {

    let data = getStoredData;
    let icon_url = `http://openweathermap.org/img/wn/${data.current.weather_icon}@2x.png`;

    document.getElementById("weather_icon").src = icon_url;
    document.getElementById('weatherDescription').innerHTML = data.day3.weather_description;
    document.getElementById('temp').innerHTML = Math.round(data.day3.temp);

    document.getElementById('mornTemp').innerHTML = Math.round(data.day3.morn_temp);
    document.getElementById('aftTemp').innerHTML = Math.round(data.day3.aft_temp);
    document.getElementById('eveTemp').innerHTML = Math.round(data.day3.eve_temp);

}

function displayData_day4() {

    let data = getStoredData;
    let icon_url = `http://openweathermap.org/img/wn/${data.current.weather_icon}@2x.png`;

    document.getElementById("weather_icon").src = icon_url;
    document.getElementById('weatherDescription').innerHTML = data.day4.weather_description;
    document.getElementById('temp').innerHTML = Math.round(data.day4.temp);

    document.getElementById('mornTemp').innerHTML = Math.round(data.day4.morn_temp);
    document.getElementById('aftTemp').innerHTML = Math.round(data.day4.aft_temp);
    document.getElementById('eveTemp').innerHTML = Math.round(data.day4.eve_temp);

}

function displayData_day5() {

    let data = getStoredData;
    let icon_url = `http://openweathermap.org/img/wn/${data.current.weather_icon}@2x.png`;

    document.getElementById("weather_icon").src = icon_url;
    document.getElementById('weatherDescription').innerHTML = data.day5.weather_description;
    document.getElementById('temp').innerHTML = Math.round(data.day5.temp);

    document.getElementById('mornTemp').innerHTML = Math.round(data.day5.morn_temp);
    document.getElementById('aftTemp').innerHTML = Math.round(data.day5.aft_temp);
    document.getElementById('eveTemp').innerHTML = Math.round(data.day5.eve_temp);

}

function displayData_day6() {

    let data = getStoredData;
    let icon_url = `http://openweathermap.org/img/wn/${data.current.weather_icon}@2x.png`;

    document.getElementById("weather_icon").src = icon_url;
    document.getElementById('weatherDescription').innerHTML = data.day6.weather_description;
    document.getElementById('temp').innerHTML = Math.round(data.day6.temp);

    document.getElementById('mornTemp').innerHTML = Math.round(data.day6.morn_temp);
    document.getElementById('aftTemp').innerHTML = Math.round(data.day6.aft_temp);
    document.getElementById('eveTemp').innerHTML = Math.round(data.day6.eve_temp);

}

function displayData_day7() {

    let data = getStoredData;
    let icon_url = `http://openweathermap.org/img/wn/${data.current.weather_icon}@2x.png`;

    document.getElementById("weather_icon").src = icon_url;
    document.getElementById('weatherDescription').innerHTML = data.day7.weather_description;
    document.getElementById('temp').innerHTML = Math.round(data.day7.temp);

    document.getElementById('mornTemp').innerHTML = Math.round(data.day7.morn_temp);
    document.getElementById('aftTemp').innerHTML = Math.round(data.day7.aft_temp);
    document.getElementById('eveTemp').innerHTML = Math.round(data.day7.eve_temp);

}

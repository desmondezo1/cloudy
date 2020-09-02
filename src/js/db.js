


export { filterData as filterData };

// import createDB, {
//     bulkcreate,
//     // createEle,
//     // getData,
//     // SortObj
// } from "./module.js";

import { db } from './main.js';



async function filterData(data) {

    //console.log(`data_stored form ${more[0]} here is the data ${data}`);
    console.log(data);
    let city_query = data.city;
    //asign data of current day to variables
    let current_humidity = data.current.humidity,
        current_pressure = data.current.pressure,
        current_visibility = data.current.visibility,
        current_weather = data.current.weather[0].main,
        current_weather_description = data.current.weather[0].description,
        current_weather_icon = data.current.weather[0].icon,
        current_temperature = data.current.temp;

    //Creating variables to refrence data from the api
    //TEMPERATURE
    //asign daily Morning(morn) temperatures for 8days
    let day0_mornTemp = data.daily[0].feels_like.morn,
        day1_mornTemp = data.daily[1].feels_like.morn,
        day2_mornTemp = data.daily[2].feels_like.morn,
        day3_mornTemp = data.daily[3].feels_like.morn,
        day4_mornTemp = data.daily[4].feels_like.morn,
        day5_mornTemp = data.daily[5].feels_like.morn,
        day6_mornTemp = data.daily[6].feels_like.morn,
        day7_mornTemp = data.daily[7].feels_like.morn,
        //asign daily afternoon(day) temperatures for 8days
        day0_aftTemp = data.daily[0].feels_like.day,
        day1_aftTemp = data.daily[1].feels_like.day,
        day2_aftTemp = data.daily[2].feels_like.day,
        day3_aftTemp = data.daily[3].feels_like.day,
        day4_aftTemp = data.daily[4].feels_like.day,
        day5_aftTemp = data.daily[5].feels_like.day,
        day6_aftTemp = data.daily[6].feels_like.day,
        day7_aftTemp = data.daily[7].feels_like.day,
        //asign daily evening(eve) temperatures for 8days
        day0_eveTemp = data.daily[0].feels_like.eve,
        day1_eveTemp = data.daily[1].feels_like.eve,
        day2_eveTemp = data.daily[2].feels_like.eve,
        day3_eveTemp = data.daily[3].feels_like.eve,
        day4_eveTemp = data.daily[4].feels_like.eve,
        day5_eveTemp = data.daily[5].feels_like.eve,
        day6_eveTemp = data.daily[6].feels_like.eve,
        day7_eveTemp = data.daily[7].feels_like.eve,

        //asign daily main weather for 8days
        day0_weather = data.daily[0].weather[0].main,
        day1_weather = data.daily[1].weather[0].main,
        day2_weather = data.daily[2].weather[0].main,
        day3_weather = data.daily[3].weather[0].main,
        day4_weather = data.daily[4].weather[0].main,
        day5_weather = data.daily[5].weather[0].main,
        day6_weather = data.daily[6].weather[0].main,
        day7_weather = data.daily[7].weather[0].main;

    let weather_obj = {
        'city': city_query,
        'current': {
            'humidity': current_humidity,
            'temp': current_temperature,
            'weather_description': current_weather_description,
            'weather': current_weather,
            'visibility': current_visibility,
            'pressure': current_pressure,
            'weather_icon': current_weather_icon
        },
        'day0': {
            'morn_temp': day0_mornTemp,
            'aft_temp': day0_aftTemp,
            'eve_temp': day0_eveTemp,
            'weather': day0_weather
        },
        'day1': {
            'morn_temp': day1_mornTemp,
            'aft_temp': day1_aftTemp,
            'eve_temp': day1_eveTemp,
            'weather': day1_weather
        },
        'day2': {
            'morn_temp': day2_mornTemp,
            'aft_temp': day2_aftTemp,
            'eve_temp': day2_eveTemp,
            'weather': day2_weather
        },
        'day3': {
            'morn_temp': day3_mornTemp,
            'aft_temp': day3_aftTemp,
            'eve_temp': day3_eveTemp,
            'weather': day3_weather
        },
        'day4': {
            'morn_temp': day4_mornTemp,
            'aft_temp': day4_aftTemp,
            'eve_temp': day4_eveTemp,
            'weather': day4_weather
        },
        'day5': {
            'morn_temp': day5_mornTemp,
            'aft_temp': day5_aftTemp,
            'eve_temp': day5_eveTemp,
            'weather': day5_weather
        },
        'day6': {
            'morn_temp': day6_mornTemp,
            'aft_temp': day6_aftTemp,
            'eve_temp': day6_eveTemp,
            'weather': day6_weather
        },
        'day7': {
            'morn_temp': day7_mornTemp,
            'aft_temp': day7_aftTemp,
            'eve_temp': day7_eveTemp,
            'weather': day7_weather
        }
    };



    console.log(weather_obj);
    console.log('db below');

    return weather_obj;



}



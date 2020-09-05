


export { filterData as filterData };
export { storeData as storeData };

function storeData(data) {
    let stored;
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem('user', JSON.stringify(data));
        stored = true;
        console.log('stored inside');

    } else {
        console.log('get yourself an updated browser!!')
        stored = false;
    }

}


function getData(data) {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem('user', JSON.stringify(data));

    } else {
        console.log('get yourself an updated browser!!')
    }
}

function filterData(data) {

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
        day7_weather = data.daily[7].weather[0].main,

        //asign daily main weather for 8days
        day0_weather_icon = data.daily[0].weather[0].icon,
        day1_weather_icon = data.daily[1].weather[0].icon,
        day2_weather_icon = data.daily[2].weather[0].icon,
        day3_weather_icon = data.daily[3].weather[0].icon,
        day4_weather_icon = data.daily[4].weather[0].icon,
        day5_weather_icon = data.daily[5].weather[0].icon,
        day6_weather_icon = data.daily[6].weather[0].icon,
        day7_weather_icon = data.daily[7].weather[0].icon,


        //asign daily max-temp weather for 8days
        day0_max_temp = data.daily[0].temp.max,
        day1_max_temp = data.daily[1].temp.max,
        day2_max_temp = data.daily[2].temp.max,
        day3_max_temp = data.daily[3].temp.max,
        day4_max_temp = data.daily[4].temp.max,
        day5_max_temp = data.daily[5].temp.max,
        day6_max_temp = data.daily[6].temp.max,
        day7_max_temp = data.daily[7].temp.max,



        //asign daily main weather for 8days
        day0_weather_description = data.daily[0].weather[0].description,
        day1_weather_description = data.daily[1].weather[0].description,
        day2_weather_description = data.daily[2].weather[0].description,
        day3_weather_description = data.daily[3].weather[0].description,
        day4_weather_description = data.daily[4].weather[0].description,
        day5_weather_description = data.daily[5].weather[0].description,
        day6_weather_description = data.daily[6].weather[0].description,
        day7_weather_description = data.daily[7].weather[0].description;

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
            'weather': day0_weather,
            'weather_icon': day0_weather_icon,
            'weather_description': day0_weather_description
        },
        'day1': {
            'morn_temp': day1_mornTemp,
            'aft_temp': day1_aftTemp,
            'eve_temp': day1_eveTemp,
            'weather': day1_weather,
            'weather_icon': day1_weather_icon,
            'weather_description': day1_weather_description
        },
        'day2': {
            'morn_temp': day2_mornTemp,
            'aft_temp': day2_aftTemp,
            'eve_temp': day2_eveTemp,
            'weather': day2_weather,
            'weather_icon': day2_weather_icon,
            'weather_description': day2_weather_description
        },
        'day3': {
            'morn_temp': day3_mornTemp,
            'aft_temp': day3_aftTemp,
            'eve_temp': day3_eveTemp,
            'weather': day3_weather,
            'weather_icon': day3_weather_icon,
            'weather_description': day3_weather_description
        },
        'day4': {
            'morn_temp': day4_mornTemp,
            'aft_temp': day4_aftTemp,
            'eve_temp': day4_eveTemp,
            'weather': day4_weather,
            'weather_icon': day4_weather_icon,
            'weather_description': day4_weather_description
        },
        'day5': {
            'morn_temp': day5_mornTemp,
            'aft_temp': day5_aftTemp,
            'eve_temp': day5_eveTemp,
            'weather': day5_weather,
            'weather_icon': day5_weather_icon,
            'weather_description': day5_weather_description
        },
        'day6': {
            'morn_temp': day6_mornTemp,
            'aft_temp': day6_aftTemp,
            'eve_temp': day6_eveTemp,
            'weather': day6_weather,
            'weather_icon': day6_weather_icon,
            'weather_description': day6_weather_description
        },
        'day7': {
            'morn_temp': day7_mornTemp,
            'aft_temp': day7_aftTemp,
            'eve_temp': day7_eveTemp,
            'weather': day7_weather,
            'weather_icon': day7_weather_icon,
            'weather_description': day7_weather_description
        }
    };



    console.log(weather_obj);


    return weather_obj;



}



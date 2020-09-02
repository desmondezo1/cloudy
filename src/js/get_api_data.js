
export { getLongLat as api_data };
import { filterData } from './db.js';
import { bulkcreate } from './module.js';
import { db } from './main.js';


//Function converts users location to a gets users location as string and returns a lon lat value

async function getLongLat(city) {

    const apiKey = 'b3e1ac415747242eee97f3475463b299';

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    console.log(url);
    fetch(url)
        .then(
            res => res.json()
        )
        .then(
            loc => {

                let lon = loc.coord.lon,
                    lat = loc.coord.lon,
                    city_name = loc.name;
                console.log(city_name);
                return getWeatherData(lat, lon, apiKey, city_name);
            }
        ).catch(
            err => err.message
        )
}

//Function gets weather data from api
async function getWeatherData(lat, lon, apiKey, ...more) {

    let city_name = more[0];

    console.log(`v2: ${city_name}`);

    let url_2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&%20exclude=hourly,daily&appid=${apiKey}`;

    console.log(`stage 2 ${url_2}`);

    fetch(url_2)
        .then(res => res.json())
        .then(
            data => {
                console.log(data);

                data.city = city_name;

                return filterData(data, city_name)

                // return data;
            }
        ).then(
            (data_returned) => bulkcreate(db.city_data, data_returned)
        )
        .catch(err => err.message)
};

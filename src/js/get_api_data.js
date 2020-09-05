
export { getLongLat as api_data };
import { filterData } from './db.js';
import { storeData } from './db.js';
import { navigateTo, router } from './routes.js';
import showResults from './display-data.js';
import displayData_currentDay from './display-data.js';
//import { router } from './routes.js;'
//import { currentDay, day1, day2, day3, day4, day5, day6, day7 } from './display-data.js';



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
                localStorage.clear();
                localStorage.removeItem('user');
                console.log('data cleared');
                data.city = city_name;

                //showResults(data);
                return filterData(data, city_name)

                // return data;
            }
        ).then(
            data_returned => {
                storeData(data_returned);
                console.log('data stored!');
                //showResults(data_returned, navigateTo("/results"));
                router();
                navigateTo("/results");
            }
        ).then(() => {
            console.log('end of chain');
            displayData_currentDay();




        })
        .catch(err => err.message)
};

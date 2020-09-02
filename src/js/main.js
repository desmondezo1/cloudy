import { api_data } from './get_api_data.js';
import createDB, {
    bulkcreate,
    // createEle,
    // getData,
    // SortObj
} from "./module.js";




export let db = createDB("weather_app_db", {
    city_data: ` city, current, day0, day1, day2, day3, day4, day5, day6, day7 `
});




const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let city_val = document.getElementById('query').value;

    api_data(city_val);


});




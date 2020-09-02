import { api_data } from './get_api_data.js';
//import { filterData } from './db.js';




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

    // bulkcreate(db.city_data, filterData);

    // .then(
    //     (data) => {
    //         return filterData(data);
    //     }
    // )
    // .then(
    //     (data) => {
    //         return bulkcreate(db.city_data, data);
    //     }
    // );

    // insert values
    //let flag = bulkcreate(db.city_data, data);


});


//export { db as db };

//
// Define your database
//

// const appDB = (dbName, table) => {

//     const db = new Dexie(dbName)
//     db.version(1).stores(table);
//     db.open();

//     return db;
// }

//
// Put some data into it
// appDB('weather_db', {
//     city_data: 'city,current,day0,day1,day2,day3,day4,day5,day6,day7'
// });
//


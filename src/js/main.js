import { api_data } from './get_api_data.js';




const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let city_val = document.getElementById('query').value;

    api_data(city_val);


});



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

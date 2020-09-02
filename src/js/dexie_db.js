function createDB() {

    var db = new Dexie("weather_db");

    db.version(1).stores({
        city_data: ' city, current, day0, day1, day2, day3, day4, day5, day6, day7 '
    });

    console.log(db);

};


createDB();

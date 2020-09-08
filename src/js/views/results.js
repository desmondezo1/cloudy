
import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
    constructor(params) {

        super(params);

        this.setTitle("results");

        let day1 = this.name(document.getElementById("day1"));
        let day2 = this.name(document.getElementById("day2"));
        let day3 = this.name(document.getElementById("day3"));
        let day4 = this.name(document.getElementById("day4"));
        let day5 = this.name(document.getElementById("day5"));
        let day6 = this.name(document.getElementById("day6"));
        let day7 = this.name(document.getElementById("day7"));

        // let day1 = document.getElementById("day1"),
        //     day2 = document.getElementById("day2"),
        //     day3 = document.getElementById("day3"),
        //     day4 = document.getElementById("day4"),
        //     day5 = document.getElementById("day5"),
        //     day6 = document.getElementById("day6"),
        //     day7 = document.getElementById("day7");

        // this.listen(this.removeTag("./src/css/style.css"));
        // this.listen(this.removeTag("./src/css/results.css"));

        // this.createLink("./src/css/style.css");
        this.createLink("./src/css/results.css");
        this.name(this.displayData_currentDay);
        // this.name(this.showDays);
        //this.displayData_currentDay();

        //this.name(this.checkScroll(this.isInViewport(day1), day1));

    }

    async getHtml() {
        return `
        <h3 class="city-name"><a href="./"><i class="fas fa-map-marker-alt location-icon"></i><span id="city"> Port Harcourt </span></a></h3>
        <section class="scroll-select">
            <div class="scroll-links">
                <a href="#day7" data-link>Current</a>
                <a href="" data-link>Monday</a>
                <a href="" data-link>Tuesday</a>
                <a href="" data-link>Wednesday</a>
                <a href="" data-link>Thursday</a>
                <a href="" data-link>Friday</a>
                <a href="" data-link>Saturday</a>
                <a href="" data-link>Sunday</a>
            </div>
        </section>


        <section class="display-result" id="displayResults">
            <div class="card" id="day0">
                <img class="weather-icon" id="weather_icon_day0" src=" http://openweathermap.org/img/wn/09d@2x.png" alt="" srcset="">
                <h1 id="weatherDescription_day0">Rainy</h1>

                <p class="current-temp" ><span id="temp_day0">75</span><span>&#8451;</span></p>


                <!-- list of weather temp during the day -->

                <div class="day-temp-group">
                    <div class="list morning">
                        <p><span class="day">Morning</span> <span class="day-temp"><span id="mornTemp_day0">24 </span><span>&#8451;</span></span></p>
                    </div>
                    <div class="list afternoon">
                        <p><span class="day">Afternoon</span> <span class="day-temp"><span id="aftTemp_day0">24 </span><span>&#8451;</span></span></p>
                    </div>
                    <div class="list evening">
                        <p><span class="day">Evening</span> <span class="day-temp"><span id="eveTemp_day0">24</span> <span>&#8451;</span></span></p>
                    </div>
                </div>
            </div>

            <div class="card" id="day1">
                <img class="weather-icon" id="weather_icon_day1" src=" http://openweathermap.org/img/wn/09d@2x.png" alt="" srcset="">
                <h1 id="weatherDescription_day1">Rainy</h1>

                <p class="current-temp" ><span id="temp_day1">75</span><span>&#8451;</span></p>


                <!-- list of weather temp during the day -->

                <div class="day-temp-group">
                    <div class="list morning">
                        <p><span class="day">Morning</span> <span class="day-temp"><span id="mornTemp_day1">24 </span><span>&#8451;</span></span></p>
                    </div>
                    <div class="list afternoon">
                        <p><span class="day">Afternoon</span> <span class="day-temp"><span id="aftTemp_day1">24 </span><span>&#8451;</span></span></p>
                    </div>
                    <div class="list evening">
                        <p><span class="day">Evening</span> <span class="day-temp"><span id="eveTemp_day1">24</span> <span>&#8451;</span></span></p>
                    </div>
                </div>
            </div>


            <div class="card" id="day2">
            <img class="weather-icon" id="weather_icon_day2" src=" http://openweathermap.org/img/wn/09d@2x.png" alt="" srcset="">
            <h1 id="weatherDescription_day2">Rainy</h1>

            <p class="current-temp" ><span id="temp_day2">75</span><span>&#8451;</span></p>


            <!-- list of weather temp during the day -->

            <div class="day-temp-group">
                <div class="list morning">
                    <p><span class="day">Morning</span> <span class="day-temp"><span id="mornTemp_day2">24 </span><span>&#8451;</span></span></p>
                </div>
                <div class="list afternoon">
                    <p><span class="day">Afternoon</span> <span class="day-temp"><span id="aftTemp_day2">24 </span><span>&#8451;</span></span></p>
                </div>
                <div class="list evening">
                    <p><span class="day">Evening</span> <span class="day-temp"><span id="eveTemp_day2">24</span> <span>&#8451;</span></span></p>
                </div>
            </div>
        </div>



            <div class="card" id="day3">
                <img class="weather-icon" id="weather_icon_day3" src=" http://openweathermap.org/img/wn/09d@2x.png" alt="" srcset="">
                <h1 id="weatherDescription_day3">Rainy</h1>

                <p class="current-temp" ><span id="temp_day3">75</span><span>&#8451;</span></p>


                <!-- list of weather temp during the day -->

                <div class="day-temp-group">
                    <div class="list morning">
                        <p><span class="day">Morning</span> <span class="day-temp"><span id="mornTemp_day3">24 </span><span>&#8451;</span></span></p>
                    </div>
                    <div class="list afternoon">
                        <p><span class="day">Afternoon</span> <span class="day-temp"><span id="aftTemp_day3">24 </span><span>&#8451;</span></span></p>
                    </div>
                    <div class="list evening">
                        <p><span class="day">Evening</span> <span class="day-temp"><span id="eveTemp_day3">24</span> <span>&#8451;</span></span></p>
                    </div>
                </div>
            </div>


            <div class="card" id="day4">
                <img class="weather-icon" id="weather_icon_day4" src=" http://openweathermap.org/img/wn/09d@2x.png" alt="" srcset="">
                <h1 id="weatherDescription_day4">Rainy</h1>

                <p class="current-temp" ><span id="temp_day4">75</span><span>&#8451;</span></p>


                <!-- list of weather temp during the day -->

                <div class="day-temp-group">
                    <div class="list morning">
                        <p><span class="day">Morning</span> <span class="day-temp"><span id="mornTemp_day4">24 </span><span>&#8451;</span></span></p>
                    </div>
                    <div class="list afternoon">
                        <p><span class="day">Afternoon</span> <span class="day-temp"><span id="aftTemp_day4">24 </span><span>&#8451;</span></span></p>
                    </div>
                    <div class="list evening">
                        <p><span class="day">Evening</span> <span class="day-temp"><span id="eveTemp_day4">24</span> <span>&#8451;</span></span></p>
                    </div>
                </div>
            </div>



            <div class="card" id="day5">
                <img class="weather-icon" id="weather_icon_day5" src=" http://openweathermap.org/img/wn/09d@2x.png" alt="" srcset="">
                <h1 id="weatherDescription_day5">Rainy</h1>

                <p class="current-temp" ><span id="temp_day5">75</span><span>&#8451;</span></p>


                <!-- list of weather temp during the day -->

                <div class="day-temp-group">
                    <div class="list morning">
                        <p><span class="day">Morning</span> <span class="day-temp"><span id="mornTemp_day5">24 </span><span>&#8451;</span></span></p>
                    </div>
                    <div class="list afternoon">
                        <p><span class="day">Afternoon</span> <span class="day-temp"><span id="aftTemp_day5">24 </span><span>&#8451;</span></span></p>
                    </div>
                    <div class="list evening">
                        <p><span class="day">Evening</span> <span class="day-temp"><span id="eveTemp_day5">24</span> <span>&#8451;</span></span></p>
                    </div>
                </div>
            </div>

            <div class="card" id="day6">
                <img class="weather-icon" id="weather_icon_day6" src=" http://openweathermap.org/img/wn/09d@2x.png" alt="" srcset="">
                <h1 id="weatherDescription_day6">Rainy</h1>

                <p class="current-temp" ><span id="temp_day6">75</span><span>&#8451;</span></p>


                <!-- list of weather temp during the day -->

                <div class="day-temp-group">
                    <div class="list morning">
                        <p><span class="day">Morning</span> <span class="day-temp"><span id="mornTemp_day6">24 </span><span>&#8451;</span></span></p>
                    </div>
                    <div class="list afternoon">
                        <p><span class="day">Afternoon</span> <span class="day-temp"><span id="aftTemp_day6">24 </span><span>&#8451;</span></span></p>
                    </div>
                    <div class="list evening">
                        <p><span class="day">Evening</span> <span class="day-temp"><span id="eveTemp_day6">24</span> <span>&#8451;</span></span></p>
                    </div>
                </div>
            </div>

            <div class="card" id="day7">
                <img class="weather-icon" id="weather_icon_day7" src=" http://openweathermap.org/img/wn/09d@2x.png" alt="" srcset="">
                <h1 id="weatherDescription_day7">Rainy</h1>

                <p class="current-temp" ><span id="temp_day7">75</span><span>&#8451;</span></p>


                <!-- list of weather temp during the day -->

                <div class="day-temp-group">
                    <div class="list morning">
                        <p><span class="day">Morning</span> <span class="day-temp"><span id="mornTemp_day7">24 </span><span>&#8451;</span></span></p>
                    </div>
                    <div class="list afternoon">
                        <p><span class="day">Afternoon</span> <span class="day-temp"><span id="aftTemp_day7">24 </span><span>&#8451;</span></span></p>
                    </div>
                    <div class="list evening">
                        <p><span class="day">Evening</span> <span class="day-temp"><span id="eveTemp_day7">24</span> <span>&#8451;</span></span></p>
                    </div>
                </div>
            </div>
        </section>

        <!-- section displaying search bar -->
        <section class="search_section">
        <div class="err-msg" id="errorMsg"></div>
        <form id="myForm" name="myForn" >
        <div class="search_input">
            <input type="search" name="search" results=5 placeholder=Search... id="searchField">

            <button type="submit" class="search_btn">
                <i class="fas fa-search"></i>
            </button>

        </div>
    </form>
        </section>


        `;
    }
}

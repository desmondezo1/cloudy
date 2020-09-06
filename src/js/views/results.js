
import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
    constructor(params) {

        super(params);

        this.setTitle("results");

        // this.listen(this.removeTag("./src/css/style.css"));
        // this.listen(this.removeTag("./src/css/results.css"));

        // this.createLink("./src/css/style.css");
        this.createLink("./src/css/results.css");
        this.name(this.displayData_currentDay);


    }

    async getHtml() {
        return `
        <h3 class="city-name"><i class="fas fa-map-marker-alt location-icon"></i><span id="city"> Port Harcourt </span></h3>
        <section class="scroll-select">
            <div class="scroll-links">
                <a href="" data-link>Current</a>
                <a href="" data-link>Monday</a>
                <a href="" data-link>Tuesday</a>
                <a href="" data-link>Wednesday</a>
                <a href="" data-link>Thursday</a>
                <a href="" data-link>Friday</a>
                <a href="" data-link>Saturday</a>
                <a href="" data-link>Sunday</a>
            </div>
        </section>


        <section class="display-result">
            <div class="card">
                <img class="weather-icon" id="weather_icon" src=" http://openweathermap.org/img/wn/09d@2x.png" alt="" srcset="">
                <h1 id="weatherDescription">Rainy</h1>

                <p class="current-temp" ><span id="temp">75</span><span>&#8451;</span></p>


                <!-- list of weather temp during the day -->

                <div class="day-temp-group">
                    <div class="list morning">
                        <p><span class="day">Morning</span> <span class="day-temp"><span id="mornTemp">24 </span><span>&#8451;</span></span></p>
                    </div>
                    <div class="list afternoon">
                        <p><span class="day">Afternoon</span> <span class="day-temp"><span id="aftTemp">24 </span><span>&#8451;</span></span></p>
                    </div>
                    <div class="list evening">
                        <p><span class="day">Evening</span> <span class="day-temp"><span id="eveTemp">24</span> <span>&#8451;</span></span></p>
                    </div>
                </div>
            </div>
        </section>

        <!-- section displaying search bar -->
        <section class="search_section">

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

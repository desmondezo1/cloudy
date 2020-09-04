
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {

        super(params);

        this.setTitle("results");
        this.createLink("./src/css/style.css");
        this.createLink("./src/css/results.css");


    }

    async getHtml() {
        return `
        <h3 class="city-name"><i class="fas fa-map-marker-alt location-icon"></i> Port Harcourt </h3>
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
                <img class="weather-icon" src=" http://openweathermap.org/img/wn/09d@2x.png" alt="" srcset="">
                <h1>Rainy</h1>

                <p class="current-temp">75<span>&#8451;</span></p>


                <!-- list of weather temp during the day -->

                <div class="day-temp-group">
                    <div class="list morning">
                        <p><span class="day">Morning</span> <span class="day-temp">24 <span>&#8451;</span></span></p>
                    </div>
                    <div class="list afternoon">
                        <p><span class="day">Afternoon</span> <span class="day-temp">24 <span>&#8451;</span></span></p>
                    </div>
                    <div class="list evening">
                        <p><span class="day">Evening</span> <span class="day-temp">24 <span>&#8451;</span></span></p>
                    </div>
                </div>
            </div>
        </section>

        <!-- section displaying search bar -->
        <section class="search_section">

            <form action="">
                <div class="search_input">
                    <input type="search" name="search" results="5" placeholder="Search City..." id="searchField">

                    <button type="submit" class="search_btn">
                        <i class="fas fa-search"></i>
                    </button>

                </div>
            </form>
        </section>

        `;
    }
}

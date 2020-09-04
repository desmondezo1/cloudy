
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {

        super(params);

        this.setTitle("more-info");

        this.createLink("./src/css/style.css");
        this.createLink("./src/css/results.css");
        this.createLink("./src/css/moredtails.css");


    }

    async getHtml() {
        return `
        <h3 class="city-name"><i class="fas fa-map-marker-alt location-icon"></i> Port Harcourt </h3>
        <section id="wrapper" class="display-result">
            <div class="card">

                <div class="description">
                    <p>It's
                    <h1>Rainy</h1>
                    <p>outside</p>
                </div>
                <div class="icon-img">
                    <img class="weather-icon" src=" http://openweathermap.org/img/wn/09d@2x.png" alt="" srcset="">
                </div>
                <div class="list-name">
                    <ul class="detail-titles">
                        <li>Temperature</li>
                        <li>Visibility</li>
                        <li>Humidity</li>
                        <li>wind speed</li>
                    </ul>
                </div>
                <div class="detail-list">
                    <ul class="weather-details">
                        <li>24</li>
                        <li>Low</li>
                        <li>35%</li>
                        <li>0.1km/h</li>
                    </ul>
                </div>


            </div>
        </section>
        `;
    }
}

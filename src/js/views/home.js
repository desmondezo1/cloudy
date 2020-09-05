
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {

        super(params);

        this.setTitle("Home");

        this.createLink("./src/css/style.css");;
    }

    async getHtml() {
        return `
        <!-- section displaying search bar -->
        <section class="search_section">
            <h1>Cloudy</h1>
            <p>Get weather updates fast </p>
            <form id="myForm" name="myForn" >
                <div class="search_input">
                    <input type="search" name="search" results=5 placeholder=Search... id="searchField">

                    <button type="submit" class="search_btn">
                        <i class="fas fa-search"></i>
                    </button>

                </div>
            </form>
        </section>

        <!-- section diplaying search results -->
        <section class="display_results_section">

        </section>
        `;
    }
}

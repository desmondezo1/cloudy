
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {

        super(params);

        this.setTitle("Home");
        this.removeTag("./src/css/results.css");
        this.removeTag("./src/css/moredetails.css");
        // this.listen(this.removeTag("./src/css/style.css"));

        // this.createLink("./src/css/style.css");;
    }

    async getHtml() {
        return `
        <!-- section displaying search bar -->
        <section class="search_section">
            <h1>Cloudy</h1>
            <p>Get weather updates fast </p>
            <div class="err-msg" id="errorMsg"></div>
            <form id="myForm" name="myForn" >
                <div class="search_input">
                    <input type="search" name="search" results=5 placeholder="Search City..." id="searchField">
                    
                    <button type="submit" class="search_btn">
                        <i class="fas fa-search"></i>
                    </button>

                </div>
            </form>
        </section>

        `;
    }
}

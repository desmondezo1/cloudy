export default class {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;

    }


    createLink(url) {
        var link = document.createElement('link');
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = url;

        document.head.appendChild(link);
    }

    async getHtml() {
        return "";
    }
}
import home from "./views/home.js";
import Results from "./views/results.js";
import MoreInfo from "./views/more-info.js";
import currentDay from "./display-data.js";
// export { router as router };
export { navigateTo as navigateTo };
export { router as router };



const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

//Navigate to
const navigateTo = url => {
    history.pushState(null, null, url);

    console.log(`navigated to ${url}`);
    router();

};

const router = async () => {
    const routes = [
        { path: "/", view: home },
        { path: "/results", view: Results },
        // { path: "/results/:day", view: Results },
        { path: "/more-info", view: MoreInfo }
    ];

    // Testing each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();

    function updatePage() {

        console('time loop');
        let res = '/results';

        let page = location.pathname.match(res);

        if (page !== null) {
            currentDay();
            //ran = true;
        }
    }

    (() => { setTimeout(updatePage, 100) });

    // let res = '/results';

    // let page = location.pathname.match(res);

    // if (page !== null) {
    //     currentDay();
    // }

};

// window.addEventListener("popstate", router);

// document.addEventListener("DOMContentLoaded", () => {
//     document.body.addEventListener("click", e => {
//         if (e.target.matches("[data-link]")) {
//             e.preventDefault();
//             navigateTo(e.target.href);
//         }
//     });

//     router();
// });
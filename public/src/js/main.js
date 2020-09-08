import { api_data } from './get_api_data.js';

import { navigateTo, router } from './routes.js';
import currentDay from "./display-data.js";




window.addEventListener("popstate", router);

// let card = document.getElementById('day0');

// document.addEventListener("DOMContentLoaded", () => {
//     stateChange(card);
// });

// function stateChange(div) {
//     setTimeout(function () {


//         if (div !== null) {
//             console.log("ran don run");
//             currentDay();
//         }


//     }, 500);
// }


// document.addEventListener("DOMContentLoaded", () => {
//     let res = '/results';
//     let page = location.pathname.match(res)
//     if (page !== null) {
//         currentDay();
//     }
// });







document.addEventListener("DOMContentLoaded", () => {

    function showSpinner(spinner) {
        spinner.className = "show";
        setTimeout(() => {
            spinner.className = spinner.className.replace("show", "");
        }, 5000);
    }


    const spinner = document.getElementById("spinner");


    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    showSpinner(spinner);
    router();
});



// document.onreadystatechange = () => {
//     if (document.readyState === 'complete') {
//         // document ready

//         console.log("ready state");
//     }
// };

document.addEventListener('input', function () {
    const myForm = document.getElementById('myForm');

    function listenToForm() {
        myForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let city_val = document.getElementById('searchField').value;
            // loaded = true;
            api_data(city_val);



        });
    }

    if (myForm !== null) { listenToForm(); }

});

//test();

    // (() => {
    //     let loaded = false;
    //     document.addEventListener('DOMContentLoaded', function () {


    //         const myForm = document.getElementById('myForm');
    //         if (myForm !== null) { listenToForm(); }


    //         function listenToForm() {
    //             myForm.addEventListener('submit', (e) => {
    //                 e.preventDefault();
    //                 let city_val = document.getElementById('searchField').value;
    //                 loaded = true;
    //                 api_data(city_val);



    //             });
    //         }

    //     });

    //     if (loaded == true) {
    //         const myForm = document.getElementById('myForm');
    //         if (myForm !== null) { listenToForm(); }


    //         function listenToForm() {
    //             myForm.addEventListener('submit', (e) => {
    //                 e.preventDefault();
    //                 let city_val = document.getElementById('searchField').value;
    //                 loaded = false;
    //                 api_data(city_val);



    //             });
    //         }
    //     }

    //     console.log(loaded);
    // })();


// if ("serviceWorker" in navigator) {
//     navigator.serviceWorker.register("../../sw.js").then(registration => {
//         console.log("sw registered");
//         console.log(registration);
//     }).catch(
//         error => {
//             console.log("reg of service worker failed");
//             console.log(error);
//         }
//     );
// }

// function updatePage() {

//     console('time loop');
//     let res = '/results';

//     let page = location.pathname.match(res);

//     if (page !== null) {
//         currentDay();
//         //ran = true;
//     }
// }

// (() => { setTimeout(updatePage, 100) });


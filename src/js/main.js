import { api_data } from './get_api_data.js';
import { router } from './routes.js';


window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});

// document.onreadystatechange = () => {
//     if (document.readyState === 'complete') {
//         // document ready

//         console.log("ready state");
//     }
// };

let test = document.addEventListener('input', function () {
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


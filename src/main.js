


const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let query = document.getElementById('query').value;


    const frmData = new FormData(myForm);


    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + query + '&units=metric&appid=b3e1ac415747242eee97f3475463b299';

    fetch(url)
        .then(
            (resp) => resp.json()
        )
        .then(
            (data) => {
                console.log(data);


                //diplay, weather, temperature, humidity
                if (data.cod === 200) {

                    let temp = document.getElementById('temp'),
                        humidity = document.getElementById('humidity'),
                        weather = document.getElementById('weather'),
                        city = document.getElementById('city');

                    temp.innerHTML = data.main.temp;
                    city.innerHTML = data.name;
                    weather.innerHTML = data.weather[0].main;
                }

                //if there is message from api
                if (data.message !== undefined) {
                    document.getElementById('msg').innerHTML = data.message;
                }

            }
        )
        .catch(
            (res) => {
                console.log(res);
                document.getElementById('msg').innerHTML = "There was an error please try again";
            }
        );



});






//     document.getElementById('check').addEventListener('click', getdata);

// function getdata() {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET',
//         'http://api.openweathermap.org/data/2.5/weather?q=London&appid=b3e1ac415747242eee97f3475463b299', true
//     );

//     xhr.onload = function () {

//         if (this.status === 200) {

//             var data = JSON.parse(this.responseText);

//             // for (let i in data) {}
//             document.getElementById('dis').innerHTML = data.main.humidity;


//             document.getElementById('dis').innerHtml = data;
//             console.log(data);

//         }
//     }

//     xhr.send();
// }
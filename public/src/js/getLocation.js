function getLocation() { navigator.geolocation.getCurrentPosition(success, error); }


//Function to get Userlocation
export function getUserLocation() {

    //check for stored location and retreive if founds
    if (!navigator.geolocation) {
        console.log('browser doesnt support location');

    } else {
        //getGeloactionfromdevice
        getLocationJs.getLocation();

        function userLocation(loc) {


            let geoLocation = {
                'lat': loc.coords.latitude,
                'lon': loc.coords.longitude
            }
            console.log(geoLocation);
            //return geolocation;
        }

        function error() {
            console.log('could not get location');
        };
    }
    //store location data

}
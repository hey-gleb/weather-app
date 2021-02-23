

window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureElement = document.querySelector('.temperature__value');
    let cityElement = document.querySelector('.location__title');
    let weatherDescriptionElement = document.querySelector('.temperature__weather-description');
    const apiKey = '01c589c6c9b479b60399704fb4f0b10e';

    if  (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&mode=json&units=metric&appid=${apiKey}`;

            fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                const { name, weather } = data;
                const { temp } = data.main;
                const [ current ] = weather;
                temperatureElement.textContent = temp;
                cityElement.textContent = name; 
                weatherDescriptionElement.textContent = current.main;
            })
            .catch(error => {
                console.log(error);
            })
        });
    }
});
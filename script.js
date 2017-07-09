var place = document.getElementById('place');
var temperature = document.getElementById('temperature');
var weather = document.getElementById('weather');

function error(){
    place.innerHTML = 'ERROR!';
    place.style.color = 'red';
    place.style.fontSize = '40px';
    temperature.innerHTML = 'reload the website';
}
function success(position){
    position = position.coords;
    axios.get('http://api.openweathermap.org/data/2.5/weather?lat='+position.latitude+'&lon='+position.longitude+'&appid=f99af2ba5ed22e8a08a0c0fa72639724')
        .then(function(data){
            data = data.data;
            
            var temp = data.main.temp;
            var weatherDesc = data.weather[0].description;
            var img = 'http://openweathermap.org/img/w/'+data.weather[0].icon+'.png';

            place.innerHTML = data.name;
            temperature.innerHTML = Math.round(temp-273) + ' C';
            weather.innerHTML = weatherDesc+' <img src="'+ img +'"/>';
            
        }).catch(error);
}

navigator.geolocation.getCurrentPosition(success,error,{timeout: 4000});
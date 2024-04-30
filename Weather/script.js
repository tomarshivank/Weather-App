const options = {
	method: "GET",
	headers: {
	  "X-RapidAPI-Key": "07db5e573fmsh4d836a771996adfp132427jsnf66f0b7f65a1",
	  "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
	},
  };
  
  const getWeather = (city = "Delhi") => {
	const cityname = document.querySelector('.cityname');
	const temp = document.querySelector('.temp');
	const humidity = document.querySelector('.humidity');
	const min_temp = document.querySelector('.min_temp');
	const max_temp = document.querySelector('.max_temp');
	const wind_speed = document.querySelector('.wind_speed');
	const wind_degrees = document.querySelector('.wind_degrees');
	const sunrise = document.querySelector('.sunrise_time'); 
	const sunset = document.querySelector('.sunset_time'); 
	const daytime = document.querySelector('.day'); 
  
	cityname.innerHTML = city;
	try {
	  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
		  console.log(response);
		  temp.innerHTML = response.temp;
		  humidity.innerHTML = response.humidity;
		  min_temp.innerHTML = response.min_temp;
		  max_temp.innerHTML = response.max_temp;
		  wind_speed.innerHTML = response.wind_speed;
		  wind_degrees.innerHTML = response.wind_degrees;
  
		  const sunriseTime = new Date(response.sunrise * 1000);
		  const sunsetTime = new Date(response.sunset * 1000);
  
		  const formatTime = (date) => {
			return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
		  };
  
		  sunrise.innerHTML = formatTime(sunriseTime);
		  sunset.innerHTML = formatTime(sunsetTime);
		  const durationInMillis = sunsetTime.getTime() - sunriseTime.getTime();
			const durationHours = Math.floor(durationInMillis / (1000 * 60 * 60));
			const durationMinutes = Math.floor((durationInMillis % (1000 * 60 * 60)) / (1000 * 60));
			daytime.innerHTML = `${durationHours.toString().padStart(2, '0')}:${durationMinutes.toString().padStart(2, '0')}`;
		})
	} catch (error) {
	  console.error(error);
	}
  }
  
  document.getElementById('delhi').addEventListener('click', () => {
	getWeather('Delhi');
  });
  
  document.getElementById('kasol').addEventListener('click', () => {
	getWeather('kasol');
  });
  
  document.getElementById('srinagar').addEventListener('click', () => {
	getWeather('Srinagar');
  });
  
  
document.getElementById('submit').addEventListener('click', (e) => {
	e.preventDefault();
	const cityInput = document.getElementById('city');
	if (cityInput.value.trim() !== '') {
		getWeather(cityInput.value.trim());
	}
});

const fWeather = (city) => {
	const table = document.getElementById(city);
	try {
		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			const htmlString = `
				<th scope="row" >${city}</th>
                <td>${response.temp}</td>
                <td>${response.humidity}</td>
                <td>${response.min_temp}</td>
                <td>${response.max_temp}</td>
                <td>${response.wind_speed}</td>
        `;
		console.log(htmlString);
        table.innerHTML = htmlString;
    });
	} catch (error) {
		console.error(error);
	}
}


getWeather(); 
fWeather('Amsterdam');
fWeather('New York');
fWeather('Melbourne');
fWeather('Mumbai');
fWeather('Tokyo');
fWeather('Shanghai');
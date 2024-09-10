const apiKey = 'e3b7aa0cb6babec1764e5bf036ce3ebd';
let arr;

async function fetchData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    arr = data;
    console.log(arr);
    let temp = arr.main.temp - 273.15;

    

    // console.log(arr.visibility);
    // console.log(city.charAt(0).toUpperCase() + city.slice(1).toLowerCase());
    document.getElementsByClassName('city')[0].innerHTML = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();  
    document.getElementsByClassName("temperature")[0].innerHTML = temp.toFixed(2) + '°C';
    document.getElementsByClassName('description')[0].innerHTML = arr.weather[0].description;
    document.getElementsByClassName('feels_like')[0].innerHTML = 'feels like: ' + parseInt(arr.main.feels_like -273.15) + '°C';
    document.getElementsByClassName('temp')[0].innerHTML = 'max/min temp: ' + parseInt(arr.main.temp_max - 273.15) + '°C/' + parseInt(arr.main.temp_min - 273.15) + '°C';
    document.getElementsByClassName('humidity')[0].innerHTML = 'humidity: ' + arr.main.humidity + '%';
    document.getElementsByClassName('wind_speed')[0].innerHTML = 'wind speed: ' + arr.wind.speed + ' km/hrs';
    document.getElementsByClassName('visiblity')[0].innerHTML = 'visibility: ' + parseInt(arr.visibility/1000) +'km';

    let cloud = arr.weather[0].description;
    let image = document.getElementsByTagName("img")[0];
    console.log(image);

    switch (cloud) {
      case 'clear sky':
        image.src = './images/clear cloud.webp';
        break;
      case 'few clouds':
        image.src = './images/few_clouds.jpg';
        break;
      case 'broken clouds':
        image.src = './images/broken_clouds.jpg';
        break;
      case 'scattered clouds':
        image.src = './images/scattered_clouds.jpg';
        break;
      case 'overcast clouds':
        image.src = './images/overcast.jpg';
        break;
      case 'rain':
      case 'light rain':
        image.src = './images/rain.jpg';
        break;
      default:
        image.src = './images/default.png';  
        break;
    }

  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

document.getElementsByClassName("search")[0].addEventListener('click', () => {
  let city = document.getElementsByClassName("input_feild")[0].value;
  // document.getElementsByClassName('weather')[0].computedStyleMap.display = none;
  fetchData(city);
});

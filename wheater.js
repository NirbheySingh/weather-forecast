const apiKey = 'e3b7aa0cb6babec1764e5bf036ce3ebd';
let city = 'noida';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
let arr;

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    arr = data;
    console.log(arr);
    let temp = arr.main.temp - 273.15;
    console.log(arr.visibility);
    document.getElementsByClassName('city')[0].innerHTML = city;  
    document.getElementsByClassName("temperature")[0].innerHTML = temp.toFixed(2)+'°C';
    document.getElementsByClassName('description')[0].innerHTML = arr.weather[0].description;
    document.getElementsByClassName('feels_like')[0].innerHTML = 'feels like : '+ arr.main.feels_like;
    document.getElementsByClassName('temp')[0].innerHTML = 'max temp/min temp : '+ parseInt(arr.main.temp_max - 273.15 )+'°C/'+ parseInt(arr.main.temp_min - 273.15)+'°C';
    document.getElementsByClassName('humidity')[0].innerHTML = 'humidity : '+ arr.main.humidity + '%';
    document.getElementsByClassName('wind_speed')[0].innerHTML = 'wind speed : '+ arr.wind.speed + ' km/hrs';
    document.getElementsByClassName('visiblity')[0].innerHTML = 'visibility : ' + arr.visibility;
  
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

fetchData();




let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
/*coord.lon 	緯度
coord.lat 	経度
weather[0].description 	天気
main.temp_min 	最低気温
main.temp_max 	最高気温
main.humidity 	湿度
wind.speed 	風速
wind.deg 	風向
name 	都市名*/

let lon = data.coord.lon;
let lat = data.coord.lat;
let weatherDescription = data.weather[0].description;
let tempMin = data.main.temp_min;
let tempMax = data.main.temp_max;
let humidity = data.main.humidity;
let windSpeed = data.wind.speed;
let windDeg = data.wind.deg;
let cityName = data.name;

console.log("緯度:", lat);
console.log("経度:", lon);
console.log("天気:", weatherDescription);
console.log("最低気温:", tempMin, "°C");
console.log("最高気温:", tempMax, "°C");
console.log("湿度:", humidity, "%");
console.log("風速:", windSpeed, "m/s");
console.log("風向:", windDeg, "°");
console.log("都市名:", cityName);


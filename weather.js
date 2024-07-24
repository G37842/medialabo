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
name 	都市名

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
console.log("都市名:", cityName);*/
document.body.classList.add('background-image');
let lon=document.querySelector('#lon');
let lat=document.querySelector('#lat');
let description=document.querySelector('#weatherDescription');
let tempmin=document.querySelector('#tempmin');
let tempmax=document.querySelector('#tempmax');
let humidity=document.querySelector('#humidity');
let speed=document.querySelector('#speed');
let deg=document.querySelector('#deg');
let cityName=document.querySelector('#cityName');

let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);
b.addEventListener('click', changeIamge);

function sendRequest() {
  let s = document.querySelector('select#ct');
  let idx = s.selectedIndex;  // idx 番目の option が選択された

  let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
  let o = os.item(idx); 
  let id =o.getAttribute('value') 
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+ id +'.json';
 
  


  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }

  // data をコンソールに出力
  console.log(data);

    lon.textContent="経度："+data.coord.lon;
    lat.textContent="緯度："+data.coord.lat;
    weatherDescription.textContent="天気："+data.weather[0].description;
    tempmin.textContent="最低気温："+data.main.temp_min;
    tempmax.textContent="最高気温："+data.main.temp_max;
    humidity.textContent="湿度："+data.main.humidity;
    speed.textContent="風速："+data.wind.speed;
    deg.textContent="風向："+data.wind.deg;
    cityName.textContent="都市名："+data.name;
}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}

function changeIamge(){
  let s = document.querySelector('select#ct');
  let idx = s.selectedIndex;  // idx 番目の option が選択された

  let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
  let o = os.item(idx); 
  let id =o.getAttribute('value') 
  switch(id) {
    case '1816670':
    document.body.style.backgroundImage = "url('https://pic.616pic.com/bg_w1180/00/09/09/kBvHlcy6lD.jpg')";
    break;
    case '360630':
    document.body.style.backgroundImage = "url('https://imgs.699pic.com/images/500/678/336.jpg!list1x.v2')";
    break;
    case '524901':
    document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAuy-Sxm2v9XK69ze3s2-Mu2PC6awy2zFM-w&s')";
    break;
    case '993800':
    document.body.style.backgroundImage = "url('https://media.gettyimages.com/id/812977596/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E3%83%A8%E3%83%8F%E3%83%8D%E3%82%B9%E3%83%96%E3%83%AB%E3%82%B0%E6%97%A5%E3%81%AE%E5%87%BA%E3%83%95%E3%83%AC%E3%82%A2%E6%99%AF%E8%A6%B3.jpg?s=612x612&w=gi&k=20&c=d87-Z4ovOPtMcRhm26cL06jQW5IfIxuVFYMN4e6XsAo=')";
    break;
    case '1850147':
    document.body.style.backgroundImage = "url('https://media.gettyimages.com/id/904453184/zh/%E7%85%A7%E7%89%87/%E5%AF%8C%E5%A3%AB%E5%B1%B1%E5%92%8C%E6%9D%B1%E4%BA%AC%E5%9C%B0%E5%B9%B3%E7%B7%9A.jpg?s=612x612&w=gi&k=20&c=cwnJhedeeF9dKHj5lS3MC_lYit4aqSv9Qxztp-wfr30=')";
    break;
    case '1880252':
    document.body.style.backgroundImage = "url('https://imgs.699pic.com/images/500/351/908.jpg!list1x.v2')";
    break;
    case '2147714':
    document.body.style.backgroundImage = "url('https://imgs.699pic.com/images/501/625/376.jpg!list1x.v2')";
    break;
    case '2643743':
    document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgLo8OVLsRlgxi8-e-TYXP9AoreLIt43cnZA&s')";
    break;
    case '2968815':
    document.body.style.backgroundImage = "url('https://imgs.699pic.com/images/501/349/167.jpg!list1x.v2')";
    break;
    case '3451189':
    document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyOjUQRtY5vsVRP6Da9GZbUwwet4oaIP59g&s')";
    break;
    case '5128581':
    document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rg6n4j7v2LnRlyc54R40o82oYemOWWisCA&s')";
    break;
    case '5368361':
    document.body.style.backgroundImage = "url('https://imgs.699pic.com/images/326/356/694.jpg!list1x.v2')";
    break;
   
  }
}
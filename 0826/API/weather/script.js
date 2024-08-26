import env from "./env.mjs";
const getCurrentWeather = (latitude, longitude) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${env.API_KEY}&lang=kr&units=metric`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const icon = document.querySelector(".icon");
      const temp = document.querySelector(".temp");
      const weather = document.querySelector(".weather");
      const city = document.querySelector(".city");

      let weatherName;
      switch (data?.weather[0].main) {
        case "Clouds":
          weatherName = "구름";
          break;
        case "Rain":
          weatherName = "비";
          break;
      }

      let cityName;
      switch(data.name){
        case "Jamwon-dong":
          cityName = "서울시 잠원동";
          break;
      }

      temp.innerText = `${data.main.temp}℃`;
      weather.innerText = weatherName;
      city.innerText = cityName;
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
    .catch((err) => console.log(err));
};

const getPosition = (position) => {
  const { latitude, longitude } = position.coords;
  getCurrentWeather(latitude, longitude);
};

const errorHandler = (err) => {
  const notice = document.querySelector(".notice");
  notice.style.display = "block";
  alert(err.message);
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPosition, errorHandler);
} else {
  alert("Geolocation is not available.");
}

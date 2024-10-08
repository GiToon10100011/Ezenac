import { useState, useEffect } from "react";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
import { ClipLoader } from "react-spinners";

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li{
    list-style: none;
  }

  a{
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ img }) =>
    img ? `url(${img})` : "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);"};
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background: rgba(240, 255, 255, 0.3);
  padding: 40px;
  border-radius: 14px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.4);
`;

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

function App() {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(null);
  const [unsplashImg, setUnsplashImg] = useState(null);
  const [city, setCity] = useState("");
  const cities = ["paris", "new york", "tokyo", "seoul"];

  const getWeatherByCurrentLocation = async (latitude, longitude) => {
    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&lang=kr&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    setWeather(data);
    setLoading(false);
  };

  const getCurrentLocation = () => {
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      let latitude = coords.latitude;
      let longitude = coords.longitude;
      getWeatherByCurrentLocation(latitude, longitude);
    });
  };

  const getWeatherByCity = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&lang=kr&units=metric`;
      setLoading(true);

      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCityChange = (city) => {
    if (city === "current") setCity("");
    else setCity(city);
  };

  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);

  // useEffect(() => {
  //   getWeatherByCity();
  // }, [city]);

  const getBackground = () => {
    const getImgURL = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_API_KEY}`;
    fetch(getImgURL)
      .then((response) => response.json())
      .then(({ urls: { full } }) => setUnsplashImg(full))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
      getBackground();
    } else getWeatherByCity();
  }, [city]);

  return (
    <>
      <GlobalStyles />
      <Wrapper img={unsplashImg}>
        <Contents>
          <ClipLoader color={"#f88c6b"} loading={loading} size={150} />
          <WeatherBox weather={weather} />
          <WeatherButton
            cities={cities}
            setCity={setCity}
            handleCityChange={handleCityChange}
          />
        </Contents>
      </Wrapper>
    </>
  );
}

export default App;

//API 데이터를 2개를 사용 → 날씨 & unsplash
// 환경변수(env)를 활용한 2개의 키를 나눠서 관리 중임.
// vite와 cra템플릿의 경우 .env 설정이 서로 다름!!!

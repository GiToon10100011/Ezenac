const getLocation = document.querySelector("#getLocation");

const showPosition = (position) => {
  console.log(position);
  const result = document.querySelector("#result");
  result.innerText = `위도 : ${position.coords.latitude}, 경도 : ${position.coords.longitude}`;
};

const errPosition = (err) => {
  alert(err.message);
};

getLocation.addEventListener("click", () => {
  if (navigator.geolocation) {

    const options = {
      enableHighAccuracy: true,
      //딜레이
      maximumAge: 0,
      timeout: 5000, 
    }

    navigator.geolocation.getCurrentPosition(showPosition, errPosition);
    let watchId = navigator.geolocation.watchPosition(showPosition, errPosition, options);

    setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
    }, 30000);
  } else alert("geolocation을 지원하지 않습니다!");
});

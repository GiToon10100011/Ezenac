const showPosition = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
  const options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(latitude, longitude), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
  };

  const map = new kakao.maps.Map(container, options);

  // Store Info
  const positions = [
    {
      title: "HumanMade KR",
      latlng: new kakao.maps.LatLng(36.1373306, 122.789661),
      address: "39 Seongsui-ro 7-gil, Seongdong-gu, Seoul",
    },
    {
      title: "HumanMade Tokyo",
      latlng: new kakao.maps.LatLng(35.2039976, 122.7857365),
      address:
        "Japan, 〒150-0001 Tokyo, Shibuya City, Jingumae, 2 Chome-6-6 秀和外苑レジデンス 1F",
    },
    {
      title: "HumanMade Harajuku",
      latlng: new kakao.maps.LatLng(35.2039976, 122.7857365),
      address:
        "Japan, 〒150-0001 Tokyo, Shibuya City, Jingumae, 1 Chome-11-6 1F",
    },
    {
      title: "HumanMade PARCO",
      latlng: new kakao.maps.LatLng(35.2039976, 122.7857365),
      address:
        "Japan, 〒542-0085 Osaka, Chuo Ward, Shinsaibashisuji, 1 Chome-8-3 心斎橋PARCO 1F",
    },
  ];

  for (let i = 0; i < positions.length; i++) {
    let marker = new kakao.maps.Marker({
      map: map,
      position: positions[i].latlng,
    });

    const infowindow = new kakao.maps.InfoWindow({
      content: positions[i].title,
    });

    const makeOverListener = () => {
      return () => {
        infowindow.open(map, marker);
      };
    };

    const makeOutListener = () => {
      return () => {
        infowindow.close();
      };
    };

    kakao.maps.event.addListener(marker, "mouseover", makeOverListener());
    kakao.maps.event.addListener(marker, "mouseout", makeOutListener());
  }

  // kakaoMarker

  const markerPosition = new kakao.maps.LatLng(latitude, longitude);

  // 마커를 생성합니다
  const marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  marker.setMap(map);

  // kakaoMarkerInfoWindow
  const iwContent =
    '<div class = "iwItem" style="padding:5px;">이젠아카데미 강남</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

  // 인포윈도우를 생성합니다
  const infowindow = new kakao.maps.InfoWindow({
    content: iwContent,
    removable: iwRemoveable,
  });

  // 마커에 클릭이벤트를 등록합니다
  kakao.maps.event.addListener(marker, "click", function () {
    // 마커 위에 인포윈도우를 표시합니다
    infowindow.open(map, marker);
  });
};

const errorPosition = (error) => {
  alert(error.message);
};

navigator.geolocation.getCurrentPosition(showPosition, errorPosition);

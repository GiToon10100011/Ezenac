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
      title: "올리브영 강남우성점",
      latlng: new kakao.maps.LatLng(37.4918902, 127.0309525),
      address: "서울시 강남구 강남대로 320",
      img: "./img/img1.jpg",
      info: "영업시간 : 오전 8시 ~ 저녁 10시",
    },
    {
      title: "올리브영 강남중앙점",
      latlng: new kakao.maps.LatLng(37.4962484, 127.0287983),
      address: "서울시 강남구 강남대로 374",
      img: "./img/img2.jpg",
      info: "영업시간 : 오전 8시 ~ 저녁 10시",
    },
    {
      title: "올리브영 서초타운점",
      latlng: new kakao.maps.LatLng(37.4950544, 127.0280286),
      address: "서울시 서초구 서초대로 78길",
      img: "./img/img3.jpg",
      info: "영업시간 : 오전 8시 ~ 저녁 10시",
    },
    {
      title: "올리브영 서초대로점",
      latlng: new kakao.maps.LatLng(37.4940977, 127.0158607),
      address: "서울시 서초구 서초대로 314",
      img: "./img/img4.jpg",
      info: "영업시간 : 오전 8시 ~ 저녁 10시",
    },
    {
      title: "올리브영 역삼점",
      latlng: new kakao.maps.LatLng(37.4987564, 127.0292784),
      address: "서울시 강남구 테헤란로 111",
      img: "./img/img5.jpg",
      info: "영업시간 : 오전 8시 ~ 저녁 10시",
    },
  ];

  for (let i = 0; i < positions.length; i++) {
    let marker = new kakao.maps.Marker({
      map: map,
      position: positions[i].latlng,
    });

    const content = `<div class="wrap">
      <div class="info">
        <div class="title">
          ${positions[i].title}
        </div>
        <div class="body">
          <div class="img">
            <img src=${positions[i].img} width="73" height="70">
          </div>
          <div class="desc">
            <div class="ellipsis">${positions[i].address}</div>
            <div class="jibun ellipsis">${positions[i].info}</div>
            <div><a href="https://www.oliveyoung.co.kr/store/main/main.do?utm_source=google&utm_medium=powerlink&utm_campaign=onpro_emnet_default-main_0101_1231&utm_content=pc_main&gad_source=1&gclid=CjwKCAjwqf20BhBwEiwAt7dtdZzR9rzpBYaMlW8dY6o-AFTWOJ0HKyxxJv6l-0wozgvMe0vmSKnoPhoC4cwQAvD_BwE" target="_blank" class="link">쇼핑몰 바로가기</a></div>
          </div>
        </div>
      </div>
    </div>`;

    const overlay = new kakao.maps.CustomOverlay({
      content: content,
      map: map,
      position: marker.getPosition(),
    });

    // const makeOverListener = () => {
    //   return () => {
    //     infowindow.open(map, marker);
    //   };
    // };

    // const makeOutListener = () => {
    //   return () => {
    //     infowindow.close();
    //   };
    // };

    // kakao.maps.event.addListener(marker, "mouseover", makeOverListener());
    // kakao.maps.event.addListener(marker, "mouseout", makeOutListener());
  }

  // kakaoMarker

  const markerPosition = new kakao.maps.LatLng(latitude, longitude);

  // 마커를 생성합니다
  const marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  marker.setMap(map);

  // kakaoMarkerInfoWindow
  const iwContent = `<div class ="label"><span class="left"></span><span class="center">🎈현재위치</span><span class="right"></span></div>`; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
  iwRemoveable = false; // removeable 속성을 true 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

  const iwPosition = new kakao.maps.LatLng(latitude, longitude);
  // 인포윈도우를 생성합니다
  const infowindow = new kakao.maps.CustomOverlay({
    content: iwContent,
    position: iwPosition,
  });

  infowindow.setMap(map);

  // 마커에 클릭이벤트를 등록합니다
  // kakao.maps.event.addListener(marker, "click", function () {
  //   // 마커 위에 인포윈도우를 표시합니다
  //   infowindow.open(map, marker);
  // });
};

const errorPosition = (error) => {
  alert(error.message);
};

navigator.geolocation.getCurrentPosition(showPosition, errorPosition);

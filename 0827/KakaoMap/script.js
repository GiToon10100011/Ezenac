const showPos = (position) => {
  const url =
    "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=500&pageNo=1&MobileOS=ETC&MobileApp=AppTest&serviceKey=OyVb1J%2Fq9%2FdNjW%2FPRbv1fBqG5bg8wwH5TgZuAjvFt%2BqOyOpkicEQHPBd14StpphLRuxzuNvCRDaAvrPJGsJaqA%3D%3D&_type=json";

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const data = json.response.body.items.item;
      console.log(data);
      const { latitude, longitude } = position.coords;
      const container = document.querySelector("#map"); //지도를 담을 영역의 DOM 레퍼런스
      const mapOption = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(latitude, longitude), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };

      const map = new kakao.maps.Map(container, mapOption); //지도 생성 및 객체 리턴

      const clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel: 10, // 클러스터 할 최소 지도 레벨
      });

      // const positions = [
      //   {
      //     title: "국제전자센터",
      //     latlng: new kakao.maps.LatLng(37.4847094, 127.0177836),
      //   },
      //   {
      //     title: "닌텐도 스토어",
      //     latlng: new kakao.maps.LatLng(37.5296399, 126.9643236),
      //   },
      //   {
      //     title: "한국 닌텐도",
      //     latlng: new kakao.maps.LatLng(37.5609744, 126.9671436),
      //   },
      //   {
      //     title: "닌텐도 본사",
      //     latlng: new kakao.maps.LatLng(34.948156, 135.7282062),
      //   },
      // ];

      // 마커 이미지의 이미지 주소입니다
      const imageSrc = "./ydhdot.jpg";

      let markers = [];

      for (let i = 0; i < data.length; i++) {
        // 마커 이미지의 이미지 크기 입니다
        const imageSize = new kakao.maps.Size(30, 30);

        // 마커 이미지를 생성합니다
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX), // 마커를 표시할 위치
          title: data[i].facltNm, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
        });

        markers.push(marker);

        marker.setMap(map);

        const iwContent = `<div style="padding:5px;"><a href = "https://www.naver.com" target = "_blank">${data[i].facltNm}</a></div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
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

        const makeOverListener = (map, marker, infowindow) => {
          return () => {
            infowindow.open(map, marker);
          };
        };

        const makeOutListener = (map, marker, infowindow) => {
          return () => {
            infowindow.close(map, marker);
          };
        };

        kakao.maps.event.addListener(
          marker,
          "mouseover",
          makeOverListener(map, marker, infowindow)
        );

        kakao.maps.event.addListener(
          marker,
          "mouseout",
          makeOutListener(map, marker, infowindow)
        );
      }

      clusterer.addMarkers(markers);
    })
    .catch((err) => console.log(err));
};

const errPos = (err) => {
  alert(err.message);
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPos, errPos);
} else {
  alert("Geolocation is not available");
}

const productInfo =
  "https://my-json-server.typicode.com/GiToon10100011/Amazon_FakeServer/db";

fetch(productInfo)
  .then((response) => response.json())
  .then((data) => {
    let idCnt = Date.now();
    const products = {
      data: data.data.map((item) => ({
        ...item,
        id: idCnt++,
      })),
    };

    //내장객체 함수를 통해 현 url의 파라미터를 가져옴
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const names = params.get("name");

    const product = products.data.find(
      (product) => product.category === category && product.name === names
    );

    const price = new Intl.NumberFormat("ko-kr", {
      currency: "KRW",
    }).format(product.price);

    if (product) {
      const productDetailDiv = document.querySelector("#product-detail");

      productDetailDiv.innerHTML = `
    <div class = "product-category"><h3>현재 카테고리 ${product.category} > ${product.name}</h3></div>
    <div class = "product-img">
    <img src = "${product.img}" alt = "${product.name}"/>
    </div>
    <div class = "product-info">
    <h1>${product.name}</h1>
    <p>Category : ${product.category}</p>
    <p>Price : ${price}원</p>
    </div>
    <button>장바구니 이동</button>
    `;
    } else{
      const productDetailDiv = document.querySelector("#product-detail");
      productDetailDiv.innerHTML = "존재하지 않는 상품입니다."
    }
  })
  .catch((error) => {
    console.log(error);
  });

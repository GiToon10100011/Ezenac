const xhr = new XMLHttpRequest();
const result = document.querySelector("#result")
xhr.open("GET", "https://reqres.in/api/products/10");
xhr.send();

xhr.onreadystatechange = function() {
  if(this.readyState === 4 && this.status === 200){
    const product = JSON.parse(xhr.responseText);
    console.log(product);
    result.innerHTML = `
    <ul>
    <li>상품명 : ${product.data.name}</li>
    <li>상품번호 : ${product.data.id}</li>
    <li>출시년도 : ${product.data.year}년</li>
    <li>색상 : ${product.data.color}</li>
    <li>색상코드 : ${product.data["pantone_value"]}</li>
    </ul>
    <ul>
    <li>자세히보기 : ${product.support.url}</li>
    <li>상세정보 : ${product.support.text}</li>
    </ul>
    `
  }
}

//id, name,year, color, pantone-value
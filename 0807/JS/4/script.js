const orderButton = document.querySelector("#order");

const orderInfo = document.querySelector(".orderInfo");

orderButton.addEventListener("click", () => {
  const newH = document.createElement("h2");
  // const title = document.querySelector(".desc > h2")
  // title.innerText
  const textNode = document.createTextNode(
    "현재 야반도주 중에 있으며, 신논현 근처에서 주로 목격됨. 매우 위험인물"
  );

  newH.style.fontSize = "2rem";
  newH.style.color = "crimson";

  const newImg = document.createElement("img");
  const srcNode = document.createAttribute("src");
  srcNode.value = "me.png";

  newImg.setAttributeNode(srcNode);

  newH.appendChild(textNode);
  orderInfo.appendChild(newH);
  orderInfo.appendChild(newImg);
});


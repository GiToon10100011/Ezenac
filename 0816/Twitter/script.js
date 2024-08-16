const button = document.querySelector("#tweetButton");
button.addEventListener("click", () => {
  let text = document.querySelector("#tweetTextArea").value;
  text += ` #할아버지 #염동훈 #엄외 #떤 #9824살 #B.C.7800`;
  console.log(text);
  const encodedText = encodeURIComponent(text);
  console.log(encodedText);

  const tweetURL = `https://twitter.com/intent/tweet?text=${encodedText}`
  window.open(tweetURL)
})
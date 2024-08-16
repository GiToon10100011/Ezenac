const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#userEmail").value;
  if(email !== "" && email.includes("@")){
    let userName = email.split("@")[0];
    userName = userName.slice(0, 2);
    const domain = email.split("@")[1];
    console.log(userName, domain);
    document.querySelector("#result").innerText = `${userName}***@${domain}`;
    email.value = "";
  }
  
})
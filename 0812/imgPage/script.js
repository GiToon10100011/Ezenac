const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

items.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    const video = e.currentTarget.querySelector("video");
    video.play();
  });

  item.addEventListener("mouseleave", (e) => {
    const video = e.currentTarget.querySelector("video");
    video.pause();
  });

  item.addEventListener("click", (e) => {
    let tit = e.currentTarget.querySelector("h2").innerText;
    let txt = e.currentTarget.querySelector("p").innerText;
    let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");
    console.log(tit, txt, vidSrc);

    aside.querySelector("h1").innerText = tit;
    aside.querySelector("p").innerText = txt;
    aside.querySelector("video").setAttribute("src", vidSrc);

    aside.querySelector("video").play();
    aside.classList.add("on");
  })
})

close.addEventListener("click", () => {
  aside.classList.remove("on");
  aside.querySelector("video").pause();
})
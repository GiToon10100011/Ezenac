const characterBtns = document.querySelectorAll(".btns button");
const overlayBgs = [
  "../contents/characters/EpisodeAigisChar.png",
  "../contents/characters/Persona3ReloadSEES.jpeg",
  "../contents/characters/Persona4Friends.avif",
  "../contents/characters/Persona5Rebellion.webp",
];

const characterItems = {
  episodeAigis: {
    imgs: [
      "Aigis.jpg",
      "Metis.jpg",
      "Mitsuru.jpg",
      "Yukari.jpg",
      "Fuuka.jpg",
      "Junpei.jpg",
    ],
    name: [
      "Aigis",
      "Metis",
      "Mitsuru Kirijo",
      "Yukari Takeba",
      "Fuuka Yamagishi",
      "Junpei Iori"
    ],
    persona: [
      "Athena",
      "Psyche",
      "Artemisia",
      "Isis",
      "Juno",
      "Trismegistus"
    ],
  },
  persona3: {
    imgs: [
      "Yuki.jpg",
      "Yukari.jpg",
      "Junpei.jpg",
      "Akihiko.jpg",
      "Mitsuru.jpg",
      "Shinjiro.jpg",
    ],
    name: [
      "Yuki Makoto",
      "Yukari Takeba",
      "Junpei Iori",
      "Akihiko Sanada",
      "Mitsuru Kirijo",
      "Shinjiro Aragaki",
    ],
    persona: [
      "Thanatos",
      "Isis",
      "Trismegistus",
      "Caesar",
      "Artemisia",
      "Castor",
    ],
  },
  persona4: {
    imgs: [
      "Yu.jpg",
      "Yosuke.jpg",
      "Chie.jpg",
      "Yukiko.jpg",
      "Rise.jpg",
      "Kanji.jpg"
    ],
    name: [
      "Yu Narukami",
      "Yosuke Hanamura",
      "Chie Satonaka",
      "Yukiko Amagi",
      "Rise Kujikawa",
      "Kanji Tatsumi"
    ],
    persona: [
      "Izanagi",
      "Jiraiya",
      "Tomoe",
      "Konohana Sakuya",
      "Himiko",
      "Take Mikazuchi"
    ],
  },
  persona5: {
    imgs: [
      "Joker.jpg",
      "Skull.png",
      "Panther.png",
      "Fox.jpg",
      "Queen.jpg",
      "Navi.webp"
    ],
    name: [
      "Ren Amamiya",
      "Ryuji Sakamoto",
      "Ann Takamaki",
      "Yusuke Kitagawa",
      "Makoto Nijima",
      "Futaba Sakura"
    ],
    persona: [
      "Arsene",
      "Captain Kid",
      "Karmen",
      "Goemon",
      "Johanna",
      "Necronomicon"
    ],
  },
};

const characterKeys = ["episodeAigis", "persona3", "persona4", "persona5"]

characterBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const overlay = document.querySelector(".overlay");
    overlay.style.background = `url(${overlayBgs[index]}) center/cover
    no-repeat`;
    overlay.classList.add("active");
    setTimeout(() => {
      overlay.classList.remove("active");
    }, 2100);
    const characterImgs = document.querySelectorAll(".character img");
    const characterNames = document.querySelectorAll(".character span:first-of-type");
    const characterPersonas = document.querySelectorAll(".character span:last-of-type");
    characterImgs.forEach((img, i) => {
      img.setAttribute("src", `../contents/characters/${characterItems[characterKeys[index]].imgs[i]}`);
    })
    characterNames.forEach((name, i) => {
      name.innerText = characterItems[characterKeys[index]].name[i];
    })
    characterPersonas.forEach((persona, i) => {
      persona.innerText = characterItems[characterKeys[index]].persona[i];
    })
  });
});

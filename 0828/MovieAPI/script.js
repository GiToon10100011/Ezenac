import key from "./env.js";
//import {API_KEY} from "./env.js"
const url = `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1&api_key=${key.API_KEY}`;

const createItems = ({
  id,
  poster_path,
  original_title,
  title,
  vote_average,
  release_date,
}) => {
  const parent = document.querySelector(".contents");
  const movieItem = document.createElement("div");
  movieItem.className = "movie";
  movieItem.id = id;
  movieItem.innerHTML = `
          <div class="img-box">
            <img
              src="https://image.tmdb.org/t/p/original/${poster_path}"
              alt="poster"
            />
          </div>
          <div class="detail">
            <div class="info">
              <div class="date">${release_date}</div>
              <div class="rate">⭐⭐⭐ ${Math.round(vote_average)}</div>
            </div>
            <h3>${title} (${original_title})</h3>
          </div>
  `;

  parent.appendChild(movieItem);

  movieItem.addEventListener("click", () => {
    const url = `https://www.themoviedb.org/movie/${id}`;
    window.open(url, "_blank");
    // location.href = url;
  });
};

fetch(url)
  .then((response) => response.json())
  .then(({ results: data }) => {
    console.log(data);
    data.forEach((movie) => {
      createItems(movie);
    });
  })
  .catch((err) => console.log(err));

const movieName = document.getElementById("movieName");
const movieBtn = document.getElementById("movieBtn");
const movieContainer = document.getElementById("movieContainer");
const movieClose = document.querySelector(".movie__close");

let movies = [];

const addMovie = () => {
  movies.push(movieName.value);
  console.log(movies);
  movieName.value = "";
};

const createElement = () => {
  movies.forEach((movie) => {
    const addLabel = document.createElement("label");
    addLabel.className = "movie__label";

    const addInput = document.createElement("input");
    addInput.type = "radio";

    const addClose = document.createElement("img");
    addLabel.innerText = `${movie}`;
    addClose.className = "movie__close";
    addClose.src = "images/close.svg";
    movieContainer.appendChild(addLabel);
    addLabel.appendChild(addInput);
    addContainer.appendChild(addLabel);

    addLabel.appendChild(addClose);
  });
};
// console.log(createElement());

const render = () => {
  addMovie();
  createElement();
};
movieBtn.addEventListener("click", render);
movieClose.addEventListener("click");

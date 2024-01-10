const movieName = document.getElementById("movieName");
const movieBtn = document.getElementById("movieBtn");
const movieLists = document.querySelector(".movie__lists");
const movieLabel = document.querySelector(".movie__label");

let movies = [];
// let radioIdCounter = 0;

const addMovie = () => {
  if (!movieName.value) return alert("Введите название фильма");

  movies.push({
    name: movieName.value,
    selected: false,
    // radioId: radioIdCounter,
  });
  createElement(movies.length - 1);
  movieName.value = "";
  console.log(movies);
};

const createElement = (index) => {
  // movieLists.innerHTML = "";
  const movie = movies[index];
  // movies.forEach((movie, index) => {
  const addLabel = document.createElement("label");
  addLabel.className = "movie__label";

  const addInput = document.createElement("input");
  addInput.className = "movie__label-input";
  addInput.type = "radio";
  addInput.name = "movieRadio";
  addInput.checked = movie.selected;
  addInput.addEventListener("change", () => clickRadio(index));

  const addText = document.createElement("p");
  addText.className = "movie__label-text";
  addText.innerText = `${movie.name}`;

  const addClose = document.createElement("img");
  addClose.className = "movie__label-close";
  addClose.src = "images/close.svg";
  addClose.addEventListener("click", () => closeElement(index));

  movieLists.appendChild(addLabel);
  addLabel.appendChild(addInput);
  addLabel.appendChild(addText);
  addLabel.appendChild(addClose);
  // });
};

const render = () => {
  addMovie();
};

const clickRadio = (index) => {
  movies[index].selected = !movies[index].selected;
  updateCheckboxState();
};

const updateCheckboxState = () => {
  movies.forEach((movie, i) => {
    const label = document.querySelector(`.movie__label:nth-child(${i + 1})`);
    const input = label.querySelector(".movie__label-input");
    input.checked = movie.selected;
    label.classList.toggle("selected", movie.selected);
    // console.log(label);
  });
};

const closeElement = (index) => {
  // if (event.target.className !== "movie__label-close") return;
  // let pane = event.target.closest(".movie__label");
  // let text = pane.querySelector(".movie__label-text").innerText;

  // movies = movies.filter((movie) => movie !== text);

  // createElement();
  movies.splice(index, 1);
  movieLists.innerHTML = "";
  movies.forEach((movie, i) => createElement(i));
};

movieBtn.addEventListener("click", render);

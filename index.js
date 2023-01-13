import cars from "./data.js";

const appBody = document.getElementById("app");

const gallery = document.getElementById("cars");

function renderCars(carsToRender) {
  for (const car of carsToRender) {
    const carContainer = document.createElement("figure");
    carContainer.classList.add("gallery-item");

    carContainer.innerHTML = `<a href="${car.url}">
   <img
     class="gallery-image"
     src="${car.image}"
   />
   <figcaption>${car.name}</figcaption>
 </a>`;

    gallery.appendChild(carContainer);
  }
}

const searchBar = document.getElementById("search-box");

searchBar.addEventListener("blur", hadleUserInput);

searchBar.addEventListener("keyup", function (event) {
  console.log("event", event);
  if (event.key === "Enter") {
    hadleUserInput(event);
  }
});

function hadleUserInput(event) {
  const searchRequest = event.target.value;

  if (searchRequest && searchRequest.length > 1) {
    const filteredCars = cars.filter((car) => {
      return car.name.toLowerCase() === searchRequest.toLowerCase();
    });
    removeElements(gallery);
    renderCars(filteredCars);
  } else {
    renderCars(cars);
  }
}

function removeElements(parentElement) {
  while (parentElement.lastChild) {
    parentElement.removeChild(parentElement.lastChild);
  }
}

renderCars(cars);

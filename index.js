import cars from "./data.js";

const appBody = document.getElementById("app");

const gallery = document.getElementById("cars");

for (const car of cars) {
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

  // for (const car of cars) {
  //   const carContainer = document.createElement("figure");
  //   carContainer.classList.add("gallery-item");

  //   const carImage = document.createElement("img");
  //   carImage.setAttribute("src", car.image);
  //   carContainer.appendChild(carImage);
  //   carImage.setAttribute("alt", `This is the photo of ${car.name}`);
  //   carImage.classList.add("gallery-image");

  //   const a = document.createElement("a");
  //   a.innerHTML = `<figcaption>${car.name}</figcaption>`;
  //   a.setAttribute("href", car.url);
  //   a.setAttribute("target", "_blank");
  //   carContainer.appendChild(a);

  //   gallery.appendChild(carContainer);
}

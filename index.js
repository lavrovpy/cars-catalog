import data from './data.js'
import { filterDuplicates, sortArray, removeElements } from './utils.js'

let cars = JSON.parse(JSON.stringify(data));
const carsYears = data.map(function(car){
    return car.year;
})

const searchBar = document.getElementById('search')
searchBar.addEventListener('blur', hadleUserInput)
searchBar.addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        hadleUserInput(event)
    }
})

const carYearSelector = document.querySelector('#car-selector')
renderSelectorOptions(carYearSelector, carsYears)
carYearSelector.addEventListener('change', handleYearSelection)

// initally render all cars
const carsGallery = document.getElementById('cars-gallery')
renderCars(carsGallery, cars)

function renderCars(parentElement, carsToRender){
    for(const car of carsToRender){
        const carConrainer = document.createElement('figure')
        carConrainer.classList.add('gallery-item')
    
        carConrainer.innerHTML = `
            <button
                data-id="${car.id}"
                id="delete-btn"
            >
                Delete Car
            </button>
            <img
                class="gallery-image"
                src="${car.image}"
            />
            <a href="${car.url}">
                <figcaption>${car.name}, ${car.year}</figcaption>
            </a>
        `
        parentElement.appendChild(carConrainer)
    }

    const deleBtns = document.querySelectorAll('#delete-btn');
    for(const el of deleBtns){
        el.addEventListener('click', deleteCar)
    }
}

function hadleUserInput(event){
    const searchRequest = event.target.value;
    removeElements(carsGallery)

    if(searchRequest && searchRequest.length > 1){
        const fiteredCars = cars.filter(car => {
            return car.name.toLocaleLowerCase() === searchRequest.toLocaleLowerCase()
        });
        renderCars(carsGallery, fiteredCars)
    } else{
        renderCars(carsGallery, cars)
    }
}

function deleteCar(event){
    const carIdToDelete = event.target.dataset.id;
    const filteredCars = cars.filter(function(car){
        return car.id.toString() !== carIdToDelete;
    })
    removeElements(carsGallery)
    cars = filteredCars;
    renderCars(carsGallery, cars)
}

function renderSelectorOptions(parentElement, data){
    const fiteredData = filterDuplicates(data);
    const sortedData = sortArray(fiteredData, 'desc');
    for(const el of sortedData){
        const option = document.createElement('option')
        option.innerHTML = el
        option.setAttribute('value', el)
        parentElement.appendChild(option)
    }
}

function handleYearSelection(event){
    const selectedYear = event.target.value;
    const filteredCars = data.filter(
        car => car.year.toString() === selectedYear
    )
    removeElements(carsGallery)
    cars = filteredCars;
    renderCars(carsGallery, cars)
}

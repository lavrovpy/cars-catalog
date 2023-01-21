import data from './data.js'

let cars = JSON.parse(JSON.stringify(data));

const appBody = document.getElementById('app')

const allYears = data.map(function(car){
    return car.year;
})

const uniqueYears = Array.from(new Set(allYears));
/* for(const year of allYears){
    if(!uniqueYears.includes(year)){
        uniqueYears.push(year)
    }
} */

const sortedYears = uniqueYears.sort((a, b) => {
    return a - b
})

const gallery = document.getElementById('cars')

function renderCars(carsToRender){
    for(const car of carsToRender){
        const carConrainer = document.createElement('figure')
        carConrainer.classList.add('gallery-item')
    
        carConrainer.innerHTML = `
            <button
                data-id="${car.id}"
                id="delete-btn"
            >Delete Car</button>
            <img
                class="gallery-image"
                src="${car.image}"
            />
            <a href="${car.url}">
                <figcaption>${car.name}, ${car.year}</figcaption>
            </a>
        `
        gallery.appendChild(carConrainer)
    }

    const deleBtns = document.querySelectorAll('#delete-btn');

    for(const el of deleBtns){
        el.addEventListener('click', deleteCar)
    }
}

const searchBar = document.getElementById('search')

searchBar.addEventListener('blur', hadleUserInput)

searchBar.addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        hadleUserInput(event)
    }
})

function hadleUserInput(event){
    const searchRequest = event.target.value;

    if(searchRequest && searchRequest.length > 1){
        const fiteredCars = cars.filter(car => {
            return car.name.toLocaleLowerCase() === searchRequest.toLocaleLowerCase()
        });
        removeElements(gallery)
        renderCars(fiteredCars)
    } else{
        removeElements(gallery)
        renderCars(cars)
    }
}

function removeElements(parentElement){
    while(parentElement.lastChild){
        parentElement.removeChild(parentElement.lastChild)
    }
}

renderCars(cars)

function deleteCar(event){
    const carIdToDelete = event.target.dataset.id;
    const filteredCars = cars.filter(function(car){
        return car.id.toString() !== carIdToDelete;
    })
    removeElements(gallery)
    cars = filteredCars;
    renderCars(cars)
}

const carYearSelector = document.querySelector('#car-selector')
carYearSelector.addEventListener('change', handleYearSelection)

function renderSelectorOptions(parentElement){
    for(const year of sortedYears){
        const option = document.createElement('option')
        option.innerHTML = year
        option.setAttribute('value', year)
        parentElement.appendChild(option)
    }
}

renderSelectorOptions(carYearSelector)

function handleYearSelection(event){
    debugger;
    const selectedYear = event.target.value;
    const filteredCars = data.filter(
        car => car.year.toString() === selectedYear
    )
    removeElements(gallery)
    cars = filteredCars;
    renderCars(cars)
}
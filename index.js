import cars from './data.js'

const appBody = document.getElementById('app')

const gallery = document.getElementById('cars')

function renderCars(carsToRender){
    for(const car of carsToRender){

        const carConrainer = document.createElement('figure')
        carConrainer.classList.add('gallery-item')
    
        carConrainer.innerHTML = `
            <a href="${car.url}">
            
            <img class="gallery-image" src="${car.image}" />
            <figcaption>${car.name}</figcaption>
            </a>
    `
    gallery.appendChild(carConrainer)
    
    }
}



const searchBar = document.getElementById('search-box')
 
searchBar.addEventListener('blur', hadleUserInput)

searchBar.addEventListener('keyup', function(event){
    console.log('here')
    if(event.key === 'Enter'){
        hadleUserInput(event)
    }
})

function hadleUserInput(event){
    const searchRequest = event.target.value;

    if(searchRequest && searchRequest.lenght > 1){

    
    const filteredCars = cars.filter(car => {
        return car.name.toLocaleLowerCase() === searchRequest.toLocaleLowerCase()});
    removeElements(gallery)
    renderCars(filteredCars)
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
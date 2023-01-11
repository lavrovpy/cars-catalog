import cars from './data.js'

const appBody = document.getElementById('app')

const gallery = document.getElementById('cars')

for(const car of cars){
    const carConrainer = document.createElement('figure')
    carConrainer.classList.add('gallery-item')

    const carImage = document.createElement('img')
    carImage.setAttribute('src', car.image)
    carImage.setAttribute('alt', `This is the photo of ${car.name}`)
    carImage.classList.add('gallery-image')
    carConrainer.appendChild(carImage)

    const a = document.createElement('a')
    a.innerHTML = `<figcaption>${car.name}</figcaption>`;
    a.setAttribute('href', car.url)
    a.setAttribute('target', '_blank')
    carConrainer.appendChild(a)

    gallery.appendChild(carConrainer)
}


let episodes = []

fetch('https://api.sampleapis.com/simpsons/episodes').then(
    function(response){
        return response.json()
    }
).then(
    function(data){
        episodes = data
        console.log('episodes from then', episodes)
    }
)


console.log('episodes', episodes)
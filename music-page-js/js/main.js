const musica = [
    {
        cancion: "Viva la vida",
        artista: "Coldplay",
        genero: "pop",
        img: "img/bg-1.webp"
    },
    {
        cancion: "Lose Yourself",
        artista: "Eminem",
        genero: "rap",
        img: "img/bg-2.jpeg"
    },
    {
        cancion: "Under Pressure",
        artista: "Queen",
        genero: "rock",
        img: "img/bg-3.jpeg"
    },
    {
        cancion: "505",
        artista: "Artic Monkeys",
        genero: "indie",
        img: "img/bg-4.jpeg"
    },
    {
        cancion: "Reminder",
        artista: "The Weeknd",
        genero: "soul",
        img: "img/bg-5.jpg"
    },
    {
        cancion: "Into It",
        artista: "Chase Atlantic",
        genero: "independent",
        img: "img/bg-6.jpeg"
    },
    {
        cancion: "Reflections",
        artista: "The Neighbourhood",
        genero: "independent",
        img: "img/bg-7.jpeg"
    },
    {
        cancion: "Summertime Sadness",
        artista: "Lana del Rey",
        genero: "soul",
        img: "img/bg-8.jpeg"
    }

]

const audio = document.getElementById('audio')
const cancion = document.getElementById('song')
const artista = document.getElementById('artist')
const img = document.getElementById('music-img')

let index = 0

document.getElementById('next-button').addEventListener('click', (event) => {
    event.preventDefault()

    if (index < musica.length - 1) {
        index++
    } else {
        index = 0
    }
    song.innerHTML = musica[index].cancion
    artista.innerHTML = musica[index].artista
    img.src = musica[index].img
})

document.getElementById('prev-button').addEventListener('click', (event) => {
    event.preventDefault()

    if (index <= musica.length - 1 && index !== 0) {
        index--
    } else if (index === 0) {
        index = 7
    }
    song.innerHTML = musica[index].cancion;
    artista.innerHTML = musica[index].artista;
    img.src = musica[index].img

})

document.getElementById('audioPlay').addEventListener('click', (event) => {
    event.preventDefault()

    if (audio.paused || audio.ended) {
        audio.play();
    } else {
        audio.pause();
    }
})



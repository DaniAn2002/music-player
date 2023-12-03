const musica = [
    {
        cancion: "Viva la vida",
        artista: "Coldplay",
        genero: "pop",
        img: "img/bg-1.webp",
        audio: ""
    },
    {
        cancion: "Lose Yourself",
        artista: "Eminem",
        genero: "rap",
        img: "img/bg-2.jpeg",
        audio: ""
    },
    {
        cancion: "Under Pressure",
        artista: "Queen",
        genero: "rock",
        img: "img/bg-3.jpeg",
        audio: ""
    },
    {
        cancion: "505",
        artista: "Artic Monkeys",
        genero: "indie",
        img: "img/bg-4.jpeg",
        audio: ""
    },
    {
        cancion: "Reminder",
        artista: "The Weeknd",
        genero: "soul",
        img: "img/bg-5.jpg",
        audio: ""
    },
    {
        cancion: "Into It",
        artista: "Chase Atlantic",
        genero: "independent",
        img: "img/bg-6.jpeg",
        audio: ""
    },
    {
        cancion: "Reflections",
        artista: "The Neighbourhood",
        genero: "independent",
        img: "img/bg-7.jpeg",
        audio: ""
    },
    {
        cancion: "Summertime Sadness",
        artista: "Lana del Rey",
        genero: "soul",
        img: "img/bg-8.jpeg",
        audio: ""
    },
    {
        cancion: "Goosebumps",
        artista: "Travis Scott",
        genero: "soul",
        img: "img/bg-9.jpeg",
        audio: ""
    },
    {
        cancion: "Moscow Mule",
        artista: "Bad Bunny",
        genero: "reggeaton",
        img: "img/bg-10.jpeg",
        audio: ""
    }

]

const audio = document.getElementById('audio')
const playPause = document.getElementById('playPause')

const cancion = document.getElementById('song')
const artista = document.getElementById('artist')
const img = document.getElementById('music-img')

let index = 0

const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");

//The next button plays the next song accordingly to the array of objects.
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
    document.getElementById('audio').src = musica[index].audio
})

//The previous button (in case pressed) plays the previous songs accordingly to the array of objects
//if the position of the index is 0 the previous song is number 9.
document.getElementById('prev-button').addEventListener('click', (event) => {
    event.preventDefault()

    if (index <= musica.length - 1 && index !== 0) {
        index--
    } else if (index === 0) {
        index = 9
    }
    song.innerHTML = musica[index].cancion;
    artista.innerHTML = musica[index].artista;
    img.src = musica[index].img
    document.getElementById('audio').src = musica[index].audio

})

//When selected either next or previous song the song is able to be played
document.addEventListener('DOMContentLoaded', () => {
    musica.forEach((cancion,i) => {
        let cont =i+1
        musica[i].audio = document.getElementById('audio'+String(cont)).src
    })
    document.getElementById('audio').src = musica[index].audio
    
  })



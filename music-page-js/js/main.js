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
    }
]

const audio = document.getElementById('audio')
const cancion = document.getElementById('song')
const artista = document.getElementById('artist')
const img = document.getElementById('music-img')

let index = 0

const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");


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

document.getElementById('prev-button').addEventListener('click', (event) => {
    event.preventDefault()

    if (index <= musica.length - 1 && index !== 0) {
        index--
    } else if (index === 0) {
        index = 3
    }
    song.innerHTML = musica[index].cancion;
    artista.innerHTML = musica[index].artista;
    img.src = musica[index].img
    document.getElementById('audio').src = musica[index].audio

})


document.addEventListener('DOMContentLoaded', () => {
    //console.log('DOMContentLoaded OKOK')
    musica.forEach((cancion,i) => {
        let cont =i+1
        musica[i].audio = document.getElementById('audio'+String(cont)).src
       // console.log(musica[i])
    })
    document.getElementById('audio').src = musica[index].audio
   // console.log(musica[index].audio)
    

  })



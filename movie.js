
class Movie {
    constructor(id, title, releaseYear, nacionality, genre, photoMovie) {
        this.id = id;
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.photoMovie = photoMovie;
        this.actors = [];
        this.director = "";
        this.writer = "";
        this.language = "";
        this.plataforma = "";
        this.isMCU = true;
        this.mainCharacterName = "";
        this.producer = "";
        this.distributor = ""; 
    }
}

const dataFilm = [
    new Movie (1, "Agente X", 2024, "American", "Thriller", "p1-agentex.jpg"), 
    new Movie (2, "Napoleon", 2023, "American", "Belic", "p2-napoleon.jpg"),
    new Movie (3, "Wish", 2024, "American", "Animation", "p9-wish.jpg"),
    new Movie (4, "Navidad en su Manos", 2023, "American", "Animation", "p10-navidadensusmanos.jpg"),
    new Movie (5, "A Fuego Lento", 2023, "American", "Drama", "p12-chicasmalas.jpg"),
    new Movie (6, "Ocho Apellidos Marroquis", 2023, "Spain", "Comedy", "p6-8apellidos.jpg"),
    new Movie (7, "El Peor Equipo", 2023, "Spain", "Comedy", "p7-elpeorequipo.jpg"),
    new Movie (8, "Kina Yuk", 2024, "Japan", "Animation", "p8-kinyuk.jpg"),
]

const filmsContainer = document.getElementById("film-container");

function generateFilmsCards() {
    let htmlGenerateFilms = "";
    dataFilm.forEach(film => {
        const filmCard = `<div class="card" style="width: 10rem;">
        <img src="${film.photoMovie}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${film.title}</h5>
            <p class="card-text">${film.releaseYear}</p>
            <p class="card-text">${film.genre}</p>
            <p class="card-text"><small class="text-body-secondary">${film.nacionality}</small></p>
        </div>
        </div>`
        htmlGenerateFilms += filmCard;
    })
    filmsContainer.innerHTML = htmlGenerateFilms;
}



// ****FUNCION PARA AÑADIR NUEVA FILM Y QUE LA MUESTRE****

const newFilmsContainer = document.getElementById("newFilm-container");

function addNewFilm() {
  
    const idInput = document.getElementById("inputID").value;
    const photoInput = document.getElementById("inputPhoto").value;
    const titleInput = document.getElementById("inputTittle").value;
    const releaseYearInput = document.getElementById("inputYear").value;
    const genreInput = document.getElementById("inputGenre").value;
    const nationalityInput = document.getElementById("inputNationality").value;
    
    const newFilm = {
        itemId: idInput,
        itemPhoto: photoInput,
        itemTitle: titleInput,
        itemReleaseYear: releaseYearInput,
        itemNacionality: nationalityInput,
        itemGenre: genreInput,
    }
    
    const newFilmCard = document.createElement('ul');
    newFilmCard.innerHTML = `<div class="card" style="width: 10rem;">
    <img src="${newFilm.itemPhoto}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${newFilm.itemTitle}</h5>
        <p class="card-text">${newFilm.itemReleaseYear}</p>
        <p class="card-text">${newFilm.itemGenre}</p>
        <p class="card-text"><small class="text-body-secondary">${newFilm.itemNacionality}</small></p>
    </div>
    </div>`;
    newFilmsContainer.appendChild(newFilmCard);
}


localStorage.setItem("dataFilm", JSON.stringify ("dataFilm"));
JSON.parse(localStorage.getItem("dataFilm"));


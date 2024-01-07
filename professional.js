
class Professional {
    constructor(id, name, age, weight, height, isRetired, nationality, oscarsNumber, profession, photo) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photo = photo;
    }
}

const dataProfessional = [
    new Professional (1, "Tom Hanks", 67, "80Kg", "1,83m", "No", "American", 2, "Actor", "ac1-tomhanks.jpg"), 
    new Professional (2, "Adrián Expósito", 34, "72Kg", "1,70", "No", "Spanish", 0, "Actor", "ac2-adrianexposito.jpg"),
    new Professional (3, "Edward Norton", 54, "81Kg", "1,81", "No", "American", 3, "Actor", "ac3-edwardnorton.jpg"),
    new Professional (4, "Ang Lee", 69, "65Kg", "1,54", "No", "Taiwán", 3, "Director", "ac4-anglee.jpg"),
    new Professional (5, "Steven Spielberg", 77, "80Kg", "1,78", "No", "American", 3, "Director", "ac5-stevenspielberg.jpg"),
    new Professional (6, "J.A.Bayona", 48, "58Kg", "1,68", "No", "Spanish", 0, "Director", "ac6-jabayona.jpg"),
    new Professional (7, "Andrew Haigh", 45, "76Kg", "1,70", "No", "American", 0, "Writer", "ac7-andrewhaigh.jpg"),
    new Professional (8, "Denis Villeneuve", 57, "72Kg", "1,75m", "No", "French", 0, "Writer", "ac8-denisvillenueve.jpg"),
]

const professionalContainer = document.getElementById("profesional-container");

function generateProfessionalCards() {
    let htmlGenerateProfessional = "";
    dataProfessional.forEach(prof => {
        const profCard = `<div class="card" style="width: 10rem;">
        <img src="${prof.photo}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${prof.name}</h5>
            <h6 class="card-title">Age: ${prof.age} Weight: ${prof.weight} Height: ${prof.height} Retired: ${prof.isRetired} Oscars: ${prof.oscarsNumber}</h6>
            <p class="card-text">${prof.profession}</p>
            <p class="card-text"><small class="text-body-secondary">${prof.nationality}</small></p>
        </div>
        </div>`
      htmlGenerateProfessional += profCard;
    })
    professionalContainer.innerHTML = htmlGenerateProfessional;
}









// printAttributes() {
//     let professionalInfo = "";
//     professionalInfo = `Name: ${this.name}
//     Age: ${this.age}
//     Weight: ${this.weight}
//     Height: ${this.height}
//     Is retired: ${this.isRetired}
//     Nationality: ${this.nationality}
//     Number of Oscars: ${this.oscarsNumber}
//     Profession: ${this.profession}`
    
//     return professionalInfo;
// }
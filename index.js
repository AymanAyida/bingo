
const randint = (max) => {
    return Math.floor(Math.random() * max);
}

const items = [
    '"Alottakaa te, mä tuun perässä"', 
    'Ikuisuuden kestävä tarina', 
    'Terho tulee juttelemaan välkällä', 
    'yliopistotasoa', 
    'Ari on opettanut teille',
    'Ranneliike ✌️',
    '"kirjan tekijät on mokannu"',
    '"tällä on todella hieno nimi"',
    'lääkiksen pääsykoe',
    'Terho näyttää lappua eikä se näy',
    '"Pliis Pliis"',
    'pelasta tämä ryhmä',
    '"hei pliis"',
    '"Sillon kun minä oon kouluni käyny"',
    '"Mä oon kemisti"',
    'Terho seisoo muistiinpanojen edessä',
    '"Keritäänkö vielä?\n Keritään"',
    'Epäselvä käsiala',
    '"Mutta en mä nyt siitä rokota"',
    '"Avainsanat"',
    '"Fyysikoiden tapa"',
    '"Super-"',
    'Ari tai Reijo tulee käymään',
    '"Camoon"',
    '"Se on nestettä niin kyllä sitä VOI juoda"',
    'Pantomiimi',
    "Terho puhuu jotain vierasta kieltä",
    'snobbailu',
    '"Kun mä sitä näin kysyn niin kyllä se on"',
    'Koskenkorva'
]

let taken_indexes = []

const grid = document.getElementById("grid")

for (let i = 0; i < 25; i++) {
    const new_button = document.createElement("button")
    new_button.id = i
    new_button.className = "normal"
    new_button.onclick = () => {
            switch (new_button.className) {
                case "normal":
                    new_button.className = "selected"
                    break;
            
                case "selected":
                    new_button.className = "normal"
                    break;
            }
        }
    
    if (i!==12) {
        while (true) {
            const rand_index = randint(items.length)
            if (!taken_indexes.includes(rand_index)) {
                new_button.textContent = items[rand_index]
                break
            }
        }
    }else {
        new_button.textContent = "terho"
    }

    grid.appendChild(new_button)
}
    
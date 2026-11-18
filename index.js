
const randint = (max) => {
    return Math.floor(Math.random() * max);
}


const items = [
    {
        text: '"Alottakaa te, mä tuun perässä"',
        tooltip: null,
        img: null
    },
    {
        text: 'Ikuisuuden kestävä tarina',
        tooltip: null,
        img: null
    },
    {
        text: 'Terho tulee juttelemaan välkällä',
        tooltip: null,
        img: null
    },
    {
        text: 'yliopistotasoa',
        tooltip: null,
        img: null
    },
    {
        text: 'Ari on opettanut teille',
        tooltip: null,
        img: null
    },
    {
        text: 'Ranneliike ✌️',
        tooltip: null,
        img: null
    },
    {
        text: '"kirjan tekijät on mokannu"',
        tooltip: null,
        img: null
    },
    {
        text: '"tällä on todella hieno nimi"',
        tooltip: null,
        img: null
    },
    {
        text: 'lääkiksen pääsykoe',
        tooltip: null,
        img: null
    },
    {
        text: 'Terho näyttää lappua eikä se näy',
        tooltip: null,
        img: null
    },
    {
        text: '"Pliis Pliis"',
        tooltip: null,
        img: null
    },
    {
        text: 'pelasta tämä ryhmä',
        tooltip: null,
        img: null
    },
    {
        text: '"hei pliis"',
        tooltip: null,
        img: null
    },
    {
        text: '"Sillon kun minä oon kouluni käyny"',
        tooltip: null,
        img: null
    },
    {
        text: '"Mä oon kemisti"',
        tooltip: null,
        img: null
    },
    {
        text: 'Terho seisoo muistiinpanojen edessä',
        tooltip: null,
        img: null
    },
    {
        text: '"Keritäänkö vielä?\n Keritään"',
        tooltip: null,
        img: null
    },
    {
        text: 'Epäselvä käsiala',
        tooltip: null,
        img: null
    },
    {
        text: '"Mutta en mä nyt siitä rokota"',
        tooltip: null,
        img: null
    },
    {
        text: '"Avainsanat"',
        tooltip: null,
        img: null
    },
    {
        text: '"Fyysikoiden tapa"',
        tooltip: null,
        img: null
    },
    {
        text: '"Super-"',
        tooltip: null,
        img: null
    },
    {
        text: 'Ari tai Reijo tulee käymään',
        tooltip: null,
        img: null
    },
    {
        text: '"Camoon"',
        tooltip: null,
        img: null
    },
    {
        text: '"Se on nestettä niin kyllä sitä VOI juoda"',
        tooltip: null,
        img: null
    },
    {
        text: 'Pantomiimi',
        tooltip: null,
        img: null
    },
    {
        text: 'Terho puhuu jotain vierasta kieltä',
        tooltip: null,
        img: null
    },
    {
        text: 'snobbailu',
        tooltip: null,
        img: null
    },
    {
        text: '"Kun mä sitä näin kysyn niin kyllä se on"',
        tooltip: null,
        img: null
    },
    {
        text: 'Koskenkorva',
        tooltip: null,
        img: null
    }
];

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
                new_button.textContent = items[rand_index].text
                break
            }
        }
    }else {
        const img = document.createElement("img");
        img.src = "./images/lotan_tammenterho.png";
        img.width=50
        img.height=50
        new_button.appendChild(img);
    }

    grid.appendChild(new_button)
}
    
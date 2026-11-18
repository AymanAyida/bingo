console.log("worksss");

const grid = document.getElementById("grid")

console.log(grid);


for (let i = 0; i < 25; i++) {
    const new_button = document.createElement("button")
    new_button.id = i
    new_button.className = "normal"
    if (i!==12) {
        new_button.textContent = i
        
        new_button.onclick = () => {
            switch (new_button.className) {
                case "normal":
                    new_button.className = "selected"
                    console.log("normal");
                    
                    break;
            
                case "selected":
                    new_button.className = "normal"
                    console.log("selected");
                    
                    break;
            }
        }
    }else {
        new_button.textContent = "terho"
    }

    grid.appendChild(new_button)
}
    
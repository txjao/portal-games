const showDetails = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    const response = await fetch("https://api.rawg.io/api/games/"+ id +"?key=bd5a173ddf44438494169173b40b4a73");
    const game = await response.json();

    console.log(game)
    
        const gameContainer = document.createElement("div");
        gameContainer.classList.add('details');
        gameContainer.innerHTML = `       
            <img src="${game.background_image}">
            <h1>${game.name}</h1>
            <div class="game-details">
            ${game.description}
            <span>Release Date: ${game.released}</span>
            <span>Rating: ${game.metacritic}</span>
            </div>
        `
    const wrapperDetails = document.querySelector(".main-banner");
    wrapperDetails.appendChild(gameContainer);
}

const search = () => {
    let nomeGame = document.querySelector('.texto-pesquisa').value;
    let url = `/pesquisa.html?name=${nomeGame}`;
    console.log("click")
    window.location.replace(url);
}

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", search);

showDetails();
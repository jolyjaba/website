let cards = document.getElementById("cards"),
    loading = document.getElementById("loading"),
    button = document.querySelector("button"),
    database;
button.onclick = function () {
    fetch("Task82.json")
        .then(response => response.json())
        .then(commits => database = commits);
    while (cards.childNodes.length) {
        cards.removeChild(cards.lastChild);
    }
    if (navigator.onLine) {
        cards.appendChild(loading);
        let pos = 0;
        let id = setInterval(frame, 0);

        function frame() {
            if (pos == 100) {
                clearInterval(id);
                cards.removeChild(cards.firstChild);
                button.innerHTML = "Items are loaded";
                database.forEach(element => {
                    createCard(element.model, element.price);
                });
            } else {
                pos++;
                loading.style.display = "block";
                button.innerHTML = "Loading...";
            }
        }
    } else {
        button.innerHTML = "Some error occured";
    }
}

function createCard(model, Price) {
    let card = document.createElement("div"),
        title = document.createElement("p"),
        price = document.createElement("p");
    price.innerHTML = Price;
    title.innerHTML = model;
    price.className = "price";
    title.className = "title";
    card.className = "card";
    card.appendChild(title);
    card.appendChild(price);
    cards.appendChild(card);
}
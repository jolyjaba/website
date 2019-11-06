let cards = document.getElementById("cards"),
    loading = document.getElementById("loading"),
    button = document.querySelector("button");
button.onclick = function () {
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
                createCard("Toyota Camry 50", 50000);
                createCard("Toyota Carina", 40000);
                createCard("Volkswagen Tuareg", 35000);
                createCard("Mercedes C100", 45000);
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
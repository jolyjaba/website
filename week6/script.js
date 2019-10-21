// function mOver(image) {
//     image.src = "marked.svg";
// }

// function mOut(image) {
//     image.src = "unmarked.svg";
// }

// function mark(image) {
//     image.src = "mark.svg";
// }

const rankingBody = document.querySelector("tbody");

function loadRankings() {
    const request = new XMLHttpRequest();
    request.open("get", "data/ranking.json");
    request.onload = () => {
        try {
            const json = JSON.parse(request.responseText);
            populateRankings(json);
        } catch (e) {
            console.warn("Could not load rankings! :(");
        }
    };
    request.send();
}

function populateRankings(json) {
    console.log(json);
}

document.addEventListener("DOMContentLoaded", () => { loadRankings(); });
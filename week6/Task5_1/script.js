// const rankingBody = document.querySelector("#DashBoard > tbody");

// document.addEventListener("DOMContentLoaded", () => {
//     loadRankings();
// });

// function loadRankings() {
//     const request = new XMLHttpRequest();
//     request.open("get", "data/rankings.json");
//     request.onload = () => {
//         try {
//             const json = JSON.parse(request.responseText);
//             populateRankings(json);
//         } catch (e) {
//             console.warn("Could not load rankings! :(");
//         }
//     };
//     request.send();
// }

// function populateRankings(json) {
//     while (rankingBody.firstChild) {
//         rankingBody.removeChild(rankingBody.firstChild);
//     }
//     json.forEach((row) => {
//         const tr = document.createElement("tr");
//         row.forEach((cell) => {
//             const td = document.createElement("td");
//             td.textContent = cell;
//             tr.appendChild(td);
//         });
//         rankingBody.appendChild(tr);
//     });
// }

let index = 0;

function hide() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("add_new_user").style.display = "none";
    document.querySelector("#deleteWindow").style.display = "none";
    document.querySelector("#main_del_win").style.display = "none";
    document.getElementById("edit_win").style.display = "none";
}

function show() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("add_new_user").style.display = "block";
}

function add() {
    let tbody = document.querySelector("tbody");
    let newRow = document.createElement("tr");
    let firstCell = document.createElement("td");
    let secondCell = document.createElement("td");
    let thirdCell = document.createElement("td");
    let fourthCell = document.createElement("td");
    let fifthCell = document.createElement("td");
    let sixthCell = document.createElement("td");
    let seventhCell = document.createElement("td");
    let accountStatus = (document.querySelector("#select_buttons input").checked == true) ? "Active" : "Inactive";
    firstCell.innerHTML = `<label class='container'><span>${accountStatus}</span><input type='checkbox'><span class='checkmark'></span></label>`;
    secondCell.innerHTML = document.querySelector("#input_name").value;
    thirdCell.innerHTML = document.querySelector("#input_email").value;
    fourthCell.innerHTML = document.querySelector("#select_option").value;
    fifthCell.innerHTML = document.querySelector("#input_phone").value;
    seventhCell.innerHTML = `<img class='view' src='view-image.png' alt='view'><img onclick='showDel(${index})' class='delete' src='Delete-Icon.svg' alt='Delete-Icon'><img onclick='edit(${index})' class='edit' src='Edit-Icon.svg' alt='Edit-Icon'>`;
    index++;
    newRow.appendChild(firstCell);
    newRow.appendChild(secondCell);
    newRow.appendChild(thirdCell);
    newRow.appendChild(fourthCell);
    newRow.appendChild(fifthCell);
    newRow.appendChild(sixthCell);
    newRow.appendChild(seventhCell);
    tbody.appendChild(newRow);
    hide();
}

function showDel(i) {
    document.querySelector("#deleteWindow").style.display = "block";
    document.querySelector("#main_del_win").style.display = "block";
    document.querySelector("#main_del_win img:nth-child(3)").addEventListener("click", function () {
        document.querySelector("tbody").deleteRow(i);
        hide();
        index--;
    });
}

function edit(i) {
    document.querySelector("#edit_input_name").value = document.querySelector("tbody").rows[i].cells[1].innerHTML;
    document.querySelector("#edit_input_email").value = document.querySelector("tbody").rows[i].cells[2].innerHTML;
    document.querySelector("#edit_input_phone").value = document.querySelector("tbody").rows[i].cells[4].innerHTML;
    document.querySelector("#edit_select_option").value = document.querySelector("tbody").rows[i].cells[3].innerHTML;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("edit_win").style.display = "block";
    document.querySelector("#edit_select_buttons img").addEventListener("click", function () {
        let accountStatus = (document.querySelector("#edit_select_buttons input").checked == true) ? "Active" : "Inactive";
        document.querySelector("tbody").rows[i].cells[0].innerHTML = `<label class='container'><span>${accountStatus}</span><input type='checkbox'><span class='checkmark'></span></label>`;
        document.querySelector("tbody").rows[i].cells[1].innerHTML = document.querySelector("#edit_input_name").value;
        document.querySelector("tbody").rows[i].cells[2].innerHTML = document.querySelector("#edit_input_email").value;
        document.querySelector("tbody").rows[i].cells[3].innerHTML = document.querySelector("#edit_select_option").value;
        document.querySelector("tbody").rows[i].cells[4].innerHTML = document.querySelector("#edit_input_phone").value;
        hide();
    });
}

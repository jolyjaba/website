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
    alert(`Index of added row: ${index}`);
    let tr = document.createElement("tr");
    tr.innerHTML =
        `<tr>
            <td>
                <label class="container">
                    <span>${(document.querySelector("#select_buttons input").checked == true) ? "Active" : "Inactive"}</span>
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
            </td>
            <td>${document.querySelector("#input_name").value}</td>
            <td>${document.querySelector("#input_email").value}</td>
            <td>${document.querySelector("#select_option").value}</td>
            <td>${document.querySelector("#input_phone").value}</td>
            <td></td>
            <td>
                <img class="view" src="view-image.png" alt="view">
                <img onclick="showDelete(${index})" class="delete" src="Delete-Icon.svg" alt="Delete-Icon">
                <img onclick="showEdit(${index})" class="edit" src="Edit-Icon.svg" alt="Edit-Icon">
            </td>
        </tr>`;
    document.querySelector("tbody").appendChild(tr);
    index++;
    hide();
}

function showDelete(i) {
    alert(`Index of showed row: ${i}`);
    document.querySelector("#deleteWindow").style.display = "block";
    document.querySelector("#main_del_win").style.display = "block";
    document.querySelector("#main_del_win img:nth-child(3)").addEventListener("click", function () {
        alert(`Index of deleted row: ${i}`);
        document.querySelector("tbody").deleteRow(i);
        hide();
        index--;
    });
}

function showEdit(i) {
    alert(`Index of showed row: ${i}`);
    document.querySelector("#edit_select_buttons input").checked = (document.querySelector("tbody").rows[i].cells[0].querySelector("span").innerHTML == "Active") ? true : false;
    document.querySelector("#edit_input_name").value = document.querySelector("tbody").rows[i].cells[1].innerHTML;
    document.querySelector("#edit_input_email").value = document.querySelector("tbody").rows[i].cells[2].innerHTML;
    document.querySelector("#edit_input_phone").value = document.querySelector("tbody").rows[i].cells[4].innerHTML;
    document.querySelector("#edit_select_option").value = document.querySelector("tbody").rows[i].cells[3].innerHTML;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("edit_win").style.display = "block";
    document.querySelector("#edit_select_buttons img").addEventListener("click", function () {
        saveEdit(i);
    });
}

function saveEdit(i) {
    alert(`Index of edited row: ${i}`);
    document.querySelector("tbody").rows[i].cells[0].innerHTML = 
    `<label class='container'>
        <span>${(document.querySelector("#edit_select_buttons input").checked == true) ? "Active" : "Inactive"}</span>
        <input type='checkbox'>
        <span class='checkmark'></span>
    </label>`;
    document.querySelector("tbody").rows[i].cells[1].innerHTML = document.querySelector("#edit_input_name").value;
    document.querySelector("tbody").rows[i].cells[2].innerHTML = document.querySelector("#edit_input_email").value;
    document.querySelector("tbody").rows[i].cells[3].innerHTML = document.querySelector("#edit_select_option").value;
    document.querySelector("tbody").rows[i].cells[4].innerHTML = document.querySelector("#edit_input_phone").value;
    hide();
}
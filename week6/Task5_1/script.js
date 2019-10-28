function reset() {
    document.querySelector("#input_name").value = "";
    document.querySelector("#input_email").value = "";
    document.querySelector("#select_option").value = "";
    document.querySelector("#input_phone").value = "";
    document.querySelector(".container input").checked = false;
}

function hide() {
    reset();
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
    let tr = document.createElement("tr");
    tr.innerHTML =
    `<tr>
        <td>
            <label class="container">
                <span>${document.querySelector("#select_buttons input").checked == true ? "Active" : "Inactive"}</span>
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
            <img onclick="showDelete(this)" class="delete" src="Delete-Icon.svg" alt="Delete-Icon">
            <img onclick="showEdit(this)" class="edit" src="Edit-Icon.svg" alt="Edit-Icon">
        </td>
    </tr>`;
    document.querySelector("tbody").appendChild(tr);
    hide();
}

function showDelete(thisRow) {
    document.querySelector("#deleteWindow").style.display = "block";
    document.querySelector("#main_del_win").style.display = "block";
    document.querySelector("#main_del_win img:nth-child(3)").onclick = function () {
        document.querySelector("tbody").deleteRow(thisRow.parentElement.parentElement.rowIndex - 1);
        hide();
    };
}
let tr;
function showEdit(thisRow) {
    tr = thisRow.parentElement.parentElement;
    document.querySelector("#edit_select_buttons input").checked = tr.cells[0].querySelector("span").innerHTML == "Active" ? true : false;
    document.querySelector("#edit_input_name").value = tr.cells[1].innerHTML;
    document.querySelector("#edit_input_email").value = tr.cells[2].innerHTML;
    document.querySelector("#edit_input_phone").value = tr.cells[4].innerHTML;
    document.querySelector("#edit_select_option").value = tr.cells[3].innerHTML;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("edit_win").style.display = "block";
}

function saveEdit() {
    tr.cells[0].innerHTML = `
    <label class='container'>
        <span>${document.querySelector("#edit_select_buttons input").checked == true ? "Active" : "Inactive"}</span>
        <input type='checkbox'>
        <span class='checkmark'></span>
    </label>
    `;
    tr.cells[1].innerHTML = document.querySelector("#edit_input_name").value;
    tr.cells[2].innerHTML = document.querySelector("#edit_input_email").value;
    tr.cells[3].innerHTML = document.querySelector("#edit_select_option").value;
    tr.cells[4].innerHTML = document.querySelector("#edit_input_phone").value;
    hide();
}
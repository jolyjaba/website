function add() {
    document.querySelector("#name").style.removeProperty("border");
    document.querySelector("#surname").style.removeProperty("border");
    document.querySelector("#faculty").style.removeProperty("border");
    let table = document.querySelector("#students");
    let name = document.querySelector("#name").value;
    let surname = document.querySelector("#surname").value;
    let faculty = document.querySelector("#faculty").value;
    if (name != "" && surname != "" && faculty != -1) {
        let newRow = table.insertRow();
        newRow.insertCell(0).innerHTML = name;
        newRow.insertCell(1).innerHTML = surname;
        let newRow2 = newRow.insertCell(2).style.fontWeight = "bold";
        newRow2.innerHTML = faculty;
    } else {
        document.querySelector("#name").style.border = (name == "") ? "thick solid red" : "";
        document.querySelector("#surname").style.border = (surname == "") ? "thick solid red" : "";
        document.querySelector("#faculty").style.border = (faculty == -1) ? "thick solid red" : "";
    }
}
window.onload = function () {
    for (let button of document.getElementsByTagName("button")) {
        button.onclick = function () {
            let span = this.parentElement.getElementsByTagName("span")[0];
            span.style.textDecoration = span.style.textDecoration == "line-through" ? "" : "line-through";
        }
    }
}
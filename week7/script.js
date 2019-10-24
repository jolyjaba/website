function mark(i) {
    document.querySelector(`div:nth-child(${i}) span`).style.textDecoration =
        (document.querySelector(`div:nth-child(${i}) span`).style.textDecoration != "line-through") ?
        "line-through" : "";
}
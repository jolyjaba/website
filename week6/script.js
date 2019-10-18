let i = 1,
    j = 1;

function hover(image) {
    if (j == 1) {
        image.src = (i == 1) ? "marked.svg" : "unmarked.svg";
        i = -i;
    }
}

function mark(image) {
    let mark = "mark.svg";
    image.src = (j == 1) ? "mark.svg" : "marked.svg";
    j = -j;
}
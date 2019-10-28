let area = document.getElementById("Frame"),
    object = document.getElementById("object"),
    position_x = document.getElementById("position-x"),
    position_y = document.getElementById("position-y"),
    position_type = document.getElementById("position-type"),
    css_obj = document.getElementById("css-prop"),
    background = document.getElementById("Background"),
    border_radius = document.getElementById("Border"),
    width = document.getElementById("Width"),
    height = document.getElementById("Height"),
    css_border = document.getElementById("css-border");
window.onload = function () {
    document.getElementById("tools").onclick = function () {
        document.getElementById("frame").style.display = "none";
        document.getElementById("fill").style.display = "block";
    }
    document.getElementById("frame_prop").onclick = function () {
        document.getElementById("fill").style.display = "none";
        document.getElementById("frame").style.display = "block";
    }
    document.getElementById("add_object").onclick = function () {
        area.querySelector("span").style.display = "none";
        let newImage = document.createElement("img");
        newImage.width = "200";
        newImage.src = `${object.value}.svg`;
        newImage.style.position = position_type.value;
        newImage.style.marginTop = position_x.value;
        newImage.style.marginRight = position_y.value;
        newImage.style = css_obj.value;
        area.appendChild(newImage);
    }
    document.getElementById("save_frame").onclick = function () {
        area.style.borderRadius = border_radius.value;
        area.style.background = background.value;
        area.style.width = width.value;
        area.style.height = height.value;
        area.style = css_border.value;
    }
}
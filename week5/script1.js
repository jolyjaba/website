function determine() {
    let s11 = Number(document.getElementById("s11").value),
        s12 = Number(document.getElementById("s12").value),
        s13 = Number(document.getElementById("s13").value),
        s21 = Number(document.getElementById("s21").value),
        s22 = Number(document.getElementById("s22").value),
        s23 = Number(document.getElementById("s23").value),
        s31 = Number(document.getElementById("s31").value),
        s32 = Number(document.getElementById("s32").value),
        s33 = Number(document.getElementById("s33").value);
    document.getElementById("result").innerHTML =
        s11 * (s22 * s33 - s32 * s23) -
        s12 * (s21 * s33 - s31 * s23) +
        s13 * (s21 * s32 - s31 * s22);
}
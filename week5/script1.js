function determine() {
    let s11 = Number(document.getElementById("s11").value);
    let s12 = Number(document.getElementById("s12").value);
    let s13 = Number(document.getElementById("s13").value);
    let s21 = Number(document.getElementById("s21").value);
    let s22 = Number(document.getElementById("s22").value);
    let s23 = Number(document.getElementById("s23").value);
    let s31 = Number(document.getElementById("s31").value);
    let s32 = Number(document.getElementById("s32").value);
    let s33 = Number(document.getElementById("s33").value);
    document.getElementById("result").innerHTML =
        s11 * (s22 * s33 - s32 * s23) -
        s12 * (s21 * s33 - s31 * s23) +
        s13 * (s21 * s32 - s31 * s22);
}
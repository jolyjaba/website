function determine() {
    let s11 = document.getElementById("s11").value,
        s12 = document.getElementById("s12").value,
        s13 = document.getElementById("s13").value,
        s21 = document.getElementById("s21").value,
        s22 = document.getElementById("s22").value,
        s23 = document.getElementById("s23").value,
        s31 = document.getElementById("s31").value,
        s32 = document.getElementById("s32").value,
        s33 = document.getElementById("s33").value;
    document.getElementById("result").innerHTML =
        s11 * (s22 * s33 - s32 * s23) -
        s12 * (s21 * s33 - s31 * s23) +
        s13 * (s21 * s32 - s31 * s22);
}
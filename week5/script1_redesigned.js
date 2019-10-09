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
    document.querySelector("#first").innerHTML = s11;
    document.querySelector("#second").innerHTML = s12;
    document.querySelector("#third").innerHTML = s13;
    document.querySelector("#fourth1").innerHTML = document.querySelector("#fourth2").innerHTML = s21;
    document.querySelector("#fifth1").innerHTML = document.querySelector("#fifth2").innerHTML = s22;
    document.querySelector("#sixth1").innerHTML = document.querySelector("#sixth2").innerHTML = s23;
    document.querySelector("#seventh1").innerHTML = document.querySelector("#seventh2").innerHTML = s31;
    document.querySelector("#eighth1").innerHTML = document.querySelector("#eighth2").innerHTML = s32;
    document.querySelector("#ninth1").innerHTML = document.querySelector("#ninth2").innerHTML = s33;
    document.querySelector("#res1").innerHTML =
        document.querySelector("#res2").innerHTML =
        s11 * (s22 * s33 - s32 * s23) -
        s12 * (s21 * s33 - s31 * s23) +
        s13 * (s21 * s32 - s31 * s22);
}
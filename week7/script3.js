let cars = [{
    brand: 'Toyota',
    model: 'Camry',
    year: 1999,
    price: 20000,
    image_url: "https://media.ed.edmunds-media.com/toyota/camry/2016/ot/2016_toyota_camry_LIFE1_ot_902163_1280.jpg"
}, {
    brand: 'BMW',
    model: 'X6',
    year: 2014,
    price: 25000,
    image_url: "https://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_5_1280.jpg"
}, {
    brand: 'Daewoo',
    model: 'Nexia',
    year: 2007,
    price: 15000,
    image_url: "https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg"
}];
let carsArr = document.getElementById("cars"),
    itemsCount = document.getElementById("items"),
    sum = document.getElementById("sum");

window.onload = function () {
    for (let car of cars) {
        let div = document.createElement("div");
        car["status"] = 1;
        div.innerHTML = `
        <div class="card">
            <img class="card" src="${car.image_url}" alt="${car.brand}">
            <img onclick="toCart(this)" width="25px" src="add-to-online-cart.svg" alt="${car.price}" class="basket">
            ${car.brand + " " + car.model}
        </div>
        `;
        carsArr.appendChild(div);
    }
}

function toCart(thisCar) {
    let remove = "file:///Users/daryn/Documents/GitHub/webtasks/week7/remove-from-cart.svg";
    let add = "file:///Users/daryn/Documents/GitHub/webtasks/week7/add-to-online-cart.svg";
    if (thisCar.src === add) {
        thisCar.src = remove;
        ++itemsCount.innerHTML;
        sum.innerHTML = (Number)(sum.innerHTML) + (Number)(thisCar.alt);
    } else {
        thisCar.src = add;
        --itemsCount.innerHTML;
        sum.innerHTML = (Number)(sum.innerHTML) - (Number)(thisCar.alt);
    }
}
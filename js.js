function viewMore() {
    let card = document.getElementById("cards");
    let card2 = document.getElementById("cards2");
    let card3 = document.getElementById("cards3");
    let card4 = document.getElementById("cards4");
    let card5 = document.getElementById("cards5");
    let card6 = document.getElementById("cards6");
    let viewButton = document.getElementById("viewMoreButton");
    let noViewButton = document.getElementById("noViewButton");

    noViewButton.classList.remove("d-none")
    viewButton.classList.add("d-none")
    card.classList.remove("d-none")
    card2.classList.remove("d-none")
    card3.classList.remove("d-none")
    card4.classList.remove("d-none")
    card5.classList.remove("d-none")
    card6.classList.remove("d-none")
}

function noViewMore() {
    let card = document.getElementById("cards");
    let card2 = document.getElementById("cards2");
    let card3 = document.getElementById("cards3");
    let card4 = document.getElementById("cards4");
    let card5 = document.getElementById("cards5");
    let card6 = document.getElementById("cards6");
    let viewButton = document.getElementById("viewMoreButton");
    let noViewButton = document.getElementById("noViewButton");

    noViewButton.classList.add("d-none")
    viewButton.classList.remove("d-none")
    card.classList.add("d-none")
    card2.classList.add("d-none")
    card3.classList.add("d-none")
    card4.classList.add("d-none")
    card5.classList.add("d-none")
    card6.classList.add("d-none")
}
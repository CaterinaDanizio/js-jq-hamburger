// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
// Partite come base del vostro esercizio dallo ZIP che vi passo:
// Ricordate di scrivere solo il codice JavaScript con jQuery e non modificare HTML e CSS

$(".header-right .fas.fa-bars").click(displayOn);
$(".hamburger-menu .fas.fa-times").click(displayOff);

function displayOn() {
  $(".hamburger-menu").addClass("active")
}

function displayOff() {
  $(".hamburger-menu").removeClass("active")
}

var appearMenu = document.querySelector(".link-menu");
var modalMenu = document.querySelector(".modal-menu");

var appearSearch = document.querySelector(".btn-search");
var modalSearch = document.querySelector(".modal-search");

var appearEntrance = document.querySelector(".btn-entrance");
var modalEntrance = document.querySelector(".modal-entrance");

var appearBusket = document.querySelector(".btn-busket");
var modalBusket = document.querySelector(".modal-busket");

var appearSorting = document.querySelector(".btn-sorting");
var modalSorting = document.querySelector(".modal-sorting");

appearMenu.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalMenu.classList.toggle("appear-modal");
});

appearSearch.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalSearch.classList.toggle("appear-modal");
});

appearEntrance.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalEntrance.classList.toggle("appear-modal");
});

appearBusket.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalBusket.classList.toggle("appear-modal");
});

appearSorting.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalSorting.classList.toggle("appear-modal");
});
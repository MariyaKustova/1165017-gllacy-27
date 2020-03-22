var appearMenu = document.querySelector(".link-menu");
var modalMenu = document.querySelector(".modal-menu");

var appearSearch = document.querySelector(".btn-search");
var modalSearch = document.querySelector(".modal-search");

var appearEntrance = document.querySelector(".btn-entrance");
var modalEntrance = document.querySelector(".modal-entrance");
var emailEntrance = document.querySelector(".email-entrance");
var passwordEntrance = document.querySelector(".password-entrance");

var appearBusket = document.querySelector(".btn-busket");
var modalBusket = document.querySelector(".modal-busket");

var appearSorting = document.querySelector(".btn-sorting");
var modalSorting = document.querySelector(".modal-sorting");

var isStorageSupport = true;
var storageEmailEntrance = "";

try {
    storageEmailEntrance = localStorage.getItem("emailEntrance");
    emailEntrance.value = storageEmailEntrance;
      } catch (err) {
    isStorageSupport = false;
  }

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

modalEntrance.addEventListener("submit", function(evt) {
    if (
      !emailEntrance.value ||
      !passwordEntrance.value 
    ) {
      evt.preventDefault();
      modalEntrance.classList.add("modal-error");
      setTimeout(function() {
          modalEntrance.classList.remove("modal-error");
      }, 1000);
    } else {
      if (isStorageSupport) {
        localStorage.setItem("emailEntrance", emailEntrance.value);
      }
    }
  });
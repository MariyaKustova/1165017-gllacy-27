var modalEntrance = document.querySelector(".modal-entrance");
var emailEntrance = document.querySelector(".email-entrance");
var passwordEntrance = document.querySelector(".password-entrance");

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
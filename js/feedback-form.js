var modalEntrance = document.querySelector(".form-entrance");
var emailEntrance = document.querySelector(".email-entrance");
var passwordEntrance = document.querySelector(".password-entrance");

var appearFeedbackForm = document.querySelector(".btn.btn-address");
var modalFeedbackForm = document.querySelector(".feedback-form");
var closeFeedbackForm = document.querySelector(".btn-close");
var feedbackInputName = document.getElementById("name-surname");
var feedbackInputEmail = document.getElementById("email-feedback-form");
var feedback = document.getElementById("feedback");

var mailingForm = document.querySelector(".newsletter-subscription");
var inputEmailMailing = document.querySelector(".input-email-mailing");

var isStorageSupport = true;
var storageFeedbackInputName = "";
var storageFeedbackInputEmail = "";
var storageEmailEntrance = "";
var storageInputEmailMailing = "";


try {
  storageFeedbackInputName = localStorage.getItem("feedbackInputName");
  feedbackInputName.value = storageFeedbackInputName;
  storageFeedbackInputEmail = localStorage.getItem("feedbackInputEmail");
  feedbackInputEmail.value = storageFeedbackInputEmail;
} catch (err) {
  isStorageSupport = false;
}

try {
    storageEmailEntrance = localStorage.getItem("emailEntrance");
    emailEntrance.value = storageEmailEntrance;
      } catch (err) {
    isStorageSupport = false;
  }

try {
    storageInputEmailMailing = localStorage.getItem("inputEmailMailing");
    inputEmailMailing.value = storageInputEmailMailing;
      } catch (err) {
    isStorageSupport = false;
  }

appearFeedbackForm.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFeedbackForm.classList.add("appear-modal");
});

closeFeedbackForm.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalFeedbackForm.classList.remove("appear-modal");
});

closeFeedbackForm.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 13) {
    evt.preventDefault();
    modalFeedbackForm.classList.remove("appear-modal");
  }
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

mailingForm.addEventListener("submit", function(evt) {
    if (
      !inputEmailMailing.value 
    ) {
      evt.preventDefault();
      mailingForm.classList.add("modal-error");
      setTimeout(function() {
        mailingForm.classList.remove("modal-error");
      }, 1000);
    } else {
      if (isStorageSupport) {
        localStorage.setItem("inputEmailMailing", inputEmailMailing.value);
      }
    }
  });

modalFeedbackForm.addEventListener("submit", function(evt) {
    if (
      !feedbackInputName.value ||
      !feedbackInputEmail.value ||
      !feedback.value
    ) {
      evt.preventDefault();
      modalFeedbackForm.classList.add("modal-error");
      setTimeout(function() {
        modalFeedbackForm.classList.remove("modal-error");
      }, 1000);
    } else {
      if (isStorageSupport) {
        localStorage.setItem("feedbackInputName", feedbackInputName.value);
        localStorage.setItem("feedbackInputEmail", feedbackInputEmail.value);
      }
    }
  });


  var link = document.querySelector(".sedona_hotel_search");

  var popup = document.querySelector(".modal_search");
  var form = popup.querySelector("form");
  var dateIn = popup.querySelector("[name=datein]");
  var dateOut = popup.querySelector("[name=dateout]");

  var storage = localStorage.getItem("datein");

  var isStorageSupport = true;
  var storage = "";

  try {
  storage = localStorage.getItem("datein");
  } catch (err) {
  isStorageSupport = false;
  }

  if (popup) {
    popup.classList.add("modal_hide");
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal_error");
    popup.classList.toggle("modal_hide");
    dateIn.focus();
    if (storage) {
      dateIn.value = storage;
      dateOut.focus();
    } else {
      dateIn.focus();
    }
  });

  form.addEventListener("submit", function (evt) {
if (!dateIn.value || !dateOut.value) {
   evt.preventDefault();
   popup.classList.remove("modal_error");
   popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal_error");
  }
    if (isStorageSupport) {
      localStorage.setItem("datein", dateIn.value);
  }
  });

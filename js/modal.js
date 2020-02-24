
  var link = document.querySelector(".sedona_hotel_search");

  var popup = document.querySelector(".modal_search");
  var form = popup.querySelector("form");
  var datein = popup.querySelector("[name=datein]");
  var dateout = popup.querySelector("[name=dateout]");

  var storage = localStorage.getItem("datein");

  var isStorageSupport = true;
  var storage = "";

  try {
  storage = localStorage.getItem("datein");
  } catch (err) {
  isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal_error");
    popup.classList.toggle("modal_hide");
    datein.focus();
    if (storage) {
      datein.value = storage;
      dateout.focus();
    } else {
      datein.focus();
    }
  });

  form.addEventListener("submit", function (evt) {
if (!datein.value || !dateout.value) {
   evt.preventDefault();
   popup.classList.remove("modal_error");
   popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal_error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("datein", datein.value);
    }
  }
  });

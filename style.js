var toggle_dark = document.querySelector(".toggle_dark");
var toggle_icon = document.querySelector(".toggle_dark i");
var profile_card = document.querySelector(".profile-card");

toggle_dark.addEventListener("click", () => {
  var r = toggle_dark.classList.toggle("active");
  if (r) {
      toggle_icon.className = "far fa-circle";
      document.body.style.color = "#141414";
      toggle_icon.style.color = "#e5e5e5";
      profile_card.style.backgroundColor = "#9f9d99d6";
  } else {
        document.body.style.color = "white";
        toggle_icon.className = "fas fa-circle";
        profile_card.style.backgroundColor = "#070707";
  }
})
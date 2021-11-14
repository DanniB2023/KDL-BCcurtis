var toggle_dark = document.querySelector(".toggle_dark");
var toggle_icon = document.querySelector(".toggle_dark i");
var profile_card = document.querySelector(".profile-card");

toggle_dark.addEventListener("click", () => {
  var r = toggle_dark.classList.toggle("active");
  if (r) {
      toggle_icon.className = "far fa-circle";
      document.body.style.color = "black";
      toggle_icon.style.color = "black";
      profile_card.style.backgroundColor = "#ffffff40";
  } else {
        document.body.style.color = "white";
        toggle_icon.className = "fas fa-circle";
        profile_card.style.backgroundColor = "#201f1857";
  }
})
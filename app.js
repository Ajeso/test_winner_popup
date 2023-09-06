document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const closeButton = document.getElementById("close-popup");

  const hasSeenPopup = localStorage.getItem("popupSeen");
  if (
    !hasSeenPopup ||
    Date.now() - parseInt(hasSeenPopup) > 2 * 24 * 60 * 60 * 1000
  ) {
    popup.style.display = "block";
  }

  closeButton.addEventListener("click", function () {
    popup.style.display = "none";
    localStorage.setItem("popupSeen", Date.now());
  });
});

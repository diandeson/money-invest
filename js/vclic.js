function addActionButton() {
  var button = document.getElementById("action-button");
  button.style.display = "block";
  button.innerHTML = "Compre agora";

  setTimeout(function () {
    alert("Aproveite a oferta exclusiva hoje!");
  }, 900000); // 800000 milliseconds = 13 minutes
}

var video = document.getElementById("video");
video.addEventListener("loadedmetadata", function () {
  addActionButton();
});

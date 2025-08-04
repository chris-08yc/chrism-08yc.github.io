 function openPreview(imgElement) {
    const previewBox = document.getElementById("previewBox");
    const previewImg = document.getElementById("previewImg");
    previewImg.src = imgElement.src;
    previewBox.classList.remove("hidden");
  }

  function closePreview() {
    document.getElementById("previewBox").classList.add("hidden");
  }

  // Optional: Close when clicking outside the image
  document.getElementById("previewBox").addEventListener("click", function (e) {
    if (e.target === this) {
      closePreview();
    }
  });
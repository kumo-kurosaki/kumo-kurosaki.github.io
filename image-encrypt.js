// Base64 加密圖片 URL
const encryptedImages = {
  "2026spring": "aHR0cHM6Ly9pbWFnZXMucGx1cmsuY29tLzJFTUt6S1k5ZTI1T2RwS0tuU0trbmJycy1MSlYtLnBuZw=="
};

function decryptImage(str) {
  return atob(str);
}

function renderImages() {
  for (const id in encryptedImages) {
    const container = document.getElementById(id);
    if (!container) continue;
    const img = document.createElement("img");
    img.src = decryptImage(encryptedImages[id]);
    img.alt = id;
    img.style.maxWidth = "100%";
    container.appendChild(img);
  }
}

/* =========================
   存取關鍵（非明文）
   ========================= */
const accessKey = String.fromCharCode(50, 48, 49, 54); // 2016

/* =========================
   XOR
   ========================= */
function xor(str, key) {
  let out = "";
  for (let i = 0; i < str.length; i++) {
    out += String.fromCharCode(
      str.charCodeAt(i) ^ key.charCodeAt(i % key.length)
    );
  }
  return out;
}

/* =========================
   Base64 helpers
   ========================= */
function b64Encode(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function b64Decode(str) {
  return decodeURIComponent(escape(atob(str)));
}

/* =========================
   密碼檢查
   ========================= */
function checkPassword(input) {
  const normalized = input
    .trim()
    .replace(/[０-９]/g, c =>
      String.fromCharCode(c.charCodeAt(0) - 0xFEE0)
    );

  return normalized === accessKey;
}

/* =========================
   已加密作品資料
   （repo 無法看出網址）
   ========================= */
const encryptedLinks = [
  {
    name: "2025萬聖節",
    img: [
      "FgoYF1Yc",
      "GxAXFx4W",
      "HhQbHk0Z",
      "G1wXFxYb",
      "Ew=="
    ].join(""),
    link: [
      "FhYXF1sS",
      "G1oQHhAX",
      "GxAXFx4W",
      "HhQbHk0Z",
      "G1wXFxYb",
      "Ew=="
    ].join("")
  },

  {
    name: "2026新春",
    img: [
      "EwQfE0gW",
      "BhcQG1sS",
      "FhwbH0pX",
      "F1cXFh0Y",
      "EwE="
    ].join(""),
    link: [
      "FgoYF1Yc",
      "G1sQHhAX",
      "FhQYH0sY",
      "GxAXFx4W",
      "Ew=="
    ].join("")
  },

  {
    name: "黑崎雪莉",
    img: [
      "FhwbH0pX",
      "G1wXFxYb",
      "GxAXFx4W",
      "HhQbHk0Z",
      "Ew=="
    ].join(""),
    link: [
      "FgoYF1Yc",
      "G1sQHhAX",
      "HhQbHk0Z",
      "GxAXFx4W",
      "Ew=="
    ].join("")
  }
];

/* =========================
   解密給 gallery.html 使用
   ========================= */
function getDecryptedLinks(input) {
  if (!checkPassword(input)) return [];

  return encryptedLinks.map(item => ({
    name: item.name,
    img: b64Decode(xor(item.img, input)),
    link: b64Decode(xor(item.link, input))
  }));
}

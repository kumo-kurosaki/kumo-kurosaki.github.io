// 密碼設定
const correctPassword = "2016";

// 作品集資料（圖片 URL + 下載連結都 XOR 加密）
const encryptedLinks = [
  {
    name: "2026新春",
    img: xorEncrypt("https://images.plurk.com/2EMKZK9e2Sl7dD105Y4Xjl.png", correctPassword),
    link: xorEncrypt("https://drive.google.com/file/d/1sf4M4s6BB9ax8o26G-S1jXvUg_d_Rq8j/view?usp=drive_link", correctPassword)
  }
];

// XOR 加密 / 解密函式
function xorEncrypt(str, key) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return res;
}

// 驗證密碼
function checkPassword(input) {
  const normalized = input.trim().replace(/[０-９]/g, ch =>
    String.fromCharCode(ch.charCodeAt(0) - 0xFEE0)
  );
  return normalized === correctPassword;
}

// 解密作品集
function getDecryptedLinks(input) {
  if (!checkPassword(input)) return [];
  return encryptedLinks.map(item => ({
    name: item.name,
    img: xorEncrypt(item.img, input),
    link: xorEncrypt(item.link, input)
  }));
}

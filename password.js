// password.js
// 正確密碼：2016（半形）
const correctHash =
  "7c222fb2927d828af22f592134e8932480637c0d1c6d3a7a7ef5f5a1f5e5c6b5";

/**
 * 將全形數字轉為半形
 */
function normalizeInput(str) {
  return str
    .trim()
    .replace(/[０-９]/g, ch =>
      String.fromCharCode(ch.charCodeAt(0) - 0xFEE0)
    );
}

function checkPassword(input) {
  if (typeof sha256 !== "function") {
    console.error("❌ sha256 尚未載入");
    return false;
  }

  const normalized = normalizeInput(input);
  const hash = sha256(normalized);

  // 除錯（確認後可刪）
  console.log("正規化後輸入:", normalized);
  console.log("Hash:", hash);

  return hash === correctHash;
}


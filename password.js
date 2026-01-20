// password.js
// 正確密碼：2016（半形）
const correctHash =
  "da6e2f539726fabd1f8cd7c9469a22b36769137975b28abc65fe2dc29e659b77";

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





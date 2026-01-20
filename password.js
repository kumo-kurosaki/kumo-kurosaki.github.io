// password.js
// ==============================
// 正確密碼：2016
// SHA-256("2016")
// ==============================
const correctHash =
  "7c222fb2927d828af22f592134e8932480637c0d1c6d3a7a7ef5f5a1f5e5c6b5";

/**
 * 檢查密碼是否正確
 * @param {string} input
 * @returns {boolean}
 */
function checkPassword(input) {
  if (typeof sha256 !== "function") {
    console.error("❌ sha256 尚未載入，請確認 js-sha256 CDN 是否正常");
    return false;
  }

  const sanitized = input.trim(); // 移除前後空白
  const inputHash = sha256(sanitized);

  // 🔍 除錯用（之後可刪）
  console.log("輸入內容:", sanitized);
  console.log("輸入 Hash:", inputHash);
  console.log("正確 Hash:", correctHash);

  return inputHash === correctHash;
}

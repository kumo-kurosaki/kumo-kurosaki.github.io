// password.js
// 正確密碼：2016（半形）
// SHA-256 標準值: 7c222fb2927d828af22f592134e8932480637c0d1c6d3a7a7ef5f5a1f5e5c6b5

(function() {
  if (typeof sha256 !== "function") {
    console.error("❌ js-sha256 尚未載入");
    return;
  }

  const correctHash = "da6e2f539726fabd1f8cd7c9469a22b36769137975b28abc65fe2dc29e659b77";

  function normalizeInput(str) {
    return str.trim().replace(/[０-９]/g, ch =>
      String.fromCharCode(ch.charCodeAt(0) - 0xFEE0)
    );
  }

  window.checkPassword = function(input) {
    const normalized = normalizeInput(input);
    const hash = sha256(normalized);

    // 🔹 除錯可刪
    console.log("正規化後輸入:", normalized);
    console.log("Hash:", hash);

    return hash === correctHash;
  };
})();


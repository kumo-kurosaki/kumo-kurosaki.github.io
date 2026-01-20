// 密碼 hash（示範：2016 的 SHA-256）
const correctHash = "1e8b2b42c2b54d8a3d5bb95e0f2ad124d18c7f39b5c6f0d2f1e1c49b6b7e6f12";

// 驗證輸入
function checkPassword(input) {
  return sha256(input) === correctHash;
}


// 2016 的 SHA-256 雜湊值
const correctHash = "7c222fb2927d828af22f592134e8932480637c0d1c6d3a7a7ef5f5a1f5e5c6b5";

function checkPassword(input) {
  return sha256(input) === correctHash;
}

function checkPassword(input) {
  // 去除頭尾空白，確保小寫比對
  const sanitized = input.trim();
  return sha256(sanitized) === correctHash;
}

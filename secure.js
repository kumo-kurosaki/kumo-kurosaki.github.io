/* =========================
   驗證用雜湊（示例）
   ⚠️ 之後你只要換這一行
   ========================= */
const _s = "40510175845988f13f6162ed8526f0b09";

/* =========================
   雜湊函式
   ========================= */
function _h(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h).toString(16);
}

/* =========================
   驗證輸入
   ========================= */
function _v(input) {
  const n = input
    .trim()
    .replace(/[０-９]/g, c =>
      String.fromCharCode(c.charCodeAt(0) - 0xFEE0)
    );
  return _h(n) === _s;
}

/* =========================
   已加密作品資料（無任何明文網址）
   ========================= */
const _d = [
  {
    t: "2025萬聖節",
    i: "aHR0cHM6Ly9pbWFnZXMucGx1cmsuY29tLzY5WnBsVE1GcmdPb0pBOXFEdzVMUGwucG5n",
    l: "aHR0cHM6Ly93d3cuZHJvcGJveC5jb20vc2NsL2ZpLzNnM3RqNGF2ZzEzNjk2dXhkdmFlbi8yMDI1LUhhbGxvd2Vlbi1LSy5wbmc/cmwrZXk9NXIyZnpkZnVjdHNwOTAzbHpkYnZhYzZoeCZlPTEmc3Q9emVtYWV5MXcmZGw9MA=="
  },
  {
    t: "2026新春",
    i: "aHR0cHM6Ly9pbWFnZXMucGx1cmsuY29tLzJFTUtaSzllMlNsN2REMTA1WTRYamwucG5n",
    l: "aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xc2Y0TTRzNkJCOWF4OG8yNkctUzFqWHZVZ19kX1JxOGovdmlldz91c3A9ZHJpdmVfbGluaw=="
  },
  {
    t: "黑崎雪莉",
    i: "aHR0cHM6Ly9pbWFnZXMucGx1cmsuY29tLzJtZHJRMGM0bjlwUFA0SHlLdjhRaHAucG5n",
    l: "aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xcEV0OV9ZV244YlBwWEhRTF9qa3A3ZFR0SjVRMTF4RVcvdmlldz91c3A9ZHJpdmVfbGluaw=="
  }
];

/* =========================
   Base64 解碼
   ========================= */
function _b(str) {
  return decodeURIComponent(escape(atob(str)));
}

/* =========================
   對外唯一接口
   ========================= */
function getSecureContent(input) {
  if (!_v(input)) return [];
  return _d.map(x => ({
    name: x.t,
    img: _b(x.i),
    link: _b(x.l)
  }));
}


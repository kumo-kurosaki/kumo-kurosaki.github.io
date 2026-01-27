const _s = "MjM4NTcw";

function _n(v) {
  return String(v).trim();
}

function _v(input) {
  return btoa(_n(input)) === _s;
}

/* =========================
   已加密作品資料（不要動）
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

function _b(str) {
  return decodeURIComponent(escape(atob(str)));
}

function getSecureContent(input) {
  if (!_v(input)) return [];
  return _d.map(x => ({
    name: x.t,
    img: _b(x.i),
    link: _b(x.l)
  }));
}


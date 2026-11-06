/* Her Safar illustration set: one flat style, one palette.
   ink #280049 · violet #36045F · mid #6B3A99 · lilac #CDB6E6 · mist #EFE7F7 · orange #F84E00 · peach #FFB48F */
(function () {
  const C = { ink: '#280049', violet: '#36045F', mid: '#6B3A99', lilac: '#CDB6E6', mist: '#EFE7F7', orange: '#F84E00', peach: '#FFB48F' };
  const svg = (vb, body, label) => `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label || ''}" focusable="false">${body}</svg>`;

  /* ---------- scenes (160 x 160) ---------- */
  const spiritual = () => svg('0 0 160 160', `
    <circle cx="80" cy="82" r="70" fill="${C.mist}"/><circle cx="120" cy="40" r="12" fill="${C.orange}"/>
    <path d="M30 108 V90 C30 78 36 70 42 64 C48 70 54 78 54 90 V108Z" fill="${C.mid}"/>
    <path d="M106 108 V90 C106 78 112 70 118 64 C124 70 130 78 130 90 V108Z" fill="${C.mid}"/>
    <path d="M80 20 C72 36 64 60 60 108 H100 C96 60 88 36 80 20Z" fill="${C.ink}"/>
    <path d="M66 50 Q80 57 94 50 M63 66 Q80 74 97 66 M61 82 Q80 91 99 82 M60 97 Q80 106 100 97" stroke="${C.lilac}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <circle cx="80" cy="19" r="4" fill="${C.orange}"/><path d="M80 15 V7" stroke="${C.ink}" stroke-width="2.4" stroke-linecap="round"/><path d="M80 7 L91 10.5 L80 14Z" fill="${C.orange}"/>
    <path d="M72 108 V98 a8 8 0 0 1 16 0 V108Z" fill="${C.peach}"/>
    <rect x="22" y="108" width="116" height="8" rx="2" fill="${C.ink}"/><rect x="14" y="116" width="132" height="8" rx="2" fill="${C.violet}"/>
    <path d="M64 142 Q80 156 96 142Z" fill="${C.orange}"/><path d="M80 128 C73 136 76 142 80 143 C84 142 87 136 80 128Z" fill="${C.peach}"/>`, 'Temple with a lit diya');

  const heritage = () => svg('0 0 160 160', `
    <circle cx="80" cy="82" r="70" fill="${C.mist}"/><circle cx="38" cy="40" r="11" fill="${C.orange}"/>
    <path d="M80 34 V26" stroke="${C.ink}" stroke-width="2.4" stroke-linecap="round"/><circle cx="80" cy="25" r="3" fill="${C.orange}"/>
    <path d="M64 64 a16 16 0 0 1 32 0Z" fill="${C.ink}"/><rect x="62" y="63" width="36" height="5" rx="1" fill="${C.violet}"/>
    <rect x="65" y="68" width="4" height="14" fill="${C.mid}"/><rect x="78" y="68" width="4" height="14" fill="${C.mid}"/><rect x="91" y="68" width="4" height="14" fill="${C.mid}"/>
    <path d="M30 82 a12 12 0 0 1 24 0Z" fill="${C.ink}"/><path d="M106 82 a12 12 0 0 1 24 0Z" fill="${C.ink}"/>
    <rect x="24" y="82" width="112" height="44" fill="${C.violet}"/><rect x="24" y="82" width="112" height="5" fill="${C.ink}"/>
    <path d="M67 126 V106 a13 13 0 0 1 26 0 V126Z" fill="${C.mist}"/><path d="M72 126 V108 a8 8 0 0 1 16 0 V126Z" fill="${C.peach}"/>
    <path d="M30 126 V108 a7 7 0 0 1 14 0 V126Z M48 126 V108 a7 7 0 0 1 14 0 V126Z M98 126 V108 a7 7 0 0 1 14 0 V126Z M116 126 V108 a7 7 0 0 1 14 0 V126Z" fill="${C.mist}"/>
    <rect x="14" y="126" width="132" height="8" rx="2" fill="${C.ink}"/><rect x="58" y="134" width="44" height="6" fill="${C.mid}"/><rect x="50" y="140" width="60" height="6" fill="${C.lilac}"/>`, 'Palace with a domed pavilion');

  /* Cultural: a Rajasthani kathputli (string puppet) */
  const cultural = () => svg('0 0 160 160', `
    <circle cx="80" cy="82" r="70" fill="${C.mist}"/><circle cx="124" cy="38" r="12" fill="${C.orange}"/>
    <rect x="48" y="14" width="64" height="6" rx="3" fill="${C.ink}"/>
    <path d="M62 20 L68 52 M98 20 L92 52 M80 20 V40" stroke="${C.mid}" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M62 50 q18 -22 36 0 Z" fill="${C.orange}"/><path d="M64 46 q16 -10 32 0" stroke="${C.peach}" stroke-width="2" fill="none"/>
    <circle cx="80" cy="42" r="3" fill="${C.ink}"/>
    <circle cx="80" cy="62" r="13" fill="${C.peach}"/><circle cx="75" cy="60" r="1.8" fill="${C.ink}"/><circle cx="85" cy="60" r="1.8" fill="${C.ink}"/>
    <path d="M70 66 q10 6 20 0" stroke="${C.ink}" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <path d="M72 67 q-5 1 -7 -2 M88 67 q5 1 7 -2" stroke="${C.ink}" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M62 82 H98 L116 140 H44Z" fill="${C.violet}"/>
    <path d="M62 82 H98 L100 90 H60Z" fill="${C.orange}"/>
    <path d="M52 118 H108 M48 130 H112" stroke="${C.lilac}" stroke-width="2.4" stroke-linecap="round"/>
    <g fill="${C.peach}"><circle cx="80" cy="102" r="3.2"/><circle cx="68" cy="108" r="2.4"/><circle cx="92" cy="108" r="2.4"/></g>
    <path d="M58 86 L44 108 M102 86 L116 108" stroke="${C.violet}" stroke-width="6" stroke-linecap="round"/>
    <circle cx="44" cy="110" r="4" fill="${C.peach}"/><circle cx="116" cy="110" r="4" fill="${C.peach}"/>
    <rect x="36" y="140" width="88" height="8" rx="2" fill="${C.ink}"/>`, 'Rajasthani string puppet');

  const backwaters = () => svg('0 0 160 160', `
    <circle cx="80" cy="82" r="70" fill="${C.mist}"/><circle cx="122" cy="40" r="12" fill="${C.orange}"/>
    <path d="M40 118 C42 98 46 80 52 62" stroke="${C.ink}" stroke-width="4" fill="none" stroke-linecap="round"/>
    <g fill="${C.mid}"><path d="M52 62 Q36 52 22 62 Q38 58 52 62Z"/><path d="M52 62 Q68 52 82 62 Q66 58 52 62Z"/><path d="M52 62 Q40 44 26 44 Q44 48 52 62Z"/><path d="M52 62 Q64 44 78 44 Q60 48 52 62Z"/><path d="M52 62 Q49 46 52 34 Q57 48 52 62Z"/></g>
    <path d="M122 118 C120 104 118 92 116 80" stroke="${C.ink}" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <g fill="${C.violet}"><path d="M116 80 Q104 72 94 80 Q106 76 116 80Z"/><path d="M116 80 Q128 72 138 80 Q126 76 116 80Z"/><path d="M116 80 Q108 66 98 66 Q112 68 116 80Z"/><path d="M116 80 Q124 66 134 66 Q120 68 116 80Z"/></g>
    <path d="M26 104 H128 Q150 100 138 88 Q144 106 128 120 Q122 124 108 124 H46 Q30 122 26 104Z" fill="${C.ink}"/>
    <rect x="42" y="88" width="76" height="17" fill="${C.peach}"/>
    <g fill="${C.mist}"><rect x="48" y="92" width="10" height="9" rx="2"/><rect x="64" y="92" width="10" height="9" rx="2"/><rect x="80" y="92" width="10" height="9" rx="2"/><rect x="96" y="92" width="10" height="9" rx="2"/></g>
    <path d="M36 90 Q80 60 124 90Z" fill="${C.orange}"/><path d="M58 80 Q80 68 102 80" stroke="${C.peach}" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>
    <path d="M12 134 q10 -7 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" stroke="${C.mid}" stroke-width="3.2" fill="none" stroke-linecap="round"/>
    <path d="M22 146 q10 -7 20 0 t20 0 t20 0 t20 0 t20 0 t20 0" stroke="${C.lilac}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`, 'Houseboat on the backwaters');

  const ghat = () => svg('0 0 160 160', `
    <circle cx="80" cy="82" r="70" fill="${C.mist}"/><circle cx="122" cy="38" r="12" fill="${C.orange}"/>
    <path d="M58 24 C52 40 48 62 46 92 H70 C68 62 64 40 58 24Z" fill="${C.ink}"/>
    <path d="M51 50 Q58 55 65 50 M49 66 Q58 72 67 66 M48 80 Q58 86 68 80" stroke="${C.lilac}" stroke-width="2" fill="none" stroke-linecap="round"/>
    <circle cx="58" cy="23" r="3.5" fill="${C.orange}"/><path d="M58 20 V13" stroke="${C.ink}" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M88 92 V82 a14 14 0 0 1 28 0 V92Z" fill="${C.violet}"/><path d="M94 92 V84 a8 8 0 0 1 16 0 V92Z" fill="${C.peach}"/>
    <rect x="34" y="92" width="96" height="8" fill="${C.ink}"/><rect x="28" y="100" width="108" height="8" fill="${C.violet}"/>
    <rect x="22" y="108" width="120" height="8" fill="${C.ink}"/><rect x="16" y="116" width="132" height="8" fill="${C.violet}"/>
    <path d="M10 134 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" stroke="${C.mid}" stroke-width="3.2" fill="none" stroke-linecap="round"/>
    <g fill="${C.orange}"><path d="M36 148 q8 8 16 0Z"/><path d="M74 142 q8 8 16 0Z"/><path d="M114 148 q8 8 16 0Z"/></g>
    <g fill="${C.peach}"><circle cx="44" cy="145" r="2.4"/><circle cx="82" cy="139" r="2.4"/><circle cx="122" cy="145" r="2.4"/></g>`, 'Temple and ghat steps');

  const hawaMahal = () => {
    const tiers = [{ x: 30, y: 104, w: 100, h: 24 }, { x: 38, y: 84, w: 84, h: 20 }, { x: 46, y: 66, w: 68, h: 18 }, { x: 54, y: 50, w: 52, h: 16 }, { x: 62, y: 36, w: 36, h: 14 }];
    let b = `<circle cx="80" cy="82" r="70" fill="${C.mist}"/><circle cx="128" cy="30" r="11" fill="${C.orange}"/>`;
    tiers.forEach((t) => {
      b += `<rect x="${t.x}" y="${t.y}" width="${t.w}" height="${t.h}" fill="${C.peach}"/><rect x="${t.x}" y="${t.y}" width="${t.w}" height="3" fill="${C.orange}"/>`;
      const n = Math.floor((t.w - 8) / 12), start = t.x + (t.w - n * 12 + 4) / 2;
      for (let k = 0; k < n; k++) { const wx = start + k * 12; b += `<path d="M${wx} ${t.y + t.h - 3} V${t.y + 11} a3.5 3.5 0 0 1 7 0 V${t.y + t.h - 3}Z" fill="${C.ink}"/>`; }
      const dn = Math.max(2, Math.floor(t.w / 18));
      for (let k = 0; k < dn; k++) { const dx = t.x + (t.w / dn) * (k + 0.5); b += `<path d="M${dx - 5} ${t.y} a5 5 0 0 1 10 0Z" fill="${C.violet}"/>`; }
    });
    b += `<path d="M80 36 V26" stroke="${C.ink}" stroke-width="2.4" stroke-linecap="round"/><circle cx="80" cy="25" r="3" fill="${C.orange}"/>`;
    b += `<rect x="22" y="128" width="116" height="8" rx="2" fill="${C.ink}"/><rect x="14" y="136" width="132" height="8" rx="2" fill="${C.violet}"/>`;
    return svg('0 0 160 160', b, 'Hawa Mahal');
  };

  const udaipur = () => svg('0 0 160 160', `
    <circle cx="80" cy="82" r="70" fill="${C.mist}"/><circle cx="124" cy="36" r="12" fill="${C.orange}"/>
    <path d="M24 104 H136 V96 H24Z" fill="${C.ink}"/>
    <path d="M36 96 V82 a8 8 0 0 1 16 0 V96Z M62 96 V76 a10 10 0 0 1 20 0 V96Z M92 96 V82 a8 8 0 0 1 16 0 V96Z" fill="${C.violet}"/>
    <path d="M60 76 a12 12 0 0 1 24 0Z" fill="${C.ink}"/><circle cx="72" cy="58" r="3" fill="${C.orange}"/>
    <path d="M10 120 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" stroke="${C.mid}" stroke-width="3.2" fill="none" stroke-linecap="round"/>
    <path d="M56 138 H104 L96 150 H64Z" fill="${C.orange}"/><path d="M80 138 V120 L96 136Z" fill="${C.ink}"/>`, 'Island palace on the lake');

  /* ---------- badges (96 x 96) ---------- */
  const base = (inner) => `<circle cx="48" cy="48" r="46" fill="${C.ink}"/><circle cx="48" cy="48" r="40" fill="none" stroke="${C.orange}" stroke-width="2" stroke-dasharray="1 5" stroke-linecap="round"/>${inner}`;
  const foot = (x, y, r) => `<g transform="translate(${x} ${y}) rotate(${r})" fill="${C.mist}"><ellipse cx="0" cy="-2" rx="6.5" ry="9"/><ellipse cx="0" cy="12" rx="4.6" ry="4.6"/><circle cx="-5.6" cy="-14.5" r="2.1"/><circle cx="-2.2" cy="-17" r="2.3"/><circle cx="1.8" cy="-17.4" r="2.3"/><circle cx="5.2" cy="-15.6" r="2.1"/><circle cx="7.4" cy="-11.8" r="1.7"/></g>`;
  const badges = {
    'Pehla Kadam': () => svg('0 0 96 96', base(`${foot(36, 56, -12)}${foot(58, 44, 12)}<path d="M70 18 l2.2 5.4 5.8 .6 -4.4 3.8 1.4 5.6 -5 -3 -5 3 1.4 -5.6 -4.4 -3.8 5.8 -.6Z" fill="${C.orange}"/>`), 'Pehla Kadam'),
    'Nayi Saheli': () => svg('0 0 96 96', base(`
      <circle cx="34" cy="38" r="9" fill="${C.lilac}"/><circle cx="62" cy="38" r="9" fill="${C.mist}"/>
      <path d="M18 70 a16 18 0 0 1 32 0Z" fill="${C.lilac}"/><path d="M46 70 a16 18 0 0 1 32 0Z" fill="${C.mist}"/>
      <path d="M48 62 C40 55 40 48 45 47 C47 47 48 49 48 49 C48 49 49 47 51 47 C56 48 56 55 48 62Z" fill="${C.orange}"/>`), 'Nayi Saheli'),
    'Saheli Circle': () => svg('0 0 96 96', base(`
      <circle cx="48" cy="28" r="8" fill="${C.mist}"/><circle cx="29" cy="60" r="8" fill="${C.lilac}"/><circle cx="67" cy="60" r="8" fill="${C.peach}"/>
      <path d="M36 32 Q22 44 25 51 M60 32 Q74 44 71 51 M38 68 Q48 74 58 68" stroke="${C.orange}" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-dasharray="1 5"/>
      <path d="M48 46 C42 41 42 36 46 36 C47.5 36 48 37 48 37 C48 37 48.5 36 50 36 C54 36 54 41 48 46Z" fill="${C.orange}"/>`), 'Saheli Circle'),
    'Samay Ki Pakki': () => svg('0 0 96 96', base(`
      <circle cx="48" cy="50" r="22" fill="${C.mist}"/><circle cx="48" cy="50" r="22" fill="none" stroke="${C.lilac}" stroke-width="3"/>
      <path d="M48 36 V50 L58 56" stroke="${C.ink}" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      <circle cx="48" cy="50" r="2.6" fill="${C.orange}"/><path d="M40 22 H56" stroke="${C.lilac}" stroke-width="4" stroke-linecap="round"/>
      <path d="M72 24 l1.8 4.4 4.7 .5 -3.6 3.1 1.1 4.6 -4 -2.4 -4 2.4 1.1 -4.6 -3.6 -3.1 4.7 -.5Z" fill="${C.orange}"/>`), 'Samay Ki Pakki')
  };

  /* ---------- vehicles (240 x 120) ---------- */
  const wheel = (x) => `<circle cx="${x}" cy="94" r="14" fill="${C.ink}"/><circle cx="${x}" cy="94" r="5.5" fill="${C.lilac}"/>`;
  const vehicles = {
    van: () => svg('0 0 240 120', `<ellipse cx="120" cy="110" rx="100" ry="5" fill="${C.lilac}" opacity=".55"/>
      <path d="M18 40 Q18 28 30 28 H184 Q198 28 206 42 L222 62 Q226 68 226 74 V92 H18Z" fill="${C.mist}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>
      <g fill="${C.ink}"><rect x="30" y="38" width="24" height="22" rx="4"/><rect x="60" y="38" width="24" height="22" rx="4"/><rect x="90" y="38" width="24" height="22" rx="4"/><rect x="120" y="38" width="24" height="22" rx="4"/><rect x="150" y="38" width="24" height="22" rx="4"/><path d="M182 38 H190 Q196 38 200 46 L210 60 H182Z"/></g>
      <rect x="18" y="70" width="208" height="7" fill="${C.orange}"/><rect x="216" y="76" width="10" height="8" rx="2" fill="${C.peach}"/>${wheel(62)}${wheel(180)}`, 'Tempo Traveller'),
    suv: () => svg('0 0 240 120', `<ellipse cx="120" cy="110" rx="90" ry="5" fill="${C.lilac}" opacity=".55"/>
      <path d="M30 78 V58 Q30 50 40 48 L66 44 Q78 26 100 26 H150 Q166 26 176 44 L204 50 Q214 52 214 62 V92 H30Z" fill="${C.mist}" stroke="${C.ink}" stroke-width="3" stroke-linejoin="round"/>
      <g fill="${C.ink}"><path d="M78 44 Q86 34 100 34 H116 V50 H78Z"/><rect x="122" y="34" width="26" height="16" rx="3"/><path d="M154 34 Q164 34 170 46 H154Z"/></g>
      <rect x="30" y="72" width="184" height="6" fill="${C.orange}"/><rect x="204" y="70" width="10" height="8" rx="2" fill="${C.peach}"/>${wheel(70)}${wheel(172)}`, 'Car'),
    boat: () => svg('0 0 240 120', `<path d="M10 98 q10 -6 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" stroke="${C.mid}" stroke-width="3.2" fill="none" stroke-linecap="round"/>
      <path d="M36 70 H206 Q196 94 172 94 H70 Q46 94 36 70Z" fill="${C.ink}"/><rect x="36" y="62" width="170" height="8" fill="${C.orange}"/>
      <path d="M64 62 V30 M176 62 V30" stroke="${C.ink}" stroke-width="4" stroke-linecap="round"/><path d="M52 30 H188 Q184 20 170 20 H70 Q56 20 52 30Z" fill="${C.mid}"/>
      <g fill="${C.peach}"><circle cx="92" cy="54" r="7"/><circle cx="120" cy="54" r="7"/><circle cx="148" cy="54" r="7"/></g>`, 'Boat'),
    erick: () => svg('0 0 240 120', `<ellipse cx="120" cy="108" rx="80" ry="5" fill="${C.lilac}" opacity=".55"/>
      <path d="M60 30 H168 Q176 30 178 40 L184 60 H60Z" fill="${C.mid}"/><path d="M66 60 V84 H176 V60" fill="${C.mist}" stroke="${C.ink}" stroke-width="3"/>
      <path d="M62 30 V60 M164 30 V60" stroke="${C.ink}" stroke-width="3.5" stroke-linecap="round"/><rect x="78" y="62" width="50" height="14" rx="3" fill="${C.orange}"/>
      <path d="M176 60 L196 70 V90 H176Z" fill="${C.ink}"/><circle cx="88" cy="92" r="13" fill="${C.ink}"/><circle cx="88" cy="92" r="5" fill="${C.lilac}"/>
      <circle cx="168" cy="92" r="13" fill="${C.ink}"/><circle cx="168" cy="92" r="5" fill="${C.lilac}"/>`, 'Electric rickshaw')
  };

  /* ---------- postage stamp (collected = photo polaroid, locked = faded) ---------- */
  const paper = () => {
    const r = 3.5; let d = 'M0 0';
    for (let i = 0; i < 13; i++) d += ` h5 a${r} ${r} 0 0 0 7 0`;
    for (let i = 0; i < 16; i++) d += ` v5 a${r} ${r} 0 0 0 0 7`;
    for (let i = 0; i < 13; i++) d += ` h-5 a${r} ${r} 0 0 0 -7 0`;
    for (let i = 0; i < 16; i++) d += ` v-5 a${r} ${r} 0 0 0 0 -7`;
    return `<svg class="pp" viewBox="0 0 156 192" preserveAspectRatio="none" aria-hidden="true"><path d="${d}Z" fill="#fff"/><rect x="5.5" y="5.5" width="145" height="181" rx="2" fill="none" stroke="#E4E1EC" stroke-width="1"/></svg>`;
  };
  const postmark = (label) => {
    const id = 'pm' + Math.random().toString(36).slice(2, 7);
    return `<svg class="pm" viewBox="0 0 120 120" aria-hidden="true"><defs><path id="${id}" d="M60 60 m-40 0 a40 40 0 1 1 80 0 a40 40 0 1 1 -80 0"/></defs>
      <circle cx="60" cy="60" r="52" fill="none" stroke="#6B3A99" stroke-width="2.2"/><circle cx="60" cy="60" r="33" fill="none" stroke="#6B3A99" stroke-width="1.4"/>
      <text font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="11" fill="#6B3A99" letter-spacing="2"><textPath href="#${id}" startOffset="2">HER SAFAR · ${label.toUpperCase()} ·</textPath></text>
      <path d="M38 62h44M42 70h36M46 54h28" stroke="#6B3A99" stroke-width="1.6" stroke-linecap="round"/></svg>`;
  };
  const lockSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';
  const stamp = (o) => {
    const art = o.photo
      ? `<div class="sa ph"><div class="pol"><i class="tape"></i><img src="${o.photo}" alt="" draggable="false"><em>${o.note || ''}</em></div></div>`
      : `<div class="sa">${o.art}</div>`;
    return `<div class="pstamp ${o.done ? '' : 'locked'}">${paper()}<div class="si">${art}<div class="sc"><b>${o.name}</b><span>${o.sub || ''}</span></div></div>${o.done ? postmark(o.name) : `<span class="lk">${lockSvg}</span>`}</div>`;
  };

  window.ILLUS = { C, spiritual, cultural, heritage, backwaters, ghat, hawaMahal, udaipur, badges, vehicles, stamp };
})();

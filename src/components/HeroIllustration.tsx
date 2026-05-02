export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="purpPink" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6c47ff" />
          <stop offset="100%" stopColor="#ff3fa4" />
        </linearGradient>
        <linearGradient id="cyanPurp" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="100%" stopColor="#6c47ff" />
        </linearGradient>
        <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1836" />
          <stop offset="100%" stopColor="#0d0b1e" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── MONITOR ── */}
      {/* Stand */}
      <rect x="228" y="298" width="64" height="10" rx="5" fill="#1a1836" />
      <rect x="244" y="276" width="32" height="24" rx="4" fill="#13112a" />
      {/* Monitor body */}
      <rect x="100" y="80" width="320" height="200" rx="14" fill="#13112a" stroke="#ffffff14" strokeWidth="1.5" />
      {/* Screen */}
      <rect x="114" y="94" width="292" height="172" rx="8" fill="url(#screenGrad)" />

      {/* Screen content — browser bar */}
      <rect x="114" y="94" width="292" height="22" rx="8" fill="#1e1c3a" />
      <circle cx="128" cy="105" r="4" fill="#ff5f57" />
      <circle cx="142" cy="105" r="4" fill="#febc2e" />
      <circle cx="156" cy="105" r="4" fill="#28c840" />
      <rect x="170" y="100" width="160" height="10" rx="5" fill="#ffffff0a" />

      {/* Site wireframe on screen */}
      {/* Hero block */}
      <rect x="122" y="124" width="276" height="50" rx="6" fill="#ffffff05" stroke="#ffffff0a" strokeWidth="1" />
      <rect x="132" y="132" width="100" height="8" rx="4" fill="url(#purpPink)" opacity="0.7" />
      <rect x="132" y="145" width="70" height="5" rx="3" fill="#ffffff18" />
      <rect x="132" y="155" width="80" height="12" rx="6" fill="url(#purpPink)" opacity="0.9" />
      {/* Cards row */}
      <rect x="122" y="182" width="84" height="42" rx="6" fill="#ffffff07" stroke="#ffffff0a" strokeWidth="1" />
      <rect x="218" y="182" width="84" height="42" rx="6" fill="#ffffff07" stroke="#ffffff0a" strokeWidth="1" />
      <rect x="314" y="182" width="84" height="42" rx="6" fill="#ffffff07" stroke="#ffffff0a" strokeWidth="1" />
      <circle cx="138" cy="197" r="7" fill="url(#purpPink)" opacity="0.6" />
      <rect x="150" y="193" width="40" height="5" rx="2" fill="#ffffff20" />
      <rect x="150" y="202" width="28" height="4" rx="2" fill="#ffffff10" />
      <circle cx="234" cy="197" r="7" fill="url(#cyanPurp)" opacity="0.6" />
      <rect x="246" y="193" width="40" height="5" rx="2" fill="#ffffff20" />
      <rect x="246" y="202" width="28" height="4" rx="2" fill="#ffffff10" />
      <circle cx="330" cy="197" r="7" fill="#22c55e80" />
      <rect x="342" y="193" width="40" height="5" rx="2" fill="#ffffff20" />
      <rect x="342" y="202" width="28" height="4" rx="2" fill="#ffffff10" />
      {/* Monitor glow */}
      <ellipse cx="260" cy="310" rx="90" ry="8" fill="#6c47ff" opacity="0.12" />

      {/* ── YANDEX / SEO CARD — top right ── */}
      <rect x="390" y="30" width="116" height="90" rx="12" fill="#13112a" stroke="#ffffff10" strokeWidth="1" />
      {/* Yandex-like logo mark */}
      <text x="400" y="62" fontFamily="Manrope,sans-serif" fontWeight="900" fontSize="22" fill="url(#purpPink)">Я</text>
      <rect x="400" y="70" width="50" height="5" rx="3" fill="#ffffff25" />
      <rect x="400" y="80" width="70" height="4" rx="2" fill="#ffffff12" />
      {/* bar chart */}
      <rect x="454" y="68" width="8" height="12" rx="2" fill="#6c47ff60" />
      <rect x="465" y="60" width="8" height="20" rx="2" fill="#6c47ff90" />
      <rect x="476" y="52" width="8" height="28" rx="2" fill="url(#purpPink)" opacity="0.8" />
      <rect x="487" y="45" width="8" height="35" rx="2" fill="url(#purpPink)" />
      <text x="400" y="110" fontFamily="sans-serif" fontSize="9" fill="#ffffff40">Яндекс продвижение</text>
      {/* arrow going up */}
      <polyline points="454,90 465,80 476,72 487,60" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#glow)" />
      {/* dot on arrow end */}
      <circle cx="487" cy="60" r="3" fill="#00d4ff" filter="url(#glow)" />

      {/* ── SOCIAL CARD — top left ── */}
      <rect x="14" y="40" width="110" height="86" rx="12" fill="#13112a" stroke="#ffffff10" strokeWidth="1" />
      <text x="24" y="62" fontFamily="sans-serif" fontWeight="900" fontSize="11" fill="#ffffff70">Соц. сети</text>
      {/* VK icon */}
      <rect x="24" y="68" width="24" height="24" rx="6" fill="#0077ff40" />
      <text x="29" y="83" fontFamily="sans-serif" fontWeight="900" fontSize="11" fill="#0077ff">VK</text>
      {/* TG icon */}
      <rect x="54" y="68" width="24" height="24" rx="6" fill="#0088cc40" />
      <text x="57" y="83" fontFamily="sans-serif" fontSize="9" fill="#0088cc">TG</text>
      {/* IG icon */}
      <rect x="84" y="68" width="24" height="24" rx="6" fill="#ff3fa440" />
      <text x="86" y="83" fontFamily="sans-serif" fontSize="9" fill="#ff3fa4">IG</text>
      {/* likes row */}
      <circle cx="28" cy="107" r="4" fill="#ff3fa440" />
      <text x="34" y="111" fontFamily="sans-serif" fontSize="8" fill="#ffffff40">2.4k</text>
      <circle cx="67" cy="107" r="4" fill="#6c47ff40" />
      <text x="73" y="111" fontFamily="sans-serif" fontSize="8" fill="#ffffff40">891</text>

      {/* ── PHONE MOCKUP — bottom right ── */}
      <rect x="400" y="170" width="72" height="130" rx="14" fill="#13112a" stroke="#ffffff14" strokeWidth="1.5" />
      <rect x="407" y="180" width="58" height="112" rx="8" fill="#0d0b1e" />
      {/* phone screen content */}
      <rect x="412" y="185" width="48" height="8" rx="3" fill="url(#purpPink)" opacity="0.7" />
      <rect x="412" y="198" width="32" height="4" rx="2" fill="#ffffff15" />
      <rect x="412" y="206" width="40" height="4" rx="2" fill="#ffffff10" />
      <rect x="412" y="218" width="48" height="16" rx="4" fill="#6c47ff30" stroke="#6c47ff50" strokeWidth="1" />
      <rect x="416" y="222" width="22" height="4" rx="2" fill="url(#purpPink)" opacity="0.8" />
      <rect x="412" y="240" width="22" height="22" rx="5" fill="#ffffff07" stroke="#ffffff0a" strokeWidth="1" />
      <rect x="438" y="240" width="22" height="22" rx="5" fill="#ffffff07" stroke="#ffffff0a" strokeWidth="1" />
      <circle cx="420" cy="251" r="5" fill="#00d4ff30" />
      <circle cx="446" cy="251" r="5" fill="#ff3fa430" />
      {/* home bar */}
      <rect x="424" y="280" width="24" height="3" rx="2" fill="#ffffff20" />

      {/* ── STAT PILL — bottom left ── */}
      <rect x="8" y="200" width="100" height="44" rx="10" fill="#13112a" stroke="#ffffff10" strokeWidth="1" />
      <circle cx="26" cy="222" r="10" fill="url(#purpPink)" opacity="0.8" />
      <text x="21" y="226" fontFamily="sans-serif" fontWeight="900" fontSize="10" fill="white">↑</text>
      <text x="42" y="218" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="13" fill="white">+230%</text>
      <text x="42" y="230" fontFamily="sans-serif" fontSize="8" fill="#ffffff45">заявок в месяц</text>

      {/* ── CONNECTING LINES ── */}
      <line x1="124" y1="105" x2="90" y2="85" stroke="#6c47ff40" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="396" y1="105" x2="444" y2="105" stroke="#6c47ff40" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="400" y1="230" x2="396" y2="230" stroke="#6c47ff30" strokeWidth="1" strokeDasharray="4 3" />

      {/* ── FLOATING DOTS ── */}
      <circle cx="370" cy="160" r="3" fill="#6c47ff" opacity="0.5" />
      <circle cx="150" cy="310" r="2.5" fill="#ff3fa4" opacity="0.4" />
      <circle cx="60" cy="155" r="2" fill="#00d4ff" opacity="0.5" />
      <circle cx="470" cy="160" r="2" fill="#ff3fa4" opacity="0.4" />
    </svg>
  );
}

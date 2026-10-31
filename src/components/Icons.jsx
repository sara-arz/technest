const Svg = ({ children, size = 20, ...p }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    {children}
  </svg>
);
export const Heart = ({ filled, ...p }) => (
  <Svg {...p} fill={filled ? "currentColor" : "none"}><path d="M12 21s-7-4.6-9.3-9A5.4 5.4 0 0 1 12 6.6 5.4 5.4 0 0 1 21.3 12C19 16.4 12 21 12 21z" /></Svg>
);
export const Search = (p) => (<Svg {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></Svg>);
export const CartIcon = (p) => (<Svg {...p}><path d="M3 4h2l2.4 11h10.2L20 8H6.2" /><circle cx="9" cy="20" r="1" /><circle cx="17" cy="20" r="1" /></Svg>);
export const Trash = (p) => (<Svg {...p}><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3" /></Svg>);
export const Menu = (p) => (<Svg {...p}><path d="M4 6h16M4 12h16M4 18h16" /></Svg>);
export const Arrow = (p) => (<Svg size={16} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>);
export const Star = (p) => (<Svg size={14} fill="#f59e0b" stroke="#f59e0b" {...p}><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" /></Svg>);
export const Logo = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" stroke="#1d5cff" strokeWidth="5" strokeLinecap="round" /></svg>
);

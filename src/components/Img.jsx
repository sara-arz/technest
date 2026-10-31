import { useState } from "react";

export default function Img({ src, alt, fallback }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return <span aria-hidden="true">{fallback}</span>;
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}

import { useState, useEffect } from "react";

export function useDarkMode() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem("carhub_dark") === "true"; }
    catch { return false; }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("carhub_dark", String(dark));
  }, [dark]);

  return { dark, toggle: () => setDark((d) => !d) };
}

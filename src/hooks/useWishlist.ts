import { useState, useEffect } from "react";

/** Wishlist hook — persists car IDs to localStorage */
export function useWishlist() {
  const [wishlist, setWishlist] = useState<number[]>(() => {
    try {
      const stored = localStorage.getItem("carhub_wishlist");
      return stored ? JSON.parse(stored) : [];
    } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("carhub_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggle = (id: number) =>
    setWishlist((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);

  const isInWishlist = (id: number) => wishlist.includes(id);

  return { wishlist, toggle, isInWishlist };
}

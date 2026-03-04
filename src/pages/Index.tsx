import { useState, useMemo, useEffect } from "react";
import { cars as allCars, type Car } from "@/data/cars";
import { useWishlist } from "@/hooks/useWishlist";
import { useDarkMode } from "@/hooks/useDarkMode";
import { initGA4 } from "@/lib/analytics";
import Navbar from "@/components/Navbar";
import CarCard from "@/components/CarCard";
import Filters from "@/components/Filters";
import CarDetailsModal from "@/components/CarDetailsModal";
import CompareModal from "@/components/CompareModal";
import { Button } from "@/components/ui/button";
import { GitCompare, Heart, X } from "lucide-react";

const Index = () => {
  // Initialize GA4 on mount
  useEffect(() => { initGA4(); }, []);

  const { dark, toggle: toggleDark } = useDarkMode();
  const { wishlist, toggle: toggleWishlist, isInWishlist } = useWishlist();

  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [sort, setSort] = useState("");
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [compareIds, setCompareIds] = useState<number[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  const [showWishlistOnly, setShowWishlistOnly] = useState(false);

  const toggleCompare = (id: number) =>
    setCompareIds((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : prev.length < 3 ? [...prev, id] : prev);

  const filtered = useMemo(() => {
    let result = showWishlistOnly ? allCars.filter((c) => wishlist.includes(c.id)) : [...allCars];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter((c) => `${c.brand} ${c.model}`.toLowerCase().includes(q));
    }
    if (selectedBrand) result = result.filter((c) => c.brand === selectedBrand);
    if (selectedFuel) result = result.filter((c) => c.fuelType === selectedFuel);
    result = result.filter((c) => c.price >= priceRange[0] && c.price <= priceRange[1]);

    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price);

    return result;
  }, [search, selectedBrand, selectedFuel, priceRange, sort, showWishlistOnly, wishlist]);

  const compareCars = allCars.filter((c) => compareIds.includes(c.id));

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        dark={dark}
        onToggleDark={toggleDark}
        wishlistCount={wishlist.length}
        onShowWishlist={() => setShowWishlistOnly((p) => !p)}
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24" style={{ background: "var(--hero-gradient)" }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Find Your Perfect Drive
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
            Browse, compare, and discover your next car from our curated collection.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        {/* Wishlist mode indicator */}
        {showWishlistOnly && (
          <div className="mb-4 flex items-center gap-2 rounded-lg bg-secondary p-3">
            <Heart className="h-4 w-4 fill-destructive text-destructive" />
            <span className="text-sm font-medium">Showing wishlist only</span>
            <Button variant="ghost" size="sm" onClick={() => setShowWishlistOnly(false)}>
              <X className="h-3.5 w-3.5 mr-1" /> Show all
            </Button>
          </div>
        )}

        <Filters
          search={search} onSearchChange={setSearch}
          selectedBrand={selectedBrand} onBrandChange={setSelectedBrand}
          selectedFuel={selectedFuel} onFuelChange={setSelectedFuel}
          priceRange={priceRange} onPriceRangeChange={setPriceRange}
          sort={sort} onSortChange={setSort}
          resultCount={filtered.length}
        />

        {/* Compare bar */}
        {compareIds.length > 0 && (
          <div className="mt-4 flex items-center gap-3 rounded-lg border bg-card p-3">
            <GitCompare className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">{compareIds.length} car{compareIds.length > 1 ? "s" : ""} selected</span>
            <Button size="sm" disabled={compareIds.length < 2} onClick={() => setShowCompare(true)}>
              Compare Now
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setCompareIds([])}>Clear</Button>
          </div>
        )}

        {/* Car grid */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((car, i) => (
            <CarCard
              key={car.id}
              car={car}
              index={i}
              isWishlisted={isInWishlist(car.id)}
              onToggleWishlist={toggleWishlist}
              onViewDetails={setSelectedCar}
              isCompareSelected={compareIds.includes(car.id)}
              onToggleCompare={toggleCompare}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">No cars found matching your criteria.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <p>© 2026 CarHub. All rights reserved.</p>
      </footer>

      {/* Modals */}
      {selectedCar && <CarDetailsModal car={selectedCar} onClose={() => setSelectedCar(null)} />}
      {showCompare && <CompareModal cars={compareCars} onClose={() => setShowCompare(false)} />}
    </div>
  );
};

export default Index;

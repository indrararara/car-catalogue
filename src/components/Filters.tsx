import { Search, SlidersHorizontal, ArrowUpDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brands, fuelTypes } from "@/data/cars";
import { trackFilterApplied, trackSearchCar } from "@/lib/analytics";

interface Props {
  search: string;
  onSearchChange: (v: string) => void;
  selectedBrand: string;
  onBrandChange: (v: string) => void;
  selectedFuel: string;
  onFuelChange: (v: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (v: [number, number]) => void;
  sort: string;
  onSortChange: (v: string) => void;
  resultCount: number;
}

const Filters = ({
  search, onSearchChange, selectedBrand, onBrandChange, selectedFuel, onFuelChange,
  priceRange, onPriceRangeChange, sort, onSortChange, resultCount,
}: Props) => {
  const handleSearch = (v: string) => {
    onSearchChange(v);
    if (v.length > 2) trackSearchCar(v); // GA4 Event: search_car
  };

  const handleBrand = (v: string) => {
    onBrandChange(v);
    trackFilterApplied("brand", v); // GA4 Event: filter_applied
  };

  const handleFuel = (v: string) => {
    onFuelChange(v);
    trackFilterApplied("fuel_type", v);
  };

  const handleMinPrice = (v: number) => {
    onPriceRangeChange([v, priceRange[1]]);
    trackFilterApplied("price_min", String(v));
  };

  const handleMaxPrice = (v: number) => {
    onPriceRangeChange([priceRange[0], v]);
    trackFilterApplied("price_max", String(v));
  };

  const hasFilters = search || selectedBrand || selectedFuel || priceRange[0] > 0 || priceRange[1] < 15000000;

  const clearAll = () => {
    onSearchChange("");
    onBrandChange("");
    onFuelChange("");
    onPriceRangeChange([0, 15000000]);
    onSortChange("");
  };

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search cars..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full rounded-lg border bg-card py-2.5 pl-10 pr-4 text-sm outline-none ring-ring focus:ring-2"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {/* Brand filter */}
        <select
          value={selectedBrand}
          onChange={(e) => handleBrand(e.target.value)}
          className="rounded-lg border bg-card px-3 py-2 text-sm outline-none ring-ring focus:ring-2"
        >
          <option value="">All Brands</option>
          {brands.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>

        {/* Fuel filter */}
        <select
          value={selectedFuel}
          onChange={(e) => handleFuel(e.target.value)}
          className="rounded-lg border bg-card px-3 py-2 text-sm outline-none ring-ring focus:ring-2"
        >
          <option value="">All Fuel Types</option>
          {fuelTypes.map((f) => <option key={f} value={f}>{f}</option>)}
        </select>

        {/* Price range */}
        <div className="flex items-center gap-1">
          <input
            type="number"
            placeholder="Min ₹"
            value={priceRange[0] || ""}
            onChange={(e) => handleMinPrice(Number(e.target.value) || 0)}
            className="w-24 rounded-lg border bg-card px-3 py-2 text-sm outline-none ring-ring focus:ring-2"
          />
          <span className="text-muted-foreground">–</span>
          <input
            type="number"
            placeholder="Max ₹"
            value={priceRange[1] === 15000000 ? "" : priceRange[1]}
            onChange={(e) => handleMaxPrice(Number(e.target.value) || 15000000)}
            className="w-24 rounded-lg border bg-card px-3 py-2 text-sm outline-none ring-ring focus:ring-2"
          />
        </div>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="rounded-lg border bg-card px-3 py-2 text-sm outline-none ring-ring focus:ring-2"
        >
          <option value="">Sort by</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
        </select>

        {hasFilters && (
          <Button variant="ghost" size="sm" onClick={clearAll} className="text-muted-foreground">
            <X className="mr-1 h-3.5 w-3.5" /> Clear
          </Button>
        )}
      </div>

      {/* Result count */}
      <p className="text-sm text-muted-foreground">
        Showing <span className="font-semibold text-foreground">{resultCount}</span> car{resultCount !== 1 ? "s" : ""}
      </p>
    </div>
  );
};

export default Filters;

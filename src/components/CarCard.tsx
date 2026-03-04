import { Heart, Eye, Fuel, Zap, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Car } from "@/data/cars";
import { trackViewCarDetails, trackAddToWishlist } from "@/lib/analytics";

interface CarCardProps {
  car: Car;
  isWishlisted: boolean;
  onToggleWishlist: (id: number) => void;
  onViewDetails: (car: Car) => void;
  isCompareSelected: boolean;
  onToggleCompare: (id: number) => void;
  index: number;
}

const fuelIcon = (type: string) => {
  if (type === "Electric") return <Zap className="h-3.5 w-3.5" />;
  if (type === "Diesel") return <Droplets className="h-3.5 w-3.5" />;
  return <Fuel className="h-3.5 w-3.5" />;
};

const CarCard = ({ car, isWishlisted, onToggleWishlist, onViewDetails, isCompareSelected, onToggleCompare, index }: CarCardProps) => {
  const handleViewDetails = () => {
    // GA4 Event: view_car_details
    trackViewCarDetails(`${car.brand} ${car.model}`);
    onViewDetails(car);
  };

  const handleWishlist = () => {
    // GA4 Event: add_to_wishlist
    trackAddToWishlist(`${car.brand} ${car.model}`);
    onToggleWishlist(car.id);
  };

  return (
    <div
      className="group animate-fade-in overflow-hidden rounded-lg border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button
          onClick={handleWishlist}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm transition-colors hover:bg-card"
        >
          <Heart className={`h-4 w-4 transition-colors ${isWishlisted ? "fill-destructive text-destructive" : "text-muted-foreground"}`} />
        </button>
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-card/80 px-2.5 py-1 text-xs font-medium backdrop-blur-sm">
          {fuelIcon(car.fuelType)}
          {car.fuelType}
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{car.brand}</p>
        <h3 className="font-heading text-lg font-semibold">{car.model}</h3>
        <p className="mt-1 font-heading text-xl font-bold text-primary">₹{car.price.toLocaleString("en-IN")}</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">{car.year}</span>
          <span className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">{car.horsepower} HP</span>
          <span className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">{car.transmission}</span>
        </div>
        <div className="mt-4 flex gap-2">
          <Button size="sm" className="flex-1" onClick={handleViewDetails}>
            <Eye className="mr-1 h-3.5 w-3.5" /> View Details
          </Button>
          <Button
            size="sm"
            variant={isCompareSelected ? "default" : "outline"}
            onClick={() => onToggleCompare(car.id)}
            className="text-xs"
          >
            {isCompareSelected ? "✓" : "+"} Compare
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

import { X, Phone, Fuel, Zap, Droplets, Calendar, Gauge, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Car } from "@/data/cars";
import { trackContactDealer } from "@/lib/analytics";

interface Props {
  car: Car;
  onClose: () => void;
}

const fuelIcon = (type: string) => {
  if (type === "Electric") return <Zap className="h-4 w-4" />;
  if (type === "Diesel") return <Droplets className="h-4 w-4" />;
  return <Fuel className="h-4 w-4" />;
};

const CarDetailsModal = ({ car, onClose }: Props) => {
  const handleContact = () => {
    // GA4 Event: contact_dealer
    trackContactDealer(`${car.brand} ${car.model}`);
    alert(`Contacting dealer about ${car.brand} ${car.model}...`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-xl border bg-card p-0 shadow-xl animate-fade-in" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm">
          <X className="h-4 w-4" />
        </button>
        <img src={car.image} alt={`${car.brand} ${car.model}`} className="aspect-video w-full object-cover" />
        <div className="p-6">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{car.brand}</p>
          <h2 className="font-heading text-2xl font-bold">{car.model}</h2>
          <p className="mt-1 font-heading text-3xl font-bold text-primary">₹{car.price.toLocaleString("en-IN")}</p>
          <p className="mt-3 text-muted-foreground">{car.description}</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { icon: <Calendar className="h-4 w-4" />, label: "Year", value: car.year },
              { icon: <Gauge className="h-4 w-4" />, label: "Power", value: `${car.horsepower} HP` },
              { icon: fuelIcon(car.fuelType), label: "Fuel", value: car.fuelType },
              { icon: <Settings className="h-4 w-4" />, label: "Trans.", value: car.transmission },
            ].map((spec) => (
              <div key={spec.label} className="flex flex-col items-center gap-1 rounded-lg bg-secondary p-3">
                <span className="text-muted-foreground">{spec.icon}</span>
                <span className="text-xs text-muted-foreground">{spec.label}</span>
                <span className="text-sm font-semibold">{spec.value}</span>
              </div>
            ))}
          </div>
          <Button className="mt-6 w-full" size="lg" onClick={handleContact}>
            <Phone className="mr-2 h-4 w-4" /> Contact Dealer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsModal;

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Car } from "@/data/cars";
import { trackCompareCars } from "@/lib/analytics";
import { useEffect } from "react";

interface Props {
  cars: Car[];
  onClose: () => void;
}

const CompareModal = ({ cars, onClose }: Props) => {
  useEffect(() => {
    // GA4 Event: compare_cars
    trackCompareCars(cars.map((c) => `${c.brand} ${c.model}`));
  }, [cars]);

  const specs = ["Price", "Year", "Fuel Type", "Horsepower", "Transmission"] as const;

  const getValue = (car: Car, spec: string) => {
    switch (spec) {
      case "Price": return `₹${car.price.toLocaleString("en-IN")}`;
      case "Year": return car.year;
      case "Fuel Type": return car.fuelType;
      case "Horsepower": return `${car.horsepower} HP`;
      case "Transmission": return car.transmission;
      default: return "";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-xl border bg-card shadow-xl animate-fade-in" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="font-heading text-xl font-bold">Compare Cars</h2>
          <button onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-secondary">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-left text-muted-foreground">Spec</th>
                {cars.map((car) => (
                  <th key={car.id} className="p-3 text-center">
                    <img src={car.image} alt={car.model} className="mx-auto mb-2 h-20 w-32 rounded-md object-cover" />
                    <div className="font-heading font-semibold">{car.brand} {car.model}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specs.map((spec) => (
                <tr key={spec} className="border-b last:border-0">
                  <td className="p-3 font-medium text-muted-foreground">{spec}</td>
                  {cars.map((car) => (
                    <td key={car.id} className="p-3 text-center font-medium">{getValue(car, spec)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4">
          <Button variant="outline" className="w-full" onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default CompareModal;

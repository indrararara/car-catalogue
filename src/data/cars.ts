export interface Car {
  id: number;
  brand: string;
  model: string;
  price: number;
  fuelType: "Petrol" | "Diesel" | "Electric";
  image: string;
  year: number;
  horsepower: number;
  transmission: string;
  description: string;
}

export const cars: Car[] = [
  {
    id: 1, brand: "Toyota", model: "Camry", price: 28000, fuelType: "Petrol",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop",
    year: 2024, horsepower: 203, transmission: "Automatic",
    description: "The Toyota Camry delivers exceptional reliability with a refined ride and impressive fuel economy."
  },
  {
    id: 2, brand: "BMW", model: "3 Series", price: 45000, fuelType: "Petrol",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop",
    year: 2024, horsepower: 255, transmission: "Automatic",
    description: "The BMW 3 Series sets the benchmark for sport sedans with its perfect balance of performance and luxury."
  },
  {
    id: 3, brand: "Tesla", model: "Model 3", price: 42000, fuelType: "Electric",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop",
    year: 2024, horsepower: 283, transmission: "Single-Speed",
    description: "Tesla Model 3 offers cutting-edge technology with zero emissions and exhilarating performance."
  },
  {
    id: 4, brand: "Ford", model: "Mustang", price: 32000, fuelType: "Petrol",
    image: "https://images.unsplash.com/photo-1584345604476-8ec5f82d661f?w=600&h=400&fit=crop",
    year: 2024, horsepower: 310, transmission: "Manual",
    description: "The iconic Ford Mustang delivers thrilling performance with its powerful V8 engine and bold design."
  },
  {
    id: 5, brand: "Hyundai", model: "Tucson", price: 30000, fuelType: "Diesel",
    image: "https://images.unsplash.com/photo-1633854411817-867c7e8c41e3?w=600&h=400&fit=crop",
    year: 2024, horsepower: 187, transmission: "Automatic",
    description: "The Hyundai Tucson combines striking design with advanced safety features and spacious comfort."
  },
  {
    id: 6, brand: "Tesla", model: "Model Y", price: 52000, fuelType: "Electric",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600&h=400&fit=crop",
    year: 2024, horsepower: 384, transmission: "Single-Speed",
    description: "Tesla Model Y is the versatile electric SUV with incredible range and cutting-edge autopilot."
  },
  {
    id: 7, brand: "BMW", model: "X5", price: 65000, fuelType: "Diesel",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop",
    year: 2024, horsepower: 335, transmission: "Automatic",
    description: "The BMW X5 offers commanding luxury SUV performance with premium interior and advanced tech."
  },
  {
    id: 8, brand: "Toyota", model: "RAV4", price: 34000, fuelType: "Petrol",
    image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=600&h=400&fit=crop",
    year: 2024, horsepower: 203, transmission: "Automatic",
    description: "Toyota RAV4 is the perfect crossover with rugged capability and excellent fuel efficiency."
  },
  {
    id: 9, brand: "Ford", model: "Explorer", price: 38000, fuelType: "Petrol",
    image: "https://images.unsplash.com/photo-1551830820-330a71b99659?w=600&h=400&fit=crop",
    year: 2024, horsepower: 300, transmission: "Automatic",
    description: "The Ford Explorer delivers spacious three-row seating with powerful performance for family adventures."
  },
  {
    id: 10, brand: "Hyundai", model: "Ioniq 5", price: 48000, fuelType: "Electric",
    image: "https://images.unsplash.com/photo-1664199042660-045dd7846881?w=600&h=400&fit=crop",
    year: 2024, horsepower: 320, transmission: "Single-Speed",
    description: "The Hyundai Ioniq 5 redefines electric mobility with retro-futuristic design and ultra-fast charging."
  },
];

export const brands = ["Toyota", "BMW", "Tesla", "Ford", "Hyundai"] as const;
export const fuelTypes = ["Petrol", "Diesel", "Electric"] as const;

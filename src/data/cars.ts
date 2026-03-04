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
    id: 1, brand: "Toyota", model: "Innova Crysta", price: 2100000, fuelType: "Diesel",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop",
    year: 2024, horsepower: 150, transmission: "Automatic",
    description: "The Toyota Innova Crysta is India's most popular premium MPV with exceptional comfort and reliability."
  },
  {
    id: 2, brand: "BMW", model: "3 Series", price: 4700000, fuelType: "Petrol",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop",
    year: 2024, horsepower: 255, transmission: "Automatic",
    description: "The BMW 3 Series sets the benchmark for sport sedans with its perfect balance of performance and luxury."
  },
  {
    id: 3, brand: "Tesla", model: "Model 3", price: 4500000, fuelType: "Electric",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop",
    year: 2024, horsepower: 283, transmission: "Single-Speed",
    description: "Tesla Model 3 offers cutting-edge technology with zero emissions and exhilarating performance."
  },
  {
    id: 4, brand: "Ford", model: "Endeavour", price: 3600000, fuelType: "Diesel",
    image: "https://images.unsplash.com/photo-1584345604476-8ec5f82d661f?w=600&h=400&fit=crop",
    year: 2024, horsepower: 170, transmission: "Automatic",
    description: "The Ford Endeavour is a rugged full-size SUV built for Indian roads with powerful diesel performance."
  },
  {
    id: 5, brand: "Hyundai", model: "Creta", price: 1100000, fuelType: "Petrol",
    image: "https://images.unsplash.com/photo-1633854411817-867c7e8c41e3?w=600&h=400&fit=crop",
    year: 2024, horsepower: 115, transmission: "Automatic",
    description: "The Hyundai Creta is India's best-selling compact SUV with feature-loaded trims and bold styling."
  },
  {
    id: 6, brand: "Tesla", model: "Model Y", price: 5500000, fuelType: "Electric",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600&h=400&fit=crop",
    year: 2024, horsepower: 384, transmission: "Single-Speed",
    description: "Tesla Model Y is the versatile electric SUV with incredible range and cutting-edge autopilot."
  },
  {
    id: 7, brand: "BMW", model: "X5", price: 8600000, fuelType: "Diesel",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop",
    year: 2024, horsepower: 335, transmission: "Automatic",
    description: "The BMW X5 offers commanding luxury SUV performance with premium interior and advanced tech."
  },
  {
    id: 8, brand: "Toyota", model: "Fortuner", price: 3400000, fuelType: "Diesel",
    image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=600&h=400&fit=crop",
    year: 2024, horsepower: 204, transmission: "Automatic",
    description: "Toyota Fortuner is India's most aspirational SUV with legendary off-road capability and premium comfort."
  },
  {
    id: 9, brand: "Mercedes", model: "C-Class", price: 5700000, fuelType: "Petrol",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop",
    year: 2024, horsepower: 255, transmission: "Automatic",
    description: "The Mercedes C-Class delivers timeless elegance with cutting-edge MBUX technology and supreme comfort."
  },
  {
    id: 10, brand: "Mercedes", model: "GLC", price: 7400000, fuelType: "Diesel",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&h=400&fit=crop",
    year: 2024, horsepower: 300, transmission: "Automatic",
    description: "The Mercedes GLC is a mid-size luxury SUV combining sporty dynamics with everyday practicality."
  },
  {
    id: 11, brand: "Audi", model: "A4", price: 4500000, fuelType: "Petrol",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop",
    year: 2024, horsepower: 190, transmission: "Automatic",
    description: "The Audi A4 offers Vorsprung durch Technik with its refined quattro drive and virtual cockpit."
  },
  {
    id: 12, brand: "Audi", model: "Q5", price: 6700000, fuelType: "Petrol",
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=600&h=400&fit=crop",
    year: 2024, horsepower: 261, transmission: "Automatic",
    description: "The Audi Q5 is a premium mid-size SUV with quattro all-wheel drive and a luxurious cabin."
  },
  {
    id: 13, brand: "Honda", model: "City", price: 1200000, fuelType: "Petrol",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&h=400&fit=crop",
    year: 2024, horsepower: 121, transmission: "CVT",
    description: "The Honda City is India's iconic premium sedan known for its refined engine and spacious cabin."
  },
  {
    id: 14, brand: "Honda", model: "Elevate", price: 1350000, fuelType: "Petrol",
    image: "https://images.unsplash.com/photo-1568844293986-8d0400f4f36b?w=600&h=400&fit=crop",
    year: 2024, horsepower: 121, transmission: "CVT",
    description: "The Honda Elevate is a stylish compact SUV offering Honda's signature reliability and fuel efficiency."
  },
  {
    id: 15, brand: "Suzuki", model: "Brezza", price: 850000, fuelType: "Petrol",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&h=400&fit=crop",
    year: 2024, horsepower: 103, transmission: "Automatic",
    description: "The Maruti Suzuki Brezza is India's best-value compact SUV with smart hybrid technology."
  },
  {
    id: 16, brand: "Suzuki", model: "Swift", price: 650000, fuelType: "Petrol",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
    year: 2024, horsepower: 82, transmission: "Manual",
    description: "The Maruti Suzuki Swift is India's favourite hatchback with peppy performance and unmatched mileage."
  },
  {
    id: 17, brand: "Suzuki", model: "Grand Vitara", price: 1150000, fuelType: "Diesel",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop",
    year: 2024, horsepower: 115, transmission: "Automatic",
    description: "The Maruti Suzuki Grand Vitara offers strong hybrid tech and all-wheel drive for adventure seekers."
  },
  {
    id: 18, brand: "Hyundai", model: "Ioniq 5", price: 4500000, fuelType: "Electric",
    image: "https://images.unsplash.com/photo-1664199042660-045dd7846881?w=600&h=400&fit=crop",
    year: 2024, horsepower: 320, transmission: "Single-Speed",
    description: "The Hyundai Ioniq 5 redefines electric mobility with retro-futuristic design and ultra-fast charging."
  },
  {
    id: 19, brand: "Ford", model: "Mustang", price: 7800000, fuelType: "Petrol",
    image: "https://images.unsplash.com/photo-1551830820-330a71b99659?w=600&h=400&fit=crop",
    year: 2024, horsepower: 450, transmission: "Automatic",
    description: "The iconic Ford Mustang is a dream machine for enthusiasts with its roaring V8 and head-turning looks."
  },
  {
    id: 20, brand: "Audi", model: "e-tron", price: 10500000, fuelType: "Electric",
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=600&h=400&fit=crop",
    year: 2024, horsepower: 402, transmission: "Single-Speed",
    description: "The Audi e-tron is a fully electric luxury SUV combining Audi's craftsmanship with zero-emission driving."
  },
];

export const brands = ["Toyota", "BMW", "Tesla", "Ford", "Hyundai", "Mercedes", "Audi", "Honda", "Suzuki"] as const;
export const fuelTypes = ["Petrol", "Diesel", "Electric"] as const;

import { Sun, Moon, Car, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackDarkModeToggle } from "@/lib/analytics";

interface NavbarProps {
  dark: boolean;
  onToggleDark: () => void;
  wishlistCount: number;
  onShowWishlist: () => void;
}

const Navbar = ({ dark, onToggleDark, wishlistCount, onShowWishlist }: NavbarProps) => {
  const handleDarkToggle = () => {
    onToggleDark();
    // GA4 Event: dark_mode_toggle
    trackDarkModeToggle(!dark);
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Car className="h-7 w-7 text-primary" />
          <span className="font-heading text-xl font-bold tracking-tight">CarHub</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={onShowWishlist} className="relative">
            <Heart className="h-5 w-5" />
            {wishlistCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {wishlistCount}
              </span>
            )}
          </Button>
          <Button variant="ghost" size="icon" onClick={handleDarkToggle}>
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

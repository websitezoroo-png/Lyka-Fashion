import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  imageUrl: string;
  stock: number;
}

interface CartItem {
  productId: number;
  quantity: number;
  product?: Product;
}

function Router() {
  // Shared state for cart and favorites
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'Embroidered Suit',
      description: 'Traditional embroidered suit with modern cut. Features intricate Aari work with contemporary silhouette.',
      price: 15000,
      originalPrice: 20000,
      category: 'Suits',
      imageUrl: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop',
      stock: 5,
    },
    {
      id: 2,
      name: 'Bridal Lehenga',
      description: 'Stunning bridal lehenga with intricate details. Perfect for your special day with luxurious fabrics.',
      price: 50000,
      category: 'Bridals',
      imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
      stock: 3,
    },
    {
      id: 3,
      name: 'Black Abaya',
      description: 'Elegant black abaya with gold embroidery. Timeless elegance meets modern comfort.',
      price: 8000,
      category: 'Abayas',
      imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop',
      stock: 10,
    },
    {
      id: 4,
      name: 'Kashmiri Saree',
      description: 'Traditional Kashmiri saree with hand-embroidered patterns. A timeless classic.',
      price: 12000,
      originalPrice: 16000,
      category: 'Sarees',
      imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop',
      stock: 7,
    },
    {
      id: 5,
      name: 'Silk Dupatta',
      description: 'Luxurious silk dupatta with traditional embroidery. Perfect accessory for any outfit.',
      price: 3500,
      originalPrice: 5000,
      category: 'Accessories',
      imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
      stock: 15,
    },
    {
      id: 6,
      name: 'Formal Suit',
      description: 'Sophisticated formal suit with subtle embroidery details. Perfect for special occasions.',
      price: 18000,
      category: 'Suits',
      imageUrl: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop',
      stock: 4,
    },
  ]);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const handleAddToCart = (product: Product) => {
    const existing = cart.find(item => item.productId === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.productId === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { productId: product.id, quantity: 1, product }]);
    }
  };

  const handleToggleFavorite = (productId: number) => {
    setFavorites(favorites.includes(productId)
      ? favorites.filter(id => id !== productId)
      : [...favorites, productId]
    );
  };

  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/collections"}>
        {() => <Collections products={products} onAddToCart={handleAddToCart} onToggleFavorite={handleToggleFavorite} favorites={favorites} />}
      </Route>
      <Route path={"/about"} component={About} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

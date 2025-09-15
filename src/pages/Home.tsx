import { Search, Star, Clock, ChefHat, Truck, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomNavigation from '@/components/BottomNavigation';
import pepperoniPizza from '@/assets/pepperoni-pizza.jpg';
import loadedBurger from '@/assets/loaded-burger.jpg';
import creamyPasta from '@/assets/creamy-pasta.jpg';
import heroBackground from '@/assets/hero-background.jpg';

const Home = () => {
  const navigate = useNavigate();

  const restaurants = [
    {
      id: 1,
      name: "Bella Italia",
      description: "Authentic Italian cuisine, perfect for family dinners.",
      image: "🇮🇹",
      rating: 4.5,
      deliveryTime: "25-30 min",
      specialty: "Italian"
    },
    {
      id: 2,
      name: "El Mexicano",
      description: "Delicious tacos and margaritas in a lively setting.",
      image: "🌮",
      rating: 4.3,
      deliveryTime: "20-25 min",
      specialty: "Mexican"
    },
    {
      id: 3,
      name: "Sushi Zen",
      description: "Fresh sushi and sashimi with a modern twist.",
      image: "🍣",
      rating: 4.7,
      deliveryTime: "30-35 min",
      specialty: "Japanese"
    },
    {
      id: 4,
      name: "Burger Palace",
      description: "Premium burgers with the finest ingredients.",
      image: "🍔",
      rating: 4.6,
      deliveryTime: "15-20 min",
      specialty: "American"
    },
    {
      id: 5,
      name: "Golden Dragon",
      description: "Traditional Chinese flavors with modern presentation.",
      image: "🐲",
      rating: 4.4,
      deliveryTime: "35-40 min",
      specialty: "Chinese"
    },
    {
      id: 6,
      name: "Curry House",
      description: "Aromatic Indian spices and authentic recipes.",
      image: "🍛",
      rating: 4.8,
      deliveryTime: "30-35 min",
      specialty: "Indian"
    }
  ];

  const popularItems = [
    { name: "Pepperoni Pizza", image: pepperoniPizza, price: "$12.99", rating: 4.6 },
    { name: "Loaded Burger", image: loadedBurger, price: "$14.99", rating: 4.8 },
    { name: "Creamy Pasta", image: creamyPasta, price: "$11.99", rating: 4.5 },
    { name: "Spicy Tacos", image: pepperoniPizza, price: "$9.99", rating: 4.4 },
    { name: "Fresh Sushi", image: loadedBurger, price: "$16.99", rating: 4.9 }
  ];

  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Get your food delivered in 30 minutes or less"
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Quality Food",
      description: "Fresh ingredients from trusted restaurant partners"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safe & Secure",
      description: "Contactless delivery and secure payment options"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40"></div>
        <div className="hero-content fade-in">
          <h1 className="heading-hero mb-6 text-white">
            Order Fresh. Eat Better.
            <br />
            <span className="bg-gradient-to-r from-[hsl(var(--accent-gold))] to-yellow-400 bg-clip-text text-transparent">
              Delivered Fast.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the convenience of premium dining at home. Fresh ingredients, authentic flavors, delivered to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="btn-primary text-xl px-12 py-6 animate-glow"
              onClick={() => navigate('/menu')}
            >
              Order Now
            </Button>
            <Button 
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-6 text-lg"
            >
              View Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-gradient-to-br from-background to-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-card p-8">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={24} />
              <input 
                type="text" 
                placeholder="Search for restaurants or dishes..."
                className="search-input pl-16 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-section">Why Choose LazyEats?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering more than just food - we deliver experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="premium-card p-8 text-center group hover:scale-105 slide-up">
                <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--primary-gradient-start))] to-[hsl(var(--primary-gradient-end))] rounded-radius-lg flex items-center justify-center mx-auto mb-6 text-white group-hover:animate-float">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Restaurants */}
      <section className="py-20 bg-gradient-to-br from-secondary to-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-section">Popular Restaurants</h2>
            <p className="text-xl text-muted-foreground">
              Discover amazing restaurants in your neighborhood
            </p>
          </div>
          <div className="restaurant-grid">
            {restaurants.map((restaurant) => (
              <div 
                key={restaurant.id} 
                className="restaurant-card p-6 cursor-pointer slide-up" 
                onClick={() => navigate('/menu')}
                style={{ animationDelay: `${restaurant.id * 0.1}s` }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-radius-lg flex items-center justify-center text-3xl">
                    {restaurant.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-card-foreground">{restaurant.name}</h3>
                    <p className="text-primary font-medium text-sm">{restaurant.specialty}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{restaurant.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-[hsl(var(--accent-gold))] text-[hsl(var(--accent-gold))]" />
                      <span className="font-semibold">{restaurant.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{restaurant.deliveryTime}</span>
                    </div>
                  </div>
                  <Button size="sm" className="btn-secondary">
                    View Menu
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Food Items */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-section">Trending Dishes</h2>
            <p className="text-xl text-muted-foreground">
              Most ordered items this week
            </p>
          </div>
          <div className="food-carousel">
            {popularItems.map((item, index) => (
              <div 
                key={index} 
                className="food-card min-w-[280px] overflow-hidden cursor-pointer slide-up" 
                onClick={() => navigate('/menu')}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover image-zoom"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-[hsl(var(--accent-gold))] text-[hsl(var(--accent-gold))]" />
                    <span className="text-sm font-semibold">{item.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--primary-gradient-start))] to-[hsl(var(--primary-gradient-end))] bg-clip-text text-transparent">
                      {item.price}
                    </span>
                    <Button size="sm" className="add-button">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BottomNavigation />
    </div>
  );
};

export default Home;
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@/components/BottomNavigation';
import pepperoniPizza from '@/assets/pepperoni-pizza.jpg';
import loadedBurger from '@/assets/loaded-burger.jpg';
import creamyPasta from '@/assets/creamy-pasta.jpg';

const Home = () => {
  const navigate = useNavigate();

  const restaurants = [
    {
      id: 1,
      name: "Bella Italia",
      description: "Authentic Italian cuisine, perfect for family dinners.",
      image: "🇮🇹",
      rating: 4.5,
      deliveryTime: "25-30 min"
    },
    {
      id: 2,
      name: "El Mexicano",
      description: "Delicious tacos and margaritas in a lively setting.",
      image: "🌮",
      rating: 4.3,
      deliveryTime: "20-25 min"
    },
    {
      id: 3,
      name: "Sushi Zen",
      description: "Fresh sushi and sashimi with a modern twist.",
      image: "🍣",
      rating: 4.7,
      deliveryTime: "30-35 min"
    }
  ];

  const popularItems = [
    { name: "Pepperoni Pizza", image: pepperoniPizza, price: "$12.99" },
    { name: "Loaded Burger", image: loadedBurger, price: "$14.99" },
    { name: "Creamy Pasta", image: creamyPasta, price: "$11.99" }
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="px-6 pt-8 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-primary">LazyEats</h1>
            <p className="text-muted-foreground text-sm">Delicious food delivered fast</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          <input 
            type="text" 
            placeholder="Search for restaurants or dishes"
            className="search-input pl-12"
          />
        </div>
      </div>

      {/* Nearby Restaurants */}
      <div className="px-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Nearby Restaurants</h2>
        <div className="space-y-4">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card p-4 cursor-pointer" onClick={() => navigate('/menu')}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center text-2xl">
                  {restaurant.image}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-card-foreground">{restaurant.name}</h3>
                  <p className="text-muted-foreground text-sm">{restaurant.description}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-muted-foreground">⭐ {restaurant.rating}</span>
                    <span className="text-xs text-muted-foreground">{restaurant.deliveryTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Food Items */}
      <div className="px-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Popular Food Items</h2>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {popularItems.map((item, index) => (
            <div key={index} className="food-card p-4 min-w-[140px] cursor-pointer" onClick={() => navigate('/menu')}>
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-20 object-cover rounded-lg mb-3"
              />
              <h3 className="font-medium text-sm text-card-foreground">{item.name}</h3>
              <p className="text-primary font-semibold text-sm">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Home;
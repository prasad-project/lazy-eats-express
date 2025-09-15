import { ArrowLeft, Star, Clock, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import BottomNavigation from '@/components/BottomNavigation';
import springRolls from '@/assets/spring-rolls.jpg';
import stuffedJalapenos from '@/assets/stuffed-jalapenos.jpg';
import grilledChicken from '@/assets/grilled-chicken.jpg';
import loadedBurger from '@/assets/loaded-burger.jpg';
import chocolateCake from '@/assets/chocolate-cake.jpg';
import cheesecake from '@/assets/cheesecake.jpg';

const Menu = () => {
  const navigate = useNavigate();

  const menuCategories = [
    {
      name: "Appetizers",
      items: [
        { id: 1, name: "Spring Rolls", price: "$5.99", image: springRolls, description: "Crispy rolls with fresh vegetables", rating: 4.5 },
        { id: 2, name: "Stuffed Jalapeños", price: "$6.49", image: stuffedJalapenos, description: "Spicy peppers with cream cheese", rating: 4.3 }
      ]
    },
    {
      name: "Main Courses", 
      items: [
        { id: 3, name: "Grilled Chicken", price: "$12.99", image: grilledChicken, description: "Tender chicken with herbs and spices", rating: 4.7 },
        { id: 4, name: "Classic Burger", price: "$10.99", image: loadedBurger, description: "Juicy beef patty with all the fixings", rating: 4.6 }
      ]
    },
    {
      name: "Desserts",
      items: [
        { id: 5, name: "Chocolate Cake", price: "$4.99", image: chocolateCake, description: "Rich and decadent chocolate delight", rating: 4.8 },
        { id: 6, name: "Cheesecake", price: "$5.49", image: cheesecake, description: "Creamy New York style cheesecake", rating: 4.9 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-24">
        {/* Restaurant Banner */}
        <div className="relative mb-12">
          <div className="h-64 bg-gradient-to-r from-[hsl(var(--primary-gradient-start))] to-[hsl(var(--primary-gradient-end))] relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
              <div className="max-w-4xl mx-auto px-6">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl backdrop-blur-sm">
                  🇮🇹
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Bella Italia</h1>
                <p className="text-xl mb-4 text-white/90">Authentic Italian cuisine, perfect for family dinners</p>
                <div className="flex items-center justify-center space-x-6 text-white/90">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">4.5</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-5 h-5" />
                    <span>25-30 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="max-w-6xl mx-auto px-6">
          {menuCategories.map((category, categoryIndex) => (
            <div key={category.name} className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-[hsl(var(--primary-gradient-start))] to-[hsl(var(--primary-gradient-end))] bg-clip-text text-transparent">
                  {category.name}
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={item.id} 
                    className="food-card p-6 slide-up"
                    style={{ animationDelay: `${(categoryIndex * 2 + itemIndex) * 0.1}s` }}
                  >
                    <div className="flex space-x-6">
                      <div className="relative flex-shrink-0">
                        <img 
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-radius-lg image-zoom"
                        />
                        <div className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-lg">
                          <div className="flex items-center space-x-1 px-2 py-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs font-semibold">{item.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-card-foreground mb-2">{item.name}</h3>
                        <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--primary-gradient-start))] to-[hsl(var(--primary-gradient-end))] bg-clip-text text-transparent">
                            {item.price}
                          </span>
                          <Button 
                            className="add-button flex items-center space-x-2"
                            onClick={() => navigate('/cart')}
                          >
                            <Plus size={16} />
                            <span>Add</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Menu;
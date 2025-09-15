import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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
        { id: 1, name: "Spring Rolls", price: "$5.99", image: springRolls },
        { id: 2, name: "Stuffed Jalapeños", price: "$6.49", image: stuffedJalapenos }
      ]
    },
    {
      name: "Main Courses", 
      items: [
        { id: 3, name: "Grilled Chicken", price: "$12.99", image: grilledChicken },
        { id: 4, name: "Classic Burger", price: "$10.99", image: loadedBurger }
      ]
    },
    {
      name: "Desserts",
      items: [
        { id: 5, name: "Chocolate Cake", price: "$4.99", image: chocolateCake },
        { id: 6, name: "Cheesecake", price: "$5.49", image: cheesecake }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="px-6 pt-8 pb-6">
        <div className="flex items-center space-x-4 mb-6">
          <button onClick={() => navigate('/')} className="p-2 hover:bg-muted rounded-lg">
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-2xl font-bold">Menu</h1>
            <p className="text-muted-foreground text-sm">Bella Italia</p>
          </div>
        </div>
      </div>

      {/* Restaurant Banner */}
      <div className="px-6 mb-6">
        <div className="restaurant-card p-6">
          <div className="text-center">
            <h2 className="text-xl font-bold text-card-foreground">Bella Italia</h2>
            <p className="text-muted-foreground text-sm mt-1">Authentic Italian cuisine, perfect for family dinners</p>
            <p className="text-primary font-semibold text-sm mt-2">Delivery: 25-30 min</p>
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="px-6">
        {menuCategories.map((category) => (
          <div key={category.name} className="mb-8">
            <h3 className="text-lg font-semibold mb-4 px-4 py-2 bg-muted rounded-lg">
              {category.name}
            </h3>
            <div className="space-y-4">
              {category.items.map((item) => (
                <div key={item.id} className="food-card p-4">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-card-foreground">{item.name}</h4>
                      <p className="text-primary font-bold">{item.price}</p>
                    </div>
                    <button 
                      className="add-button"
                      onClick={() => navigate('/cart')}
                    >
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Menu;
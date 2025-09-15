import { ArrowLeft, Minus, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BottomNavigation from '@/components/BottomNavigation';
import springRolls from '@/assets/spring-rolls.jpg';
import grilledChicken from '@/assets/grilled-chicken.jpg';
import chocolateCake from '@/assets/chocolate-cake.jpg';

const Cart = () => {
  const navigate = useNavigate();
  
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Spicy Tuna Roll", price: 12.99, quantity: 1, image: springRolls },
    { id: 2, name: "California Roll", price: 8.99, quantity: 1, image: grilledChicken },
    { id: 3, name: "Miso Soup", price: 3.99, quantity: 1, image: chocolateCake }
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const taxes = subtotal * 0.08;
  const total = subtotal + taxes;

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="px-6 pt-8 pb-6">
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate('/menu')} className="p-2 hover:bg-muted rounded-lg">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold">Your Items</h1>
        </div>
      </div>

      {/* Cart Items */}
      <div className="px-6 mb-6">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="food-card p-4">
              <div className="flex items-center space-x-4">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-card-foreground">{item.name}</h3>
                  <p className="text-primary font-bold">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-semibold w-8 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary-hover"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="px-6 mb-6">
        <div className="food-card p-6">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Taxes</span>
              <span>${taxes.toFixed(2)}</span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between items-center bg-primary/10 p-4 rounded-lg">
                <span className="font-bold text-lg">Total Cost</span>
                <span className="font-bold text-xl text-primary">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="px-6 mb-8">
        <button 
          onClick={() => navigate('/checkout')}
          className="w-full bg-primary text-primary-foreground py-4 rounded-radius-lg font-semibold text-lg hover:bg-primary-hover transition-colors"
        >
          Checkout
        </button>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Cart;
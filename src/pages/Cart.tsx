import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import BottomNavigation from '@/components/BottomNavigation';
import springRolls from '@/assets/spring-rolls.jpg';
import grilledChicken from '@/assets/grilled-chicken.jpg';
import chocolateCake from '@/assets/chocolate-cake.jpg';

const Cart = () => {
  const navigate = useNavigate();
  
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Spring Rolls", price: 5.99, quantity: 2, image: springRolls, restaurant: "Bella Italia" },
    { id: 2, name: "Grilled Chicken", price: 12.99, quantity: 1, image: grilledChicken, restaurant: "Bella Italia" },
    { id: 3, name: "Chocolate Cake", price: 4.99, quantity: 1, image: chocolateCake, restaurant: "Bella Italia" }
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
  const deliveryFee = subtotal > 25 ? 0 : 2.99;
  const taxes = subtotal * 0.08;
  const total = subtotal + deliveryFee + taxes;

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-24">
        {/* Header */}
        <div className="max-w-4xl mx-auto px-6 mb-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--primary-gradient-start))] to-[hsl(var(--primary-gradient-end))] rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Your Cart</h1>
            <p className="text-muted-foreground">Review your items and proceed to checkout</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6">
          {cartItems.length === 0 ? (
            <div className="glass-card p-12 text-center">
              <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-6">Add some delicious items to get started!</p>
              <Button 
                className="btn-primary"
                onClick={() => navigate('/menu')}
              >
                Browse Menu
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                <h2 className="text-2xl font-semibold mb-6">Order Items</h2>
                {cartItems.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="premium-card p-6 slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-6">
                      <div className="flex-shrink-0">
                        <img 
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-radius-lg"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-card-foreground mb-1">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{item.restaurant}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold bg-gradient-to-r from-[hsl(var(--primary-gradient-start))] to-[hsl(var(--primary-gradient-end))] bg-clip-text text-transparent">
                            ${item.price.toFixed(2)}
                          </span>
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-2 bg-secondary rounded-full p-1">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-muted transition-colors"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="font-semibold w-8 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-8 h-8 rounded-full bg-gradient-to-r from-[hsl(var(--primary-gradient-start))] to-[hsl(var(--primary-gradient-end))] text-white flex items-center justify-center hover:scale-110 transition-transform"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="w-8 h-8 rounded-full bg-destructive/10 text-destructive flex items-center justify-center hover:bg-destructive hover:text-white transition-colors"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
                  <div className="glass-card p-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Delivery Fee</span>
                      <span className="font-semibold">
                        {deliveryFee === 0 ? (
                          <span className="text-success">FREE</span>
                        ) : (
                          `$${deliveryFee.toFixed(2)}`
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Taxes & Fees</span>
                      <span className="font-semibold">${taxes.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-card-border pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">Total</span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--primary-gradient-start))] to-[hsl(var(--primary-gradient-end))] bg-clip-text text-transparent">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    {deliveryFee > 0 && (
                      <div className="bg-accent-gold/10 border border-accent-gold/20 rounded-lg p-3 mt-4">
                        <p className="text-sm text-accent-gold-foreground">
                          Add ${(25 - subtotal).toFixed(2)} more for free delivery!
                        </p>
                      </div>
                    )}
                    <Button 
                      className="btn-primary w-full mt-6"
                      onClick={() => navigate('/checkout')}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Cart;
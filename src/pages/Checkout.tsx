import { ArrowLeft, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BottomNavigation from '@/components/BottomNavigation';

const Checkout = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const orderItems = [
    { name: "Spicy Tuna Roll", price: 12.99 },
    { name: "California Roll", price: 8.99 },
    { name: "Miso Soup", price: 3.99 }
  ];

  const total = 25.97;

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="px-6 pt-8 pb-6">
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate('/cart')} className="p-2 hover:bg-muted rounded-lg">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold">Checkout</h1>
        </div>
      </div>

      {/* Delivery Address */}
      <div className="px-6 mb-6">
        <div className="food-card p-6">
          <h3 className="font-semibold text-lg mb-4">Delivery Address</h3>
          <div className="flex items-start space-x-3">
            <MapPin className="text-primary mt-1" size={20} />
            <div>
              <p className="font-medium">123 Sushi Lane, Food City</p>
              <p className="text-muted-foreground text-sm">Apartment 4B</p>
            </div>
          </div>
          <div className="mt-4 h-32 bg-muted rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground">🗺️ Map Preview</span>
          </div>
        </div>
      </div>

      {/* Payment Options */}
      <div className="px-6 mb-6">
        <div className="food-card p-6">
          <h3 className="font-semibold text-lg mb-4">Payment Method</h3>
          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="radio" 
                value="credit" 
                checked={paymentMethod === 'credit'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="text-primary"
              />
              <span>Credit Card</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="radio" 
                value="paypal" 
                checked={paymentMethod === 'paypal'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="text-primary"
              />
              <span>PayPal</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="radio" 
                value="upi" 
                checked={paymentMethod === 'upi'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="text-primary"
              />
              <span>UPI</span>
            </label>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="px-6 mb-6">
        <div className="food-card p-6">
          <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
          <div className="space-y-3">
            {orderItems.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-muted-foreground">{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-3">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">Total</span>
                <span className="font-bold text-xl text-primary">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <div className="px-6 mb-8">
        <button 
          onClick={() => navigate('/order-confirmation')}
          className="w-full bg-primary text-primary-foreground py-4 rounded-radius-lg font-semibold text-lg hover:bg-primary-hover transition-colors"
        >
          Place Order
        </button>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Checkout;
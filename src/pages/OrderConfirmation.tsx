import { CheckCircle, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@/components/BottomNavigation';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="px-6 pt-8 pb-6">
        <div className="flex items-center justify-center">
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-radius-lg">
            <span className="font-semibold">🍽️ LazyEats</span>
          </div>
        </div>
      </div>

      {/* Confirmation Message */}
      <div className="px-6 mb-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-success-foreground" size={40} />
          </div>
          <h1 className="text-2xl font-bold mb-4">Order Confirmed!</h1>
          <p className="text-muted-foreground text-lg">
            Thank you for your order! Your food will arrive in approximately 30 minutes.
          </p>
        </div>
      </div>

      {/* Order Details */}
      <div className="px-6 mb-6">
        <div className="food-card p-6">
          <h3 className="font-semibold text-lg mb-4">Your Items</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Spicy Tuna Roll</span>
              <span>$12.99</span>
            </div>
            <div className="flex justify-between">
              <span>California Roll</span>
              <span>$8.99</span>
            </div>
            <div className="flex justify-between">
              <span>Miso Soup</span>
              <span>$3.99</span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between items-center bg-primary/10 p-4 rounded-lg">
                <span className="font-bold">Total Cost</span>
                <span className="font-bold text-xl text-primary">$25.97</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Info */}
      <div className="px-6 mb-6">
        <div className="food-card p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="text-primary" size={20} />
            <span className="font-semibold">Delivery Address</span>
          </div>
          <p className="text-muted-foreground">123 Sushi Lane, Food City</p>
          <p className="text-muted-foreground text-sm">Apartment 4B</p>
        </div>
      </div>

      {/* Track Order Button */}
      <div className="px-6 mb-8">
        <button 
          onClick={() => navigate('/order-tracking')}
          className="w-full bg-primary text-primary-foreground py-4 rounded-radius-lg font-semibold text-lg hover:bg-primary-hover transition-colors"
        >
          Track Order
        </button>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default OrderConfirmation;
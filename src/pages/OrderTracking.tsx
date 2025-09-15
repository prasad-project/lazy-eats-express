import { ArrowLeft, Phone, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@/components/BottomNavigation';

const OrderTracking = () => {
  const navigate = useNavigate();

  const orderStatus = [
    { step: "Placed", completed: true, time: "2:30 PM" },
    { step: "Preparing", completed: true, time: "2:35 PM" },
    { step: "On the way", completed: false, time: "3:00 PM" },
    { step: "Delivered", completed: false, time: "3:15 PM" }
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="px-6 pt-8 pb-6">
        <div className="flex items-center space-x-4">
          <button onClick={() => navigate('/order-confirmation')} className="p-2 hover:bg-muted rounded-lg">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-2xl font-bold">Track Order</h1>
        </div>
      </div>

      {/* Map Section */}
      <div className="px-6 mb-6">
        <div className="food-card p-6">
          <div className="h-48 bg-muted rounded-lg flex items-center justify-center mb-4">
            <span className="text-muted-foreground text-lg">🗺️ Live Tracking Map</span>
          </div>
          <div className="text-center">
            <p className="font-semibold">Your order is being prepared</p>
            <p className="text-muted-foreground text-sm">Estimated delivery: 15 minutes</p>
          </div>
        </div>
      </div>

      {/* Order Progress */}
      <div className="px-6 mb-6">
        <div className="food-card p-6">
          <h3 className="font-semibold text-lg mb-4">Order Progress</h3>
          <div className="space-y-4">
            {orderStatus.map((status, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className={`w-4 h-4 rounded-full ${
                  status.completed ? 'bg-primary' : 'bg-muted'
                }`} />
                <div className="flex-1">
                  <span className={`font-medium ${
                    status.completed ? 'text-card-foreground' : 'text-muted-foreground'
                  }`}>
                    {status.step}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">{status.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rider Info */}
      <div className="px-6 mb-6">
        <div className="food-card p-6">
          <h3 className="font-semibold text-lg mb-4">Your Delivery Partner</h3>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
              <span className="text-2xl">👨‍🍳</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold">Alex Johnson</p>
              <p className="text-muted-foreground text-sm">Motorcycle • LZ-1234</p>
            </div>
            <div className="flex space-x-2">
              <button className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary-hover">
                <Phone size={16} />
              </button>
              <button className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary-hover">
                <MessageCircle size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="px-6 mb-8">
        <button 
          onClick={() => navigate('/')}
          className="w-full bg-secondary text-secondary-foreground py-4 rounded-radius-lg font-semibold text-lg hover:bg-secondary/80 transition-colors"
        >
          Back to Home
        </button>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default OrderTracking;
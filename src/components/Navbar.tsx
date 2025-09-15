import { ShoppingCart, User, Menu, Home } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-[hsl(var(--primary-gradient-start))] to-[hsl(var(--primary-gradient-end))] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--primary-gradient-start))] to-[hsl(var(--primary-gradient-end))] bg-clip-text text-transparent">
              LazyEats
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigate('/')}
              className={`text-foreground hover:text-primary transition-colors ${
                location.pathname === '/' ? 'text-primary font-semibold' : ''
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => navigate('/menu')}
              className={`text-foreground hover:text-primary transition-colors ${
                location.pathname === '/menu' ? 'text-primary font-semibold' : ''
              }`}
            >
              Menu
            </button>
            <button className="text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button className="text-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/cart')}
              className="relative hover:bg-primary/10"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-[hsl(var(--primary-gradient-start))] to-[hsl(var(--primary-gradient-end))] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10"
            >
              <User size={20} />
            </Button>
            <Button className="btn-primary">
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
          >
            <Menu size={24} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
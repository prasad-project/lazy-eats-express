import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-background to-secondary border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-[hsl(var(--primary-gradient-start))] to-[hsl(var(--primary-gradient-end))] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-[hsl(var(--primary-gradient-start))] to-[hsl(var(--primary-gradient-end))] bg-clip-text text-transparent">
                LazyEats
              </h3>
            </div>
            <p className="text-muted-foreground">
              Fresh food delivered fast to your doorstep. Experience the convenience of premium dining at home.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <Facebook size={16} />
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <Twitter size={16} />
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <Instagram size={16} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">About Us</div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Restaurants</div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Become a Partner</div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Careers</div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Help Center</div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <div className="space-y-2">
              <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Privacy Policy</div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Terms of Service</div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Cookie Policy</div>
              <div className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">Refund Policy</div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm">123 Food Street, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span className="text-sm">hello@lazyeats.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-card-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 LazyEats. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0">
              Made with ❤️ for food lovers everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
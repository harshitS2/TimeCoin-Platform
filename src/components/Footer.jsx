import { Link } from "react-router-dom";
import { Clock, Twitter, Facebook, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="container px-4 mx-auto max-w-6xl py-12 relative w-full items-center text-center">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center space-x-2 text-xl font-semibold text-foreground mb-4">
            <Clock className="w-6 h-6 text-blue-600" />
            <span>TimeCoin</span>
          </Link>
          <p className="text-sm text-muted-foreground mb-4">
            The global skill exchange platform where time is the new currency of expertise.
          </p>
          <div className="flex space-x-4">
            {[Twitter, Facebook, Instagram, Linkedin, Github].map((Icon, index) => (
              <a key={index} href="#" className="text-gray-500 hover:text-timecoin-600 transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-medium mb-4">Platform</h3>
          <ul className="space-y-2 text-sm">
            {["About Us", "How It Works", "Pricing", "Testimonials"].map((item, index) => (
              <li key={index}>
                <Link to={`/${item.toLowerCase().replace(/ /g, "-")}`} className="text-muted-foreground hover:text-timecoin-600 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            {["Blog", "Guides", "FAQs", "Support"].map((item, index) => (
              <li key={index}>
                <Link to={`/${item.toLowerCase()}`} className="text-muted-foreground hover:text-timecoin-600 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            {["Terms of Service", "Privacy Policy", "Cookie Policy", "Accessibility"].map((item, index) => (
              <li key={index}>
                <Link to={`/${item.toLowerCase().replace(/ /g, "-")}`} className="text-muted-foreground hover:text-timecoin-600 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs text-muted-foreground mb-4 md:mb-0">© 2025 TimeCoin. All rights reserved.</p>
        <div className="flex space-x-6">
          {["Terms", "Privacy", "Cookies"].map((item, index) => (
            <Link key={index} to={`/${item.toLowerCase()}`} className="text-xs text-muted-foreground hover:text-timecoin-600 transition-colors">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

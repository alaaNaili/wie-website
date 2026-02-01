import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-2xl gradient-hero backdrop-blur-sm flex items-center justify-center shadow-glow">
                <img src="/logo.png" alt="WIE Logo" />
              </div>
              <div>
                <span className="font-heading font-semibold text-background">IEEE WIE</span>
                <span className="block text-xs text-background/60">FSS Student Branch</span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Empowering women in engineering through leadership, innovation, and community at the Faculty of Sciences of Sfax.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Team", "Events", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-background">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Faculty of Sciences of Sfax, Tunisia</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:wie.fss@ieee.org" className="hover:text-background transition-colors">
                  wie.fss@ieee.org
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-background">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} IEEE WIE FSS Student Branch. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-background/60">Part of</span>
            <span className="font-heading font-semibold text-background">IEEE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

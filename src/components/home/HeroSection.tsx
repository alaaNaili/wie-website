import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
      <div className="absolute inset-0 bg-dots opacity-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-pink/10 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

      <div className="container-wide relative z-10 px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Sparkles size={16} />
              <span>IEEE Women in Engineering</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight mb-6">
              <span className="block">Empowering</span>
              <span className="gradient-text">Women in</span>
              <span className="block">Engineering</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Join a global community of women engineers, innovators, and leaders at the Faculty of Sciences of Sfax. Together, we inspire, connect, and grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact" className="btn-primary group">
                Join Us
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/events" className="btn-secondary">
                Explore Events
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              {[
                { value: "70+", label: "Members" },
                { value: "20+", label: "Events" },
                { value: "10+", label: "Projects" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-heading font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10">
              <div className="aspect-square max-w-lg mx-auto relative">
                {/* Main circle */}
                <div className="absolute inset-0 rounded-full gradient-hero opacity-20 animate-pulse-slow" />
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/30 to-pink/30 backdrop-blur-sm" />
                
                {/* Floating cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-0 card-elevated p-4 rounded-2xl shadow-elevated"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-hero" />
                    <div>
                      <div className="text-sm font-medium">Leadership</div>
                      <div className="text-xs text-muted-foreground">Develop skills</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-20 left-0 card-elevated p-4 rounded-2xl shadow-elevated"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent" />
                    <div>
                      <div className="text-sm font-medium">Innovation</div>
                      <div className="text-xs text-muted-foreground">Create impact</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute bottom-0 right-10 card-elevated p-4 rounded-2xl shadow-elevated"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-pink" />
                    <div>
                      <div className="text-sm font-medium">Community</div>
                      <div className="text-xs text-muted-foreground">Connect & grow</div>
                    </div>
                  </div>
                </motion.div>

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-36 h-36 rounded-2xl bg-gradient-to-br from-primary/30 to-pink/30 backdrop-blur-sm flex items-center justify-center shadow-glow">
                    <img src="/logo.png" alt="WIE Logo" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

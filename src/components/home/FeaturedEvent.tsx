import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight, Clock } from "lucide-react";

const FeaturedEvent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Don't Miss Out</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4">
            Featured Event
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl gradient-hero p-1"
        >
          <div className="bg-background rounded-[1.4rem] p-6 md:p-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Event Image Placeholder */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary">
                <div className="absolute inset-0 gradient-hero opacity-80" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span className="text-4xl font-heading font-bold">International Woman's Day</span>
                  <span className="text-lg mt-2">2026</span>
                </div>
                <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
                  Upcoming
                </div>
              </div>

              {/* Event Details */}
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Annual Celebration
                  </span>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                    International Woman's Day 2026
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Join us for an inspiring day recognizing the social, economic, cultural, and political achievements of women while calling for accelerated action towards gender parity
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar size={18} className="text-primary" />
                    <span>March 15, 2026</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock size={18} className="text-primary" />
                    <span>All Day</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin size={18} className="text-primary" />
                    <span>Faculty of Sciences of Sfax</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/events" className="btn-primary group">
                    Register Now
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/events" className="btn-secondary">
                    View All Events
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedEvent;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const sponsors = [
  { name: "IEEE", initials: "IEEE" },
  { name: "Faculty of Sciences", initials: "FSS" },
  { name: "University of Sfax", initials: "US" },
  { name: "Tech Partner", initials: "TP" },
  { name: "Innovation Hub", initials: "IH" },
  { name: "Women in Tech", initials: "WIT" },
];

const SponsorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Partners</span>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mt-4">
            Supported By
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-6"
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center justify-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-background shadow-elevated flex items-center justify-center group hover:shadow-elevated-lg transition-shadow duration-300">
                <span className="text-xl md:text-2xl font-heading font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {sponsor.initials}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;

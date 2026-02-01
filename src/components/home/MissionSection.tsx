import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Lightbulb, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To inspire, engage, encourage, and empower IEEE members and the community at large to pursue engineering careers.",
    color: "bg-primary",
  },
  {
    icon: Users,
    title: "Inclusion",
    description: "Creating a welcoming environment where all voices are heard and valued, regardless of background.",
    color: "bg-pink",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Fostering creativity and forward-thinking solutions to address global challenges in engineering.",
    color: "bg-accent",
  },
  {
    icon: Heart,
    title: "Community",
    description: "Building lasting connections and support networks that extend beyond the classroom.",
    color: "bg-purple-light",
  },
];

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted/50">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">What We Stand For</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-6">
            Our Mission & Values
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            IEEE Women in Engineering is dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated card-hover p-6 rounded-2xl text-center"
            >
              <div className={`w-14 h-14 rounded-2xl ${value.color} flex items-center justify-center mx-auto mb-4`}>
                <value.icon className="text-white" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const achievements = [
  {
    id: 3,
    title: "WIE ACT 4.0 1st place",
    date: "December 14, 2025",
    description: "Our WIE Student Affinity Group secured 1st place in the WIE ACT 4.0 competition, showcasing our commitment to innovation and excellence.",
    image: "/achievements/wie-act.png", 
  },
  {
    id: 2,
    title: "3rd place | Best Ambassador Award",
    date: "December 14, 2025",
    description: "Our WIE Student Affinity Group has been honored with the Best Ambassador Award for its exceptional efforts in promoting IEEE WIE initiatives and fostering a supportive community.",
    image: "/achievements/ambassador.png",
  },
  {
    id: 1,
    title: "WIE SAG of the month",
    date: "September/October , 2025",
    description: "Our WIE Student Affinity Group has been recognized as the WIE SAG of the Month for its outstanding contributions and initiatives in promoting.",
    image: "/achievements/wie-sag.png",  
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero */}
      <section className="relative section-padding bg-muted/50 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Achievements</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-4 mb-6">
              Discover Our <span className="gradient-text">Achievements</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join us for workshops, conferences, and networking opportunities so you will be part of our next achievements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section ref={ref} className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group card-elevated card-hover rounded-2xl overflow-hidden"
              >
                {/* Achievements Banner */}
                <div
                  className="relative aspect-[16/10] overflow-hidden bg-center bg-cover"
                  style={{ backgroundImage: `url(${achievement.image})` }}
                >
                  {/* Dark / gradient overlay */}
                  <div className="absolute inset-0 gradient-hero opacity-10" />

                  {/* Text content */}
                  
                </div>

                {/* Achievement Details */}
                <div className="p-6">
                  <div className="space-y-2 mb-4">
                    <span className="text-2xl gradient-text font-heading font-semibold">
                        {achievement.title}
                        </span>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={16} className="text-primary" />
                      <span>{achievement.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;

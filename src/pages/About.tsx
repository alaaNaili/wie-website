import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Lightbulb, Award, Globe, Rocket } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Leadership Development",
    description: "Programs designed to nurture and develop leadership skills in women engineers.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Research",
    description: "Supporting innovative projects and research initiatives led by women in STEM.",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Building connections between students, professionals, and industry leaders.",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Celebrating achievements and contributions of women in engineering fields.",
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Part of a worldwide network of IEEE Women in Engineering chapters.",
  },
  {
    icon: Rocket,
    title: "Career Growth",
    description: "Workshops, mentorship, and resources for professional development.",
  },
];

const About = () => {
  const missionRef = useRef(null);
  const fssRef = useRef(null);
  const featuresRef = useRef(null);
  
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const fssInView = useInView(fssRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero */}
      <section className="relative section-padding bg-muted/50 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-4 mb-6">
              Inspiring <span className="gradient-text">Women</span> in Engineering
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              IEEE Women in Engineering is the largest international professional organization dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section ref={missionRef} className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4 mb-6">
                Empowering the Next Generation
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  IEEE WIE's mission is to facilitate the global recruitment and retention of women in technical disciplines. We envision a vibrant community of IEEE women and men collectively using their diverse talents to innovate for the benefit of humanity.
                </p>
                <p>
                  Through a global network of volunteers, we inspire, engage, encourage, and empower IEEE members and the community at large in ways that are locally relevant.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 rounded-3xl gradient-hero opacity-10" />
                <div className="absolute inset-4 rounded-2xl bg-secondary flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-4 shadow-glow">
                      <Target className="text-white" size={32} />
                    </div>
                    <h3 className="font-heading font-semibold text-xl">Our Vision</h3>
                    <p className="text-muted-foreground text-sm mt-2 px-8">
                      A vibrant community innovating for humanity
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FSS Branch */}
      <section ref={fssRef} className="section-padding bg-muted/50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={fssInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Branch</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4 mb-6">
              IEEE WIE FSS Student Branch
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={fssInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-elevated rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-4">Faculty of Sciences of Sfax</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our Student Branch at the Faculty of Sciences of Sfax is dedicated to creating a supportive community for women pursuing engineering and science degrees.
                  </p>
                  <p>
                    We organize workshops, technical talks, networking events, and outreach programs to inspire and support students throughout their academic journey.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "2022", label: "Founded" },
                  { number: "70+", label: "Active Members" },
                  { number: "10+", label: "Events Hosted" },
                  { number: "100+", label: "Students Reached" },
                ].map((stat, index) => (
                  <div key={index} className="bg-secondary rounded-2xl p-6 text-center">
                    <div className="text-2xl font-heading font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-4">
              Programs & Initiatives
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group card-elevated card-hover p-6 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="text-primary group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

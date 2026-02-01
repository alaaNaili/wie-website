import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Github, Mail, Phone } from "lucide-react";

const teamMembers = [
  {
    name: "Emna Fendri",
    role: "Counselor/Advisor",
    image: null,
    bio: "Computer Science Professor.",
    social: { linkedin: "#", phone: "#", email: "emna.fendri@ieee.org" },
  },
  {
    name: "Nessryne Chouchene",
    role: "Chair",
    image: null,
    bio: "Data Engineering student.",
    social: { linkedin: "#", phone: "50060776", email: "nessryne.chouchene@ieee.org" },
  },
  {
    name: "Yasmine Abbes",
    role: "Vice Chair",
    image: null,
    bio: "Computer Science student.",
    social: { linkedin: "#", phone: "25300477", email: "yasmine.abbes@ieee.org" },
  },
  {
    name: "Amira Krid",
    role: "Secretary",
    image: null,
    bio: "Computer Science student.",
    social: { linkedin: "#", phone: "23368210", email: "amira.krid@ieee.org" },
  },
  {
    name: "Alaa Naili",
    role: "Technical Lead",
    image: null,
    bio: "Computer Science student.",
    social: { linkedin: "www.linkedin.com/in/alaa-naili", phone: "27456117", email: "alaanaili.pro@gmail.com" },
  },
  {
    name: "Fatma Maalej",
    role: "Treasurer",
    image: null,
    bio: "Data Science student.",
    social: { linkedin: "#", phone: "94286751", email: "fatma.maalej466@gmail.com" },
  },
  {
    name: "Yasmine Feki",
    role: "Webmaster",
    image: null,
    bio: "Data Engineering student.",
    social: { linkedin: "#", phone: "2300026", email: "yassmine.feki@ieee.org" },
  },
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero */}
      <section className="relative section-padding bg-muted/50 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-pink/5 blur-3xl" />
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Team</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-4 mb-6">
              Meet the <span className="gradient-text">Leaders</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate students dedicated to empowering women in engineering and creating an inclusive community at FSS.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section ref={ref} className="section-padding">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group card-elevated card-hover rounded-2xl overflow-hidden"
              >
                {/* Avatar */}
                <div className="relative aspect-square bg-secondary overflow-hidden">
                  <div className="absolute inset-0 gradient-hero opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-heading font-bold text-white">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  
                  {/* Social overlay */}
                  <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Linkedin size={18} className="text-white" />
                    </a>
                    <a
                      href={member.social.phone}
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Phone size={18} className="text-white" />  
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Mail size={18} className="text-white" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-lg">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-muted-foreground mb-8">
              We're always looking for passionate individuals to join our mission. If you're interested in leadership roles or volunteering, get in touch!
            </p>
            <a href="/contact" className="btn-primary">
              Get Involved
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Team;

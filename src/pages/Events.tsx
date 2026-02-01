import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const events = [
  {
    id: 13,
    title: "IWD 2026",
    date: "March 14, 2026",
    time: "All Day",
    location: "Faculty of Sciences of Sfax",
    description: "celebrate the International Women's Day 2026.",
    category: "celebration",
    status: "upcoming",
    image: "/events/iwd.jpg",
  },
  {
    id: 12,
    title: "Technova 2.0 Hackathon",
    date: "February 13-14, 2026",
    time: "24 Hours",
    location: "Faculty of Sciences of Sfax",
    description: "The 24h hackathon brought together students and professionals to develop innovative solutions for IoT-powered healthcare and smart energy systems in Tunisia.",
    category: "Hackathon",
    status: "upcoming",
    image: "/events/technova2.jpg",
  },
  {
    id: 11,
    title: "Pinky Pulse 2.0 Breast Cancer Awarness",
    date: "October 23, 2025",
    time: "09:00 PM - 10:00 PM",
    location: "Online",
    description: "Raised awareness about breast cancer through educational sessions, survivor stories, and health tips.",
    category: "Workshop",
    status: "past",
    image: "/events/medical.jpg",
  },
  {
    id: 10,
    title: "Understanding Teem Health and Well-being",
    date: "October 19, 2025",
    time: "All Day",
    location: "Just Work CO-Working Space",
    description: "Provided a vital platform to explore the multifaceted physical and mental health challenges faced by teenagers.",
    category: "Workshop",
    status: "past",
    image: "/events/medical2.jpg",
  },
  {
    id: 9,
    title: "Coffee Talk : How to buil a startup",
    date: "September 28, 2025",
    time: "All Day",
    location: "Just Work CO-Working Space",
    description: "Explore the fundamentals of startup creation, from ideation to execution, with insights from successful entrepreneurs.",
    category: "Workshop",
    status: "past",
    image: "/events/wie-shield.png",
  },
  {
    id: 8,
    title: "WIEACT 4.0 Promotion Booth",
    date: "September 25, 2025",
    time: "All Day",
    location: "Faculty of Sciences of Sfax",
    description: "Served as a promotional platform for the upcoming WIE ACT 4.0 event.",
    category: "Promotion",
    status: "past",
    image: "/events/wie-act.jpg",
  },
  {
    id: 7,
    title: "Kids back to school",
    date: "September 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Computer Lab A",
    description: "We taught children how to use social media responsibly by protecting personal information, creating strong passwords, and identifying online threats.",
    category: "Workshop",
    status: "past",
    image: "/events/kids-back-to-school.jpeg",
  },
  {
    id: 6,
    title: "Technova 1.0 Hackathon",
    date: "February 13-14, 2025",
    time: "24 Hours",
    location: "Faculty of Sciences of Sfax",
    description: "The 24h hackathon brought together students and professionals to develop innovative solutions for IoT-powered healthcare and smart energy systems in Tunisia.",
    category: "Hackathon",
    status: "past",
    image: "/events/technova.jpg",
  },
  {
    id: 5,
    title: "AgriWIE Coffee Talk",
    date: "September 11, 2025",
    time: "09:00 PM - 10:00 PM",
    location: "Online",
    description: "The AgriWIE Coffee Talk became a space of learning, exchange, and empowerment. It wrapped together knowledge, inspiration, and collaboration.",
    category: "Workshop",
    status: "past",
    image: "/events/coffe-talk.jpg",
  },
  {
    id: 4,
    title: "Complete your Chatbot Journey",
    date: "September 10, 2025",
    time: "09:00 PM - 10:00 PM",
    location: "Online",
    description: "Delve deeper into chatbot development and learn advanced techniques to enhance your AI-powered conversational experiences.",
    category: "Workshop",
    status: "past",
    image: "/events/ML-workshop.jpg",
  },
  {
    id: 3,
    title: "Create your first chatbot",
    date: "September 9, 2025",
    time: "09:00 PM - 10:00 PM",
    location: "Online",
    description: "Learn how to build your first chatbot using modern AI tools and platforms.",
    category: "Workshop",
    status: "past",
    image: "/events/workshop.jpg",
  },
  {
    id: 2,
    title: "Introduction to Generative AI",
    date: "September 8, 2025",
    time: "09:00 PM - 10:00 PM",
    location: "Online",
    description: "Learn the fundamentals of Generative AI and how it's transforming industries.",
    category: "Workshop",
    status: "past",
    image: "/events/workshop-2.jpg", 
  },
  {
    id: 1,
    title: "Entrepreneurship Lab",
    date: "September 3, 2025",
    time: "09:00 PM - 10:00 PM",
    location: "Online",
    description: "Provided engineers with with a clear roadmap to navigate the startup world.",
    category: "Workshop",
    status: "past",
    image: "/events/workshop.jpg",  
  },
];

const Events = () => {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredEvents = events.filter((event) => 
    filter === "all" ? true : event.status === filter
  );

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
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Events</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-4 mb-6">
              Discover Our <span className="gradient-text">Events</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join us for workshops, conferences, and networking opportunities designed to empower and inspire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border">
        <div className="container-wide">
          <div className="flex justify-center gap-2">
            {[
              { key: "all", label: "All Events" },
              { key: "upcoming", label: "Upcoming" },
              { key: "past", label: "Past Events" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key as typeof filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === tab.key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section ref={ref} className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group card-elevated card-hover rounded-2xl overflow-hidden"
              >
                {/* Event Banner */}
                <div
                  className="relative aspect-[16/10] overflow-hidden bg-center bg-cover"
                  style={{ backgroundImage: `url(${event.image})` }}
                >
                  {/* Dark / gradient overlay */}
                  <div className="absolute inset-0 gradient-hero opacity-70" />

                  {/* Text content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                    <span className="text-sm font-medium opacity-80 uppercase tracking-wide">
                      {event.category}
                    </span>
                    <span className="text-2xl font-heading font-bold mt-1">
                      {event.title}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                      event.status === "upcoming"
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {event.status === "upcoming" ? "Upcoming" : "Past"}
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={16} className="text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock size={16} className="text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={16} className="text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No events found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Never Miss an Event
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter to stay updated on upcoming events, workshops, and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Events;

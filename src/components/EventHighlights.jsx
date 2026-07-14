import React, { useState } from 'react';
import { Award, Users, Calendar, Trees, Search, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function EventHighlights() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    {
      icon: Award,
      value: '28',
      label: 'Divine Awardees Honored',
      desc: 'Grassroots leaders recognized for outstanding selfless seva across rural regions.'
    },
    {
      icon: Users,
      value: '2,400+',
      label: 'Delegates & Seva Sadhaks',
      desc: 'Spiritual teachers, volunteers, and change-makers united in a singular ecosystem.'
    },
    {
      icon: Calendar,
      value: '100%',
      label: 'Pure Sattvic Environment',
      desc: 'Every session conducted with traditional scriptural decorum, yoga, and organic foods.'
    },
    {
      icon: Trees,
      value: '₹45L+',
      label: 'Direct CSR Support Deployed',
      desc: 'Corporate partnership grants channeled to clean water, education, and forestry projects.'
    }
  ];

  const events = [
    {
      id: "dhara-divine-awards",
      title: "Dhara Divine Awards",
      image: "/images/News/DHARA Divine Awards Ceremony.jpg",
      category: "Awards & Recognition",
      date: "24 Jan, 2025",
      time: "09:00 AM",
      description: "The Dhara Divine Awards is a prestigious initiative organized by the Dhara Foundations to recognize and celebrate individuals, social organizations, philanthropists, spiritual leaders, and change-makers who dedicate their lives to selfless service and humanitarian work inspired by spiritual values. The award ceremony aims to honor those who create a positive impact on society through compassion, humanity, social responsibility, and community upliftment.",
      location: "Chetpet, Chennai"
    },
    {
      id: "digitisation-activities-wshg",
      title: "Digitisation Activities for Women Self Help Groups",
      image: "/images/Events/In Digitisation activities for Women Self Help Group society.jpg",
      category: "Women's Empowerment",
      date: "01 Jan, 2025",
      time: "01:00 PM",
      description: "The Dhara Foundations initiated comprehensive digitisation training and financial literacy workshops for Women Self Help Group (SHG) societies in Cuddalore district.",
      location: "Cuddalore"
    },
    {
      id: "tribal-welfare-javadhu-hills",
      title: "Tribal Welfare Activities at Javadhu Hills",
      image: "/images/Events/In Tribal welfare activities at Javadhu hills.jpg",
      category: "Welfare Drives",
      date: "06 Nov, 2025",
      time: "02:00 PM",
      description: "A comprehensive tribal welfare outreach conducted across remote hamlets in the Javadhu Hills near Vellore, focusing on basic healthcare, nutrition, and warm clothing distribution.",
      location: "Vellore"
    },
    {
      id: "diwali-dresses-home-children",
      title: "Providing Diwali Dresses to Home Children",
      image: "/images/Events/Providing Diwali Dresses To Home Children.jpg",
      category: "Children & Education",
      date: "18 Oct, 2025",
      time: "01:00 PM",
      description: "Celebrating the Festival of Lights by distributing brand new traditional Diwali dresses, festive sweets, and firecrackers to children residing in government care homes across Cuddalore.",
      location: "Cuddalore"
    },
    {
      id: "footwear-girl-children-annai-sathiya",
      title: "Footwear for Girls at Annai Sathiya Govt Home",
      image: "/images/Events/Providing footwear to all the girl children at Annai Sathiya District Govt Home.png",
      category: "Children & Education",
      date: "14 Apr, 2025",
      time: "01:00 PM",
      description: "Dhara Foundations distributed high-quality, durable footwear to all girl children residing at the Annai Sathiya District Government Home in Cuddalore on Tamil New Year's Day.",
      location: "Cuddalore"
    },
    {
      id: "felicitation-sports-children-pongal",
      title: "Felicitation of Sports Children during Pongal",
      image: "/images/Events/Felicitation of Sports children at Cuddalore during Pongal festival.jpg",
      category: "Children & Education",
      date: "14 Jan, 2025",
      time: "06:00 PM",
      description: "During the grand Pongal harvest festival celebrations, Dhara Foundations organized a special ceremony to felicitate outstanding young sports achievers from government schools and orphanages in Cuddalore.",
      location: "Cuddalore"
    },
    {
      id: "meal-food-carriers-govt-home",
      title: "Providing Meals & Food Carriers to Govt Home Children",
      image: "/images/Events/Providing meal and food carriers to Govt Home Children.jpg",
      category: "Welfare Drives",
      date: "17 Sep, 2024",
      time: "01:00 PM",
      description: "An Anna Daanam service providing wholesome festive meals along with stainless steel food carriers and water bottles to children at government welfare homes in Cuddalore.",
      location: "Cuddalore"
    },
    {
      id: "covid-19-relief",
      title: "COVID-19 Pandemic Emergency Relief",
      image: "/images/Events/Covid 19.jpg",
      category: "Welfare Drives",
      date: "03 Feb, 2020",
      time: "09:00 AM",
      description: "Extensive COVID-19 pandemic emergency relief operations conducted across Chennai, distributing grocery kits, medical supplies, masks, and daily cooked meals to stranded daily-wage laborers and vulnerable families.",
      location: "Chennai"
    }
  ];

  const categories = ['All', 'Awards & Recognition', "Women's Empowerment", 'Welfare Drives', 'Children & Education'];

  const filteredEvents = events.filter(evt => {
    const matchesCategory = selectedCategory === 'All' || evt.category === selectedCategory;
    const matchesSearch = evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          evt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          evt.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-sun-gold font-semibold uppercase tracking-wider text-sm font-sans">Retrospective and Impact</span>
        <h2 className="text-4xl font-serif text-forest-teal-dark mt-2 mb-4">Event Highlights & Impact Metrics</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto font-sans">
          A glimpse into the spiritual fervor, cultural depth, and humanitarian impact of our previous Divine Awards assembly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((s, index) => {
          const IconComponent = s.icon;
          return (
            <div key={index} className="bg-white rounded-2xl border border-neutral-100 p-6 shadow-premium text-center hover:border-sun-gold-light transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-soft-sage flex items-center justify-center mx-auto mb-4">
                <IconComponent className="w-6 h-6 text-forest-teal-light" />
              </div>
              <span className="text-3xl font-serif font-bold text-forest-teal-dark block mb-1">
                {s.value}
              </span>
              <h3 className="text-sm font-bold text-forest-teal font-sans mb-2">
                {s.label}
              </h3>
              <p className="text-xs text-neutral-500 font-sans leading-relaxed">
                {s.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Events Listing Section */}
      <div className="mt-8 mb-8 text-center">
        <span className="text-sun-gold font-semibold uppercase tracking-wider text-sm font-sans">MARK YOUR CALENDAR</span>
        <h3 className="text-3xl font-serif text-forest-teal-dark mt-2 mb-4">Events & Welfare Drives Calendar</h3>
        <p className="text-neutral-600 max-w-2xl mx-auto font-sans text-sm mb-8">
          Join us in our ceremonies and welfare drives across Tamil Nadu. Explore our upcoming gatherings and completed milestones.
        </p>

        {/* Search Input & Category Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-4xl mx-auto mb-10 p-4 bg-white/60 backdrop-blur-md rounded-3xl border border-neutral-100 shadow-premium">
          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search events, locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-2xl focus:outline-none focus:border-sun-gold focus:ring-1 focus:ring-sun-gold transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-xl text-xs font-sans font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-forest-teal text-white shadow-md'
                    : 'bg-white border border-neutral-200 text-neutral-600 hover:border-sun-gold hover:text-forest-teal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-3xl border border-neutral-100 overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col sm:flex-row h-full group"
            >
              {/* Event Image */}
              <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden bg-neutral-50 shrink-0">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"; // fallback
                  }}
                />
                <div className="absolute top-3 left-3 bg-forest-teal text-white text-[10px] font-bold font-sans uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm border border-white/10">
                  {evt.category}
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-3">
                  <div className="space-y-1 text-xs font-mono text-sun-gold flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 font-bold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-neutral-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{evt.time}</span>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-forest-teal-dark leading-snug group-hover:text-sun-gold transition-colors font-sans font-semibold">
                    {evt.title}
                  </h4>

                  <p className="text-xs text-neutral-500 leading-relaxed font-sans line-clamp-3">
                    {evt.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs text-neutral-500 font-medium font-sans">
                    <MapPin className="w-3.5 h-3.5 text-sun-gold" />
                    <span>{evt.location}</span>
                  </span>
                  
                  <span className="text-xs font-bold text-forest-teal flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 max-w-md mx-auto">
          <p className="text-neutral-500 font-sans text-sm">
            No events found matching your search criteria. Try choosing a different category or search term.
          </p>
        </div>
      )}
    </div>
  );
}

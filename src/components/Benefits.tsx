
import React, { useEffect, useRef, useState } from 'react';
import { Wifi, Users, Shield, Zap, Heart, Globe } from 'lucide-react';

export const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: <Wifi size={48} />,
      title: "No Internet Required",
      description: "Chat without consuming data or needing WiFi. Perfect for areas with poor connectivity.",
      color: "from-red-500 to-pink-600",
      delay: 0
    },
    {
      icon: <Users size={48} />,
      title: "Connect Across Campus",
      description: "Break geographical barriers and connect with students from different departments and years.",
      color: "from-blue-500 to-indigo-600",
      delay: 200
    },
    {
      icon: <Shield size={48} />,
      title: "Secure and Fast",
      description: "Advanced encryption keeps your conversations private while ensuring lightning-fast delivery.",
      color: "from-green-500 to-emerald-600",
      delay: 400
    },
    {
      icon: <Heart size={48} />,
      title: "Built for Indian Youth",
      description: "Designed with Indian students in mind, celebrating our diverse campus culture.",
      color: "from-orange-500 to-red-600",
      delay: 600
    },
    {
      icon: <Zap size={48} />,
      title: "Instant Messaging",
      description: "Real-time conversations with zero lag, making communication feel natural and effortless.",
      color: "from-purple-500 to-violet-600",
      delay: 800
    },
    {
      icon: <Globe size={48} />,
      title: "Pan-India Network",
      description: "Connect with students from Kashmir to Kanyakumari, building a nationwide student community.",
      color: "from-teal-500 to-cyan-600",
      delay: 1000
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-200 to-blue-200 dark:from-orange-800 dark:to-blue-800 transform rotate-12 scale-150"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full opacity-20 dark:opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 mb-6 shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Why Choose ChatCampus
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Your Value, <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Delivered</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the future of campus communication with features designed specifically for Indian students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border border-white/50 dark:border-gray-700/50 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${benefit.delay}ms` }}
            >
              {/* Icon */}
              <div className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                {benefit.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                {benefit.description}
              </p>

              {/* Hover line effect */}
              <div className={`mt-6 h-1 bg-gradient-to-r ${benefit.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Campus Experience?</h3>
              <p className="text-xl mb-6 opacity-90">Join thousands of students already connecting through ChatCampus</p>
              <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Start Chatting Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

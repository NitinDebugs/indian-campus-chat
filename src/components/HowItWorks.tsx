
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Users, MessageCircle } from 'lucide-react';

export const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: <MapPin size={48} />,
      title: "Select Nearby College",
      description: "Choose from 500+ Indian colleges and universities near you or browse by city, state, or institution type.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Users size={48} />,
      title: "Join College Room",
      description: "Enter college-specific chat rooms, browse ongoing conversations, and connect with current students and alumni.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <MessageCircle size={48} />,
      title: "Chat with Classmates",
      description: "Start conversations, share experiences, ask questions, and build meaningful connections - all offline and secure.",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            How It <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with your campus community in just three simple steps. No internet required, just pure offline connectivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative group transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent z-0 transform translate-x-4">
                  <div className={`h-full bg-gradient-to-r ${step.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`}></div>
                </div>
              )}

              {/* Step card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-orange-200">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

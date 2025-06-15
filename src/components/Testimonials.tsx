
import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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

  const testimonials = [
    {
      name: "Priya Sharma",
      college: "IIT Delhi",
      course: "Computer Science, 3rd Year",
      text: "ChatCampus has revolutionized how we connect in our hostel. No more worrying about data charges or poor WiFi. It's become our go-to platform for everything from study groups to late-night conversations.",
      rating: 5,
      avatar: "👩‍🎓",
      color: "from-pink-500 to-red-500"
    },
    {
      name: "Arjun Patel",
      college: "VIT Vellore",
      course: "Mechanical Engineering, 2nd Year", 
      text: "The offline chat feature is a game-changer! During our recent campus fest, when the network was down, ChatCampus kept us all connected. Coordinating events became so much easier.",
      rating: 5,
      avatar: "👨‍💻",
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Sneha Reddy",
      college: "Delhi University",
      course: "English Literature, 1st Year",
      text: "As a freshman, ChatCampus helped me find my tribe. I connected with seniors, joined study groups, and made friends across different colleges in Delhi. It's like having a campus-wide social network!",
      rating: 5,
      avatar: "👩‍📚",
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Rahul Kumar",
      college: "SRM Institute",
      course: "Biotechnology, 4th Year",
      text: "The security and privacy features give me peace of mind. I can share important academic resources and discuss projects without worrying about data breaches. Plus, it works perfectly in our lab areas with poor connectivity.",
      rating: 5,
      avatar: "👨‍🔬",
      color: "from-purple-500 to-violet-500"
    },
    {
      name: "Ananya Singh",
      college: "Christ University",
      course: "Business Administration, 2nd Year",
      text: "ChatCampus brings together students from different streams and years. I've learned so much from seniors and even helped juniors with their queries. It's building a real sense of community in our college.",
      rating: 5,
      avatar: "👩‍💼",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Vikram Joshi",
      college: "JNU",
      course: "Political Science, PhD Scholar",
      text: "For research discussions and academic collaborations, ChatCampus has been invaluable. The ability to create topic-specific rooms and invite students from other universities has enriched my research tremendously.",
      rating: 5,
      avatar: "👨‍🎓",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Students <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from students across India who are transforming their campus life with ChatCampus.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
                    {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial, index) => (
                      <div
                        key={testimonial.name}
                        className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 relative overflow-hidden ${
                          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                      >
                        {/* Quote icon */}
                        <div className="absolute top-6 right-6 text-gray-200">
                          <Quote size={32} />
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-4">
                          {renderStars(testimonial.rating)}
                        </div>

                        {/* Testimonial text */}
                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          "{testimonial.text}"
                        </p>

                        {/* Student info */}
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-2xl shadow-lg`}>
                            {testimonial.avatar}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                            <p className="text-gray-600">{testimonial.course}</p>
                            <p className="text-sm text-gray-500">{testimonial.college}</p>
                          </div>
                        </div>

                        {/* Hover effect */}
                        <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-orange-500 to-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-3xl p-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">4.8/5</div>
                <p className="opacity-90">Average Rating</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <p className="opacity-90">Happy Students</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <p className="opacity-90">Colleges Connected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

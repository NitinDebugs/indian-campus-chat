
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
      text: "Yaar, ChatCampus ne hostel life ko bilkul change kar diya hai! Ab data ka tension nahi, WiFi slow hai toh kya - humara connection strong hai. Study groups se lekar night chai pe gossip tak, sab kuch ChatCampus pe hota hai.",
      rating: 5,
      avatar: "👩‍🎓",
      color: "from-pink-500 to-red-500"
    },
    {
      name: "Arjun Patel",
      college: "VIT Vellore",
      course: "Mechanical Engineering, 2nd Year", 
      text: "Bhai, offline chat feature ekdum sahi hai! Campus fest mein jab network down ho gaya tha, tab bhi ChatCampus mein sab connected the. Event coordination kitna easy ho gaya, you won't believe!",
      rating: 5,
      avatar: "👨‍💻",
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Sneha Reddy",
      college: "Delhi University",
      course: "English Literature, 1st Year",
      text: "Main ek fresher hun na, toh ChatCampus mein mujhe apna gang mil gaya. Seniors se tips leke, different colleges ke students se connect karke - it's like having a campus-wide dost circle!",
      rating: 5,
      avatar: "👩‍📚",
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Rahul Kumar",
      college: "SRM Institute",
      course: "Biotechnology, 4th Year",
      text: "Security aur privacy top-notch hai yaar! Lab mein poor connectivity hai but ChatCampus smoothly chal jaata hai. Projects discuss karna, notes share karna - sab kuch secure feel hota hai.",
      rating: 5,
      avatar: "👨‍🔬",
      color: "from-purple-500 to-violet-500"
    },
    {
      name: "Ananya Singh",
      college: "Christ University",
      course: "Business Administration, 2nd Year",
      text: "Different streams ke log mil jaate hain ChatCampus pe. Seniors se guidance lena ho ya juniors ki help karni ho - real sense of community ban gaya hai college mein. Maja aa jaata hai!",
      rating: 5,
      avatar: "👩‍💼",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Vikram Joshi",
      college: "JNU",
      course: "Political Science, PhD Scholar",
      text: "Research discussions aur academic collaborations ke liye ChatCampus bohot helpful hai. Topic-wise rooms bana ke different universities ke students ko invite kar sakte hain - research game strong ho gaya hai!",
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
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`} 
      />
    ));
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            What Students <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 px-4">
                    {testimonials.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial, index) => (
                      <div
                        key={testimonial.name}
                        className={`bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 dark:border-gray-700 relative overflow-hidden ${
                          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                      >
                        {/* Quote icon */}
                        <div className="absolute top-6 right-6 text-gray-200 dark:text-gray-600">
                          <Quote size={32} />
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-4">
                          {renderStars(testimonial.rating)}
                        </div>

                        {/* Testimonial text */}
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-base lg:text-lg">
                          "{testimonial.text}"
                        </p>

                        {/* Student info */}
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-xl lg:text-2xl shadow-lg`}>
                            {testimonial.avatar}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 dark:text-white text-base lg:text-lg">{testimonial.name}</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base">{testimonial.course}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.college}</p>
                          </div>
                        </div>
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
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-3xl p-6 lg:p-8 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">4.8/5</div>
                <p className="opacity-90 text-sm lg:text-base">Average Rating</p>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">50K+</div>
                <p className="opacity-90 text-sm lg:text-base">Happy Students</p>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
                <p className="opacity-90 text-sm lg:text-base">Colleges Connected</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Users, Star, GraduationCap, DollarSign, TrendingUp, Award } from 'lucide-react';

export const FeaturedColleges = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
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

  const filters = ['All', 'Engineering', 'Arts', 'Private', 'Government'];

  const colleges = [
    {
      name: "IIT Bombay",
      location: "Mumbai, Maharashtra",
      type: "Engineering",
      category: "Government",
      students: "11,000+",
      rating: 4.9,
      ranking: "NIRF Rank #3 (2024)",
      color: "from-blue-500 to-indigo-600",
      image: "/lovable-uploads/b2f92153-bf4b-4201-988a-6979676859cf.png",
      description: "Premier technical education institute known for excellence in engineering and technology.",
      courses: ["B.Tech", "M.Tech", "PhD", "Dual Degree", "MBA"],
      admissionFees: "₹2.5 Lakhs/year",
      placement: {
        average: "₹22 LPA",
        highest: "₹2.14 Crore",
        percentage: "98%"
      }
    },
    {
      name: "VIT Vellore",
      location: "Vellore, Tamil Nadu",
      type: "Engineering",
      category: "Private",
      students: "55,000+",
      rating: 4.8,
      ranking: "NIRF Rank #15 (2024)",
      color: "from-green-500 to-emerald-600",
      image: "/lovable-uploads/a1ae13d9-6a11-43ec-aa41-debcf600d5f7.png",
      description: "Leading private technical university with state-of-the-art facilities and global partnerships.",
      courses: ["B.Tech", "M.Tech", "MBA", "BBA", "MCA"],
      admissionFees: "₹1.98 Lakhs/year",
      placement: {
        average: "₹7.5 LPA",
        highest: "₹75 LPA",
        percentage: "95%"
      }
    },
    {
      name: "SRM Institute",
      location: "Chennai, Tamil Nadu",
      type: "Engineering",
      category: "Private",
      students: "50,000+",
      rating: 4.5,
      ranking: "NIRF Rank #41 (2024)",
      color: "from-orange-500 to-red-600",
      image: "/lovable-uploads/7cb1ad99-ba18-4722-8e57-3e580242d805.png",
      description: "Multi-disciplinary university offering comprehensive education with modern infrastructure.",
      courses: ["B.Tech", "M.Tech", "MBBS", "MBA", "BBA"],
      admissionFees: "₹2.5 Lakhs/year",
      placement: {
        average: "₹6.5 LPA",
        highest: "₹54 LPA",
        percentage: "92%"
      }
    },
    {
      name: "Delhi University",
      location: "New Delhi",
      type: "Arts",
      category: "Government", 
      students: "132,000+",
      rating: 4.7,
      ranking: "NIRF Rank #11 (2024)",
      color: "from-red-500 to-pink-600",
      image: "/lovable-uploads/3a0a4560-d02e-465b-bc00-c65650c46fa1.png",
      description: "One of India's largest universities offering diverse academic programs across multiple disciplines.",
      courses: ["B.A", "B.Com", "B.Sc", "M.A", "MBA"],
      admissionFees: "₹15,000/year",
      placement: {
        average: "₹5.5 LPA",
        highest: "₹25 LPA",
        percentage: "85%"
      }
    },
    {
      name: "JNU",
      location: "New Delhi",
      type: "Arts",
      category: "Government",
      students: "8,500+",
      rating: 4.6,
      ranking: "NIRF Rank #2 (2024)",
      color: "from-purple-500 to-violet-600",
      image: "/lovable-uploads/c5c47e54-98e4-4e88-939f-1a010db09196.png",
      description: "Prestigious central university renowned for social sciences, languages, and research excellence.",
      courses: ["M.A", "M.Phil", "PhD", "B.A", "M.Sc"],
      admissionFees: "₹2,000/year",
      placement: {
        average: "₹6 LPA",
        highest: "₹18 LPA",
        percentage: "80%"
      }
    },
    {
      name: "Christ University",
      location: "Bangalore, Karnataka",
      type: "Arts",
      category: "Private",
      students: "25,000+",
      rating: 4.4,
      ranking: "NIRF Rank #20 (2024)",
      color: "from-teal-500 to-cyan-600",
      image: "/lovable-uploads/6783964c-c46a-4036-9a2e-383f847721be.png",
      description: "Deemed university known for holistic education and strong industry connections.",
      courses: ["BBA", "MBA", "B.Tech", "B.A", "M.A"],
      admissionFees: "₹3.5 Lakhs/year",
      placement: {
        average: "₹5.8 LPA",
        highest: "₹28 LPA",
        percentage: "88%"
      }
    }
  ];

  const filteredColleges = selectedFilter === 'All' 
    ? colleges 
    : colleges.filter(college => college.type === selectedFilter || college.category === selectedFilter);

  return (
    <section ref={sectionRef} id="colleges" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Featured <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Colleges</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Connect with India's top educational institutions. From prestigious IITs to vibrant universities across the nation.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-orange-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {filteredColleges.map((college, index) => (
            <div
              key={college.name}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden border border-gray-100 dark:border-gray-700 group ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* College Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={college.image} 
                  alt={college.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Star size={16} className="text-yellow-500 fill-current" />
                  <span className="text-gray-800 font-semibold text-sm">{college.rating}</span>
                </div>
                
                {/* Animated overlay */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30">
                  <div className={`h-full bg-gradient-to-r ${college.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`}></div>
                </div>
              </div>

              {/* College Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">{college.name}</h3>
                
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-3">
                  <MapPin size={16} />
                  <span className="text-sm sm:text-base">{college.location}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
                  <Users size={16} />
                  <span className="text-sm sm:text-base">{college.students} Students</span>
                </div>

                {/* Ranking */}
                <div className="flex items-center gap-2 mb-4">
                  <Award size={16} className="text-yellow-600 dark:text-yellow-400" />
                  <span className="text-sm font-bold text-yellow-700 dark:text-yellow-400">{college.ranking}</span>
                </div>

                {/* Course Offerings */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap size={16} className="text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Courses:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {college.courses.map((course, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Admission Fees */}
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign size={16} className="text-green-600 dark:text-green-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Fees: </span>
                  <span className="text-sm font-bold text-green-700 dark:text-green-400">{college.admissionFees}</span>
                </div>

                {/* Placement Stats */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={16} className="text-purple-600 dark:text-purple-400" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Placements:</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                      <div className="font-bold text-purple-700 dark:text-purple-400">{college.placement.average}</div>
                      <div className="text-gray-600 dark:text-gray-300">Avg</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                      <div className="font-bold text-purple-700 dark:text-purple-400">{college.placement.highest}</div>
                      <div className="text-gray-600 dark:text-gray-300">High</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                      <div className="font-bold text-purple-700 dark:text-purple-400">{college.placement.percentage}</div>
                      <div className="text-gray-600 dark:text-gray-300">Rate</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mb-6 flex-wrap">
                  <span className="px-2 sm:px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 text-xs sm:text-sm font-medium rounded-full">
                    {college.type}
                  </span>
                  <span className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium rounded-full">
                    {college.category}
                  </span>
                </div>

                <button className={`w-full bg-gradient-to-r ${college.color} text-white py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  View Details & Chat
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6">Don't see your college? We're adding new institutions every week!</p>
          <button className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Request Your College
          </button>
        </div>
      </div>
    </section>
  );
};

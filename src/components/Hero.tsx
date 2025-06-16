import React from 'react';
import { ArrowRight, Users, MapPin } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface HeroProps {
  scrollY: number;
}

export const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const { language } = useTheme();

  const translations = {
    en: {
      badge: 'Connecting 500+ Indian Colleges',
      title1: 'Connect Your Campus,',
      title2: 'Effortlessly',
      subtitle: 'Offline chat rooms for India\'s top colleges – Filter, Join, and Start Chatting with your classmates and nearby students.',
      startChatting: 'Start Chatting',
      watchDemo: 'Watch Demo',
      activeStudents: 'Active Students',
      connectedColleges: 'Connected Colleges',
      messagesSent: 'Messages Sent'
    },
    hi: {
      badge: '500+ भारतीय कॉलेजों को जोड़ना',
      title1: 'अपने कैंपस को जोड़ें,',
      title2: 'आसानी से',
      subtitle: 'भारत के शीर्ष कॉलेजों के लिए ऑफलाइन चैट रूम - फिल्टर करें, शामिल हों, और अपने सहपाठियों और आस-पास के छात्रों के साथ चैट करना शुरू करें।',
      startChatting: 'चैट शुरू करें',
      watchDemo: 'डेमो देखें',
      activeStudents: 'सक्रिय छात्र',
      connectedColleges: 'जुड़े कॉलेज',
      messagesSent: 'भेजे गए संदेश'
    }
  };

  const t = translations[language];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* ... keep existing code (background animations and particles) */}
        <div className="absolute inset-0 opacity-30">
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-orange-300 dark:border-orange-600 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-blue-300 dark:border-blue-600 rotate-45 animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-r from-orange-200 to-blue-200 dark:from-orange-600 dark:to-blue-600 rounded-lg animate-bounce" style={{ animationDuration: '3s' }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div 
          className="transform transition-transform duration-1000"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 mb-6 shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            {t.badge}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 via-red-500 to-blue-600 bg-clip-text text-transparent">
              {t.title1}
            </span>
            <br />
            <span className="text-gray-800 dark:text-white">{t.title2}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-gradient-to-r from-orange-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              {t.startChatting}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-semibold text-lg flex items-center gap-2 transition-colors duration-300">
              <i className="fas fa-play-circle text-2xl"></i>
              {t.watchDemo}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                <Users size={32} />
                50K+
              </div>
              <p className="text-gray-600 dark:text-gray-400">{t.activeStudents}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                <MapPin size={32} />
                500+
              </div>
              <p className="text-gray-600 dark:text-gray-400">{t.connectedColleges}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                <i className="fas fa-comments text-3xl"></i>
                1M+
              </div>
              <p className="text-gray-600 dark:text-gray-400">{t.messagesSent}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

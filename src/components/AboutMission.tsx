
import React, { useEffect, useRef, useState } from 'react';
import { Heart, Shield, Zap, Globe } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export const AboutMission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { language } = useTheme();

  const translations = {
    en: {
      badge: 'Our Mission',
      title: 'Bridging Campus',
      titleHighlight: 'Communities',
      description1: 'ChatCampus was born from the vision to solve real communication gaps across Indian campuses. We believe every student deserves seamless connectivity with their peers, regardless of internet constraints or geographical barriers.',
      description2: 'Our platform celebrates India\'s diverse academic landscape, from prestigious IITs to vibrant state universities, creating a unified digital space where knowledge, experiences, and friendships flourish.',
      joinMission: 'Join Our Mission',
      features: [
        {
          title: 'Built for Indian Youth',
          description: 'Understanding the unique needs of Indian college students and campus culture.'
        },
        {
          title: 'Secure & Private',
          description: 'Your conversations stay local and secure with advanced encryption technology.'
        },
        {
          title: 'Lightning Fast',
          description: 'Instant messaging without internet dependency or data consumption.'
        },
        {
          title: 'Pan-India Network',
          description: 'Connecting students from Kashmir to Kanyakumari, creating a unified campus experience.'
        }
      ],
      stats: {
        uptime: 'Uptime',
        states: 'States Covered',
        support: 'Support',
        cost: 'Cost to Use'
      }
    },
    hi: {
      badge: 'हमारा मिशन',
      title: 'कैंपस को जोड़ना',
      titleHighlight: 'समुदायें',
      description1: 'ChatCampus का जन्म भारतीय कैंपसों में वास्तविक संचार अंतर को हल करने की दृष्टि से हुआ था। हमारा मानना है कि हर छात्र अपने साथियों के साथ निर्बाध कनेक्टिविटी का हकदार है, चाहे इंटरनेट की बाधाएं हों या भौगोलिक बाधाएं।',
      description2: 'हमारा प्लेटफॉर्म भारत के विविध शैक्षणिक परिदृश्य का जश्न मनाता है, प्रतिष्ठित IIT से लेकर जीवंत राज्य विश्वविद्यालयों तक, एक एकीकृत डिजिटल स्थान बनाता है जहां ज्ञान, अनुभव और दोस्ती फलती-फूलती है।',
      joinMission: 'हमारे मिशन में शामिल हों',
      features: [
        {
          title: 'भारतीय युवाओं के लिए बनाया गया',
          description: 'भारतीय कॉलेज छात्रों और कैंपस संस्कृति की अनूठी जरूरतों को समझना।'
        },
        {
          title: 'सुरक्षित और निजी',
          description: 'उन्नत एन्क्रिप्शन तकनीक के साथ आपकी बातचीत स्थानीय और सुरक्षित रहती है।'
        },
        {
          title: 'बिजली की तेज़ी',
          description: 'इंटरनेट निर्भरता या डेटा खपत के बिना तत्काल संदेश।'
        },
        {
          title: 'पूरे भारत में नेटवर्क',
          description: 'कश्मीर से कन्याकुमारी तक के छात्रों को जोड़ना, एक एकीकृत कैंपस अनुभव बनाना।'
        }
      ],
      stats: {
        uptime: 'अपटाइम',
        states: 'कवर किए गए राज्य',
        support: 'सहयोग',
        cost: 'उपयोग की लागत'
      }
    }
  };

  const t = translations[language];

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

  const features = [
    {
      icon: <Heart size={32} />,
      title: t.features[0].title,
      description: t.features[0].description
    },
    {
      icon: <Shield size={32} />,
      title: t.features[1].title,
      description: t.features[1].description
    },
    {
      icon: <Zap size={32} />,
      title: t.features[2].title,
      description: t.features[2].description
    },
    {
      icon: <Globe size={32} />,
      title: t.features[3].title,
      description: t.features[3].description
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 dark:bg-orange-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400 dark:bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400 dark:bg-green-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/50 px-4 py-2 rounded-full text-sm font-medium text-orange-700 dark:text-orange-300 mb-6">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              {t.badge}
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              {t.title} <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">{t.titleHighlight}</span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {t.description1}
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              {t.description2}
            </p>

            <button className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              {t.joinMission}
            </button>
          </div>

          {/* Features Grid */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-white/50 dark:border-gray-700/50 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-2">99.9%</div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">{t.stats.uptime}</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-2">28</div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">{t.stats.states}</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-2">24/7</div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">{t.stats.support}</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-2">0₹</div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">{t.stats.cost}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

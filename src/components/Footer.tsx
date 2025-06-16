
import React from 'react';
import { MapPin, Mail, Phone, Heart } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export const Footer = () => {
  const { language } = useTheme();

  const translations = {
    en: {
      description: 'Connecting India\'s brightest minds across campuses. Join the revolution of offline communication and build meaningful relationships with students nationwide.',
      quickLinks: 'Quick Links',
      topColleges: 'Top Colleges',
      support: 'Support',
      newsletter: {
        title: 'Stay Updated',
        description: 'Get the latest updates about new colleges, features, and campus events.',
        placeholder: 'Enter your email',
        subscribe: 'Subscribe'
      },
      madeWith: 'Made with',
      forStudents: 'for Indian students',
      copyright: '© 2025 ChatCampus. All rights reserved.',
      links: {
        about: 'About',
        howItWorks: 'How It Works',
        colleges: 'Colleges',
        benefits: 'Benefits',
        helpCenter: 'Help Center',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        contact: 'Contact Us'
      },
      colleges: {
        iitBombay: 'IIT Bombay',
        delhiUniversity: 'Delhi University',
        vitVellore: 'VIT Vellore',
        jnu: 'JNU',
        srmInstitute: 'SRM Institute',
        christUniversity: 'Christ University'
      }
    },
    hi: {
      description: 'कैंपसों में भारत के सबसे प्रतिभाशाली दिमागों को जोड़ना। ऑफलाइन संचार की क्रांति में शामिल हों और देशभर के छात्रों के साथ सार्थक रिश्ते बनाएं।',
      quickLinks: 'त्वरित लिंक',
      topColleges: 'शीर्ष कॉलेज',
      support: 'सहयोग',
      newsletter: {
        title: 'अपडेट रहें',
        description: 'नए कॉलेजों, सुविधाओं और कैंपस इवेंट्स के बारे में नवीनतम अपडेट प्राप्त करें।',
        placeholder: 'अपना ईमेल दर्ज करें',
        subscribe: 'सब्सक्राइब करें'
      },
      madeWith: 'के साथ बनाया गया',
      forStudents: 'भारतीय छात्रों के लिए',
      copyright: '© 2025 ChatCampus. सभी अधिकार सुरक्षित।',
      links: {
        about: 'हमारे बारे में',
        howItWorks: 'कैसे काम करता है',
        colleges: 'कॉलेज',
        benefits: 'लाभ',
        helpCenter: 'सहायता केंद्र',
        privacy: 'गोपनीयता नीति',
        terms: 'सेवा की शर्तें',
        contact: 'संपर्क करें'
      },
      colleges: {
        iitBombay: 'IIT बॉम्बे',
        delhiUniversity: 'दिल्ली विश्वविद्यालय',
        vitVellore: 'VIT वेल्लोर',
        jnu: 'JNU',
        srmInstitute: 'SRM संस्थान',
        christUniversity: 'क्राइस्ट विश्वविद्यालय'
      }
    }
  };

  const t = translations[language];

  const quickLinks = [
    { name: t.links.about, href: '#about' },
    { name: t.links.howItWorks, href: '#how-it-works' },
    { name: t.links.colleges, href: '#colleges' },
    { name: t.links.benefits, href: '#benefits' },
  ];

  const colleges = [
    { name: t.colleges.iitBombay, href: '#' },
    { name: t.colleges.delhiUniversity, href: '#' },
    { name: t.colleges.vitVellore, href: '#' },
    { name: t.colleges.jnu, href: '#' },
    { name: t.colleges.srmInstitute, href: '#' },
    { name: t.colleges.christUniversity, href: '#' },
  ];

  const support = [
    { name: t.links.helpCenter, href: '#' },
    { name: t.links.privacy, href: '#' },
    { name: t.links.terms, href: '#' },
    { name: t.links.contact, href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-comments text-white text-xl"></i>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                ChatCampus
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              {t.description}
            </p>
            
            {/* Social icons */}
            <div className="flex space-x-4">
              {[
                { icon: 'fab fa-instagram', color: 'from-pink-500 to-purple-600', href: '#' },
                { icon: 'fab fa-linkedin', color: 'from-blue-500 to-blue-700', href: '#' },
                { icon: 'fab fa-twitter', color: 'from-blue-400 to-blue-600', href: '#' },
                { icon: 'fab fa-youtube', color: 'from-red-500 to-red-700', href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <i className={`${social.icon} text-white text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">{t.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Colleges */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">{t.topColleges}</h3>
            <ul className="space-y-3">
              {colleges.map((college) => (
                <li key={college.name}>
                  <a 
                    href={college.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{college.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">{t.support}</h3>
            <ul className="space-y-3 mb-6">
              {support.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={16} className="text-orange-400" />
                <span className="text-sm">hello@chatcampus.in</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={16} className="text-blue-400" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={16} className="text-green-400 mt-0.5" />
                <span className="text-sm">Bangalore, Karnataka<br />India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="border-t border-gray-700 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">{t.newsletter.title}</h3>
            <p className="text-gray-300 mb-6">{t.newsletter.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t.newsletter.placeholder}
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 text-white placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                {t.newsletter.subscribe}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-gray-300 mb-4 md:mb-0">
              <span>{t.madeWith}</span>
              <Heart size={16} className="text-red-500 fill-current animate-pulse" />
              <span>{t.forStudents}</span>
            </div>
            <p className="text-gray-400 text-sm">
              {t.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

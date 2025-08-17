import React, { useState, useEffect } from 'react';
import {
  FiHome,
  FiCalendar,
  FiTool,
  FiAlertCircle,
  FiBook,
  FiStar,
  FiMessageSquare,
  FiX,
  FiMenu,
  FiUserCheck,
} from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Section detection logic
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
    setActiveSection(id);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: <FiHome size={18} /> },
    { id: 'services', label: 'Services', icon: <FiTool size={18} /> },
    { id: 'book', label: 'Book Now', icon: <FiCalendar size={18} /> },
    { id: 'emergency', label: 'Emergency', icon: <FiAlertCircle size={18} /> },
    { id: 'technicians', label: 'Technician', icon: <FiUserCheck size={18} /> },
    { id: 'tips', label: 'Tips', icon: <FiBook size={18} /> },
    { id: 'reviews', label: 'Reviews', icon: <FiStar size={18} /> },
    { id: 'contact', label: 'Contact', icon: <FiMessageSquare size={18} /> },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b transition-all duration-300 ${
          mobileMenuOpen
            ? 'border-yellow-800/40'
            : scrolled
            ? 'border-gray-800 shadow-lg'
            : 'border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <FiHome className="h-6 w-6 text-yellow-600" />
              <span className="ml-2 text-xl font-semibold text-gray-100">
                <span className="text-yellow-600">Fix</span>MyHome
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="flex-1 flex items-center justify-center">
              <div className="hidden md:flex items-center space-x-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className={`px-3 py-2 flex items-center text-sm font-medium transition-colors relative group ${
                      activeSection === item.id && !isHovering
                        ? 'text-yellow-600'
                        : 'text-gray-300 hover:text-yellow-600'
                    }`}
                  >
                    {item.icon}
                    <span className="ml-2">{item.label}</span>
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-700 rounded-full transition-all duration-300 ${
                        activeSection === item.id && !isHovering
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    ></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-yellow-600 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          mobileMenuOpen
            ? 'translate-y-0 scale-100 opacity-100'
            : '-translate-y-full scale-95 opacity-0'
        }`}
        style={{ paddingTop: '4.5rem' }}
      >
        <div className="flex flex-col items-center space-y-4 py-6 px-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full py-4 px-6 flex items-center text-lg font-medium rounded-xl transition-all duration-200 ${
                activeSection === item.id
                  ? 'text-yellow-600 bg-gray-800'
                  : 'text-gray-200 hover:text-yellow-600 hover:bg-gray-800'
              }`}
            >
              {item.icon}
              <span className="ml-4">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;

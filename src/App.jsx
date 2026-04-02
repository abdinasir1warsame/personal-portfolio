import React, { useState, useEffect } from 'react';
import ContactSection from './components/contactSection';
import Footer from './components/footer';
import AboutSection from './components/about';
import ExpertiseSection from './components/expertiseSection';
import ProjectSection from './components/projectSection';
import ExperienceSection from './components/experienceSection';
import FeaturedProjectSection from './components/featuredProjectSection';

function App() {
  // State for active tab
  const [activeTab, setActiveTab] = useState('ecs');
  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State for scroll position
  const [scrollPosition, setScrollPosition] = useState(0);
  // State for all projects view
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Button component (kept for navigation)
  const Button = ({
    children,
    primary = false,
    onClick = () => {},
    className = '',
    href = null,
  }) => {
    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block px-4 py-2 rounded-md font-medium transition-all ${
            primary
              ? 'bg-[#E11D48] text-white hover:bg-[#C01A3E]'
              : 'bg-[#FBBF24] text-[#1E293B] hover:bg-[#F59E0B]'
          } ${className}`}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded-md font-medium transition-all ${
          primary
            ? 'bg-[#E11D48] text-white hover:bg-[#C01A3E]'
            : 'bg-[#FBBF24] text-[#1E293B] hover:bg-[#F59E0B]'
        } ${className}`}
      >
        {children}
      </button>
    );
  };

  // Animated circuit lines for AI theme
  const CircuitLines = () => {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Horizontal lines */}
          <line
            x1="0"
            y1="20"
            x2="100"
            y2="20"
            stroke="#E11D48"
            strokeWidth="0.2"
          />
          <line
            x1="0"
            y1="40"
            x2="100"
            y2="40"
            stroke="#E11D48"
            strokeWidth="0.2"
          />
          <line
            x1="0"
            y1="60"
            x2="100"
            y2="60"
            stroke="#E11D48"
            strokeWidth="0.2"
          />
          <line
            x1="0"
            y1="80"
            x2="100"
            y2="80"
            stroke="#E11D48"
            strokeWidth="0.2"
          />

          {/* Vertical lines */}
          <line
            x1="20"
            y1="0"
            x2="20"
            y2="100"
            stroke="#E11D48"
            strokeWidth="0.2"
          />
          <line
            x1="40"
            y1="0"
            x2="40"
            y2="100"
            stroke="#E11D48"
            strokeWidth="0.2"
          />
          <line
            x1="60"
            y1="0"
            x2="60"
            y2="100"
            stroke="#E11D48"
            strokeWidth="0.2"
          />
          <line
            x1="80"
            y1="0"
            x2="80"
            y2="100"
            stroke="#E11D48"
            strokeWidth="0.2"
          />

          {/* Diagonal lines */}
          <line
            x1="0"
            y1="0"
            x2="100"
            y2="100"
            stroke="#FBBF24"
            strokeWidth="0.2"
          />
          <line
            x1="100"
            y1="0"
            x2="0"
            y2="100"
            stroke="#FBBF24"
            strokeWidth="0.2"
          />

          {/* Circuit nodes */}
          <circle cx="20" cy="20" r="1" fill="#E11D48" />
          <circle cx="40" cy="40" r="1" fill="#E11D48" />
          <circle cx="60" cy="60" r="1" fill="#E11D48" />
          <circle cx="80" cy="80" r="1" fill="#E11D48" />
          <circle cx="20" cy="80" r="1" fill="#FBBF24" />
          <circle cx="80" cy="20" r="1" fill="#FBBF24" />
        </svg>
      </div>
    );
  };

  return (
    <div className="min-h-screen lg:px-20 bg-[#FFFFFF] text-[#1E293B] relative">
      {/* Circuit background for AI theme */}
      <CircuitLines />

      {/* Header */}
      <header
        className={`sticky top-0 z-50 bg-white/90 backdrop-blur-sm transition-all ${
          scrollPosition > 50 ? 'shadow-md' : ''
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-[#E11D48] flex items-center justify-center text-white font-bold mr-3">
              AW
            </div>
            <h1 className="text-xl font-bold">
              <span className="text-[#E11D48]">Abdinasir</span>{' '}
              <span className="text-[#1E293B]">Warsame</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#home"
              className="font-medium hover:text-[#E11D48] transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-medium hover:text-[#E11D48] transition-colors"
            >
              About
            </a>
            <a
              href="#featured"
              className="font-medium hover:text-[#E11D48] transition-colors"
            >
              Featured
            </a>
            <a
              href="#projects"
              className="font-medium hover:text-[#E11D48] transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="font-medium hover:text-[#E11D48] transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="font-medium hover:text-[#E11D48] transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="font-medium hover:text-[#E11D48] transition-colors"
            >
              Contact
            </a>
            <Button primary href="/abdinasir-warsame-cv.pdf">
              Resume
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-2">
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              <a
                href="#home"
                className="py-2 font-medium hover:text-[#E11D48] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="py-2 font-medium hover:text-[#E11D48] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#featured"
                className="py-2 font-medium hover:text-[#E11D48] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Featured
              </a>
              <a
                href="#projects"
                className="py-2 font-medium hover:text-[#E11D48] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="py-2 font-medium hover:text-[#E11D48] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#experience"
                className="py-2 font-medium hover:text-[#E11D48] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </a>
              <a
                href="#contact"
                className="py-2 font-medium hover:text-[#E11D48] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button
                primary
                href="/abdinasir-warsame-cv.pdf"
                className="w-full"
              >
                Resume
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#FBBF24]/20 text-[#E11D48] font-medium">
                  DevOps Engineer & Full-Stack Developer
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Building <span className="text-[#E11D48]">Scalable</span>{' '}
                  Systems and Modern Web Applications
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                  I design and deploy scalable applications and cloud
                  infrastructure, combining DevOps practices with modern web
                  development to build reliable, efficient systems
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    primary
                    onClick={() => {
                      document
                        .getElementById('featured')
                        .scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    View Projects
                  </Button>
                  <Button
                    onClick={() => {
                      document
                        .getElementById('contact')
                        .scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative z-10 w-full h-80 md:h-96 bg-gradient-to-br from-[#E11D48]/10 to-[#FBBF24]/10 rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-[#E11D48] flex items-center justify-center text-white text-5xl font-bold animate-pulse">
                    AW
                  </div>
                </div>
                <div className="absolute inset-0">
                  {/* Animated circuit pattern */}
                  <svg
                    className="w-full h-full opacity-20"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <pattern
                        id="grid"
                        width="10"
                        height="10"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 10 0 L 0 0 0 10"
                          fill="none"
                          stroke="#E11D48"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                    <circle
                      cx="50"
                      cy="50"
                      r="30"
                      fill="none"
                      stroke="#FBBF24"
                      strokeWidth="0.5"
                      strokeDasharray="2,2"
                    >
                      <animate
                        attributeName="r"
                        from="30"
                        to="40"
                        dur="10s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx="50"
                      cy="50"
                      r="20"
                      fill="none"
                      stroke="#E11D48"
                      strokeWidth="0.5"
                    >
                      <animate
                        attributeName="r"
                        from="20"
                        to="25"
                        dur="5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </svg>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-5 -right-5 w-20 h-20 bg-[#FBBF24]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-[#E11D48]/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Featured Project Section */}
      <FeaturedProjectSection />

      {/* Projects Section */}
      <ProjectSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showAllProjects={showAllProjects}
        setShowAllProjects={setShowAllProjects}
      />

      {/* Expertise Section */}
      <ExpertiseSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  );
}

export default App;

import { Mail, Phone, MapPin, Heart, ArrowUp, Sparkles } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-white">Codelithlabs</span>
              <Sparkles size={20} className="text-yellow-400 animate-pulse" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Crafting digital experiences that inspire and innovate. We're passionate about technology and dedicated to your success.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>worldwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                <ArrowUp size={14} className="transform group-hover:-translate-y-1 transition-transform" /> Home
              </a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                <ArrowUp size={14} className="transform group-hover:-translate-y-1 transition-transform" /> About
              </a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                <ArrowUp size={14} className="transform group-hover:-translate-y-1 transition-transform" /> Services
              </a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                <ArrowUp size={14} className="transform group-hover:-translate-y-1 transition-transform" /> Products
              </a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                <ArrowUp size={14} className="transform group-hover:-translate-y-1 transition-transform" /> Team
              </a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                <ArrowUp size={14} className="transform group-hover:-translate-y-1 transition-transform" /> Contact
              </a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Services
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Web Development</li>
              <li className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Mobile Apps</li>
              <li className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Cloud Solutions</li>
              <li className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">AI & Machine Learning</li>
              <li className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Data Analytics</li>
              <li className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Cybersecurity</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:team.codelithlabs@gmail.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                  team.codelithlabs@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white text-sm transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Kokrajhar, Assam, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>&copy; {currentYear} Codelithlabs.</span>
            <span className="text-yellow-400">All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>

        {/* Scroll to Top */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white rounded-lg transition-all transform hover:scale-105 text-sm font-medium"
          >
            Back to Top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

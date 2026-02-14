import { Search, Mic, Camera, Star, Zap, TrendingUp, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-20 min-h-screen flex flex-col items-center justify-center bg-gradient-mesh overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" style={{ animationDelay: '3s' }}></div>

      {/* Floating Stickers */}
      <div className="absolute top-32 left-8 animate-float sticker">
        <div className="bg-yellow-400 text-white p-3 rounded-full shadow-lg transform rotate-12">
          <Star size={24} />
        </div>
      </div>
      <div className="absolute top-40 right-16 animate-bounce sticker">
        <div className="bg-blue-500 text-white p-3 rounded-full shadow-lg">
          <Zap size={24} />
        </div>
      </div>
      <div className="absolute bottom-32 left-16 animate-float sticker" style={{ animationDelay: '1.5s' }}>
        <div className="bg-green-500 text-white p-3 rounded-full shadow-lg transform -rotate-6">
          <TrendingUp size={24} />
        </div>
      </div>
      <div className="absolute bottom-40 right-8 animate-bounce sticker" style={{ animationDelay: '2s' }}>
        <div className="bg-red-500 text-white p-3 rounded-full shadow-lg transform rotate-6">
          <Sparkles size={24} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo with 3D Effect */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4 animate-fade-in-up stagger-1">
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500">
            Codelithlabs
          </span>
        </h1>

        {/* Inspiring Tagline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-2xl mx-auto animate-fade-in-up stagger-2">
          Crafting digital experiences that
          <span className="text-blue-600 font-semibold"> inspire innovation</span>,
          <span className="text-green-600 font-semibold"> empower growth</span>, and
          <span className="text-yellow-600 font-semibold"> transform futures</span>
        </p>

        {/* Mission Statement */}
        <p className="text-lg text-gray-500 mb-10 max-w-3xl mx-auto animate-fade-in-up stagger-3">
          Where cutting-edge technology meets creative brilliance. We build software that doesn't just work—it
          <span className="text-purple-600 font-medium"> wows</span>.
        </p>

        {/* Search Bar - Google Style with 3D Effect */}
        <div className="w-full max-w-2xl mx-auto mb-8 animate-fade-in-up stagger-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 rounded-full opacity-25 group-hover:opacity-50 transition-opacity blur-lg animate-pulse"></div>
            <div className="relative flex items-center bg-white border-2 border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all group-hover:border-blue-400">
              <Search size={22} className="ml-5 text-gray-400" />
              <input
                type="text"
                placeholder="Discover our innovative solutions..."
                className="flex-1 py-4 px-4 text-gray-700 placeholder-gray-400 text-lg border-none outline-none bg-transparent"
              />
              <div className="flex items-center gap-2 mr-3">
                <button className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-all transform hover:scale-110">
                  <Mic size={20} />
                </button>
                <button className="p-2 text-gray-400 hover:text-green-500 hover:bg-green-50 rounded-full transition-all transform hover:scale-110">
                  <Camera size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up stagger-5">
          <a
            href="#services"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center gap-2"
          >
            <Zap size={18} />
            Explore Services
          </a>
          <a
            href="#products"
            className="px-6 py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:text-green-600 hover:shadow-lg transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center gap-2"
          >
            <Star size={18} />
            View Products
          </a>
          <a
            href="#about"
            className="px-6 py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:text-purple-600 hover:shadow-lg transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center gap-2"
          >
            <TrendingUp size={18} />
            About Us
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-up stagger-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-blue bg-clip-text text-transparent">100+</div>
            <div className="text-sm text-gray-500">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500">50+</div>
            <div className="text-sm text-gray-500">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">25+</div>
            <div className="text-sm text-gray-500">Team Experts</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-gray-300 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

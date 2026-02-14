import { Target, Eye, Heart, Award, Users, TrendingUp, Star, Sparkles } from 'lucide-react';

export const About = () => {
  const stats = [
    { number: '100+', label: 'Projects Delivered', detail: 'Successfully completed', icon: <TrendingUp size={24} /> },
    { number: '50+', label: 'Happy Clients', detail: 'Worldwide trust', icon: <Users size={24} /> },
    { number: '25+', label: 'Team Experts', detail: 'Skilled professionals', icon: <Award size={24} /> },
  ];

  const values = [
    {
      icon: <Target size={32} />,
      title: 'Quality First',
      description: 'Excellence in every line of code, every pixel designed, every solution delivered.',
      color: 'blue'
    },
    {
      icon: <Eye size={32} />,
      title: 'Innovation Driven',
      description: 'Pushing boundaries, exploring new technologies, and setting new standards.',
      color: 'purple'
    },
    {
      icon: <Heart size={32} />,
      title: 'Client Centric',
      description: 'Understanding needs, exceeding expectations, building lasting partnerships.',
      color: 'red'
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} />
            Who We Are
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Passionate About 
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"> Digital Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a team of dreamers, doers, and innovators united by a single purpose: to transform businesses through the power of technology.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-25 group-hover:opacity-50 blur transition-all duration-300"></div>
            <div className="relative p-8 bg-white border-2 border-gray-100 rounded-2xl hover:border-blue-200 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-100/50">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Target size={28} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                Our Mission
                <span className="animate-bounce inline-block">🎯</span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Codelithlabs, we believe technology is the catalyst for business transformation. Our mission is to empower organizations worldwide with innovative digital solutions that drive real results—not just metrics, but meaningful impact that shapes the future.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We combine technical excellence with creative thinking to build products that don't just meet expectations, but redefine what's possible. Every project is a partnership, every challenge an opportunity to innovate.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-25 group-hover:opacity-50 blur transition-all duration-300"></div>
            <div className="relative p-8 bg-white border-2 border-gray-100 rounded-2xl hover:border-purple-200 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-100/50">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                <Eye size={28} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                Our Vision
                <span className="animate-pulse inline-block">🔮</span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We envision a world where technology seamlessly enhances every aspect of human experience. A world where businesses of all sizes have access to the same powerful tools as tech giants.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our vision extends beyond code—we're building a legacy of innovation that inspires the next generation of developers, entrepreneurs, and dreamers to push boundaries and challenge conventions.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Core Values
            <span className="block text-lg font-normal text-gray-500 mt-2">The principles that guide everything we do</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group p-6 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-xl hover:border-purple-300 transition-all duration-300 hover:shadow-xl hover:shadow-purple-100/50 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <div className="text-purple-600">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-2xl hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <Star size={14} className="inline mr-1" />
                Amazing
              </div>
              <div className="text-5xl font-bold text-gradient-blue bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

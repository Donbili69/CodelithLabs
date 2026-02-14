import { ChevronRight, Zap, Globe, Shield, Cloud, Brain, Cpu, Database, Rocket } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
}

const ServiceCard = ({ title, description, features, icon }: ServiceCardProps) => (
  <a
    href="#contact"
    className="group relative p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-400 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2 overflow-hidden"
  >
    {/* Background Gradient on Hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    {/* Icon with 3D Effect */}
    <div className="relative z-10">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
        <div className="text-blue-600 transform group-hover:scale-125 transition-transform duration-300">
          {icon}
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="relative z-10">
      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
        {title}
        <ChevronRight
          size={18}
          className="transform group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300"
        />
      </h3>
      <p className="text-gray-600 mb-5 leading-relaxed group-hover:text-gray-700 transition-colors">
        {description}
      </p>
      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-gray-700 transition-colors"
          >
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>

    {/* Decorative Element */}
    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-500 group-hover:scale-150"></div>
  </a>
)

export const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description:
        'We craft stunning, high-performance websites that captivate audiences and drive conversions. From responsive designs to complex web applications, we bring your digital vision to life.',
      icon: <Globe size={32} />,
      features: [
        'React & Next.js Mastery',
        'Node.js Backend Systems',
        'Progressive Web Apps',
        'SEO-Optimized Architecture',
      ],
    },
    {
      title: 'Mobile Applications',
      description:
        'Transform your ideas into powerful mobile experiences. We build native and cross-platform apps that users love, delivering seamless experiences across all devices.',
      icon: <Cpu size={32} />,
      features: [
        'iOS & Android Native',
        'React Native Development',
        'Flutter Solutions',
        'App Store Optimization',
      ],
    },
    {
      title: 'Cloud Solutions',
      description:
        'Scale without limits. Our cloud architects design and implement robust, scalable infrastructure that grows with your business while optimizing costs.',
      icon: <Cloud size={32} />,
      features: [
        'AWS & Azure Expertise',
        'Kubernetes Orchestration',
        'Serverless Computing',
        'DevOps & CI/CD Pipelines',
      ],
    },
    {
      title: 'Artificial Intelligence',
      description:
        'Harness the power of AI to transform your business. From machine learning models to intelligent automation, we build solutions that think ahead.',
      icon: <Brain size={32} />,
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
      ],
    },
    {
      title: 'Data Analytics',
      description:
        'Turn data into decisions. We create powerful analytics dashboards and visualization tools that reveal insights hidden in your data.',
      icon: <Database size={32} />,
      features: [
        'Real-time Dashboards',
        'Business Intelligence',
        'Big Data Processing',
        'Custom Reporting',
      ],
    },
    {
      title: 'Cybersecurity',
      description:
        'Protect what matters most. Our security experts build fortress-level protection for your digital assets against evolving threats.',
      icon: <Shield size={32} />,
      features: [
        'Penetration Testing',
        'Security Audits',
        'Compliance Management',
        'Threat Intelligence',
      ],
    },
  ]

  return (
    <section id="services" className="py-24 px-4 bg-gradient-mesh relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-30"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float"
        style={{ animationDelay: '1.5s' }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Zap size={16} />
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services That
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}
              Inspire & Innovate
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just developers—we're digital architects crafting solutions that redefine
            what's possible. Every project is a chance to innovate, every line of code is an
            opportunity to amaze.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              features={service.features}
              icon={service.icon}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1 hover:scale-105"
          >
            <Rocket size={20} />
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

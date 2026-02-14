import { ChevronRight, Rocket, BarChart3, Shield, Sparkles, Zap } from 'lucide-react'

interface ProductCardProps {
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
}

const ProductCard = ({ title, description, features, icon }: ProductCardProps) => (
  <a
    href="#contact"
    className="group relative p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-green-400 transition-all duration-500 hover:shadow-2xl hover:shadow-green-100/50 hover:-translate-y-2 overflow-hidden"
  >
    {/* Background Gradient on Hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    {/* Icon with 3D Effect */}
    <div className="relative z-10">
      <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 shadow-lg">
        <div className="text-green-600 transform group-hover:scale-125 transition-transform duration-300">
          {icon}
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="relative z-10">
      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2 group-hover:text-green-600 transition-colors">
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
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>

    {/* Decorative Element */}
    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-100 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-500 group-hover:scale-150"></div>
  </a>
)

export const Products = () => {
  const products = [
    {
      title: 'CodeFlow Platform',
      description:
        'The ultimate project management solution designed specifically for development teams. Streamline workflows, boost productivity, and deliver faster with our intuitive platform.',
      icon: <Rocket size={32} />,
      features: [
        'Real-time Collaboration',
        'Sprint Planning Tools',
        'Time Tracking',
        'CI/CD Integration',
      ],
    },
    {
      title: 'Analytics Engine',
      description:
        'Transform your data into actionable insights with our powerful analytics engine. Make data-driven decisions with confidence and precision.',
      icon: <BarChart3 size={32} />,
      features: ['Live Dashboards', 'Predictive Analytics', 'Custom Reports', 'Data Export'],
    },
    {
      title: 'Security Suite',
      description:
        'Enterprise-grade security solutions that protect your digital assets from evolving threats. Sleep soundly knowing your systems are secure.',
      icon: <Shield size={32} />,
      features: ['Threat Detection', 'Compliance Management', 'Audit Logging', '24/7 Monitoring'],
    },
  ]

  return (
    <section id="products" className="py-24 px-4 bg-gradient-mesh relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-30"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float"
        style={{ animationDelay: '1.5s' }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} />
            Our Products
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Solutions That
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
              {' '}
              Drive Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built by developers, for developers. Our products are crafted with love, designed for
            performance, and engineered for scale.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              features={product.features}
              icon={product.icon}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/30 transition-all transform hover:-translate-y-1 hover:scale-105"
          >
            <Zap size={20} />
            Explore All Products
          </a>
        </div>
      </div>
    </section>
  )
}

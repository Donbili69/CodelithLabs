import { Star, Quote } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  image: string
  rating: number
  text: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    image: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    text: 'Codelithlabs transformed our digital presence completely. Their team delivered a stunning website that exceeded our expectations. The attention to detail and professionalism was outstanding.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    company: 'InnovateCorp',
    image: 'https://i.pravatar.cc/150?img=13',
    rating: 5,
    text: 'Working with Codelithlabs was a game-changer for our business. They built a scalable cloud infrastructure that handles our growing user base effortlessly. Highly recommended!',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'Digital Dynamics',
    image: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    text: 'The mobile app they developed for us is intuitive, fast, and beautiful. Our users love it! The team was responsive and delivered on time. Exceptional service!',
  },
  {
    id: 4,
    name: 'David Kumar',
    role: 'Founder',
    company: 'StartupHub',
    image: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    text: 'From concept to deployment, Codelithlabs guided us every step of the way. Their expertise in AI and machine learning helped us build a competitive advantage.',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    role: 'Marketing Director',
    company: 'BrandBoost',
    image: 'https://i.pravatar.cc/150?img=9',
    rating: 5,
    text: 'The SEO-optimized website they created for us has significantly increased our organic traffic. Their understanding of both technology and business is impressive.',
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Operations Manager',
    company: 'LogiTech Solutions',
    image: 'https://i.pravatar.cc/150?img=14',
    rating: 5,
    text: 'Codelithlabs delivered a robust backend system that streamlined our operations. The code quality and documentation were top-notch. A pleasure to work with!',
  },
]

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold tracking-wide uppercase mb-6 shadow-lg">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Testimonials
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about
            working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote size={60} className="text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-100 group-hover:border-blue-300 transition-colors duration-300"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">Ready to join our list of satisfied clients?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

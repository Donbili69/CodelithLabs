import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'What services does Codelithlabs offer?',
    answer:
      'We offer comprehensive digital solutions including web development (React, Next.js, Node.js), mobile app development (iOS, Android, React Native), cloud services (AWS, Azure), AI & Machine Learning, data analytics, and cybersecurity solutions. Our team specializes in creating scalable, modern applications tailored to your business needs.',
  },
  {
    id: 2,
    question: 'How long does it typically take to complete a project?',
    answer:
      'Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application or mobile app could take 2-6 months. We provide detailed project timelines during our initial consultation and keep you updated throughout the development process.',
  },
  {
    id: 3,
    question: 'What is your development process?',
    answer:
      'We follow an agile development methodology: 1) Discovery & Planning - Understanding your requirements, 2) Design & Prototyping - Creating wireframes and mockups, 3) Development - Building your solution iteratively, 4) Testing & QA - Ensuring quality and performance, 5) Deployment - Launching your product, 6) Support & Maintenance - Ongoing assistance and updates.',
  },
  {
    id: 4,
    question: 'Do you provide ongoing support and maintenance?',
    answer:
      'Yes! We offer comprehensive post-launch support and maintenance packages. This includes bug fixes, security updates, performance optimization, feature enhancements, and technical support. We ensure your digital products remain secure, up-to-date, and performing optimally.',
  },
  {
    id: 5,
    question: 'What technologies do you specialize in?',
    answer:
      'Our tech stack includes: Frontend - React, Next.js, TypeScript, Tailwind CSS; Backend - Node.js, Python, Express; Mobile - React Native, Flutter, iOS, Android; Cloud - AWS, Azure, Docker, Kubernetes; Database - PostgreSQL, MongoDB, Redis; AI/ML - TensorFlow, PyTorch, OpenAI APIs.',
  },
  {
    id: 6,
    question: 'How much does a typical project cost?',
    answer:
      'Project costs vary significantly based on requirements, complexity, and timeline. A basic website starts from $2,000, while complex applications can range from $10,000 to $100,000+. We provide detailed quotes after understanding your specific needs during our free consultation.',
  },
  {
    id: 7,
    question: 'Can you work with our existing team or systems?',
    answer:
      'Absolutely! We excel at collaborating with existing teams and integrating with current systems. Whether you need to augment your team, modernize legacy systems, or integrate new features, we adapt to your workflow and technical environment seamlessly.',
  },
  {
    id: 8,
    question: 'Do you sign NDAs and protect intellectual property?',
    answer:
      "Yes, we take confidentiality and IP protection very seriously. We're happy to sign NDAs before discussing your project. All code and intellectual property developed for your project belongs to you upon project completion and final payment.",
  },
  {
    id: 9,
    question: 'What makes Codelithlabs different from other agencies?',
    answer:
      "We combine technical excellence with business understanding. Our team stays current with the latest technologies, we prioritize clear communication, deliver on time, and focus on building long-term partnerships. We don't just code - we solve business problems with technology.",
  },
  {
    id: 10,
    question: 'How do I get started with a project?',
    answer:
      "Getting started is easy! Contact us through our website, email (team.codelithlabs@gmail.com), or phone. We'll schedule a free consultation to discuss your needs, provide recommendations, and create a detailed proposal. No obligation - just a conversation about how we can help your business grow.",
  },
]

export const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold tracking-wide uppercase mb-6 shadow-lg">
            <HelpCircle className="w-4 h-4 mr-2" />
            FAQ
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our services, process, and how we can help your
            business.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-lg"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8 group-hover:text-blue-600 transition-colors duration-200">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            We're here to help! Reach out to our team for personalized assistance.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Contact Us
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

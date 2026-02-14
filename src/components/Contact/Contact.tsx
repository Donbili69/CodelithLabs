import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Headphones, Sparkles, ArrowRight } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-mesh relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} />
            Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Create Something
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"> Amazing Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Let's build something extraordinary.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="group relative p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-25 blur transition-all duration-300"></div>
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-500 text-sm mb-2">We'll respond within 24 hours</p>
                  <a href="mailto:team.codelithlabs@gmail.com" className="text-blue-600 font-medium hover:underline">
                    team.codelithlabs@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-green-300 transition-all duration-300 hover:shadow-xl hover:shadow-green-100/50 hover:-translate-y-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-25 blur transition-all duration-300"></div>
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-500 text-sm mb-2">Mon-Fri, 9am-6pm EST</p>
                  <a href="tel:+1234567890" className="text-green-600 font-medium hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-purple-300 transition-all duration-300 hover:shadow-xl hover:shadow-purple-100/50 hover:-translate-y-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-25 blur transition-all duration-300"></div>
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-gray-500 text-sm mb-2">Kokrajhar, Assam, India</p>
                  <p className="text-purple-600 font-medium">Get Directions</p>
                </div>
              </div>
            </div>

            {/* Message Box */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle size={24} className="text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Quick Response Guarantee</h3>
              </div>
              <p className="text-gray-600 text-sm">
                We typically respond to all inquiries within 2 hours during business hours. Your time is valuable, and we're committed to getting back to you fast.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-25 blur"></div>
            <form onSubmit={handleSubmit} className="relative p-8 bg-white rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                Send Us a Message
                <span className="animate-bounce">💬</span>
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project and how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                  <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <p className="text-gray-500 text-xs mt-4 text-center">
                <Headphones size={14} className="inline mr-1" />
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

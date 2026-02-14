import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, Loader2 } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AI_CHATBOT_DATA = {
  name: 'Codelith AI',
  welcomeMessage: "Hi! 👋 I'm Codelith AI, your intelligent assistant. I can help you with:\n\n• Information about our services\n• Product details and pricing\n• Project inquiries\n• Technical questions\n• General information\n\nHow can I help you today?",
  responses: {
    default: "That's a great question! Let me connect you with our team for more detailed information. You can also email us at team.codelithlabs@gmail.com or call us at +1 (234) 567-890.",
    greeting: ["Hello! 👋 How can I help you today?", "Hi there! I'm here to help. What would you like to know?", "Hey! Thanks for visiting Codelithlabs. How can I assist you?"],
    services: "We offer a wide range of services:\n\n• Web Development (React, Next.js, Node.js)\n• Mobile Apps (iOS, Android, React Native, Flutter)\n• Cloud Solutions (AWS, Azure, Kubernetes)\n• AI & Machine Learning\n• Data Analytics & Business Intelligence\n• Cybersecurity Solutions\n\nWhich service interests you most?",
    web_development: "Our web development services include:\n\n✅ Modern React & Next.js applications\n✅ Node.js backend systems\n✅ Progressive Web Apps (PWA)\n✅ Responsive & mobile-first designs\n✅ SEO-optimized architecture\n✅ API integrations\n\nWould you like to know more about a specific technology?",
    mobile_development: "We build stunning mobile applications:\n\n✅ Native iOS & Android apps\n✅ Cross-platform with React Native\n✅ Flutter solutions\n✅ App Store optimization\n✅ Push notifications\n✅ Offline-first architecture\n\nWhat type of app are you looking to build?",
    cloud_solutions: "Our cloud expertise includes:\n\n☁️ AWS & Azure architecture\n📦 Kubernetes orchestration\n🚀 Serverless computing\n🔄 DevOps & CI/CD pipelines\n💰 Cost optimization\n🔒 Enterprise security\n\nNeed help with a specific cloud challenge?",
    ai_ml: "Power of Artificial Intelligence:\n\n🤖 Machine Learning Models\n📝 Natural Language Processing\n👁️ Computer Vision solutions\n📊 Predictive Analytics\n💬 Intelligent Chatbots\n🎯 Automation workflows\n\nReady to harness the power of AI for your business?",
    pricing: "Our pricing varies based on project scope and requirements. We offer:\n\n💰 Fixed price projects\n⏰ Time & material engagement\n📈 Retainer partnerships\n\nFor a customized quote, please contact us at hello@codelithlabs.com or use our contact form.",
    contact: "You can reach us through:\n\n📧 Email: hello@codelithlabs.com\n📞 Phone: +1 (234) 567-890\n📍 Location: Kokrajhar, Assam, India\n\nWe typically respond within 2 hours during business hours!",
    about: "Codelithlabs is a leading technology company specializing in innovative digital solutions. We're passionate about:\n\n✨ Building exceptional software\n🚀 Driving digital transformation\n💡 Solving complex challenges\n🤝 Building lasting partnerships\n\nFounded with a vision to make technology accessible to everyone.",
    timeline: "Typically:\n\n⚡ Small projects: 2-4 weeks\n📅 Medium projects: 1-3 months\n🚀 Large projects: 3-6+ months\n\nTimeline depends on complexity, features, and your requirements.",
  }
};

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: AI_CHATBOT_DATA.welcomeMessage,
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.match(/^(hi|hello|hey|good morning|good afternoon|good evening)/)) {
      return AI_CHATBOT_DATA.responses.greeting[Math.floor(Math.random() * AI_CHATBOT_DATA.responses.greeting.length)];
    }
    
    if (input.includes('service') || input.includes('what do you do')) {
      return AI_CHATBOT_DATA.responses.services;
    }
    
    if (input.includes('web') || input.includes('website') || input.includes('frontend') || input.includes('react') || input.includes('next.js')) {
      return AI_CHATBOT_DATA.responses.web_development;
    }
    
    if (input.includes('mobile') || input.includes('app') || input.includes('ios') || input.includes('android')) {
      return AI_CHATBOT_DATA.responses.mobile_development;
    }
    
    if (input.includes('cloud') || input.includes('aws') || input.includes('azure') || input.includes('serverless')) {
      return AI_CHATBOT_DATA.responses.cloud_solutions;
    }
    
    if (input.includes('ai') || input.includes('ml') || input.includes('machine learning') || input.includes('artificial intelligence') || input.includes('chatbot')) {
      return AI_CHATBOT_DATA.responses.ai_ml;
    }
    
    if (input.includes('price') || input.includes('cost') || input.includes('quote') || input.includes('budget') || input.includes('how much')) {
      return AI_CHATBOT_DATA.responses.pricing;
    }
    
    if (input.includes('contact') || input.includes('email') || input.includes('phone') || input.includes('address') || input.includes('location')) {
      return AI_CHATBOT_DATA.responses.contact;
    }
    
    if (input.includes('about') || input.includes('who are you') || input.includes('company') || input.includes('codelithlabs')) {
      return AI_CHATBOT_DATA.responses.about;
    }
    
    if (input.includes('time') || input.includes('how long') || input.includes('timeline') || input.includes('duration') || input.includes('when')) {
      return AI_CHATBOT_DATA.responses.timeline;
    }
    
    if (input.includes('thank') || input.includes('thanks') || input.includes('appreciate')) {
      return "You're welcome! 😊 I'm happy to help. Is there anything else you'd like to know about Codelithlabs?";
    }
    
    if (input.includes('help') || input.includes('what can you do')) {
      return AI_CHATBOT_DATA.welcomeMessage;
    }
    
    return AI_CHATBOT_DATA.responses.default;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = getAIResponse(inputValue);
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    { label: 'Services', text: 'Tell me about your services' },
    { label: 'Pricing', text: 'What are your prices?' },
    { label: 'Contact', text: 'How can I contact you?' },
    { label: 'Timeline', text: 'How long does a project take?' },
  ];

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
    handleSendMessage();
  };

  return (
    <>
      {/* Floating AI Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-purple-500/50"
        style={{
          boxShadow: '0 0 40px rgba(66, 133, 244, 0.4)'
        }}
      >
        <Bot size={28} />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl overflow-hidden"
          style={{
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-semibold flex items-center gap-2">
                  {AI_CHATBOT_DATA.name}
                  <Sparkles size={14} className="text-yellow-300" />
                </h3>
                <p className="text-xs text-blue-100">Online - Powered by AI</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.isUser
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-800 shadow-sm'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.isUser ? 'text-blue-100' : 'text-gray-400'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-blue-500" />
                    <span className="text-sm text-gray-500">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {!messages.length && !isTyping && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q) => (
                  <button
                    key={q.label}
                    onClick={() => handleQuickQuestion(q.text)}
                    className="px-3 py-1.5 bg-blue-50 text-blue-600 text-xs rounded-full hover:bg-blue-100 transition-colors"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2.5 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className={`p-2.5 rounded-full transition-all ${
                  inputValue.trim() && !isTyping
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/30'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-xs text-gray-400 text-center mt-2">
              AI responses are simulated for demonstration
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;

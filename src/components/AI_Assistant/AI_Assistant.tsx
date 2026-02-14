import { useState, useRef, useEffect } from 'react'
import { Bot, X, Send, Sparkles, User } from 'lucide-react'

interface Message {
  id: number
  text: string
  isUser: boolean
  timestamp: Date
}

const TEAM_MEMBERS = [
  {
    name: 'Harun Mollah',
    role: 'Founder & CEO',
    github: 'https://github.com/harun-mollah',
    description:
      "Visionary leader driving Codelithlabs' mission to transform businesses through innovative technology solutions.",
  },
  {
    name: 'Prasanta Ray',
    role: 'Lead Developer',
    github: 'https://github.com/Prasanta-ray',
    description:
      'Expert full-stack developer with deep expertise in modern web technologies and cloud architecture.',
  },
  {
    name: 'Donbili69',
    role: 'Software Engineer',
    github: 'https://github.com/Donbili69',
    description:
      'Skilled engineer passionate about building scalable applications and solving complex technical challenges.',
  },
]

const AI_CHATBOT_DATA = {
  name: 'Codelith AI',
  model: 'GPT-4',
  welcomeMessage: `👋 Welcome to Codelithlabs AI Assistant!

I'm powered by advanced AI to help you with anything about our company, services, and projects.

**Our Team:**
• Harun Mollah - Founder & CEO
• Prasanta Ray - Lead Developer  
• Donbili69 - Software Engineer

How can I assist you today?`,
  responses: {
    default:
      "That's an interesting question! Let me help you with that. For more detailed information, you can reach our team at team.codelithlabs@gmail.com or visit our contact page.",
    greeting: [
      'Hello! 👋 How can I help you today?',
      "Hi there! I'm here to help. What would you like to know about Codelithlabs?",
      'Welcome! What can I assist you with?',
    ],
    team: `🎯 **Our Amazing Team at Codelithlabs:**

**1. Harun Mollah** - Founder & CEO
${TEAM_MEMBERS[0].description}
GitHub: ${TEAM_MEMBERS[0].github}

**2. Prasanta Ray** - Lead Developer
${TEAM_MEMBERS[1].description}
GitHub: ${TEAM_MEMBERS[1].github}

**3. Donbili69** - Software Engineer
${TEAM_MEMBERS[2].description}
GitHub: ${TEAM_MEMBERS[2].github}

We're a passionate team dedicated to delivering excellence!`,
    harun: `**Harun Mollah** - Founder & CEO

${TEAM_MEMBERS[0].description}

As the visionary leader of Codelithlabs, Harun drives our mission to transform businesses through innovative technology solutions.

🔗 GitHub: ${TEAM_MEMBERS[0].github}`,
    prasanta: `**Prasanta Ray** - Lead Developer

${TEAM_MEMBERS[1].description}

Prasanta brings years of experience in building scalable web applications and leading technical initiatives.

🔗 GitHub: ${TEAM_MEMBERS[1].github}`,
    donbili: `**Donbili69** - Software Engineer

${TEAM_MEMBERS[2].description}

Donbili is a talented engineer passionate about creating efficient and elegant solutions.

🔗 GitHub: ${TEAM_MEMBERS[2].github}`,
    services: `🛠️ **Our Services at Codelithlabs:**

• **Web Development** - React, Next.js, Node.js, TypeScript
• **Mobile Apps** - iOS, Android, React Native, Flutter
• **Cloud Solutions** - AWS, Azure, Kubernetes, Serverless
• **AI & Machine Learning** - Custom AI solutions
• **Data Analytics** - Business intelligence & insights
• **Cybersecurity** - Enterprise-grade security

Which service interests you?`,
    web_development: `💻 **Web Development Services:**

✅ Modern React & Next.js applications
✅ Node.js backend systems
✅ Progressive Web Apps (PWA)
✅ Responsive & mobile-first designs
✅ RESTful & GraphQL APIs
✅ E-commerce solutions

Want to start a project?`,
    mobile_development: `📱 **Mobile Development Services:**

✅ Native iOS & Android apps
✅ Cross-platform (React Native, Flutter)
✅ App Store optimization
✅ Push notifications
✅ Offline-first architecture
✅ UI/UX design

What type of app do you need?`,
    cloud_solutions: `☁️ **Cloud Solutions:**

☁️ AWS & Azure architecture
📦 Kubernetes & Docker
🚀 Serverless computing
🔄 CI/CD pipelines
💰 Cost optimization
🔒 Enterprise security

Need cloud expertise?`,
    ai_ml: `🤖 **AI & Machine Learning:**

🤖 Custom ML Models
📝 Natural Language Processing
👁️ Computer Vision
📊 Predictive Analytics
💬 Intelligent Chatbots
🎯 Automation workflows

Ready for AI transformation?`,
    pricing: `💰 **Pricing Information:**

We offer flexible engagement models:

• **Fixed Price** - For defined scope projects
• **Time & Material** - For evolving requirements
• **Retainer** - For ongoing partnership

For a customized quote, contact us at team.codelithlabs@gmail.com`,
    contact: `📞 **Contact Codelithlabs:**

📧 Email: team.codelithlabs@gmail.com
📍 Location: Kokrajhar, Assam, India

We typically respond within 2 hours!`,
    about: `🏢 **About Codelithlabs:**

We are a leading technology company specializing in innovative digital solutions. Our mission is to empower businesses through cutting-edge technology.

**Our Values:**
✨ Excellence in every project
🚀 Continuous innovation
💡 Creative problem-solving
🤝 Client partnerships

Founded by a passionate team led by Harun Mollah.`,
    timeline: `⏱️ **Project Timeline:**

⚡ Small projects: 2-4 weeks
📅 Medium projects: 1-3 months
🚀 Large projects: 3-6+ months

Timeline depends on complexity and requirements.`,
  },
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: AI_CHATBOT_DATA.welcomeMessage,
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isOpen])

  const getAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.match(/^(hi|hello|hey|good morning|good afternoon|good evening|start|begin)/)) {
      return AI_CHATBOT_DATA.responses.greeting[
        Math.floor(Math.random() * AI_CHATBOT_DATA.responses.greeting.length)
      ]
    }

    if (
      input.includes('team') ||
      (input.includes('who') &&
        (input.includes('work') ||
          input.includes('member') ||
          input.includes('people') ||
          input.includes('staff')))
    ) {
      return AI_CHATBOT_DATA.responses.team
    }

    if (input.includes('harun') || input.includes('founder') || input.includes('ceo')) {
      return AI_CHATBOT_DATA.responses.harun
    }

    if (input.includes('prasanta') || input.includes('lead') || input.includes('developer')) {
      return AI_CHATBOT_DATA.responses.prasanta
    }

    if (input.includes('donbili') || input.includes('engineer')) {
      return AI_CHATBOT_DATA.responses.donbili
    }

    if (input.includes('service') || input.includes('what do you do')) {
      return AI_CHATBOT_DATA.responses.services
    }

    if (
      input.includes('web') ||
      input.includes('website') ||
      input.includes('frontend') ||
      input.includes('react') ||
      input.includes('next.js')
    ) {
      return AI_CHATBOT_DATA.responses.web_development
    }

    if (
      input.includes('mobile') ||
      input.includes('app') ||
      input.includes('ios') ||
      input.includes('android')
    ) {
      return AI_CHATBOT_DATA.responses.mobile_development
    }

    if (
      input.includes('cloud') ||
      input.includes('aws') ||
      input.includes('azure') ||
      input.includes('serverless')
    ) {
      return AI_CHATBOT_DATA.responses.cloud_solutions
    }

    if (
      input.includes('ai') ||
      input.includes('ml') ||
      input.includes('machine learning') ||
      input.includes('artificial intelligence') ||
      input.includes('chatbot')
    ) {
      return AI_CHATBOT_DATA.responses.ai_ml
    }

    if (
      input.includes('price') ||
      input.includes('cost') ||
      input.includes('quote') ||
      input.includes('budget') ||
      input.includes('how much')
    ) {
      return AI_CHATBOT_DATA.responses.pricing
    }

    if (
      input.includes('contact') ||
      input.includes('email') ||
      input.includes('phone') ||
      input.includes('address') ||
      input.includes('location')
    ) {
      return AI_CHATBOT_DATA.responses.contact
    }

    if (
      input.includes('about') ||
      input.includes('who are you') ||
      input.includes('company') ||
      input.includes('codelithlabs')
    ) {
      return AI_CHATBOT_DATA.responses.about
    }

    if (
      input.includes('time') ||
      input.includes('how long') ||
      input.includes('timeline') ||
      input.includes('duration') ||
      input.includes('when')
    ) {
      return AI_CHATBOT_DATA.responses.timeline
    }

    if (input.includes('thank') || input.includes('thanks') || input.includes('appreciate')) {
      return "You're welcome! 😊 I'm happy to help. Is there anything else you'd like to know?"
    }

    if (input.includes('help') || input.includes('what can you do')) {
      return AI_CHATBOT_DATA.welcomeMessage
    }

    return AI_CHATBOT_DATA.responses.default
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI thinking delay like OpenAI
    setTimeout(
      () => {
        const aiResponse = getAIResponse(inputValue)
        const aiMessage: Message = {
          id: Date.now() + 1,
          text: aiResponse,
          isUser: false,
          timestamp: new Date(),
        }
        setMessages(prev => [...prev, aiMessage])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickQuestions = [
    { label: 'Our Team', text: 'Tell me about your team' },
    { label: 'Services', text: 'What services do you offer?' },
    { label: 'Contact', text: 'How can I contact you?' },
    { label: 'Pricing', text: 'What are your prices?' },
  ]

  const handleQuickQuestion = (question: string) => {
    setInputValue(question)
    handleSendMessage()
  }

  return (
    <>
      {/* Floating AI Button - OpenAI Style */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-black rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-105 hover:shadow-openai"
        style={{
          background: '#000000',
          boxShadow: '0 0 20px rgba(16, 163, 127, 0.3)',
        }}
      >
        <Bot size={24} />
      </button>

      {/* Chat Window - OpenAI ChatGPT Style */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[400px] max-w-[calc(100vw-2rem)] bg-black rounded-2xl shadow-2xl overflow-hidden border border-gray-800"
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* Header - OpenAI Style */}
          <div className="bg-black p-3 text-white flex items-center justify-between border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                <Bot size={18} className="text-openai" />
              </div>
              <div>
                <h3 className="font-semibold text-sm flex items-center gap-2">
                  {AI_CHATBOT_DATA.name}
                  <Sparkles size={12} className="text-openai" />
                </h3>
                <p className="text-xs text-gray-400">{AI_CHATBOT_DATA.model}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages - OpenAI Chat Style */}
          <div className="h-[450px] overflow-y-auto p-4 space-y-4 bg-black">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex gap-3 max-w-[90%] ${
                    message.isUser ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center ${
                      message.isUser ? 'bg-gray-700' : 'bg-black border border-gray-700'
                    }`}
                  >
                    {message.isUser ? (
                      <User size={14} className="text-white" />
                    ) : (
                      <Bot size={14} className="text-openai" />
                    )}
                  </div>

                  {/* Message Content */}
                  <div
                    className={`rounded-2xl px-4 py-2.5 ${
                      message.isUser ? 'bg-gray-700 text-white' : 'bg-transparent text-gray-100'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                    <p
                      className={`text-xs mt-1.5 ${message.isUser ? 'text-gray-400' : 'text-gray-500'}`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator - OpenAI Style */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-3 max-w-[90%]">
                  <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center bg-black border border-gray-700">
                    <Bot size={14} className="text-openai" />
                  </div>
                  <div className="bg-transparent rounded-2xl px-4 py-2.5">
                    <div className="flex gap-1">
                      <div
                        className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                        style={{ animationDelay: '0ms' }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                        style={{ animationDelay: '150ms' }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                        style={{ animationDelay: '300ms' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 1 && !isTyping && (
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map(q => (
                  <button
                    key={q.label}
                    onClick={() => handleQuickQuestion(q.text)}
                    className="px-3 py-1.5 bg-gray-800 text-gray-300 text-xs rounded-full hover:bg-gray-700 transition-colors border border-gray-700"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input - OpenAI Style */}
          <div className="p-3 bg-black border-t border-gray-800">
            <div className="flex items-center gap-2 bg-gray-900 rounded-xl px-4 py-2.5 border border-gray-700 focus-within:border-gray-600 transition-colors">
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Message Codelith AI..."
                className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className={`p-1.5 rounded-lg transition-all ${
                  inputValue.trim() && !isTyping
                    ? 'bg-openai text-white hover:opacity-90'
                    : 'text-gray-600'
                }`}
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-[10px] text-gray-500 text-center mt-2">
              AI can make mistakes. Verify important information.
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default AIAssistant

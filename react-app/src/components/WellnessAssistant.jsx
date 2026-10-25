import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  RotateCcw, 
  Sparkles, 
  ArrowDownRight, 
  ShieldAlert,
  Info
} from 'lucide-react';
import { generateAssistantResponse, INITIAL_GREETING } from '../utils/assistantEngine.js';

export default function WellnessAssistant({ selectedPack }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_GREETING]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasError, setHasError] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll conversation to bottom
  const scrollToBottom = (behavior = 'smooth') => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom('auto');
      // Focus input when opened on non-touch devices
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Keyboard accessibility: Escape closes assistant
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Jump to page section smoothly
  const handleJumpToSection = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // If mobile viewport, minimize or keep open based on preference
      if (window.innerWidth < 640) {
        setIsOpen(false);
      }
    }
  };

  // Submit user query
  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) {
      setHasError(true);
      return;
    }
    setHasError(false);

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: query,
      suggestions: [],
      sectionLink: null,
      isSafetyNotice: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Realistic typing delay (450ms) to give a natural feel while keeping demo snappy
    setTimeout(() => {
      const responseData = generateAssistantResponse(query, [...messages, userMessage], { selectedPack });

      const assistantMessage = {
        id: `asst-${Date.now()}`,
        sender: 'assistant',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: responseData.text,
        suggestions: responseData.suggestions || [],
        sectionLink: responseData.sectionLink,
        isSafetyNotice: responseData.isSafetyNotice
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 450);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSendMessage();
  };

  const handleClearConversation = () => {
    setMessages([
      {
        ...INITIAL_GREETING,
        id: `msg-welcome-${Date.now()}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setInputValue('');
    setHasError(false);
    setIsTyping(false);
  };

  // Format message text with clean bold and bullet rendering
  const renderFormattedText = (rawText) => {
    const paragraphs = rawText.split('\n\n');
    return paragraphs.map((para, pIdx) => {
      // Check if paragraph is list items
      if (para.startsWith('• ') || para.includes('\n• ')) {
        const lines = para.split('\n');
        return (
          <ul key={pIdx} className="space-y-1.5 my-1.5">
            {lines.map((line, lIdx) => {
              const cleanLine = line.replace(/^[•\s\-\*]+\s*/, '');
              return (
                <li key={lIdx} className="flex items-start gap-1.5 text-xs text-[#33312E] leading-relaxed">
                  <span className="text-[#0D9488] font-bold shrink-0 mt-0.5">•</span>
                  <span>{parseInlineMarkdown(cleanLine)}</span>
                </li>
              );
            })}
          </ul>
        );
      }

      return (
        <p key={pIdx} className="text-xs text-[#33312E] leading-relaxed mb-1.5 last:mb-0">
          {parseInlineMarkdown(para)}
        </p>
      );
    });
  };

  // Helper to parse **bold** and *italic*
  const parseInlineMarkdown = (text) => {
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold text-[#1A1917]">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={i} className="italic text-[#4A4742]">{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  // Latest assistant message for suggestions
  const latestAssistantMsg = [...messages].reverse().find(m => m.sender === 'assistant');
  const activeSuggestions = !isTyping && latestAssistantMsg?.suggestions?.length > 0 
    ? latestAssistantMsg.suggestions 
    : [];

  return (
    <>
      {/* 1. Floating Circular Assistant Launcher (Fixed Bottom-Right) */}
      <aside 
        aria-label="Shopping Assistant Launcher"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40"
      >
        <button
          type="button"
          onClick={() => setIsOpen(prev => !prev)}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-label={isOpen ? "Close Wellness Assistant" : "Ask our Wellness Assistant"}
          title="Ask our Wellness Assistant"
          className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#0D9488] text-white shadow-lg hover:bg-[#0F766E] active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-2 border border-white/30"
        >
          {isOpen ? (
            <X className="w-5 h-5 transition-transform group-hover:rotate-90 duration-200" aria-hidden="true" />
          ) : (
            <>
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
              {/* Subtle indicator dot */}
              <span className="absolute top-0 right-0 w-3 h-3 bg-[#99F6E4] rounded-full border-2 border-[#0D9488]" aria-hidden="true" />
            </>
          )}

          {/* Accessible Tooltip for desktop hover */}
          {!isOpen && (
            <span 
              role="tooltip"
              className="hidden lg:group-hover:flex absolute right-full mr-3 px-3 py-1.5 bg-[#1A1917] text-[#FAF8F5] text-[11px] font-sans font-medium whitespace-nowrap rounded shadow-md pointer-events-none items-center gap-1.5 transition-opacity"
            >
              <span>Ask our Wellness Assistant</span>
              <Sparkles className="w-3 h-3 text-[#99F6E4]" aria-hidden="true" />
            </span>
          )}
        </button>
      </aside>

      {/* 2. Chat Window Panel */}
      {isOpen && (
        <section
          role="dialog"
          aria-modal="false"
          aria-label="Wellness Assistant"
          className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 w-[calc(100vw-2rem)] sm:w-[420px] max-w-[420px] h-[540px] max-h-[82vh] bg-[#FAF8F5] border border-[#E8E2D8] shadow-2xl rounded-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200 font-sans"
        >
          {/* Header */}
          <header className="p-4 bg-[#F4F0E8] border-b border-[#E8E2D8] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#0D9488] text-white flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-serif text-lg font-medium text-[#1A1917] leading-none">
                    Wellness Assistant
                  </h2>
                  <span className="text-[9px] font-mono uppercase tracking-wider bg-[#F0FDFA] border border-[#99F6E4] text-[#0D9488] px-1.5 py-0.5 rounded font-semibold">
                    Local Demo
                  </span>
                </div>
                <p className="text-[11px] text-[#736E65] font-sans mt-0.5">
                  Here to help you make an informed choice
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleClearConversation}
                aria-label="Clear conversation"
                title="Clear conversation"
                className="p-1.5 text-[#736E65] hover:text-[#1A1917] hover:bg-[#E8E2D8]/50 rounded transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0D9488]"
              >
                <RotateCcw className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close assistant"
                title="Close assistant"
                className="p-1.5 text-[#736E65] hover:text-[#1A1917] hover:bg-[#E8E2D8]/50 rounded transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0D9488]"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </header>

          {/* Conversation History */}
          <div 
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAF8F5]"
            aria-live="polite"
            aria-relevant="additions text"
          >
            {messages.map((msg) => {
              const isUser = msg.sender === 'user';
              return (
                <div 
                  key={msg.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-full`}
                >
                  <div
                    className={`max-w-[88%] p-3.5 rounded-xl shadow-xs ${
                      isUser
                        ? 'bg-[#1D382B] text-[#FAF8F5] rounded-br-xs'
                        : msg.isSafetyNotice
                        ? 'bg-[#FFFBF2] border-l-3 border-[#C26D38] border border-[#E8E2D8] text-[#1A1917] rounded-bl-xs'
                        : 'bg-[#FFFFFF] border border-[#E8E2D8] text-[#1A1917] rounded-bl-xs'
                    }`}
                  >
                    {/* Safety Notice Header if applicable */}
                    {msg.isSafetyNotice && (
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#C26D38] mb-1.5 font-semibold">
                        <ShieldAlert className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Responsible Wellness Guidance</span>
                      </div>
                    )}

                    {/* Formatted Message Body */}
                    <div className={isUser ? 'text-xs text-[#FAF8F5]' : ''}>
                      {isUser ? (
                        <p className="text-xs leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                      ) : (
                        renderFormattedText(msg.text)
                      )}
                    </div>

                    {/* In-Message Page Section Link */}
                    {msg.sectionLink && (
                      <div className="mt-2.5 pt-2 border-t border-[#E8E2D8]/60">
                        <button
                          type="button"
                          onClick={() => handleJumpToSection(msg.sectionLink.targetId)}
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-[#0D9488] hover:text-[#0F766E] font-semibold underline decoration-[#0D9488]/40 hover:decoration-[#0D9488] underline-offset-2 transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0D9488]"
                        >
                          <span>{msg.sectionLink.label}</span>
                          <ArrowDownRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    )}

                    {/* Timestamp */}
                    <span 
                      className={`block text-[9px] font-mono mt-1.5 ${
                        isUser ? 'text-[#FAF8F5]/70 text-right' : 'text-[#8C867A]'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Subtle Typing Indicator */}
            {isTyping && (
              <div className="flex items-start gap-2">
                <div className="bg-[#FFFFFF] border border-[#E8E2D8] p-3 rounded-xl rounded-bl-xs flex items-center gap-2">
                  <div className="flex gap-1" aria-hidden="true">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-bounce" />
                  </div>
                  <span className="text-[10px] font-mono text-[#736E65]">Consulting verified monograph...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Question Chips */}
          {activeSuggestions.length > 0 && (
            <div className="px-4 py-2 bg-[#F4F0E8]/70 border-t border-[#E8E2D8] flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
              <span className="text-[10px] font-mono uppercase text-[#736E65] shrink-0 mr-1">
                Suggested:
              </span>
              {activeSuggestions.map((suggestion, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSendMessage(suggestion)}
                  className="px-2.5 py-1 text-[11px] font-sans bg-[#FFFFFF] border border-[#D8CEBE] hover:border-[#0D9488] text-[#403C35] hover:text-[#0D9488] whitespace-nowrap rounded-full shadow-2xs hover:bg-[#F0FDFA] transition-all shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#0D9488]"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Input & Form Area */}
          <footer className="p-3 bg-[#FFFFFF] border-t border-[#E8E2D8] shrink-0">
            <form 
              onSubmit={handleFormSubmit}
              className="flex items-center gap-2"
            >
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    if (hasError) setHasError(false);
                  }}
                  placeholder="Ask about ingredients, benefits, dosage..."
                  aria-label="Type your product inquiry"
                  className={`w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border text-[#1A1917] placeholder-[#8C867A] rounded-lg transition-all focus:outline-none focus:bg-[#FFFFFF] ${
                    hasError 
                      ? 'border-red-400 focus:ring-1 focus:ring-red-400' 
                      : 'border-[#D8CEBE] focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488]'
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={isTyping}
                aria-label="Send message"
                className="p-2.5 bg-[#0D9488] text-white rounded-lg hover:bg-[#0F766E] disabled:opacity-50 disabled:cursor-not-allowed transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
              >
                <Send className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </form>

            <div className="flex items-center justify-between text-[9px] font-mono text-[#8C867A] mt-2 px-1">
              <span className="flex items-center gap-1">
                <Info className="w-3 h-3 text-[#0D9488]" aria-hidden="true" />
                <span>Verified product facts · Not medical advice</span>
              </span>
              <span>Academic Prototype</span>
            </div>
          </footer>
        </section>
      )}
    </>
  );
}

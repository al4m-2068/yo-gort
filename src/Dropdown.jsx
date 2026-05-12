import  { useState } from 'react';
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`w-full mb-3 sm:mb-4 transition-all duration-300 rounded-2xl sm:rounded-[40px] border-2 
      ${isOpen ? 'border-aquo bg-aquo/10' : 'border-transparent bg-whitey'}`}
    >
      {/* Header / Tombol Pertanyaan */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 sm:px-8 py-4 sm:py-[24px] text-left focus:outline-none hover:opacity-75 transition-opacity"
      >
        <span className="text-base sm:text-lg font-semibold text-navo pr-3">{question}</span>
        
        {/* Ikon Panah dengan Animasi Putar */}
        <svg
          className={`w-5 h-5 sm:w-6 sm:h-6 text-navo transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Konten Jawaban dengan Animasi Naik-Turun Grid */}
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="px-4 sm:px-8 pb-4 sm:pb-8 text-sm sm:text-base text-navo/70 leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    { question: "How long does it stay fresh?", answer: "Our products are made fresh and typically stay peak quality for 7-10 days when refrigerated." },
    { question: "Is it dairy-free?", answer: "Currently, our main line is farm-fresh dairy. However, our Oat-based 'YO! gort' is coming soon! Stay tuned." },
    { question: "Where do you ship?", answer: "We currently ship to all major cities across the country with specialized cold-chain logistics." },
  ];

  return (
    <div className="min-h-screen bg-whitey px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex flex-col items-center">
      <h1 className="text-3xl font-brigro sm:text-4xl lg:text-5xl font-black text-[#3a1a4d] text-center mb-8 sm:mb-12 tracking-tight">
        Common <br /> <span>Questions</span>
      </h1>
      
      <div className="w-full max-w-xs sm:max-w-2xl font-nuni">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
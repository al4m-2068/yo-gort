import  { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`w-full mb-4 transition-all duration-300 rounded-[40px] border-2 
      ${isOpen ? 'border-cyan-300 bg-[#f0f9f9]' : 'border-transparent bg-[#f9f8eb]'}`}
    >
      {/* Header / Tombol Pertanyaan */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-8 py-6 text-left focus:outline-none"
      >
        <span className="text-lg font-semibold text-[#3a1a4d]">{question}</span>
        
        {/* Ikon Panah dengan Animasi Putar */}
        <svg
          className={`w-5 h-5 text-[#3a1a4d] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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
          <div className="px-8 pb-8 text-[#6b567a] leading-relaxed">
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
    <div className="min-h-screen bg-[#fffcf9] px-4 py-16 flex flex-col items-center">
      <h1 className="text-5xl font-black text-[#3a1a4d] text-center mb-12 tracking-tight">
        Common <br /> <span className="underline decoration-cyan-300 underline-offset-8">Questions</span>
      </h1>
      
      <div className="w-full max-w-2xl">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
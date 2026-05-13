import React from 'react';

const Footer = () => {
  const flavorLinks = ['Our Flavors', 'Subscription', 'Recipes', 'Store Finder'];
  const supportLinks = ['FAQ', 'Shipping', 'Returns', 'Contact'];

  return (
    <footer className="bg-[#3D145A] text-white p-8 md:p-12 lg:p-16 rounded-3xl w-full max-w-sm mx-auto shadow-xl">
      <div className="flex flex-col gap-10">
        
        {/* Logo and Tagline */}
        <div className="flex flex-col gap-4 text-left">
          <div className="flex items-center gap-1">
            <span className="text-3xl font-bold tracking-tight">YO!</span>
            <span className="text-3xl font-light">gort</span>
          </div>
          <p className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white/90">
            Keep it creamy, keep it kinetic. Your daily joy in a jar.
          </p>
        </div>

        {/* Navigation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Explore</h3>
            <ul className="space-y-3">
              {flavorLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-base text-white/80 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-base text-white/80 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">The Scoop</h3>
          <p className="text-base text-white/80">Get fresh updates and exclusive drops.</p>
          <div className="relative mt-2">
            <input 
              type="email" 
              placeholder="yogort@gmail.com" 
              className="w-full bg-[#4A1E6B] text-white text-base py-3 px-5 rounded-full outline-none placeholder:text-white/50 focus:ring-2 focus:ring-teal-300 transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-teal-300 p-2.5 rounded-full hover:bg-teal-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-[#3D145A]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-10 text-center">
          <p className="text-sm font-light text-white/70">
            © 2024 YO!GORT. KEEP IT CREAMY. MADE WITH ♡ FOR THE KINETIC GENERATION.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
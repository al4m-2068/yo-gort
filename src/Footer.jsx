import React from 'react';
import { Logo } from './Illust';
import { Send } from 'lucide-react';

const Footer = () => {
  const exploreLinks = [
    'Our Flavors',
    'Subscription',
    'Recipes',
    'Store Finder',
  ];

  const supportLinks = [
    'FAQ',
    'Shipping',
    'Returns',
    'Contact',
  ];

  return (
    <footer id='contact' className="w-full bg-[#43005C] rounded-t-[28px] px-8 py-12 text-white">
      <div className="flex items-start flex-col gap-12">
        
        <div className="flex flex-col gap-4 items-start">
          <Logo className={'text-whitey h-14 w-auto mb-4'}/>
          {/* Heading */}
          <h2 className="text-[42px]/[110%] font-brigro font-bold text-yogrut/60 tracking-[-0.03em]">
            Keep it creamy,
            keep it kinetic.
            Your daily joy
            in a jar.
          </h2>
        </div>

        {/* Explore */}
        <div className="flex flex-col gap-6 w-full">
          <h3 className="text-[32px]/[110%] font-bold font-brigro">
            Explore
          </h3>

          <ul className="flex flex-col gap-2">
            {exploreLinks.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-base text-yogrut/60 hover:text-yogrut transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-6 w-full">
          <h3 className="text-[32px]/[110%] font-brigro font-bold">
            Support
          </h3>

          <ul className="flex flex-col gap-2">
            {supportLinks.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-base text-yogrut/60 hover:text-yogrut transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-6 w-full">
          <h3 className="text-[28px]/[110%] font-bold font-brigro">
            The Scoop
          </h3>

          <p className="text-base text-yogrut leading-relaxed">
            Get fresh updates and exclusive drops.
          </p>

          <div className="relative">
            <input
              type="email"
              placeholder="yogort@gmail.com"
              className="w-full h-[52px] rounded-full bg-yogrut/10 px-6 text-[14px] text-yogrut placeholder:text-yogrut/40 outline-none"
            />

            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-[38px] h-[38px] rounded-full bg-aquo flex items-center justify-center text-navo">
              <Send size={16}/>
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-12 w-full border-t border-yogrut/10">
          <p className="text-center text-[10px] leading-base tracking-[0.04em] uppercase text-yogrut/60">
            © 2024 Yogort. Keep it creamy. Made with ♡ for
            <br />
            the kinetic generation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
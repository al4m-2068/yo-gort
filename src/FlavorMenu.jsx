import React from 'react';
import menuData from './dataMenu.json';
// Sesuaikan import image dengan folder asetmu
import heroImg from './assets/3-yo.png'; 
import { ShoppingCart } from 'lucide-react';

const FlavorMenu = () => {
  // Fungsi helper untuk warna badge
  const getBadgeClass = (type) => {
    switch (type) {
      case 'popular': return 'bg-red-500 text-white';
      case 'new': return 'bg-cyan-400 text-white';
      case 'value': return 'bg-indigo-950 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <section className="bg-whitey min-h-screen px-6 py-12 font-sans">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-[40px]/[110%] font-bold text-[#2d1b4d] font-brigro">
          Pick Your <span className="text-redo">Flavor</span>
        </h1>
        <p className="text-[16px] font-nuni">
          {menuData.sectionSubtitle}
        </p>
      </div>

      {/* Hero Image */}
      <div className="mb-10 flex justify-center">
        <img 
          src={heroImg} 
          alt="Featured Yogurt" 
          className="w-full max-w-sm rounded-[40px] shadow-sm shadow-stone-200"
        />
      </div>

      {/* Menu List */}
      <div className="space-y-6 mb-10">
        {menuData.menuItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-[48px] p-[48px] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] relative"
          >
            {/* Top Row: Badge & Rating */}
            <div className="flex justify-between items-center mb-4 ">
              <span className={`${getBadgeClass(item.badgeType)} text-[10px] font-nuni px-3 py-1 rounded-full`}>
                {item.badge}
              </span>
              <div className="flex items-center gap-1 font-nuni text-[#4a9d9c] font-bold text-xs">
                <span>★</span>
                <span>{item.rating.toFixed(1)}</span>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-[24px]/[110%] font-brigro font-bold text-[#2d1b4d] mb-1">{item.name}</h3>
            <p className="font-nuni text-navo/60 text-[16px] leading-relaxed mb-6 w-3/4">
              {item.description}
            </p>

            {/* Bottom Row: Price & Action */}
            <div className="flex justify-between items-center">
              <span className="text-redo text-[24px]/[110%] font-brigro font-bold ">
                ${item.price.toFixed(2)}
              </span>
              <button className="bg-navo text-white p-3 rounded-full hover:scale-110 transition-transform cursor-pointer">
                <ShoppingCart/>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Button */}
      <div className="flex justify-center">
        <button className="bg-redo text-white w-full max-w-sm p-6 rounded-[48px] font-bold text-2xl/[110%] shadow-lg shadow-red-100 active:scale-95 transition-all">
          {menuData.footerButton}
        </button>
      </div>
    </section>
  );
};

export default FlavorMenu;
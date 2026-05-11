import  { useState } from 'react';

const DropdownModern = () => {
  // 1. Inisialisasi State: 'false' berarti menu tertutup saat awal
  const [tampil, setTampil] = useState(false);

  // 2. Data Menu: Disimpan dalam array agar mudah dikelola atau ditambah
  const daftarMenu = [
    { id: 1, nama: 'Dashboard' },
    { id: 2, nama: 'Proyek Saya' },
    { id: 3, nama: 'Keluar' }
  ];

  return (
    // 'relative' sangat penting agar posisi menu tetap di bawah tombol ini
    <div className="relative inline-block text-left">
      
      {/* Tombol Pemicu */}
      <button
        onClick={() => setTampil(!tampil)}
        className="px-5 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-200"
      >
        Klik Menu
      </button>

      {/* 3. Render Kondisional: Menu hanya muncul jika tampil === true */}
      {tampil && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden">
          <div className="flex flex-col">
            {daftarMenu.map((item) => (
              <button
                key={item.id}
                className="px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                onClick={() => setTampil(false)} // Menutup menu setelah memilih
              >
                {item.nama}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownModern;
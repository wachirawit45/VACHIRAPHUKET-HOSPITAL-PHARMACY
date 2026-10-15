import React from 'react';
import { Menu, Search, Globe } from 'lucide-react';
import { HospitalLogo } from './HospitalLogo';
import { PageId, Language } from '../types/pharmacy';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenMenu: () => void;
  onOpenSearch: () => void;
  lang: Language;
  onToggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenMenu,
  onOpenSearch,
  lang,
  onToggleLang,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Left: Hamburger menu + Brand Logo & Name */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="เปิดเมนูนำทาง"
            className="p-2 -ml-2 rounded-lg text-slate-700 hover:text-emerald-800 hover:bg-slate-100/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
          >
            <Menu className="w-6 h-6 stroke-[2.2]" />
          </button>

          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-lg p-1"
          >
            <HospitalLogo size={42} />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-slate-900 leading-tight group-hover:text-emerald-800 transition-colors">
                {lang === 'th' ? 'โรงพยาบาลวชิระภูเก็ต' : 'Vachira Phuket Hospital'}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-700 leading-tight">
                {lang === 'th' ? 'กลุ่มงานเภสัชกรรม' : 'Pharmacy Department'}
              </span>
            </div>
          </button>
        </div>

        {/* Right Zone: Home Nav, Drug Search button, Language Switcher */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Home Link */}
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className={`hidden md:inline-flex text-sm font-medium transition-colors hover:text-emerald-700 ${
              currentPage === 'home' ? 'text-emerald-800 font-semibold' : 'text-slate-600'
            }`}
          >
            {lang === 'th' ? 'หน้าแรก' : 'Home'}
          </button>

          {/* Search Button */}
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-full hover:border-emerald-600 hover:text-emerald-700 hover:shadow-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
          >
            <Search className="w-4 h-4 text-slate-500" />
            <span>{lang === 'th' ? 'ค้นหายา' : 'Search Drugs'}</span>
          </button>

          {/* Language Switcher Pill */}
          <button
            type="button"
            onClick={onToggleLang}
            className="inline-flex items-center p-0.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
            title="เปลี่ยนภาษา (Change language)"
          >
            <span
              className={`px-2.5 py-1 rounded-full transition-all ${
                lang === 'th'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              TH
            </span>
            <span
              className={`px-2.5 py-1 rounded-full transition-all ${
                lang === 'en'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              EN
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

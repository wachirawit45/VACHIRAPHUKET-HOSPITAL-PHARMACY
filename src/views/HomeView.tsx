import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { PageId, Language } from '../types/pharmacy';
import { DRUG_DATABASE, NEWS_LIST } from '../data/pharmacyData';
import {
  ShieldAlert,
  Bot,
  MessageCircle,
  FileCheck2,
  Clock,
  PhoneCall,
  ArrowRight,
  Sparkles,
  AlertCircle,
  CheckCircle,
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onOpenSearch: () => void;
  onOpenConsultation: () => void;
  lang: Language;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenSearch,
  onOpenConsultation,
  lang,
}) => {
  const highAlertDrugs = DRUG_DATABASE.filter((d) => d.isHAD).slice(0, 3);
  const latestNews = NEWS_LIST.slice(0, 3);

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* 1. Main Hero Container matching Image 1 */}
      <HeroSection
        onNavigate={onNavigate}
        onOpenConsultation={onOpenConsultation}
        lang={lang}
      />
      {/* 2. Smart Hospital Pharmacy Highlights (Feature Cards) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200/80 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              SMART PHARMACY & 3P SAFETY
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {lang === 'th'
                ? 'บริการเภสัชกรรมยุคดิจิทัล โรงพยาบาลวชิระภูเก็ต'
                : 'Digital Pharmacy Services, Vachira Phuket Hospital'}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: หุ่นยนต์จัดยาและ Smart Dispensing */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all">
            <div className="h-44 overflow-hidden relative">
              <img
                src="/src/assets/images/smart_pharmacy_dispensing_1791466980085.jpg"
                alt="ระบบหุ่นยนต์จัดยาอัตโนมัติ"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-emerald-800/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs flex items-center gap-1">
                <Bot className="w-3.5 h-3.5 text-emerald-300" />
                <span>Smart Robot System</span>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-emerald-700 transition-colors">
                  {lang === 'th' ? 'หุ่นยนต์จัดยาและความปลอดภัยสูง' : 'Automated Robotic Dispensing'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'th'
                    ? 'ระบบหุ่นยนต์จัดยาความเร็วสูง Synapse Med-Flow และตู้ยาอัตโนมัติ (ADC) ประจำหอผู้ป่วยวิกฤต ลดความคลาดเคลื่อนทางยาเหลือศูนย์'
                    : 'Synapse Med-Flow high-speed robotic dispensing and automated cabinets in critical care units, ensuring zero medication error.'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('structure')}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-900"
              >
                <span>{lang === 'th' ? 'ดูโครงสร้างและเทคโนโลยี' : 'Explore Facilities'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          {/* Card 2: บริบาลเภสัชกรรมและการปรึกษา */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all">
            <div className="h-44 overflow-hidden relative">
              <img
                src="/src/assets/images/pharmacist_consultation_1791466967361.jpg"
                alt="บริการปรึกษาเภสัชกรคลินิก"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-teal-800/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs flex items-center gap-1">
                <MessageCircle className="w-3.5 h-3.5 text-teal-300" />
                <span>Clinical Pharmacy</span>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-emerald-700 transition-colors">
                  {lang === 'th' ? 'คลินิกให้คำปรึกษาการใช้ยาเฉพาะทาง' : 'Specialized Pharmacy Counseling'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'th'
                    ? 'บริการให้คำปรึกษาคลินิกยาวาร์ฟาริน เบาหวาน หอบหืด โรคไต และการติดตามอาการไม่พึงประสงค์จากการใช้ยา (ADR) ตลอด 24 ชม.'
                    : 'Specialized clinical care for Warfarin, Diabetes, Asthma, CKD clinics, and comprehensive adverse drug reaction monitoring.'}
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-900"
              >
                <span>{lang === 'th' ? 'ติดต่อปรึกษาเภสัชกร' : 'Start Consultation'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          {/* Card 3: ระบบประเมิน DUE และงานวิจัย R2R */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all">
            <div className="h-44 overflow-hidden relative">
              <img
                src="/src/assets/images/academic_research_cover_1791466993173.jpg"
                alt="ผลงานวิชาการและ DUE"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-slate-800/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs flex items-center gap-1">
                <FileCheck2 className="w-3.5 h-3.5 text-emerald-300" />
                <span>DUE & Research</span>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-emerald-700 transition-colors">
                  {lang === 'th' ? 'ระบบคัดกรอง DUE และงานวิจัย R2R' : 'DUE Screening & Clinical R2R'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'th'
                    ? 'ระบบประเมินความสมเหตุผลการใช้ยาในกลุ่ม Albumin, Meropenem, Colistin และผลงานวิจัยนวัตกรรมด้านยาที่ได้รับการตีพิมพ์'
                    : 'Real-time drug use evaluation protocols for high-cost restricted antimicrobials and award-winning routine-to-research publications.'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('due')}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900"
              >
                <span>{lang === 'th' ? 'เปิดระบบคัดกรอง DUE' : 'Open DUE Tool'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>     
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              {lang === 'th' ? 'ข่าวสารและประกาศความปลอดภัยด้านยา' : 'News & Safety Bulletins'}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('news')}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
          >
            <span>{lang === 'th' ? 'ดูทั้งหมด' : 'View all'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {latestNews.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate('news')}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-emerald-500 hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs mb-2.5">
                  <span
                    className={`font-semibold px-2 py-0.5 rounded text-[11px] ${
                      item.category === 'เตือนภัยยา'
                        ? 'bg-rose-50 text-rose-700 border border-rose-200'
                        : item.category === 'ยาขาดคราว'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}
                  >
                    {item.category}
                  </span>
                  <span className="text-slate-400">{item.date}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2 line-clamp-2 hover:text-emerald-700">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {item.summary}
                </p>
              </div>
              <span className="mt-4 text-xs font-semibold text-emerald-700 inline-flex items-center gap-1">
                อ่านรายละเอียด <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          ))}
        </div>
      </section>
      {/* 5. Contact & Service Units Banner */}
    </div>
  );
};

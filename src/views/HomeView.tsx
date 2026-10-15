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
          <span className="text-xs text-slate-500 font-medium">
            มาตรฐานโรงพยาบาลศูนย์ชั้นนำระดับประเทศ
          </span>
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

      {/* 3. High-Alert Drug Safety Banner & Fast Search */}
      <section className="bg-gradient-to-r from-[#0d6e5c] via-[#0b5f4f] to-[#124d42] rounded-2xl p-6 sm:p-8 text-white shadow-xl border border-teal-500/30 relative overflow-hidden">
        {/* Luminous glow accent */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-emerald-300/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-teal-300/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-emerald-100 text-xs font-bold border border-white/30 backdrop-blur-xs">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-300" />
              <span>3P SAFETY - PATIENT SAFETY FIRST</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              {lang === 'th'
                ? 'ระบบเฝ้าระวังยาความเสี่ยงสูง (High Alert Drugs)'
                : 'High-Alert Drug Safety Protocol'}
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              {lang === 'th'
                ? 'ค้นหาแนวทางการบริหารยา ปริมาณความเข้มข้นสูงสุด ข้อควรระวัง และแนวทางการแก้ไขภาวะฉุกเฉินสำหรับบุคลากรทางการแพทย์'
                : 'Search protocols, maximum infusion rates, double-check verification steps, and antidote management.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="button"
              onClick={onOpenSearch}
              className="px-5 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-900 font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>{lang === 'th' ? 'ค้นหาคู่มือยา High Alert' : 'Search HAD Database'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('guidelines')}
              className="px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/30 font-semibold text-sm transition-all flex items-center justify-center backdrop-blur-xs"
            >
              {lang === 'th' ? 'ดูคู่มือ SOP ทั้งหมด' : 'View All SOPs'}
            </button>
          </div>
        </div>

        {/* Quick HAD List Preview */}
        <div className="relative z-10 mt-6 pt-6 border-t border-emerald-500/30 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {highAlertDrugs.map((drug) => (
            <div
              key={drug.id}
              onClick={onOpenSearch}
              className="bg-white/12 hover:bg-white/20 border border-white/20 rounded-xl p-3.5 cursor-pointer transition-all backdrop-blur-xs shadow-xs"
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-white">{drug.genericName}</span>
                <span className="text-[10px] bg-rose-500 text-white font-bold px-2 py-0.5 rounded-full shadow-xs">
                  HAD
                </span>
              </div>
              <p className="text-[11px] text-emerald-100 line-clamp-1">{drug.indication}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Latest News and Announcements */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              {lang === 'th' ? 'ข่าวสารและประกาศความปลอดภัยด้านยา' : 'News & Safety Bulletins'}
            </h2>
            <p className="text-xs text-slate-500">
              {lang === 'th' ? 'ข้อมูลอัปเดตล่าสุดจากกลุ่มงานเภสัชกรรม' : 'Latest updates from pharmacy department'}
            </p>
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
      <section className="bg-gradient-to-r from-teal-50/90 via-emerald-50/90 to-sky-50/80 rounded-2xl p-6 border border-emerald-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-sm">
            <PhoneCall className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-base">
              {lang === 'th' ? 'ช่องทางติดต่อกลุ่มงานเภสัชกรรม โรงพยาบาลวชิระภูเก็ต' : 'Contact Pharmacy Department'}
            </h4>
            <p className="text-xs text-slate-600">
              โทรศัพท์ 076-361234 | ห้องจ่ายยาผู้ป่วยนอก ชั้น 1 (OPD) ต่อ 1183, 1184 | ER (24 ชม.) ต่อ 1180 | คลินิกเฉพาะโรค ต่อ 1238
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('structure')}
          className="px-5 py-2.5 rounded-xl bg-white border border-emerald-300 text-emerald-900 text-xs font-bold hover:bg-emerald-50 transition-colors shrink-0 shadow-2xs"
        >
          {lang === 'th' ? 'ดูเบอร์ติดต่อทุกฝ่ายงาน' : 'Directory'}
        </button>
      </section>
    </div>
  );
};

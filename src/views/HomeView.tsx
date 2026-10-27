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
    src="https://pr.moph.go.th/assets/uploads/news/2569/f58e487b02a3abbd2051eff3969b1c8a.jpg"
    alt="****"
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    referrerPolicy="no-referrer"
  />
</div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-emerald-700 transition-colors">
                  {lang === 'th' ? 'รพ.วชิระภูเก็ต รับการเยี่ยมสำรวจงานเภสัชกรรมและระบบยา' : 'Specialized Pharmacy Counseling'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'th'
                    ? '12 ตุลาคม 2569 นพ.สุรัตน์ ตันติทวีวรกุล ผู้อำนวยการโรงพยาบาลวชิระภูเก็ต เป็นประธานเปิดและกล่าวต้อนรับ ภญ.วิชชุนี พิตรากูล และ ภญ.พาขวัญ ปุณณุปูรต ผู้เยี่ยมสำรวจ จากสมาคมเภสัชกรรมโรงพยาบาล (ประเทศไทย)'
                    : 'Specialized clinical care for Warfarin, Diabetes, Asthma, CKD clinics, and comprehensive adverse drug reaction monitoring.'}
                </p>
              </div>
            </div>
          </div>



          {/* Card 2: บริบาลเภสัชกรรมและการปรึกษา */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all">

<div className="h-44 overflow-hidden relative">
  <img
    src="https://healthserv.net/imghosp/hsp1z10517e260518034048.webp"
    alt="****"
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    referrerPolicy="no-referrer"
  />
</div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-emerald-700 transition-colors">
                  {lang === 'th' ? '' : 'Specialized Pharmacy Counseling'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'th'
                    ? ''
                    : 'Specialized clinical care for Warfarin, Diabetes, Asthma, CKD clinics, and comprehensive adverse drug reaction monitoring.'}
                </p>
              </div>
            </div>
          </div>



          {/* Card 3: ระบบประเมิน DUE และงานวิจัย R2R */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all">

<div className="h-44 overflow-hidden relative">
  <img
    src="https://healthserv.net/imgcntwebp/pix1v1700e261018070241.webp"
    alt=""
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    referrerPolicy="no-referrer"
  />
</div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-emerald-700 transition-colors">
                  {lang === 'th' ? '' : 'DUE Screening & Clinical R2R'}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'th'
                    ? ''
                    : 'Real-time drug use evaluation protocols for high-cost restricted antimicrobials and award-winning routine-to-research publications.'}
                </p>
              </div>
            </div>
          </div>
        </div>   
      </section>
    </div>
  );
};

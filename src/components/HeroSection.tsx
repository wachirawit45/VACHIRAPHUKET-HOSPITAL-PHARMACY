import React from 'react';
import { Activity, Target, Pill, MessageSquare, ClipboardCheck, ChevronRight } from 'lucide-react';
import { PageId, Language } from '../types/pharmacy';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  lang: Language;
}

export const DEFAULT_HERO_BG_URL =
  'https://scontent.fbkk12-2.fna.fbcdn.net/v/t39.30808-6/591038272_1193146056250642_1137167141342763709_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1260x709&ctp=s1260x709&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Y29tkM4kkBsQ7kNvwFPkfIS&_nc_oc=AdrvsgZ6cNXX8tlReHtY8x_uhfL8WMZ9Mag3fOWSxlPIGD5plPpcYMI8LjDMvfn7OnDfoL8tEcmIFlM1MEHPsGgy&_nc_zt=23&_nc_ht=scontent.fbkk12-2.fna&_nc_gid=Q139zMVOqPX4_VL0bOgWPg&_nc_ss=7b2a8&oh=00_AQMFp-gTBRqpnU0kO6TH2S1fzRgcpr-QpQbzc4V1XDP5Mw&oe=6ADD1CBF';

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenConsultation,
  lang,
}) => {
  const [bgSrc, setBgSrc] = React.useState(DEFAULT_HERO_BG_URL);

  return (
    <section className="relative w-full rounded-2xl sm:rounded-3xl lg:rounded-[36px] overflow-hidden bg-[#24303d] text-white shadow-xl border border-slate-700/40">
      {/* Background Image / Hospital Atmosphere with Dark Overlay Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={bgSrc}
          alt="โรงพยาบาลวชิระภูเก็ต กลุ่มงานเภสัชกรรม"
          
className="w-full h-full object-cover object-center opacity-100 blur-0 scale-105"

          referrerPolicy="no-referrer"
          onError={() => setBgSrc('/src/assets/images/hospital_hero_bg_1791466953955.jpg')}
        />

</div>


      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 py-10 sm:py-14 md:py-16 text-center flex flex-col items-center">
        {/* Top Teal Pill Badge: VACHIRA PHUKET HOSPITAL PHARMACY */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#114b43]/90 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm mb-6">
          <Activity className="w-4 h-4 text-teal-400 stroke-[2.5]" />
          <span>VACHIRAPHUKET HOSPITAL PHARMACY</span>
        </div>

        {/* Main Heading matching Image 1 */}

<h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight drop-shadow-sm max-w-3xl">
  {lang === 'th' ? (
    <>
      กลุ่มงานเภสัชกรรม
      <br />
      โรงพยาบาลวชิระภูเก็ต
    </>
  ) : (
    'Department of Pharmacy, Vachira Phuket Hospital'
  )}
</h1>

        {/* Highlight Card: เข็มมุ่งสอดคล้องกับ โรงพยาบาลวชิระภูเก็ต */}
        <div className="w-full max-w-lg mb-8 p-4 sm:p-5 rounded-2xl bg-[#093e32]/95 border border-[#136352] shadow-lg text-center backdrop-blur-sm transition-transform hover:scale-[1.01]">
          <h2 className="text-base sm:text-lg font-bold text-white mb-1 tracking-wide">
            {lang === 'th'
              ? 'เข็มมุ่งสอดคล้องกับ โรงพยาบาลวชิระภูเก็ต'
              : 'Strategic Direction Aligned with Vachira Phuket Hospital'}
          </h2>
          <p className="text-sm sm:text-base font-semibold text-emerald-300">
            3P safety และ Smart pharmacy
          </p>
        </div>

        {/* Mission Box: พันธกิจ (Mission) */}
        <div className="w-full max-w-2xl bg-[#1b2633]/90 backdrop-blur-md border border-slate-600/50 rounded-2xl p-5 sm:p-7 text-left shadow-xl mb-10">
          <div className="flex items-center gap-2.5 text-teal-400 font-bold text-base sm:text-lg mb-3">
            <Target className="w-5 h-5 stroke-[2.5]" />
            <span>{lang === 'th' ? 'พันธกิจ (Mission)' : 'Mission'}</span>
          </div>

          <div className="h-px w-full bg-slate-600/50 mb-4" />

          <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200">
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs mt-0.5 shadow-xs">
                1
              </span>
              <span className="leading-relaxed font-normal">
                {lang === 'th'
                  ? 'พัฒนางานเภสัชกรรมตามมาตรฐานวิชาชีพเภสัชกรรม'
                  : 'Develop pharmaceutical services in accordance with professional pharmacy standards'}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs mt-0.5 shadow-xs">
                2
              </span>
              <span className="leading-relaxed font-normal">
                {lang === 'th'
                  ? 'พัฒนาระบบงานบริการให้สอดคล้องกับ Smart Hospital และ 3P safety'
                  : 'Enhance service systems aligned with Smart Hospital initiatives and 3P Safety'}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs mt-0.5 shadow-xs">
                3
              </span>
              <span className="leading-relaxed font-normal">
                {lang === 'th'
                  ? 'ส่งเสริมการบริการทางเภสัชกรรม และพัฒนาสมรรถนะของบุคลากร ตามนโยบาย Service Excellence'
                  : 'Promote clinical pharmacy care and empower workforce competence through Service Excellence policy'}
              </span>
            </li>
          </ul>
        </div>
        
      </div>
    </section>
  );
};

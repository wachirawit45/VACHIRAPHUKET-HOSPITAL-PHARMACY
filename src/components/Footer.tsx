import React from 'react';
import { HospitalLogo, OFFICIAL_VACHIRA_LOGO_URL } from './HospitalLogo';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  ShieldCheck,
  Award,
  MessageCircle,
  Truck,
  HeartPulse,
  Flame,
  CheckCircle2,
} from 'lucide-react';
import { PageId, Language } from '../types/pharmacy';

export const Footer: React.FC<{ onNavigate: (page: PageId) => void; lang: Language }> = ({
  onNavigate,
  lang,
}) => {
  return (
    <footer className="bg-[#16212d] text-slate-200 mt-16 border-t-4 border-emerald-700 shadow-2xl">
      {/* Top Banner / Mission Statement */}
      <div className="bg-[#111a24] border-b border-slate-700/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <HospitalLogo size={68} className="shadow-lg border-2 border-emerald-500 bg-white" />
            <div>
              <div className="text-emerald-400 font-bold text-xs sm:text-sm tracking-wide">
                กลุ่มงานเภสัชกรรม
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                โรงพยาบาลวชิระภูเก็ต
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                มุ่งมั่นพัฒนาระบบยาที่ได้มาตรฐาน ปลอดภัย และสร้างเสริมสุขภาพของประชาชนชาวภูเก็ตและอันดามัน
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-600/50 text-emerald-300 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>มาตรฐานคุณภาพโรงพยาบาล (HA)</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-600/50 text-teal-300 text-xs font-bold">
              <Award className="w-4 h-4 text-teal-400" />
              <span>มาตรฐานวิชาชีพเภสัชกรรม</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: 3 Main Contact Columns matching user specification */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Column 1: โทรศัพท์และสายด่วน */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs space-y-4">
            <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-base border-b border-white/10 pb-3">
              <Phone className="w-5 h-5 text-emerald-400" />
              <h3>📞 โทรศัพท์และสายด่วน</h3>
            </div>

            <ul className="space-y-3.5 text-xs text-slate-300">
              <li className="space-y-0.5">
                <span className="text-white font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  ห้องจ่ายยาผู้ป่วยนอก ชั้น 1 (OPD):
                </span>
                <span className="text-emerald-300 font-mono font-bold block pl-3">
                  076-361234 ต่อ 1183, 1184
                </span>
              </li>

              <li className="space-y-0.5">
                <span className="text-white font-semibold flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-teal-400" />
                  โครงการเติมยา & Health Rider (ส่งยาถึงบ้าน โต๊ะ 41):
                </span>
                <span className="text-teal-300 font-mono font-bold block pl-3">
                  076-361234 ต่อ 1183
                </span>
              </li>

              <li className="space-y-0.5">
                <span className="text-white font-semibold flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5 text-rose-400" />
                  คลินิกบริบาลเภสัชกรรมเฉพาะโรค (วาร์ฟาริน/หอบหืด/ไต):
                </span>
                <span className="text-rose-300 font-mono font-bold block pl-3">
                  076-361234 ต่อ 1238
                </span>
              </li>

              <li className="space-y-0.5">
                <span className="text-white font-semibold flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  ห้องจ่ายยาอุบัติเหตุและฉุกเฉิน (ER 24 ชม.):
                </span>
                <span className="text-amber-300 font-mono font-bold block pl-3">
                  076-361234 ต่อ 1180
                </span>
              </li>

              <li className="pt-2 border-t border-white/10 space-y-0.5">
                <span className="text-white font-semibold block">
                  สายด่วนกลุ่มงานเภสัชกรรม:
                </span>
                <span className="text-emerald-400 font-mono font-extrabold text-sm block">
                  076-361234
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: ที่ตั้ง, Email & Line Official */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs space-y-4">
            <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-base border-b border-white/10 pb-3">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <h3>📍 ที่ตั้ง & 📧 Email</h3>
            </div>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="space-y-1">
                <span className="text-slate-400 block text-[11px] font-medium">ที่อยู่สถานที่ตั้ง:</span>
                <p className="text-white font-medium leading-relaxed">
                  เลขที่ 44 ถนนเยาวราช ตำบลตลาดใหญ่ อำเภอเมือง จังหวัดภูเก็ต 83000
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-white/10">
                <span className="text-slate-400 block text-[11px] font-medium">Email ติดต่อ:</span>
                <a
                  href="mailto:pharmacy@vachiraphuket.go.th"
                  className="text-emerald-300 hover:text-emerald-200 font-medium inline-flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>pharmacy@vachiraphuket.go.th</span>
                </a>
              </div>

              <div className="space-y-1 pt-2 border-t border-white/10">
                <span className="text-slate-400 block text-[11px] font-medium">Line Official:</span>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#06C755]/20 border border-[#06C755]/40 text-[#06C755] font-bold">
                  <MessageCircle className="w-4 h-4" />
                  <span>@vachirapharmacy</span>
                </div>
              </div>

              {/* Official Logo preview */}
              <div className="pt-3 border-t border-white/10 flex items-center gap-3">
                <img
                  src={OFFICIAL_VACHIRA_LOGO_URL}
                  alt="ตราสัญลักษณ์โรงพยาบาลวชิระภูเก็ต"
                  className="w-12 h-12 rounded-full object-cover border border-emerald-400/80 bg-white"
                  referrerPolicy="no-referrer"
                />
                <div className="text-[11px] text-slate-400 leading-tight">
                  <span className="text-white font-semibold block">โรงพยาบาลวชิระภูเก็ต</span>
                  สำนักงานสาธารณสุขจังหวัดภูเก็ต
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: เวลาทำการ */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs space-y-4">
            <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-base border-b border-white/10 pb-3">
              <Clock className="w-5 h-5 text-emerald-400" />
              <h3>🕐 เวลาทำการ</h3>
            </div>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-white font-bold block text-sm">วันจันทร์ - วันศุกร์</span>
                <span className="text-emerald-300 font-bold text-sm block">
                  08.00 - 20.00 น.
                </span>
                <span className="text-slate-400 text-[11px] block">(ห้องจ่ายยาหลัก)</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-white font-bold block text-sm">
                  วันเสาร์ - วันอาทิตย์ และวันหยุดนักขัตฤกษ์
                </span>
                <span className="text-amber-300 font-bold text-sm block">
                  08.30 - 16.30 น.
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-white font-bold block text-sm">
                    ห้องจ่ายยาฉุกเฉิน (ER)
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <span className="text-emerald-300 font-extrabold text-sm block">
                  เปิดบริการตลอด 24 ชั่วโมง
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & System Links */}
        <div className="mt-12 pt-6 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
  
          <div className="flex items-center gap-4 text-[11px]">
            <button
              type="button"
              onClick={() => onNavigate('drug-info')}
              className="hover:text-emerald-400 transition-colors"
            >
              ค้นหายา
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => onNavigate('due')}
              className="hover:text-emerald-400 transition-colors"
            >
              ระบบ DUE
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => onNavigate('guidelines')}
              className="hover:text-emerald-400 transition-colors"
            >
              คู่มือ SOP
            </button>
             <a
                   href="https://www.vachiraphuket.go.th/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                 >  เว็บไซต์โรงพยาบาล</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

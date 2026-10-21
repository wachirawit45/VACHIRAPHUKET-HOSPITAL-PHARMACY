import React from 'react';
import { HospitalLogo, OFFICIAL_VACHIRA_LOGO_URL } from './HospitalLogo';
import {
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  HeartPulse,
  ShieldCheck,
  ArrowUpRight,
  FileText,
  Activity,
  Globe,
} from 'lucide-react';
import { PageId, Language } from '../types/pharmacy';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks: {
    label: string;
    page: PageId;
    icon: React.ElementType;
  }[] = [
    {
      label: 'การประเมินความเหมาะสมการใช้ยา',
      page: 'due',
      icon: Activity,
    },
    {
      label: 'ระเบียบและแนวทางปฏิบัติงาน',
      page: 'guidelines',
      icon: FileText,
    },
  ];

  return (
    <footer className="relative mt-16 overflow-hidden border-t-4 border-emerald-500 bg-[#101b29] text-slate-300">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl"
      />

      {/* Hospital identity */}
      <div className="relative border-b border-white/10 bg-[#0c1521]/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-9 sm:px-8 md:flex-row md:py-10">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-2xl bg-emerald-400/20 blur-md" />
              <div className="relative rounded-2xl border border-emerald-400/40 bg-white p-2 shadow-xl">
                <HospitalLogo size={68} className="rounded-xl" />
              </div>
            </div>

            <div>

              <p className="text-sm font-semibold text-emerald-400 sm:text-base">
                กลุ่มงานเภสัชกรรม
              </p>

              <h2 className="mt-1 text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                โรงพยาบาลวชิระภูเก็ต
              </h2>

              <p className="mt-2 max-w-xl text-xs leading-6 text-slate-400 sm:text-sm">
                เข็มมุ่งสอดคล้องกับ 3P Safety และ Smart Pharmacy
                เพื่อยกระดับคุณภาพและความปลอดภัยด้านยา
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main information */}
      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {/* Address */}
          <section className="group rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.06]">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400 transition-colors group-hover:bg-emerald-400/20">
                <MapPin size={22} />
              </div>

              <div>
                <h3 className="font-bold text-white">สถานที่ตั้ง</h3>
                <p className="mt-1 text-[11px] tracking-wide text-slate-500">
                  HOSPITAL LOCATION
                </p>
              </div>
            </div>

            <p className="text-sm leading-7 text-slate-300">
              เลขที่ 44 ถนนเยาวราช ตำบลตลาดใหญ่
              อำเภอเมือง จังหวัดภูเก็ต 83000
            </p>

            <div className="my-5 border-t border-white/[0.08]" />

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white p-1">
                <img
                  src={OFFICIAL_VACHIRA_LOGO_URL}
                  alt="ตราสัญลักษณ์โรงพยาบาลวชิระภูเก็ต"
                  className="h-full w-full rounded-full object-contain"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  โรงพยาบาลวชิระภูเก็ต
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  กลุ่มงานเภสัชกรรม
                </p>
              </div>
            </div>

            <a
              href="https://www.vachiraphuket.go.th/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
            >
              เว็บไซต์โรงพยาบาล
              <ArrowUpRight size={14} />
            </a>
          </section>

          {/* Opening hours */}
          <section className="group rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.06]">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
                <Clock size={22} />
              </div>

              <div>
                <h3 className="font-bold text-white">เวลาทำการ</h3>
                <p className="mt-1 text-[11px] tracking-wide text-slate-500">
                  SERVICE HOURS
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-white">
                    วันจันทร์ – วันศุกร์
                  </span>
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                </div>

                <p className="mt-2 text-lg font-extrabold tracking-wide text-emerald-300">
                  08.00 – 20.00 น.
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  ห้องจ่ายยาหลัก
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4">
                <span className="text-sm font-semibold leading-6 text-white">
                  วันเสาร์ – วันอาทิตย์ และวันหยุดนักขัตฤกษ์
                </span>

                <p className="mt-2 text-lg font-extrabold tracking-wide text-amber-300">
                  08.30 – 16.30 น.
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] p-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>

                  <span className="text-sm font-bold text-white">
                    ห้องจ่ายยาฉุกเฉิน (ER)
                  </span>
                </div>

                <p className="mt-2 text-sm font-extrabold text-emerald-300">
                  เปิดบริการตลอด 24 ชั่วโมง
                </p>
              </div>
            </div>
          </section>

          {/* Quick links */}
          <section className="group rounded-2xl border border-white/[0.08] bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.06] sm:col-span-2 lg:col-span-1">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                <Globe size={22} />
              </div>

              <div>
                <h3 className="font-bold text-white">เมนูบริการ</h3>
                <p className="mt-1 text-[11px] tracking-wide text-slate-500">
                  QUICK ACCESS
                </p>
              </div>
            </div>

            <p className="mb-4 text-xs leading-6 text-slate-400">
              เข้าถึงข้อมูลยา ระบบประเมินความเหมาะสม
              และเอกสารมาตรฐานการปฏิบัติงาน
            </p>

            <div className="space-y-3">
              {quickLinks.map(({ label, page, icon: Icon }) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => onNavigate(page)}
                  className="group/link flex w-full items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-4 text-left transition-all hover:border-emerald-400/30 hover:bg-emerald-400/[0.07]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-slate-300 transition-colors group-hover/link:bg-emerald-400/10 group-hover/link:text-emerald-300">
                    <Icon size={18} />
                  </span>

                  <span className="flex-1 text-sm font-medium leading-6 text-slate-300 transition-colors group-hover/link:text-white">
                    {label}
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-slate-500 transition-all group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-emerald-400"
                  />
                </button>
              ))}
            </div>

            <a
              href="https://www.vachiraphuket.go.th/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-emerald-400/20 px-4 py-3 text-sm font-semibold text-emerald-300 transition-all hover:border-emerald-400/50 hover:bg-emerald-400/10"
            >
              <Globe size={16} />
              เว็บไซต์หลักของโรงพยาบาล
              <ExternalLink size={14} />
            </a>
          </section>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-xs leading-6 text-slate-400">
                © {currentYear} กลุ่มงานเภสัชกรรม
                {' '}โรงพยาบาลวชิระภูเก็ต. All rights reserved.
              </p>

              <p className="mt-1 text-[10px] text-slate-600">
                Pharmacy Department · VachiraPhuket Hospital
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* System support contact */}
      <div className="relative border-t border-white/10 bg-[#0c1521]/70 px-5 py-6 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-400">
              <ShieldCheck size={21} />
            </div>

            <div>
              <h3 className="text-sm font-bold text-white">
                ติดต่อปัญหาเกี่ยวกับระบบ
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                ผู้ดูแลระบบ: นายวชิรวิชญ์
              </p>
            </div>
          </div>

          <a
            href="tel:0652508584"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-3 text-sm font-bold text-emerald-300 transition-all hover:border-emerald-400/60 hover:bg-emerald-400/20 hover:text-white"
            aria-label="โทรติดต่อผู้ดูแลระบบ 065-250-8584"
          >
            <Phone size={18} />
            065-250-8584
          </a>
        </div>
      </div>
    </footer>
  );
};

import React, { useEffect, useState } from 'react';
import { DEFAULT_DRIVE_LINKS } from '../data/driveLinks';
import {
  X,
  Home,
  Building2,
  Network,
  Pill,
  ClipboardCheck,
  FileText,
  Newspaper,
  GraduationCap,
  ChevronRight,
  List,
  LayoutGrid,
  Phone,
  Globe,
} from 'lucide-react';
import { HospitalLogo } from './HospitalLogo';
import { PageId, Language } from '../types/pharmacy';
// =======================================================================
// 📸 ลิงก์รูปภาพอาคารโรงพยาบาลมุมขวาบนของเมนูกลุ่มงาน (แก้ไขหรือใส่ URL รูปได้ที่นี่)
// =======================================================================
export const MODAL_HEADER_BANNER_IMAGE_URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCLjLB1rafznDZeWhZtBs3WLmoKsU084uXyFU0MtTMyiihPAiXukqm4wi&s=10';

interface SubMenuItem {
  id: string;
  labelTh: string;
  labelEn?: string;
}

interface MenuItem {
  id: PageId;
  labelTh: string;
  shortLabelTh: string;
  labelEn: string;
  icon: (cls?: string) => React.ReactNode;
  iconColorClass: string;
  iconBgClass: string;
  subItems?: SubMenuItem[];
}

interface SidebarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: PageId;
  activeSubTopic?: string | null;
  onSelectPage: (page: PageId, subTopicId?: string) => void;
  lang: Language;
}

export const SidebarDrawer: React.FC<SidebarDrawerProps> = ({
  isOpen,
  onClose,
  currentPage,
  activeSubTopic,
  onSelectPage,
  lang,
}) => {
  // Display mode: 'grid' (exact match to image_65d388d1.png) vs 'list' (side drawer)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});

  const toggleExpand = (menuId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const countItems = (prefix: string): number =>
    Object.keys(DEFAULT_DRIVE_LINKS).filter((key) =>
      new RegExp(`^${prefix}_\\d+$`).test(key)
    ).length;

  // The 8 items exactly matching image_65d388d1.png
  const menuItems: MenuItem[] = [
    {
      id: 'home',
      labelTh: 'หน้าหลัก',
      shortLabelTh: 'หน้าหลัก',
      labelEn: 'HOME',
      icon: (cls = 'w-12 h-12') => (
        <Home className={`${cls} text-[#009b67] stroke-[2.4]`} />
      ),
      iconColorClass: 'text-[#009b67]',
      iconBgClass: 'bg-[#edf9f3]',
    },
    {
      id: 'about',
      labelTh: 'กลุ่มงาน',
      shortLabelTh: 'กลุ่มงาน',
      labelEn: 'DEPARTMENT',
      icon: (cls = 'w-12 h-12') => (
        <Building2 className={`${cls} text-[#00875a] stroke-[2.3]`} />
      ),
      iconColorClass: 'text-[#00875a]',
      iconBgClass: 'bg-[#eaf7f1]',
      subItems: [{ id: 'vision-mission', labelTh: 'วิสัยทัศน์และพันธกิจ' }],
    },
    {
      id: 'structure',
      labelTh: 'โครงสร้าง',
      shortLabelTh: 'โครงสร้าง',
      labelEn: 'STRUCTURE',
      icon: (cls = 'w-12 h-12') => (
        <Network className={`${cls} text-[#007a78] stroke-[2.3]`} />
      ),
      iconColorClass: 'text-[#007a78]',
      iconBgClass: 'bg-[#e7f5f4]',
      subItems: [
        { id: 's-1', labelTh: 'โครงสร้างองค์กร (ภก.สมนึก ฮาเส็ม)' },
        { id: 's-2', labelTh: 'งานบริหารเวชภัณฑ์ (ภก.ไพรัช สุทธิพัฒนกิจ)' },
        { id: 's-3', labelTh: 'งานบริการจ่ายยาผู้ป่วยใน/บริบาลเภสัชกรรมผู้ป่วยใน (ภญ.จิราภรณ์ สุทธิพัฒนกิจ)' },
        { id: 's-4', labelTh: 'งานผลิตยา (ภก.ชาติชาย หวังแต่ธรรม)' },
        { id: 's-5', labelTh: 'งานบริการจ่ายยาผู้ป่วยนอก/บริบาลเภสัชกรรมผู้ป่วยนอก (ภญ.วรภา วราธนกุล)' },
        { id: 's-6', labelTh: 'งานเภสัชกรรมคลินิกและพัฒนาระบบยา (ภญ.วิลาสินีย์ สกุลแพทย์)' },
        { id: 's-7', labelTh: 'งานเภสัชสนเทศและข้อมูลยา (ภก.อภิชาติ จิตต์ซื่อ)' },
      ],
    },
    {
      id: 'drug-info',
      labelTh: 'ข้อมูลยา',
      shortLabelTh: 'ข้อมูลยา',
      labelEn: 'DRUG INFO',
      icon: (cls = 'w-12 h-12') => (
        <Pill className={`${cls} text-[#008f86] stroke-[2.3]`} />
      ),
      iconColorClass: 'text-[#008f86]',
      iconBgClass: 'bg-[#eaf6f5]',
      subItems: [
        { id: 'huahin-form', labelTh: 'บัญชียาโรงพยาบาลวชิระภูเก็ต' },
        { id: 'tmt', labelTh: 'รหัส TMT ยาโรงพยาบาลวชิระภูเก็ต' },
        { id: 'rphst-form', labelTh: 'บัญชียาโรงพยาบาลส่งเสริมสุขภาพตำบล' },
        { id: 'r2-form', labelTh: 'แบบฟอร์มยาบัญชี R2 (บัญชี จ.2)' },
        { id: 'nlem-list', labelTh: 'บัญชียาหลักแห่งชาติ' },
        { id: 'ned-list', labelTh: 'บัญชียานอกบัญชียาหลักแห่งชาติ (NED)' },
        { id: 'ned-waiver', labelTh: 'ยานอกบัญชียาหลักแห่งชาติ (NED) ที่จำเป็นต้องใช้' },
        { id: 'annual-drug-revisions', labelTh: 'รายการยาเข้า-ออกประจำปี' },
        { id: 'herb-list', labelTh: 'บัญชียาหลักแห่งชาติด้านสมุนไพร' },
        { id: 'amr-management', labelTh: 'การจัดการการดื้อยาต้านจุลชีพ (AMR)' },
        { id: 'drug-herb-interaction', labelTh: 'อันตรกิริยาระหว่างยาและสมุนไพร' },
        { id: 'had-policy', labelTh: 'ยาความเสี่ยงสูง (High Alert Drug)' },
        { id: 'warfarin-calc', labelTh: 'คำนวณขนาดยาวาร์ฟารินเริ่มต้น (Warfarin Initial Dose)' },
        { id: 'fatal-ddi', labelTh: 'คู่ยาที่ห้ามใช้ด้วยกัน (Fatal drug-drug interaction)' },
        { id: 'special-technique', labelTh: 'ยาเทคนิคพิเศษ' },
        { id: 'iv-antibiotic-dose', labelTh: 'ขนาดยาปฏิชีวนะรูปแบบฉีด' },
        { id: 'malaria-dose', labelTh: 'ขนาดยาต้านมาลาเรีย' },
        { id: 'covid-antiviral', labelTh: 'ขนาดยาต้านไวรัสโควิด 19' },
        { id: 'pediatric-dosing', labelTh: 'ขนาดยาที่ใช้ในเด็ก' },
        { id: 'iv-infusion-table', labelTh: 'ตารางการให้สารน้ำและยาทางหลอดเลือดดำ' },
      ],
    },
    {
      id: 'due',
      labelTh: 'การประเมิน',
      shortLabelTh: 'การประเมิน',
      labelEn: 'ASSESSMENT',
      icon: (cls = 'w-12 h-12') => (
        <ClipboardCheck className={`${cls} text-[#059669] stroke-[2.3]`} />
      ),
      iconColorClass: 'text-[#059669]',
      iconBgClass: 'bg-[#eaf7f1]',
    },
    {
      id: 'guidelines',
      labelTh: 'ระเบียบ',
      shortLabelTh: 'ระเบียบ',
      labelEn: 'REGULATIONS',
      icon: (cls = 'w-12 h-12') => (
        <FileText className={`${cls} text-[#ea580c] stroke-[2.3]`} />
      ),
      iconColorClass: 'text-[#ea580c]',
      iconBgClass: 'bg-[#fff5ee]',
      subItems: [
        { id: 'wi-curr', labelTh: `WI ฉบับปัจจุบัน (${countItems('WI_CURR')} รายการ)` },
        { id: 'wp-ext', labelTh: `WP จากหน่วยงานอื่น (${countItems('WP_EXT')} รายการ)` },
        { id: 'wp-curr', labelTh: `WP ฉบับปัจจุบัน (${countItems('WP_CURR')} รายการ)` },
        { id: 'wp-old', labelTh: `WP ฉบับเก่า (${countItems('WP_OLD')} รายการ)` },
        { id: 'guideline-drive', labelTh: `แนวทางบริหารยา & แบบฟอร์ม (${countItems('GUIDELINE_DRIVE')} รายการ)` },
        { id: 'sop', labelTh: 'ระเบียบปฏิบัติ (16 SOP)' },
        { id: 'cpg', labelTh: 'แนวทางเวชปฏิบัติ (3 CPG)' },
      ],
    },
    {
      id: 'news',
      labelTh: 'ข่าว',
      shortLabelTh: 'ข่าว',
      labelEn: 'NEWS',
      icon: (cls = 'w-12 h-12') => (
        <Newspaper className={`${cls} text-[#2563eb] stroke-[2.3]`} />
      ),
      iconColorClass: 'text-[#2563eb]',
      iconBgClass: 'bg-[#eef4ff]',
    },
    {
      id: 'academic',
      labelTh: 'ผลงาน',
      shortLabelTh: 'ผลงาน',
      labelEn: 'PORTFOLIO',
      icon: (cls = 'w-12 h-12') => (
        <GraduationCap className={`${cls} text-[#8b5cf6] stroke-[2.3]`} />
      ),
      iconColorClass: 'text-[#8b5cf6]',
      iconBgClass: 'bg-[#f5f3ff]',
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 font-['Sarabun',sans-serif]">
      {/* Backdrop with blurred dark hospital scenery */}
      <div
        className="fixed inset-0 bg-slate-900/65 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* ======================================================== */}
      {/* MODE 1: EXACT REPLICA OF image_65d388d1.png               */}
      {/* ======================================================== */}
      {viewMode === 'grid' ? (
        <div className="relative z-10 w-full max-w-5xl my-auto animate-in zoom-in-95 duration-250 ease-out">
          {/* Main Modal Card Container */}
          <div className="relative w-full bg-gradient-to-b from-[#f9fdfb] via-white to-[#edf8f3] rounded-[32px] sm:rounded-[40px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] p-5 sm:p-8 md:p-10 border border-emerald-100/90 overflow-hidden">
            {/* Top Right Circular Close Button [X] */}
            <button
              type="button"
              onClick={onClose}
              aria-label="ปิดเมนู"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-md text-slate-800 hover:text-black hover:bg-slate-100 flex items-center justify-center transition-all cursor-pointer border border-slate-200/60 z-30 group"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            </button>

            {/* Background Decorative Mint Crosses & Waves */}
            <div className="absolute -bottom-8 -left-8 text-emerald-300/40 pointer-events-none select-none text-8xl font-thin leading-none z-0">
              +
            </div>
            <div className="absolute bottom-6 left-14 text-emerald-300/30 pointer-events-none select-none text-5xl font-thin z-0">
              +
            </div>

            {/* Modal Header Bar matching image_65d388d1.png */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-emerald-100/80">
              {/* Logo & Official Titles */}
              <div className="flex items-center gap-3.5 sm:gap-5">
                <div className="relative p-1 bg-white rounded-full shadow-xs border border-emerald-200 shrink-0">
                  <HospitalLogo size={62} className="border-emerald-600 bg-white" />
                </div>

                <div className="space-y-0.5">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-[#054030] tracking-tight leading-tight">
                    โรงพยาบาลวชิระภูเก็ต
                  </h1>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#054030] leading-tight">
                    กลุ่มงานเภสัชกรรม
                  </h2>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-500 tracking-wider uppercase pt-0.5">
                    VACHIRAPHUKET HOSPITAL PHARMACY
                  </p>
                </div>
              </div>

              {/* Right Cutout Photo of Vachira Phuket Hospital Campus */}
              <div className="hidden md:block w-72 lg:w-84 h-24 lg:h-28 relative overflow-hidden rounded-2xl shrink-0 shadow-xs border border-emerald-100/60">
                <img
                  src={MODAL_HEADER_BANNER_IMAGE_URL}
                  alt="Vachira Phuket Hospital Campus"
                  className="w-full h-full object-cover object-center filter contrast-[1.05]"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/vachira_hero_clean.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent" />
              </div>
            </div>

            {/* 8 Cards Grid (4 columns x 2 rows matching image_65d388d1.png) */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-5 my-6 sm:my-8">
              {menuItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      onSelectPage(item.id);
                      onClose();
                    }}
                    className={`relative w-full rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 cursor-pointer group text-left ${
                      isActive
                        ? 'bg-[#edf9f3] border-2 border-[#009b67] shadow-[0_8px_25px_rgba(0,155,103,0.15)] ring-4 ring-[#009b67]/10'
                        : 'bg-white border border-slate-200/90 shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 hover:border-emerald-300'
                    }`}
                  >
                    {/* Active Decorative Sparkle Accent on top-left of active card */}
                    {isActive && (
                      <div className="absolute -top-1.5 -left-1.5 flex gap-0.5 text-[#009b67] text-[11px] font-black select-none pointer-events-none">
                        <span>/</span>
                        <span>/</span>
                      </div>
                    )}

                    {/* Top Row: Icon + Right Circular Arrow */}
                    <div className="flex items-center justify-between w-full">
                      <div className="group-hover:scale-105 transition-transform duration-200">
                        {item.icon('w-10 h-10 sm:w-12 sm:h-12')}
                      </div>

                      {/* Small Circular Arrow Button on Right */}
                      <div
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                          isActive
                            ? 'bg-[#009b67] text-white shadow-xs'
                            : 'bg-[#d7f2e6] text-[#00875a] group-hover:bg-[#009b67] group-hover:text-white'
                        }`}
                      >
                        <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.8]" />
                      </div>
                    </div>

                    {/* Bottom Area: Thai Label + English Subtitle */}
                    <div className="pt-4 sm:pt-6 space-y-0.5">
                      <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#00875a] transition-colors leading-tight">
                        {item.shortLabelTh}
                      </h3>
                      <p className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-wider">
                        {item.labelEn}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Modal Bottom Bar: Switcher, Contact & Heartbeat Graphic */}
            <div className="relative z-10 pt-4 border-t border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              {/* Left: Switch to List Drawer Capsule Button */}
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 border border-slate-200/90 text-slate-700 hover:text-emerald-900 hover:bg-emerald-50 text-xs font-bold transition-all shadow-2xs cursor-pointer"
              >
                <List className="w-4 h-4 text-emerald-700" />
                <span>สลับเป็นเมนูแบบรายการ (List Drawer)</span>
              </button>

              {/* Right: Hospital Phone, Official Website & Heartbeat Graphic */}
              <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
                <div className="space-y-0.5 text-center sm:text-right">
                  <div className="flex items-center justify-center sm:justify-end gap-1.5 text-slate-700 font-semibold">
                    <Phone className="w-3.5 h-3.5 text-emerald-700" />
                    <span>065-250-8584  ผู้ดูแลระบบ: นายวชิรวิชญ์ อนุพันธ์</span>
                  </div>
                  <a
                    href="https://www.vachiraphuket.go.th/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-end gap-1.5 text-slate-500 hover:text-emerald-800 transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5 text-emerald-700" />
                    <span>https://www.vachiraphuket.go.th/</span>
                  </a>
                </div>

                {/* Medical Heartbeat Waveform Emblem */}
                <div className="hidden md:flex items-center justify-center text-emerald-600 pl-2">
                  <svg
                    className="w-8 h-8 text-emerald-600 stroke-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    <path d="M3.22 12H9.5l1.5-3 2 6 1.5-3h6.28" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ======================================================== */
        /* MODE 2: SLIDE-IN LIST DRAWER (WITH EXPANDABLE SUB-ITEMS) */
        /* ======================================================== */
        <div className="fixed inset-y-0 left-0 w-full max-w-[340px] sm:max-w-[360px] bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-250 ease-out">
          {/* Top Header Bar */}
          <div className="bg-[#005a43] px-5 py-4 text-white flex items-center justify-between shrink-0 shadow-sm">
            <div className="flex items-center gap-3">
              <HospitalLogo size={42} className="border-white/90 bg-white shadow-xs shrink-0" />
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-white leading-tight">
                  {lang === 'th' ? 'โรงพยาบาลวชิระภูเก็ต' : 'Vachira Phuket Hospital'}
                </span>
                <span className="text-xs font-medium text-emerald-100/90 leading-tight mt-0.5">
                  {lang === 'th' ? 'กลุ่มงานเภสัชกรรม' : 'Pharmacy Department'}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="ปิดเมนู"
              className="p-1.5 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Quick Switch to Grid View */}
          <div className="px-3 pt-3">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className="w-full py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer border border-emerald-200 shadow-2xs"
            >
              <LayoutGrid className="w-4 h-4 text-emerald-700" />
              <span>สลับกลับไปมุมมองการ์ด (Grid Cards)</span>
            </button>
          </div>

          {/* Menu Items List */}
          <div className="flex-1 overflow-y-auto py-2 px-3 space-y-1">
            {menuItems.map((item) => {
              const isActive = currentPage === item.id;
              const hasSub = !!item.subItems && item.subItems.length > 0;
              const isExpanded = !!expandedMenus[item.id];

              return (
                <div key={item.id} className="space-y-1">
                  <div
                    onClick={() => {
                      onSelectPage(item.id);
                      onClose();
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-2xl transition-all cursor-pointer group ${
                      isActive
                        ? 'relative overflow-hidden bg-[#ebfaf4] text-[#005a43] font-bold before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1.5 before:bg-[#005a43] before:rounded-r-md'
                        : 'text-slate-700 hover:bg-slate-50 font-medium'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`shrink-0 transition-transform group-hover:scale-110 ${
                          isActive ? 'text-[#005a43]' : item.iconColorClass
                        }`}
                      >
                        {item.icon('w-5 h-5')}
                      </div>
                      <span className="text-[15px] leading-snug">
                        {lang === 'th' ? item.labelTh : item.labelEn}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      {hasSub ? (
                        <button
                          type="button"
                          onClick={(e) => toggleExpand(item.id, e)}
                          title={isExpanded ? 'ย่อเมนู' : 'ขยายเมนู'}
                          className="p-1 rounded-md text-slate-400 hover:text-emerald-800 hover:bg-emerald-100/50 transition-colors cursor-pointer"
                        >
                          <ChevronRight
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? 'rotate-90 text-[#005a43]' : ''
                            } ${isActive ? 'text-[#005a43]' : 'text-slate-400'}`}
                          />
                        </button>
                      ) : (
                        <ChevronRight
                          className={`w-4 h-4 shrink-0 transition-colors ${
                            isActive
                              ? 'text-[#005a43]'
                              : 'text-slate-400 group-hover:text-slate-600'
                          }`}
                        />
                      )}
                    </div>
                  </div>

                  {/* Sub Menu Accordion */}
                  {hasSub && isExpanded && (
                    <div className="pl-7 pr-2 py-1 space-y-0.5 border-l-2 border-emerald-100 ml-6 my-1 animate-in slide-in-from-top-1 duration-150">
                      <button
                        type="button"
                        onClick={() => {
                          onSelectPage(item.id);
                          onClose();
                        }}
                        className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold text-emerald-800 hover:bg-emerald-50 flex items-center gap-2 transition-colors border-b border-emerald-100/60 mb-1"
                      >
                        <span>➔</span>
                        <span>
                          {lang === 'th'
                            ? `ดูทั้งหมดในหน้า ${item.labelTh}`
                            : `View all in ${item.labelEn}`}
                        </span>
                      </button>
                      {item.subItems!.map((sub) => {
                        const isSubActive =
                          currentPage === item.id && activeSubTopic === sub.id;

                        return (
                          <button
                            key={sub.id}
                            type="button"
                            onClick={() => {
                              onSelectPage(item.id, sub.id);
                              onClose();
                            }}
                            className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center gap-2 transition-colors ${
                              isSubActive
                                ? 'bg-emerald-100 text-emerald-950 font-bold'
                                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-normal'
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                isSubActive ? 'bg-emerald-700' : 'bg-slate-300'
                              }`}
                            />
                            <span className="leading-snug line-clamp-2">
                              {sub.labelTh}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Drawer Footer */}
          <div className="p-4 sm:p-5 border-t border-slate-100 bg-white text-slate-600 flex flex-col gap-1">
            <div className="font-bold text-slate-800 text-sm">
              {lang === 'th' ? 'สายด่วนสอบถามข้อมูลยา' : 'Pharmacy Hotline'}
            </div>
            <div className="text-slate-600 text-xs">
              076-361-234 ต่อ 1183 (OPD), 1212 (DIC)
            </div>
            <div className="text-slate-400 text-[11px] font-normal">
              Smart Hospital & 3P Safety Certified
            </div>
            <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-100 mt-2 flex items-center justify-between">
              <span>ผู้ดูแลระบบ: นายวชิรวิชญ์ อนุพันธ์</span>
              <span className="font-mono text-emerald-800 font-medium">065-250-8584</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

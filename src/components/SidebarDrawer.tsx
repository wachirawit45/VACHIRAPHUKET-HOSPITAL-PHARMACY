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
  Calendar,
  ChevronRight,
  ChevronDown,
} from 'lucide-react';
import { HospitalLogo } from './HospitalLogo';
import { PageId, Language } from '../types/pharmacy';

interface SubMenuItem {
  id: string;
  labelTh: string;
  labelEn?: string;
  indent?: boolean;
}

interface MenuItem {
  id: PageId;
  labelTh: string;
  labelEn: string;
  icon: React.ReactNode;
  iconColorClass: string;
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
  // Track open state for expandable menus (default collapsed to show only main headers first)
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});

  const toggleExpand = (menuId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setExpandedMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  // Close drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when drawer is open
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

  const menuItems: MenuItem[] = [
    {
      id: 'home',
      labelTh: 'หน้าแรก',
      labelEn: 'Home',
      icon: <Home className="w-5 h-5" />,
      iconColorClass: 'text-emerald-700',
    },
    {
      id: 'about',
      labelTh: 'เกี่ยวกับกลุ่มงาน',
      labelEn: 'About Department',
      icon: <Building2 className="w-5 h-5" />,
      iconColorClass: 'text-emerald-700',
      subItems: [
        { id: 'vision-mission', labelTh: 'วิสัยทัศน์และพันธกิจ' },
      ],
    },
    {
      id: 'structure',
      labelTh: 'โครงสร้างกลุ่มงาน',
      labelEn: 'Organization Structure',
      icon: <Network className="w-5 h-5" />,
      iconColorClass: 'text-teal-700',
      subItems: [
        { id: 's-1', labelTh: 'งานบริการผู้ป่วยนอก' },
        { id: 's-2', labelTh: 'งานบริการผู้ป่วยใน' },
        { id: 's-3', labelTh: 'งานการบริบาลทาง เภสัชกรรมผู้ป่วยนอก' },
        { id: 's-4', labelTh: 'งานการบริบาลทาง เภสัชกรรมผู้ป่วยใน' },
        { id: 's-5', labelTh: 'งานบริหารเวชภัณฑ์' },
        { id: 's-6', labelTh: 'งานผลิตและเคมีบำบัด' },
        { id: 's-7', labelTh: 'งานเภสัชกรรมปฐมภูมิ' },
        { id: 's-8', labelTh: 'งานบริการเภสัชสนเทศ' },
      ],
    },
    {
      id: 'drug-info',
      labelTh: 'ข้อมูลยา (Drug Information)',
      labelEn: 'Drug Information',
      icon: <Pill className="w-5 h-5" />,
      iconColorClass: 'text-emerald-600',
      subItems: [
        { id: 'huahin-form', labelTh: 'บัญชียาโรงพยาบาลวชิระภูเก็ต' },
        { id: 'tmt', labelTh: 'รหัส TMT ยาโรงพยาบาลวชิระภูเก็ต' },
        { id: 'rphst-form', labelTh: 'บัญชียาโรงพยาบาลส่งเสริมสุขภาพตำบล' },
        { id: 'r2-form', labelTh: 'แบบฟอร์มยาบัญชี R2 (บัญชี จ.2)' },
        { id: 'nlem-list', labelTh: 'บัญชียาหลักแห่งชาติ' },
        { id: 'ned-list', labelTh: 'บัญชียานอกบัญชียาหลักแห่งชาติ (NED)' },
        { id: 'ned-waiver', labelTh: 'ยานอกบัญชียาหลักแห่งชาติ (NED) ที่จำเป็นต้องใช้ โดยผู้ป่วยไม่ต้องชำระเงิน' },
        { id: 'annual-drug-revisions', labelTh: 'รายการยาเข้า-ออกประจำปี' },
        { id: 'herb-list', labelTh: 'บัญชียาหลักแห่งชาติด้านสมุนไพร' },
        { id: 'amr-management', labelTh: 'การจัดการการดื้อยาต้านจุลชีพ (AMR Management)' },
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
      labelTh: 'การประเมินความเหมาะสมการใช้ยา (DUE)',
      labelEn: 'Drug Use Evaluation (DUE)',
      icon: <ClipboardCheck className="w-5 h-5" />,
      iconColorClass: 'text-emerald-600',
    },
    {
      id: 'guidelines',
      labelTh: 'ระเบียบและแนวทางปฏิบัติงาน',
      labelEn: 'Regulations & SOP Guidelines',
      icon: <FileText className="w-5 h-5" />,
      iconColorClass: 'text-amber-600',
      subItems: [
        {
          id: 'wi-curr',
          labelTh: `WI ฉบับปัจจุบัน (${countItems('WI_CURR')} รายการ)`,
        },
        {
          id: 'wp-ext',
          labelTh: `WP จากหน่วยงานอื่น (${countItems('WP_EXT')} รายการ)`,
        },
        {
          id: 'wp-curr',
          labelTh: `WP ฉบับปัจจุบัน (${countItems('WP_CURR')} รายการ)`,
        },
        {
          id: 'wp-old',
          labelTh: `WP ฉบับเก่า (${countItems('WP_OLD')} รายการ)`,
        },
        {
          id: 'guideline-drive',
          labelTh: `แนวทางบริหารยา & แบบฟอร์ม (${countItems('GUIDELINE_DRIVE')} รายการ)`,
        },
        {
          id: 'sop',
          labelTh: 'ระเบียบปฏิบัติ (16 SOP)',
        },
        {
          id: 'cpg',
          labelTh: 'แนวทางเวชปฏิบัติ (3 CPG)',
        },
      ],
    },
    {
      id: 'news',
      labelTh: 'ข่าว/ประชาสัมพันธ์',
      labelEn: 'News & Announcements',
      icon: <Newspaper className="w-5 h-5" />,
      iconColorClass: 'text-blue-600',
    },
    {
      id: 'academic',
      labelTh: 'ผลงานวิชาการ',
      labelEn: 'Academic Works & Research',
      icon: <GraduationCap className="w-5 h-5" />,
      iconColorClass: 'text-purple-600',
    },
    {
      id: 'activities',
      labelTh: 'กิจกรรม',
      labelEn: 'Activities & Events',
      icon: <Calendar className="w-5 h-5" />,
      iconColorClass: 'text-rose-600',
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex font-['Sarabun',sans-serif]">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Body matching Image 2 */}
      <div className="relative w-full max-w-xs sm:max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-250 ease-out">
        {/* Header Bar matching Image 2 (Deep Teal-Green) */}
        <div className="bg-[#005a43] px-5 py-4 text-white flex items-center justify-between shrink-0 shadow-md">
          <div className="flex items-center gap-3">
            <HospitalLogo size={42} className="border-white/90 bg-white" />
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white leading-tight">
                {lang === 'th' ? 'โรงพยาบาลวชิระภูเก็ต' : 'Vachira Phuket Hospital'}
              </span>
              <span className="text-xs font-medium text-emerald-100/90 leading-tight">
                {lang === 'th' ? 'กลุ่มงานเภสัชกรรม' : 'Pharmacy Department'}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="ปิดเมนู"
            className="p-1.5 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation List items */}
        <div className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
          {menuItems.map((item) => {
            const isActive = currentPage === item.id;
            const hasSub = item.subItems && item.subItems.length > 0;
            const isExpanded = !!expandedMenus[item.id];

            return (
              <div key={item.id} className="space-y-1">
                <div
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group ${
                    isActive
                      ? 'bg-[#ebfaf4] text-emerald-950 font-bold border-l-4 border-emerald-700 shadow-xs'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => {
                      onSelectPage(item.id);
                      onClose();
                    }}
                    className="flex-1 flex items-center gap-3 text-left"
                  >
                    <div
                      className={`shrink-0 transition-transform group-hover:scale-105 ${
                        isActive ? 'text-emerald-800' : item.iconColorClass
                      }`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-sm leading-snug">
                      {lang === 'th' ? item.labelTh : item.labelEn}
                    </span>
                  </button>

                  {hasSub ? (
                    <button
                      type="button"
                      onClick={(e) => toggleExpand(item.id, e)}
                      aria-label={isExpanded ? 'ย่อเมนูย่อย' : 'ขยายเมนูย่อย'}
                      className="p-1.5 rounded-md hover:bg-emerald-100/60 text-slate-400 hover:text-emerald-800 transition-colors"
                    >
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-emerald-700" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                  ) : (
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-colors ${
                        isActive
                          ? 'text-emerald-700'
                          : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                    />
                  )}
                </div>

                {/* Sub Menu List */}
                {hasSub && isExpanded && (
                  <div className="pl-6 pr-1 py-1 space-y-0.5 border-l-2 border-emerald-100 ml-5 my-0.5 animate-in slide-in-from-top-1 duration-150">
                    <button
                      type="button"
                      onClick={() => {
                        onSelectPage(item.id);
                        onClose();
                      }}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold text-emerald-800 hover:bg-emerald-50 flex items-center gap-2 transition-colors border-b border-emerald-100/70 mb-1"
                    >
                      <span className="text-emerald-600 font-bold">➔</span>
                      <span>
                        {lang === 'th'
                          ? `ดูทั้งหมดในหน้า ${item.labelTh}`
                          : `View all ${item.labelEn}`}
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
                              ? 'bg-emerald-100/90 text-emerald-900 font-bold'
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

        {/* Quick Footer inside Drawer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/70 text-xs text-slate-500 flex flex-col gap-1">
          <div className="font-semibold text-slate-700">
            {lang === 'th' ? 'สายด่วนสอบถามข้อมูลยา' : 'Pharmacy Hotline'}
          </div>
          <div>
            076-361-234{' '}
            {lang === 'th'
              ? 'ต่อ 1183 (OPD), 1212 (DIC)'
              : 'ext. 1183, 1212'}
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            Smart Hospital & 3P Safety Certified
          </div>
        </div>
      </div>
    </div>
  );
};

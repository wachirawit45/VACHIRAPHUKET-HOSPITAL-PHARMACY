import React, { useState, useEffect, useRef } from 'react';
import {
  Network,
  Phone,
  MapPin,
  CheckCircle2,
  ChevronRight,
  User,
  LayoutList,
  Columns,
  Building,
  ArrowUp,
} from 'lucide-react';
import { Language } from '../types/pharmacy';

interface StructureUnit {
  id: string;
  name: string;
  head: string;
  description: string;
  responsibilities: string[];
  location: string;
  extension: string;
}

export const STRUCTURE_UNITS: StructureUnit[] = [
  {
    id: 's-1',
    name: 'งานบริการผู้ป่วยนอก',
    head: 'ภญ. พรรณี จารุรัตน์ (หัวหน้างาน)',
    description:
      'ให้บริการคัดกรองใบสั่งยา ตรวจสอบความถูกต้อง จัดและส่งมอบยาผู้ป่วยนอก ด้วยระบบ Smart Queue และหุ่นยนต์จัดยาอัตโนมัติ',
    responsibilities: [
      'คัดกรองความปลอดภัยและความเหมาะสมของใบสั่งยาผู้ป่วยนอก',
      'จัดและตรวจสอบยาด้วยเทคโนโลยีบาร์โค้ด 2 มิติ และหุ่นยนต์จัดยาความเร็วสูง',
      'บริการส่งมอบยาพร้อมให้คำแนะนำการใช้ยาเบื้องต้น',
      'โครงการเติมยา & Health Rider (ส่งยาถึงบ้าน โต๊ะ 41) โทร. 076-361234 ต่อ 1183',
    ],
    location: 'ห้องจ่ายยาผู้ป่วยนอก ชั้น 1 อาคารเฉลิมพระเกียรติฯ',
    extension: '1183, 1184',
  },
  {
    id: 's-2',
    name: 'งานบริการผู้ป่วยใน',
    head: 'ภก. ธีระพงษ์ สันติธรรม (หัวหน้างาน)',
    description:
      'ให้บริการจ่ายยาแบบเฉพาะบุคคลต่อมื้อ (Unit Dose Dispensing System) และห้องจ่ายยาอุบัติเหตุฉุกเฉิน (ER 24 ชั่วโมง)',
    responsibilities: [
      'ตรวจสอบคำสั่งการใช้ยาจากแพทย์ (Medication Order Review)',
      'จัดยาแบบ Unit Dose บรรจุซองพร้อมระบุชื่อผู้ป่วย วันที่ และเวลาทาน',
      'ควบคุมดูแลตู้ยาอัตโนมัติ (Automated Dispensing Cabinet: ADC) ประจำ ICU',
      'ห้องจ่ายยาอุบัติเหตุและฉุกเฉิน (ER) เปิดบริการตลอด 24 ชั่วโมง ต่อ 1180',
    ],
    location: 'ชั้น 2 อาคาร 100 ปี สมเด็จย่า / ห้องจ่ายยา ER ชั้น 1',
    extension: '1180 (ER 24 ชม.), 1240 (IPD)',
  },
  {
    id: 's-3',
    name: 'งานการบริบาลทาง เภสัชกรรมผู้ป่วยนอก',
    head: 'ภญ. สุพรรษา บำรุงจิตต์ (หัวหน้างาน)',
    description:
      'บริบาลเภสัชกรรมเฉพาะโรคแก่ผู้ป่วยนอก ติดตามผลการรักษาและป้องกันปัญหาจากการใช้ยา (Drug-Related Problems)',
    responsibilities: [
      'คลินิกบริบาลเภสัชกรรมผู้ป่วยนอก: คลินิกยาวาร์ฟาริน (Warfarin Clinic)',
      'คลินิกโรคหอบหืดและปอดอุดกั้นเรื้อรัง (Asthma & COPD Clinic) สอนเทคนิคการใช้ยาพ่น',
      'คลินิกโรคไตเรื้อรัง (CKD Clinic) และคลินิกเบาหวาน/ความดันโลหิตสูง',
      'การประเมินและติดตามการเกิดอาการไม่พึงประสงค์จากยา (ADR Monitoring)',
    ],
    location: 'ห้องให้คำปรึกษาด้านยา ชั้น 1 อาคารเฉลิมพระเกียรติฯ',
    extension: '1238',
  },
  {
    id: 's-4',
    name: 'งานการบริบาลทาง เภสัชกรรมผู้ป่วยใน',
    head: 'ภก. ดร. วิศรุต เมธาวุฒิ (หัวหน้างาน)',
    description:
      'เภสัชกรคลินิกร่วมดูแลรักษาผู้ป่วยในหอผู้ป่วยวิกฤตและหอผู้ป่วยสามัญ (Ward Round) ร่วมกับทีมแพทย์',
    responsibilities: [
      'กระทบยอดประวัติยาเดิม (Medication Reconciliation) แรกรับและจำหน่าย',
      'การปรับขนาดยาตามระดับยาในเลือด (Therapeutic Drug Monitoring: TDM) เช่น Vancomycin, Aminoglycosides',
      'การประเมินการทำงานของตับและไตเพื่อปรับขนาดยาอย่างเหมาะสม',
      'การดำเนินงานควบคุมการใช้ยาต้านจุลชีพอย่างสมเหตุผล (Antimicrobial Stewardship: ASP)',
    ],
    location: 'ชั้น 3 อาคารผู้ป่วยวิกฤต',
    extension: '1355',
  },
  {
    id: 's-5',
    name: 'งานบริหารเวชภัณฑ์',
    head: 'ภก. ชวลิต พุทธภูมิ (หัวหน้างาน)',
    description:
      'บริหารจัดการระบบจัดซื้อ คลังเวชภัณฑ์ และการกระจายยาอย่างมีประสิทธิภาพ ควบคุมอุณหภูมิและความชื้นมาตรฐานสากล',
    responsibilities: [
      'จัดซื้อและควบคุมคลังยาและเวชภัณฑ์มิใช่ยา',
      'ควบคุมคลังยาห้องเย็น (Cold Chain 2-8°C) ด้วยระบบเซนเซอร์ IoT แจ้งเตือน 24 ชั่วโมง',
      'บริหารจัดการยาสำรองฉุกเฉินและยาขาดคราว (Drug Shortage Management)',
      'ป้องกันความเสื่อมสภาพและการหมดอายุของยาในคลังเวชภัณฑ์',
    ],
    location: 'ชั้น B อาคารคลังเวชภัณฑ์กลาง',
    extension: '1090',
  },
  {
    id: 's-6',
    name: 'งานผลิตและเคมีบำบัด',
    head: 'ภญ. ภัทรพร ศิริวัฒนา (หัวหน้างาน)',
    description:
      'เตรียมและผสมยาปราศจากเชื้อ ยาเคมีบำบัด และสารอาหารทางหลอดเลือดดำ (TPN) ในห้องสะอาดระดับ Class 100',
    responsibilities: [
      'ผสมยาเคมีบำบัดในตู้ชีวนิรภัย Biological Safety Cabinet Class II Type B2',
      'เตรียมสารอาหารทางหลอดเลือดดำ (Total Parenteral Nutrition: TPN) สำหรับทารกแรกเกิดและผู้ใหญ่',
      'เตรียมยาหยอดตาปราศจากเชื้อเฉพาะราย (Extemporaneous Eye Drops)',
      'การควบคุมความสะอาดและการตรวจเฝ้าระวังเชื้อจุลชีพในห้องสะอาด (Cleanroom)',
    ],
    location: 'ชั้น 4 อาคารมะเร็งวิทยารังสีรักษา',
    extension: '1480',
  },
  {
    id: 's-7',
    name: 'งานเภสัชกรรมปฐมภูมิ',
    head: 'ภก. ธนกฤต ศรีสุข (หัวหน้างาน)',
    description:
      'สนับสนุนระบบยาและบริการเภสัชกรรมในโรงพยาบาลส่งเสริมสุขภาพตำบล (รพ.สต.) เครือข่ายสุขภาพ และงานเยี่ยมบ้าน',
    responsibilities: [
      'ควบคุมมาตรฐานระบบยาใน รพ.สต. และศูนย์บริการสาธารณสุขในเครือข่าย',
      'ร่วมทีมสหวิชาชีพเยี่ยมบ้านผู้ป่วยติดเตียงและผู้ป่วยโรคเรื้อรัง (Home Health Care)',
      'ส่งเสริมการใช้ยาอย่างสมเหตุผลในชุมชน (RDU Community)',
      'ระบบการกระจายยาและการสนับสนุนยาจำเป็นสู่หน่วยบริการปฐมภูมิ',
    ],
    location: 'ชั้น 2 อาคารเวชกรรมสังคม',
    extension: '1155',
  },
  {
    id: 's-8',
    name: 'งานบริการเภสัชสนเทศ',
    head: 'ภญ. รสสุคนธ์ เอกธนสาร (หัวหน้างาน)',
    description:
      'ศูนย์ข้อมูลยา (Drug Information Service: DIS) ให้บริการข้อมูลยาเชิงลึกแก่บุคลากรทางการแพทย์และประชาชน',
    responsibilities: [
      'ตอบข้อซักถามข้อมูลยา (ขนาดยา, อาการไม่พึงประสงค์, อันตรกิริยาระหว่างยา, การใช้ยาในหญิงตั้งครรภ์)',
      'งานคุ้มครองผู้บริโภคด้านยาและผลิตภัณฑ์สุขภาพ',
      'จัดทำคู่มือ บัญชียาโรงพยาบาล และวารสารเภสัชกรรมโรงพยาบาล',
      'เลขานุการคณะกรรมการเภสัชกรรมและการบำบัด (PTC)',
    ],
    location: 'ชั้น 2 อาคารอำนวยการ',
    extension: '1212',
  },
];

export const StructureView: React.FC<{
  lang?: Language;
  initialUnitId?: string | null;
}> = ({ initialUnitId }) => {
  const [selectedUnit, setSelectedUnit] = useState<StructureUnit>(() => {
    if (initialUnitId) {
      const found = STRUCTURE_UNITS.find(
        (u) => u.id === initialUnitId || u.name === initialUnitId
      );
      if (found) return found;
    }
    return STRUCTURE_UNITS[0];
  });

  const [viewMode, setViewMode] = useState<'continuous' | 'focus'>('continuous');
  const unitRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (initialUnitId) {
      const found = STRUCTURE_UNITS.find(
        (u) => u.id === initialUnitId || u.name === initialUnitId
      );
      if (found) {
        setSelectedUnit(found);
        setTimeout(() => {
          const el = unitRefs.current[found.id];
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  }, [initialUnitId]);

  const scrollToUnit = (unit: StructureUnit) => {
    setSelectedUnit(unit);
    if (viewMode === 'continuous') {
      const el = unitRefs.current[unit.id];
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="space-y-6 font-['Sarabun',sans-serif]">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold mb-2 border border-teal-200">
              <Network className="w-4 h-4 text-teal-600" />
              <span>ORGANIZATION STRUCTURE</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              โครงสร้างกลุ่มงานเภสัชกรรม
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              การบริหารงานและการแบ่งส่วนงาน 8 งานหลัก เพื่อความเป็นเลิศด้านเภสัชกรรมบริการและความปลอดภัย 3P Safety
            </p>
          </div>

          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl self-start sm:self-auto border border-slate-200 shrink-0">
            <button
              type="button"
              onClick={() => setViewMode('continuous')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'continuous'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutList className="w-3.5 h-3.5" />
              <span>แสดงข้อมูลต่อเนื่อง</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('focus')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'focus'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Columns className="w-3.5 h-3.5" />
              <span>เลือกดูทีละงาน</span>
            </button>
          </div>
        </div>

        {/* Quick Jump Buttons */}
        <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
          {STRUCTURE_UNITS.map((unit, idx) => {
            const isCurrent = selectedUnit.id === unit.id;
            return (
              <button
                key={unit.id}
                type="button"
                onClick={() => scrollToUnit(unit)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isCurrent
                    ? 'bg-emerald-700 text-white shadow-xs font-bold'
                    : 'bg-slate-50 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200'
                }`}
              >
                {idx + 1}. {unit.name}
              </button>
            );
          })}
        </div>
      </div>

      {viewMode === 'continuous' ? (
        /* Continuous View: All 8 units stacked */
        <div className="space-y-6">
          {STRUCTURE_UNITS.map((unit, idx) => {
            const isSelected = selectedUnit.id === unit.id;
            return (
              <div
                key={unit.id}
                id={`unit-${unit.id}`}
                ref={(el) => {
                  unitRefs.current[unit.id] = el;
                }}
                className={`scroll-mt-24 bg-white rounded-2xl border transition-all p-6 sm:p-7 shadow-sm ${
                  isSelected
                    ? 'border-emerald-500 ring-2 ring-emerald-500/20'
                    : 'border-slate-200'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-emerald-700 text-white font-bold flex items-center justify-center text-sm shadow-xs">
                      {idx + 1}
                    </span>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                        {unit.name}
                      </h2>
                      <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span>หัวหน้างาน: <strong className="text-slate-800">{unit.head}</strong></span>
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedUnit(unit);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="self-start sm:self-auto text-xs text-slate-400 hover:text-emerald-700 flex items-center gap-1 font-medium"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                    <span>กลับขึ้นบน</span>
                  </button>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <p className="text-slate-700 leading-relaxed">
                    {unit.description}
                  </p>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2">
                    <span className="text-xs font-bold text-slate-800 block">
                      ภารกิจและความรับผิดชอบหลัก:
                    </span>
                    {unit.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                      <div>
                        <span className="text-slate-400 block text-[10px]">สถานที่ตั้ง</span>
                        <span className="font-semibold text-slate-800">{unit.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <Phone className="w-4 h-4 text-teal-700 shrink-0" />
                      <div>
                        <span className="text-slate-400 block text-[10px]">โทรศัพท์ภายใน</span>
                        <span className="font-semibold text-slate-800">076-361234 ต่อ {unit.extension}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Focus View: Master-Detail */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-2.5">
            {STRUCTURE_UNITS.map((unit, idx) => {
              const isSelected = selectedUnit.id === unit.id;
              return (
                <button
                  key={unit.id}
                  type="button"
                  onClick={() => setSelectedUnit(unit)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-emerald-50 border-emerald-500 shadow-xs ring-1 ring-emerald-500'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <span
                      className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold shrink-0 ${
                        isSelected
                          ? 'bg-emerald-700 text-white'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <div className="min-w-0">
                      <h3
                        className={`font-bold text-xs sm:text-sm truncate ${
                          isSelected ? 'text-emerald-950' : 'text-slate-900'
                        }`}
                      >
                        {unit.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 truncate flex items-center gap-1 mt-0.5">
                        <User className="w-3 h-3 text-slate-400 shrink-0" />
                        <span>{unit.head}</span>
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 ${
                      isSelected ? 'text-emerald-700' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  หน่วยงานบริการภายในกลุ่มงาน
                </span>
                <h2 className="text-xl font-bold text-slate-900 mt-2">
                  {selectedUnit.name}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  หัวหน้างาน: <strong className="text-slate-800">{selectedUnit.head}</strong>
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 mb-2">บทบาทและหน้าที่ความรับผิดชอบ:</h4>
                <p className="text-xs text-slate-700 mb-3 leading-relaxed">
                  {selectedUnit.description}
                </p>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2">
                  <span className="text-xs font-bold text-slate-800 block mb-1">
                    ภารกิจหลัก (Key Functions):
                  </span>
                  {selectedUnit.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl">
                  <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">สถานที่ตั้ง</span>
                    <span className="font-semibold text-slate-800">{selectedUnit.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl">
                  <Phone className="w-4 h-4 text-teal-700 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">โทรศัพท์ภายใน</span>
                    <span className="font-semibold text-slate-800">076-361234 ต่อ {selectedUnit.extension}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

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
import { ExternalLink } from 'lucide-react';

interface StructureUnit {
  id: string;
  name: string;
  head: string;
  responsibilities: string[];
description?: {
  text: string;
  type?: 'bold' | 'heading';
}[];
  extension: string;
  driveUrl?: string;
  imageUrl?: string;
  
}

<div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
  <h2 className="text-xl font-bold text-slate-900">
    โครงสร้างกลุ่มงานเภสัชกรรม
  </h2>
</div>
export const STRUCTURE_UNITS: StructureUnit[] = [
{
  id: 's-1',
  name: 'โครงสร้างองค์กร',
  head: 'หัวหน้ากลุ่มงานฯ (ภก.สมนึก ฮาเส็ม)',
  responsibilities: [
    '',
  ],
  extension: '1183, 1184',
  imageUrl: 'https://scontent.furt1-1.fna.fbcdn.net/v/t39.30808-6/854780690_1135769688963489_1144044205535356898_n.jpg?stp=dst-jpg_tt6&cstp=mx1249x724&ctp=s1249x724&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uRkih_YqDE4Q7kNvwEMkswy&_nc_oc=AdoabS7N3XuZxIkeQLKW2_7EUI1iHu1bOSR9a_Jz2lnxt5ezrxiXiT-s_A3cbG2fhwE&_nc_zt=23&_nc_ht=scontent.furt1-1.fna&_nc_gid=nAzpkLFM0k2CkomTe5ehzg&_nc_ss=7a2a8&oh=00_AQNPgHn21Ifm2MHOS1XJpsc_5GGENhG0M6NLay9jKgd8gg&oe=6ADB8A0C',
},
  
{
  id: 's-2',
  name: 'งานบริหารเวชภัณฑ์',
  head: 'ภก.ไพรัช สุทธิพัฒนกิจ',

responsibilities: [],

description: [
  { text: '1. จัดซื้อยา' },
  { text: '2. E-Bidding' },
  { text: '3. บริหารคลังยา' },
  { text: '4. งานธุรการกลุ่มงานเภสัชกรรม' },

  { text: 'เภสัชกร 7 คน' },
  { text: 'จัดซื้อ', type: 'heading' },
  { text: '-เภสัชกร 4 คน' },
  { text: 'เจ้าพนักงานฯ 2 คน' },
  { text: 'อื่นๆ 9 คน' },

  { text: 'คลังยา', type: 'heading' },
  { text: '-เภสัชกร 3 คน' },
  { text: '-เจ้าพนักงานฯ 4 คน' },
  { text: '-อื่นๆ 2 คน' },
],
  extension: '1480',
  driveUrl: '',
},

   {
    id: 's-3',
    name: 'งานบริการจ่ายยาผู้ป่วยใน/บริบาลเภสัชกรรมผู้ป่วยใน',
    head: 'ภญ.จิราภรณ์ สุทธิพัฒนกิจ',
    responsibilities: [],

    description: [
  { text: '1. บริการจ่ายยาผู้ป่วยในและ OPD คุณพุ่ม' },
  { text: '2. บริบาลเภสัชกรรมผู้ป่วยใน 35 หอผู้ป่วย' },
  { text: '3. คัดกรองความเหมะสมของคำสั่งใช้ยาผู้ป่วยใน' },
  { text: '4. ติดตาม ADR/ADE/MR' },

  { text: 'เภสัชกร 13 คน', type: 'bold' },
  { text: 'IPD', type: 'heading' },
  { text: '-เภสัชกร 11 คน' },
  { text: 'อื่นๆ 14 คน' },
  { text: 'คุณพุ่ม', type: 'heading' },
  { text: '-เภสัชกร 2 คน' },
  { text: '-เจ้าพนักงานฯ 2 คน' },
  { text: '-อื่นๆ 2 คน' },
],
    extension: '1480',
     driveUrl:
    '',
  },

   {
    id: 's-4',
    name: 'งานผลิตยา',
    head: 'ภก.ชาติชาย  หวังแต่ธรรม',
    responsibilities: [],
        description: [
  { text: '1. เตรียมยา TPN' },
  { text: '2. เตรียมยาเคมีบำบัด' },
  { text: '3. เตรียมยาเฉพาะราย' },
  { text: '4. เตรียมยา small dose' },
  { text: '5. บริบาลเภสัชกรรมผู้ป่วย Solid tumor และคลินิกกัญชาทางการแพทย์' },

  { text: 'เภสัชกร 5 คน', type: 'bold' },
  { text: '-เจ้าพนักงานฯ 5 คน' },
  { text: '-อื่นๆ 4 คน' },
],
    extension: '1480',
     driveUrl:
    '',
  },

   {
    id: 's-5',
    name: 'งานบริการจ่ายยาผู้ป่วยนอก/บริบาลเภสัชกรรมผู้ป่วยนอก',
    head: 'ภญ.วรภา วราธนกุล',
    responsibilities: [],
        description: [
  { text: '1. บริการจ่ายยาผู้ป่วยนอก' },
  { text: '2. คัดกรองความเหมะสมของคำสั่งใช้ยาผู้ป่วยนอก' },
  { text: '3. บริบาลเภสัชกรรมผู้ป่วยโรคเรื้อรัง เช่น คลินิกวาร์-ฟาริน คลินิกหัวใจล้มเหลว เบาหวาน หอบหืด ไต วัณโรค เอดส์ เป็นต้น (ทั้งหมด 11 คลินิก)' },

  { text: 'เภสัชกร 18 คน', type: 'bold' },
  { text: '-เจ้าพนักงานฯ 15 คน' },
  { text: '-อื่นๆ 26 คน' },
],
    extension: '1480',
     driveUrl:
    '',
  },

   {
    id: 's-6',
    name: 'งานเภสัชกรรมคลินิกและพัฒนาระบบยา',
    head: 'ภญ.วิลาสินีย์ สกุลแพทย์',
    responsibilities: [],
        description: [
  { text: '1. บริบาลเภสัชกรรมผู้ป่วยใน 2 หอผู้ป่วย' },
  { text: '2. ระบบยา' },
  { text: '3. ประเมินการใช้ยา DUE' },
  { text: '4. ออกแบบระบบและติดตามการใช้ยาความเสี่ยงสูง' },
  { text: '5. ติดตามการดำเนินงาน MedicationReconciliation' },

  { text: 'เภสัชกร 6 คน', type: 'bold' },
  { text: '-เจ้าพนักงานฯ 1 คน' },
],
    extension: '1480',
     driveUrl:
    '',
  },

     {
    id: 's-7',
    name: 'งานเภสัชสนเทศและข้อมูลยา',
    head: 'ภก.อภิชาติ จิตต์ซื่อ',
    responsibilities: [],
        description: [
  { text: '1. บริการสารสนเทศและข้อมูลยา' },
  { text: '2. จัดทำ monograph' },
  { text: '3. จัดทำหนังสือจดหมายข่าว' },
  { text: '4. เป็นวิทยากรให้ความรู้ด้านยา' },
  { text: '5. รับฝึกงาน นศภ.' },
  { text: 'เภสัชกร 1 คน', type: 'bold' },
],
    extension: '1480',
     driveUrl:
    '',
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

  const [viewMode, setViewMode] = useState<'continuous' | 'focus'>('focus');
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
              โครงสร้างองค์กร กลุ่มงานเภสัชกรรม โรงพยาบาลวชิระภูเก็ต

            </p>
          </div>
        </div>       
      </div>
{/* รูปแผนผังโครงสร้างองค์กร */}
<div className="my-8 flex justify-center px-2 sm:px-4">
  <div className="w-full max-w-4xl overflow-hidden rounded-xl">
    <img
      src="https://scontent.furt1-1.fna.fbcdn.net/v/t39.30808-6/855166376_1135853215621803_6758425189385968408_n.jpg?stp=dst-jpg_tt6&cstp=mx2000x1414&ctp=s2000x1414&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=fBMk6WFXi_YQ7kNvwFg_pJT&_nc_oc=AdpYN_wz2HR_-MoIGjg98bid9CictUr7Mqd_uFaaN9kJmWR-YC5BrGKBIGsugSlf7bU&_nc_zt=23&_nc_ht=scontent.furt1-1.fna&_nc_gid=2IolsI6iw-lpwEa4wtCyQw&_nc_ss=7a2a8&oh=00_AQPp8yVh5AKbnX657MNbQvWwiLF4cMg7-OP2qYbA99DKNw&oe=6ADB92BD"
      alt="โครงสร้างองค์กร กลุ่มงานเภสัชกรรม โรงพยาบาลวชิระภูเก็ต"
      className="mx-auto h-auto w-full object-contain"
    />
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
                </div>
                <div className="space-y-4 text-xs sm:text-sm">
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
                <h2 className="text-xl font-bold text-slate-900 mt-2">
                  {selectedUnit.name}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  หัวหน้างาน: <strong className="text-slate-800">{selectedUnit.head}</strong>
                </p>
              </div>
              <div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2">

                  {selectedUnit.driveUrl && (
              <div className="mt-4">
                <a
                   href={selectedUnit.driveUrl}
                    target="_blank"
                  rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
                     <ExternalLink size={16} />
                     เปิดเอกสาร Google Slides
                </a>
             </div>
                )}
                  {selectedUnit.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}

{selectedUnit.description && (
  <div className="mt-4 rounded-xl bg-emerald-50 border border-emerald-200 p-4 space-y-2">
    {selectedUnit.description.map((item, index) => (
      <p
        key={index}
        className={
          item.type === 'heading'
            ? 'text-sm font-bold text-slate-800 underline underline-offset-4 mt-3'
            : item.type === 'bold'
              ? 'text-sm font-bold text-slate-800'
              : 'text-sm text-slate-700'
        }
      >
        {item.text}
      </p>
    ))}
  </div>
)}

                                {/* รูปภาพของหน่วยงาน */}
              {selectedUnit.imageUrl ? (
                <div className="mt-4 rounded-xl border border-slate-200 p-2">
                  <img
                    src={selectedUnit.imageUrl}
                    alt={selectedUnit.name}
                    className="block w-full h-auto max-h-[400px] object-contain rounded-lg"
                    onError={(e) => {
                      console.error('โหลดรูปภาพไม่สำเร็จ:', selectedUnit.imageUrl);
                      e.currentTarget.alt = 'ไม่สามารถโหลดรูปภาพได้';
                    }}
                  />
                </div>
              ) : (
                <p className="mt-4 text-sm text-slate-500">
                  ยังไม่มีรูปภาพของหน่วยงานนี้
                </p>
              )}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

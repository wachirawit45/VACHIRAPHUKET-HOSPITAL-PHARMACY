import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  Pill,
  Search,
  ShieldAlert,
  AlertTriangle,
  Calculator,
  Calendar,
  Clock,
  Sparkles,
  BookOpen,
  FileText,
  Baby,
  Users,
  CheckCircle2,
  HelpCircle,
  Download,
  Leaf,
  Layers,
  ChevronRight,
  ShieldCheck,
  Syringe,
  Activity,
  HeartPulse,
  Flame,
  FileSpreadsheet,
  AlertOctagon,
  Droplet,
  Sun,
  Eye,
  Wind,
  ListFilter,
  ArrowUp,
  Bookmark,
  Share2,
  LayoutList,
  Columns,
} from 'lucide-react';
import { Language } from '../types/pharmacy';

export interface DrugTopicItem {
  id: string;
  category: string;
  categoryOrder: number;
  title: string;
  subtitle?: string;
  badge?: string;
  content: React.ReactNode;
}

export const DrugInformationView: React.FC<{
  lang?: Language;
  initialTopicId?: string | null;
}> = ({ initialTopicId }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    initialTopicId || 'tmt'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('ทั้งหมด');
  const [viewMode, setViewMode] = useState<'continuous' | 'focus'>('continuous');

  // Warfarin Initial Dose Calculator State
  const [warfAge, setWarfAge] = useState<number | ''>(60);
  const [warfWeight, setWarfWeight] = useState<number | ''>(55);
  const [warfTargetInr, setWarfTargetInr] = useState<'2.0-3.0' | '2.5-3.5'>('2.0-3.0');
  const [warfRisk, setWarfRisk] = useState<boolean>(false);

  // Pediatric dose calculator state
  const [pediaWeight, setPediaWeight] = useState<number | ''>(12);
  const [pediaDrug, setPediaDrug] = useState<'para120' | 'para250' | 'ibup100' | 'amox250'>('para120');

  // Fatal DDI checker query
  const [ddiQuery, setDdiQuery] = useState('');

  // Drug-Herb interaction search query
  const [herbQuery, setHerbQuery] = useState('');

  // Special technique active tab
  const [techniqueTab, setTechniqueTab] = useState<'mdi' | 'turbo' | 'respimat' | 'pen' | 'patch' | 'eye'>('mdi');

  // Ref to highlight elements
  const topicRefs = useRef<Record<string, HTMLElement | null>>({});

  // Scroll to topic if requested
  useEffect(() => {
    if (initialTopicId) {
      setSelectedTopicId(initialTopicId);
      // Wait for DOM
      setTimeout(() => {
        const el = topicRefs.current[initialTopicId];
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [initialTopicId]);

  const scrollToTopic = (topicId: string) => {
    setSelectedTopicId(topicId);
    if (viewMode === 'continuous') {
      const el = topicRefs.current[topicId];
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const calculatedWarfarinDose = useMemo(() => {
    let baseDose = 3;
    let note = 'ขนาดแนะนำเริ่มต้นปกติ 3 - 5 mg/วัน (เฉลี่ย 3 mg สำหรับคนไทย)';

    const ageNum = Number(warfAge) || 60;
    const weightNum = Number(warfWeight) || 55;

    if (ageNum >= 65 || weightNum < 50 || warfRisk) {
      baseDose = 2.5;
      note = 'ผู้ป่วยสูงอายุ / น้ำหนัก < 50 kg / มีความเสี่ยงต่อเลือดออก: เริ่ม 2.0 - 2.5 mg/วัน';
    } else if (ageNum < 50 && weightNum > 70) {
      baseDose = 5;
      note = 'ผู้ป่วยอายุน้อยกว่า 50 ปี ร่างกายสมบูรณ์: สามารถเริ่ม 4 - 5 mg/วัน';
    }

    return { dose: baseDose, note };
  }, [warfAge, warfWeight, warfTargetInr, warfRisk]);

  const calculatedPediatricDose = useMemo(() => {
    const w = Number(pediaWeight) || 0;
    if (w <= 0) return { doseMg: '0 mg', mlText: 'กรุณากรอกน้ำหนักตัว' };

    if (pediaDrug === 'para120') {
      const doseMg = Math.round(w * 10);
      const doseMgMax = Math.round(w * 15);
      const mlMin = (doseMg / 24).toFixed(1);
      const mlMax = (doseMgMax / 24).toFixed(1);
      return {
        doseMg: `${doseMg} - ${doseMgMax} mg/ครั้ง`,
        mlText: `${mlMin} - ${mlMax} mL (ช้อนชา: ${(Number(mlMin) / 5).toFixed(1)} - ${(Number(mlMax) / 5).toFixed(1)} ชช.) ทุก 4-6 ชม.`,
      };
    } else if (pediaDrug === 'para250') {
      const doseMg = Math.round(w * 10);
      const doseMgMax = Math.round(w * 15);
      const mlMin = (doseMg / 50).toFixed(1);
      const mlMax = (doseMgMax / 50).toFixed(1);
      return {
        doseMg: `${doseMg} - ${doseMgMax} mg/ครั้ง`,
        mlText: `${mlMin} - ${mlMax} mL ทุก 4-6 ชม.`,
      };
    } else if (pediaDrug === 'ibup100') {
      const doseMg = Math.round(w * 10);
      const ml = (doseMg / 20).toFixed(1);
      return {
        doseMg: `${doseMg} mg/ครั้ง (10 mg/kg)`,
        mlText: `${ml} mL ทานหลังอาหารทันที ทุก 6-8 ชม. (ห้ามใช้ในเด็ก < 6 เดือน หรือสงสัยไข้เลือดออก)`,
      };
    } else {
      const totalDailyMg = Math.round(w * 50);
      const perDoseMg = Math.round(totalDailyMg / 3);
      const ml = (perDoseMg / 50).toFixed(1);
      return {
        doseMg: `${totalDailyMg} mg/วัน (แบ่งทาน 3 ครั้ง ละ ${perDoseMg} mg)`,
        mlText: `ครั้งละ ${ml} mL วันละ 3 ครั้ง หลังอาหาร`,
      };
    }
  }, [pediaWeight, pediaDrug]);

  const FATAL_DDI_LIST = [
    {
      drugA: 'Simvastatin / Atorvastatin (High dose)',
      drugB: 'Clarithromycin / Erythromycin / Ketoconazole',
      mechanism: 'CYP3A4 Inhibition รุนแรง',
      severity: 'Fatal / Major',
      effect: 'ระดับยาลดไขมันสูงขึ้นอย่างมาก เสี่ยงเกิด Rhabdomyolysis กล้ามเนื้อลายสลาย ไตวายเฉียบพลัน',
      management: 'หยุดสแตตินชั่วคราวระหว่างให้ยาฆ่าเชื้อ หรือเปลี่ยนเป็น Rosuvastatin/Pravastatin',
    },
    {
      drugA: 'Warfarin',
      drugB: 'NSAIDs (เช่น Ibuprofen, Diclofenac, Naproxen)',
      mechanism: 'Platelet inhibition + Gastric mucosal injury',
      severity: 'Major',
      effect: 'เพิ่มความเสี่ยง Major Upper GI Bleeding เลือดออกทางเดินอาหารรุนแรง 3-5 เท่า',
      management: 'หลีกเลี่ยงการใช้ร่วมกัน ใช้ Paracetamol หรือ Tramadol (ระยะสั้น) แทน',
    },
    {
      drugA: 'Potassium Chloride (KCl / Kalimate)',
      drugB: 'Spironolactone + ACEI / ARB (Triple blockade)',
      mechanism: 'Potassium retention additive',
      severity: 'Fatal',
      effect: 'ภาวะ Hyperkalemia รุนแรง หัวใจเต้นผิดจังหวะชนิด Cardiac arrest',
      management: 'ติดตาม Serum K+ สม่ำเสมอ ห้ามเสริม K+ หากใช้ Spironolactone ร่วมกับ ACEI/ARB',
    },
    {
      drugA: 'Colchicine',
      drugB: 'Clarithromycin (ในผู้ป่วยโรคตับหรือไตเสื่อม)',
      mechanism: 'P-gp and CYP3A4 inhibition',
      severity: 'Fatal',
      effect: 'เกิดพิษจาก Colchicine รุนแรง กดไขกระดูก อวัยวะล้มเหลวหลายระบบ เสียชีวิตได้',
      management: 'ห้ามใช้ร่วมกันเด็ดขาด (Contraindicated) ในผู้ป่วย Renal/Hepatic impairment',
    },
    {
      drugA: 'Digoxin',
      drugB: 'Amiodarone / Verapamil / Quinidine',
      mechanism: 'P-gp inhibition ลด Renal clearance',
      severity: 'Major',
      effect: 'ระดับ Digoxin ในเลือดเพิ่มขึ้น 2 เท่า เกิด Digoxin toxicity หัวใจเต้นช้า คลื่นไส้ ตาพร่า',
      management: 'ลดขนาด Digoxin ลง 50% ทันทีเมื่อเริ่ม Amiodarone และเจาะตรวจระดับยาในเลือด',
    },
    {
      drugA: 'Methotrexate (High dose)',
      drugB: 'NSAIDs / Cotrimoxazole / Penicillins',
      mechanism: 'แย่งการขับยาทางไต และแย่งจับ Protein binding',
      severity: 'Major / Fatal',
      effect: 'ระดับ Methotrexate พุ่งสูง เกิด Bone marrow suppression เกล็ดเลือดและเม็ดเลือดขาวต่ำวิกฤต',
      management: 'ห้ามใช้ NSAIDs ในช่วงที่ได้รับ Methotrexate ขนาดสูง',
    },
  ];

  const DRUG_HERB_INTERACTIONS = [
    {
      herb: 'ฟ้าทะลายโจร (Andrographis paniculata)',
      drug: 'Warfarin, Aspirin, Clopidogrel, NOACs',
      effect: 'ฟ้าทะลายโจรมีฤทธิ์ยับยั้งการเกาะกลุ่มของเกล็ดเลือด เสริมฤทธิ์ยาต้านการแข็งตัวของเลือด เสี่ยงเลือดออกผิดปกติ',
      recommendation: 'หลีกเลี่ยงการใช้ร่วมกัน หรือปรึกษาเภสัชกร/แพทย์ก่อนรับประทาน',
    },
    {
      herb: 'สารสกัดใบแปะก๊วย (Ginkgo biloba)',
      drug: 'Aspirin, Warfarin, NSAIDs',
      effect: 'ยับยั้ง Platelet Activating Factor (PAF) เพิ่มความเสี่ยงเกิด Subdural hematoma และเลือดออกในช่องกะโหลกศีรษะ',
      recommendation: 'หยุดรับประทานก่อนผ่าตัดอย่างน้อย 1-2 สัปดาห์ และห้ามใช้ร่วมกับยาต้านการแข็งตัวของเลือด',
    },
    {
      herb: 'โสม (Ginseng)',
      drug: 'ยาลดน้ำตาลในเลือด (Metformin, Glipizide, Insulin)',
      effect: 'เสริมฤทธิ์ลดน้ำตาลในเลือด เกิดภาวะ Hypoglycemia รุนแรง เหงื่อแตก ใจสั่น หมดสติ',
      recommendation: 'ติดตามระดับน้ำตาลในเลือดอย่างใกล้ชิด',
    },
    {
      herb: 'เซนต์จอห์นเวิร์ต (St. John’s Wort)',
      drug: 'Cyclosporine, Tacrolimus, ยาคุมกำเนิด, ยาต้านไวรัส HIV',
      effect: 'Potent CYP3A4 & P-gp Inducer ทำให้ระดับยาสำคัญลดลงอย่างมาก อวัยวะที่ปลูกถ่ายถูกปฏิเสธ หรือคุมกำเนิดล้มเหลว',
      recommendation: 'ห้ามรับประทานร่วมกันเด็ดขาด (Contraindicated)',
    },
    {
      herb: 'กระเทียมสกัดเข้มข้น (Garlic extract)',
      drug: 'Warfarin, Direct Oral Anticoagulants',
      effect: 'ต้านการเกาะกลุ่มเกล็ดเลือด เสริมฤทธิ์ยาต้านการแข็งตัวของเลือด',
      recommendation: 'หลีกเลี่ยงการทานผลิตภัณฑ์เสริมอาหารกระเทียมขนาดสูง',
    },
    {
      herb: 'กัญชาและสารสกัด CBD/THC',
      drug: 'Warfarin, ยาระงับประสาท, ยาต้านชัก (Clobazam)',
      effect: 'CBD ยับยั้ง CYP2C9 ทำให้ค่า INR ของ Warfarin สูงขึ้นอย่างรวดเร็ว เสี่ยงเลือดออกในสมอง',
      recommendation: 'ต้องตรวจติดตามค่า INR ภายใน 3-5 วันหลังจากเริ่มใช้ผลิตภัณฑ์กัญชา',
    },
  ];

  const filteredDdi = FATAL_DDI_LIST.filter(
    (item) =>
      item.drugA.toLowerCase().includes(ddiQuery.toLowerCase()) ||
      item.drugB.toLowerCase().includes(ddiQuery.toLowerCase()) ||
      item.effect.toLowerCase().includes(ddiQuery.toLowerCase())
  );

  const filteredHerbs = DRUG_HERB_INTERACTIONS.filter(
    (item) =>
      item.herb.toLowerCase().includes(herbQuery.toLowerCase()) ||
      item.drug.toLowerCase().includes(herbQuery.toLowerCase()) ||
      item.effect.toLowerCase().includes(herbQuery.toLowerCase())
  );

  const TOPIC_ITEMS: DrugTopicItem[] = [
    // หมวด 1: บัญชียาและรหัสยา
    {
      id: 'huahin-form',
      category: 'บัญชียาและรหัสยา',
      categoryOrder: 1,
      title: 'บัญชียาโรงพยาบาลหัวหิน',
      subtitle: 'รายการยาและแนวทางการใช้ยาเครือข่ายโรงพยาบาลหัวหิน',
      badge: 'Formulary',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <p className="leading-relaxed">
            รายการยาในบัญชียาโรงพยาบาลหัวหิน สำหรับบุคลากรทางการแพทย์ใช้เทียบเคียงรายการยาข้ามเครือข่ายและระบบส่งต่อผู้ป่วยเขตสุขภาพ
          </p>
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-2">
            <span className="font-bold text-emerald-950 block">เอกสารบัญชียาโรงพยาบาลหัวหิน ฉบับปรับปรุง:</span>
            <p className="text-emerald-900 text-xs">
              ประกอบด้วยรายการยาผู้ป่วยนอก (OPD), ผู้ป่วยใน (IPD), ยาช่วยชีวิตฉุกเฉิน, ยาเคมีบำบัด และรายการยา High Alert Drug
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => alert('ดาวน์โหลดคู่มือบัญชียาโรงพยาบาลหัวหิน (PDF) เรียบร้อยแล้ว')}
                className="px-3.5 py-1.5 bg-emerald-700 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 hover:bg-emerald-800 transition-colors shadow-2xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>ดาวน์โหลดบัญชียาหัวหิน (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'tmt',
      category: 'บัญชียาและรหัสยา',
      categoryOrder: 1,
      title: 'รหัส TMT ยาโรงพยาบาลวชิระภูเก็ต',
      subtitle: 'Thai Medicines Terminology (TMT) รหัสมาตรฐานยาของโรงพยาบาลวชิระภูเก็ต',
      badge: 'TMT 2569',
      content: (
        <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            ระบบรหัสมาตรฐานยาแห่งชาติ Thai Medicines Terminology (TMT) เพื่อการเบิกจ่ายและเชื่อมโยงระบบเวชระเบียนอิเล็กทรอนิกส์ (CPOE/HIS) ของโรงพยาบาลวชิระภูเก็ต
          </p>
          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">รหัส TMT (TPU)</th>
                  <th className="p-3">ชื่อสามัญทางยา (Generic Name)</th>
                  <th className="p-3">ชื่อการค้าและความแรง</th>
                  <th className="p-3">สถานะบัญชียา</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-emerald-800">100234</td>
                  <td className="p-3 font-sans">Meropenem trihydrate</td>
                  <td className="p-3 font-sans">Meronem® 1 g powder for inj.</td>
                  <td className="p-3 font-sans text-rose-700 font-bold">ยาควบคุม DUE (จ.2)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-emerald-800">105678</td>
                  <td className="p-3 font-sans">Enoxaparin sodium</td>
                  <td className="p-3 font-sans">Clexane® 40 mg/0.4 mL syringe</td>
                  <td className="p-3 font-sans text-amber-700 font-bold">High Alert Drug</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-emerald-800">108912</td>
                  <td className="p-3 font-sans">Warfarin sodium</td>
                  <td className="p-3 font-sans">Mafrin® 3 mg tablet</td>
                  <td className="p-3 font-sans text-emerald-700 font-bold">บัญชียาหลักแห่งชาติ (ก)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-emerald-800">112450</td>
                  <td className="p-3 font-sans">Human Albumin 20%</td>
                  <td className="p-3 font-sans">Albunorm® 20% 50 mL infusion</td>
                  <td className="p-3 font-sans text-rose-700 font-bold">ยาควบคุม DUE (ค)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: 'rphst-form',
      category: 'บัญชียาและรหัสยา',
      categoryOrder: 1,
      title: 'บัญชียาโรงพยาบาลส่งเสริมสุขภาพตำบล',
      subtitle: 'กรอบรายการยาสำหรับหน่วยบริการปฐมภูมิ และ รพ.สต.',
      badge: 'Primary Care',
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-700">
          <p className="leading-relaxed">
            กรอบรายการยาที่ให้มีได้ในโรงพยาบาลส่งเสริมสุขภาพตำบล (รพ.สต.) ตามเกณฑ์กระทรวงสาธารณสุข เพื่อการดูแลรักษาโรคทั่วไปและโรคเรื้อรัง (เบาหวาน, ความดันโลหิตสูง)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">กลุ่มยาโรคเรื้อรัง (NCDs):</span>
              <p className="text-slate-600">Amlodipine 5mg, Enalapril 20mg, Metformin 500mg, Glipizide 5mg, Simvastatin 20mg, Losartan 50mg</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-bold text-slate-900 block mb-1">กลุ่มยาช่วยชีวิตฉุกเฉิน:</span>
              <p className="text-slate-600">Adrenaline injection, CPM injection, Salbutamol nebule, Dextrose 50%, Diazepam rectiole</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'r2-form',
      category: 'บัญชียาและรหัสยา',
      categoryOrder: 1,
      title: 'แบบฟอร์มยาบัญชี R2 (บัญชี จ.2)',
      subtitle: 'ยากลุ่มพิเศษที่มีเงื่อนไขการเบิกจ่ายตามโครงการพิเศษ สปสช.',
      badge: 'Special Access',
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-700">
          <p className="leading-relaxed">
            รายการยาบัญชี จ.(2) หรือ R2 เป็นยาจำเป็นสำหรับโรคเฉพาะที่มีค่าใช้จ่ายสูงมาก เช่น Botulinum toxin, Docetaxel, Trastuzumab, Pegfilgrastim, Erythropoietin
          </p>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-2">
            <span className="font-bold text-slate-900 block">ขั้นตอนการขออนุมัติยาบัญชี จ.(2):</span>
            <p className="text-slate-600">1. แพทย์ผู้เชี่ยวชาญลงทะเบียนผู้ป่วยและประเมินเกณฑ์ในระบบ e-Claim สปสช.</p>
            <p className="text-slate-600">2. แนบเอกสารผลการตรวจทางพยาธิวิทยา (Pathology) หรือผลตรวจทางพันธุกรรม (Genetic Biomarker)</p>
            <p className="text-slate-600">3. เภสัชกรงานบริการผู้ป่วยนอก/ในตรวจสอบสิทธิและความถูกต้องก่อนส่งมอบยา</p>
            <button
              type="button"
              onClick={() => alert('ดาวน์โหลดแบบฟอร์มขออนุมัติยาบัญชี จ.(2) เรียบร้อย')}
              className="mt-2 px-3 py-1.5 bg-slate-800 text-white rounded-lg text-xs font-bold inline-flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>ดาวน์โหลดแบบฟอร์มยา จ.(2)</span>
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 'nlem-list',
      category: 'บัญชียาและรหัสยา',
      categoryOrder: 1,
      title: 'บัญชียาหลักแห่งชาติ (National List of Essential Medicines: NLEM)',
      subtitle: 'กรอบบัญชียา ก, ข, ค, ง, จ(1), จ(2) และการใช้ยาอย่างสมเหตุผล',
      badge: 'NLEM Official',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <p className="leading-relaxed">
            บัญชียาหลักแห่งชาติเป็นรายการยาที่จำเป็นต่อการป้องกันและรักษาโรคของประชาชนคนไทย เพื่อส่งเสริมการใช้ยาอย่างสมเหตุผล (Rational Drug Use: RDU)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
              <span className="font-bold text-emerald-950 block">บัญชี ก:</span>
              <p className="text-emerald-900">ยาจำเป็นพื้นฐานที่ทุกสถานบริการต้องมี รักษาโรคที่พบบ่อย ปลอดภัยสูง ราคาประหยัด</p>
            </div>
            <div className="p-3 bg-teal-50 border border-teal-200 rounded-xl">
              <span className="font-bold text-teal-950 block">บัญชี ข:</span>
              <p className="text-teal-900">ยาใช้ทดแทนยาในบัญชี ก เมื่อผู้ป่วยแพ้ยาหรือใช้ยา ก แล้วไม่ได้ผล</p>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <span className="font-bold text-blue-950 block">บัญชี ค:</span>
              <p className="text-blue-900">ยาที่ต้องใช้โดยแพทย์เฉพาะทาง หรือต้องอาศัยการตรวจวินิจฉัยพิเศษ</p>
            </div>
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
              <span className="font-bold text-amber-950 block">บัญชี ง:</span>
              <p className="text-amber-900">ยาราคาแพง หรือมีพิษภัย ต้องมีแนวทางกำกับการใช้ยาอย่างใกล้ชิด</p>
            </div>
            <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl">
              <span className="font-bold text-purple-950 block">บัญชี จ(1):</span>
              <p className="text-purple-900">ยากำพร้า (Orphan Drugs) สำหรับโรคหายาก หรือยาต้านพิษ (Antidote)</p>
            </div>
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl">
              <span className="font-bold text-rose-950 block">บัญชี จ(2):</span>
              <p className="text-rose-900">ยามูลค่าสูงพิเศษ มีเงื่อนไขการใช้ตามโครงการกำกับการใช้ยา สปสช.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'ned-list',
      category: 'บัญชียาและรหัสยา',
      categoryOrder: 1,
      title: 'บัญชียานอกบัญชียาหลักแห่งชาติ (Non-Essential Drug: NED)',
      subtitle: 'รายการยาและนโยบายกำกับการสั่งใช้ยานอกบัญชียาหลักแห่งชาติ',
      badge: 'NED Policy',
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-700">
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-2">
            <span className="font-bold text-amber-950 block">นโยบายกำกับการสั่งใช้ยา NED โรงพยาบาลวชิระภูเก็ต:</span>
            <p className="text-amber-900 text-xs leading-relaxed">
              แพทย์ผู้สั่งใช้ยาต้องระบุเหตุผลความจำเป็นในการสั่งใช้ยา NED ทุกครั้งในระบบใบสั่งยา (CPOE) ตามแนวทางคณะกรรมการ PTC เพื่อให้การใช้ยาเป็นไปอย่างคุ้มค่าและมีประสิทธิภาพสูงสุด
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'ned-waiver',
      category: 'บัญชียาและรหัสยา',
      categoryOrder: 1,
      title: 'ยานอกบัญชียาหลักแห่งชาติ (NED) ที่จำเป็นต้องใช้ โดยผู้ป่วยไม่ต้องชำระเงิน',
      subtitle: 'เกณฑ์การยกเว้นการชำระเงินค่ายา NED ตามข้อบ่งชี้ทางการแพทย์ที่จำเป็น',
      badge: 'Free NED Waiver',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <p className="leading-relaxed">
            ผู้ป่วยสิทธิหลักประกันสุขภาพถ้วนหน้า (บัตรทอง) หรือสิทธิประกันสังคม มีสิทธิได้รับยา NED โดยไม่ต้องชำระเงิน หากเข้าเกณฑ์ข้อบ่งใช้ดังต่อไปนี้:
          </p>
          <div className="space-y-2.5">
            <div className="p-3.5 bg-emerald-50 border border-emerald-300 rounded-xl">
              <span className="font-bold text-emerald-950 block text-xs mb-1">
                เกณฑ์ข้อที่ 1: เกิดอาการแพ้ยาในบัญชียาหลักอย่างรุนแรง
              </span>
              <p className="text-emerald-900 text-xs">
                ผู้ป่วยมีประวัติแพ้ยาในบัญชียาหลักแบบรุนแรง (Anaphylaxis, Stevens-Johnson syndrome, TEN, DRESS) ทำให้ไม่สามารถใช้ยาในบัญชีได้
              </p>
            </div>
            <div className="p-3.5 bg-teal-50 border border-teal-300 rounded-xl">
              <span className="font-bold text-teal-950 block text-xs mb-1">
                เกณฑ์ข้อที่ 2: เกิดผลข้างเคียงรุนแรงหรือมีข้อห้ามใช้ทางการแพทย์
              </span>
              <p className="text-teal-900 text-xs">
                ผู้ป่วยมีข้อห้ามใช้เด็ดขาด (Absolute Contraindication) หรือเกิดผลข้างเคียงที่ไม่สามารถทนได้ แม้ได้รับการปรับขนาดยาแล้ว
              </p>
            </div>
            <div className="p-3.5 bg-blue-50 border border-blue-300 rounded-xl">
              <span className="font-bold text-blue-950 block text-xs mb-1">
                เกณฑ์ข้อที่ 3: ผลการรักษาล้มเหลวหลังใช้ยาในบัญชีอย่างครบถ้วน
              </span>
              <p className="text-blue-900 text-xs">
                ผู้ป่วยได้รับการรักษาด้วยยาในบัญชียาหลักตามแนวทางเวชปฏิบัติแล้ว แต่ไม่บรรลุเป้าหมายการรักษา หรือโรคลุกลาม
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'annual-drug-revisions',
      category: 'บัญชียาและรหัสยา',
      categoryOrder: 1,
      title: 'รายการยาเข้า-ออกประจำปี (PTC Formulary Changes)',
      subtitle: 'สรุปมติคณะกรรมการเภสัชกรรมและการบำบัด ยาบรรจุเข้าใหม่และยาตัดออก',
      badge: 'Updates 2568-2569',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <p className="leading-relaxed">
            สรุปการปรับปรุงบัญชียาโรงพยาบาลวชิระภูเก็ต โดยคณะกรรมการเภสัชกรรมและการบำบัด (PTC)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2">
              <span className="font-bold text-emerald-950 flex items-center gap-1.5 text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>รายการยาบรรจุเข้าใหม่ (New Entries):</span>
              </span>
              <ul className="list-disc list-inside space-y-1 text-xs text-emerald-900">
                <li>Edoxaban (Lixiana® 30, 60 mg) - กลุ่ม NOAC</li>
                <li>Semaglutide (Wegovy® FlexTouch pen) - ลดน้ำหนัก/เบาหวาน</li>
                <li>Tirzepatide (Mounjaro® KwikPen) - Dual GIP/GLP-1 RA</li>
                <li>Dapagliflozin 10 mg (Forxiga®) - ขยายสิทธิโรคไตและหัวใจล้มเหลว</li>
              </ul>
            </div>
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl space-y-2">
              <span className="font-bold text-rose-950 flex items-center gap-1.5 text-xs sm:text-sm">
                <AlertOctagon className="w-4 h-4 text-rose-600" />
                <span>รายการยาตัดออกจากบัญชี (Discontinued):</span>
              </span>
              <ul className="list-disc list-inside space-y-1 text-xs text-rose-900">
                <li>Ranitidine injection (แทนที่ด้วย Omeprazole IV)</li>
                <li>Glibenclamide 5 mg (แทนที่ด้วย Glipizide เพื่อความปลอดภัยในไต)</li>
                <li>Profilnine (แทนที่ด้วย Prothromplex 4-factor PCC)</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'herb-list',
      category: 'บัญชียาและรหัสยา',
      categoryOrder: 1,
      title: 'บัญชียาหลักแห่งชาติด้านสมุนไพร & สารสกัดกัญชาทางการแพทย์',
      subtitle: 'การใช้ยาสมุนไพรและสารสกัดกัญชาทางการแพทย์อย่างปลอดภัย',
      badge: 'Herbal Medicine',
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-700">
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2">
            <span className="font-bold text-emerald-950 flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-emerald-600" />
              <span>รายการยาสมุนไพรในบัญชียาหลักที่ รพ.วชิระภูเก็ต มีบริการ:</span>
            </span>
            <ul className="list-disc list-inside space-y-1 text-xs text-emerald-900">
              <li>ฟ้าทะลายโจรแคปซูล (บรรเทาอาการหวัด เจ็บคอ มีสาร Andrographolide มาตรฐาน)</li>
              <li>ขมิ้นชันแคปซูล (บรรเทาอาการแน่นจุกเสียด ท้องอืด ขับลม)</li>
              <li>ไพลเจล / ครีมพริก (บรรเทาอาการปวดเมื่อยกล้ามเนื้อ ข้ออักเสบ)</li>
              <li>ยาแก้ไอมะขามป้อม / ยาประสะมะแว้ง (บรรเทาอาการไอ ขับเสมหะ)</li>
              <li>สารสกัดกัญชาทางการแพทย์ (THC/CBD Sublingual Drop) คลินิกกัญชาทางการแพทย์</li>
            </ul>
          </div>
        </div>
      ),
    },

    // หมวด 2: การควบคุมยาต้านจุลชีพและความปลอดภัย
    {
      id: 'amr-management',
      category: 'การควบคุมยาต้านจุลชีพและความปลอดภัย',
      categoryOrder: 2,
      title: 'การจัดการการดื้อยาต้านจุลชีพ (AMR Management)',
      subtitle: 'มาตรการ Antimicrobial Stewardship Program (ASP) โรงพยาบาลวชิระภูเก็ต',
      badge: 'Antimicrobial Stewardship',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <p className="leading-relaxed">
            แผนยุทธศาสตร์บูรณาการเพื่อควบคุมและป้องกันการดื้อยาต้านจุลชีพ รพ.วชิระภูเก็ต มุ่งเน้นการใช้ยาปฏิชีวนะอย่างสมเหตุผล ลดอุบัติการณ์เชื้อดื้อยา Carbapenem-Resistant Enterobacteriaceae (CRE) และ Acinetobacter baumannii
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="font-bold text-slate-900 block mb-1">1. Pre-authorization:</span>
              <p className="text-slate-600">การขออนุมัติใช้ยาก่อนสั่ง (Colistin, Meropenem, Tigecycline) ผ่านระบบ DUE ออนไลน์</p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="font-bold text-slate-900 block mb-1">2. Post-prescription Review:</span>
              <p className="text-slate-600">เภสัชกรคลินิกร่วมกับแพทย์โรคติดเชื้อทบทวนการใช้ยาหลังทราบผลเพาะเชื้อใน 48-72 ชั่วโมง (De-escalation)</p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="font-bold text-slate-900 block mb-1">3. Dose Optimization:</span>
              <p className="text-slate-600">ปรับขนาดยาตามเภสัชจลนศาสตร์ (PK/PD) และการทำงานของไต</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'drug-herb-interaction',
      category: 'การควบคุมยาต้านจุลชีพและความปลอดภัย',
      categoryOrder: 2,
      title: 'อันตรกิริยาระหว่างยาและสมุนไพร (Drug-Herb Interactions)',
      subtitle: 'ระบบสืบค้นผลกระทบของสมุนไพรและผลิตภัณฑ์เสริมอาหารต่อยาแผนปัจจุบัน',
      badge: 'Herb Safety Checker',
      content: (
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={herbQuery}
              onChange={(e) => setHerbQuery(e.target.value)}
              placeholder="ค้นหาชื่อสมุนไพร เช่น ฟ้าทะลายโจร, แปะก๊วย, โสม, กัญชา..."
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
            />
          </div>

          <div className="space-y-3">
            {filteredHerbs.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-1.5 text-xs">
                <div className="font-bold text-emerald-950 text-sm flex items-center justify-between">
                  <span>{item.herb}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 font-semibold">
                    ใช้ร่วมกับ: {item.drug}
                  </span>
                </div>
                <p className="text-slate-800 leading-relaxed">
                  <strong>ผลที่อาจเกิดขึ้น:</strong> {item.effect}
                </p>
                <p className="text-emerald-800 font-medium">
                  <strong>คำแนะนำทางคลินิก:</strong> {item.recommendation}
                </p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'had-policy',
      category: 'การควบคุมยาต้านจุลชีพและความปลอดภัย',
      categoryOrder: 2,
      title: 'ยาความเสี่ยงสูง (High Alert Drug: HAD)',
      subtitle: 'รายการยาเสี่ยงสูง 18 กลุ่ม และมาตรการ Double-Check อิสระ',
      badge: 'High Alert Safety',
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-slate-700">
          <p className="leading-relaxed">
            รายการยาความเสี่ยงสูง (HAD) ของ รพ.วชิระภูเก็ต ต้องผ่านการติดสติ๊กเกอร์สีส้มสะท้อนแสง และทำ Independent Double Check ก่อนจ่ายและบริหารยาทุกครั้ง
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-950">
              <span className="font-bold block">1. Concentrated Electrolytes:</span>
              <span>10% KCl, 3% NaCl, 50% MgSO4 (ห้าม IV Push เด็ดขาด)</span>
            </div>
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-950">
              <span className="font-bold block">2. Anticoagulants & Thrombolytic:</span>
              <span>Warfarin, Heparin, Enoxaparin, rt-PA, Tenecteplase</span>
            </div>
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-950">
              <span className="font-bold block">3. Inotropes & Vasopressors:</span>
              <span>Noradrenaline, Adrenaline, Dopamine, Dobutamine</span>
            </div>
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-950">
              <span className="font-bold block">4. Insulins & Chemotherapy:</span>
              <span>Regular Insulin, Glargine, ยาเคมีบำบัดทุกชนิด</span>
            </div>
          </div>
        </div>
      ),
    },

    // หมวด 3: ยาวาร์ฟาริน
    {
      id: 'warfarin-calc',
      category: 'ยาวาร์ฟาริน (Warfarin)',
      categoryOrder: 3,
      title: 'คำนวณขนาดยาวาร์ฟารินเริ่มต้น (Warfarin Initial Dose Calculator)',
      subtitle: 'เครื่องคำนวณขนาดยาเริ่มต้นและการติดตามค่า INR ตามแนวทางสากล',
      badge: 'Warfarin Calculator',
      content: (
        <div className="space-y-5">
          <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-slate-700 font-bold mb-1">อายุ (ปี):</label>
                <input
                  type="number"
                  value={warfAge}
                  onChange={(e) => setWarfAge(e.target.value ? Number(e.target.value) : '')}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-bold mb-1">น้ำหนักตัว (กก.):</label>
                <input
                  type="number"
                  value={warfWeight}
                  onChange={(e) => setWarfWeight(e.target.value ? Number(e.target.value) : '')}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-bold mb-1">เป้าหมาย INR:</label>
                <select
                  value={warfTargetInr}
                  onChange={(e) => setWarfTargetInr(e.target.value as any)}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900"
                >
                  <option value="2.0-3.0">2.0 - 3.0 (AF, DVT, PE)</option>
                  <option value="2.5-3.5">2.5 - 3.5 (Mechanical Mitral Valve)</option>
                </select>
              </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-700">
              <input
                type="checkbox"
                checked={warfRisk}
                onChange={(e) => setWarfRisk(e.target.checked)}
                className="w-4 h-4 rounded text-emerald-600"
              />
              <span>ผู้ป่วยมีภาวะทุพโภชนาการ, โรคตับ, ค่าไตเสื่อม หรือรับประทานยาที่มีอันตรกิริยาเพิ่มฤทธิ์ Warfarin</span>
            </label>

            {/* Result Box */}
            <div className="p-4 bg-white rounded-xl border border-emerald-300 shadow-2xs space-y-1">
              <span className="text-slate-500 text-[11px] block">ขนาดยาเริ่มต้นที่แนะนำ (Initial Daily Dose):</span>
              <div className="text-xl sm:text-2xl font-bold text-emerald-900">
                {calculatedWarfarinDose.dose} mg / วัน (ทานเวลา 18.00 น.)
              </div>
              <p className="text-slate-600 text-xs">{calculatedWarfarinDose.note}</p>
              <div className="pt-2 text-[11px] text-emerald-800 font-semibold border-t border-slate-100 mt-2">
                นัดตรวจติดตามค่า INR ครั้งแรกภายใน 3 - 5 วันหลังเริ่มยา
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'fatal-ddi',
      category: 'ยาวาร์ฟาริน (Warfarin)',
      categoryOrder: 3,
      title: 'คู่ยาที่ห้ามใช้ด้วยกัน (Fatal Drug-Drug Interaction)',
      subtitle: 'ระบบสืบค้นคู่ยาที่มีอันตรกิริยารุนแรงถึงแก่ชีวิต',
      badge: 'Fatal DDI Checker',
      content: (
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={ddiQuery}
              onChange={(e) => setDdiQuery(e.target.value)}
              placeholder="ค้นหาชื่อยา เช่น Simvastatin, Warfarin, Colchicine..."
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 font-medium"
            />
          </div>

          <div className="space-y-3">
            {filteredDdi.map((ddi, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-rose-200 bg-rose-50/50 space-y-2 text-xs"
              >
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div className="font-bold text-rose-950 text-sm">
                    {ddi.drugA} <span className="text-rose-600 font-extrabold">+</span> {ddi.drugB}
                  </div>
                  <span className="px-2 py-0.5 rounded bg-rose-700 text-white font-bold text-[10px]">
                    {ddi.severity}
                  </span>
                </div>
                <p className="text-rose-900 leading-relaxed">
                  <strong>ผลที่เกิดขึ้น:</strong> {ddi.effect}
                </p>
                <p className="text-slate-700 text-[11px]">
                  <strong>แนวทางการจัดการ:</strong> {ddi.management}
                </p>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    // หมวด 4: ยาเทคนิคพิเศษและวิธีใช้
    {
      id: 'special-technique',
      category: 'ยาเทคนิคพิเศษและวิธีใช้',
      categoryOrder: 4,
      title: 'ยาเทคนิคพิเศษ (Special Technique Medications)',
      subtitle: 'คู่มือและขั้นตอนการใช้อุปกรณ์สูดพ่น ยาฉีดอินซูลิน และแผ่นแปะผิวหนัง',
      badge: 'Technique Guide',
      content: (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-2">
            {[
              { id: 'mdi', label: 'ยาพ่น MDI + Spacer' },
              { id: 'turbo', label: 'Turbuhaler / Accuhaler' },
              { id: 'respimat', label: 'Respimat Soft Mist' },
              { id: 'pen', label: 'ปากกาฉีดอินซูลิน/GLP-1' },
              { id: 'patch', label: 'แผ่นแปะ Transdermal' },
              { id: 'eye', label: 'ยาหยอดตา/ป้ายตา' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setTechniqueTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  techniqueTab === tab.id
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-3 text-xs leading-relaxed">
            {techniqueTab === 'mdi' && (
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                  <Wind className="w-4 h-4 text-emerald-600" />
                  <span>ขั้นตอนการใช้ยาพ่นสูดชนิด MDI ร่วมกับ Spacer:</span>
                </h4>
                <ol className="list-decimal list-inside space-y-1.5 text-slate-700">
                  <li>เปิดฝาครอบกระบอกยาและเขย่ากระบอกยาในแนวตั้ง 5-10 ครั้ง</li>
                  <li>สวมหลอดยาเข้ากับช่องของกระบอก Spacer ให้แน่นสนิท</li>
                  <li>หายใจออกทางปากให้สุดเบาๆ (ห้ามเป่าลมหายใจเข้าไปในกระบอก)</li>
                  <li>อมปากกระบอก Spacer ให้สนิทด้วยริมฝีปาก (ระวังอย่าให้ฟันหรือลิ้นบังช่องพ่น)</li>
                  <li>กดยา 1 ครั้งเข้าไปใน Spacer แล้วสูดหายใจเข้าทางปาก ช้าๆ ลึกๆ นาน 3-5 วินาที</li>
                  <li>กลั้นหายใจประมาณ 10 วินาที หรือให้นานที่สุดเท่าที่ทำได้</li>
                  <li>บ้วนปากและคอด้วยน้ำสะอาดทุกครั้งหลังใช้ (กรณีเป็นยาสเตียรอยด์สูดพ่น เช่น Seretide, Budesonide) เพื่อป้องกันเชื้อราในช่องปากและเสียงแหบ</li>
                </ol>
              </div>
            )}
            {techniqueTab === 'turbo' && (
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">ขั้นตอนการใช้ Turbuhaler:</h4>
                <ol className="list-decimal list-inside space-y-1.5 text-slate-700">
                  <li>หมุนเกลียวเปิดฝาครอบออกในแนวตั้ง</li>
                  <li>หมุนฐานเครื่องไปทางขวาจนสุด แล้วหมุนกลับทางซ้ายจนได้ยินเสียง &ldquo;คลิก&rdquo; (1 ครั้งเท่านั้น)</li>
                  <li>หายใจออกทางปากให้สุด (ห้ามเป่าลมเข้าไปในเครื่อง)</li>
                  <li>อมปากกระบอกให้สนิท สูดหายใจเข้าทางปาก เร็ว แรง และลึก</li>
                  <li>กลั้นหายใจ 10 วินาที แล้วบ้วนปากด้วยน้ำสะอาดทุกครั้ง</li>
                </ol>
              </div>
            )}
            {techniqueTab === 'respimat' && (
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">ขั้นตอนการใช้ Respimat (ละอองหมอกละเอียด):</h4>
                <p className="text-slate-600 mb-2">เทคนิค TOP: หมุน (Turn) &rarr; เปิด (Open) &rarr; กด (Press)</p>
                <ol className="list-decimal list-inside space-y-1 text-slate-700">
                  <li>ปิดฝาครอบใส หมุนฐานเครื่องไปตามทิศทางลูกศรจนได้ยินเสียง &ldquo;คลิก&rdquo; (Turn)</li>
                  <li>เปิดฝาครอบขึ้นจนสุด (Open)</li>
                  <li>อมปากกระบอก กดปุ่มปล่อยยาพร้อมสูดหายใจเข้าช้าๆ นานๆ (Press)</li>
                </ol>
              </div>
            )}
            {techniqueTab === 'pen' && (
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                  <Syringe className="w-4 h-4 text-emerald-600" />
                  <span>ปากกาฉีดยาอินซูลินและยาลดน้ำหนัก (GLP-1):</span>
                </h4>
                <ol className="list-decimal list-inside space-y-1 text-slate-700">
                  <li>ตรวจดูเนื้อยา (ใส ปราศจากตะกอน หากเป็นชนิดขุ่นให้กลิ้งปากกาไปมาเบาๆ 10 ครั้ง)</li>
                  <li>ใส่เข็มใหม่ ปรับปุ่มตั้งยา 2 ยูนิตเพื่อไล่อากาศ (Prime the pen)</li>
                  <li>ปรับตั้งขนาดยาตามแพทย์สั่ง</li>
                  <li>เช็ดแอลกอฮอล์บริเวณหน้าท้อง (ห่างสะดือ 2 นิ้ว) ปักเข็มตั้งฉาก 90 องศา กดแป้นฉีดจนสุด</li>
                  <li>ค้างเข็มไว้ 6-10 วินาทีก่อนดึงเข็มออก เพื่อป้องกันยาไหลย้อน</li>
                  <li>สลับตำแหน่งฉีดทุกครั้ง ป้องกันภาวะไขมันสะสมเป็นก้อน (Lipohypertrophy)</li>
                </ol>
              </div>
            )}
            {techniqueTab === 'patch' && (
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">แผ่นแปะผิวหนัง (Transdermal Patch: Fentanyl, Rivastigmine):</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>แปะบริเวณผิวหนังที่สะอาด แห้ง ไม่มีขน เช่น หน้าอกส่วนบน แขนท่อนบน หลังส่วนบน</li>
                  <li>กดแผ่นแปะด้วยฝ่ามือนาน 30 วินาที เพื่อให้กาวติดแน่น</li>
                  <li>ห้ามตัดหรือดัดแปลงแผ่นแปะ Fentanyl เด็ดขาด (อาจเกิดพิษเฉียบพลันถึงชีวิต)</li>
                  <li>หลีกเลี่ยงความร้อนภายนอก (กระเป๋าน้ำร้อน ซาวน่า แสงแดดจัด) เพราะจะเร่งการดูดซึมยา</li>
                  <li>เมื่อลอกแผ่นเก่าออก ให้พับด้านกาวเข้าหากันแล้วทิ้งในภาชนะปลอดภัย ห้ามทิ้งลงถังขยะทั่วไป</li>
                </ul>
              </div>
            )}
            {techniqueTab === 'eye' && (
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-emerald-600" />
                  <span>การหยอดตาและป้ายตา:</span>
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>ล้างมือให้สะอาด ดึงเปลือกตาล่างลง หยอดยา 1 หยดลงในกระพุ้งตาล่าง</li>
                  <li>ระวังปลายหลอดอย่าให้สัมผัสกับขนตาหรือดวงตา</li>
                  <li>หลับตานิ่งๆ 1-2 นาที และใช้นิ้วกดที่หัวตา (บริเวณท่อน้ำตา) เบาๆ ป้องกันยาดูดซึมเข้ากระแสเลือด</li>
                  <li>หากต้องใช้ยา 2 ชนิด ให้เว้นระยะห่างอย่างน้อย 5 นาที (ใช้ยาหยอดก่อนยาป้ายเสมอ)</li>
                  <li>ยาหยอดตามีอายุ 30 วันหลังจากเปิดใช้ครั้งแรก</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      ),
    },

    // หมวด 5: ขนาดยาเฉพาะทางและการบริหารยา
    {
      id: 'iv-antibiotic-dose',
      category: 'ขนาดยาเฉพาะทางและการบริหารยา',
      categoryOrder: 5,
      title: 'ขนาดยาปฏิชีวนะรูปแบบฉีด (Injectable Antibiotic Dosing & Renal Adjustment)',
      subtitle: 'ตารางปรับขนาดยาฉีดตามค่าการทำงานของไต (eGFR / CrCl)',
      badge: 'Renal Dose Chart',
      content: (
        <div className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            ตารางปรับขนาดยาปฏิชีวนะรูปแบบฉีดตามระดับการทำงานของไต เพื่อประสิทธิภาพการรักษาสูงสุดและป้องกันพิษต่อไต/ระบบประสาท
          </p>
          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">ชื่อยา (Generic)</th>
                  <th className="p-3">ขนาดปกติ (CrCl &gt; 50)</th>
                  <th className="p-3">CrCl 26 - 50 mL/min</th>
                  <th className="p-3">CrCl 10 - 25 mL/min</th>
                  <th className="p-3">CrCl &lt; 10 / Hemodialysis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-mono text-[11px]">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-sans font-bold text-emerald-900">Meropenem</td>
                  <td className="p-3">1 g q 8h IV drip</td>
                  <td className="p-3">1 g q 12h</td>
                  <td className="p-3">500 mg q 12h</td>
                  <td className="p-3">500 mg q 24h (หลังฟอกไต)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-sans font-bold text-emerald-900">Piperacillin/Tazo</td>
                  <td className="p-3">4.5 g q 6h IV drip 3h</td>
                  <td className="p-3">3.375 g q 6h</td>
                  <td className="p-3">2.25 g q 6h</td>
                  <td className="p-3">2.25 g q 8h (หลัง HD เพิ่ม 0.75g)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-sans font-bold text-emerald-900">Imipenem/Cilastatin</td>
                  <td className="p-3">500 mg q 6h</td>
                  <td className="p-3">500 mg q 8h</td>
                  <td className="p-3">250 mg q 8h</td>
                  <td className="p-3">250 mg q 12h (ระวังชัก)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-sans font-bold text-emerald-900">Colistin (CBA)</td>
                  <td className="p-3">Load 300mg, then 150mg q 12h</td>
                  <td className="p-3">100 - 150 mg q 12h</td>
                  <td className="p-3">75 - 100 mg q 12h</td>
                  <td className="p-3">50 - 75 mg q 12-24h</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-sans font-bold text-emerald-900">Vancomycin</td>
                  <td className="p-3">Load 25-30 mg/kg, 15-20 mg/kg q 8-12h</td>
                  <td className="p-3">15 mg/kg q 24h</td>
                  <td className="p-3">15 mg/kg q 48h</td>
                  <td className="p-3">15-25 mg/kg dose แรก, ติดตาม TDM Trough</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: 'malaria-dose',
      category: 'ขนาดยาเฉพาะทางและการบริหารยา',
      categoryOrder: 5,
      title: 'ขนาดยาต้านมาลาเรีย (Antimalarial Treatment Guidelines)',
      subtitle: 'แนวทางการรักษาโรคไข้มาลาเรียของประเทศไทย พ.ศ. 2568',
      badge: 'Malaria Protocol',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <p className="leading-relaxed">
            แนวทางการรักษาโรคไข้มาลาเรียตามแนวทางกรมควบคุมโรค กระทรวงสาธารณสุข
          </p>
          <div className="space-y-3">
            <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl space-y-1">
              <span className="font-bold text-rose-950 block text-xs">
                1. มาลาเรียชนิดฟัลซิปารัมรุนแรง (Severe Falciparum Malaria):
              </span>
              <p className="text-rose-900 text-xs">
                <strong>Artesunate IV:</strong> ขนาด 2.4 mg/kg IV push ช้าๆ ที่ชั่วโมงที่ 0, 12, 24 และวันละครั้งจนกว่าผู้ป่วยจะทานยาได้ (อย่างน้อย 3 โดส) จากนั้นเปลี่ยนเป็นยารับประทานครบ 3 วัน
              </p>
            </div>
            <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl space-y-1">
              <span className="font-bold text-amber-950 block text-xs">
                2. มาลาเรียชนิดฟัลซิปารัมไม่รุนแรง (Uncomplicated P. falciparum):
              </span>
              <p className="text-amber-900 text-xs">
                <strong>Dihydroartemisinin-Piperaquine (Eurartesim®):</strong> วันละ 1 ครั้ง ติดต่อกัน 3 วัน ร่วมกับ <strong>Primaquine</strong> 0.25 mg/kg (Gametocytocide) ครั้งเดียวในวันแรก
              </p>
            </div>
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
              <span className="font-bold text-emerald-950 block text-xs">
                3. มาลาเรียชนิดไวแว็กซ์ / โอวาเล (P. vivax / P. ovale):
              </span>
              <p className="text-emerald-900 text-xs">
                <strong>Chloroquine:</strong> วันแรก 600 mg base, วันที่ 2: 300 mg base, วันที่ 3: 300 mg base ร่วมกับ <strong>Primaquine</strong> 0.25-0.5 mg/kg/day วันละครั้ง นาน 14 วัน (กำจัดเชื้อระยะ Hypnozoite ในตับ)
              </p>
              <div className="text-[11px] text-rose-700 font-bold pt-1">
                ⚠️ ข้อควรระวัง: ต้องตรวจระดับเอนไซม์ G6PD ก่อนเริ่ม Primaquine เสมอ เพื่อป้องกันเม็ดเลือดแดงแตกเฉียบพลัน
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'covid-antiviral',
      category: 'ขนาดยาเฉพาะทางและการบริหารยา',
      categoryOrder: 5,
      title: 'ขนาดยาต้านไวรัสโควิด 19 (COVID-19 Antiviral Guidance)',
      subtitle: 'Paxlovid, Molnupiravir, Remdesivir ขนาดยาและข้อห้ามใช้อันตรกิริยา',
      badge: 'COVID-19 Antivirals',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <p className="leading-relaxed">
            แนวทางการให้ยาต้านไวรัสรักษาโรคโควิด 19 ในกลุ่มผู้ป่วย 608 และผู้มีความเสี่ยงโรครุนแรง
          </p>
          <div className="space-y-3">
            <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-emerald-950 text-sm">Paxlovid (Nirmatrelvir + Ritonavir)</span>
                <span className="px-2 py-0.5 rounded bg-emerald-700 text-white font-bold text-[10px]">ทางเลือกแรก (First line)</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-emerald-900">
                <li><strong>eGFR &ge; 60 mL/min:</strong> Nirmatrelvir 150 mg 2 เม็ด + Ritonavir 100 mg 1 เม็ด ทานพร้อมกันวันละ 2 ครั้ง นาน 5 วัน</li>
                <li><strong>eGFR 30 - 59 mL/min (Moderate renal impairment):</strong> ลดขนาดยาลงเป็น Nirmatrelvir 150 mg 1 เม็ด + Ritonavir 100 mg 1 เม็ด วันละ 2 ครั้ง นาน 5 วัน</li>
                <li><strong>eGFR &lt; 30 mL/min:</strong> ไม่แนะนำให้ใช้ (ห้ามใช้)</li>
                <li><strong>ข้อควรระวังสำคัญ:</strong> Ritonavir เป็น Potent CYP3A4 inhibitor ห้ามใช้ร่วมกับ Simvastatin, Lovastatin, Amiodarone, Colchicine, Rivaroxaban, Fentanyl, Alfuzosin, Midazolam ฯลฯ</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1 text-xs">
              <span className="font-bold text-slate-900 block text-sm">Molnupiravir (200 mg):</span>
              <p className="text-slate-700">
                ขนาด 800 mg (4 แคปซูล) รับประทานวันละ 2 ครั้ง ทุก 12 ชั่วโมง ติดต่อกัน 5 วัน ไม่ต้องปรับขนาดตามการทำงานของไต
              </p>
              <p className="text-rose-700 font-bold text-[11px]">
                ห้ามใช้ในสตรีมีครรภ์และสตรีให้นมบุตร และผู้มีอายุน้อยกว่า 18 ปี
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1 text-xs">
              <span className="font-bold text-slate-900 block text-sm">Remdesivir (IV):</span>
              <p className="text-slate-700">
                วันแรก: Loading dose 200 mg IV drip ใน NSS/D5W นาน 30-60 นาที จากนั้นให้ 100 mg IV drip วันละครั้ง ในวันที่ 2-5
              </p>
              <p className="text-slate-600">
                เหมาะสำหรับผู้ป่วยที่มีภาวะปอดอักเสบ ต้องการออกซิเจน หรือมีข้อห้ามใช้ของ Paxlovid
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'pediatric-dosing',
      category: 'ขนาดยาเฉพาะทางและการบริหารยา',
      categoryOrder: 5,
      title: 'ขนาดยาที่ใช้ในเด็ก (Pediatric Dosing & Vaccine Schedule)',
      subtitle: 'เครื่องคำนวณยาน้ำพาราเซตามอล ไอบูโพรเฟน และยาปฏิชีวนะเด็กตามน้ำหนักตัว',
      badge: 'Pediatric Calculator',
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl space-y-4 text-xs">
            <span className="font-bold text-teal-950 block text-sm flex items-center gap-1.5">
              <Baby className="w-4 h-4 text-teal-700" />
              <span>เครื่องคำนวณขนาดยาน้ำเด็กตามน้ำหนักตัว:</span>
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-700 font-bold mb-1">น้ำหนักตัวเด็ก (กก.):</label>
                <input
                  type="number"
                  value={pediaWeight}
                  onChange={(e) => setPediaWeight(e.target.value ? Number(e.target.value) : '')}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">เลือกชนิดยาและความแรง:</label>
                <select
                  value={pediaDrug}
                  onChange={(e) => setPediaDrug(e.target.value as any)}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-900"
                >
                  <option value="para120">Paracetamol syrup (120 mg / 5 mL)</option>
                  <option value="para250">Paracetamol syrup (250 mg / 5 mL)</option>
                  <option value="ibup100">Ibuprofen suspension (100 mg / 5 mL)</option>
                  <option value="amox250">Amoxicillin dry syrup (250 mg / 5 mL)</option>
                </select>
              </div>
            </div>

            <div className="p-3.5 bg-white rounded-xl border border-teal-300 space-y-1">
              <span className="text-slate-500 text-[11px] block">ผลการคำนวณขนาดยา:</span>
              <div className="text-base sm:text-lg font-bold text-teal-900">
                {calculatedPediatricDose.doseMg}
              </div>
              <p className="text-emerald-800 font-semibold">{calculatedPediatricDose.mlText}</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'iv-infusion-table',
      category: 'ขนาดยาเฉพาะทางและการบริหารยา',
      categoryOrder: 5,
      title: 'ตารางการให้สารน้ำและยาทางหลอดเลือดดำ (IV Infusion & Compatibility Table)',
      subtitle: 'ตารางความเข้ากันได้ของสารน้ำ อัตราการให้ยา และยาที่ต้องป้องกันแสง',
      badge: 'IV Guide',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-700">
          <p className="leading-relaxed">
            คู่มือการบริหารยาฉีดทางหลอดเลือดดำ ข้อกำหนดความเข้ากันได้ (Compatibility) และการป้องกันแสงเพื่อความปลอดภัยของผู้ป่วย
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-2">
              <span className="font-bold text-amber-950 flex items-center gap-1.5">
                <Sun className="w-4 h-4 text-amber-600" />
                <span>ยาที่ต้องป้องกันแสงระหว่างให้ยา (Protect from Light):</span>
              </span>
              <ul className="list-disc list-inside space-y-1 text-amber-900">
                <li>Sodium Nitroprusside (ต้องหุ้มซองทึบแสงทันที)</li>
                <li>Amphotericin B (Deoxycholate & Liposomal)</li>
                <li>Micafungin (Mycamine®)</li>
                <li>Dacarbazine, Doxorubicin (เคมีบำบัด)</li>
                <li>Norepinephrine (เปลี่ยนสารละลายหากมีสีคล้ำ)</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl space-y-2">
              <span className="font-bold text-blue-950 flex items-center gap-1.5">
                <Droplet className="w-4 h-4 text-blue-600" />
                <span>ยาที่ต้องใช้ In-line Filter (0.22 / 1.2 ไมครอน):</span>
              </span>
              <ul className="list-disc list-inside space-y-1 text-blue-900">
                <li>Amiodarone IV drip (ใช้ filter 0.22 micron)</li>
                <li>Paclitaxel, Docetaxel (ใช้ filter 0.22 micron ชนิด non-PVC)</li>
                <li>Mannitol 20% (ป้องกันผลึกเกล็ด)</li>
                <li>Total Parenteral Nutrition (TPN 3-in-1 ใช้ filter 1.2 micron)</li>
              </ul>
            </div>

            <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl space-y-2 md:col-span-2">
              <span className="font-bold text-rose-950 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>ข้อกำหนดความปลอดภัยของ Potassium Chloride (KCl IV):</span>
              </span>
              <ul className="list-disc list-inside space-y-1 text-rose-900">
                <li><strong>ห้ามฉีดเข้าหลอดเลือดดำโดยตรง (ห้าม IV Push เด็ดขาด)</strong> - ทำให้หัวใจหยุดเต้นเสียชีวิตทันที</li>
                <li>ความเข้มข้นสูงสุดทาง Peripheral line ไม่เกิน 40 mEq/L (อัตราไม่เกิน 10-20 mEq/hour)</li>
                <li>หากจำเป็นต้องให้ความเข้มข้นสูงทาง Central line ต้องควบคุมด้วย Infusion Pump และติดตาม EKG Monitor อย่างใกล้ชิด</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const categories = [
    'ทั้งหมด',
    'บัญชียาและรหัสยา',
    'การควบคุมยาต้านจุลชีพและความปลอดภัย',
    'ยาวาร์ฟาริน (Warfarin)',
    'ยาเทคนิคพิเศษและวิธีใช้',
    'ขนาดยาเฉพาะทางและการบริหารยา',
  ];

  const filteredTopics = TOPIC_ITEMS.filter((t) => {
    const matchCat =
      categoryFilter === 'ทั้งหมด' || t.category === categoryFilter;
    const matchSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (t.subtitle &&
        t.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const activeFocusTopic =
    TOPIC_ITEMS.find((t) => t.id === selectedTopicId) || TOPIC_ITEMS[0];

  return (
    <div className="space-y-6 font-['Sarabun',sans-serif]">
      {/* 1. Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-2 border border-emerald-200">
              <Pill className="w-4 h-4 text-emerald-600" />
              <span>DRUG INFORMATION SYSTEM</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              ข้อมูลยา (Drug Information)
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              คู่มือและแนวทางเวชปฏิบัติการใช้ยา 20 หัวข้อมาตรฐาน โรงพยาบาลวชิระภูเก็ต
            </p>
          </div>

          {/* View mode toggle */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl self-start sm:self-auto border border-slate-200 shrink-0">
            <button
              type="button"
              onClick={() => setViewMode('continuous')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'continuous'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="แสดงเนื้อหาทุกหัวข้อเรียงต่อกันในหน้าเดียว"
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
              title="เลือกดูทีละหัวข้อแบบโฟกัส"
            >
              <Columns className="w-3.5 h-3.5" />
              <span>เลือกดูทีละหัวข้อ</span>
            </button>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นหาหัวข้อข้อมูลยา เช่น TMT, วาร์ฟาริน, โควิด, เทคนิคพิเศษ, ยาเด็ก, AMR, สารน้ำ..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 font-medium"
            />
          </div>

          <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  categoryFilter === cat
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Sticky Quick-Jump Navigation Bar */}
      <div className="sticky top-20 z-20 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-2.5 shadow-sm overflow-x-auto">
        <div className="flex items-center gap-2 min-w-max">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider pl-2 flex items-center gap-1">
            <Bookmark className="w-3 h-3 text-emerald-600" />
            <span>ข้ามไปยังหัวข้อ:</span>
          </span>
          {TOPIC_ITEMS.map((item, idx) => {
            const isCurrent = selectedTopicId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToTopic(item.id)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all whitespace-nowrap ${
                  isCurrent
                    ? 'bg-emerald-700 text-white shadow-xs font-bold'
                    : 'bg-slate-50 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200/80'
                }`}
              >
                {idx + 1}. {item.title.split('(')[0].trim()}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Main Content Views */}
      {viewMode === 'continuous' ? (
        /* Continuous Mode: Each topic laid out sequentially down the page */
        <div className="space-y-6">
          {filteredTopics.map((topic, index) => {
            const isHighlighted = selectedTopicId === topic.id;
            return (
              <section
                key={topic.id}
                id={`topic-${topic.id}`}
                ref={(el) => {
                  topicRefs.current[topic.id] = el;
                }}
                className={`scroll-mt-36 bg-white rounded-2xl border transition-all p-6 sm:p-8 shadow-sm ${
                  isHighlighted
                    ? 'border-emerald-500 ring-2 ring-emerald-500/30'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Topic Header Bar */}
                <div className="border-b border-slate-100 pb-4 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold flex items-center justify-center">
                        {index + 1}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                        {topic.category}
                      </span>
                      {topic.badge && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold">
                          {topic.badge}
                        </span>
                      )}
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                      {topic.title}
                    </h2>
                    {topic.subtitle && (
                      <p className="text-xs text-slate-500 mt-0.5">
                        {topic.subtitle}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTopicId(topic.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="self-start sm:self-auto text-xs text-slate-400 hover:text-emerald-700 flex items-center gap-1 font-medium"
                    title="เลื่อนขึ้นด้านบน"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                    <span>กลับขึ้นบน</span>
                  </button>
                </div>

                {/* Topic Content Body */}
                <div>{topic.content}</div>
              </section>
            );
          })}
        </div>
      ) : (
        /* Focus Mode: Split list on left, detailed view on right */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 space-y-2 max-h-[750px] overflow-y-auto pr-1">
            {filteredTopics.map((topic, i) => {
              const isSelected = activeFocusTopic.id === topic.id;
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-emerald-50 border-emerald-500 shadow-xs ring-1 ring-emerald-500'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="space-y-0.5 pr-2">
                    <span
                      className={`text-xs font-bold block ${
                        isSelected
                          ? 'text-emerald-900'
                          : 'text-slate-800 group-hover:text-emerald-800'
                      }`}
                    >
                      {i + 1}. {topic.title}
                    </span>
                    <span className="text-[11px] text-slate-500 block truncate max-w-[240px]">
                      {topic.subtitle || topic.category}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-colors ${
                      isSelected ? 'text-emerald-700' : 'text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                  {activeFocusTopic.category}
                </span>
                {activeFocusTopic.badge && (
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                    {activeFocusTopic.badge}
                  </span>
                )}
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                {activeFocusTopic.title}
              </h2>
              {activeFocusTopic.subtitle && (
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {activeFocusTopic.subtitle}
                </p>
              )}
            </div>

            <div>{activeFocusTopic.content}</div>
          </div>
        </div>
      )}
    </div>
  );
};

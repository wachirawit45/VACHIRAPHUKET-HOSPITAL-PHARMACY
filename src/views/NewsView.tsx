import React, { useState } from 'react';
import {
  Newspaper,
  BookOpen,
  Briefcase,
  Truck,
  Calendar,
  ArrowRight,
  X,
  Download,
  Building,
  CheckCircle2,
  Clock,
  MapPin,
} from 'lucide-react';
import { Language } from '../types/pharmacy';

interface NewsItemCustom {
  id: string;
  category: 'วารสารเภสัชกรรมโรงพยาบาล' | 'รับสมัครงาน' | 'ช่องทางการเลือกรับยา';
  title: string;
  date: string;
  summary: string;
  content: string;
  details?: React.ReactNode;
}

const NEWS_DATA: NewsItemCustom[] = [
  // 1. วารสารเภสัชกรรมโรงพยาบาล
  {
    id: 'journal-1',
    category: 'วารสารเภสัชกรรมโรงพยาบาล',
    title: 'วารสารเภสัชกรรมโรงพยาบาล ฉบับที่ 1/2569: Smart Pharmacy & Patient Safety 3P',
    date: '1 มี.ค. 2569',
    summary: 'รวบรวมบทความวิชาการ นวัตกรรมหุ่นยนต์จัดยา และกรณีศึกษาทางบริบาลเภสัชกรรมคลินิก',
    content: 'วารสารวิชาการกลุ่มงานเภสัชกรรม โรงพยาบาลวชิระภูเก็ต นำเสนอบทความพิเศษเรื่อง "ก้าวสู่ยุค Smart Hospital ด้วยระบบหุ่นยนต์จัดยาและการบริหารยากลุ่มความเสี่ยงสูง (High Alert Drugs)" พร้อมรายงานสถิติการป้องกันความคลาดเคลื่อนทางยา'
  },
  {
    id: 'journal-2',
    category: 'วารสารเภสัชกรรมโรงพยาบาล',
    title: 'จดหมายข่าวเภสัชสนเทศ (Drug Information Bulletin) ฉบับเตือนภัยยาและวัคซีน',
    date: '15 ก.พ. 2569',
    summary: 'อัปเดตข้อมูลความปลอดภัยยาปฏิชีวนะกลุ่ม Carbapenem และแนวทางบริหารยาฉีดสำหรับพยาบาล',
    content: 'สรุปประเด็นสำคัญจากศูนย์ข้อมูลยา (DIC) เรื่องแนวทางการปรับขนาดยาตามค่าการทำงานของไต (CrCl) และคำแนะนำการใช้ยาในสตรีมีครรภ์'
  },

  // 2. รับสมัครงาน
  {
    id: 'job-1',
    category: 'รับสมัครงาน',
    title: 'รับสมัครคัดเลือกบุคคลเพื่อจ้างเป็นลูกจ้างชั่วคราว ตำแหน่ง เภสัชกร (2 อัตรา)',
    date: '5 ต.ค. 2569',
    summary: 'สำเร็จการศึกษาปริญญาตรีเภสัชศาสตรบัณฑิต (บริบาลเภสัชกรรม/เภสัชศาสตร์) มีใบประกอบวิชาชีพ',
    content: 'กลุ่มงานเภสัชกรรม โรงพยาบาลวชิระภูเก็ต มีความประสงค์รับสมัครเภสัชกรเพื่อปฏิบัติงาน ณ งานบริการผู้ป่วยนอก และงานการบริบาลทางเภสัชกรรมผู้ป่วยใน ปฏิบัติงานด้านการบริบาลทางเภสัชกรรมและการใช้ยาอย่างสมเหตุผล',
    details: (
      <div className="space-y-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200">
        <p><strong>คุณสมบัติ:</strong> ปริญญาตรีเภสัชศาสตรบัณฑิต มีใบอนุญาตประกอบวิชาชีพเภสัชกรรม</p>
        <p><strong>อัตราค่าจ้าง:</strong> ตามระเบียบกระทรวงสาธารณสุข พร้อมเงินเพิ่มพิเศษ (พ.ต.ส.) และค่าตอบแทนเวรปฏิบัติการ</p>
        <p><strong>สมัครได้ที่:</strong> กลุ่มงานทรัพยากรบุคคล ชั้น 3 อาคารคุณพุ่ม รพ.วชิระภูเก็ต โทร. 076-361234 ต่อ 1210</p>
      </div>
    )
  },
  {
    id: 'job-2',
    category: 'รับสมัครงาน',
    title: 'รับสมัคร เจ้าพนักงานเภสัชกรรม (1 อัตรา)',
    date: '28 ก.ย. 2569',
    summary: 'สำเร็จการศึกษาประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) สาขาเทคนิคเภสัชกรรม',
    content: 'เพื่อปฏิบัติงานช่วยจัดยา คีย์ข้อมูลยา และดูแลระบบคลังเวชภัณฑ์ย่อย ภายใต้การกำกับดูแลของเภสัชกร'
  },

  // 3. ช่องทางการเลือกรับยา
  {
    id: 'delivery-1',
    category: 'ช่องทางการเลือกรับยา',
    title: 'ช่องทางการเลือกรับยาสำหรับผู้ป่วยนอก โรงพยาบาลวชิระภูเก็ต',
    date: 'อัปเดต 2569',
    summary: 'ลดความแออัด ลดระยะเวลารอคอย ด้วย 4 ทางเลือกการรับยาที่สะดวกและปลอดภัย',
    content: 'เพื่อความสะดวกของผู้รับบริการ กลุ่มงานเภสัชกรรมจัดบริการรับยา 4 ช่องทางหลัก:',
    details: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mt-3">
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
          <span className="font-bold text-emerald-950 flex items-center gap-1.5">
            <Building className="w-4 h-4 text-emerald-700" />
            <span>1. รับยา ณ ห้องจ่ายยา รพ.</span>
          </span>
          <p className="text-emerald-900">รับยาที่ห้องจ่ายยาผู้ป่วยนอก ชั้น 1 ด้วยระบบ Smart Queue แจ้งเตือนผ่านหน้าจอและแอปพลิเคชัน</p>
        </div>

        <div className="p-3 bg-teal-50 border border-teal-200 rounded-xl space-y-1">
          <span className="font-bold text-teal-950 flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-teal-700" />
            <span>2. ส่งยาถึงบ้าน (Health Rider / ไปรษณีย์)</span>
          </span>
          <p className="text-teal-900">ติดต่อโต๊ะ 41 (ต่อ 1183) สำหรับผู้ป่วยอาการคงที่ จัดส่งยาถึงบ้านรวดเร็วภายใน 1-2 วัน</p>
        </div>

        <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl space-y-1">
          <span className="font-bold text-blue-950 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-blue-700" />
            <span>3. รับยาที่ร้านยาใกล้บ้าน</span>
          </span>
          <p className="text-blue-900">โครงการร้านยาคุณภาพใกล้บ้าน ไม่ต้องรอคอยที่โรงพยาบาล รับยากับเภสัชกรชุมชน</p>
        </div>

        <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl space-y-1">
          <span className="font-bold text-purple-950 flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-purple-700" />
            <span>4. รับยาที่ รพ.สต. ในเครือข่าย</span>
          </span>
          <p className="text-purple-900">พบแพทย์ผ่าน Telemedicine และรับยาต่อเนื่อง ณ โรงพยาบาลส่งเสริมสุขภาพตำบลใกล้บ้าน</p>
        </div>
      </div>
    )
  }
];

export const NewsView: React.FC<{ lang?: Language }> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ทั้งหมด');
  const [activeItem, setActiveItem] = useState<NewsItemCustom | null>(null);

  const categories = [
    'ทั้งหมด',
    'วารสารเภสัชกรรมโรงพยาบาล',
    'รับสมัครงาน',
    'ช่องทางการเลือกรับยา',
  ];

  const filtered = NEWS_DATA.filter((n) => {
    if (selectedCategory === 'ทั้งหมด') return true;
    return n.category === selectedCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold mb-2 border border-blue-200">
              <Newspaper className="w-4 h-4 text-blue-600" />
              <span>NEWS & COMMUNICATIONS</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">
              ข่าว/ประชาสัมพันธ์
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              วารสารเภสัชกรรมโรงพยาบาล ข่าวรับสมัครงาน และช่องทางการเลือกรับยา
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 text-xs font-semibold">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-700 text-white font-bold shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 text-xs mb-3">
                <span
                  className={`font-bold px-2.5 py-0.5 rounded-full ${
                    item.category === 'วารสารเภสัชกรรมโรงพยาบาล'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : item.category === 'รับสมัครงาน'
                      ? 'bg-blue-50 text-blue-800 border border-blue-200'
                      : 'bg-purple-50 text-purple-800 border border-purple-200'
                  }`}
                >
                  {item.category}
                </span>
                <span className="text-slate-400 text-xs">{item.date}</span>
              </div>

              <h2 className="font-bold text-slate-900 text-base mb-2 hover:text-emerald-700 transition-colors">
                {item.title}
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {item.summary}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-700 font-bold">
              <span>อ่านรายละเอียด</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs animate-in fade-in"
            onClick={() => setActiveItem(null)}
          />
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6 z-10 space-y-4 animate-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {activeItem.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-2">
                  {activeItem.title}
                </h3>
                <span className="text-xs text-slate-400 mt-1 block">
                  วันที่: {activeItem.date}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>{activeItem.content}</p>
              {activeItem.details}
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl"
              >
                ปิดหน้าต่าง
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

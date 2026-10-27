import React, { useState, useEffect } from 'react';
import {
  Newspaper,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Building,
  Truck,
  MapPin,
  Clock,
  Image as ImageIcon
} from 'lucide-react';
import { Language } from '../types/pharmacy';

// รายการรูปภาพแบนเนอร์ประชาสัมพันธ์
const BANNER_IMAGES = [
  {
    id: 1,
    title: 'โรงพยาบาลวชิระภูเก็ต รับการเยี่ยมสำรวจงานเภสัชกรรมและระบบยา',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-t4nfyeNN6CwiquU2avv68TZK2fQEag1kvtX5gaYd_pnxKQ_4TrX0dY&s=10',
  },
  {
    id: 2,
    title: 'บริการจัดส่งยาถึงบ้านผ่าน Health Rider',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'เปิดบริการตู้เบิกยาอัตโนมัติ Smart Pharmacy',
    imageUrl: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80',
  },
];

// รายการภาพบรรยากาศการดำเนินงานและกิจกรรม (3 การ์ดด้านล่าง)
const ACTIVITY_GALLERY = [
  {
    id: 'act-1',
    title: 'โรงพยาบาลวชิระภูเก็ต',
    imageUrl: 'https://pr.moph.go.th/assets/uploads/news/2569/f58e487b02a3abbd2051eff3969b1c8a.jpg',
  },
  {
    id: 'act-2',
    title: '***',
    imageUrl: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'act-3',
    title: '***',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
  },
];

interface NewsItemCustom {
  id: string;
  category: 'กลุ่มงานเภสัชกรรม' | 'รับสมัครงาน' | 'ช่องทางการเลือกรับยา';
  title: string;
  date: string;
  summary: string;
  content: string;
  details?: React.ReactNode;
  imageUrl?: string;
}

const NEWS_DATA: NewsItemCustom[] = [
  {
    id: 'journal-1',
    category: 'กลุ่มงานเภสัชกรรม',
    title: 'โรงพยาบาลวชิระภูเก็ต รับการเยี่ยมสำรวจงานเภสัชกรรมและระบบยา',
    date: '12 ตุลาคม 2569',
    summary: 'นพ.สุรัตน์ ตันติทวีวรกุล ผู้อำนวยการโรงพยาบาลวชิระภูเก็ต เป็นประธานเปิดและกล่าวต้อนรับ ภญ.วิชชุนี พิตรากูล และ ภญ.พาขวัญ ปุณณุปูรต ผู้เยี่ยมสำรวจจากสมาคมเภสัชกรรมโรงพยาบาล (ประเทศไทย) ',
    content: 'นพ.สุรัตน์ ตันติทวีวรกุล ผู้อำนวยการโรงพยาบาลวชิระภูเก็ต เป็นประธานเปิดและกล่าวต้อนรับ ภญ.วิชชุนี พิตรากูล และ ภญ.พาขวัญ ปุณณุปูรต ผู้เยี่ยมสำรวจจากสมาคมเภสัชกรรมโรงพยาบาล (ประเทศไทย) โดยมี ภก.สมนึก ฮาเส็ม หัวหน้ากลุ่มงานเภสัชกรรม กล่าวรายงาน พร้อมด้วยคณะผู้บริหารและบุคลากรโรงพยาบาลร่วมต้อนรับ ณ ห้องประชุมราชพฤกษ์ อาคารบ้านคุณพุ่ม ชั้น 6 การเยี่ยมสำรวจครั้งนี้มีวัตถุประสงค์เพื่อทบทวนและประเมินการดำเนินงานด้านเภสัชกรรมและระบบยา พร้อมรับข้อเสนอแนะในการพัฒนาคุณภาพบริการ เพื่อเตรียมความพร้อมสำหรับการรับรองคุณภาพสถานพยาบาล (Re-accreditation) ครั้งที่ 4 จากสถาบันรับรองคุณภาพสถานพยาบาล (องค์การมหาชน)',
    imageUrl:'https://pr.moph.go.th/assets/uploads/news/2569/f58e487b02a3abbd2051eff3969b1c8a.jpg'
  },
  {
    id: 'journal-2',
    category: 'กลุ่มงานเภสัชกรรม',
    title: '',
    date: '15 ก.พ. 2569',
    summary: '',
    content: ''
  },
  {
    id: 'job-1',
    category: 'รับสมัครงาน',
    title: '',
    date: '',
    summary: '',
    content: '',
    details: (
      <div className="space-y-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200">
        <p><strong>คุณสมบัติ:</strong> </p>
        <p><strong>อัตราค่าจ้าง:</strong> </p>
        <p><strong>สมัครได้ที่:</strong> </p>
      </div>
    )
  },
  {
    id: 'job-2',
    category: 'รับสมัครงาน',
    title: '',
    date: '28 ก.ย. 2569',
    summary: '',
    content: ''
  },
  {
    id: 'delivery-1',
    category: 'ช่องทางการเลือกรับยา',
    title: '',
    date: 'อัปเดต 2569',
    summary: '',
    content: '',
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

  // --- Auto Slider State & Logic ---
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNER_IMAGES.length);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % BANNER_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + BANNER_IMAGES.length) % BANNER_IMAGES.length);
  };

  const categories = [
    'ทั้งหมด',
    'กลุ่มงานเภสัชกรรม',
    'รับสมัครงาน',
    'ช่องทางการเลือกรับยา',
  ];

  const filtered = NEWS_DATA.filter((n) => {
    if (selectedCategory === 'ทั้งหมด') return true;
    return n.category === selectedCategory;
  });

  return (
    <div className="space-y-6">
      
      {/* 1. Header Section & Category Filter */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold mb-2 border border-blue-200">
              <Newspaper className="w-4 h-4 text-blue-600" />
              <span>NEWS & COMMUNICATIONS</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">
              ข่าว/ประชาสัมพันธ์
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              กลุ่มงานเภสัชกรรม
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 text-xs font-semibold">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-emerald-700 text-white font-bold shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. ส่วน Banner ประชาสัมพันธ์ (สไลด์รูปใหญ่) */}
      <div className="bg-emerald-50/40 p-4 sm:p-6 rounded-3xl border border-emerald-100/60 shadow-xs space-y-6">
        
        {/* Banner Carousel */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-emerald-600 rounded-full"></div>
            <h2 className="text-lg font-bold text-slate-800">ประชาสัมพันธ์</h2>
          </div>

          <div className="relative w-full h-[320px] sm:h-[450px] md:h-[500px] rounded-2xl overflow-hidden shadow-md bg-slate-100 group">
            {BANNER_IMAGES.map((banner, index) => (
              <div
                key={banner.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={banner.imageUrl}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                {/* Text Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 sm:p-8 text-white">
                  <p className="text-base sm:text-2xl font-bold drop-shadow-md">
                    {banner.title}
                  </p>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {BANNER_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentSlide === idx ? 'w-8 bg-white' : 'w-2 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 3. ภาพบรรยากาศการดำเนินงานและกิจกรรม */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
          <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-emerald-600" />
            <span>ข่าว/ประชาสัมพันธ์</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {ACTIVITY_GALLERY.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all bg-slate-50"
              >
                <div className="h-44 sm:h-48 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 bg-white border-t border-slate-100">
                  <p className="text-xs font-semibold text-slate-700 text-center line-clamp-1">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 4. Grid แสดงรายการข่าวตามหมวดหมู่ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-emerald-500 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* แสดงรูปภาพพรีวิวบนการ์ดข่าว (ถ้ามี) */}
              {item.imageUrl && (
                <div className="w-full h-48 sm:h-52 overflow-hidden bg-slate-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center justify-between gap-2 text-xs mb-3">
                  <span
                    className={`font-bold px-2.5 py-0.5 rounded-full ${
                      item.category === 'กลุ่มงานเภสัชกรรม'
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
                  {item.title || 'ไม่มีหัวข้อ'}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {item.summary || 'ไม่มีเนื้อหาย่อ'}
                </p>
              </div>
            </div>

            <div className="px-6 pb-5 pt-0 flex items-center justify-between text-xs text-emerald-700 font-bold border-t border-slate-100 mt-2">
              <span className="pt-3">อ่านรายละเอียด</span>
              <ArrowRight className="w-4 h-4 pt-3" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal รายละเอียดข่าว (แสดงเมื่อกด อ่านรายละเอียด) */}
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
                  {activeItem.title || 'รายละเอียดข่าว'}
                </h3>
                {activeItem.date && (
                  <span className="text-xs text-slate-400 mt-1 block">
                    วันที่: {activeItem.date}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* เพิ่มส่วนนี้: แสดงรูปภาพขนาดใหญ่ใน Modal อ่านรายละเอียด */}
            {activeItem.imageUrl && (
              <div className="w-full max-h-80 rounded-xl overflow-hidden bg-slate-100">
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>{activeItem.content}</p>
              {activeItem.details}
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl cursor-pointer"
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

import React from 'react';
import { Calendar, MapPin, Clock, Users, CheckCircle, Sparkles } from 'lucide-react';
import { Language } from '../types/pharmacy';

export const ActivitiesView: React.FC<{ lang: Language }> = ({ lang }) => {
  const events = [
    {
      id: 'e-1',
      title: 'สัปดาห์ความปลอดภัยด้านยา (Medication Safety Week 2569)',
      date: '12 - 16 ต.ค. 2569',
      time: '09:00 - 15:30 น.',
      location: 'โถงกิจกรรม ชั้น 1 อาคารเฉลิมพระเกียรติฯ รพ.วชิระภูเก็ต',
      description: 'กิจกรรมตรวจเช็ครายการยาที่บ้าน (Brown Bag Review), ให้คำปรึกษาการใช้อุปกรณ์ยาพิเศษฟรี, และนิทรรศการความรู้ 3P Safety',
      status: 'upcoming',
    },
    {
      id: 'e-2',
      title: 'งานประชุมวิชาการเนื่องในวันเภสัชกรรมแห่งชาติ (World Pharmacist Day)',
      date: '25 ก.ย. 2569',
      time: '08:30 - 16:00 น.',
      location: 'ห้องประชุมคุณพุ่ม ชั้น 6 อาคารคุณพุ่ม',
      description: 'หัวข้อ "AI and Smart Technology in Hospital Pharmacy Practice" พร้อมมอบรางวัลเภสัชกรดีเด่นและนำเสนอผลงาน R2R',
      status: 'completed',
    },
    {
      id: 'e-3',
      title: 'โครงการอบรมเชิงปฏิบัติการ: การบริหารยาเคมีบำบัดอย่างปลอดภัยสำหรับพยาบาลวิชาชีพ',
      date: '5 พ.ย. 2569',
      time: '13:00 - 16:30 น.',
      location: 'ห้องสัมมนา กลุ่มงานเภสัชกรรม ชั้น 4 อาคารมะเร็งวิทยา',
      description: 'ฝึกปฏิบัติการแก้ไขเหตุฉุกเฉินกรณีสารเคมีบำบัดรั่วไหล (Chemo Spill Kit Management) โดยเภสัชกรผู้เชี่ยวชาญ',
      status: 'upcoming',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-bold mb-2 border border-rose-200">
          <Calendar className="w-4 h-4 text-rose-600" />
          <span>ACTIVITIES & EVENTS</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">
          {lang === 'th' ? 'ปฏิทินกิจกรรมและการอบรม' : 'Activities & Training Calendar'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          กิจกรรมบริการประชาชน สัปดาห์ความปลอดภัยด้านยา และการอบรมฟื้นฟูวิชาการอย่างต่อเนื่อง
        </p>
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                      event.status === 'upcoming'
                        ? 'bg-rose-50 text-rose-700 border border-rose-200'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {event.status === 'upcoming' ? 'กำลังจะจัดขึ้น' : 'เสร็จสิ้นแล้ว'}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-slate-900">
                  {event.title}
                </h2>
              </div>

              <div className="bg-rose-50 border border-rose-200/80 p-3 rounded-xl text-xs text-rose-950 font-bold shrink-0 flex items-center gap-2 self-start">
                <Calendar className="w-4 h-4 text-rose-700" />
                <span>{event.date}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {event.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-500 pt-3 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>เวลา: {event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>สถานที่: {event.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

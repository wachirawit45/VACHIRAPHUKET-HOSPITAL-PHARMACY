import React from 'react';
import { Building2, Target, Eye, Award, Shield, HeartHandshake, CheckCircle } from 'lucide-react';
import { HospitalLogo } from '../components/HospitalLogo';
import { Language } from '../types/pharmacy';

export const AboutView: React.FC<{ lang: Language; initialSection?: string | null }> = ({
  lang,
  initialSection,
}) => {
  const visionRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (initialSection === 'vision-mission' && visionRef.current) {
      visionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [initialSection]);

  return (
    <div className="space-y-8 font-['Sarabun',sans-serif]">
      {/* Page Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-4">
          <HospitalLogo size={60} />
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-1 border border-emerald-200">
              <Building2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>ABOUT DEPARTMENT</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {lang === 'th' ? 'เกี่ยวกับกลุ่มงานเภสัชกรรม' : 'About Department of Pharmacy'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600">
              โรงพยาบาลวชิระภูเก็ต สำนักงานสาธารณสุขจังหวัดภูเก็ต
            </p>
          </div>
        </div>
      </div>
{/* ส่วนแสดงภาพบรรยากาศ / กิจกรรมกลุ่มงาน */}
<div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
  <h2 className="text-xl font-bold text-slate-900">
    ภาพบรรยากาศการดำเนินงานและกิจกรรม
  </h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {/* รูปที่ 1 */}
    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs h-48">
      <img 
        src="URL_รูปที่1" 
        alt="ห้องจ่ายยาและบริการผู้ป่วย" 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* รูปที่ 2 */}
    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs h-48">
      <img 
        src="URL_รูปที่2" 
        alt="ระบบหุ่นยนต์จัดยาอัตโนมัติ" 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* รูปที่ 3 */}
    <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs h-48">
      <img 
        src="URL_รูปที่3" 
        alt="การบริบาลทางเภสัชกรรมผู้ป่วยใน" 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  </div>
</div>
      {/* Vision & Mission Cards */}
      <div ref={visionRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 scroll-mt-24">
        {/* Vision Card */}
        <div className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-2xl p-6 sm:p-7 shadow-sm border border-emerald-800 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-emerald-300">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-emerald-300 mb-2">
              {lang === 'th' ? 'วิสัยทัศน์ (Vision)' : 'Vision'}
            </h2>
            <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
              &ldquo;เป็นเลิศด้านเภสัชกรรมบริการด้วยเทคโนโลยีทันสมัย ใส่ใจความปลอดภัยของผู้รับบริการ มุ่งสู่โรงพยาบาลอัจฉริยะระดับแนวหน้าของประเทศ&rdquo;
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-emerald-800/80 text-xs text-emerald-300 font-semibold">
            Service Excellence & Smart Pharmacy Leader
          </div>
        </div>

        {/* Mission Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 text-emerald-700">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              {lang === 'th' ? 'พันธกิจ 3 ประการ (Missions)' : 'Missions'}
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  1
                </span>
                <span>พัฒนางานเภสัชกรรมตามมาตรฐานวิชาชีพเภสัชกรรมระดับสากล</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  2
                </span>
                <span>พัฒนาระบบงานบริการให้สอดคล้องกับ Smart Hospital และมาตรฐาน 3P Safety</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  3
                </span>
                <span>ส่งเสริมการบริการทางเภสัชกรรม และพัฒนาสมรรถนะของบุคลากรตามนโยบาย Service Excellence</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3P Safety Framework */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div>
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            SAFETY CULTURE
          </span>
          <h2 className="text-xl font-bold text-slate-900 mt-1">
            เข็มมุ่ง 3P Safety โรงพยาบาลวชิระภูเก็ต
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            วัฒนธรรมความปลอดภัยด้านยาที่ยึดถือในการปฏิบัติงานของเภสัชกรและเจ้าพนักงานเภสัชกรรมทุกคน
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold">
              P1
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Patient Safety (ความปลอดภัยของผู้ป่วย)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              ป้องกันความคลาดเคลื่อนทางยา (Medication Error) ตรวจสอบประวัติแพ้ยาแบบเรียลไทม์ และระบบ Double check ในยา High Alert Drugs
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-10 h-10 rounded-lg bg-teal-700 text-white flex items-center justify-center font-bold">
              P2
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Personnel Safety (ความปลอดภัยของบุคลากร)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              ปกป้องเภสัชกรและเจ้าหน้าที่จากการสัมผัสสารเคมีอันตราย ยาเคมีบำบัด ด้วยตู้ Cleanroom Class 100 และอุปกรณ์ PPE มาตรฐานสากล
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center font-bold">
              P3
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Public Safety (ความปลอดภัยของชุมชน)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              การจัดการขยะอันตรายและเศษยาตกค้างอย่างถูกวิธี การส่งเสริมการใช้ยาอย่างสมเหตุผล (RDU) ในเครือข่ายสุขภาพจังหวัดภูเก็ต
            </p>
          </div>
        </div>
      </div>

      {/* History & Milestones */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          ประวัติความเป็นมาและพัฒนาการ
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          กลุ่มงานเภสัชกรรม โรงพยาบาลวชิระภูเก็ต เริ่มก่อตั้งพร้อมกับการเปิดให้บริการของโรงพยาบาลเพื่อตอบสนองต่อความต้องการด้านยาของผู้ป่วยในจังหวัดภูเก็ตและฝั่งอันดามัน ปัจจุบันได้ยกระดับสู่โรงพยาบาลศูนย์ขนาด 700+ เตียง โดยมีเภสัชกรประจำการกว่า 40 ท่าน ครอบคลุมการบริบาลเฉพาะทางทุกสาขา พร้อมด้วยระบบจัดยาอัตโนมัติ (Automated Dispensing Robot) ระบบคลังยาควบคุมด้วย IoT และระบบบันทึกคำสั่งใช้ยาแบบอิเล็กทรอนิกส์ (CPOE) ครบวงจร
        </p>
      </div>
    </div>
  );
};

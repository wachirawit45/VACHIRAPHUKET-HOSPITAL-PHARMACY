import React, { useState } from 'react';
import { MessageSquare, PhoneCall, HelpCircle, CheckCircle2, Send, Clock, UserCheck, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_LIST } from '../data/pharmacyData';
import { Language } from '../types/pharmacy';

export const ConsultationView: React.FC<{ lang: Language }> = ({ lang }) => {
  const [topic, setTopic] = useState('forgot-med');
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [hn, setHn] = useState('');
  const [question, setQuestion] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold mb-2 border border-teal-200">
              <MessageSquare className="w-4 h-4 text-teal-600" />
              <span>PHARMACIST TELE-CONSULTATION</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">
              {lang === 'th' ? 'ปรึกษาเภสัชกรออนไลน์ โรงพยาบาลวชิระภูเก็ต' : 'Online Pharmacist Consultation'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              บริการให้คำปรึกษาการใช้ยาอย่างปลอดภัย ตอบข้อสงสัยเกี่ยวกับผลข้างเคียง อันตรกิริยาระหว่างยา และเทคนิคการใช้อุปกรณ์ยาพิเศษ
            </p>
          </div>

          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 p-3 rounded-xl self-start md:self-auto text-xs">
            <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
            <div>
              <span className="font-bold text-slate-900 block">เวลาให้บริการตอบกลับ</span>
              <span className="text-slate-500">จันทร์ - ศุกร์ 08:30 - 16:30 น. (กรณีฉุกเฉินโทรสายด่วน)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Consultation Form (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-emerald-700" />
              <span>แบบฟอร์มส่งคำถามถึงเภสัชกรคลินิก</span>
            </h2>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-3 animate-in fade-in">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  ส่งคำถามถึงเภสัชกรเรียบร้อยแล้ว
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  เภสัชกรคลินิก โรงพยาบาลวชิระภูเก็ต จะติดต่อกลับเพื่อให้คำแนะนำผ่านเบอร์โทรศัพท์ที่ระบุไว้ภายใน 1-2 ชั่วโมงทำการ
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setQuestion('');
                  }}
                  className="mt-4 px-4 py-2 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-200"
                >
                  ส่งคำถามเพิ่มเติม
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-xs">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    หัวข้อที่ต้องการปรึกษา:
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 font-medium"
                  >
                    <option value="forgot-med">ลืมรับประทานยา / ทานยาผิดมื้อ</option>
                    <option value="side-effect">สงสัยอาการแพ้ยา หรือมีอาการข้างเคียง</option>
                    <option value="drug-interaction">สอบถามการทานยาร่วมกับยาอื่น หรืออาหารเสริม/สมุนไพร</option>
                    <option value="technique">เทคนิคการใช้ยาพ่น / ปากกาอินซูลิน / ยาหยอดตา</option>
                    <option value="pregnancy">การใช้ยาในสตรีมีครรภ์ หรือคุณแม่ให้นมบุตร</option>
                    <option value="other">เรื่องอื่นๆ</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      ชื่อ-นามสกุล ผู้ป่วย / ผู้สอบถาม:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="เช่น สมชาย ใจดี"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      เบอร์โทรศัพท์ติดต่อกลับ:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="เช่น 081-234-5678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    เลขประจำตัวผู้ป่วยโรงพยาบาลวชิระภูเก็ต (HN) (ถ้ามี):
                  </label>
                  <input
                    type="text"
                    placeholder="เช่น 6912345 (ช่วยให้เภสัชกรตรวจสอบประวัติยาได้แม่นยำ)"
                    value={hn}
                    onChange={(e) => setHn(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    รายละเอียดคำถาม หรือข้อสงสัยเกี่ยวกับยา:
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="ระบุชื่อยาที่กำลังรับประทาน อาการที่พบ หรือข้อสงสัยโดยละเอียด..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-600 leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>ส่งคำถามปรึกษาเภสัชกร</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: FAQ & Direct Hotline Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Hotline Contacts */}
          <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white rounded-2xl p-5 shadow-sm space-y-4">
            <h3 className="font-bold text-sm flex items-center gap-2 text-emerald-300">
              <PhoneCall className="w-4 h-4" />
              <span>สายด่วนห้องยา โรงพยาบาลวชิระภูเก็ต</span>
            </h3>

            <div className="space-y-2 text-xs">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-xs flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">ห้องจ่ายยาผู้ป่วยนอก ชั้น 1 (OPD)</span>
                  <span className="text-slate-300">076-361234</span>
                </div>
                <span className="font-bold text-emerald-300 text-sm">ต่อ 1183, 1184</span>
              </div>

              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-xs flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">โครงการเติมยา & Health Rider (โต๊ะ 41)</span>
                  <span className="text-slate-300">บริการส่งยาถึงบ้าน</span>
                </div>
                <span className="font-bold text-teal-300 text-sm">ต่อ 1183</span>
              </div>

              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-xs flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">คลินิกบริบาลเภสัชกรรมเฉพาะโรค</span>
                  <span className="text-slate-300">วาร์ฟาริน / หอบหืด / ไต</span>
                </div>
                <span className="font-bold text-rose-300 text-sm">ต่อ 1238</span>
              </div>

              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-xs flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">ห้องจ่ายยาอุบัติเหตุและฉุกเฉิน (ER 24 ชม.)</span>
                  <span className="text-slate-300">บริการตลอด 24 ชั่วโมง</span>
                </div>
                <span className="font-bold text-amber-300 text-sm">ต่อ 1180</span>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions (FAQ) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2 pb-2 border-b border-slate-100">
              <HelpCircle className="w-4 h-4 text-emerald-700" />
              <span>คำถามที่พบบ่อยเกี่ยวกับการใช้ยา (FAQ)</span>
            </h3>

            <div className="space-y-2">
              {FAQ_LIST.map((faq, index) => {
                const isExpanded = expandedFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-xl overflow-hidden text-xs transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedFaq(isExpanded ? null : index)}
                      className="w-full text-left p-3 font-semibold text-slate-800 hover:bg-slate-50 flex items-center justify-between gap-2"
                    >
                      <span>{faq.q}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-emerald-700 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>
                    {isExpanded && (
                      <div className="p-3 pt-0 text-slate-600 bg-slate-50/50 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { GraduationCap, BookOpen, Download, Award, FileCheck } from 'lucide-react';
import { ACADEMIC_LIST } from '../data/pharmacyData';
import { Language } from '../types/pharmacy';

export const AcademicView: React.FC<{ lang: Language }> = ({ lang }) => {
  const [filterType, setFilterType] = useState<string>('All');

  const filteredItems = ACADEMIC_LIST.filter((item) => {
    if (filterType === 'All') return true;
    return item.type === filterType;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-bold mb-2 border border-purple-200">
              <GraduationCap className="w-4 h-4 text-purple-600" />
              <span>ACADEMIC WORKS & RESEARCH</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">
              {lang === 'th' ? 'ผลงานวิชาการและงานวิจัย R2R' : 'Academic Works & Research'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              ผลงานการพัฒนางานประจำสู่งานวิจัย (Routine to Research) นวัตกรรมบริการ และบทความวิจัยที่ได้รับการตีพิมพ์
            </p>
          </div>

          <div className="flex gap-1.5 text-xs font-medium">
            {['All', 'R2R', 'Innovation', 'Publication'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFilterType(type)}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  filterType === type
                    ? 'bg-purple-800 text-white font-bold shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {type === 'All' ? 'ทั้งหมด' : type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Academic List */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 hover:border-purple-300 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
                    {item.type}
                  </span>
                  <span className="text-xs text-slate-400">ปีที่เผยแพร่: พ.ศ. {item.year}</span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  {item.title}
                </h2>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  ผู้วิจัย: {item.authors} (โรงพยาบาลวชิระภูเก็ต)
                </p>
              </div>

              <button
                type="button"
                onClick={() => alert(`ดาวน์โหลดบทคัดย่อวิจัย "${item.title}" เรียบร้อยแล้ว`)}
                className="px-3.5 py-2 bg-purple-50 hover:bg-purple-100 text-purple-800 rounded-xl text-xs font-bold transition-colors shrink-0 flex items-center gap-1.5 self-start"
              >
                <Download className="w-4 h-4" />
                <span>ดาวน์โหลด Abstract (PDF)</span>
              </button>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/70 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <span className="font-bold text-slate-900 block mb-1">บทคัดย่อ (Abstract):</span>
              {item.abstract}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

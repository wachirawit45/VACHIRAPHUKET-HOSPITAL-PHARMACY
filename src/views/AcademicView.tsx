
import React, { useState } from 'react';
import {
  GraduationCap,
  Download,
  Search,
  X,
} from 'lucide-react';

import { ACADEMIC_LIST } from '../data/pharmacyData';
import { Language } from '../types/pharmacy';

export const AcademicView: React.FC<{ lang: Language }> = ({ lang }) => {
  // ตัวกรองประเภทผลงาน
  const [filterType, setFilterType] = useState<string>('All');

  // คำค้นหา
  const [searchTerm, setSearchTerm] = useState('');

  // กรองข้อมูลตามประเภทและคำค้นหา
  const filteredItems = ACADEMIC_LIST.filter((item) => {
    const matchesType =
      filterType === 'All' || item.type === filterType;

    const keyword = searchTerm.trim().toLowerCase();

    const matchesSearch = [
      item.title,
      item.authors,
      item.year,
      item.type,
      item.abstract,
    ]
      .join(' ')
      .toLowerCase()
      .includes(keyword);

    return matchesType && matchesSearch;
  });

  const filterTypes = [
    'All',
    'R2R',
    'CQI',
    'Innovation',
    'Publication',
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-col gap-5">
          {/* หัวข้อ */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-bold mb-2 border border-purple-200">
              <GraduationCap className="w-4 h-4 text-purple-600" />
              <span>ACADEMIC WORKS &amp; RESEARCH</span>
            </div>

            <h1 className="text-2xl font-bold text-slate-900">
              {lang === 'th'
                ? 'ผลงานวิชาการและงานวิจัย'
                : 'Academic Works & Research'}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              ผลงานการพัฒนางานประจำสู่งานวิจัย
            </p>
          </div>

          {/* ปุ่มกรองประเภทผลงาน */}
          <div className="flex flex-wrap gap-2 text-xs font-medium">
            {filterTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFilterType(type)}
                className={`px-4 py-2 rounded-xl transition-all ${
                  filterType === type
                    ? 'bg-purple-800 text-white font-bold shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-purple-50 hover:text-purple-800'
                }`}
              >
                {type === 'All' ? 'ทั้งหมด' : type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Box */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm">
        <label
          htmlFor="academic-search"
          className="block text-sm font-bold text-slate-700 mb-3"
        >
          ค้นหาผลงานวิชาการ
        </label>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

          <input
            id="academic-search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ชื่อผลงาน ผู้วิจัย ปี พ.ศ. หรือประเภท..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-12 text-sm text-slate-800 outline-none transition focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-100"
          />

          {searchTerm !== '' && (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              aria-label="ล้างคำค้นหา"
              title="ล้างคำค้นหา"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-700"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* จำนวนผลการค้นหา */}
        <div className="flex flex-wrap items-center justify-between gap-2 mt-3">
          <p className="text-xs text-slate-500">
            พบ {filteredItems.length} รายการ
            {searchTerm.trim() !== '' &&
              ` จากคำค้นหา "${searchTerm.trim()}"`}
          </p>

          {(searchTerm !== '' || filterType !== 'All') && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setFilterType('All');
              }}
              className="text-xs font-bold text-purple-700 hover:text-purple-900"
            >
              ล้างตัวกรองทั้งหมด
            </button>
          )}
        </div>
      </div>

      {/* Academic List */}
      <div className="space-y-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div
              key={`${item.id}-${item.type}-${index}`}
              className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4 hover:border-purple-300 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                {/* รายละเอียดผลงาน */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
                      {item.type}
                    </span>

                    <span className="text-xs text-slate-400">
                      ปีที่เผยแพร่: พ.ศ. {item.year}
                    </span>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-slate-900 break-words">
                    {item.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
                    ผู้วิจัย: {item.authors || '-'}
                  </p>

                  {item.abstract && (
                    <p className="text-sm text-slate-600 mt-3 leading-relaxed whitespace-pre-line">
                      {item.abstract}
                    </p>
                  )}
                </div>

                {/* ปุ่มเปิดเอกสาร */}
                <div className="shrink-0">
                  {item.downloadUrl ? (
                    <a
                      href={item.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-purple-50 hover:bg-purple-100 text-purple-800 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>เปิดเอกสาร</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="px-4 py-2.5 bg-slate-100 text-slate-400 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-not-allowed"
                    >
                      <Download className="w-4 h-4" />
                      <span>ไม่มีเอกสาร</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          /* ไม่พบข้อมูล */
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <Search className="mx-auto mb-3 h-10 w-10 text-slate-300" />

            <p className="font-bold text-slate-700">
              ไม่พบผลงานที่ค้นหา
            </p>

            <p className="mt-2 text-sm text-slate-500">
              ลองเปลี่ยนคำค้นหาหรือเลือกประเภทผลงานอื่น
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setFilterType('All');
              }}
              className="mt-4 rounded-xl bg-purple-800 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-purple-900"
            >
              แสดงผลงานทั้งหมด
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

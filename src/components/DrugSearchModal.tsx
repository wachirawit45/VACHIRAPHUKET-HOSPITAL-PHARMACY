import React, { useState, useMemo } from 'react';
import { Search, X, AlertTriangle, ShieldAlert, Sparkles, CheckCircle2, ChevronRight, Info } from 'lucide-react';
import { DrugItem, Language } from '../types/pharmacy';
import { DRUG_DATABASE } from '../data/pharmacyData';

interface DrugSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onSelectDrug?: (drug: DrugItem) => void;
}

export const DrugSearchModal: React.FC<DrugSearchModalProps> = ({
  isOpen,
  onClose,
  lang,
  onSelectDrug,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [onlyHAD, setOnlyHAD] = useState(false);
  const [activeDrug, setActiveDrug] = useState<DrugItem | null>(null);

  const filteredDrugs = useMemo(() => {
    return DRUG_DATABASE.filter((drug) => {
      const matchSearch =
        drug.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        drug.tradeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        drug.indication.toLowerCase().includes(searchTerm.toLowerCase());

      const matchCategory =
        selectedCategory === 'All' || drug.category === selectedCategory;

      const matchHAD = !onlyHAD || drug.isHAD;

      return matchSearch && matchCategory && matchHAD;
    });
  }, [searchTerm, selectedCategory, onlyHAD]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="px-5 py-4 bg-emerald-800 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <Search className="w-5 h-5 text-emerald-200" />
            <h2 className="text-lg font-bold">
              {lang === 'th' ? 'ค้นหาข้อมูลยาในโรงพยาบาลวชิระภูเก็ต' : 'Drug Formulary Search'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-emerald-700 text-emerald-100 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search & Filters */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 space-y-3 shrink-0">
          {/* Input Box */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={
                lang === 'th'
                  ? 'พิมพ์ชื่อสามัญทางยา (Generic Name), ชื่อการค้า (Trade Name) หรือข้อบ่งใช้...'
                  : 'Search by generic name, brand name, or indication...'
              }
              className="w-full pl-11 pr-10 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent text-slate-900"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Filter Badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500 font-medium">หมวดหมู่:</span>
            {['All', 'Antibiotics', 'Cardiovascular', 'Endocrine', 'High-Alert'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-emerald-700 text-white'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat === 'All' ? (lang === 'th' ? 'ทั้งหมด' : 'All') : cat}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setOnlyHAD(!onlyHAD)}
              className={`ml-auto px-3 py-1 rounded-full font-medium flex items-center gap-1.5 transition-colors ${
                onlyHAD
                  ? 'bg-rose-700 text-white'
                  : 'bg-rose-50 border border-rose-200 text-rose-700 hover:bg-rose-100'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>{lang === 'th' ? 'เฉพาะยาความเสี่ยงสูง (HAD)' : 'High-Alert Only'}</span>
            </button>
          </div>
        </div>

        {/* Content Area: Split View or List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5">
          {activeDrug ? (
            /* Detailed Card */
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4 animate-in fade-in">
              <div className="flex items-start justify-between border-b border-slate-100 pb-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="text-xl font-bold text-slate-900">
                      {activeDrug.genericName}
                    </h3>
                    <span className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {activeDrug.tradeName}
                    </span>
                    {activeDrug.isHAD && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                        <ShieldAlert className="w-3 h-3" />
                        HIGH ALERT DRUG
                      </span>
                    )}
                    {activeDrug.isLASA && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        <AlertTriangle className="w-3 h-3" />
                        LASA ({activeDrug.lasaPair})
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500">
                    รูปแบบยา: {activeDrug.dosageForm} | ความแรง: {activeDrug.strength} | Pregnancy Cat: {activeDrug.pregnancyCategory}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveDrug(null)}
                  className="px-3 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                >
                  ← ย้อนกลับ
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70">
                  <span className="font-bold text-slate-800 block mb-1">🎯 ข้อบ่งใช้ (Indication):</span>
                  <p className="text-slate-700">{activeDrug.indication}</p>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/70">
                  <span className="font-bold text-slate-800 block mb-1">💊 วิธีการใช้ยาและขนาดยา:</span>
                  <p className="text-slate-700">{activeDrug.dosageInstructions}</p>
                </div>

                <div className="bg-amber-50/60 p-3.5 rounded-xl border border-amber-200/70">
                  <span className="font-bold text-amber-900 block mb-1">⚠️ ข้อควรระวังและการติดตาม:</span>
                  <p className="text-amber-900">{activeDrug.precautions}</p>
                </div>

                <div className="bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-200/70">
                  <span className="font-bold text-emerald-900 block mb-1">❄️ การเก็บรักษา:</span>
                  <p className="text-emerald-900">{activeDrug.storage}</p>
                </div>
              </div>

              {/* Patient counseling points */}
              <div className="p-4 bg-teal-50/70 border border-teal-200 rounded-xl">
                <h4 className="text-xs font-bold text-teal-900 mb-2 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-teal-700" />
                  คำแนะนำสำคัญสำหรับผู้ป่วย (Patient Counseling Points):
                </h4>
                <ul className="space-y-1.5 text-xs text-teal-950">
                  {activeDrug.counselingPoints.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            /* Drug List */
            <div className="space-y-2.5">
              <div className="text-xs text-slate-500 font-medium pb-1 flex items-center justify-between">
                <span>พบรายการยา {filteredDrugs.length} รายการ</span>
                <span>คลิกเพื่อดูรายละเอียดและข้อควรระวัง</span>
              </div>

              {filteredDrugs.length === 0 ? (
                <div className="text-center py-12 text-slate-500">
                  <p className="text-base font-semibold">ไม่พบรายการยาที่ค้นหา</p>
                  <p className="text-xs mt-1">ลองค้นหาด้วยชื่ออื่น หรือเลือกดูหมวดหมู่ทั้งหมด</p>
                </div>
              ) : (
                filteredDrugs.map((drug) => (
                  <div
                    key={drug.id}
                    onClick={() => setActiveDrug(drug)}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/30 transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-800">
                          {drug.genericName}
                        </span>
                        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          {drug.tradeName}
                        </span>
                        {drug.isHAD && (
                          <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">
                            HAD
                          </span>
                        )}
                        {drug.isLASA && (
                          <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                            LASA
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-1">
                        {drug.indication} · {drug.dosageForm} ({drug.strength})
                      </p>
                    </div>

                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 shrink-0 ml-2" />
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 shrink-0">
          <span>ระบบฐานข้อมูลยา โรงพยาบาลวชิระภูเก็ต (Hospital Formulary 2569)</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-white border border-slate-300 rounded-lg font-medium text-slate-700 hover:bg-slate-50"
          >
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  );
};

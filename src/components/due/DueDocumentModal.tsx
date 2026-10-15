import React from 'react';
import { X, Printer, Download, ShieldCheck, ExternalLink, HardDrive } from 'lucide-react';
import { HospitalLogo } from '../HospitalLogo';
import { DueDocumentItem } from '../../types/due';
import { getDriveLinkForCode } from '../../data/driveLinks';

interface DueDocumentModalProps {
  document: DueDocumentItem | null;
  onClose: () => void;
  onOpenDriveSettings?: (code: string) => void;
}

export const DueDocumentModal: React.FC<DueDocumentModalProps> = ({ document, onClose }) => {
  if (!document) return null;

  const driveUrl = getDriveLinkForCode(document.fileCode);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 bg-[#0a483a] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <HospitalLogo size={38} className="bg-white border-white" />
            <div>
              <span className="text-[11px] text-emerald-200 font-mono tracking-wider block">
                รหัสเอกสาร: {document.fileCode}
              </span>
              <h2 className="text-base sm:text-lg font-bold leading-tight">
                {document.name}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-emerald-800 text-emerald-100 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Document Content View */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-800 bg-[#fafafa]">
          {/* Official Document Sheet */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xs border border-slate-200 space-y-6">
            {/* Document Header */}
            <div className="text-center border-b border-slate-200 pb-5 space-y-1">
              <HospitalLogo size={56} className="mx-auto mb-2 bg-white" />
              <h3 className="font-bold text-lg text-slate-900">
                กลุ่มงานเภสัชกรรม โรงพยาบาลวชิระภูเก็ต
              </h3>
              <p className="text-sm font-semibold text-emerald-800">
                {document.name}
              </p>
              <div className="text-xs text-slate-500 font-mono pt-1">
                Ref. Code: <span className="font-bold text-slate-700">{document.fileCode}</span> | ปรับปรุงล่าสุด: {document.updateDate || '2569'}
              </div>
            </div>

            {/* Simulated Content Body */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200/80">
                <span className="font-bold text-emerald-950 block mb-1">
                  วัตถุประสงค์และข้อกำหนดตามเกณฑ์โรงพยาบาล:
                </span>
                <p className="text-emerald-900">
                  {document.description || 'เอกสารทางการฉบับนี้กำหนดขึ้นเพื่อกำกับดูแลความเหมาะสม ปลอดภัย และความคุ้มค่าของการใช้ยาตามมาตรฐาน 3P Safety โรงพยาบาลวชิระภูเก็ต'}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">ขั้นตอนและแนวทางปฏิบัติที่ต้องปฏิบัติตาม:</h4>
                <ol className="list-decimal list-inside space-y-2 text-slate-700">
                  <li>ตรวจสอบข้อบ่งใช้และเกณฑ์การสั่งใช้ยาที่ได้รับอนุมัติจากคณะกรรมการ PTC</li>
                  <li>บันทึกข้อมูลผลตรวจทางห้องปฏิบัติการที่จำเป็น (เช่น CrCl, CBC, LFTs, Culture)</li>
                  <li>ลงนามรับรองโดยแพทย์ผู้สั่งใช้ยา และส่งเอกสารให้เภสัชกรคลินิกตรวจสอบความปลอดภัย</li>
                  <li>กรณีเป็นยากลุ่มควบคุมพิเศษ ต้องได้รับความเห็นชอบจากแพทย์เฉพาะทางที่ได้รับมอบหมาย</li>
                </ol>
              </div>

              {document.type === 'consent' && (
                <div className="border border-amber-300 bg-amber-50/60 p-4 rounded-xl space-y-2">
                  <span className="font-bold text-amber-950 block">
                    ส่วนแสดงความยินยอมของผู้ป่วยหรือผู้มีอำนาจตัดสินใจแทน:
                  </span>
                  <p className="text-amber-900 text-xs">
                    ข้าพเจ้าได้รับฟังคำอธิบายจากแพทย์และเภสัชกรเกี่ยวกับประโยชน์ ข้อควรระวัง ภาวะเสี่ยงต่อการเกิดเลือดออกผิดปกติ และสัญญาณเตือนที่ต้องรีบมาพบแพทย์อย่างเข้าใจเรียบร้อยแล้ว จึงขอลงนามยินยอมเข้ารับการรักษา
                  </p>
                  <div className="pt-4 grid grid-cols-2 gap-4 text-center text-xs text-slate-600">
                    <div className="border-t border-slate-300 pt-2">ลงชื่อผู้ป่วย/ผู้แทน</div>
                    <div className="border-t border-slate-300 pt-2">ลงชื่อแพทย์ผู้ให้ข้อมูล</div>
                  </div>
                </div>
              )}

              {document.type === 'antidote' && (
                <div className="border border-rose-300 bg-rose-50/60 p-4 rounded-xl space-y-2">
                  <span className="font-bold text-rose-950 block">
                    แนวทางการบริหารยาต้านพิษฉุกเฉิน (Emergency Antidote Protocol):
                  </span>
                  <p className="text-rose-900 text-xs">
                    ยาต้านพิษจัดเป็นยาสำรองฉุกเฉินระดับสูง ให้เบิกใช้ได้ทันทีเมื่อเกิดภาวะ Life-threatening bleeding หรือต้องเข้ารับการผ่าตัดฉุกเฉินเร่งด่วน โดยต้องรายงานเภสัชกรประจำห้องยาฉุกเฉิน (ต่อ 1180) ทันที
                  </p>
                </div>
              )}
            </div>

            {/* Document Verification Footer */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1 text-emerald-800 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Vachira Phuket Pharmacy Quality Assured
              </span>
              <span>สถานะ: Active In Hospital System</span>
            </div>
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="px-6 py-3.5 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs shrink-0">
          <span className="text-slate-500 font-mono">
            FILE: {document.fileCode}.pdf
          </span>
          <div className="flex items-center gap-2">
            {driveUrl && (
              <a
                href={driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl font-bold transition-colors flex items-center gap-1.5"
                title="เปิดโฟลเดอร์ Google Drive"
              >
                <HardDrive className="w-3.5 h-3.5 text-[#0F9D58]" />
                <span className="hidden sm:inline">Google Drive</span>
                <span className="sm:hidden">Drive</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            )}
            <button
              type="button"
              onClick={() => window.print()}
              className="px-4 py-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl font-bold transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>พิมพ์เอกสาร (Print)</span>
            </button>
            <button
              type="button"
              onClick={() => alert(`ดาวน์โหลดไฟล์เอกสาร ${document.fileCode} เรียบร้อยแล้ว`)}
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>ดาวน์โหลด PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

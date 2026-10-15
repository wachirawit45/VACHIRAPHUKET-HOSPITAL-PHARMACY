import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Save, RotateCcw, Link2, Check, HardDrive } from 'lucide-react';
import { DEFAULT_DRIVE_LINKS, getStoredDriveLinks, saveStoredDriveLinks } from '../../data/driveLinks';

interface DriveSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLinksUpdated: () => void;
  targetCode?: string | null;
}

export const DriveSettingsModal: React.FC<DriveSettingsModalProps> = ({
  isOpen,
  onClose,
  onLinksUpdated,
  targetCode,
}) => {
  const [links, setLinks] = useState<Record<string, string>>({});
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const stored = getStoredDriveLinks();
      const initial: Record<string, string> = {};
      Object.keys(DEFAULT_DRIVE_LINKS).forEach((code) => {
        initial[code] = stored[code] || DEFAULT_DRIVE_LINKS[code].defaultUrl;
      });
      setLinks(initial);
      setSavedSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (code: string, url: string) => {
    setLinks((prev) => ({ ...prev, [code]: url }));
    setSavedSuccess(false);
  };

  const handleSave = () => {
    saveStoredDriveLinks(links);
    setSavedSuccess(true);
    onLinksUpdated();
    setTimeout(() => {
      setSavedSuccess(false);
    }, 2500);
  };

  const handleReset = (code: string) => {
    const def = DEFAULT_DRIVE_LINKS[code]?.defaultUrl || '';
    setLinks((prev) => ({ ...prev, [code]: def }));
  };

  const handleResetAll = () => {
    if (window.confirm('ต้องการรีเซ็ตลิงก์ Google Drive ทุกรายการกลับเป็นค่าเริ่มต้นหรือไม่?')) {
      const initial: Record<string, string> = {};
      Object.keys(DEFAULT_DRIVE_LINKS).forEach((code) => {
        initial[code] = DEFAULT_DRIVE_LINKS[code].defaultUrl;
      });
      setLinks(initial);
      saveStoredDriveLinks({});
      onLinksUpdated();
    }
  };

  const codesToDisplay = targetCode
    ? [targetCode]
    : Object.keys(DEFAULT_DRIVE_LINKS);

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
        <div className="px-6 py-4 bg-[#0F9D58] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <HardDrive className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold leading-tight">
                {targetCode ? `ตั้งค่าลิงก์ Google Drive: ${targetCode}` : 'ตั้งค่าลิงก์ Google Drive ประจำแต่ละหัวข้อ DUE'}
              </h2>
              <p className="text-xs text-emerald-100">
                แต่ละหัวข้อเชื่อมต่อแยก Drive อิสระ สามารถวางลิงก์ไฟล์หรือโฟลเดอร์ Google Drive ของโรงพยาบาลได้
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 bg-slate-50 text-slate-800 text-xs">
          {savedSuccess && (
            <div className="p-3 bg-emerald-100 border border-emerald-300 text-emerald-900 rounded-xl flex items-center gap-2 font-bold animate-in fade-in">
              <Check className="w-4 h-4 text-emerald-700" />
              <span>บันทึกลิงก์ Google Drive ลงในระบบเรียบร้อยแล้ว!</span>
            </div>
          )}

          <div className="space-y-3.5">
            {codesToDisplay.map((code) => {
              const meta = DEFAULT_DRIVE_LINKS[code];
              if (!meta) return null;
              const currentVal = links[code] || '';

              return (
                <div
                  key={code}
                  className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="font-bold text-slate-900 text-sm block">
                        {meta.title}
                      </span>
                      <span className="font-mono text-[11px] text-[#e11d48] font-semibold">
                        รหัส: {code}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleReset(code)}
                        className="text-[11px] text-slate-500 hover:text-slate-800 px-2 py-1 rounded hover:bg-slate-100 flex items-center gap-1"
                        title="คืนค่าลิงก์เริ่มต้น"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>รีเซ็ต</span>
                      </button>

                      {currentVal && (
                        <a
                          href={currentVal}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-bold text-emerald-700 hover:text-emerald-900 px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 flex items-center gap-1 transition-colors"
                        >
                          <span>ทดสอบเปิด</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                      <Link2 className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="url"
                      value={currentVal}
                      onChange={(e) => handleChange(code, e.target.value)}
                      placeholder="https://drive.google.com/drive/folders/..."
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 font-mono text-xs"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-white border-t border-slate-200 flex items-center justify-between text-xs shrink-0">
          {!targetCode ? (
            <button
              type="button"
              onClick={handleResetAll}
              className="text-slate-500 hover:text-slate-700 underline text-xs"
            >
              รีเซ็ตทั้งหมดเป็นค่าเริ่มต้น
            </button>
          ) : <div />}

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-slate-300 rounded-xl text-slate-700 hover:bg-slate-50 font-medium"
            >
              ปิด
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2 bg-[#0F9D58] hover:bg-[#0b8043] text-white rounded-xl font-bold shadow-xs flex items-center gap-1.5 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>บันทึกการตั้งค่า</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

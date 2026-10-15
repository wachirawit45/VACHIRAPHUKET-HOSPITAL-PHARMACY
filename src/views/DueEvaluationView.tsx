import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Language } from '../types/pharmacy';
import { getDriveLinkForCode } from '../data/driveLinks';

export const DueEvaluationView: React.FC<{ lang?: Language }> = () => {
  // Helper สำหรับสร้างลิงก์สีแดงที่กดแล้วเปิด Google Drive โดยตรง
  const renderLink = (code: string) => {
    const url = getDriveLinkForCode(code);
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#e11d48] hover:text-[#be123c] underline decoration-[#f43f5e] hover:decoration-[#be123c] font-medium ml-1.5 inline-flex items-center gap-0.5 transition-colors"
        title={`คลิกเพื่อเปิดไฟล์ ${code} ใน Google Drive`}
      >
        <span>{code}</span>
        <ExternalLink className="w-3.5 h-3.5 inline-block opacity-75" />
      </a>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-2 sm:py-4">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-10 md:p-12 text-slate-800 font-['Sarabun',sans-serif]">
        
{/* หัวข้อหลัก */}
<h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 pb-3 border-b-2 border-emerald-600 tracking-tight">
  การประเมินความเหมาะสมการใช้ยา
</h1>

{/* หัวข้อรอง */}
<h2 className="text-lg sm:text-xl font-semibold text-slate-700 mb-6 pb-2 border-b border-slate-200 tracking-tight">
  รายการยาที่ประเมินความเหมาะสมการใช้
</h2>
        <div className="space-y-7 text-[15px] sm:text-[16px] text-slate-800 leading-relaxed">
          
          {/* 1. แบบประเมินความเหมาะสมการใช้ Albumin */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              1. แบบประเมินความเหมาะสมการใช้ Albumin
            </h2>
            <ul className="pl-6 list-disc space-y-1.5 marker:text-slate-700">
              <li>
                <span>แบบประเมิน Albumin</span>
                {renderLink('DUE_Albumin')}
              </li>
            </ul>
          </section>

          {/* 2. ยากลุ่ม Non-vitamin K Antagonist Oral Anticoagulants (NOAC) */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              2. ยากลุ่ม Non-vitamin K Antagonist Oral Anticoagulants (NOAC)
            </h2>

            {/* 2.1 */}
            <div className="space-y-2 pl-2 sm:pl-4">
              <h3 className="text-base sm:text-[17px] font-bold text-slate-900">
                2.1 แบบประเมินความเหมาะสมการใช้ยากลุ่ม NOAC
              </h3>
              <ul className="pl-6 list-disc space-y-1 marker:text-slate-700">
                <li>Apixaban</li>
                <li>Dabigatran</li>
                <li>Edoxaban</li>
                <li>Rivaroxaban</li>
                <li>
                  <span>แบบประเมินการใช้ยากลุ่ม NOAC</span>
                  {renderLink('DUE_NOAC_2568_12_2')}
                </li>
                <li>
                  <span>หนังสือแสดงความยินยอม NOAC</span>
                  {renderLink('Inform_NOAC_2569_01_25')}
                </li>
              </ul>
            </div>

            {/* 2.2 */}
            <div className="space-y-2 pl-2 sm:pl-4">
              <h3 className="text-base sm:text-[17px] font-bold text-slate-900">
                2.2 คำแนะนำการเตรียมยาต้านพิษ NOAC
              </h3>
              
              <div className="space-y-2 pl-2">
                <p className="text-slate-800 font-medium">
                  - Specific antidote NOAC
                </p>
                <ul className="pl-6 list-disc space-y-1 marker:text-slate-700">
                  <li>
                    <span>Idarucizumab (specific antidote of Dabigatran)</span>
                    {renderLink('Idarucizumab_2569_1_14')}
                  </li>
                  <li>
                    <span>Andexanet alfa (specific antidote of Apixaban) ไม่มีจำหน่ายในไทย</span>
                  </li>
                </ul>

                <p className="text-slate-800 font-medium pt-1">
                  - Non-specific antidote NOAC
                </p>
                <ul className="pl-6 list-disc space-y-1 marker:text-slate-700">
                  <li>
                    <span>Prothrombin complex concentrate (PROTHROMPLEX) หรือ 4 factor</span>
                    {renderLink('Prothromplex_500_2569_1_20')}
                  </li>
                  <li>
                    <span>Activated prothrombin complex concentrate (FEIBA)</span>
                    {renderLink('Feiba_2569_1_20')}
                  </li>
                  <li>
                    <span>Prothrombin complex concentrate (PROFILNINE) ไม่มีในบัญชีโรงพยาบาล</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. ยาปฏิชีวนะมูลค่าสูง */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              3. ยาปฏิชีวนะมูลค่าสูง
            </h2>
            <ul className="pl-6 list-disc space-y-1 marker:text-slate-700">
              <li>Piperacilin/Tazobactam</li>
              <li>Meropenem</li>
              <li>Imipenem/Cilastatin</li>
              <li>Sulbactam</li>
              <li>Colistin</li>
              <li>Tigecycline</li>
              <li>Vancomycin</li>
              <li>
                <span>แบบขออนุมัติใช้ยาต้านจุลชีพชนิดควบคุม</span>
                {renderLink('DUE_ATB_2568_11_24')}
              </li>
            </ul>
          </section>

          {/* 4. Diabetic mellitus and Obesity */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              4. Diabetic mellitus and Obesity
            </h2>
            <ul className="pl-6 list-disc space-y-1.5 marker:text-slate-700">
              <li>
                <span>เอกสารแนะนำการใช้ปากกาฉีดยาอินซูลิน my pen</span>
                {renderLink('MyPen_2568_12_15')}
              </li>
              <li>
                <span>Semaglutide 1 mg/dose (4 mg/3 mL/pen) solution for injection in pre-filled pen (OZEMPIC)</span>
                {renderLink('Ozempic_2568_12_15')}
              </li>
              <li>
                <span>Semaglutide 1 mg/dose (4 mg/3 mL/pen) solution for injection in flex touch pen (WEGOVY) อัพเดท 10 มี.ค. 69</span>
                {renderLink('Wegovy_2596_03_10')}
              </li>
              <li>
                <span>Tirzepatide 5 mg/dose (20 mg/pen) และ 10 mg/dose (40 mg/pen) solution for injection in kwik pen (MOUNJARO)</span>
                {renderLink('Mounjaro_2568_12_15')}
              </li>
            </ul>
          </section>

          {/* 5. Osteoporosis */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              5. Osteoporosis
            </h2>
            <ul className="pl-6 list-disc space-y-1.5 marker:text-slate-700">
              <li>
                <span>Teriparatide 600 mcg/2.4 mL pre-filled pen (FORTEO)</span>
                {renderLink('Teriparatide_2568_12_23')}
              </li>
              <li>
                <span>เอกสาร กรมบัญชีกลาง ว 548 เบิกจ่ายยาโรคกระดูกพรุน</span>
                {renderLink('2569_ว_548_Teriparatide')}
              </li>
            </ul>
          </section>

          {/* 6. Levetiracetam injection */}
          <section className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              6. Levetiracetam injection
            </h2>
            <ul className="pl-6 list-disc space-y-1.5 marker:text-slate-700">
              <li>
                <span>Levetiracetam 500 mg/5 mL injection</span>
                {renderLink('DUE_Levetiracetam_2569_07_07')}
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};
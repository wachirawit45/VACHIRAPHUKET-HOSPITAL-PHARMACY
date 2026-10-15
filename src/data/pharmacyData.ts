import { DrugItem, DueCriteria, NewsItem, AcademicItem, SOPItem, DepartmentUnit } from '../types/pharmacy';

export const DRUG_DATABASE: DrugItem[] = [
  {
    id: 'd-1',
    genericName: 'Meropenem',
    tradeName: 'Meronem®',
    dosageForm: 'Powder for injection',
    strength: '1 g / vial',
    category: 'Antibiotics',
    isHAD: true,
    isLASA: false,
    indication: 'รักษาการติดเชื้อแบคทีเรียขั้นรุนแรง (Severe Nosocomial Pneumonia, Intra-abdominal infection, Septicemia)',
    dosageInstructions: '500 mg - 1 g IV ทุก 8 ชั่วโมง โดยหยดเข้าทางหลอดเลือดดำช้าๆ นาน 30 นาที หรือ Extended infusion 3 ชม.',
    precautions: 'ต้องปรับขนาดยาตามค่าการทำงานของไต (CrCl), ระวังในผู้ป่วยที่มีประวัติชักหรือแพ้ยา Penicillin แบบรุนแรง',
    storage: 'เก็บที่อุณหภูมิต่ำกว่า 30°C หลังละลายควรใช้ทันทีหรือไม่เกิน 24 ชม. ที่ 2-8°C',
    pregnancyCategory: 'B',
    counselingPoints: [
      'ยานี้เป็นยาปฏิชีวนะควบคุมพิเศษ ต้องผ่านการอนุมัติ DUE',
      'ติดตามอาการทางระบบประสาทและผื่นแพ้ยา',
      'ตรวจติดตาม Serum Creatinine ทุก 48-72 ชั่วโมง'
    ]
  },
  {
    id: 'd-2',
    genericName: 'Enoxaparin Sodium',
    tradeName: 'Clexane®',
    dosageForm: 'Prefilled syringe (SC)',
    strength: '40 mg / 0.4 mL, 60 mg / 0.6 mL',
    category: 'Cardiovascular',
    isHAD: true,
    isLASA: true,
    lasaPair: 'Fondaparinux / Heparin',
    indication: 'ป้องกันและรักษาลิ่มเลือดอุดตันในหลอดเลือดดำ (DVT/PE), Unstable Angina, NSTEMI',
    dosageInstructions: 'Prophylaxis: 40 mg SC วันละครั้ง; Treatment: 1 mg/kg SC ทุก 12 ชม. (ปรับขนาดหาก CrCl < 30 mL/min)',
    precautions: 'ห้ามฉีดเข้ากล้ามเนื้อ (IM), ห้ามไล่ฟองอากาศในหลอดฉีดยาก่อนฉีดเพื่อป้องกันการสูญเสียขนาดยา',
    storage: 'เก็บที่อุณหภูมิต่ำกว่า 25°C ห้ามแช่แข็ง',
    pregnancyCategory: 'B',
    counselingPoints: [
      'ฉีดใต้ผิวหนังบริเวณหน้าท้องสลับข้างซ้าย-ขวา ห่างจากสะดืออย่างน้อย 5 ซม.',
      'ห้ามนวดหรือคลึงบริเวณที่ฉีดยาเพราะอาจทำให้เกิดรอยช้ำเลือด',
      'สังเกตภาวะเลือดออกผิดปกติ เช่น เลือดกำเดาไหล ปัสสาวะปนเลือด หรือจ้ำเลือด'
    ]
  },
  {
    id: 'd-3',
    genericName: 'Warfarin Sodium',
    tradeName: 'Coumadin® / Mafrin®',
    dosageForm: 'Tablet',
    strength: '2 mg (ส้ม), 3 mg (ฟ้า), 5 mg (ชมพู)',
    category: 'High-Alert',
    isHAD: true,
    isLASA: true,
    lasaPair: 'Waran / Farin / Coumadin',
    indication: 'ป้องกันภาวะลิ่มเลือดอุดตันในผู้ป่วย Atrial Fibrillation, ลิ้นหัวใจเทียม, DVT/PE',
    dosageInstructions: 'รับประทานวันละ 1 ครั้ง เวลาเดิมสม่ำเสมอ (แนะนำ 18.00 น. หรือก่อนนอน) ปรับตามค่า INR เป้าหมาย (มักอยู่ที่ 2.0-3.0)',
    precautions: 'มีปฏิกิริยากับยาอื่นและอาหารสูงมาก (เช่น ผักใบเขียวเข้ม ยาสมุนไพร แปะก๊วย โสม)',
    storage: 'เก็บในที่แห้ง ป้องกันแสง ที่อุณหภูมิต่ำกว่า 30°C',
    pregnancyCategory: 'X',
    counselingPoints: [
      'ต้องพกบัตรประจำตัวผู้ใช้ยาวาร์ฟารินติดตัวตลอดเวลา',
      'หากลืมทานยาในวันนั้น ให้ทานทันทีที่นึกได้ หากข้ามวันห้ามเพิ่มขนาดยาเป็น 2 เท่า',
      'หลีกเลี่ยงการบริโภคผักใบเขียวปริมาณมากหรือเปลี่ยนแปลงการกินกะทันหัน',
      'แจ้งแพทย์หรือทันตแพทย์ทุกครั้งว่ากำลังรับประทานยานี้อยู่'
    ]
  },
  {
    id: 'd-4',
    genericName: 'Human Albumin',
    tradeName: 'Albunorm® / Plasbumin®',
    dosageForm: 'Solution for infusion',
    strength: '20% 50 mL, 20% 100 mL',
    category: 'High-Alert',
    isHAD: true,
    isLASA: false,
    indication: 'ภาวะ Hypoalbuminemia รุนแรงที่มีอาการบวมน้ำ, Severe Sepsis/Septic Shock, Paracentesis > 5L',
    dosageInstructions: 'ตามเกณฑ์ DUE: หยด IV อัตราไม่เกิน 1-2 mL/min เพื่อป้องกันภาวะ Fluid Overload',
    precautions: 'ระวังในผู้ป่วยหัวใจล้มเหลว (CHF) หรือไตวายที่มีภาวะน้ำเกิน ตรวจติดตามสัญญาณชีพอย่างใกล้ชิด',
    storage: 'เก็บที่อุณหภูมิ 2-25°C ห้ามแช่แข็ง ป้องกันแสง',
    pregnancyCategory: 'C',
    counselingPoints: [
      'ยานี้เป็นอนุพันธ์จากเลือดมนุษย์ ผ่านกระบวนการฆ่าเชื้อไวรัสมาตรฐานระดับสากล',
      'ติดตามอาการแพ้ หายใจเหนื่อย หรือความดันโลหิตเปลี่ยนแปลงระหว่างให้ยา'
    ]
  },
  {
    id: 'd-5',
    genericName: 'Insulin Glargine',
    tradeName: 'Lantus® / Basaglar®',
    dosageForm: 'Subcutaneous injection pen',
    strength: '100 units / mL (3 mL/pen)',
    category: 'Endocrine',
    isHAD: true,
    isLASA: true,
    lasaPair: 'Insulin Lispro / Insulin Aspart',
    indication: 'ควบคุมระดับน้ำตาลในผู้ป่วยเบาหวานชนิดที่ 1 และชนิดที่ 2',
    dosageInstructions: 'ฉีดใต้ผิวหนัง วันละ 1 ครั้ง ในเวลาเดิมทุกวัน ไม่ต้องผสมกับอินซูลินชนิดอื่น',
    precautions: 'ห้ามฉีดเข้าหลอดเลือดดำ ตรวจสอบระดับน้ำตาลในเลือดสม่ำเสมอ ระวังภาวะ Hypoglycemia',
    storage: 'ก่อนเปิดใช้เก็บที่ 2-8°C (ช่องธรรมดา ห้ามแช่ฟรีซ); หลังเปิดใช้เก็บที่อุณหภูมิห้องได้นาน 28 วัน',
    pregnancyCategory: 'C',
    counselingPoints: [
      'เปลี่ยนตำแหน่งฉีดยาทุกครั้งเพื่อป้องกันเนื้อเยื่อไขมันฝ่อหรือหนาตัว',
      'พกน้ำตาลหรือลูกอมติดตัวเสมอเพื่อแก้ไขภาวะน้ำตาลในเลือดต่ำได้ทันท่วงที',
      'ห้ามใช้หากสารละลายขุ่นหรือมีตะกอน (ต้องใส ไม่มีสี)'
    ]
  },
  {
    id: 'd-6',
    genericName: 'Noradrenaline (Norepinephrine)',
    tradeName: 'Levophed®',
    dosageForm: 'Ampoule for IV infusion',
    strength: '4 mg / 4 mL',
    category: 'High-Alert',
    isHAD: true,
    isLASA: true,
    lasaPair: 'Adrenaline (Epinephrine)',
    indication: 'ภาวะช็อกที่เกิดจากการขยายตัวของหลอดเลือด เช่น Septic Shock เพื่อเพิ่มความดันโลหิต',
    dosageInstructions: 'หยดทางหลอดเลือดดำใหญ่ (Central line) เริ่ม 0.05-0.1 mcg/kg/min ปรับตาม MAP เป้าหมาย >= 65 mmHg',
    precautions: 'เป็นยา High Alert สำคัญสูงสุด! เสี่ยงต่อเนื้อเยื่อตายหากเกิด Extravasation ห้ามให้ทางหลอดเลือดดำส่วนปลายถ้าเลี่ยงได้',
    storage: 'เก็บที่อุณหภูมิต่ำกว่า 25°C ป้องกันแสง ไม่ใช้หากสารละลายเปลี่ยนเป็นสีชมพูหรือน้ำตาล',
    pregnancyCategory: 'C',
    counselingPoints: [
      'ตรวจสอบสารละลายและสายให้ยาทาง Infusion pump ตลอดเวลา',
      'ต้องมี Phentolamine สำรองกรณีเกิดการรั่วไหลออกนอกหลอดเลือด'
    ]
  },
  {
    id: 'd-7',
    genericName: 'Ivabradine Hydrochloride',
    tradeName: 'Coralan®',
    dosageForm: 'Film-coated tablet',
    strength: '5 mg, 7.5 mg',
    category: 'Cardiovascular',
    isHAD: false,
    isLASA: false,
    indication: 'รักษาภาวะหัวใจล้มเหลวเรื้อรัง (Heart Failure with Reduced Ejection Fraction - HFrEF) ที่มี Resting HR >= 70 bpm',
    dosageInstructions: 'เริ่ม 5 mg วันละ 2 ครั้ง พร้อมอาหาร ปรับขนาดยาหลังจาก 2-4 สัปดาห์ตามอัตราการเต้นของหัวใจ',
    precautions: 'ห้ามใช้หาก Resting HR < 70 bpm ก่อนเริ่มยา หรือผู้ป่วยที่มีความดันต่ำอย่างรุนแรง หรือ Sick sinus syndrome',
    storage: 'เก็บที่อุณหภูมิห้อง ไม่เกิน 30°C',
    pregnancyCategory: 'D',
    counselingPoints: [
      'ต้องทานพร้อมอาหารเช้าและเย็น',
      'อาจเกิดปรากฏการณ์มองเห็นแสงสว่างจ้าผิดปกติชั่วคราว (Phosphenes) ในช่วง 2 เดือนแรก',
      'หากรู้สึกใจสั่น อ่อนเพลียมาก หรือชีพจรเต้นช้ากว่า 50 ครั้ง/นาที ให้ปรึกษาแพทย์หรือเภสัชกร'
    ]
  },
  {
    id: 'd-8',
    genericName: 'Colistin (Colistimethate Sodium)',
    tradeName: 'Colomycin®',
    dosageForm: 'Powder for injection',
    strength: '150 mg base (4.5 million IU) / vial',
    category: 'Antibiotics',
    isHAD: true,
    isLASA: false,
    indication: 'รักษาการติดเชื้อแบคทีเรียดื้อยาหลายขนาน (MDR Gram-negative เช่น Acinetobacter baumannii, Pseudomonas aeruginosa)',
    dosageInstructions: 'Loading dose 300 mg CBA IV, ตามด้วย Maintenance dose 150 mg CBA IV ทุก 12 ชม. (ต้องคำนวณปรับตาม Creatinine Clearance อย่างแม่นยำ)',
    precautions: 'มีความเป็นพิษต่อไต (Nephrotoxicity) และระบบประสาทสูงมาก ตรวจการทำงานของไตทุกวัน',
    storage: 'เก็บที่อุณหภูมิต่ำกว่า 25°C ละลายแล้วควรใช้ทันที',
    pregnancyCategory: 'C',
    counselingPoints: [
      'ยานี้เป็นยาทางเลือกสุดท้าย (Last-line antibiotic) สำหรับเชื้อดื้อยา',
      'หลีกเลี่ยงการใช้ร่วมกับยาที่มีพิษต่อไตอื่น เช่น Aminoglycosides, NSAIDs, Vancomycin'
    ]
  }
];

export const DUE_PROTOCOLS: DueCriteria[] = [
  {
    id: 'due-1',
    drugName: 'Human Albumin 20%',
    genericName: 'Human Albumin',
    targetGroup: 'ผู้ป่วยใน (IPD) ทุกสิทธิ์การรักษา',
    indications: [
      'Paracentesis ในผู้ป่วยตับแข็งเมื่อเจาะระบายน้ำในช่องท้อง > 5 ลิตร (ให้ 8 g ต่อน้ำเจาะ 1 ลิตร)',
      'Spontaneous Bacterial Peritonitis (SBP) ร่วมกับ Serum Cr > 1 mg/dL, BUN > 30 mg/dL',
      'Hepatorenal Syndrome (HRS) ร่วมกับยาบีบหลอดเลือด',
      'Hypoalbuminemia รุนแรง (Serum Albumin < 2.0 g/dL) ที่มีภาวะ Pulmonary Edema หรือ Shock ไม่ตอบสนองต่อสารน้ำ'
    ],
    mandatoryRequirements: [
      'มีผลตรวจ Serum Albumin ภายใน 48 ชั่วโมง',
      'ผ่านการประเมินโดยแพทย์เจ้าของไข้และเภสัชกรคลินิกประจำหอผู้ป่วย',
      'ไม่มีภาวะ Severe Fluid Overload หรือ Congestive Heart Failure ขั้นรุนแรง'
    ],
    dosageLimit: 'สูงสุดไม่เกิน 2-4 ขวด (50-100 mL)/วัน เว้นแต่แพทย์เฉพาะทางโรคระบบทางเดินอาหาร/วิกฤตพิจารณา',
    monitoringParameters: ['Serum Albumin', 'Vital Signs ระหว่างหยดยา', 'สัญญาณภาวะน้ำเกิน (Crackles, Dyspnea)']
  },
  {
    id: 'due-2',
    drugName: 'Meropenem 1g Injection',
    genericName: 'Meropenem',
    targetGroup: 'ผู้ป่วยติดเชื้อรุนแรง โรงพยาบาลวชิระภูเก็ต',
    indications: [
      'การติดเชื้อรุนแรงในโรงพยาบาล (Hospital-Acquired / Ventilator-Associated Pneumonia)',
      'ภาวะติดเชื้อในกระแสเลือด (Septic Shock) ที่สงสัยเชื้อดื้อยา Extended-spectrum beta-lactamase (ESBL)',
      'Intra-abdominal infection ซับซ้อนในผู้ป่วยอาการวิกฤต',
      'เยื่อหุ้มสมองอักเสบ (Bacterial Meningitis) ที่ผลย้อมเชื้อเข้าได้กับแบคทีเรียกลุ่มเสี่ยง'
    ],
    mandatoryRequirements: [
      'ต้องส่ง Hemoculture หรือส่งสิ่งส่งตรวจย้อมและเพาะเชื้อก่อนเริ่มยา',
      'จำกัดการใช้เบื้องต้น 72 ชั่วโมง หากผลเพาะเชื้อไม่พบเชื้อดื้อยาต้อง De-escalate',
      'ได้รับความเห็นชอบจากอายุรแพทย์โรคติดเชื้อ (ID Specialist)'
    ],
    dosageLimit: '1 g IV q 8h (ปรับตาม CrCl: CrCl 26-50 = 1g q 12h, CrCl 10-25 = 500mg q 12h)',
    monitoringParameters: ['Hemoculture & Sensitivity', 'Serum Cr / eGFR', 'WBC, Platelet, LFTs', 'อาการชัก']
  },
  {
    id: 'due-3',
    drugName: 'Ivabradine (Coralan®)',
    genericName: 'Ivabradine',
    targetGroup: 'ผู้ป่วยนอก/ผู้ป่วยใน โรคหัวใจล้มเหลว (HFrEF)',
    indications: [
      'Heart Failure with reduced ejection fraction (LVEF <= 35%)',
      'ยังคงมี Sinus rhythm และ Resting Heart Rate >= 70 ครั้ง/นาที',
      'ได้รับยา Beta-blocker ในขนาดสูงสุดที่ทนได้แล้ว หรือมีข้อห้ามใช้ Beta-blocker อย่างชัดเจน'
    ],
    mandatoryRequirements: [
      'มีผลตรวจ Echocardiogram ยืนยัน LVEF <= 35% ภายใน 6 เดือน',
      'มีบันทึก EKG ยืนยัน Normal Sinus Rhythm (ไม่มี Atrial Fibrillation/Flutter)',
      'สั่งใช้โดยอายุรแพทย์โรคหัวใจ หรือแพทย์ที่ได้รับมอบหมาย'
    ],
    dosageLimit: 'เริ่ม 5 mg วันละ 2 ครั้ง ปรับสูงสุดไม่เกิน 7.5 mg วันละ 2 ครั้ง',
    monitoringParameters: ['Heart Rate (เป้าหมาย 50-60 bpm)', 'EKG ตรวจสอบภาวะ Arrhythmia', 'อาการทางสายตา (Phosphenes)']
  }
];

export const NEWS_LIST: NewsItem[] = [
  {
    id: 'news-1',
    title: 'ประกาศแจ้งเตือนความปลอดภัย: การเฝ้าระวังยา High Alert Drug (HAD) กลุ่ม Concentrated Electrolytes',
    date: '5 ต.ค. 2569',
    category: 'เตือนภัยยา',
    isImportant: true,
    summary: 'ทบทวนมาตรการ Double-check ยา Potassium Chloride (KCl) 10% injection และ 3% NaCl เพื่อความปลอดภัย 3P Safety',
    content: 'ตามนโยบาย 3P Safety ของโรงพยาบาลวชิระภูเก็ต กลุ่มงานเภสัชกรรมเน้นย้ำแนวทางการบริหารยาฉีดโพแทสเซียมคลอไรด์เข้มข้น ห้ามฉีด IV push โดยเด็ดขาด ต้องเจือจางในสารน้ำตามมาตรฐานและใช้เครื่องควบคุมการให้สารน้ำ (Infusion pump) ทุกครั้ง'
  },
  {
    id: 'news-2',
    title: 'เปิดตัวระบบห้องยาอัจฉริยะ (Smart Pharmacy): หุ่นยนต์จัดยาและตู้เบิกยาอัตโนมัติ (Automated Dispensing Cabinet)',
    date: '28 ก.ย. 2569',
    category: 'ข่าวกลุ่มงาน',
    isImportant: true,
    summary: 'ยกระดับบริการผู้ป่วยนอกและหอผู้ป่วยวิกฤต ลดระยะเวลารอคอยยาลง 35% ป้องกันความคลาดเคลื่อนทางยา 100%',
    content: 'กลุ่มงานเภสัชกรรม โรงพยาบาลวชิระภูเก็ต ดำเนินการติดตั้งระบบหุ่นยนต์จัดยาความเร็วสูง Synapse Med-Flow และตู้ยาอัตโนมัติประจำ ICU เชื่อมต่อระบบเวชระเบียนอิเล็กทรอนิกส์ ช่วยให้ผู้ป่วยได้รับยาอย่างถูกต้อง รวดเร็ว ปลอดภัย'
  },
  {
    id: 'news-3',
    title: 'แจ้งสถานการณ์ยาขาดคราวชั่วคราวและการใช้ยาทดแทน (Drug Shortage Bulletin)',
    date: '15 ก.ย. 2569',
    category: 'ยาขาดคราว',
    summary: 'รายการยา Amoxicillin/Clavulanate 1.2g injection ขาดคราวจากบริษัทผู้ผลิต แนะนำใช้ Ampicillin/Sulbactam ทดแทน',
    content: 'เนื่องจากโรงงานผู้ผลิตขาดแคลนวัตถุดิบนำเข้า ทางคณะกรรมการเภสัชกรรมและการบำบัด (PTC) จึงมีมติให้ใช้ Ampicillin/Sulbactam 1.5g IV q 8h เป็นยาทดแทนชั่วคราว พร้อมประสานงานคลังยาจัดหาแหล่งผลิตสำรอง'
  },
  {
    id: 'news-4',
    title: 'การประชุมวิชาการเภสัชกรรมภาคใต้ ประจำปี 2569: Precision Clinical Pharmacy & AI in Healthcare',
    date: '1 ก.ย. 2569',
    category: 'อบรมวิชาการ',
    summary: 'ขอเชิญเภสัชกรและบุคลากรทางการแพทย์เข้าร่วมรับฟังการบรรยายสะสมหน่วยกิต CPE 5.5 หน่วยกิต',
    content: 'จัดขึ้น ณ ห้องประชุมราชพฤกษ์ ชั้น 6 อาคารคุณพุ่ม โรงพยาบาลวชิระภูเก็ต ถ่ายทอดสดผ่านระบบ Zoom Webinar'
  }
];

export const ACADEMIC_LIST: AcademicItem[] = [
  {
    id: 'acad-1',
    title: 'ประสิทธิผลของระบบแจ้งเตือนความคลาดเคลื่อนทางยาแบบเรียลไทม์ (Clinical Decision Support) ในโรงพยาบาลวชิระภูเก็ต',
    authors: 'ภญ. นวพร วิจิตรสมบัติ, ภก. ธนกฤต ศรีสุข, และคณะ',
    year: '2569',
    type: 'R2R',
    abstract: 'การวิจัยเชิงพัฒนาเพื่อประเมินผลระบบแจ้งเตือนอันตรกิริยาระหว่างยาและประวัติแพ้ยาแบบเรียลไทม์ในระบบสารสนเทศโรงพยาบาล พบว่าช่วยลดอัตราการสั่งจ่ายยาซ้ำซ้อนและยาที่มีข้อห้ามใช้ลงได้ 84.6% ในกลุ่มผู้ป่วยนอก'
  },
  {
    id: 'acad-2',
    title: 'การประเมินผลโครงการจัดการใช้ยาปฏิชีวนะอย่างสมเหตุผล (Antimicrobial Stewardship Program) ในหอผู้ป่วยอายุรกรรม',
    authors: 'ภก. ดร. ปริญญา ชูช่วย, นพ. เกียรติศักดิ์ ธรรมรัตน์',
    year: '2568',
    type: 'Publication',
    abstract: 'ศึกษาผลการแทรกแซงโดยเภสัชกรคลินิกโรคติดเชื้อในการประเมินความเหมาะสมของการสั่งใช้ยา Meropenem และ Colistin พบว่าช่วยลดวันนอนเฉลี่ย (LOS) และลดอัตราการดื้อยาของเชื้อ Acinetobacter baumannii อย่างมีนัยสำคัญ'
  },
  {
    id: 'acad-3',
    title: 'นวัตกรรมกล่องเตือนรับประทานยาวาร์ฟารินและแอพพลิเคชันติดตามค่า INR สำหรับผู้ป่วยโรคหัวใจชาวภูเก็ต',
    authors: 'ภญ. สุพรรษา บำรุงจิตต์, ภญ. กนกวรรณ จิตต์มุ่ง',
    year: '2568',
    type: 'Innovation',
    abstract: 'ผลการใช้นวัตกรรมช่วยให้ผู้ป่วยมีค่า Time in Therapeutic Range (TTR) เพิ่มขึ้นจาก 52.3% เป็น 74.8% และลดอุบัติการณ์การเกิด Major Bleeding ในชุมชนได้อย่างมีนัยสำคัญ'
  }
];

export const SOP_LIST: SOPItem[] = [
  {
    id: 'sop-1',
    code: 'SOP-PHARM-001',
    title: 'แนวทางปฏิบัติการจัดการยาที่มีความเสี่ยงสูง (High Alert Drugs: HAD)',
    department: 'กลุ่มงานเภสัชกรรมทั้งหมด',
    revision: 'Rev. 06',
    effectiveDate: '1 ม.ค. 2569',
    description: 'กำหนดขั้นตอนการจัดเก็บ การจัดยา การส่งมอบ และระบบ Double Independent Check เพื่อป้องกันข้อผิดพลาดร้ายแรง'
  },
  {
    id: 'sop-2',
    code: 'SOP-PHARM-008',
    title: 'คู่มือการผสมและบริหารยาเคมีบำบัดและชีววัตถุในห้องปลอดเชื้อ Class 100',
    department: 'หน่วยเตรียมยาปราศจากเชื้อและเคมีบำบัด',
    revision: 'Rev. 04',
    effectiveDate: '15 พ.ค. 2568',
    description: 'มาตรฐานความปลอดภัยในการใช้อุปกรณ์ป้องกันส่วนบุคคล (PPE) และตู้ Biological Safety Cabinet Type B2 สำหรับเภสัชกรผู้ผสมยา'
  },
  {
    id: 'sop-3',
    code: 'SOP-PHARM-015',
    title: 'ขั้นตอนการรายงานและสืบค้นเหตุการณ์ไม่พึงประสงค์จากการใช้ยา (ADR & ME Reporting)',
    department: 'ศูนย์ข้อมูลยาและบริบาลเภสัชกรรมคลินิก',
    revision: 'Rev. 05',
    effectiveDate: '10 มี.ค. 2569',
    description: 'แนวทางการออกบัตรแพ้ยา การบันทึกเข้าสู่ระบบฐานข้อมูลกลาง และการแจ้งเตือนระดับสีส้ม-แดงในระบบเวชระเบียน'
  },
  {
    id: 'sop-4',
    code: 'SOP-PHARM-022',
    title: 'ระเบียบการประเมินการใช้ยา (Drug Use Evaluation: DUE) สำหรับยาในบัญชียกเว้น',
    department: 'งานบริการเภสัชกรรมผู้ป่วยในและนอก',
    revision: 'Rev. 03',
    effectiveDate: '1 ก.พ. 2569',
    description: 'เกณฑ์การอนุมัติยา การกรอกใบสั่งใช้ยาพิเศษ และการติดตามผลการรักษาตามตัวชี้วัดความคุ้มค่า'
  }
];

export const DEPARTMENT_UNITS: DepartmentUnit[] = [
  {
    id: 'u-1',
    name: 'งานบริการเภสัชกรรมผู้ป่วยนอก (OPD Pharmacy)',
    head: 'ภญ. พรรณี จารุรัตน์ (หัวหน้างาน)',
    description: 'ให้บริการตรวจสอบใบสั่งยา จ่ายยา และให้คำแนะนำการใช้ยาแก่ผู้ป่วยนอก ด้วยระบบ Smart Queue และหุ่นยนต์จัดยาอัตโนมัติ พร้อมโครงการเติมยา & Health Rider (ส่งยาถึงบ้าน โต๊ะ 41)',
    responsibilities: [
      'คัดกรองความปลอดภัยและความเหมาะสมของใบสั่งยา',
      'จัดและตรวจสอบยาด้วยเทคโนโลยีบาร์โค้ด 2 มิติ',
      'โครงการเติมยา & Health Rider (ส่งยาถึงบ้าน โต๊ะ 41)',
      'คลินิกบริบาลเภสัชกรรมเฉพาะโรค (วาร์ฟาริน/หอบหืด/ไต) ต่อ 1238'
    ],
    location: 'ห้องจ่ายยาผู้ป่วยนอก ชั้น 1 อาคารเฉลิมพระเกียรติฯ',
    extension: '1183, 1184 (Health Rider: 1183)'
  },
  {
    id: 'u-2',
    name: 'งานบริการเภสัชกรรมผู้ป่วยใน และห้องจ่ายยาอุบัติเหตุฉุกเฉิน (IPD & ER)',
    head: 'ภก. ธีระพงษ์ สันติธรรม (หัวหน้างาน)',
    description: 'ให้บริการจ่ายยาแบบเฉพาะบุคคลต่อมื้อ (Unit Dose) และห้องจ่ายยาอุบัติเหตุและฉุกเฉิน (ER) เปิดบริการตลอด 24 ชั่วโมง',
    responsibilities: [
      'ห้องจ่ายยาอุบัติเหตุและฉุกเฉิน (ER 24 ชม.) ต่อ 1180',
      'ตรวจสอบคำสั่งการใช้ยาจากแพทย์ (Medication Order Review)',
      'จัดยาแบบ Unit Dose บรรจุซองพร้อมระบุชื่อผู้ป่วยและเวลาทาน',
      'ควบคุมตู้ยาอัตโนมัติ (Automated Dispensing Cabinet: ADC) ประจำ ICU'
    ],
    location: 'ชั้น 2 อาคาร 100 ปี สมเด็จย่า / ห้องจ่ายยา ER ชั้น 1',
    extension: '1180 (ER 24 ชม.), 1240 (IPD)'
  },
  {
    id: 'u-3',
    name: 'งานบริบาลเภสัชกรรมคลินิกเฉพาะโรค (Clinical Pharmacy)',
    head: 'ภก. ดร. วิศรุต เมธาวุฒิ (หัวหน้างาน)',
    description: 'คลินิกบริบาลเภสัชกรรมเฉพาะโรค (วาร์ฟาริน/หอบหืด/ไต) และบริบาลผู้ป่วยในหอผู้ป่วยวิกฤต',
    responsibilities: [
      'คลินิกบริบาลเภสัชกรรมเฉพาะโรค (วาร์ฟาริน/หอบหืด/ไต) โทร. 076-361234 ต่อ 1238',
      'การปรับขนาดยาตามระดับยาในเลือด (Therapeutic Drug Monitoring: TDM)',
      'การประเมินการทำงานของตับและไตเพื่อปรับขนาดยาปฏิชีวนะ',
      'การกระทบยอดประวัติยาเดิม (Medication Reconciliation)'
    ],
    location: 'ชั้น 1-3 อาคารผู้ป่วยวิกฤตและคลินิกเฉพาะทาง',
    extension: '1238'
  },
  {
    id: 'u-4',
    name: 'หน่วยเตรียมยาปราศจากเชื้อและเคมีบำบัด (Sterile & Chemo Prep)',
    head: 'ภญ. ภัทรพร ศิริวัฒนา (หัวหน้างาน)',
    description: 'เตรียมและผสมยาเคมีบำบัด ยาปฏิชีวนะฉีด และสารอาหารทางหลอดเลือดดำ (TPN) ในสภาวะปลอดเชื้อระดับมาตรฐานสากล',
    responsibilities: [
      'ผสมยาเคมีบำบัดในตู้ Biological Safety Cabinet Type B2',
      'เตรียมสารอาหารทางหลอดเลือดดำ (Total Parenteral Nutrition: TPN) สำหรับทารกแรกเกิดและผู้ใหญ่',
      'ผสมยาฉีดเข้าลูกตา (Intravitreal Injection) และยาหยอดตาเฉพาะราย',
      'การควบคุมความสะอาดของคลีนรูมและการตรวจเฝ้าระวังเชื้อจุลชีพ'
    ],
    location: 'ชั้น 4 อาคารมะเร็งวิทยารังสีรักษา',
    extension: '1480'
  },
  {
    id: 'u-5',
    name: 'ศูนย์ข้อมูลยาและคุ้มครองผู้บริโภค (Drug Information Center - DIC)',
    head: 'ภญ. รสสุคนธ์ เอกธนสาร (หัวหน้างาน)',
    description: 'บริการตอบคำถามข้อมูลยาเชิงลึกแก่บุคลากรทางการแพทย์ ประชาชน และเฝ้าระวังความปลอดภัยจากการใช้ยาและผลิตภัณฑ์สุขภาพ',
    responsibilities: [
      'ตอบข้อซักถามข้อมูลยา (ขนาดยา, อาการไม่พึงประสงค์, การใช้ยาในสตรีมีครรภ์/ให้นมบุตร)',
      'ศูนย์เฝ้าระวังและประเมินอาการแพ้ยา (Pharmacovigilance / ADR)',
      'จัดทำเอกสารความรู้และแผ่นพับข้อมูลการใช้ยาสำหรับประชาชน',
      'ประสานงานคณะกรรมการเภสัชกรรมและการบำบัด (PTC)'
    ],
    location: 'ชั้น 2 อาคารอำนวยการ',
    extension: '1212'
  },
  {
    id: 'u-6',
    name: 'งานบริหารคลังเวชภัณฑ์และพัสดุยา (Supply Chain Management)',
    head: 'ภก. ชวลิต พุทธภูมิ (หัวหน้างาน)',
    description: 'บริหารจัดการจัดซื้อ ตรวจรับ จัดเก็บ และกระจายยาเวชภัณฑ์ด้วยระบบคงคลังดิจิทัลที่ควบคุมอุณหภูมิและความชื้นตลอด 24 ชั่วโมง',
    responsibilities: [
      'จัดซื้อยาและเวชภัณฑ์มิใช่ยาตามแผนความต้องการโรงพยาบาล',
      'ควบคุมคลังยาห้องเย็น (Cold Chain 2-8°C) ด้วยระบบแจ้งเตือน IoT',
      'บริหารจัดการยาสำรองฉุกเฉินและยาขาดคราวระดับจังหวัด',
      'กระจายยาไปยังสถานีอนามัยและ รพ.สต. ในเครือข่ายจังหวัดภูเก็ต'
    ],
    location: 'ชั้น B อาคารคลังเวชภัณฑ์กลาง',
    extension: '1090'
  }
];

export const FAQ_LIST = [
  {
    q: 'หากลืมรับประทานยาความดันหรือเบาหวาน ต้องทำอย่างไร?',
    a: 'หากนึกขึ้นได้และยังไม่ใกล้เวลาทานมื้อถัดไป ให้รับประทานทันทีในขนาดปกติ แต่หากใกล้เวลามื้อถัดไปแล้ว (เกินครึ่งหนึ่งของช่วงเวลา) ให้ข้ามมื้อที่ลืมไปแล้วทานมื้อถัดไปตามเวลาปกติ ห้ามเพิ่มขนาดยาเป็น 2 เท่าเด็ดขาด'
  },
  {
    q: 'ยาปฏิชีวนะ (ยาฆ่าเชื้อ) ต้องทานจนหมดแม้หายดีแล้วจริงหรือไม่?',
    a: 'จริงครับ/ค่ะ ยาปฏิชีวนะต้องรับประทานติดต่อกันจนครบตามระยะเวลาที่แพทย์หรือเภสัชกรกำหนด เพื่อให้สามารถกำจัดเชื้อแบคทีเรียได้หมดสิ้น หากหยุดยากลางคันอาจทำให้เชื้อแบคทีเรียกลายพันธุ์และดื้อยา ส่งผลให้ครั้งถัดไปต้องใช้ยาที่แรงขึ้น'
  },
  {
    q: 'การเก็บรักษายาฉีดอินซูลินที่ถูกต้องทำอย่างไร?',
    a: 'หลอดยาหรือปากกาที่ยังไม่ได้เปิดใช้ ให้เก็บในตู้เย็นช่องธรรมดา อุณหภูมิ 2-8 องศาเซลเซียส (ห้ามแช่ช่องฟรีซเด็ดขาด) ส่วนปากกาที่กำลังเปิดใช้งานแล้ว สามารถเก็บไว้ที่อุณหภูมิห้อง (ไม่เกิน 30 องศาเซลเซียส) หลีกเลี่ยงแสงแดดและความร้อน มีอายุการใช้งาน 28 วัน'
  },
  {
    q: 'มีประวัติแพ้ยา เพนิซิลลิน (Penicillin) สามารถทานยาแก้อักเสบหรือยาแก้ปวดกลุ่มอื่นได้ไหม?',
    a: 'ต้องแจ้งแพทย์และเภสัชกรทุกครั้ง โดยยาในกลุ่ม Cephalosporin บางตัวอาจมีโครงสร้างคล้ายกันและเสี่ยงต่อการแพ้ข้ามกลุ่มได้ ส่วนยาแก้ปวดลดการอักเสบ (เช่น พาราเซตามอล หรือ NSAIDs) สามารถใช้ได้ตามปกติหากไม่มีประวัติแพ้ตัวยานั้นๆ กรุณาพกบัตรแพ้ยาติดตัวเสมอ'
  }
];

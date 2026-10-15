import { DueCategoryMeta, DueDrugDetail, DueCategoryKey } from '../types/due';

export const DUE_CATEGORIES: DueCategoryMeta[] = [
  {
    key: 'albumin',
    numberPrefix: '1',
    title: 'Albumin',
    subtitle: 'แบบประเมินความเหมาะสมการใช้ Albumin',
    badge: 'Human Albumin 20%',
    iconName: 'Droplet',
    description: 'เกณฑ์การสั่งใช้ Human Albumin 20% ตามแนวทาง รพ.วชิระภูเก็ต และ สปสช. เพื่อความคุ้มค่าและสมเหตุผล',
    primaryForms: [
      {
        name: 'แบบประเมินความเหมาะสมการใช้ Albumin',
        fileCode: 'DUE_Albumin',
        type: 'form',
        description: 'แบบฟอร์มคัดกรองข้อบ่งใช้และเกณฑ์ประเมินการเบิกจ่าย Albumin 20%',
        updateDate: 'มกราคม 2569'
      }
    ]
  },
  {
    key: 'noac',
    numberPrefix: '2',
    title: 'ยากลุ่ม Non-vitamin K Antagonist Oral Anticoagulants (NOAC)',
    subtitle: 'แบบประเมินการใช้ยาและคำแนะนำการเตรียมยาต้านพิษ',
    badge: '4 รายการยา + ยาต้านพิษ',
    iconName: 'ShieldAlert',
    description: 'การประเมินการใช้ยา Apixaban, Dabigatran, Edoxaban, Rivaroxaban พร้อมแนวทางบริหารยาต้านพิษ (Antidote)',
    primaryForms: [
      {
        name: 'แบบประเมินการใช้ยากลุ่ม NOAC',
        fileCode: 'DUE_NOAC_2568_12_2',
        type: 'form',
        description: 'เกณฑ์การประเมินข้อบ่งใช้และขนาดยากลุ่มยาต้านการแข็งตัวของเลือดชนิดรับประทานรุ่นใหม่',
        updateDate: '2 ธ.ค. 2568'
      },
      {
        name: 'หนังสือแสดงความยินยอมการใช้ยา NOAC',
        fileCode: 'Inform_NOAC_2569_01_25',
        type: 'consent',
        description: 'แบบฟอร์มแสดงความยินยอมเข้ารับการรักษาด้วยยากลุ่ม NOAC ของผู้ป่วย/ญาติ',
        updateDate: '25 ม.ค. 2569'
      }
    ]
  },
  {
    key: 'atb',
    numberPrefix: '3',
    title: 'ยาปฏิชีวนะมูลค่าสูง (High-cost Antimicrobials)',
    subtitle: 'ยาต้านจุลชีพชนิดควบคุม (Restricted Antimicrobials)',
    badge: '7 รายการยาควบคุมพิเศษ',
    iconName: 'Pill',
    description: 'การควบคุมการใช้ยาต้านจุลชีพบรอดสเปกตรัมมูลค่าสูง ภายใต้โครงการ Antimicrobial Stewardship (ASP)',
    primaryForms: [
      {
        name: 'แบบขออนุมัติใช้ยาต้านจุลชีพชนิดควบคุม',
        fileCode: 'DUE_ATB_2568_11_24',
        type: 'form',
        description: 'แบบฟอร์มขออนุมัติเบิกใช้ยาปฏิชีวนะมูลค่าสูง 7 รายการ พร้อมผลตรวจทางจุลชีววิทยา',
        updateDate: '24 พ.ย. 2568'
      }
    ]
  },
  {
    key: 'dm_obesity',
    numberPrefix: '4',
    title: 'Diabetic mellitus and Obesity',
    subtitle: 'กลุ่มยาเบาหวานและโรคอ้วน (GLP-1 RA & GIP/GLP-1 RA)',
    badge: 'ปากกาฉีด MyPen / Ozempic / Wegovy / Mounjaro',
    iconName: 'Syringe',
    description: 'คำแนะนำการใช้ปากกาอินซูลินและเกณฑ์ยากลุ่ม Semaglutide และ Tirzepatide ชนิดปากกาฉีด',
    primaryForms: [
      {
        name: 'เอกสารแนะนำการใช้ปากกาฉีดยาอินซูลิน my pen',
        fileCode: 'MyPen_2568_12_15',
        type: 'guide',
        description: 'คู่มือขั้นตอนการฉีดและการเก็บรักษาปากกาฉีดยา MyPen สำหรับผู้ป่วยเบาหวาน',
        updateDate: '15 ธ.ค. 2568'
      },
      {
        name: 'แนวทางการใช้ Semaglutide injection (OZEMPIC)',
        fileCode: 'Ozempic_2568_12_15',
        type: 'form',
        description: 'เกณฑ์ข้อบ่งใช้และการปรับขนาดยา Ozempic 1 mg/dose (4 mg/3 mL/pen)',
        updateDate: '15 ธ.ค. 2568'
      },
      {
        name: 'แนวทางการใช้ Semaglutide flex touch pen (WEGOVY)',
        fileCode: 'Wegovy_2596_03_10',
        type: 'form',
        description: 'เกณฑ์ควบคุมพิเศษ Wegovy 1 mg/dose สำหรับภาวะน้ำหนักเกินและโรคอ้วน (อัปเดต 10 มี.ค. 69)',
        updateDate: '10 มี.ค. 2569'
      },
      {
        name: 'แนวทางการใช้ Tirzepatide kwik pen (MOUNJARO)',
        fileCode: 'Mounjaro_2568_12_15',
        type: 'form',
        description: 'เกณฑ์ควบคุมการใช้ Mounjaro 5 mg และ 10 mg/dose ในโรคเบาหวานชนิดที่ 2',
        updateDate: '15 ธ.ค. 2568'
      }
    ]
  },
  {
    key: 'osteoporosis',
    numberPrefix: '5',
    title: 'Osteoporosis (โรคกระดูกพรุน)',
    subtitle: 'เกณฑ์การเบิกจ่าย Teriparatide และหนังสือ ว 548',
    badge: 'Teriparatide (FORTEO) & ว 548',
    iconName: 'Bone',
    description: 'แนวทางกำกับการใช้ยา Teriparatide pre-filled pen ตามหลักเกณฑ์กรมบัญชีกลาง ว 548',
    primaryForms: [
      {
        name: 'เกณฑ์การสั่งใช้ Teriparatide pre-filled pen (FORTEO)',
        fileCode: 'Teriparatide_2568_12_23',
        type: 'form',
        description: 'แบบประเมิน Teriparatide 600 mcg/2.4 mL pre-filled pen สำหรับโรคกระดูกพรุนรุนแรง',
        updateDate: '23 ธ.ค. 2568'
      },
      {
        name: 'เอกสาร กรมบัญชีกลาง ว 548 เบิกจ่ายยาโรคกระดูกพรุน',
        fileCode: '2569_ว_548_Teriparatide',
        type: 'circular',
        description: 'หนังสือเวียนกรมบัญชีกลาง ว 548 หลักเกณฑ์และเงื่อนไขการเบิกจ่ายยา Teriparatide',
        updateDate: 'ปี 2569'
      }
    ]
  },
  {
    key: 'levetiracetam',
    numberPrefix: '6',
    title: 'Levetiracetam injection',
    subtitle: 'แบบประเมินยาฉีดกันชัก Levetiracetam',
    badge: '500 mg/5 mL injection',
    iconName: 'Activity',
    description: 'เกณฑ์กำกับการใช้ยาฉีด Levetiracetam 500 mg/5 mL สำหรับผู้ป่วยชักวิกฤต (Status Epilepticus)',
    primaryForms: [
      {
        name: 'แบบประเมินความเหมาะสมยาฉีด Levetiracetam',
        fileCode: 'DUE_Levetiracetam_2569_07_07',
        type: 'form',
        description: 'แบบฟอร์มกำกับการสั่งใช้ Levetiracetam 500 mg/5 mL injection',
        updateDate: '7 ก.ค. 2569'
      }
    ]
  }
];

export const DUE_DRUGS_DETAIL: DueDrugDetail[] = [
  // 1. Albumin
  {
    id: 'albumin-1',
    name: 'Human Albumin 20%',
    tradeName: 'Albunorm® / Plasbumin®',
    strengthAndForm: '20% 50 mL / 100 mL solution for IV infusion',
    categoryKey: 'albumin',
    primaryFormCode: 'DUE_Albumin',
    indications: [
      'Large volume paracentesis ในผู้ป่วยตับแข็งเมื่อเจาะระบายน้ำในช่องท้อง > 5 ลิตร (ให้ 8 g ต่อน้ำเจาะ 1 ลิตร)',
      'Spontaneous Bacterial Peritonitis (SBP) ร่วมกับ Serum Cr > 1 mg/dL, BUN > 30 mg/dL',
      'Hepatorenal Syndrome (HRS) type 1 ร่วมกับ Noradrenaline หรือ Terlipressin',
      'Hypoalbuminemia รุนแรง (Serum Albumin < 2.0 g/dL) ที่มีภาวะ Shock หรือ Pulmonary Edema'
    ],
    mandatoryCriteria: [
      'มีผลตรวจ Serum Albumin ภายใน 48 ชั่วโมง',
      'ประเมินโดยแพทย์เจ้าของไข้และไม่มีภาวะ Hypervolemia / CHF ขั้นรุนแรง',
      'หยดเข้าหลอดเลือดดำช้าๆ อัตราไม่เกิน 1-2 mL/นาที'
    ],
    monitoringParameters: ['Serum Albumin', 'สัญญาณชีพขณะหยดยา', 'ภาวะน้ำเกิน (Crackles, JVD)'],
    documents: [
      {
        name: 'แบบประเมินความเหมาะสมการใช้ Albumin',
        fileCode: 'DUE_Albumin',
        type: 'form',
        description: 'เกณฑ์ประเมิน DUE ของ รพ.วชิระภูเก็ต'
      }
    ]
  },

  // 2. NOAC Group
  {
    id: 'noac-apixaban',
    name: 'Apixaban',
    tradeName: 'Eliquis®',
    strengthAndForm: '2.5 mg, 5 mg film-coated tablet',
    categoryKey: 'noac',
    primaryFormCode: 'DUE_NOAC_2568_12_2',
    indications: [
      'Non-valvular Atrial Fibrillation (NVAF) ที่มี CHA2DS2-VASc score >= 2 (ชาย) หรือ >= 3 (หญิง)',
      'รักษาและป้องกันภาวะ Deep Vein Thrombosis (DVT) และ Pulmonary Embolism (PE)',
      'ป้องกันภาวะ VTE หลังการผ่าตัดเปลี่ยนข้อเข่าหรือข้อสะโพกเทียม'
    ],
    mandatoryCriteria: [
      'ประเมิน CrCl ก่อนเริ่มยา (หากเข้าเกณฑ์ 2 ใน 3: อายุ >= 80 ปี, น้ำหนัก <= 60 กก., Scr >= 1.5 mg/dL ให้ลดขนาดเหลือ 2.5 mg bid)',
      'ผู้ป่วย/ญาติต้องลงนามในหนังสือแสดงความยินยอม Inform_NOAC_2569_01_25',
      'ไม่มีภาวะ Mechanical Heart Valve หรือ Moderate-Severe Mitral Stenosis'
    ],
    monitoringParameters: ['Serum Creatinine / CrCl', 'CBC (Hb, Hct, Platelet)', 'สัญญาณภาวะเลือดออกผิดปกติ'],
    documents: [
      {
        name: 'แบบประเมินการใช้ยากลุ่ม NOAC',
        fileCode: 'DUE_NOAC_2568_12_2',
        type: 'form',
        description: 'แบบประเมิน DUE สำหรับแพทย์สั่งใช้ยา NOAC'
      },
      {
        name: 'หนังสือแสดงความยินยอม NOAC',
        fileCode: 'Inform_NOAC_2569_01_25',
        type: 'consent',
        description: 'หนังสือยินยอมการรับการรักษาด้วยยา NOAC'
      }
    ],
    antidotes: [
      {
        name: 'Andexanet alfa',
        classification: 'Specific antidote',
        targetDrug: 'Apixaban & Rivaroxaban (Factor Xa inhibitors)',
        availability: 'not-in-thailand',
        availabilityText: 'ไม่มีจำหน่ายในประเทศไทย',
        preparationGuide: 'ยังไม่มีจำหน่ายในประเทศไทย หากเกิดภาวะเลือดออกรุนแรงให้พิจารณาใช้ Non-specific antidote แทน',
        dosage: 'N/A'
      },
      {
        name: 'Prothrombin complex concentrate (PROTHROMPLEX) หรือ 4-factor PCC',
        classification: 'Non-specific antidote',
        targetDrug: 'Apixaban, Rivaroxaban, Edoxaban',
        fileCode: 'Prothromplex_500_2569_1_20',
        availability: 'in-formulary',
        availabilityText: 'มีในคลังยา รพ.วชิระภูเก็ต',
        preparationGuide: 'ละลายผงยาด้วย Sterile water for injection 20 mL ที่มาพร้อมขวด ผสมช้าๆ ห้ามเขย่าแรง หยด IV ช้าๆ ไม่เกิน 2 mL/นาที',
        dosage: '25 - 50 IU/kg IV (ขนาดยาสูงสุดไม่เกิน 3,000 IU)'
      },
      {
        name: 'Activated prothrombin complex concentrate (FEIBA)',
        classification: 'Non-specific antidote',
        targetDrug: 'Factor Xa inhibitors / Thrombin inhibitor',
        fileCode: 'Feiba_2569_1_20',
        availability: 'in-formulary',
        availabilityText: 'มีในคลังยา รพ.วชิระภูเก็ต',
        preparationGuide: 'ละลายด้วยน้ำยาเฉพาะที่มาพร้อมกล่อง อุณหภูมิห้อง ไม่เกิน 37°C ให้ทางหลอดเลือดดำช้าๆ อัตราไม่เกิน 2 units/kg/นาที',
        dosage: '50 units/kg IV (สูงสุดไม่เกิน 100 units/kg/วัน)'
      },
      {
        name: 'Prothrombin complex concentrate (PROFILNINE)',
        classification: 'Non-specific antidote',
        targetDrug: 'Factor IX complex (3-factor PCC)',
        availability: 'not-in-hospital',
        availabilityText: 'ไม่มีในบัญชีโรงพยาบาล',
        preparationGuide: 'เป็น 3-factor PCC (ขาด Factor VII) ไม่มีในบัญชีโรงพยาบาลวชิระภูเก็ต แนะนำใช้ PROTHROMPLEX แทน',
        dosage: 'ไม่มีในโรงพยาบาล'
      }
    ]
  },
  {
    id: 'noac-dabigatran',
    name: 'Dabigatran Etexilate',
    tradeName: 'Pradaxa®',
    strengthAndForm: '75 mg, 110 mg, 150 mg oral capsule',
    categoryKey: 'noac',
    primaryFormCode: 'DUE_NOAC_2568_12_2',
    indications: [
      'Non-valvular Atrial Fibrillation (NVAF) ป้องกัน Stroke and Systemic Embolism',
      'รักษาและป้องกันการกลับเป็นซ้ำของ DVT และ PE'
    ],
    mandatoryCriteria: [
      'ห้ามบด เคี้ยว หรือแกะแคปซูลยา เพราะจะเพิ่มการดูดซึมยาขึ้นถึง 75% เสี่ยงเลือดออกรุนแรง',
      'ตรวจการทำงานของไต (CrCl): หาก CrCl 30-50 mL/min ลดขนาดยาเหลือ 110 mg bid; ห้ามใช้หาก CrCl < 30 mL/min',
      'มีหนังสือแสดงความยินยอม Inform_NOAC_2569_01_25'
    ],
    monitoringParameters: ['Serum Cr / CrCl', 'aPTT / Thrombin Time', 'อาการเลือดออกทางเดินอาหาร'],
    documents: [
      {
        name: 'แบบประเมินการใช้ยากลุ่ม NOAC',
        fileCode: 'DUE_NOAC_2568_12_2',
        type: 'form'
      },
      {
        name: 'หนังสือแสดงความยินยอม NOAC',
        fileCode: 'Inform_NOAC_2569_01_25',
        type: 'consent'
      },
      {
        name: 'แนวทางบริหาร Idarucizumab',
        fileCode: 'Idarucizumab_2569_1_14',
        type: 'antidote'
      }
    ],
    antidotes: [
      {
        name: 'Idarucizumab (Praxbind®)',
        classification: 'Specific antidote',
        targetDrug: 'Dabigatran (Direct Thrombin Inhibitor)',
        fileCode: 'Idarucizumab_2569_1_14',
        availability: 'in-formulary',
        availabilityText: 'มีในคลังยา รพ.วชิระภูเก็ต (Specific Antidote)',
        preparationGuide: 'บรรจุ 2.5 g / 50 mL จำนวน 2 ขวด (รวม 5 g) พร้อมใช้ ไม่ต้องเจือจาง ให้ทาง IV infusion ขวดละ 5-10 นาที หรือ IV bolus ต่อเนื่องกัน',
        dosage: '5 g IV (ให้ 2.5 g จำนวน 2 ขวด ต่อเนื่องกัน)'
      }
    ]
  },
  {
    id: 'noac-edoxaban',
    name: 'Edoxaban',
    tradeName: 'Lixiana®',
    strengthAndForm: '15 mg, 30 mg, 60 mg film-coated tablet',
    categoryKey: 'noac',
    primaryFormCode: 'DUE_NOAC_2568_12_2',
    indications: [
      'NVAF เพื่อป้องกันโรคหลอดเลือดสมองและการอุดตันของลิ่มเลือด',
      'รักษาภาวะ DVT และ PE ภายหลังการให้ยาต้านการแข็งตัวของเลือดชนิดฉีดเบื้องต้น 5-10 วัน'
    ],
    mandatoryCriteria: [
      'ปรับลดขนาดยาเหลือ 30 mg วันละครั้ง หาก CrCl 15-50 mL/min, น้ำหนัก <= 60 กก., หรือใช้ร่วมกับ P-gp inhibitors',
      'ไม่แนะนำให้ใช้ในผู้ป่วย NVAF ที่มี CrCl > 95 mL/min (อัตราการเกิด Stroke อาจสูงขึ้นเนื่องจากการขับยาเร็ว)',
      'มีหนังสือแสดงความยินยอม Inform_NOAC_2569_01_25'
    ],
    monitoringParameters: ['CrCl', 'Complete Blood Count', 'Signs of Bleeding'],
    documents: [
      {
        name: 'แบบประเมินการใช้ยากลุ่ม NOAC',
        fileCode: 'DUE_NOAC_2568_12_2',
        type: 'form'
      },
      {
        name: 'หนังสือแสดงความยินยอม NOAC',
        fileCode: 'Inform_NOAC_2569_01_25',
        type: 'consent'
      }
    ],
    antidotes: [
      {
        name: 'PROTHROMPLEX (4-factor PCC)',
        classification: 'Non-specific antidote',
        targetDrug: 'Edoxaban',
        fileCode: 'Prothromplex_500_2569_1_20',
        availability: 'in-formulary',
        availabilityText: 'มีในคลังยา รพ.วชิระภูเก็ต',
        preparationGuide: 'หยดทาง IV ช้าๆ 25-50 IU/kg',
        dosage: '25-50 IU/kg IV'
      }
    ]
  },
  {
    id: 'noac-rivaroxaban',
    name: 'Rivaroxaban',
    tradeName: 'Xarelto®',
    strengthAndForm: '10 mg, 15 mg, 20 mg film-coated tablet',
    categoryKey: 'noac',
    primaryFormCode: 'DUE_NOAC_2568_12_2',
    indications: [
      'ป้องกัน Stroke ใน NVAF (ขนาดยา 15-20 mg ต้องรับประทานพร้อมอาหารเพื่อการดูดซึมเต็มที่)',
      'รักษาและป้องกันการกลับเป็นซ้ำของ DVT / PE'
    ],
    mandatoryCriteria: [
      'ขนาดยา 15 mg และ 20 mg ต้องรับประทานพร้อมอาหารทันที',
      'ปรับลดเป็น 15 mg วันละครั้ง หาก CrCl 15-49 mL/min',
      'มีหนังสือแสดงความยินยอม Inform_NOAC_2569_01_25'
    ],
    monitoringParameters: ['Serum Creatinine / CrCl', 'CBC', 'Gastrointestinal Bleeding'],
    documents: [
      {
        name: 'แบบประเมินการใช้ยากลุ่ม NOAC',
        fileCode: 'DUE_NOAC_2568_12_2',
        type: 'form'
      },
      {
        name: 'หนังสือแสดงความยินยอม NOAC',
        fileCode: 'Inform_NOAC_2569_01_25',
        type: 'consent'
      }
    ],
    antidotes: [
      {
        name: 'PROTHROMPLEX (4-factor PCC)',
        classification: 'Non-specific antidote',
        targetDrug: 'Rivaroxaban',
        fileCode: 'Prothromplex_500_2569_1_20',
        availability: 'in-formulary',
        availabilityText: 'มีในคลังยา รพ.วชิระภูเก็ต',
        preparationGuide: '25-50 IU/kg IV infusion',
        dosage: '25-50 IU/kg IV'
      }
    ]
  },

  // 3. ยาปฏิชีวนะมูลค่าสูง (7 รายการ)
  {
    id: 'atb-piptazo',
    name: 'Piperacillin / Tazobactam',
    tradeName: 'Tazocin®',
    strengthAndForm: '4.5 g (Piperacillin 4 g + Tazobactam 0.5 g) vial for injection',
    categoryKey: 'atb',
    primaryFormCode: 'DUE_ATB_2568_11_24',
    indications: [
      'การติดเชื้อรุนแรงในโรงพยาบาล (Hospital-Acquired Pneumonia, VAP)',
      'Intra-abdominal infection ซับซ้อน และ Neutropenic fever',
      'สงสัยเชื้อ Pseudomonas aeruginosa หรือ Gram-negative bacilli'
    ],
    mandatoryCriteria: [
      'กรอกแบบขออนุมัติใช้ยาต้านจุลชีพชนิดควบคุม DUE_ATB_2568_11_24',
      'ส่ง Hemoculture หรือสิ่งส่งตรวจเพาะเชื้อก่อนเริ่มยา',
      'แนะนำ Extended infusion นาน 3-4 ชั่วโมง เพื่อเพิ่มประสิทธิผลทาง Pharmacodynamics (fT > MIC)'
    ],
    monitoringParameters: ['Hemoculture & Sensitivity', 'Serum Cr / eGFR', 'CBC, LFTs'],
    documents: [
      {
        name: 'แบบขออนุมัติใช้ยาต้านจุลชีพชนิดควบคุม',
        fileCode: 'DUE_ATB_2568_11_24',
        type: 'form'
      }
    ]
  },
  {
    id: 'atb-meropenem',
    name: 'Meropenem',
    tradeName: 'Meronem®',
    strengthAndForm: '1 g powder for injection',
    categoryKey: 'atb',
    primaryFormCode: 'DUE_ATB_2568_11_24',
    indications: [
      'Septic Shock หรือ Severe Sepsis ที่สงสัยเชื้อดื้อยา ESBL-producing Enterobacteriaceae',
      'Bacterial Meningitis ในผู้ป่วยติดเชื้อรุนแรง',
      'Hospital-Acquired / Ventilator-Associated Pneumonia ขั้นวิกฤต'
    ],
    mandatoryCriteria: [
      'กรอกแบบขออนุมัติ DUE_ATB_2568_11_24 ภายใน 24 ชม.',
      'จำกัดการใช้ 72 ชั่วโมง รอผลเพาะเชื้อเพื่อ De-escalate',
      'ปรับขนาดยาตาม CrCl อย่างเคร่งครัด'
    ],
    monitoringParameters: ['Renal function (CrCl)', 'Culture & Susceptibility', 'อาการชักหรือระคายเคืองระบบประสาท'],
    documents: [
      {
        name: 'แบบขออนุมัติใช้ยาต้านจุลชีพชนิดควบคุม',
        fileCode: 'DUE_ATB_2568_11_24',
        type: 'form'
      }
    ]
  },
  {
    id: 'atb-imipenem',
    name: 'Imipenem / Cilastatin',
    tradeName: 'Tienam®',
    strengthAndForm: '500 mg / 500 mg powder for injection',
    categoryKey: 'atb',
    primaryFormCode: 'DUE_ATB_2568_11_24',
    indications: [
      'การติดเชื้อรุนแรงจากเชื้อแบคทีเรียหลายชนิด (Polymicrobial infection)',
      'การติดเชื้อในช่องท้องรุนแรงที่ไม่ตอบสนองต่อยาอื่น',
      'Intra-abdominal sepsis & complicated UTI'
    ],
    mandatoryCriteria: [
      'ต้องผ่านการอนุมัติ DUE_ATB_2568_11_24',
      'ระวังการเกิดอาการชัก โดยเฉพาะในผู้ป่วยไตบกพร่องหรือมีโรคทางสมอง',
      'ห้ามใช้ในโรคเยื่อหุ้มสมองอักเสบ (เสี่ยงชักสูงกว่า Meropenem)'
    ],
    monitoringParameters: ['Serum Creatinine', 'Neurological symptoms (Seizure)', 'Liver function test'],
    documents: [
      {
        name: 'แบบขออนุมัติใช้ยาต้านจุลชีพชนิดควบคุม',
        fileCode: 'DUE_ATB_2568_11_24',
        type: 'form'
      }
    ]
  },
  {
    id: 'atb-sulbactam',
    name: 'Sulbactam Sodium (High-dose)',
    tradeName: 'Sulbactam®',
    strengthAndForm: '1 g vial for injection',
    categoryKey: 'atb',
    primaryFormCode: 'DUE_ATB_2568_11_24',
    indications: [
      'รักษาการติดเชื้อ Acinetobacter baumannii ชนิดดื้อยาหลายขนาน (MDR/CR-AB)',
      'ใช้ร่วมกับ Colistin หรือ Meropenem/Tigecycline ตามคำแนะนำของแพทย์โรคติดเชื้อ'
    ],
    mandatoryCriteria: [
      'มีผลเพาะเชื้อยืนยันเชื้อ Acinetobacter baumannii',
      'ขนาดยาสูง 6 - 9 g/day (Sulbactam base) แบ่งให้ทุก 8 ชม. ต้องปรับตาม CrCl',
      'กรอกแบบขออนุมัติ DUE_ATB_2568_11_24'
    ],
    monitoringParameters: ['CrCl', 'LFTs', 'Clinical response'],
    documents: [
      {
        name: 'แบบขออนุมัติใช้ยาต้านจุลชีพชนิดควบคุม',
        fileCode: 'DUE_ATB_2568_11_24',
        type: 'form'
      }
    ]
  },
  {
    id: 'atb-colistin',
    name: 'Colistin (Colistimethate Sodium)',
    tradeName: 'Colomycin®',
    strengthAndForm: '150 mg base (4.5 million IU) vial for injection',
    categoryKey: 'atb',
    primaryFormCode: 'DUE_ATB_2568_11_24',
    indications: [
      'การติดเชื้อ Carbapenem-Resistant Enterobacteriaceae (CRE), CR-AB หรือ CR-Pseudomonas',
      'ยานี้เป็นยาทางเลือกสุดท้าย (Last-resort antimicrobial)'
    ],
    mandatoryCriteria: [
      'Loading dose 300 mg CBA (Colistin Base Activity) IV infusion ในขนาดแรกรับ',
      'Maintenance dose คำนวณปรับตาม Creatinine Clearance อย่างแม่นยำ',
      'กรอกแบบขออนุมัติ DUE_ATB_2568_11_24 และปรึกษาแพทย์โรคติดเชื้อ (ID consult)'
    ],
    monitoringParameters: ['Serum Cr ทุกวัน (Nephrotoxicity สูง)', 'Signs of neurotoxicity / Muscle weakness'],
    documents: [
      {
        name: 'แบบขออนุมัติใช้ยาต้านจุลชีพชนิดควบคุม',
        fileCode: 'DUE_ATB_2568_11_24',
        type: 'form'
      }
    ]
  },
  {
    id: 'atb-tigecycline',
    name: 'Tigecycline',
    tradeName: 'Tygacil®',
    strengthAndForm: '50 mg vial for injection',
    categoryKey: 'atb',
    primaryFormCode: 'DUE_ATB_2568_11_24',
    indications: [
      'Complicated intra-abdominal infection และ Complicated skin/soft tissue infection',
      'ใช้รักษาเชื้อดื้อยา MDR-Acinetobacter ร่วมกับยาอื่น',
      'ห้ามใช้ใน HAP/VAP เป็นยาเดี่ยว (มี Black Box Warning เรื่องอัตราการเสียชีวิต)'
    ],
    mandatoryCriteria: [
      'Loading dose 100 mg IV ตามด้วย 50 mg IV ทุก 12 ชม.',
      'ต้องผ่านการเห็นชอบโดยอายุรแพทย์โรคติดเชื้อ',
      'กรอกแบบขออนุมัติ DUE_ATB_2568_11_24'
    ],
    monitoringParameters: ['Nausea/Vomiting (พบบ่อย)', 'Coagulopathy (PT, aPTT, Fibrinogen)', 'LFTs'],
    documents: [
      {
        name: 'แบบขออนุมัติใช้ยาต้านจุลชีพชนิดควบคุม',
        fileCode: 'DUE_ATB_2568_11_24',
        type: 'form'
      }
    ]
  },
  {
    id: 'atb-vancomycin',
    name: 'Vancomycin Hydrochloride',
    tradeName: 'Vancocin®',
    strengthAndForm: '500 mg, 1 g vial for injection',
    categoryKey: 'atb',
    primaryFormCode: 'DUE_ATB_2568_11_24',
    indications: [
      'การติดเชื้อรุนแรงจาก Methicillin-Resistant Staphylococcus aureus (MRSA)',
      'การติดเชื้อ Ampicillin-resistant Enterococci',
      'Severe Clostridioides difficile colitis (ชนิดรับประทาน)'
    ],
    mandatoryCriteria: [
      'ต้องหยด IV ช้าๆ อัตราไม่เกิน 1 g ต่อนานอย่างน้อย 60 นาที เพื่อป้องกัน Red Man Syndrome',
      'ต้องเจาะตรวจระดับยาในเลือด (TDM Trough level เป้าหมาย 15-20 mcg/mL หรือ AUC/MIC 400-600)',
      'กรอกแบบขออนุมัติ DUE_ATB_2568_11_24'
    ],
    monitoringParameters: ['Vancomycin Trough level', 'Serum Creatinine (Nephrotoxicity)', 'Auditory function'],
    documents: [
      {
        name: 'แบบขออนุมัติใช้ยาต้านจุลชีพชนิดควบคุม',
        fileCode: 'DUE_ATB_2568_11_24',
        type: 'form'
      }
    ]
  },

  // 4. Diabetic mellitus and Obesity
  {
    id: 'dm-mypen',
    name: 'เอกสารแนะนำการใช้ปากกาฉีดยาอินซูลิน my pen',
    tradeName: 'MyPen® Insulin Delivery System',
    strengthAndForm: 'Reusable insulin pen device for 3 mL cartridge',
    categoryKey: 'dm_obesity',
    primaryFormCode: 'MyPen_2568_12_15',
    indications: [
      'ผู้ป่วยเบาหวานชนิดที่ 1 และ 2 ที่ต้องบริหารยาอินซูลินด้วยปากกา MyPen',
      'การตั้งขนาดยา การใส่หลอดยา Cartridge และเทคนิคการไล่ฟองอากาศ (Air shot 2 units)'
    ],
    mandatoryCriteria: [
      'ตรวจสอบวันหมดอายุและลักษณะของอินซูลินก่อนฉีดทุกครั้ง',
      'หมุนตั้งขนาดยาและกดปุ่มฉีดยาค้างไว้อย่างน้อย 10 วินาทีก่อนดึงเข็มออก',
      'เปลี่ยนตำแหน่งฉีดยาทุกครั้งเพื่อป้องกัน Lipohypertrophy'
    ],
    monitoringParameters: ['ระดับน้ำตาลในเลือด (SMBG)', 'อาการน้ำตาลต่ำ (Hypoglycemia)', 'สภาพผิวหนังบริเวณที่ฉีด'],
    documents: [
      {
        name: 'เอกสารแนะนำการใช้ปากกาฉีดยาอินซูลิน my pen',
        fileCode: 'MyPen_2568_12_15',
        type: 'guide',
        description: 'แผ่นพับและคู่มือปฏิบัติการใช้ปากกา MyPen'
      }
    ]
  },
  {
    id: 'dm-ozempic',
    name: 'Semaglutide 1 mg/dose (4 mg/3 mL/pen)',
    tradeName: 'OZEMPIC®',
    strengthAndForm: 'Solution for injection in pre-filled pen (4 mg/3 mL)',
    categoryKey: 'dm_obesity',
    primaryFormCode: 'Ozempic_2568_12_15',
    indications: [
      'ผู้ป่วยเบาหวานชนิดที่ 2 ที่ควบคุมระดับน้ำตาลไม่ได้ด้วยยา Metformin หรือยาอื่น',
      'ลดความเสี่ยง Major Adverse Cardiovascular Events (MACE) ในผู้ป่วยเบาหวานที่มีโรคหัวใจร่วม'
    ],
    mandatoryCriteria: [
      'ฉีดใต้ผิวหนัง (SC) สัปดาห์ละ 1 ครั้ง ในวันเดิมของทุกสัปดาห์ (พร้อมหรือหลังอาหารก็ได้)',
      'เริ่มต้น 0.25 mg สัปดาห์ละครั้ง นาน 4 สัปดาห์ จากนั้นปรับเป็น 0.5 mg และสูงสุด 1 mg/สัปดาห์',
      'ห้ามใช้ในผู้ป่วยที่มีประวัติส่วนตัวหรือครอบครัวเป็นมะเร็งต่อมไทรอยด์ชนิด Medullary (MTC) หรือ MEN 2'
    ],
    monitoringParameters: ['HbA1c', 'อาการทางเดินอาหาร (คลื่นไส้ อาเจียน ท้องเสีย)', 'สัญญาณของตับอ่อนอักเสบ (Pancreatitis)'],
    documents: [
      {
        name: 'แนวทางการใช้ Semaglutide injection (OZEMPIC)',
        fileCode: 'Ozempic_2568_12_15',
        type: 'form',
        description: 'แบบกำกับและคู่มือผู้ป่วย Ozempic'
      }
    ]
  },
  {
    id: 'dm-wegovy',
    name: 'Semaglutide 1 mg/dose (4 mg/3 mL/pen) flex touch pen',
    tradeName: 'WEGOVY® (อัพเดท 10 มี.ค. 69)',
    strengthAndForm: 'Solution for injection in flex touch pen (4 mg/3 mL)',
    categoryKey: 'dm_obesity',
    primaryFormCode: 'Wegovy_2596_03_10',
    indications: [
      'การควบคุมน้ำหนักเรื้อรัง (Chronic Weight Management) ร่วมกับการควบคุมอาหารและการออกกำลังกาย',
      'ผู้ใหญ่ที่มี BMI >= 30 kg/m² หรือ BMI >= 27 kg/m² ที่มีโรคร่วมอย่างน้อย 1 ชนิด (เบาหวาน, ความดัน, ไขมัน, OSA)'
    ],
    mandatoryCriteria: [
      'ปรับเพิ่มขนาดยาทุก 4 สัปดาห์ (0.25 mg -> 0.5 mg -> 1 mg -> 1.7 mg -> 2.4 mg/สัปดาห์)',
      'ประเมินผลการลดน้ำหนักที่ 16 สัปดาห์ หากลดน้ำหนักไม่ได้อย่างน้อย 5% ของน้ำหนักเริ่มต้น ให้หยุดยา',
      'ปฏิบัติตามแนวทางฉบับอัปเดต 10 มีนาคม 2569'
    ],
    monitoringParameters: ['Body Weight / BMI', 'Heart Rate', 'Symptoms of Gallstones / Pancreatitis'],
    documents: [
      {
        name: 'แนวทางการใช้ Semaglutide flex touch pen (WEGOVY)',
        fileCode: 'Wegovy_2596_03_10',
        type: 'form',
        description: 'เกณฑ์ควบคุมพิเศษ Wegovy ฉบับปรับปรุง 10 มี.ค. 2569'
      }
    ]
  },
  {
    id: 'dm-mounjaro',
    name: 'Tirzepatide 5 mg/dose (20 mg/pen) & 10 mg/dose (40 mg/pen)',
    tradeName: 'MOUNJARO®',
    strengthAndForm: 'Solution for injection in KwikPen (5 mg/dose, 10 mg/dose)',
    categoryKey: 'dm_obesity',
    primaryFormCode: 'Mounjaro_2568_12_15',
    indications: [
      'Dual GIP/GLP-1 receptor agonist สำหรับรักษาโรคเบาหวานชนิดที่ 2',
      'ช่วยลดระดับน้ำตาลในเลือดและช่วยลดน้ำหนักอย่างมีนัยสำคัญ'
    ],
    mandatoryCriteria: [
      'เริ่มขนาด 2.5 mg SC สัปดาห์ละ 1 ครั้ง นาน 4 สัปดาห์ เพื่อลดผลข้างเคียงทางเดินอาหาร จากนั้นปรับเป็น 5 mg สัปดาห์ละครั้ง',
      'สามารถปรับเพิ่มขนาดทีละ 2.5 mg ทุก 4 สัปดาห์ ตามการตอบสนอง ขนาดยาสูงสุด 15 mg/สัปดาห์',
      'ตรวจสอบเทคนิคการใช้ KwikPen และห้ามแช่แข็งตัวยา'
    ],
    monitoringParameters: ['HbA1c / FPG', 'Body Weight', 'Gastrointestinal adverse effects'],
    documents: [
      {
        name: 'แนวทางการใช้ Tirzepatide kwik pen (MOUNJARO)',
        fileCode: 'Mounjaro_2568_12_15',
        type: 'form',
        description: 'แบบประเมินและเกณฑ์กำกับการใช้ Mounjaro KwikPen'
      }
    ]
  },

  // 5. Osteoporosis
  {
    id: 'osteo-teriparatide',
    name: 'Teriparatide 600 mcg/2.4 mL pre-filled pen',
    tradeName: 'FORTEO®',
    strengthAndForm: '600 mcg / 2.4 mL (20 mcg/dose) pre-filled pen for SC injection',
    categoryKey: 'osteoporosis',
    primaryFormCode: 'Teriparatide_2568_12_23',
    indications: [
      'โรคกระดูกพรุนรุนแรง (Severe Osteoporosis) ที่มีประวัติกระดูกหักจากความเปราะบาง (Fragility fracture)',
      'ผู้ป่วยที่ไม่ตอบสนองหรือมีข้อห้ามใช้ยาในกลุ่ม Bisphosphonates',
      'ผู้ป่วยที่ได้รับยา Glucocorticoid ต่อเนื่องเป็นเวลานานจนเกิดกระดูกพรุนรุนแรง'
    ],
    mandatoryCriteria: [
      'ฉีดใต้ผิวหนังขนาด 20 mcg วันละ 1 ครั้ง บริเวณหน้าท้องหรือต้นขา',
      'ระยะเวลาการรักษารวมสูงสุดตลอดชีวิตไม่เกิน 24 เดือน (เสี่ยงต่อ Osteosarcoma)',
      'ต้องเก็บในตู้เย็น 2-8°C ตลอดเวลา ห้ามแช่แข็ง',
      'สอดคล้องตามหลักเกณฑ์หนังสือเวียนกรมบัญชีกลาง ว 548 ปี 2569'
    ],
    monitoringParameters: ['Serum Calcium / Uric acid', 'Bone Mineral Density (BMD)', 'อาการเวียนศีรษะความดันต่ำเมื่อลุกยืน (Orthostatic hypotension)'],
    documents: [
      {
        name: 'เกณฑ์การสั่งใช้ Teriparatide pre-filled pen (FORTEO)',
        fileCode: 'Teriparatide_2568_12_23',
        type: 'form',
        description: 'แบบประเมินและใบขออนุมัติยา Forteo'
      },
      {
        name: 'เอกสาร กรมบัญชีกลาง ว 548 เบิกจ่ายยาโรคกระดูกพรุน',
        fileCode: '2569_ว_548_Teriparatide',
        type: 'circular',
        description: 'หนังสือกรมบัญชีกลาง ว 548 ว่าด้วยการเบิกจ่ายยาโรคกระดูกพรุน'
      }
    ]
  },

  // 6. Levetiracetam injection
  {
    id: 'seizure-levetiracetam',
    name: 'Levetiracetam 500 mg/5 mL injection',
    tradeName: 'Keppra® / Levitam®',
    strengthAndForm: '500 mg / 5 mL (100 mg/mL) solution for injection / infusion',
    categoryKey: 'levetiracetam',
    primaryFormCode: 'DUE_Levetiracetam_2569_07_07',
    indications: [
      'รักษาภาวะชักต่อเนื่อง (Status Epilepticus) ที่ไม่ตอบสนองต่อ Benzodiazepine เป็น Second-line antiepileptic',
      'รักษาอาการชักชนิด Partial onset หรือ Myoclonic seizure ในผู้ป่วยวิกฤตที่ไม่สามารถรับประทานยาได้'
    ],
    mandatoryCriteria: [
      'ต้องเจือจางใน 0.9% NSS, D5W หรือ Ringer Lactate อย่างน้อย 100 mL และหยด IV infusion นาน 15 นาที',
      'ปรับขนาดยาตามค่าการทำงานของไต (CrCl) อย่างเคร่งครัด',
      'เมื่อผู้ป่วยสามารถรับประทานยาได้ ให้เปลี่ยนเป็นยาชนิดรับประทาน (Oral Switch) โดยเร็วที่สุด',
      'กรอกแบบประเมินความเหมาะสมยาฉีด Levetiracetam DUE_Levetiracetam_2569_07_07'
    ],
    monitoringParameters: ['การควบคุมอาการชัก (Seizure control)', 'CrCl', 'อาการทางจิตเวชหรืออารมณ์แปรปรวน (Behavioral changes)'],
    documents: [
      {
        name: 'แบบประเมินความเหมาะสมยาฉีด Levetiracetam',
        fileCode: 'DUE_Levetiracetam_2569_07_07',
        type: 'form',
        description: 'แบบฟอร์ม DUE Levetiracetam ฉบับ รพ.วชิระภูเก็ต (7 ก.ค. 2569)'
      }
    ]
  }
];

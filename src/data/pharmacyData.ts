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
    indication: '',
    dosageInstructions: '',
    precautions: '',
    storage: '',
    pregnancyCategory: 'B',
    counselingPoints: [
      '',
      '',
      ''
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
    isLASA: false,
    indication: '',
    dosageInstructions: '',
    precautions: '',
    storage: '',
    pregnancyCategory: 'B',
    counselingPoints: [
      '',
      '',
      ''
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
    isLASA: false,
    indication: '',
    dosageInstructions: '',
    precautions: '',
    storage: '',
    pregnancyCategory: 'B',
    counselingPoints: [
      '',
      '',
      ''
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
    indication: '',
    dosageInstructions: '',
    precautions: '',
    storage: '',
    pregnancyCategory: 'B',
    counselingPoints: [
      '',
      '',
      ''
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
    isLASA: false,
    indication: '',
    dosageInstructions: '',
    precautions: '',
    storage: '',
    pregnancyCategory: 'B',
    counselingPoints: [
      '',
      '',
      ''
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
    isLASA: false,
    indication: '',
    dosageInstructions: '',
    precautions: '',
    storage: '',
    pregnancyCategory: 'B',
    counselingPoints: [
      '',
      '',
      ''
    ]
  },
  {
    id: 'd-7',
    genericName: 'Ivabradine Hydrochloride',
    tradeName: 'Coralan®',
    dosageForm: 'Film-coated tablet',
    strength: '5 mg, 7.5 mg',
    category: 'Cardiovascular',
    isHAD: true,
    isLASA: false,
    indication: '',
    dosageInstructions: '',
    precautions: '',
    storage: '',
    pregnancyCategory: 'B',
    counselingPoints: [
      '',
      '',
      ''
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
    indication: '',
    dosageInstructions: '',
    precautions: '',
    storage: '',
    pregnancyCategory: 'B',
    counselingPoints: [
      '',
      '',
      ''
    ]
  }
];

export const DUE_PROTOCOLS: DueCriteria[] = [
  {
    id: 'due-1',
    drugName: 'Human Albumin 20%',
    genericName: 'Human Albumin',
    targetGroup: 'ผู้ป่วยใน (IPD) ทุกสิทธิ์การรักษา',
    indications: [],
    mandatoryRequirements: [],
    dosageLimit: '',
    monitoringParameters: []
  },
  {
    id: 'due-2',
    drugName: 'Meropenem 1g Injection',
    genericName: 'Meropenem',
    targetGroup: 'ผู้ป่วยติดเชื้อรุนแรง โรงพยาบาลวชิระภูเก็ต',
    indications: [],
    mandatoryRequirements: [],
    dosageLimit: '',
    monitoringParameters: []
  },
  {
    id: 'due-3',
    drugName: 'Ivabradine (Coralan®)',
    genericName: 'Ivabradine',
    targetGroup: 'ผู้ป่วยนอก/ผู้ป่วยใน โรคหัวใจล้มเหลว (HFrEF)',
    indications: [],
    mandatoryRequirements: [],
    dosageLimit: '',
    monitoringParameters: []
  }
];


export const NEWS_LIST: NewsItem[] = [
  {
    id: 'news-1',
    title: 'ประกาศแจ้งเตือนความปลอดภัย: การเฝ้าระวังยา High Alert Drug (HAD) กลุ่ม Concentrated Electrolytes',
    date: '5 ต.ค. 2569',
    category: 'เตือนภัยยา',
    isImportant: true,
    summary: '',
    content: '' // ซ่อนไว้ก่อน
  },
  {
    id: 'news-2',
    title: 'การประชุมวิชาการเภสัชกรรมภาคใต้ ประจำปี 2569: Precision Clinical Pharmacy & AI in Healthcare',
    date: '1 ก.ย. 2569',
    category: 'อบรมวิชาการ',
    summary: '',
    content: '' // ซ่อนไว้ก่อน
  }
];

export const ACADEMIC_LIST: AcademicItem[] = [
  {
  id: 'acad-1',
    title: 'การพัฒนาแดชบอร์ดเพือสนับสนุนการบริหารเวชภัณฑ์ยา โรงพยาบาลวชิระภูเก็ต',
    authors: 'ภญ.ณัฐนิช  หะยีหมัด',
    year: '2569',
    type: 'R2R',
    abstract: 'Dashboard Development for Supportingharmaceutical Inventory Managementat VahiraPhuket Hospital',
    downloadUrl: 'https://drive.google.com/file/d/1hiTjcbcH2rMJBEmej4GWojiD3oPOS_kb/view?usp=drive_link' // <-- ใส่ Path หรือ Link ไฟล์ PDF ของคุณตรงนี้
  },
    {
  id: 'acad-2',
    title: 'ประสิทธิภาพการจัดการยาใกล้หมดอายุ_คลังยา_2569',
    authors: 'ภก.ไพรัช สุทธิพัฒนกิจ',
    year: '2569',
    type: 'R2R',
    abstract: '',
    downloadUrl: 'https://drive.google.com/file/d/1BH_vFrN-MOT9_Jfd-OefVFMButZTssNk/view?usp=drive_link' // <-- ใส่ Path หรือ Link ไฟล์ PDF ของคุณตรงนี้
  },

      {
  id: 'acad-3',
    title: 'Full paperผลของการจัดส่งยาทาง Health Rider และไปรษณีย์ร',
    authors: 'วรภา วราธนกุล',
    year: '2569',
    type: 'R2R',
    abstract: 'ผลของการจัดส่งยาทาง Health Rider และไปรษณียร์่วมกบั การให้บริการเภสชักรรมทางไกลสำหรับผู้ป่วยโรคเรื้อรังของโรงพยาบาลวชิระภเูก็ต',
    downloadUrl: 'https://drive.google.com/file/d/13dw7M5-MMTbBp4N1IGRhSNUu9C6D7rpL/view?usp=drive_link' // <-- ใส่ Path หรือ Link ไฟล์ PDF ของคุณตรงนี้
  },

        {
  id: 'acad-1',
    title: 'Worapa_ผลงานตีพิมพ์_4กพ2568',
    authors: 'วรภา วราธนกุล',
    year: '2569',
    type: 'R2R',
    abstract: 'ผลของการจดัส่งยาทาง Health Rider และไปรษณีย์ร่วมกับการให้บริการเภสชักรรมทางไกลสำหรบัผู่ป่วยโรคเรือ้รงัของโรงพยาบาลวชิระภเูก็ต',
    downloadUrl: 'https://drive.google.com/file/d/1a6BhaeSqISXpkmuEEQ4KhUx6f9C3i1f-/view?usp=drive_link' // <-- ใส่ Path หรือ Link ไฟล์ PDF ของคุณตรงนี้
  },

    {
    id: 'acad-1',
    title: 'CQI DOAC smart use--ริน IPD',
    authors: '-',
    year: '2569',
    type: 'CQI',
    abstract: 'แบบฟอร์มผลงานการพัฒนาระบบงาน, CQI / clinical CQI',
    downloadUrl: 'https://drive.google.com/file/d/10Wq4_vyNhTRUA2t8jIWgNVEWaydHryAj/view?usp=drive_link'
  },

      {
    id: 'acad-2',
    title: 'CQI CKD HA forum',
    authors: 'ภญ.กาญจนา ม่วงทอง',
    year: '2569',
    type: 'CQI',
    abstract: '',
    downloadUrl: 'https://drive.google.com/file/d/1rKv1UMZWb9_AYplqUFr0MxaPescbF70a/view?usp=drive_link'
  },

      {
    id: 'acad-3',
    title: 'CQI ห้องยา-- ดูแลด้วยใจ ชะลอความเสื่อมไต ',
    authors: 'ภญ.กาญจนา ม่วงทอง',
    year: '2569',
    type: 'CQI',
    abstract: '',
    downloadUrl: 'https://docs.google.com/presentation/d/1uu0y-zh14taPfw34ko9dUJCqgG-h5GB4/edit?usp=drive_link&ouid=109418462991652873807&rtpof=true&sd=true'
  },
        {
    id: 'acad-4',
    title: 'CQI ยาด่วน HA forum',
    authors: '-',
    year: '2569',
    type: 'CQI',
    abstract: 'ชื่อผลงาน/โครงการพัฒนาคุณภาพ: ยาด่วนฉับไว อย่าเฉไฉนะออเจ้า',
    downloadUrl: 'https://drive.google.com/file/d/1wp5JaBIWmKATfVdHJ3CP8IKEInIm1alW/view?usp=drive_link'
  },
        {
    id: 'acad-5',
    title: 'CQI คุณพุ่ม 2023 ส่ง HA',
    authors: 'ภก.นรศักดิ์ วุฒิสันติกุล เภสัชกรปฏิบัติการ',
    year: '2569',
    type: 'CQI',
    abstract: 'Right dose ไร้กังวล',
    downloadUrl: 'https://drive.google.com/file/d/1lnWuFJyI5VYWs1lU071lTlU0-Wuw_nF-/view?usp=drive_link'
  },
        {
    id: 'acad-6',
    title: 'กินยาครบ_จบความเสี่ยง',
    authors: 'นางสาวพิชญาภัค เจี๋ยวสกุล',
    year: '2569',
    type: 'CQI',
    abstract: '',
    downloadUrl: 'https://drive.google.com/file/d/1scjwTzXHp7FT0o6EtLLrgUkLLyAna4BI/view?usp=drive_link'
  },
        {
    id: 'acad-7',
    title: 'ขวดนี้ต้องทบทวน_ผลิต_กญ.สุทธินี',
    authors: 'ภญ.ศุทธินี ธิ ตันพงศ์เจริญริ',
    year: '2569',
    type: 'CQI',
    abstract: 'งานผลิตและเคมี',
    downloadUrl: 'https://drive.google.com/file/d/1FdSl6YR2hUdJ3FYj3KLuIRiMTb2tJ8wQ/view?usp=drive_link'
  },
        {
    id: 'acad-8',
    title: 'ยาแช่เย็น_วีวี_DIS',
    authors: 'เภสัชกร อภิชาติ จิตต์ซื่อ',
    year: '2569',
    type: 'CQI',
    abstract: 'พัฒนาฐานข้อมูลและความพร้อมในการบริหารจัดการยาแช่เย็น',
    downloadUrl: 'https://drive.google.com/file/d/1xsJFMjOWvsgFwPMueuSwOr_BomRU-aQd/view?usp=drive_link'
  },
        {
    id: 'acad-9',
    title: 'CQI_P07_อุไรพรรณ',
    authors: '',
    year: '2569',
    type: 'CQI',
    abstract: 'แบบฟอร์มนำเสนอผลงานวิชาการ',
    downloadUrl: 'https://drive.google.com/file/d/18BCrvIbxGD0rUQl3uhQs-cQ_oCLrF4rF/view?usp=drive_link'
  },
        {
    id: 'acad-10',
    title: 'CQI_Oral_R3_08_กญ.จิราภรณ์_สุทธิพัฒนกิจ',
    authors: 'กญ.จิราภรณ์ สุทธิพัฒนกิจ',
    year: '2569',
    type: 'CQI',
    abstract: 'การพัฒนาระบบจ่ายยาผู้ป่วยในเพื่อลดความคลาดเคลื่อนทางยา',
    downloadUrl: 'https://drive.google.com/file/d/14iz54GPZ7iZdd6NoM8sqmfSfceET9CZT/view?usp=drive_link'
  },
        {
    id: 'acad-11',
    title: 'CQI MR นำเสนอ120967 ฉบับบแก้ไข2',
    authors: 'กญ.วจี นันทอมรพงศ์',
    year: '2569',
    type: 'CQI',
    abstract: 'ประสานยา พัฒนาระบบ',
    downloadUrl: 'https://drive.google.com/file/d/13ob8rslzCqHbL2OGeayjD8dvXekx3lN1/view?usp=drive_link'
  },
        {
    id: 'acad-12',
    title: 'CQI ห้องยา-- ดูแลด้วยใจ ชะลอความเสื่อมไต ด้วย',
    authors: 'ภญ.กาญจนา ม่วงทอง',
    year: '2569',
    type: 'CQI',
    abstract: '	พัฒนาระบบการบริบาลทางเภสัชกรรมในผู้ป่วยโรคไตเรื้อรัง ',
    downloadUrl: 'https://docs.google.com/presentation/d/1uu0y-zh14taPfw34ko9dUJCqgG-h5GB4/edit?usp=drive_link&ouid=109418462991652873807&rtpof=true&sd=true'
  },
        {
    id: 'acad-13',
    title: '12_ราชพฤกษ์_Right dose ไร้กังวล',
    authors: '-',
    year: '2569',
    type: 'CQI',
    abstract: '',
    downloadUrl: 'https://docs.google.com/presentation/d/1AwIAwq1ikiwQf8yjIJ4YEiQ3qHChCj4O/edit?usp=drive_link&ouid=109418462991652873807&rtpof=true&sd=true'
  },
        {
    id: 'acad-14',
    title: 'ปุ๊บปั๊บรับยาเลย--OPD pdf',
    authors: 'นางสาว เสริมสุข สังข์ทอง',
    year: '2569',
    type: 'CQI',
    abstract: 'แบบฟอร์มผลงานการพัฒนาระบบงาน, CQI / clinical CQI',
    downloadUrl: 'https://drive.google.com/file/d/1yUxyuHGoA3CITWKsUz69tQ6HRHb1WOXW/view?usp=drive_link'
  },
        {
    id: 'acad-1',
    title: 'Smart Rx Dash--มูนา คลัง ล่าสุด',
    authors: 'ภญ.ณัฐนิช หะยีหมัด',
    year: '2569',
    type: 'Innovation',
    abstract: 'Smart Rx Dash',
    downloadUrl: 'https://drive.google.com/file/d/1oOeozzW8h__dYxED5o9iQmU1GjghgkE4/view?usp=drive_link'
  },
         {
    id: 'acad-2',
    title: 'IPD Medtrack---นุช IPD',
    authors: 'นางสาวนิชนิภา ห้าหยัง',
    year: '2569',
    type: 'Innovation',
    abstract: '',
    downloadUrl: 'https://drive.google.com/file/d/1q9yWbMTUjN7JBhps03ewvYd3AuPIY3XW/view?usp=drive_link'
  },
         {
    id: 'acad-3',
    title: 'Smart Drug Stock, Fast Patient Flow--พัช OPD',
    authors: 'นางสาว พัชรีภรณ์ บุษยา',
    year: '2569',
    type: 'Innovation',
    abstract: 'SMART DRUG STOCK',
    downloadUrl: 'https://drive.google.com/file/d/1WexAn9xYJWyZ3r6fpTR8sTHS_FxphMwK/view?usp=drive_link'
  },
         {
    id: 'acad-4',
    title: 'ROBOT  MEDICINE--มิว IPD',
    authors: '',
    year: '2569',
    type: 'Innovation',
    abstract: 'ROBOT MEDICINE',
    downloadUrl: 'https://drive.google.com/file/d/1fRpyFNm_156XsM_Ax_GaS6bPReMd_gD-/view?usp=drive_link'
  },
         {
    id: 'acad-5',
    title: 'Innovation ห้องยา--รู้ก่อน ยาขาดคลัง',
    authors: '',
    year: '2569',
    type: 'Innovation',
    abstract: 'รู้ก่อน ยาขาดคลัง',
    downloadUrl: 'https://docs.google.com/presentation/d/15l1_aoGc4Dj47MkAhlgEU5Om6-sIMjVJ/edit?usp=drive_link&ouid=109418462991652873807&rtpof=true&sd=true'
  },
         {
    id: 'acad-6',
    title: 'Innovation ห้องยา--NO CHALLENGE NO CHANGE',
    authors: 'ภก.ชาติชาย หวัง',
    year: '2569',
    type: 'Innovation',
    abstract: 'นวัตกรรมNO CHALLENGE NO CHANGE',
    downloadUrl: 'https://docs.google.com/presentation/d/15l1_aoGc4Dj47MkAhlgEU5Om6-sIMjVJ/edit?usp=drive_link&ouid=109418462991652873807&rtpof=true&sd=true'
  },

      {
    id: 'acad-6',
    title: 'E-bidding โปร่งใสได้ยามาตรฐาน--แวว จัดซื้อ',
    authors: 'นางสาวอุไรพรรณ หอประสิทธิ์กุล',
    year: '2569',
    type: 'Publication',
    abstract: '',
    downloadUrl: 'https://drive.google.com/file/d/1JloY5-E6TUBE-jO2YC16vRoph7Gn7LGE/view?usp=drive_link'
  },

];

export const SOP_LIST: SOPItem[] = [
  {
    id: 'sop-1',
    code: 'SOP-PHARM-001',
    title: 'แนวทางปฏิบัติการจัดการยาที่มีความเสี่ยงสูง (High Alert Drugs: HAD)',
    department: 'กลุ่มงานเภสัชกรรมทั้งหมด',
    revision: 'Rev. 06',
    effectiveDate: '',
    description: ''
  },

  {
    id: 'sop-4',
    code: 'SOP-PHARM-022',
    title: '',
    department: '',
    revision: 'Rev. 03',
    effectiveDate: '',
    description: ''
  }
];

export const DEPARTMENT_UNITS: DepartmentUnit[] = [
  {
    id: 'u-1',
    name: '',
    head: '',
    description: '',
    responsibilities: [
      '',
      '',
      '',
      ''
    ],
    location: '',
    extension: ''
  },

  {
    id: 'u-6',
    name: '',
    head: '',
    description: '',
    responsibilities: [
      '',
      '',
      '',
      ''
    ],
    location: '',
    extension: ''
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

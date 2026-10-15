export interface DriveLinkItem {
  code: string;
  title: string;
  driveUrl: string;
}

export const DEFAULT_DRIVE_LINKS: Record<string, { title: string; defaultUrl: string }> = {
  // 1. Albumin
  DUE_Albumin: {
    title: 'แบบประเมิน Albumin',
    defaultUrl: 'http://www.vcnet.com/wp-content/uploads/2025/11/DUE_Albumin.pdf',
  },
  SECTION_Albumin: {
    title: '1. แบบประเมินความเหมาะสมการใช้ Albumin',
    defaultUrl: 'https://drive.google.com/drive/folders/1_W6gHTsZMP_pewdwhVIXdpPfLTUlzwm7?usp=drive_link',
  },

  // 2. NOAC
  SECTION_NOAC: {
    title: '2. ยากลุ่ม Non-vitamin K Antagonist Oral Anticoagulants (NOAC)',
    defaultUrl: 'http://www.vcnet.com/wp-content/uploads/2025/11/Inform_NOAC_2569_01_25.pdf',
  },
  DUE_NOAC_2568_12_2: {
    title: 'แบบประเมินการใช้ยากลุ่ม NOAC',
    defaultUrl: 'http://www.vcnet.com/wp-content/uploads/2025/11/DUE_NOAC_2568_12_2.pdf',
  },
  Inform_NOAC_2569_01_25: {
    title: 'หนังสือแสดงความยินยอม NOAC',
    defaultUrl: 'http://www.vcnet.com/wp-content/uploads/2025/11/Inform_NOAC_2569_01_25.pdf',
  },
  Idarucizumab_2569_1_14: {
    title: 'Idarucizumab (specific antidote of Dabigatran)',
    defaultUrl: 'http://www.vcnet.com/wp-content/uploads/2025/11/Idarucizumab_2569_1_14.pdf',
  },
  Prothromplex_500_2569_1_20: {
    title: 'Prothrombin complex concentrate (PROTHROMPLEX) หรือ 4 factor',
    defaultUrl: 'http://www.vcnet.com/wp-content/uploads/2025/11/Prothromplex_500_2569_1_20.pdf',
  },
  Feiba_2569_1_20: {
    title: 'Activated prothrombin complex concentrate (FEIBA)',
    defaultUrl: 'http://www.vcnet.com/wp-content/uploads/2025/11/Feiba_2569_1_20.pdf',
  },

  // 3. ยาปฏิชีวนะมูลค่าสูง
  SECTION_ATB: {
    title: '3. ยาปฏิชีวนะมูลค่าสูง',
    defaultUrl: 'https://drive.google.com/drive/folders/1DUE_ATB_2568_11_24_Vachira',
  },
  DUE_ATB_2568_11_24: {
    title: 'แบบขออนุมัติใช้ยาต้านจุลชีพชนิดควบคุม',
    defaultUrl: 'http://www.vcnet.com/wp-content/uploads/2025/11/DUE_ATB_2568_11_24.pdf',
  },

  // 4. Diabetic mellitus and Obesity
  SECTION_DM_Obesity: {
    title: '4. Diabetic mellitus and Obesity',
    defaultUrl: 'https://drive.google.com/drive/folders/1DM_Obesity_Vachira',
  },
  MyPen_2568_12_15: {
    title: 'เอกสารแนะนำการใช้ปากกาฉีดยาอินซูลิน my pen ',
    defaultUrl: 'http://www.vcnet.com/wp-content/uploads/2025/11/www.vcnet.com-mypen-2568-12-15.pdf',
  },
  Ozempic_2568_12_15: {
    title: 'Semaglutide 1 mg/dose (4 mg/3 mL/pen) solution for injection in pre-filled pen (OZEMPIC)',
    defaultUrl: 'http://www.vcnet.com/wp-content/uploads/2025/11/www.vcnet.com-ozempic-2568-12-15-2.pdf',
  },
  Wegovy_2596_03_10: {
    title: 'Semaglutide 1 mg/dose (4 mg/3 mL/pen) solution for injection in flex touch pen (WEGOVY) อัพเดท 10 มี.ค. 69',
    defaultUrl: 'http://www.vcnet.com/wp-content/uploads/2025/11/Wegovy_2596_03_10.pdf',
  },
  Mounjaro_2568_12_15: {
    title: 'Tirzepatide 5 mg/dose (20 mg/pen)  และ 10 mg/dose (40 mg/pen) solution for injection in kwik pen (MOUNJARO)',
    defaultUrl: 'http://www.vcnet.com/wp-content/uploads/2025/11/www.vcnet.com-mounjaro-2568-12-15-4.pdf',
  },

  // 5. Osteoporosis
  SECTION_Osteoporosis: {
    title: '5. Osteoporosis',
    defaultUrl: 'https://drive.google.com/drive/folders/1Osteoporosis_Vachira',
  },
  Teriparatide_2568_12_23: {
    title: 'Teriperatide 600 mcg/2.4 mL pre-filled pen (FORTEO)',
    defaultUrl: 'http://www.vcnet.com/wp-content/uploads/2025/11/www.vcnet.com-teriparatide-2568-12-23-1.pdf',
  },
  '2569_ว_548_Teriparatide': {
    title: 'เอกสาร กรมบัญชีกลาง ว 548 เบิกจ่ายยาโรคกระดูกพรุน',
    defaultUrl: 'http://www.vcnet.com/wp-content/uploads/2025/11/2569_%E0%B8%A7_548_Teriparatide.pdf',
  },

  // 6. Levetiracetam injection
  DUE_Levetiracetam_2569_07_07: {
    title: 'Levetiracetam 500 mg/5 mL injection',
    defaultUrl: 'http://www.vcnet.com/wp-content/uploads/2025/11/DUE_Levetiracetam_2569_07_07.pdf',
  },

  // WI ฉบับปัจจุบัน (Google Drive 4 ลิงก์)
  WI_CURR_1: {
    title: 'แนวทางการให้ข้อมูลประวัติแพ้ยา 2560',
    defaultUrl: 'https://drive.google.com/file/d/1GwKtLF7nYqlEMbG88sEcF2v5X9gUThxZ/view?usp=drive_link',
  },
  WI_CURR_2: {
    title: 'แนวทางการส่งมอบยาแก่ผู้มารับบริการ 2560',
    defaultUrl: 'https://drive.google.com/file/d/1va91tKYDRODHzd_7d7vtGhnjP-1eNWGu/view?usp=drive_link',
  },
  WI_CURR_3: {
    title: 'แนวทางคัดกรองคำสั่งใช้ยา 2564',
    defaultUrl: 'https://drive.google.com/file/d/1NmpTWLWBPOJyjO1Ajga6pyVNxMOqyGX-/view?usp=drive_link',
  },
  WI_CURR_4: {
    title: 'แนวทางการบริบาลเภสัชกรรมผู้ป่วยใน 001',
    defaultUrl: 'https://drive.google.com/file/d/1_aCa0vI5VpsyPLpCSoFQVdrdMS5_CZ7l/view?usp=drive_link',
  },

  // WP จากหน่วยงานอื่น (Google Drive 2 ลิงก์)
  WP_EXT_1: {
    title: 'แนวทางปฏิบัติ กรณีระบบสารสนเทศล่ม ห้องจ่ายยา OPD',
    defaultUrl: 'https://drive.google.com/file/d/1fDMGFJwT2u7fDc7-Mpw8K8IH5x6RIizM/view?usp=drive_link  ',
  },
  WP_EXT_2: {
    title: 'แนวทางปฏิบัติระบบสารสนเทศล่ม ห้องจ่ายยา IPD',
    defaultUrl: 'https://drive.google.com/file/d/1ITNCqfR9pkqR3Rhd8z20ZV-UActOMmYZ/view?usp=drive_link',
  },

  // WP ฉบับเก่า (Google Drive 14 ลิงก์)
  WP_OLD_1: {
    title: 'แนวทางเบิกจ่ายยาเสพติดให้โทษในประเภทที่ 2,5 ฉบับแก้ไข',
    defaultUrl: 'https://drive.google.com/file/d/1IHVQEMvIVv_g0Jc4i2gqjc_Sf42f1MM4/view?usp=drive_link',
  },
  WP_OLD_2: {
    title: 'แนวทางจัดการยาความเสี่ยงสูง Warfarin',
    defaultUrl: 'https://drive.google.com/file/d/1w7B8J34YZQrHJ3NwswK44eQpehiprjX-/view?usp=drive_link',
  },
  WP_OLD_3: {
    title: 'แนวทางการจัดการยาควบคุมอุณหภูมิ 2-8°C',
    defaultUrl: 'https://drive.google.com/file/d/1VJqC9Rkf_t0-J8ZaREVM8NTtbvBgnSlI/view?usp=drive_link',
  },
  WP_OLD_4: {
    title: 'แนวทางการจัดการยา Heparinmedication reconciliation',
    defaultUrl: 'https://drive.google.com/file/d/15Mt3B206lewaYRTcmKcOLQJHZfp-L-dh/view?usp=drive_link',
  },
  WP_OLD_5: {
    title: 'medication reconciliation',
    defaultUrl: 'https://drive.google.com/file/d/13IyJ3RtrOdb9D27A9ZUOVi7-3ivEIgaQ/view?usp=drive_link',
  },
  WP_OLD_6: {
    title: 'แนวทางการจัดการยาถอนทะเบียน 1',
    defaultUrl: 'https://drive.google.com/file/d/1cxI396e_NdxiQXVZ0sBGP0ywfQlv5sWM/view?usp=drive_link',
  },
  WP_OLD_7: {
    title: 'แนวทางการใช้ยาเสี่ยงสูง High alert drugs',
    defaultUrl: 'https://drive.google.com/file/d/1RlpHTpGFS8zrtcgACpNAwsBvZngTnba8/view?usp=drive_link',
  },
  WP_OLD_8: {
    title: 'แนวทางการติดตามและเผ้าระวังอาการไม่พึงประสงค์จากการใช้ยา',
    defaultUrl: 'https://drive.google.com/file/d/1MV0e1ypLBH2CCdEjJ0ms_LTC9M-jZQW7/view?usp=drive_link',
  },
  WP_OLD_9: {
    title: 'แนวทางปฏิบัติงาน MR 08102561',
    defaultUrl: 'https://drive.google.com/file/d/1lk7FmaaVl6VAfTmC2EzkU52Giuf8w6wT/view?usp=drive_link',
  },
  WP_OLD_10: {
    title: 'แนวทางการจัดการ extravasation 2560',
    defaultUrl: 'https://drive.google.com/file/d/1OHNwJglN9lbkZM-eWaSDyGxUrwdl_rBu/view?usp=drive_link',
  },
  WP_OLD_11: {
    title: 'แนวทางการจัดยาเสี่ยงสูง wartarin 2565',
    defaultUrl: 'https://drive.google.com/file/d/1OKUJr_rQTVYsn0hfHULNYe2F2gpQkp1i/view?usp=drive_link',
  },
  WP_OLD_12: {
    title: 'การจัดการยาเคมีบำบัด 2561',
    defaultUrl: 'https://drive.google.com/file/d/1eIFgUdLMXAxozOwlxOQO56OLLcOub-eB/view?usp=drive_link',
  },
  WP_OLD_13: {
    title: 'การให้ยาทางสายอาหารแก่ผู้ป่วยใส่สายอาหารทางจมูก 2561',
    defaultUrl: 'https://drive.google.com/file/d/1B3H-qo30TPGkoGZhkbRZJN-QisG7ybXQ/view?usp=drive_link',
  },
  WP_OLD_14: {
    title: 'แนวทางการติดตามและเผ้าระวังอาการไม่พึงประสงค์จากการใช้ยา 2561',
    defaultUrl: 'https://drive.google.com/file/d/1tXZfovHsc7QT7wHRKjMYvv-Q0lkxDta7/view?usp=drive_link',
  },

  // WP ฉบับปัจจุบัน (Google Drive 1 ลิงก์)
  WP_CURR_1: {
    title: 'ระเบียบปฏิบัติยาด่วน รพ.วชิระ',
    defaultUrl: 'https://docs.google.com/document/d/1TJX5sOBogI9bk_JhG848L4CeIDzl1riF/edit?usp=drive_link&ouid=109418462991652873807&rtpof=true&sd=true',
  },
  WP_CURR_2: {
    title: 'สารทึบรังสี - ประวัติแพ้ยา',
    defaultUrl: 'https://docs.google.com/document/d/1nYHesotjiZ_u0bbln29nRgZ6YGgDNdu6/edit?usp=drive_link&ouid=109418462991652873807&rtpof=true&sd=true',
  },
  WP_CURR_3: {
    title: 'เอกสารระดับระเบียบปฏิบัติ WP',
    defaultUrl: 'https://docs.google.com/document/d/1bJR1AXOtGkEwugVAJX5-MEESgf-hoBBk/edit?usp=drive_link&ouid=109418462991652873807&rtpof=true&sd=true',
  },
    WP_CURR_4: {
    title: 'แนวทางการบริหารสารทึบรังสี',
    defaultUrl: 'https://drive.google.com/file/d/1IdERSrPVgvWazv_je1tEwQatijKddiEV/view?usp=drive_link',
  },
    WP_CURR_5: {
    title: 'แนวทางการจัดการยาขาดคลัง',
    defaultUrl: 'https://drive.google.com/file/d/1UbpkZVGz2xPBsQJ2F4Q2qrVN5HeTe3Mt/view?usp=drive_link',
  },
    WP_CURR_6: {
    title: 'แนวทาง rechallenge 2567',
    defaultUrl: 'https://drive.google.com/file/d/1hfmE8xoCK9uUsXUteFJ6MUGC45vuWnxb/view?usp=drive_link',
  },
    WP_CURR_7: {
    title: 'แนวทางการติดตามและการเผ้าระวังอาการไม่พึงประสงค์',
    defaultUrl: 'https://drive.google.com/file/d/1mnqZSYJbvcpatwRNprnRYF-Lpb1UlBdu/view?usp=drive_link',
  },
    WP_CURR_8: {
    title: 'การใช้ยาทางสายอาหารแก่ผู้ป่วยใส่สายอาหารทางจมูก 2561',
    defaultUrl: 'https://docs.google.com/document/d/19LYHr59eJ8SYJ17m01gw0vZf6gqSRE4kVjZIYEg8M4s/edit?usp=drive_link',
  },
    WP_CURR_9: {
    title: 'การจัดการเคมีบำบัด',
    defaultUrl: 'https://drive.google.com/file/d/14rjXaypSSVWXiR4ChUIi_ZBYqqSsjImm/view?usp=drive_link',
  },
  WP_CURR_10: {
    title: 'ยา HAD 2657',
    defaultUrl: 'https://drive.google.com/file/d/1GzE5A5nR65gavT4Rqbd4icJwD6Tqr-Sa/view?usp=drive_link',
  },
    WP_CURR_11: {
    title: 'แนวทางการจัดการยาถอนทะเบียน-ยาไม่ผ่านเกณท์มาตรฐาน 2563',
    defaultUrl: 'https://drive.google.com/file/d/1wlSwXjM2rd3QR_Cxeh2XfRjM1XEhN73x/view?usp=drive_link',
  },
    WP_CURR_12: {
    title: 'แนวทางการจัดการ Drug interaction 2560',
    defaultUrl: 'https://drive.google.com/file/d/1UDwOgUvOfdcHJk0dxl4f9GaUMydSIode/view?usp=drive_link',
  },
    WP_CURR_13: {
    title: 'medication reconciliation 2566',
    defaultUrl: 'https://drive.google.com/file/d/1Q-PDo_Lq0hHMBH9R4NgOQ09PR1CvEGMl/view?usp=drive_link',
  },
    WP_CURR_14: {
    title: 'แนวทางการจัดการยา Heparin 2567',
    defaultUrl: 'https://drive.google.com/file/d/1aV0AelrkjqhR1PigCZbUACCNHSCnrTEv/view?usp=drive_link',
  },
    WP_CURR_15: {
    title: 'แบบบันทึกอุณภูมิเย็น update 310865',
    defaultUrl: 'https://drive.google.com/file/d/1tTw9QQuJnrXghLA-VStY4vFtktLf4OO6/view?usp=drive_link',
  },
    WP_CURR_16: {
    title: 'จัดเรียงยาในตู้เย็น',
    defaultUrl: 'https://drive.google.com/file/d/1HngFOYrtNGXh-3fjSKx7jsnRusDw5MMA/view?usp=drive_link',
  },
  WP_CURR_17: {
    title: 'แนวทางการจัดการยาควบคุมอุณหภูมิ 2-8°C',
    defaultUrl: 'https://drive.google.com/file/d/1aijHcuKp7TFUCIzxkSKQqwnam3vrSUYE/view?usp=drive_link',
  },
    WP_CURR_18: {
    title: 'แนวทางปฏิบัติยาต้านพิษ 2563',
    defaultUrl: 'https://drive.google.com/file/d/1oFwQKwcZZdABrgv19Ip9-Qy0taK85RtG/view?usp=drive_link',
  },
    WP_CURR_19: {
    title: 'แนวทางเบิกจ่ายยาเสพติดให้โทษในประเภทที่ 2',
    defaultUrl: 'https://drive.google.com/file/d/1iOoAicwdmLOjBNCzNif0HFdxtMORtJIS/view?usp=drive_link',
  },
    WP_CURR_20: {
    title: 'extravasation Kit',
    defaultUrl: 'https://drive.google.com/file/d/16PRLMxGcdclQrgGsmak2yaT8lmNE0Uhm/view?usp=drive_link',
  },
    WP_CURR_21: {
    title: 'การให้ยาทางสายอาหารแก่ผู้ป่วยใส่สายอาหารทางจมูก',
    defaultUrl: 'https://drive.google.com/file/d/1XcwwAYMHvA4C5MROAblz4xl_x1co9VB5/view?usp=drive_link',
  },
    WP_CURR_22: {
    title: 'แนวทางการจัดยาความเสี่ยงสูง warfarin',
    defaultUrl: 'https://drive.google.com/file/d/1Sk7KCpZ8W5QFgj9IGKHTuSFz1eFni12m/view?usp=drive_link',
  },
    WP_CURR_23: {
    title: 'แนวทางจัดการ extravasation',
    defaultUrl: 'https://drive.google.com/file/d/1HrOynC7bddo49iKE1BjvbBHv6xuAHRuZ/view?usp=drive_link',
  },
  WP_CURR_24: {
    title: 'แผนอัคคีภัย211266.doc',
    defaultUrl: 'https://docs.google.com/document/d/1oC0JcWCQfQPnPkgPwiaxmPVmRHnCeJa-/edit?usp=drive_link&ouid=109418462991652873807&rtpof=true&sd=true',
  },
  WP_CURR_25: {
    title: 'แผนอัคคีภัย211266.pdf',
    defaultUrl: 'https://drive.google.com/file/d/1iFFBTMHq73U8n2MxVvdNJYGUXmJZA7PP/view?usp=drive_link',
  },
    WP_CURR_26: {
    title: 'แผนอัคคีภัยหมู่211266.doc',
    defaultUrl: 'https://docs.google.com/document/d/1bCV0fdP6IBDVTJZcdBJevdpuNClSjAuD/edit?usp=drive_link&ouid=109418462991652873807&rtpof=true&sd=true',
  },
      WP_CURR_27: {
    title: 'แผนอัคคีภัยหมู่.pdf',
    defaultUrl: 'https://drive.google.com/file/d/1H2mAU9d049n4uEOBts_CdkEbS8SdyOP1/view?usp=drive_link',
  },
      WP_CURR_28: {
    title: 'รายการยาภาวะภัยพิบัติ.xlsx',
    defaultUrl: 'https://docs.google.com/spreadsheets/d/10049yG3DGEt2wOdPQ-RCLdM80kXIBSci/edit?usp=drive_link&ouid=109418462991652873807&rtpof=true&sd=true',
  },
      WP_CURR_29: {
    title: 'อัพเดทระเบียบปฏิบัติยาด่วน ',
    defaultUrl: 'https://docs.google.com/document/d/1TJX5sOBogI9bk_JhG848L4CeIDzl1riF/edit?usp=drive_link&ouid=109418462991652873807&rtpof=true&sd=true',
  },

  // ระเบียบและแนวทางปฏิบัติงานเดิม (สำรอง)
  GUIDELINE_DRIVE_1: {
    title: 'แนวทางการบริหารสารทึบรังสีและการประเมินความเสี่ยง',
    defaultUrl: 'https://docs.google.com/document/d/1Q5WAVfgAAzhT8nl_CrasqWODmcQ3x-uo/edit?usp=drive_link&ouid=109418462991652873807&rtpof=true&sd=true',
  },
  GUIDELINE_DRIVE_2: {
    title: 'แนวทางการบริหารสารทึบรังสีและrisk checklist',
    defaultUrl: 'https://docs.google.com/document/d/1gdO9lf-w3ABw3jRBaDwBROZwVxcAZkrK/edit?usp=drive_link&ouid=109418462991652873807&rtpof=true&sd=true',
  },
  GUIDELINE_DRIVE_3: {
    title: 'แนวทางการเก็บยาควบคุม',
    defaultUrl: 'https://docs.google.com/document/d/1WuJI6Q09xUVhtVUekMYjdVH5S_UB5SUZG4oBGXitBUI/edit?usp=drive_link',
  },
  GUIDELINE_DRIVE_4: {
    title: 'แนวทางประเมินความเสี่ยง',
    defaultUrl: 'https://docs.google.com/document/d/1HNPz8jZ8G9ieP9zHwRkA9MB0yG6lZMGI/edit?usp=drive_link&ouid=109418462991652873807&rtpof=true&sd=true',
  },
  GUIDELINE_DRIVE_5: {
    title: 'แนวทางการจัดการ Drug interaction',
    defaultUrl: 'https://docs.google.com/document/d/1DMHnmYcNWUHU2DzJv5dhztzbdrkdkK4dtmkrf0uuEe4/edit?usp=drive_link',
  },
  GUIDELINE_DRIVE_6: {
    title: 'แนวทางการจัดการ Drug',
    defaultUrl: 'https://docs.google.com/document/d/101n2GpRrNE7xcIOPbL1CZwlP_LRadHpw/edit?usp=drive_link&ouid=109418462991652873807&rtpof=true&sd=true',
  },
  GUIDELINE_DRIVE_7: {
    title: 'แบบฟอร์ม WI และ WP',
    defaultUrl: 'https://docs.google.com/spreadsheets/d/12nOSbWwQyGeUl7j2PP_QNvzsGR4Uvh9fnO7HUIqphJ4/edit?usp=drive_link',
  },
};

const STORAGE_KEY = 'vachira_due_google_drive_links';

export function getStoredDriveLinks(): Record<string, string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading drive links from localStorage', err);
    return {};
  }
}

export function saveStoredDriveLinks(links: Record<string, string>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
  } catch (err) {
    console.error('Error saving drive links to localStorage', err);
  }
}

export function getDriveLinkForCode(code: string): string {
  const custom = getStoredDriveLinks();
  if (custom[code] && custom[code].trim()) {
    return custom[code].trim();
  }
  return DEFAULT_DRIVE_LINKS[code]?.defaultUrl || `https://drive.google.com/drive/folders/${code}`;
}

export function saveSingleDriveLink(code: string, url: string): void {
  const current = getStoredDriveLinks();
  current[code] = url.trim();
  saveStoredDriveLinks(current);
}

export function resetSingleDriveLink(code: string): void {
  const current = getStoredDriveLinks();
  delete current[code];
  saveStoredDriveLinks(current);
}

export function isCustomDriveLink(code: string): boolean {
  const custom = getStoredDriveLinks();
  return Boolean(custom[code] && custom[code].trim());
}

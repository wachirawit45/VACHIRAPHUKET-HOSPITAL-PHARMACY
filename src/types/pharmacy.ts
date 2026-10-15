export type PageId =
  | 'home'
  | 'about'
  | 'structure'
  | 'drug-info'
  | 'due'
  | 'guidelines'
  | 'news'
  | 'academic'
  | 'activities';

export type Language = 'th' | 'en';

export interface DrugItem {
  id: string;
  genericName: string;
  tradeName: string;
  dosageForm: string;
  strength: string;
  category: 'Antibiotics' | 'Cardiovascular' | 'Endocrine' | 'Analgesic' | 'High-Alert' | 'Respiratory' | 'Other';
  isHAD: boolean; // High Alert Drug
  isLASA: boolean; // Look Alike Sound Alike
  lasaPair?: string;
  indication: string;
  dosageInstructions: string;
  precautions: string;
  storage: string;
  pregnancyCategory: 'A' | 'B' | 'C' | 'D' | 'X';
  counselingPoints: string[];
}

export interface DueCriteria {
  id: string;
  drugName: string;
  genericName: string;
  targetGroup: string;
  indications: string[];
  mandatoryRequirements: string[];
  dosageLimit: string;
  monitoringParameters: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'เตือนภัยยา' | 'ข่าวกลุ่มงาน' | 'อบรมวิชาการ' | 'ยาขาดคราว';
  summary: string;
  content: string;
  isImportant?: boolean;
}

export interface AcademicItem {
  id: string;
  title: string;
  authors: string;
  year: string;
  type: 'R2R' | 'CQI' | 'Publication' | 'Innovation';
  abstract: string;
  downloadUrl?: string;
}

export interface SOPItem {
  id: string;
  code: string;
  title: string;
  department: string;
  revision: string;
  effectiveDate: string;
  description: string;
}

export interface GuidelineItem {
  id: string;
  type: 'wi' | 'wp' | 'sop' | 'cpg' | 'guideline';
  category: string;
  sectionKey: 'wi-curr' | 'wp-ext' | 'wp-curr' | 'wp-old' | 'guideline-drive' | 'sop' | 'cpg';
  code: string;
  title: string;
  department?: string;
  effectiveDate?: string;
  description?: string;
  keyPoints?: string[];
  driveCode?: string;
}

export interface DepartmentUnit {
  id: string;
  name: string;
  head: string;
  description: string;
  responsibilities: string[];
  location: string;
  extension: string;
}


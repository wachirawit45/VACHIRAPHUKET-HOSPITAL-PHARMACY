export type DueCategoryKey =
  | 'albumin'
  | 'noac'
  | 'atb'
  | 'dm_obesity'
  | 'osteoporosis'
  | 'levetiracetam';

export interface DueDocumentItem {
  name: string;
  fileCode: string;
  type: 'form' | 'consent' | 'antidote' | 'guide' | 'circular';
  description?: string;
  updateDate?: string;
}

export interface AntidoteItem {
  name: string;
  classification: 'Specific antidote' | 'Non-specific antidote';
  targetDrug: string;
  fileCode?: string;
  availability: 'in-formulary' | 'not-in-thailand' | 'not-in-hospital';
  availabilityText: string;
  preparationGuide: string;
  dosage: string;
}

export interface DueDrugDetail {
  id: string;
  name: string;
  tradeName?: string;
  strengthAndForm: string;
  categoryKey: DueCategoryKey;
  primaryFormCode: string;
  indications: string[];
  mandatoryCriteria: string[];
  monitoringParameters: string[];
  documents: DueDocumentItem[];
  antidotes?: AntidoteItem[];
  specialNotes?: string;
}

export interface DueCategoryMeta {
  key: DueCategoryKey;
  numberPrefix: string;
  title: string;
  subtitle: string;
  badge: string;
  iconName: string;
  description: string;
  primaryForms: DueDocumentItem[];
}

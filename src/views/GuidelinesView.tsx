import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  FileText,
  ExternalLink,
  Search,
  Image as ImageIcon,
  Upload,
  X,
  RotateCcw,
  ShieldCheck,
  Building2,
  Calendar,
  ChevronRight,
  HardDrive,
} from 'lucide-react';
import { getDriveLinkForCode } from '../data/driveLinks';

export type Language = 'th' | 'en';

export type GuidelineSectionKey =
  | 'all'
  | 'wi-curr'
  | 'wp-ext'
  | 'wp-curr'
  | 'wp-old'
  | 'guideline-drive'
  | 'sop'
  | 'cpg';

export interface GuidelineItem {
  id: string;
  type: 'wi' | 'wp' | 'sop' | 'cpg' | 'guideline';
  category: string;
  sectionKey: GuidelineSectionKey;
  code: string;
  title: string;
  department?: string;
  effectiveDate?: string;
  description?: string;
  keyPoints?: string[];
  driveCode?: string;
}

export const GUIDELINES_DATABASE: GuidelineItem[] = [
  // ==========================================
  // 1. WI ฉบับปัจจุบัน (4 รายการ เชื่อมต่อ Google Drive)
  // ==========================================
  {
    id: 'wi-curr-1',
    type: 'wi',
    category: 'WI ฉบับปัจจุบัน',
    sectionKey: 'wi-curr',
    code: 'WI-01',
    title: 'แนวทางการให้ข้อมูลประวัติแพ้ยา 2560',
    department: 'ศูนย์ข้อมูลยาและบริบาลเภสัชกรรม (DIC)',
    effectiveDate: '2560 (ฉบับปัจจุบัน)',
    driveCode: 'WI_CURR_1',
  },
  {
    id: 'wi-curr-2',
    type: 'wi',
    category: 'WI ฉบับปัจจุบัน',
    sectionKey: 'wi-curr',
    code: 'WI-02',
    title: 'แนวทางการส่งมอบยาแก่ผู้มารับบริการ 2560',
    department: 'งานบริการเภสัชกรรมผู้ป่วยนอกและผู้ป่วยใน',
    effectiveDate: '2560 (ฉบับปัจจุบัน)',
    driveCode: 'WI_CURR_2',
  },
  {
    id: 'wi-curr-3',
    type: 'wi',
    category: 'WI ฉบับปัจจุบัน',
    sectionKey: 'wi-curr',
    code: 'WI-03',
    title: 'แนวทางคัดกรองคำสั่งใช้ยา 2564',
    department: 'งานบริการเภสัชกรรมและบริบาลทางเภสัชกรรม',
    effectiveDate: '2564 (ฉบับปัจจุบัน)',
    driveCode: 'WI_CURR_3',
  },
  {
    id: 'wi-curr-4',
    type: 'wi',
    category: 'WI ฉบับปัจจุบัน',
    sectionKey: 'wi-curr',
    code: 'WI-04',
    title: 'แนวทางการบริบาลเภสัชกรรมผู้ป่วยใน 001',
    department: 'งานการบริบาลทางเภสัชกรรมผู้ป่วยใน (IPD Clinical Pharmacy)',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WI_CURR_4',
  },
  

  // ==========================================
  // 2. WP จากหน่วยงานอื่น (2 รายการ เชื่อมต่อ Google Drive)
  // ==========================================
  {
    id: 'wp-ext-1',
    type: 'wp',
    category: 'WP จากหน่วยงานอื่น',
    sectionKey: 'wp-ext',
    code: 'WP-EXT-01',
    title: 'แนวทางปฏิบัติ กรณีระบบสารสนเทศล่ม ห้องจ่ายยา OPD',
    department: 'ห้องจ่ายยาผู้ป่วยนอก ร่วมกับศูนย์เทคโนโลยีสารสนเทศ',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_EXT_1',
  },
  {
    id: 'wp-ext-2',
    type: 'wp',
    category: 'WP จากหน่วยงานอื่น',
    sectionKey: 'wp-ext',
    code: 'WP-EXT-02',
    title: 'แนวทางปฏิบัติระบบสารสนเทศล่ม ห้องจ่ายยา IPD',
    department: 'ห้องจ่ายยาผู้ป่วยใน ร่วมกับศูนย์เทคโนโลยีสารสนเทศ',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_EXT_2',
  },

  // ==========================================
  // 3. WP ฉบับปัจจุบัน (1 รายการ เชื่อมต่อ Google Drive)
  // ==========================================
  {
    id: 'wp-curr-1',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'ระเบียบปฏิบัติยาด่วน รพ.วชิระ',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_1',
  },

    {
    id: 'wp-curr-2',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'สารทึบรังสี - ประวัติแพ้ยา',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_2',
  },
      {
    id: 'wp-curr-3',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'เอกสารระดับระเบียบปฏิบัติ WP',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_3',
  },
        {
    id: 'wp-curr-4',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'แนวทางการบริหารสารทึบรังสี',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_4',
  },
        {
    id: 'wp-curr-5',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'แนวทางการจัดการยาขาดคลัง',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_5',
  },
        {
    id: 'wp-curr-6',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'แนวทาง rechallenge 2567',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_6',
  },
        {
    id: 'wp-curr-7',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'แนวทางการติดตามและการเผ้าระวังอาการไม่พึงประสงค์',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_7',
  },
        {
    id: 'wp-curr-8',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'การใช้ยาทางสายอาหารแก่ผู้ป่วยใส่สายอาหารทางจมูก 2561',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_8',
  },
        {
    id: 'wp-curr-9',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'การจัดการเคมีบำบัด',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_9',
  },
        {
    id: 'wp-curr-10',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'ยา HAD 2657',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_10',
  },
        {
    id: 'wp-curr-11',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'แนวทางการจัดการยาถอนทะเบียน-ยาไม่ผ่านเกณท์มาตรฐาน 2563',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_11',
  },
        {
    id: 'wp-curr-12',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'แนวทางการจัดการ Drug interaction 2560',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_12',
  },
        {
    id: 'wp-curr-13',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'medication reconciliation 2566',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_13',
  },
        {
    id: 'wp-curr-14',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'แนวทางการจัดการยา Heparin 2567',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_14',
  },
        {
    id: 'wp-curr-15',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'แบบบันทึกอุณภูมิเย็น update 310865',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_15',
  },
        {
    id: 'wp-curr-16',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'จัดเรียงยาในตู้เย็น',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_16',
  },
        {
    id: 'wp-curr-17',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'แนวทางการจัดการยาควบคุมอุณหภูมิ 2-8°C',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_17',
  },
        {
    id: 'wp-curr-18',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'แนวทางปฏิบัติยาต้านพิษ 2563',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_18',
  },
        {
    id: 'wp-curr-19',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'แนวทางเบิกจ่ายยาเสพติดให้โทษในประเภทที่ 2',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_19',
  },
        {
    id: 'wp-curr-20',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'extravasation Kit',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_20',
  },
        {
    id: 'wp-curr-21',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'การให้ยาทางสายอาหารแก่ผู้ป่วยใส่สายอาหารทางจมูก',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_21',
  },
        {
    id: 'wp-curr-22',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'แนวทางการจัดยาความเสี่ยงสูง warfarin',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_22',
  },
        {
    id: 'wp-curr-23',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'แนวทางจัดการ extravasation',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_23',
  },
        {
    id: 'wp-curr-24',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'แผนอัคคีภัย211266.doc',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_24',
  },
        {
    id: 'wp-curr-25',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'แผนอัคคีภัย211266.pdf',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_25',
  },
        {
    id: 'wp-curr-26',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'แผนอัคคีภัยหมู่211266.doc',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_26',
  },
        {
    id: 'wp-curr-27',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'แผนอัคคีภัยหมู่.pdf',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_27',
  },
        {
    id: 'wp-curr-28',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'รายการยาภาวะภัยพิบัติ.xlsx',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_28',
  },
        {
    id: 'wp-curr-29',
    type: 'wp',
    category: 'WP ฉบับปัจจุบัน',
    sectionKey: 'wp-curr',
    code: 'WP-01',
    title: 'อัพเดทระเบียบปฏิบัติยาด่วน',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: 'ฉบับปัจจุบัน',
    driveCode: 'WP_CURR_29',
  },
  // ==========================================
  // 4. WP ฉบับเดิม (14 รายการ เชื่อมต่อ Google Drive)
  // ==========================================
  {
    id: 'wp-old-1',
    type: 'wp',
    category: 'WP ฉบับเดิม',
    sectionKey: 'wp-old',
    code: 'WP-OLD-01',
    title: 'แนวทางเบิกจ่ายยาเสพติดให้โทษในประเภทที่ 2,5 ฉบับแก้ไข',
    department: 'งานคลังและบริหารเวชภัณฑ์',
    effectiveDate: 'ฉบับแก้ไข',
    driveCode: 'WP_OLD_1',
  },
  {
    id: 'wp-old-2',
    type: 'wp',
    category: 'WP ฉบับเดิม',
    sectionKey: 'wp-old',
    code: 'WP-OLD-02',
    title: 'แนวทางจัดการยาความเสี่ยงสูง Warfarin',
    department: 'คลินิกวาร์ฟารินและบริบาลเภสัชกรรม',
    effectiveDate: 'ฉบับเดิม',
    driveCode: 'WP_OLD_2',
  },
  {
    id: 'wp-old-3',
    type: 'wp',
    category: 'WP ฉบับเดิม',
    sectionKey: 'wp-old',
    code: 'WP-OLD-03',
    title: 'แนวทางการจัดการยาควบคุมอุณหภูมิ 2-8°C',
    department: 'งานบริหารเวชภัณฑ์และคลังยา',
    effectiveDate: 'ฉบับเดิม',
    driveCode: 'WP_OLD_3',
  },
  {
    id: 'wp-old-4',
    type: 'wp',
    category: 'WP ฉบับเดิม',
    sectionKey: 'wp-old',
    code: 'WP-OLD-04',
    title: 'แนวทางการจัดการยา Heparin',
    department: 'งานบริการเภสัชกรรมผู้ป่วยใน',
    effectiveDate: 'ฉบับเดิม',
    driveCode: 'WP_OLD_4',
  },
  {
    id: 'wp-old-5',
    type: 'wp',
    category: 'WP ฉบับเดิม',
    sectionKey: 'wp-old',
    code: 'WP-OLD-05',
    title: 'Medication Reconciliation (การประสานรายการยา)',
    department: 'งานบริบาลเภสัชกรรมผู้ป่วยในและนอก',
    effectiveDate: 'ฉบับเดิม',
    driveCode: 'WP_OLD_5',
  },
  {
    id: 'wp-old-6',
    type: 'wp',
    category: 'WP ฉบับเดิม',
    sectionKey: 'wp-old',
    code: 'WP-OLD-06',
    title: 'แนวทางการจัดการยาถอนทะเบียน 1',
    department: 'คณะกรรมการ PTC และงานบริหารเวชภัณฑ์',
    effectiveDate: 'ฉบับเดิม',
    driveCode: 'WP_OLD_6',
  },
  {
    id: 'wp-old-7',
    type: 'wp',
    category: 'WP ฉบับเดิม',
    sectionKey: 'wp-old',
    code: 'WP-OLD-07',
    title: 'แนวทางการใช้ยาเสี่ยงสูง High alert drugs (HAD)',
    department: 'คณะกรรมการความปลอดภัยทางยา PTC',
    effectiveDate: 'ฉบับเดิม',
    driveCode: 'WP_OLD_7',
  },
  {
    id: 'wp-old-8',
    type: 'wp',
    category: 'WP ฉบับเดิม',
    sectionKey: 'wp-old',
    code: 'WP-OLD-08',
    title: 'แนวทางการติดตามและเผ้าระวังอาการไม่พึงประสงค์จากการใช้ยา',
    department: 'ศูนย์ข้อมูลยาและบริบาลเภสัชกรรม (DIC)',
    effectiveDate: 'ฉบับเดิม',
    driveCode: 'WP_OLD_8',
  },
  {
    id: 'wp-old-9',
    type: 'wp',
    category: 'WP ฉบับเดิม',
    sectionKey: 'wp-old',
    code: 'WP-OLD-09',
    title: 'แนวทางปฏิบัติงาน MR 08102561',
    department: 'งานบริการเภสัชกรรม',
    effectiveDate: '2561',
    driveCode: 'WP_OLD_9',
  },
  {
    id: 'wp-old-10',
    type: 'wp',
    category: 'WP ฉบับเดิม',
    sectionKey: 'wp-old',
    code: 'WP-OLD-10',
    title: 'แนวทางการจัดการ Extravasation 2560 (ยารั่วออกนอกเส้นเลือด)',
    department: 'งานบริการเภสัชกรรมผู้ป่วยในและหน่วยเคมีบำบัด',
    effectiveDate: '2560',
    driveCode: 'WP_OLD_10',
  },
  {
    id: 'wp-old-11',
    type: 'wp',
    category: 'WP ฉบับเดิม',
    sectionKey: 'wp-old',
    code: 'WP-OLD-11',
    title: 'แนวทางการจัดยาเสี่ยงสูง Warfarin 2565',
    department: 'งานบริการจ่ายยาผู้ป่วยนอกและใน',
    effectiveDate: '2565',
    driveCode: 'WP_OLD_11',
  },
  {
    id: 'wp-old-12',
    type: 'wp',
    category: 'WP ฉบับเดิม',
    sectionKey: 'wp-old',
    code: 'WP-OLD-12',
    title: 'การจัดการยาเคมีบำบัด 2561',
    department: 'หน่วยเตรียมยาเคมีบำบัด',
    effectiveDate: '2561',
    driveCode: 'WP_OLD_12',
  },
  {
    id: 'wp-old-13',
    type: 'wp',
    category: 'WP ฉบับเดิม',
    sectionKey: 'wp-old',
    code: 'WP-OLD-13',
    title: 'การให้ยาทางสายอาหารแก่ผู้ป่วยใส่สายอาหารทางจมูก 2561 (NG Tube)',
    department: 'งานบริการบริบาลเภสัชกรรม',
    effectiveDate: '2561',
    driveCode: 'WP_OLD_13',
  },
  {
    id: 'wp-old-14',
    type: 'wp',
    category: 'WP ฉบับเดิม',
    sectionKey: 'wp-old',
    code: 'WP-OLD-14',
    title: 'แนวทางการติดตามและเผ้าระวังอาการไม่พึงประสงค์จากการใช้ยา 2561',
    department: 'ศูนย์ข้อมูลยา (DIC)',
    effectiveDate: '2561',
    driveCode: 'WP_OLD_14',
  },

  // ==========================================
  // 5. แนวทางบริหารยาและแบบฟอร์ม (8 รายการ เชื่อมต่อ Google Drive)
  // ==========================================
  {
    id: 'guideline-drive-1',
    type: 'guideline',
    category: 'แนวทางบริหารยาและแบบฟอร์ม',
    sectionKey: 'guideline-drive',
    code: 'FORM-01',
    title: 'แนวทางการบริหารสารทึบรังสีและการประเมินความเสี่ยง',
    department: 'กลุ่มงานรังสีวิทยาและเภสัชกรรม',
    effectiveDate: 'ฉบับปรับปรุง',
    driveCode: 'GUIDELINE_DRIVE_1',
  },
  {
    id: 'guideline-drive-2',
    type: 'guideline',
    category: 'แนวทางบริหารยาและแบบฟอร์ม',
    sectionKey: 'guideline-drive',
    code: 'FORM-02',
    title: 'แนวทางการบริหารสารทึบรังสีและ Risk Checklist',
    department: 'กลุ่มงานรังสีวิทยาและเภสัชกรรม',
    effectiveDate: 'ฉบับปรับปรุง',
    driveCode: 'GUIDELINE_DRIVE_2',
  },
  {
    id: 'guideline-drive-3',
    type: 'guideline',
    category: 'แนวทางบริหารยาและแบบฟอร์ม',
    sectionKey: 'guideline-drive',
    code: 'FORM-03',
    title: 'แนวทางการเก็บยาควบคุม',
    department: 'งานคลังยาและหอผู้ป่วย',
    effectiveDate: 'ฉบับปรับปรุง',
    driveCode: 'GUIDELINE_DRIVE_3',
  },
  {
    id: 'guideline-drive-4',
    type: 'guideline',
    category: 'แนวทางบริหารยาและแบบฟอร์ม',
    sectionKey: 'guideline-drive',
    code: 'FORM-04',
    title: 'แนวทางประเมินความเสี่ยง',
    department: 'งานประกันคุณภาพและบริหารความเสี่ยง',
    effectiveDate: 'ฉบับปรับปรุง',
    driveCode: 'GUIDELINE_DRIVE_4',
  },
  {
    id: 'guideline-drive-5',
    type: 'guideline',
    category: 'แนวทางบริหารยาและแบบฟอร์ม',
    sectionKey: 'guideline-drive',
    code: 'FORM-05',
    title: 'แนวทางการจัดการ Drug Interaction (อันตรกิริยาระหว่างยา)',
    department: 'ศูนย์ข้อมูลยา (DIC)',
    effectiveDate: 'ฉบับปรับปรุง',
    driveCode: 'GUIDELINE_DRIVE_5',
  },
  {
    id: 'guideline-drive-6',
    type: 'guideline',
    category: 'แนวทางบริหารยาและแบบฟอร์ม',
    sectionKey: 'guideline-drive',
    code: 'FORM-06',
    title: 'แนวทางการจัดการยาขาดคลัง',
    department: 'งานจัดซื้อและคลังยา',
    effectiveDate: 'ฉบับปรับปรุง',
    driveCode: 'GUIDELINE_DRIVE_6',
  },
  {
    id: 'guideline-drive-7',
    type: 'guideline',
    category: 'แนวทางบริหารยาและแบบฟอร์ม',
    sectionKey: 'guideline-drive',
    code: 'FORM-07',
    title: 'แบบฟอร์มมาตรฐาน WI และ WP',
    department: 'งานพัฒนาคุณภาพเภสัชกรรม',
    effectiveDate: 'ฉบับปรับปรุง',
    driveCode: 'GUIDELINE_DRIVE_7',
  },
  {
    id: 'guideline-drive-8',
    type: 'guideline',
    category: 'แนวทางบริหารยาและแบบฟอร์ม',
    sectionKey: 'guideline-drive',
    code: 'FORM-08',
    title: 'เอกสารรวมเล่มระดับระเบียบปฏิบัติ WP',
    department: 'กลุ่มงานเภสัชกรรม โรงพยาบาลวชิระภูเก็ต',
    effectiveDate: 'ฉบับรวมเล่ม',
    driveCode: 'GUIDELINE_DRIVE_8',
  },
];

interface SectionFilter {
  key: GuidelineSectionKey;
  label: string;
  count: number;
  activeClass: string;
  inactiveClass: string;
}

export const GuidelinesView: React.FC<{
  lang?: Language;
  initialFilter?: string | null;
}> = ({ initialFilter }) => {
  const [activeTab, setActiveTab] = useState<GuidelineSectionKey>(
    (initialFilter as GuidelineSectionKey) || 'all'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItemId, setSelectedItemId] = useState<string>('wi-curr-1');
  const [showFlowchart, setShowFlowchart] = useState(false);

  // Handle image upload & preview for Flowchart
  const [imageUrl, setImageUrl] = useState<string>(() => {
    return (
      localStorage.getItem('guidelines_custom_image') ||
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80'
    );
  });
  const [showImageEditor, setShowImageEditor] = useState(false);
  const [inputUrl, setInputUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const detailPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialFilter && initialFilter !== 'all') {
      setActiveTab(initialFilter as GuidelineSectionKey);
      const firstItem = GUIDELINES_DATABASE.find(
        (item: GuidelineItem) => item.sectionKey === initialFilter
      );
      if (firstItem) {
        setSelectedItemId(firstItem.id);
      }
    } else {
      setActiveTab('all');
    }
  }, [initialFilter]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImageUrl(result);
        localStorage.setItem('guidelines_custom_image', result);
        setShowImageEditor(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSetUrl = () => {
    if (inputUrl.trim()) {
      setImageUrl(inputUrl.trim());
      localStorage.setItem('guidelines_custom_image', inputUrl.trim());
      setInputUrl('');
      setShowImageEditor(false);
    }
  };

  const handleResetImage = () => {
    const defaultImg =
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80';
    setImageUrl(defaultImg);
    localStorage.removeItem('guidelines_custom_image');
    setShowImageEditor(false);
  };

  // Filter items based on activeTab and searchQuery
  const filteredItems = useMemo<GuidelineItem[]>(() => {
    return GUIDELINES_DATABASE.filter((item: GuidelineItem) => {
      // Tab filter
      if (activeTab !== 'all' && item.sectionKey !== activeTab) {
        return false;
      }
      // Search filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchCode = item.code.toLowerCase().includes(q);
      const matchDept = item.department ? item.department.toLowerCase().includes(q) : false;
      const matchDesc = item.description ? item.description.toLowerCase().includes(q) : false;
      const matchDrive = item.driveCode ? item.driveCode.toLowerCase().includes(q) : false;
      const matchPoints = item.keyPoints ? item.keyPoints.some((p: string) => p.toLowerCase().includes(q)) : false;
      return matchTitle || matchCode || matchDept || matchDesc || matchDrive || matchPoints;
    });
  }, [activeTab, searchQuery]);

  // Keep selected item valid
  const selectedItem = useMemo<GuidelineItem>(() => {
    const found = filteredItems.find((item: GuidelineItem) => item.id === selectedItemId);
    return found || filteredItems[0] || GUIDELINES_DATABASE[0];
  }, [filteredItems, selectedItemId]);

  const handleSelectItem = (item: GuidelineItem) => {
    setSelectedItemId(item.id);
    if (window.innerWidth < 1024 && detailPanelRef.current) {
      detailPanelRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  // Helper count for tabs
  const getCountFor = (key: GuidelineSectionKey): number => {
    if (key === 'all') return GUIDELINES_DATABASE.length;
    return GUIDELINES_DATABASE.filter((i: GuidelineItem) => i.sectionKey === key).length;
  };

  const filterTabs: SectionFilter[] = [
    {
      key: 'all',
      label: `ทั้งหมด (${getCountFor('all')} รายการ)`,
      count: getCountFor('all'),
      activeClass: 'bg-slate-900 text-white font-bold shadow-xs',
      inactiveClass: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
    },
    {
      key: 'wi-curr',
      label: `WI ฉบับปัจจุบัน (${getCountFor('wi-curr')})`,
      count: getCountFor('wi-curr'),
      activeClass: 'bg-blue-700 text-white font-bold shadow-xs',
      inactiveClass: 'bg-blue-50 text-blue-800 hover:bg-blue-100',
    },
    {
      key: 'wp-ext',
      label: `WP จากหน่วยงานอื่น (${getCountFor('wp-ext')})`,
      count: getCountFor('wp-ext'),
      activeClass: 'bg-purple-700 text-white font-bold shadow-xs',
      inactiveClass: 'bg-purple-50 text-purple-800 hover:bg-purple-100',
    },
    {
      key: 'wp-curr',
      label: `WP ฉบับปัจจุบัน (${getCountFor('wp-curr')})`,
      count: getCountFor('wp-curr'),
      activeClass: 'bg-emerald-700 text-white font-bold shadow-xs',
      inactiveClass: 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100',
    },
    {
      key: 'wp-old',
      label: `WP ฉบับเดิม (${getCountFor('wp-old')})`,
      count: getCountFor('wp-old'),
      activeClass: 'bg-amber-700 text-white font-bold shadow-xs',
      inactiveClass: 'bg-amber-50 text-amber-800 hover:bg-amber-100',
    },
    {
      key: 'guideline-drive',
      label: `แนวทางบริหารยา & แบบฟอร์ม (${getCountFor('guideline-drive')})`,
      count: getCountFor('guideline-drive'),
      activeClass: 'bg-indigo-700 text-white font-bold shadow-xs',
      inactiveClass: 'bg-indigo-50 text-indigo-800 hover:bg-indigo-100',
    },
    {
      key: 'sop',
      label: `ระเบียบปฏิบัติ (${getCountFor('sop')} SOP)`,
      count: getCountFor('sop'),
      activeClass: 'bg-slate-800 text-white font-bold shadow-xs',
      inactiveClass: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
    },
    {
      key: 'cpg',
      label: `แนวทางเวชปฏิบัติ (${getCountFor('cpg')} CPG)`,
      count: getCountFor('cpg'),
      activeClass: 'bg-teal-700 text-white font-bold shadow-xs',
      inactiveClass: 'bg-teal-50 text-teal-800 hover:bg-teal-100',
    },
  ];

  const getCodeBadgeClass = (item: GuidelineItem) => {
    switch (item.sectionKey) {
      case 'wi-curr':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'wp-ext':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'wp-curr':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'wp-old':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'guideline-drive':
        return 'bg-indigo-100 text-indigo-700 border-indigo-200';
      case 'sop':
        return 'bg-slate-100 text-slate-700 border-slate-300';
      case 'cpg':
        return 'bg-teal-100 text-teal-700 border-teal-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-2 sm:py-4">
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200/80 p-5 sm:p-8 md:p-10 text-slate-800 font-['Sarabun',sans-serif]">
        
        {/* ============================================================= */}
        {/* Header */}
        {/* ============================================================= */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-amber-700 bg-amber-50/90 border border-amber-300 mb-3 shadow-2xs">
            <FileText className="w-3.5 h-3.5 text-amber-600" />
            <span>SOP, WP, WI & CLINICAL PRACTICE GUIDELINES</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            ระเบียบและแนวทางปฏิบัติงาน & แนวทางเวชปฏิบัติ
          </h1>
          
          <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
            รวมวิธีปฏิบัติงาน (WI), ระเบียบปฏิบัติ (WP), แนวทางการบริหารยาและแบบฟอร์ม  , ระเบียบปฏิบัติงาน  และแนวทางเวชปฏิบัติ  โรงพยาบาลวชิระภูเก็ต
          </p>

          {/* Search Box */}
          <div className="relative mt-5">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ค้นหาระเบียบปฏิบัติงาน เช่น แนวทางการให้ข้อมูลประวัติแพ้ยา 2560 ..."
              className="w-full pl-11 pr-10 py-3 bg-white border border-slate-200/90 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-slate-800 placeholder:text-slate-400 shadow-2xs transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                aria-label="ล้างคำค้นหา"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* ============================================================= */}
        {/* Category Filter Chips & Toggle Flowchart */}
        {/* ============================================================= */}
        <div className="mb-6 space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-semibold flex-wrap">
              {filterTabs.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.key);
                      if (tab.key !== 'all') {
                        const first = GUIDELINES_DATABASE.find((i: GuidelineItem) => i.sectionKey === tab.key);
                        if (first) setSelectedItemId(first.id);
                      }
                    }}
                    className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                      isActive ? tab.activeClass : tab.inactiveClass
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {showFlowchart && (
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 animate-in fade-in duration-200">
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                <span className="text-xs sm:text-sm font-bold text-slate-700 flex items-center gap-1.5">
                  <ImageIcon className="w-4 h-4 text-emerald-600" />
                  <span>ภาพประกอบ / ผังแนวทางปฏิบัติงาน (Flowchart)</span>
                </span>
                <button
                  type="button"
                  onClick={() => setShowImageEditor(!showImageEditor)}
                  className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Upload className="w-3 h-3 text-emerald-600" />
                  <span>{showImageEditor ? 'ปิดกล่องแก้ไข' : 'ใส่รูป / เปลี่ยนรูปภาพ'}</span>
                </button>
              </div>

              {showImageEditor && (
                <div className="mb-3 p-3 bg-white rounded-xl border border-emerald-200 space-y-2 text-xs">
                  <p className="font-semibold text-slate-700">เลือกวิธีใส่รูปภาพ:</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3 py-1.5 bg-emerald-700 text-white rounded-lg font-semibold hover:bg-emerald-800 flex items-center gap-1 justify-center cursor-pointer"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>อัปโหลดรูปจากเครื่อง</span>
                    </button>
                    <div className="flex-1 flex gap-1">
                      <input
                        type="url"
                        placeholder="หรือวางลิงก์รูปภาพ (https://...)"
                        value={inputUrl}
                        onChange={(e) => setInputUrl(e.target.value)}
                        className="flex-1 px-2.5 py-1 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-600"
                      />
                      <button
                        type="button"
                        onClick={handleSetUrl}
                        className="px-3 py-1 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-900 cursor-pointer"
                      >
                        ใช้ลิงก์นี้
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={handleResetImage}
                      className="px-2 py-1 text-slate-500 hover:text-rose-600 flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>รีเซ็ต</span>
                    </button>
                  </div>
                </div>
              )}

              <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
                <img
                  src={imageUrl}
                  alt="แนวทางปฏิบัติงาน โรงพยาบาลวชิระภูเก็ต"
                  className="w-full max-h-[380px] object-cover sm:object-contain bg-slate-900/5 mx-auto"
                />
              </div>
            </div>
          )}
        </div>

        {/* ============================================================= */}
        {/* Master - Detail Split Layout */}
        {/* ============================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* Left List Column */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-2.5 max-h-[720px] overflow-y-auto pr-1 sm:pr-2 custom-scrollbar">
            {filteredItems.map((item: GuidelineItem) => {
              const isSelected = selectedItem?.id === item.id;
              const hasDrive = Boolean(item.driveCode);

              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectItem(item)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl transition-all cursor-pointer relative group ${
                    isSelected
                      ? 'bg-emerald-50/25 border-2 border-emerald-600 shadow-sm'
                      : 'bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-2xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span
                        className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded-md border ${getCodeBadgeClass(
                          item
                        )}`}
                      >
                        {item.code}
                      </span>

                      <span className="text-xs text-slate-600 font-medium">
                        {item.category}
                      </span>

                      {hasDrive && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50/90 border border-emerald-200/90 px-2 py-0.5 rounded-full">
                          <HardDrive className="w-3 h-3 text-emerald-600" />
                          <span>Drive</span>
                        </span>
                      )}
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected
                          ? 'text-emerald-600'
                          : 'text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5'
                      }`}
                    />
                  </div>

                  <h3
                    className={`font-bold text-[14px] sm:text-[15px] mt-2 mb-1 leading-snug ${
                      isSelected ? 'text-emerald-950' : 'text-slate-900'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-500 font-medium">
                    {item.department || item.category}
                  </p>
                </div>
              );
            })}

            {filteredItems.length === 0 && (
              <div className="py-12 text-center text-slate-500 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <Search className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="font-semibold text-sm">ไม่พบเอกสารที่ค้นหา</p>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="mt-2 text-xs text-emerald-700 underline font-bold cursor-pointer"
                >
                  ล้างคำค้นหา
                </button>
              </div>
            )}
          </div>

          {/* Right Detail Column */}
          <div
            ref={detailPanelRef}
            className="lg:col-span-7 xl:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-7 shadow-xs space-y-5 lg:sticky lg:top-4"
          >
            {selectedItem ? (
              <>
                {/* Detail Header */}
                <div className="space-y-2 pb-4 border-b border-slate-100">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md border ${getCodeBadgeClass(
                        selectedItem
                      )}`}
                    >
                      {selectedItem.code}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      {selectedItem.category}
                    </span>
                    {selectedItem.effectiveDate && (
                      <span className="text-xs text-slate-500 flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        <span>{selectedItem.effectiveDate}</span>
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                    {selectedItem.title}
                  </h2>

                  {selectedItem.department && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <Building2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>{selectedItem.department}</span>
                    </div>
                  )}
                </div>

                {/* Google Drive Banner */}
                {selectedItem.driveCode ? (
                  <div className="rounded-2xl border border-emerald-200 bg-[#ebfaf4]/80 p-4 sm:p-4.5 flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap shadow-2xs">
                    <div className="flex items-center gap-2.5 text-emerald-950 font-bold text-sm sm:text-base">
                      <HardDrive className="w-5 h-5 text-emerald-700 shrink-0" />
                      <span>เชื่อมต่อกับโฟลเดอร์ Google Drive</span>
                    </div>
                    <a
                      href={getDriveLinkForCode(selectedItem.driveCode)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#009966] hover:bg-[#008055] text-white font-bold text-xs sm:text-sm px-4.5 py-2.5 rounded-xl shadow-xs inline-flex items-center gap-2 transition-colors shrink-0 cursor-pointer"
                      title={`เปิดโฟลเดอร์ ${selectedItem.code} ใน Google Drive`}
                    >
                      <HardDrive className="w-4 h-4" />
                      <span>เปิด Google Drive</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-3.5 flex items-center gap-2.5 text-xs text-slate-600">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>เอกสารมาตรฐานการปฏิบัติงานภายในโรงพยาบาลวชิระภูเก็ต (ควบคุมโดยคณะกรรมการ PTC)</span>
                  </div>
                )}

                {/* Footer Note inside detail pane */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>รหัสเอกสาร: {selectedItem.code}</span>
                  <span>กลุ่มงานเภสัชกรรม โรงพยาบาลวชิระภูเก็ต</span>
                </div>
              </>
            ) : (
              <div className="py-16 text-center text-slate-400">
                <FileText className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <p className="text-sm">เลือกเอกสารทางซ้ายเพื่อดูรายละเอียด</p>
              </div>
            )}
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>ควบคุมเอกสารโดย กลุ่มงานเภสัชกรรม  โรงพยาบาลวชิระภูเก็ต</span>
          <span>ปรับปรุงล่าสุด: 15/10/2569</span>
        </div>

      </div>
    </div>
  );
};

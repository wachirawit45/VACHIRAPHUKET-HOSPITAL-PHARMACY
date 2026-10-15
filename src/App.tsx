/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SidebarDrawer } from './components/SidebarDrawer';
import { DrugSearchModal } from './components/DrugSearchModal';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { DrugInformationView } from './views/DrugInformationView';
import { DueEvaluationView } from './views/DueEvaluationView';
import { ConsultationView } from './views/ConsultationView';
import { AboutView } from './views/AboutView';
import { StructureView } from './views/StructureView';
import { GuidelinesView } from './views/GuidelinesView';
import { NewsView } from './views/NewsView';
import { AcademicView } from './views/AcademicView';
import { ActivitiesView } from './views/ActivitiesView';
import { PageId, Language } from './types/pharmacy';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [activeSubTopic, setActiveSubTopic] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [lang, setLang] = useState<Language>('th');

  // Scroll to top on page switch
  const handleNavigate = (page: PageId, subTopicId?: string) => {
    setCurrentPage(page);
    setActiveSubTopic(subTopicId || null);
    setIsConsultationOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'th' ? 'en' : 'th'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/70 text-slate-800 relative selection:bg-emerald-100 selection:text-emerald-900">
      {/* Ambient soft background lighting to ensure the entire page feels luminous, clean, and spacious */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute top-1/4 -right-32 w-[32rem] h-[32rem] rounded-full bg-teal-200/25 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-[36rem] h-[36rem] rounded-full bg-sky-100/40 blur-3xl" />
      </div>

      {/* 1. Header (matches Image 1 header) */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenMenu={() => setIsSidebarOpen(true)}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        lang={lang}
        onToggleLang={handleToggleLang}
      />

      {/* 2. Slide-out Navigation Drawer (matches Image 2 drawer with expandable subitems) */}
      <SidebarDrawer
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        currentPage={currentPage}
        activeSubTopic={activeSubTopic}
        onSelectPage={handleNavigate}
        lang={lang}
      />

      {/* 3. Global Drug Search Dialog */}
      <DrugSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        lang={lang}
      />

      {/* 4. Main Body Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {isConsultationOpen ? (
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => setIsConsultationOpen(false)}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 mb-2"
            >
              ← กลับสู่หน้าหลัก
            </button>
            <ConsultationView lang={lang} />
          </div>
        ) : (
          <>
            {currentPage === 'home' && (
              <HomeView
                onNavigate={handleNavigate}
                onOpenSearch={() => setIsSearchModalOpen(true)}
                onOpenConsultation={handleOpenConsultation}
                lang={lang}
              />
            )}
            {currentPage === 'about' && (
              <AboutView lang={lang} initialSection={activeSubTopic} />
            )}
            {currentPage === 'structure' && (
              <StructureView lang={lang} initialUnitId={activeSubTopic} />
            )}
            {currentPage === 'drug-info' && (
              <DrugInformationView lang={lang} initialTopicId={activeSubTopic} />
            )}
            {currentPage === 'due' && <DueEvaluationView lang={lang} />}
            {currentPage === 'guidelines' && (
              <GuidelinesView lang={lang} initialFilter={activeSubTopic} />
            )}
            {currentPage === 'news' && <NewsView lang={lang} />}
            {currentPage === 'academic' && <AcademicView lang={lang} />}
            {currentPage === 'activities' && <ActivitiesView lang={lang} />}
          </>
        )}
      </main>

      {/* 5. Footer */}
      <Footer onNavigate={handleNavigate} lang={lang} />
    </div>
  );
}

import React from 'react'
import { HeroSection, Section, Container } from '../components/Common'
import { FileText, Check, Download } from 'lucide-react'
import { Link } from 'react-router-dom'

const BoardEstablishmentDecision = () => {
  const lang = localStorage.getItem('language') || 'en'

  const t = {
    en: {
      title: 'Board Establishment Decision',
      subtitle: 'The official document for the decision to form the Board of Directors of Mathwaa Charitable Association',
      doc_available: 'The document is available for download',
      download_btn: 'Download Decision',
      home: 'Home',
      about: 'About Us',
    },
    ar: {
      title: 'قرار تشكيل مجلس الإدارة',
      subtitle: 'الوثيقة الرسمية لقرار تشكيل مجلس إدارة جمعية مثوى الأهلية',
      doc_available: 'الوثيقة متاحة للتحميل',
      download_btn: 'تحميل القرار',
      home: 'الرئيسية',
      about: 'عن الجمعية',
    },
  }[lang]

  return (
    <>
      <HeroSection title={t.title} subtitle={t.subtitle} />
      <div className="bg-gray-100 py-2">
        <Container>
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-[#0E4B33]">{t.home}</Link>
            <span className="mx-2">/</span>
            <Link to="/about" className="hover:text-[#0E4B33]">{t.about}</Link>
            <span className="mx-2">/</span>
            <span className="text-[#0E4B33] font-medium">{t.title}</span>
          </nav>
        </Container>
      </div>
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 text-center">
            <FileText size={64} className="mx-auto mb-6" style={{ color: '#0E4B33' }} />
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#0E4B33' }}>{t.title}</h2>
            <p className="text-gray-600 mb-6">{t.subtitle}</p>
            <div className="flex items-center justify-center gap-2 text-gray-700 mb-8">
              <Check size={22} style={{ color: '#0E4B33' }} />
              <span>{t.doc_available}</span>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#0E4B33' }}
            >
              <Download size={22} />
              {t.download_btn}
            </a>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default BoardEstablishmentDecision

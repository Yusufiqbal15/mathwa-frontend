import React from 'react'
import { HeroSection, Section, Container } from '../components/Common'
import { Award, Check, Download } from 'lucide-react'
import { Link } from 'react-router-dom'

const OrganizationCertificate = () => {
  const lang = localStorage.getItem('language') || 'en'

  const t = {
    en: {
      title: 'Organization Certificate',
      subtitle: 'Association Registration Certificate',
      doc_title: 'Registration Certificate',
      doc_subtitle: 'Official registration certificate of Mathwaa Charitable Association',
      doc_available: 'The certificate is available for download',
      download_btn: 'Download Certificate',
      home: 'Home',
      about: 'About Us',
    },
    ar: {
      title: 'شهادة تسجيل الجمعية',
      subtitle: 'شهادة تسجيل الجمعية',
      doc_title: 'شهادة التسجيل',
      doc_subtitle: 'الشهادة الرسمية لتسجيل جمعية مثوى الأهلية',
      doc_available: 'الشهادة متاحة للتحميل',
      download_btn: 'تحميل الشهادة',
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
            <Award size={64} className="mx-auto mb-6" style={{ color: '#0E4B33' }} />
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#0E4B33' }}>{t.doc_title}</h2>
            <p className="text-gray-600 mb-6">{t.doc_subtitle}</p>
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

export default OrganizationCertificate

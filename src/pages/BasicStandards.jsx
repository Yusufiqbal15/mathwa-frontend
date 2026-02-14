import React from 'react'
import { HeroSection, Section, Container, SectionTitle } from '../components/Common'
import { FileText, Building2, Info, Download } from 'lucide-react'
import { Link } from 'react-router-dom'

const BasicStandards = () => {
  const lang = localStorage.getItem('language') || 'en'
  const isAr = lang === 'ar'

  const t = {
    en: {
      title: 'Basic Standards',
      subtitle: 'Basic Standards for Mathwaa Association',
      section_title: 'Basic Standards',
      approved: 'Basic Standards approved by the National Center for Non-Profit Sector Development',
      authorities: 'Official Authorities',
      supervising: 'Supervising Authority: Ministry of Municipal, Rural Affairs and Housing',
      classification: 'Classification: Group Six - Development and Housing',
      license_info: 'License Information',
      license_no: 'License No.: 1000827300',
      license_date: 'License Date: 1447/06/05 AH',
      headquarters: 'Headquarters: Al-Ahsa Governorate',
      governance_note: 'To view the details of the Basic Standards, please visit the Governance and Transparency page.',
      download_btn: 'Download Basic Standards (PDF)',
      home: 'Home',
      about: 'About Us',
      governance: 'Governance',
    },
    ar: {
      title: 'اللائحة الأساسية',
      subtitle: 'اللائحة الأساسية لجمعية مثوى الأهلية',
      section_title: 'اللائحة الأساسية',
      approved: 'اللائحة الأساسية المعتمدة من المركز الوطني لتنمية القطاع غير الربحي',
      authorities: 'الجهات الرسمية',
      supervising: 'الجهة المشرفة: وزارة الشؤون البلدية والقروية والإسكان',
      classification: 'التصنيف: المجموعة السادسة - التنمية والإسكان',
      license_info: 'معلومات الترخيص',
      license_no: 'رقم الترخيص: 1000827300',
      license_date: 'تاريخ الترخيص: 1447/06/05هـ',
      headquarters: 'المقر: محافظة الأحساء',
      governance_note: 'للاطلاع على تفاصيل اللائحة الأساسية، يرجى زيارة صفحة الحوكمة والشفافية',
      download_btn: 'تحميل اللائحة الأساسية (PDF)',
      home: 'الرئيسية',
      about: 'عن الجمعية',
      governance: 'الحوكمة',
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
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-10">
            <div className="flex items-center gap-2 mb-6">
              <FileText size={28} style={{ color: '#0E4B33' }} />
              <h2 className="text-2xl font-bold" style={{ color: '#0E4B33' }}>{t.section_title}</h2>
            </div>
            <p className="text-gray-700 mb-8">{t.approved}</p>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Building2 size={22} style={{ color: '#0E4B33' }} />
                <h3 className="text-lg font-bold" style={{ color: '#0E4B33' }}>{t.authorities}</h3>
              </div>
              <p className="text-gray-700">{t.supervising}</p>
              <p className="text-gray-700">{t.classification}</p>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <FileText size={22} style={{ color: '#0E4B33' }} />
                <h3 className="text-lg font-bold" style={{ color: '#0E4B33' }}>{t.license_info}</h3>
              </div>
              <p className="text-gray-700">{t.license_no}</p>
              <p className="text-gray-700">{t.license_date}</p>
              <p className="text-gray-700">{t.headquarters}</p>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg mb-8" style={{ backgroundColor: 'rgba(14,75,51,0.06)' }}>
              <Info size={24} style={{ color: '#0E4B33', flexShrink: 0 }} />
              <p className="text-gray-700 text-sm">
                {t.governance_note}{' '}
                <Link to="/governance" className="font-semibold hover:underline" style={{ color: '#0E4B33' }}>{t.governance}</Link>
              </p>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#0E4B33' }}
            >
              <Download size={20} />
              {t.download_btn}
            </a>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default BasicStandards

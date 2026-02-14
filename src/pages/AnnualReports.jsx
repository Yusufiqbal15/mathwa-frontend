import React from 'react'
import { HeroSection, Container, Card, Grid, Section } from '../components/Common'
import { FileText, Download, Info } from 'lucide-react'
import { Link } from 'react-router-dom'

const AnnualReports = () => {
  const lang = localStorage.getItem('language') || 'en'
  const t = {
    en: {
      title: 'Annual Reports',
      subtitle: 'Performance and annual achievement reports',
      desc: 'Comprehensive reports on the association\'s activities and financial and administrative achievements.',
      coming_soon: 'Annual reports will be published soon.',
      download: 'Download',
      home: 'Home',
      reports: 'Our Reports',
    },
    ar: {
      title: 'التقارير السنوية',
      subtitle: 'تقارير الأداء والإنجازات السنوية',
      desc: 'تقارير شاملة عن أنشطة الجمعية وإنجازاتها المالية والإدارية.',
      coming_soon: 'سيتم نشر التقارير السنوية قريباً.',
      download: 'تحميل',
      home: 'الرئيسية',
      reports: 'تقاريرنا',
    },
  }[lang]

  const reports = [
    { year: 2024, titleEn: 'Annual Report 2024', titleAr: 'التقرير السنوي 2024', size: '2.5 MB', date: 'February 2025' },
    { year: 2023, titleEn: 'Annual Report 2023', titleAr: 'التقرير السنوي 2023', size: '2.3 MB', date: 'February 2024' },
  ]

  return (
    <>
      <HeroSection title={t.title} subtitle={t.subtitle} />
      <div className="bg-gray-100 py-2">
        <Container>
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-[#0E4B33]">{t.home}</Link>
            <span className="mx-2">/</span>
            <span className="text-[#0E4B33] font-medium">{t.title}</span>
          </nav>
        </Container>
      </div>
      <Section>
        <Container>
          <h2 className="text-2xl font-bold mb-2" style={{ color: '#0E4B33' }}>{t.title}</h2>
          <p className="text-gray-600 mb-6">{t.desc}</p>
          <div className="flex items-start gap-3 p-4 rounded-lg mb-8" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
            <Info size={22} style={{ color: '#2563eb', flexShrink: 0 }} />
            <p className="text-gray-700">{t.coming_soon}</p>
          </div>
          {reports.length > 0 && (
            <Grid cols={2}>
              {reports.map((report, idx) => (
                <Card key={idx} className="flex items-center justify-between flex-wrap gap-4 border border-gray-200">
                  <div className="flex items-center gap-4">
                    <FileText size={40} style={{ color: '#0E4B33' }} />
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: '#0E4B33' }}>{lang === 'ar' ? report.titleAr : report.titleEn}</h3>
                      <p className="text-sm text-gray-600">{report.date} • {report.size}</p>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white" style={{ backgroundColor: '#0E4B33' }}>
                    <Download size={18} />
                    {t.download}
                  </button>
                </Card>
              ))}
            </Grid>
          )}
        </Container>
      </Section>
    </>
  )
}

export default AnnualReports

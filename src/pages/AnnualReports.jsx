import React from 'react'
import { HeroSection, SectionTitle, Container, Card, Grid, Section, Button } from '../components/Common'
import { FileText, Download } from 'lucide-react'

const AnnualReports = () => {
  const [language] = React.useState(() => localStorage.getItem('language') || 'en')
  const t = language === 'en' ? {
    title: 'Annual Reports',
    subtitle: 'Financial transparency and impact reports',
    download: 'Download',
  } : {
    title: 'التقارير السنوية',
    subtitle: 'الشفافية المالية وتقارير التأثير',
    download: 'تحميل',
  }

  const reports = [
    { year: 2024, title: 'Annual Report 2024', size: '2.5 MB', date: 'February 2025' },
    { year: 2023, title: 'Annual Report 2023', size: '2.3 MB', date: 'February 2024' },
    { year: 2022, title: 'Annual Report 2022', size: '2.1 MB', date: 'February 2023' },
    { year: 2021, title: 'Annual Report 2021', size: '1.9 MB', date: 'February 2022' },
  ]

  return (
    <>
      <HeroSection title={t.title} subtitle={t.subtitle} />
      <Section>
        <Container>
          <SectionTitle title={language === 'en' ? 'Our Reports' : 'تقاريرنا'} />
          <Grid cols={2}>
            {reports.map((report, idx) => (
              <Card key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <FileText size={48} className="text-primary" />
                  <div>
                    <h3 className="text-lg font-bold text-primary">{report.title}</h3>
                    <p className="text-sm text-gray-600">{report.date} • {report.size}</p>
                  </div>
                </div>
                <Button className="gap-2">
                  <Download size={20} />
                  {t.download}
                </Button>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  )
}

export default AnnualReports

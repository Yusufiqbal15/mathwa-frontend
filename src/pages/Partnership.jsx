import React from 'react'
import { HeroSection, Container, Card, Grid, Section } from '../components/Common'
import { Building2, ExternalLink, Handshake } from 'lucide-react'
import { Link } from 'react-router-dom'

const Partnership = () => {
  const lang = localStorage.getItem('language') || 'en'
  const t = {
    en: {
      title: 'Partnership',
      subtitle: 'Collaborate with us for greater impact',
      our_partners: 'Our Partners',
      visit_site: 'Visit Site',
      opportunities: 'Partnership Opportunities',
      community: 'Community Partnerships',
      institutional: 'Institutional Partnerships',
      contact_cta: 'Contact Us',
      home: 'Home',
    },
    ar: {
      title: 'الشراكة',
      subtitle: 'تعاون معنا من أجل تأثير أكبر',
      our_partners: 'شركاؤنا',
      visit_site: 'زيارة الموقع',
      opportunities: 'فرص الشراكة',
      community: 'شراكات مجتمعية',
      institutional: 'شراكات مؤسسية',
      contact_cta: 'تواصل معنا',
      home: 'الرئيسية',
    },
  }[lang]

  const partners = [
    { nameEn: 'National Center for Non-Profit Sector', nameAr: 'المركز الوطني للقطاع غير الربحي', descEn: 'Regulatory and support body for non-profits.', descAr: 'جهة تنظيمية وداعمة للقطاع غير الربحي.', url: '#' },
    { nameEn: 'Al-Ahsa Municipality', nameAr: 'أمانة الأحساء', descEn: 'Municipal partnership for community programs.', descAr: 'شراكة بلدية لبرامج مجتمعية.', url: '#' },
    { nameEn: 'Ministry of Municipal and Rural Affairs and Housing', nameAr: 'وزارة الشؤون البلدية والقروية والإسكان', descEn: 'Government partnership.', descAr: 'شراكة حكومية.', url: '#' },
    { nameEn: 'Vision 2030', nameAr: 'رؤية 2030', descEn: 'Strategic alignment with national vision.', descAr: 'الاندماج الاستراتيجي مع الرؤية الوطنية.', url: '#' },
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
          <h2 className="text-2xl font-bold mb-8" style={{ color: '#0E4B33' }}>{t.our_partners}</h2>
          <Grid cols={2}>
            {partners.map((partner, idx) => (
              <Card key={idx} className="border border-gray-200 p-6 flex flex-col">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(14,75,51,0.1)' }}>
                  <Building2 size={32} style={{ color: '#0E4B33' }} />
                </div>
                <h3 className="text-lg font-bold mb-1" style={{ color: '#0E4B33' }}>{lang === 'ar' ? partner.nameAr : partner.nameEn}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{lang === 'ar' ? partner.descAr : partner.descEn}</p>
                <a href={partner.url} className="inline-flex items-center gap-2 text-sm font-semibold hover:underline" style={{ color: '#0E4B33' }}>
                  {t.visit_site}
                  <ExternalLink size={14} />
                </a>
              </Card>
            ))}
          </Grid>
          <div className="mt-16 p-8 rounded-2xl border border-gray-200 bg-gray-50">
            <div className="flex items-center gap-3 mb-6">
              <Handshake size={32} style={{ color: '#0E4B33' }} />
              <h2 className="text-xl font-bold" style={{ color: '#0E4B33' }}>{t.opportunities}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="p-6 border border-gray-200">
                <h4 className="font-bold mb-2" style={{ color: '#0E4B33' }}>{t.community}</h4>
                <p className="text-gray-600 text-sm">Partnerships with local communities and civil society.</p>
              </Card>
              <Card className="p-6 border border-gray-200">
                <h4 className="font-bold mb-2" style={{ color: '#0E4B33' }}>{t.institutional}</h4>
                <p className="text-gray-600 text-sm">Partnerships with institutions and organizations.</p>
              </Card>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: '#0E4B33' }}>
              {t.contact_cta}
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default Partnership

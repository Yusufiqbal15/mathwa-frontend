import React from 'react'
import { HeroSection, SectionTitle, Container, Card, Grid, Section, Button } from '../components/Common'
import { Building2 } from 'lucide-react'

const Partnership = () => {
  const [language] = React.useState(() => localStorage.getItem('language') || 'en')
  const t = language === 'en' ? {
    title: 'Partnership',
    subtitle: 'Collaborate with us for greater impact',
    our_partners: 'Our Partners',
    become_partner: 'Become a Partner',
    benefits: 'Partnership Benefits',
  } : {
    title: 'الشراكات',
    subtitle: 'تعاون معنا من أجل تأثير أكبر',
    our_partners: 'شركاؤنا',
    become_partner: 'كن شريكاً',
    benefits: 'فوائد الشراكة',
  }

  const partners = [
    { name: 'Partner Organization 1', type: 'NGO' },
    { name: 'Partner Organization 2', type: 'Corporate' },
    { name: 'Partner Organization 3', type: 'Government' },
    { name: 'Partner Organization 4', type: 'Educational' },
    { name: 'Partner Organization 5', type: 'Healthcare' },
    { name: 'Partner Organization 6', type: 'Community' },
  ]

  const benefits = [
    'Expanded reach and impact',
    'Shared resources and expertise',
    'Collaborative programs',
    'Mutual growth opportunities',
    'Enhanced visibility',
    'Joint fundraising initiatives',
  ]

  return (
    <>
      <HeroSection title={t.title} subtitle={t.subtitle} />
      <Section>
        <Container>
          <SectionTitle title={t.our_partners} />
          <Grid cols={3}>
            {partners.map((partner, idx) => (
              <Card key={idx} className="text-center">
                <Building2 size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold text-primary mb-1">{partner.name}</h3>
                <p className="text-gray-600 text-sm">{partner.type}</p>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section bg="gray">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <SectionTitle title={t.benefits} />
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  {benefit}
                </li>
              ))}
            </ul>
            <Button size="lg">{t.become_partner}</Button>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default Partnership

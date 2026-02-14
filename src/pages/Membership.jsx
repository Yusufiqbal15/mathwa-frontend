import React from 'react'
import { HeroSection, SectionTitle, Container, Card, Grid, Section, Button } from '../components/Common'
import { Check } from 'lucide-react'

const Membership = () => {
  const [language] = React.useState(() => localStorage.getItem('language') || 'en')
  const t = language === 'en' ? {
    title: 'Membership',
    subtitle: 'Join our community of change makers',
    membership_types: 'Membership Types',
    benefits: 'Benefits',
  } : {
    title: 'العضوية',
    subtitle: 'انضم إلى مجتمعنا من صناع التغيير',
    membership_types: 'أنواع العضوية',
    benefits: 'المزايا',
  }

  const memberships = [
    { name: 'Basic', price: 'Free', benefits: ['Access to events', 'Newsletter', 'Community access'] },
    { name: 'Premium', price: '500 SAR/year', benefits: ['All Basic benefits', 'Priority support', 'Exclusive events'] },
    { name: 'Lifetime', price: '5000 SAR', benefits: ['All Premium benefits', 'Lifetime membership', 'Special recognition'] },
  ]

  return (
    <>
      <HeroSection title={t.title} subtitle={t.subtitle} />
      <Section>
        <Container>
          <SectionTitle title={t.membership_types} />
          <Grid cols={3}>
            {memberships.map((mem, idx) => (
              <Card key={idx}>
                <h3 className="text-2xl font-bold text-primary mb-2">{mem.name}</h3>
                <div className="text-3xl font-bold text-secondary mb-6">{mem.price}</div>
                <div className="space-y-3 mb-6">
                  {mem.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check size={20} className="text-green-500" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full">Join Now</Button>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  )
}

export default Membership

import React from 'react'
import { HeroSection, SectionTitle, Container, Card, Grid, Section } from '../components/Common'

const BoardMembers = () => {
  const [language] = React.useState(() => localStorage.getItem('language') || 'en')
  const t = language === 'en' ? {
    title: 'Board Members',
    subtitle: 'Meet our leadership team',
  } : {
    title: 'أعضاء مجلس الإدارة',
    subtitle: 'تعرف على فريق القيادة',
  }

  const members = [
    { name: 'Ahmad Al-Saud', position: 'Chairman', bio: 'Visionary leader with 20+ years' },
    { name: 'Fatima Al-Rashid', position: 'Vice Chairman', bio: 'Dedicated to community service' },
    { name: 'Mohammed Al-Qahtani', position: 'Treasurer', bio: 'Financial expert' },
    { name: 'Sara Al-Otaibi', position: 'Secretary', bio: 'Administrative specialist' },
    { name: 'Khalid Al-Ruwaili', position: 'Board Member', bio: 'Community advocate' },
    { name: 'Noor Al-Harbi', position: 'Board Member', bio: 'Youth programs coordinator' },
  ]

  return (
    <>
      <HeroSection title={t.title} subtitle={t.subtitle} />
      <Section>
        <Container>
          <SectionTitle title={language === 'en' ? 'Our Leaders' : 'قادتنا'} />
          <Grid cols={3}>
            {members.map((member, idx) => (
              <Card key={idx} className="text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full mb-4"></div>
                <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-secondary font-semibold mb-2">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  )
}

export default BoardMembers

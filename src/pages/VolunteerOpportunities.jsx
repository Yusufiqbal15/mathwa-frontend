import React, { useState } from 'react'
import { HeroSection, SectionTitle, Container, Card, Grid, Section, Button, Badge } from '../components/Common'
import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const VolunteerOpportunities = () => {
  const [language] = React.useState(() => localStorage.getItem('language') || 'en')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const t = language === 'en' ? {
    title: 'Volunteer Opportunities',
    subtitle: 'Find the perfect role to make an impact',
    view_details: 'View Details',
  } : {
    title: 'فرص التطوع',
    subtitle: 'اعثر على الدور المثالي لإحداث تأثير',
    view_details: 'عرض التفاصيل',
  }

  const opportunities = [
    { id: 1, title: 'Community Support', location: 'Riyadh', date: 'Feb 20, 2024', volunteers: 5, category: 'support' },
    { id: 2, title: 'Event Organization', location: 'Jeddah', date: 'Mar 1, 2024', volunteers: 8, category: 'events' },
    { id: 3, title: 'Educational Programs', location: 'Dammam', date: 'Feb 25, 2024', volunteers: 3, category: 'education' },
    { id: 4, title: 'Food Distribution', location: 'Riyadh', date: 'Feb 22, 2024', volunteers: 10, category: 'support' },
  ]

  return (
    <>
      <HeroSection 
        title={t.title}
        subtitle={t.subtitle}
      />

      <Section>
        <Container>
          <Grid cols={3}>
            {opportunities.map(opp => (
              <Card key={opp.id} className="hover:shadow-2xl">
                <Badge variant="primary" className="mb-4">{opp.category}</Badge>
                <h3 className="text-xl font-bold text-primary mb-4">{opp.title}</h3>
                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {opp.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {opp.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    {opp.volunteers} {language === 'en' ? 'volunteers needed' : 'متطوعين مطلوبين'}
                  </div>
                </div>
                <Link to={`/volunteer-apply?opp=${opp.id}`}>
                  <Button className="w-full gap-2">
                    {t.view_details} <ArrowRight size={16} />
                  </Button>
                </Link>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  )
}

export default VolunteerOpportunities

import React from 'react'
import { HeroSection, SectionTitle, Container, Card, Grid, Section } from '../components/Common'
import { User, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const BoardMembers = () => {
  const [language] = React.useState(() => localStorage.getItem('language') || 'en')
  const isAr = language === 'ar'

  const t = {
    en: {
      title: 'Board Members',
      subtitle: 'Learn about the board members of Mathwaa Association',
      section_title: 'Board of Directors',
      section_subtitle: 'Current Term of the Board of Directors',
      chairman: 'Chairman of the Board',
      vice_chairman: 'Vice Chairman of the Board',
      member: 'Board Member',
      home: 'Home',
      about: 'About Us',
    },
    ar: {
      title: 'أعضاء مجلس الإدارة',
      subtitle: 'تعرف على أعضاء مجلس إدارة جمعية مثوى الأهلية',
      section_title: 'مجلس الإدارة',
      section_subtitle: 'الدورة الحالية لمجلس الإدارة',
      chairman: 'رئيس مجلس إدارة',
      vice_chairman: 'نائب رئيس مجلس إدارة',
      member: 'عضو مجلس إدارة',
      home: 'الرئيسية',
      about: 'عن الجمعية',
    },
  }[language]

  const members = [
    { nameEn: 'Hadi bin Nasser bin Hashim Al-Salman', nameAr: 'هادي بن ناصر بن هاشم السلمان', role: 'chairman' },
    { nameEn: 'Abbas bin Hamza bin Nasser Al-Ibrahim', nameAr: 'عباس بن حمزة بن ناصر الإبراهيم', role: 'vice_chairman' },
    { nameEn: 'Abdullah bin Abbas bin Hamza Al-Ibrahim', nameAr: 'عبدالله بن عباس بن حمزة الإبراهيم', role: 'member' },
    { nameEn: 'Shuaa bint Abdullah bin Ahmed Al-Harbi', nameAr: 'شعاع بنت عبدالله بن أحمد الحربي', role: 'member' },
    { nameEn: 'Waleed bin Ali bin Hussein Al-Faiz', nameAr: 'وليد بن علي بن حسين الفائز', role: 'member' },
  ]

  const roleKey = (r) => (r === 'chairman' ? t.chairman : r === 'vice_chairman' ? t.vice_chairman : t.member)

  return (
    <>
      <HeroSection title={t.title} subtitle={t.subtitle} />
      {/* Breadcrumb */}
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
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-1" style={{ color: '#0E4B33' }}>{t.section_title}</h2>
            <p className="text-gray-600">{t.section_subtitle}</p>
            <div className="h-1 w-20 mt-2 rounded-full" style={{ backgroundColor: '#C89B3C' }} />
          </div>
          <Grid cols={3}>
            {members.map((m, idx) => (
              <Card key={idx} className="text-center border border-gray-200 overflow-hidden">
                <div className="w-28 h-28 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(14,75,51,0.08)' }}>
                  <User size={48} style={{ color: '#0E4B33' }} />
                </div>
                <h3 className="text-lg font-bold mb-1" style={{ color: '#0E4B33' }}>{isAr ? m.nameAr : m.nameEn}</h3>
                <p className="text-sm font-semibold flex items-center justify-center gap-1" style={{ color: '#0E4B33' }}>
                  {m.role === 'chairman' && <Star size={14} style={{ color: '#C89B3C' }} />}
                  {roleKey(m.role)}
                </p>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  )
}

export default BoardMembers

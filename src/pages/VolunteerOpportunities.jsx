import React, { useState } from 'react'
import { HeroSection, Container, Card, Grid, Section } from '../components/Common'
import { MapPin, Calendar, Clock, User, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'

const VolunteerOpportunities = () => {
  const lang = localStorage.getItem('language') || 'en'

  const t = {
    en: {
      title: 'Volunteering Opportunities',
      subtitle: 'Discover available volunteering opportunities and contribute to community service',
      apply: 'Apply for the opportunity',
      seats: 'seats available',
      register_volunteer: 'Register as a volunteer',
      register_cta: "Didn't find the suitable opportunity? Register as a volunteer now and we will contact you when opportunities matching your skills and interests become available.",
      home: 'Home',
      volunteering: 'Volunteering',
    },
    ar: {
      title: 'فرص التطوع',
      subtitle: 'اكتشف الفرص المتاحة للتطوع وساهم في خدمة المجتمع',
      apply: 'تقدم للفرصة',
      seats: 'مقعد متاح',
      register_volunteer: 'سجل كمتطوع',
      register_cta: 'لم تجد الفرصة المناسبة؟ سجل كمتطوع الآن وسنتواصل معك عند توفر فرص تناسب مهاراتك واهتماماتك.',
      home: 'الرئيسية',
      volunteering: 'التطوع',
    },
  }[lang]

  const opportunities = [
    { id: 1, titleEn: 'Teaching and Student Assistance', titleAr: 'تدريس ومساعدة الطلاب', descEn: 'Assisting needy students with lessons and school assignments', descAr: 'مساعدة الطلاب المحتاجين في الدروس والواجبات المدرسية', location: 'Qatif', locationAr: 'القطيف', hours: '2 hours weekly', hoursAr: 'ساعتان أسبوعياً', date: '2026/02/08', category: 'Education', categoryAr: 'تعليم', seats: 5 },
    { id: 2, titleEn: 'Assisting in Organizing Charity Events', titleAr: 'مساعدة في تنظيم الفعاليات الخيرية', descEn: 'We are looking for volunteers to assist in organizing and managing charity events', descAr: 'نبحث عن متطوعين للمساعدة في تنظيم وإدارة الفعاليات الخيرية', location: 'Qatif', locationAr: 'القطيف', hours: '4 hours daily', hoursAr: '4 ساعات في اليوم', date: '2026/02/15', category: 'Activities', categoryAr: 'فعاليات', seats: 10 },
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
          <Grid cols={2}>
            {opportunities.map(opp => (
              <Card key={opp.id} className="border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-24 flex items-center justify-center" style={{ backgroundColor: 'rgba(14,75,51,0.9)' }}>
                  {(opp.id === 1 ? <GraduationCap size={40} className="text-white" /> : <Calendar size={40} className="text-white" />)}
                </div>
                <div className="p-6 relative">
                  <span className="absolute top-4 left-4 px-2 py-1 rounded text-xs font-semibold text-white" style={{ backgroundColor: '#0E4B33' }}>{lang === 'ar' ? opp.categoryAr : opp.category}</span>
                  <span className="absolute top-4 right-4 px-2 py-1 rounded text-xs font-semibold text-white" style={{ backgroundColor: '#0E4B33' }}>{opp.seats} {t.seats}</span>
                  <h3 className="text-xl font-bold mt-6 mb-3" style={{ color: '#0E4B33' }}>{lang === 'ar' ? opp.titleAr : opp.titleEn}</h3>
                  <p className="text-gray-600 text-sm mb-4">{lang === 'ar' ? opp.descAr : opp.descEn}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1"><MapPin size={16} /> {lang === 'ar' ? opp.locationAr : opp.location}</span>
                    <span className="flex items-center gap-1"><Clock size={16} /> {lang === 'ar' ? opp.hoursAr : opp.hours}</span>
                    <span className="flex items-center gap-1"><Calendar size={16} /> {lang === 'en' ? 'Starts' : 'يبدأ'} {opp.date}</span>
                  </div>
                  <Link to={`/volunteer-apply?opp=${opp.id}`} className="inline-flex items-center gap-2 w-full justify-center py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: '#0E4B33' }}>
                    <User size={18} />
                    {t.apply}
                  </Link>
                </div>
              </Card>
            ))}
          </Grid>
          <div className="mt-12 p-8 rounded-2xl text-center border-2 border-dashed" style={{ borderColor: '#0E4B33', backgroundColor: 'rgba(14,75,51,0.04)' }}>
            <p className="text-gray-700 mb-4">{t.register_cta}</p>
            <Link to="/volunteer-register" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: '#0E4B33' }}>
              <User size={20} />
              {t.register_volunteer}
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default VolunteerOpportunities

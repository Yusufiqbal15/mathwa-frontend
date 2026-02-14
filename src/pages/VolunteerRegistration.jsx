import React, { useState } from 'react'
import { HeroSection, Container, Card, Section, Button } from '../components/Common'
import { Send } from 'lucide-react'

const VolunteerRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    skills: '',
    interests: [],
  })

  const [language] = React.useState(() => localStorage.getItem('language') || 'en')
  const t = language === 'en' ? {
    title: 'Volunteer Registration',
    subtitle: 'Join our team of dedicated volunteers',
    form_title: 'Register Now',
    first_name: 'First Name',
    last_name: 'Last Name',
    email: 'Email',
    phone: 'Phone',
    age: 'Age',
    skills: 'Skills & Expertise',
    interests: 'Areas of Interest',
    submit: 'Register',
  } : {
    title: 'تسجيل متطوع',
    subtitle: 'انضم إلى فريقنا من المتطوعين المكرسين',
    form_title: 'سجل الآن',
    first_name: 'الاسم الأول',
    last_name: 'اسم العائلة',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    age: 'العمر',
    skills: 'المهارات والخبرات',
    interests: 'مجالات الاهتمام',
    submit: 'تسجيل',
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for registering!')
  }

  return (
    <>
      <HeroSection 
        title={t.title}
        subtitle={t.subtitle}
      />

      <Section>
        <Container>
          <div className="max-w-2xl mx-auto">
            <Card className="!p-8">
              <h2 className="text-3xl font-bold text-primary mb-8">{t.form_title}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="firstName" placeholder={t.first_name} onChange={handleChange} required className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
                  <input name="lastName" placeholder={t.last_name} onChange={handleChange} required className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="email" name="email" placeholder={t.email} onChange={handleChange} required className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
                  <input type="tel" name="phone" placeholder={t.phone} onChange={handleChange} required className="px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
                </div>
                <input type="number" name="age" placeholder={t.age} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
                <textarea name="skills" placeholder={t.skills} onChange={handleChange} rows="4" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"></textarea>
                <Button type="submit" size="lg" className="w-full gap-2">
                  <Send size={20} />
                  {t.submit}
                </Button>
              </form>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default VolunteerRegistration

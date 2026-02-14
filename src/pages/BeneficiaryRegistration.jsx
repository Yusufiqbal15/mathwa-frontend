import React, { useState } from 'react'
import { HeroSection, Container, Card, Section, Button } from '../components/Common'
import { Send } from 'lucide-react'

const BeneficiaryRegistration = () => {
  const [language] = React.useState(() => localStorage.getItem('language') || 'en')
  const t = language === 'en' ? {
    title: 'Beneficiary Registration',
    subtitle: 'Apply to access our services',
  } : {
    title: 'تسجيل مستفيد',
    subtitle: 'تقدم بطلب للوصول إلى خدماتنا',
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Registration submitted!')
  }

  return (
    <>
      <HeroSection title={t.title} subtitle={t.subtitle} />
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto">
            <Card className="!p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input placeholder="Full Name" required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
                <input type="email" placeholder="Email" required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
                <input type="tel" placeholder="Phone" required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary" />
                <textarea placeholder="Tell us about your situation" rows="6" required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"></textarea>
                <Button type="submit" size="lg" className="w-full gap-2">
                  <Send size={20} /> Submit
                </Button>
              </form>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default BeneficiaryRegistration

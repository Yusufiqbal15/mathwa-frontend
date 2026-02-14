import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HeroSection, Container, Card, Grid, Section, Button } from '../components/Common'
import { Phone, Mail, MapPin, Send } from 'lucide-react'
import { Link } from 'react-router-dom'

const Contact = () => {
  const { t } = useTranslation('contact')
  const lang = localStorage.getItem('language') || 'en'
  const breadcrumb = { en: { home: 'Home', current: 'Contact Us' }, ar: { home: 'الرئيسية', current: 'اتصل بنا' } }[lang]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <>
      <HeroSection 
        title={t('contact_title')}
        subtitle={t('contact_subtitle')}
      />
      <div className="bg-gray-100 py-2">
        <Container>
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-[#0E4B33]">{breadcrumb.home}</Link>
            <span className="mx-2">/</span>
            <span className="text-[#0E4B33] font-medium">{breadcrumb.current}</span>
          </nav>
        </Container>
      </div>
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact cards - Email, Phone, Address */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center p-6 border border-gray-200">
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'rgba(14,75,51,0.1)' }}>
                  <Mail size={28} style={{ color: '#0E4B33' }} />
                </div>
                <h4 className="font-bold mb-1" style={{ color: '#0E4B33' }}>{t('email')}</h4>
                <p className="text-gray-600">{t('email_value')}</p>
              </Card>
              <Card className="text-center p-6 border border-gray-200">
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'rgba(14,75,51,0.1)' }}>
                  <Phone size={28} style={{ color: '#0E4B33' }} />
                </div>
                <h4 className="font-bold mb-1" style={{ color: '#0E4B33' }}>{t('phone')}</h4>
                <p className="text-gray-600">{t('phone_value')}</p>
              </Card>
              <Card className="text-center p-6 border border-gray-200">
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'rgba(14,75,51,0.1)' }}>
                  <MapPin size={28} style={{ color: '#0E4B33' }} />
                </div>
                <h4 className="font-bold mb-1" style={{ color: '#0E4B33' }}>{t('address')}</h4>
                <p className="text-gray-600">{t('address_value')}</p>
              </Card>
            </div>
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="!p-8">
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#0E4B33' }}>{t('form_title')}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">{t('your_name')}</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">{t('your_email')}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">{t('your_phone')}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">{t('subject')}</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">{t('message')}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
                    ></textarea>
                  </div>

                  <Button size="lg" className="w-full gap-2">
                    <Send size={20} />
                    {t('send_message')}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <Card className="mb-6">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#0E4B33' }}>{t('contact_info')}</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 flex-shrink-0" size={24} style={{ color: '#0E4B33' }} />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{t('phone')}</h4>
                      <p className="text-gray-600">{t('phone_value')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 flex-shrink-0" size={24} style={{ color: '#0E4B33' }} />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{t('email')}</h4>
                      <p className="text-gray-600">{t('email_value')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 flex-shrink-0" size={24} style={{ color: '#0E4B33' }} />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{t('address')}</h4>
                      <p className="text-gray-600">{t('address_value')}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-1">{t('working_hours')}</h4>
                    <p className="text-gray-600 text-sm">{t('working_hours_value')}</p>
                    <p className="text-red-500 font-semibold text-sm mt-1">{t('friday')}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section bg="gray">
        <Container>
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Visit Us</h2>
          <div className="w-full h-96 bg-gradient-to-br from-primary to-secondary rounded-lg overflow-hidden shadow-lg">
            <div className="w-full h-full flex items-center justify-center text-white">
              <p className="text-2xl font-bold">Map Integration Coming Soon</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default Contact

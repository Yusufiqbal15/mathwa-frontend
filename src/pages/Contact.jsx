import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HeroSection, SectionTitle, Container, Card, Grid, Section, Button } from '../components/Common'
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react'
import { contactAPI } from '../services/api'

const Contact = () => {
  const { t } = useTranslation()
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
        title={t.title}
        subtitle={t.subtitle}
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="!p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">{t.get_in_touch}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">{t.your_name}</label>
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
                      <label className="block text-sm font-bold text-gray-700 mb-2">{t.your_email}</label>
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
                      <label className="block text-sm font-bold text-gray-700 mb-2">{t.your_phone}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">{t.subject}</label>
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
                    <label className="block text-sm font-bold text-gray-700 mb-2">{t.message}</label>
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
                    {t.send_message}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <Card className="mb-6">
                <h3 className="text-xl font-bold text-primary mb-6">{t.contact_info}</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="text-secondary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{t.phone_label}</h4>
                      <p className="text-gray-600">+966 XX-XXXX-XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-secondary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{t.email_label}</h4>
                      <p className="text-gray-600">info@mathwa.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="text-secondary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{t.address_label}</h4>
                      <p className="text-gray-600">Riyadh, Saudi Arabia</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-primary mb-4">{t.working_hours}</h3>
                <div className="space-y-2 text-gray-600">
                  <p>{t.office_hours}</p>
                  <p className="text-red-500 font-semibold">{t.friday}</p>
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

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HeroSection, SectionTitle, Container, Card, Grid, Section, Button } from '../components/Common'
import { Heart, Check, DollarSign, ExternalLink } from 'lucide-react'

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState(100)
  const [customAmount, setCustomAmount] = useState('')
  const [donationMethod, setDonationMethod] = useState('card')

  const translations = {
    en: {
      title: 'Donation',
      subtitle: 'Contribute to supporting the charitable association\'s work',
      ways_title: 'Ways to Donate',
      ways_desc: 'You can donate through the Salla e-platform.',
      donate_via_salla: 'Donate via Salla',
      or_browse: 'Or browse available donation opportunities',
      home: 'Home',
      donation_amount: 'Donation Amount (SAR)',
      custom_amount: 'Custom Amount',
      quick_donate: 'Quick Donate Amounts',
      donation_method: 'Payment Method',
      credit_card: 'Credit Card',
      bank_transfer: 'Bank Transfer',
      donate_button: 'Proceed with Donation',
      donate_now_section: 'Donate Now',
      donate_now_sub: 'Your donation contributes to the continuity of our community services',
      donation_impact: 'Your Impact',
      impact_meal: 'Provides meal support',
      impact_family: 'Supports a family',
      impact_program: 'Funds community program',
      impact_equipment: 'Provides essential equipment',
      monthly: 'Monthly',
      one_time: 'One Time',
    },
    ar: {
      title: 'التبرع',
      subtitle: 'ساهم في دعم أعمال الجمعية الخيرية',
      ways_title: 'طرق التبرع',
      ways_desc: 'يمكنك التبرع من خلال منصة سلة الإلكترونية',
      donate_via_salla: 'تبرع عبر سلة',
      or_browse: 'أو تصفح فرص التبرع المتاحة',
      home: 'الرئيسية',
      donation_amount: 'مبلغ التبرع (ريال)',
      custom_amount: 'مبلغ مخصص',
      quick_donate: 'مبالغ التبرع السريعة',
      donation_method: 'طريقة الدفع',
      credit_card: 'بطاقة ائتمان',
      bank_transfer: 'تحويل بنكي',
      donate_button: 'متابعة التبرع',
      donation_impact: 'تأثيرك',
      impact_meal: 'يوفر دعم الوجبات',
      impact_family: 'يدعم عائلة',
      impact_program: 'يمول برنامج مجتمعي',
      impact_equipment: 'يوفر معدات أساسية',
      donate_now_section: 'تبرع الآن',
      donate_now_sub: 'تبرعك يساهم في استمرار خدماتنا للمجتمع',
      monthly: 'شهري',
      one_time: 'مرة واحدة',
    }
  }

  const [language] = React.useState(() => localStorage.getItem('language') || 'en')
  const t = translations[language]

  const amounts = [50, 100, 250, 500, 1000]

  return (
    <>
      <HeroSection 
        title={t.title}
        subtitle={t.subtitle}
      />
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
          <SectionTitle title={t.donate_now_section} subtitle={t.donate_now_sub} />
          <div className="max-w-xl mx-auto mb-12">
            <Card className="text-center p-8">
              <DollarSign size={56} className="mx-auto mb-4" style={{ color: '#0E4B33' }} />
              <h3 className="text-xl font-bold mb-2" style={{ color: '#0E4B33' }}>{t.ways_title}</h3>
              <p className="text-gray-600 mb-6">{t.ways_desc}</p>
              <a
                href="https://salla.sa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#0E4B33' }}
              >
                {t.donate_via_salla}
                <ExternalLink size={18} />
              </a>
              <p className="text-sm text-gray-500 mt-4">
                <Link to="/donate" className="hover:underline" style={{ color: '#0E4B33' }}>{t.or_browse}</Link>
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              <Card className="!p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Choose Your Support</h2>

                {/* Donation Type */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Donation Type</label>
                  <div className="flex gap-4">
                    <button className="flex-1 px-4 py-3 bg-primary text-white rounded-lg font-semibold">
                      {t.one_time}
                    </button>
                    <button className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-primary">
                      {t.monthly}
                    </button>
                  </div>
                </div>

                {/* Quick Amounts */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-700 mb-3">{t.quick_donate}</label>
                  <div className="grid grid-cols-5 gap-3">
                    {amounts.map(amount => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount)
                          setCustomAmount('')
                        }}
                        className={`py-3 rounded-lg font-bold transition-all ${
                          selectedAmount === amount && customAmount === ''
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {amount}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-700 mb-3">{t.custom_amount}</label>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setSelectedAmount(e.target.value ? parseInt(e.target.value) : 0)
                    }}
                    placeholder="Enter amount..."
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>

                {/* Payment Method */}
                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-700 mb-3">{t.donation_method}</label>
                  <div className="space-y-3">
                    <label className="flex items-center p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-all">
                      <input
                        type="radio"
                        name="method"
                        value="card"
                        checked={donationMethod === 'card'}
                        onChange={(e) => setDonationMethod(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="ml-3 font-semibold text-gray-700">{t.credit_card}</span>
                    </label>
                    <label className="flex items-center p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-all">
                      <input
                        type="radio"
                        name="method"
                        value="transfer"
                        checked={donationMethod === 'transfer'}
                        onChange={(e) => setDonationMethod(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="ml-3 font-semibold text-gray-700">{t.bank_transfer}</span>
                    </label>
                  </div>
                </div>

                {/* Donate Button */}
                <Button size="lg" className="w-full gap-2">
                  <Heart size={20} />
                  {t.donate_button} ({selectedAmount || customAmount} SAR)
                </Button>
              </Card>
            </div>

            {/* Impact Sidebar */}
            <div>
              <Card className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-6">{t.donation_impact}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-700">50 SAR</p>
                      <p className="text-sm text-gray-600">{t.impact_meal}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-700">250 SAR</p>
                      <p className="text-sm text-gray-600">{t.impact_family}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-700">500 SAR</p>
                      <p className="text-sm text-gray-600">{t.impact_program}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-700">1000 SAR</p>
                      <p className="text-sm text-gray-600">{t.impact_equipment}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-primary text-white">
                <h3 className="font-bold mb-3">Your Support Matters</h3>
                <p className="text-sm text-gray-200">
                  Every donation, no matter the amount, helps us continue our mission to serve those in need.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default Donation

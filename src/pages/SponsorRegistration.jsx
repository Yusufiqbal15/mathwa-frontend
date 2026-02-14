import React, { useState } from 'react'
import { HeroSection, Section, Container } from '../components/Common'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const SponsorRegistration = () => {
  const lang = localStorage.getItem('language') || 'en'
  const [type, setType] = useState('individual') // individual | company

  const t = {
    en: {
      title: 'Sponsor Registration',
      subtitle: 'Register as a Sponsor',
      form_title: 'Benefactor Registration Form',
      individual: 'Individual',
      company: 'Company / Institution',
      name_ar: 'Name in Arabic',
      name_en: 'Name in English',
      email: 'Email',
      id_number: 'ID / Residency number',
      mobile: 'Mobile Number',
      city: 'City',
      donation_type: 'Preferred Donation Type',
      donation_amount: 'Expected Donation Amount',
      notes: 'Additional Notes',
      submit: 'Register',
      home: 'Home',
      contribute: 'Contribute with Us',
      monthly: 'Monthly',
      one_time: 'One Time',
    },
    ar: {
      title: 'تسجيل المحسنين',
      subtitle: 'تسجيل المحسنين',
      form_title: 'نموذج تسجيل المحسنين',
      individual: 'فرد',
      company: 'شركة / مؤسسة',
      name_ar: 'الاسم بالعربية',
      name_en: 'الاسم بالإنجليزية',
      email: 'البريد الإلكتروني',
      id_number: 'رقم الهوية / الإقامة',
      mobile: 'رقم الجوال',
      city: 'المدينة',
      donation_type: 'نوع التبرع المفضل',
      donation_amount: 'مبلغ التبرع المتوقع',
      notes: 'ملاحظات إضافية',
      submit: 'تسجيل',
      home: 'الرئيسية',
      contribute: 'ساهم معنا',
      monthly: 'شهري',
      one_time: 'مرة واحدة',
    },
  }[lang]

  return (
    <>
      <HeroSection title={t.title} subtitle={t.subtitle} />
      <div className="bg-gray-100 py-2">
        <Container>
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-[#0E4B33]">{t.home}</Link>
            <span className="mx-2">/</span>
            <Link to="/donate" className="hover:text-[#0E4B33]">{t.contribute}</Link>
            <span className="mx-2">/</span>
            <span className="text-[#0E4B33] font-medium">{t.title}</span>
          </nav>
        </Container>
      </div>
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-xl font-bold mb-6" style={{ color: '#0E4B33' }}>{t.form_title}</h2>

            <div className="flex gap-4 mb-6">
              <button
                type="button"
                onClick={() => setType('individual')}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold border-2 transition-colors ${type === 'individual' ? 'border-[#0E4B33] text-white' : 'border-gray-300 text-gray-700'}`}
                style={type === 'individual' ? { backgroundColor: '#0E4B33' } : {}}
              >
                {t.individual}
              </button>
              <button
                type="button"
                onClick={() => setType('company')}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold border-2 transition-colors ${type === 'company' ? 'border-[#0E4B33] text-white' : 'border-gray-300 text-gray-700'}`}
                style={type === 'company' ? { backgroundColor: '#0E4B33' } : {}}
              >
                {t.company}
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.name_ar}</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.name_en}</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.email}</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.id_number}</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.mobile}</label>
                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.city}</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.donation_type}</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33] focus:border-transparent">
                  <option>{t.monthly}</option>
                  <option>{t.one_time}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.donation_amount}</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33] focus:border-transparent">
                  <option>100 SAR</option>
                  <option>250 SAR</option>
                  <option>500 SAR</option>
                  <option>1000 SAR</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.notes}</label>
                <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33] focus:border-transparent" />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#0E4B33' }}
              >
                {t.submit}
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default SponsorRegistration

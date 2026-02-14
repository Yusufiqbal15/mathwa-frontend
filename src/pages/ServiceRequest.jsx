import React from 'react'
import { HeroSection, Section, Container } from '../components/Common'
import { Link } from 'react-router-dom'
import { Send, Info } from 'lucide-react'

const ServiceRequest = () => {
  const lang = localStorage.getItem('language') || 'en'

  const t = {
    en: {
      title: 'Service Request',
      subtitle: 'Submit your request and we will contact you as soon as possible',
      note: 'You must be registered as a beneficiary first. If you are not registered, register here.',
      national_id: 'National ID / Residency Number *',
      beneficiary_number: 'Registered number in the beneficiary system',
      request_title: 'Request Title *',
      request_title_placeholder: 'e.g. Request for preparing a deceased',
      service_type: 'Type of requested service *',
      service_type_placeholder: 'Select service type...',
      request_description: 'Describe the request in detail *',
      request_description_placeholder: 'Please describe your need in detail',
      priority: 'Priority Level *',
      priority_medium: 'Medium',
      priority_high: 'High',
      priority_low: 'Low',
      submit: 'Submit Request',
      register_here: 'Register here',
      home: 'Home',
      beneficiary_services: 'Beneficiary Services',
    },
    ar: {
      title: 'طلب خدمة',
      subtitle: 'قدم طلبك وسنتواصل معك في أقرب وقت',
      note: 'يجب أن تكون مسجلاً كمستفيد أولاً. إذا لم تكن مسجلاً، سجل هنا',
      national_id: 'رقم الهوية الوطنية / الإقامة *',
      beneficiary_number: 'الرقم المسجل في نظام المستفيدين',
      request_title: 'عنوان الطلب *',
      request_title_placeholder: 'مثال: طلب تجهيز متوفى',
      service_type: 'نوع الخدمة المطلوبة *',
      service_type_placeholder: 'اختر نوع الخدمة...',
      request_description: 'وصف الطلب بالتفصيل *',
      request_description_placeholder: 'الرجاء وصف احتياجك بالتفصيل',
      priority: 'مستوى الأولوية *',
      priority_medium: 'متوسطة',
      priority_high: 'عالية',
      priority_low: 'منخفضة',
      submit: 'إرسال الطلب',
      register_here: 'سجل هنا',
      home: 'الرئيسية',
      beneficiary_services: 'خدمات المستفيدين',
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
            <Link to="/beneficiary-services" className="hover:text-[#0E4B33]">{t.beneficiary_services}</Link>
            <span className="mx-2">/</span>
            <span className="text-[#0E4B33] font-medium">{t.title}</span>
          </nav>
        </Container>
      </div>
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-start gap-3 p-4 rounded-lg mb-6" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
              <Info size={22} style={{ color: '#2563eb', flexShrink: 0 }} />
              <p className="text-gray-700 text-sm">
                {t.note} <Link to="/beneficiary-register" className="font-semibold hover:underline" style={{ color: '#0E4B33' }}>{t.register_here}</Link>
              </p>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.national_id}</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33] focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.beneficiary_number}</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33] focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.request_title}</label>
                <input type="text" placeholder={t.request_title_placeholder} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33] focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.service_type}</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33] focus:border-transparent" required>
                  <option value="">{t.service_type_placeholder}</option>
                  <option>Deceased Preparation</option>
                  <option>Transport</option>
                  <option>Burial</option>
                  <option>Psychological Support</option>
                  <option>Financial Aid</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.request_description}</label>
                <textarea rows={4} placeholder={t.request_description_placeholder} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33] focus:border-transparent" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.priority}</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33] focus:border-transparent">
                  <option>{t.priority_medium}</option>
                  <option>{t.priority_high}</option>
                  <option>{t.priority_low}</option>
                </select>
              </div>
              <button type="submit" className="w-full py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90" style={{ backgroundColor: '#0E4B33' }}>
                <Send size={20} />
                {t.submit}
              </button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default ServiceRequest

import React from 'react'
import { HeroSection, Container, Section } from '../components/Common'
import { Link } from 'react-router-dom'
import { Send, User, Phone, Briefcase, Award, Clock, UserPlus } from 'lucide-react'

const VolunteerRegistration = () => {
  const lang = localStorage.getItem('language') || 'en'
  const t = {
    en: {
      title: 'Volunteer Registration',
      subtitle: 'Join the volunteer team and contribute to community service',
      form_title: 'Join the volunteer team',
      fill_form: 'Fill out the form below to join.',
      personal: 'Personal Information',
      full_name_ar: 'Full Name (Arabic)',
      full_name_en: 'Full Name (English)',
      national_id: 'National ID / Residency Number',
      dob: 'Date of Birth',
      gender: 'Gender',
      contact: 'Contact Information',
      mobile: 'Mobile Number',
      email: 'Email',
      city: 'City',
      address: 'Full Address',
      address_placeholder: 'e.g. weekdays evenings, weekends',
      education: 'Education and Work',
      education_level: 'Educational Level',
      field_of_study: 'Field of Study',
      current_occupation: 'Current Occupation',
      skills: 'Skills and Interests',
      skills_check: 'Skills (select what applies)',
      comm: 'Communication',
      org: 'Organization',
      leadership: 'Leadership',
      design: 'Design',
      management: 'Management',
      volunteer_areas: 'Volunteer interest areas',
      volunteer_areas_placeholder: 'e.g. working with children, elderly care, environment',
      previous_experience: 'Previous volunteer experience',
      available_times: 'When can you volunteer?',
      available_times_placeholder: 'e.g. weekdays evenings, weekend holidays',
      emergency: 'Emergency Contact',
      emergency_name: 'Name',
      emergency_mobile: 'Mobile Number',
      submit: 'Register as volunteer',
      home: 'Home',
      volunteering: 'Volunteering',
    },
    ar: {
      title: 'تسجيل المتطوعين',
      subtitle: 'انضم إلى فريق المتطوعين وساهم في خدمة المجتمع',
      form_title: 'انضم لفريق المتطوعين',
      fill_form: 'املأ النموذج أدناه للانضمام.',
      personal: 'المعلومات الشخصية',
      full_name_ar: 'الاسم الكامل (عربي)',
      full_name_en: 'الاسم الكامل (إنجليزي)',
      national_id: 'رقم الهوية الوطنية/الإقامة',
      dob: 'تاريخ الميلاد',
      gender: 'الجنس',
      contact: 'معلومات الاتصال',
      mobile: 'رقم الجوال',
      email: 'البريد الإلكتروني',
      city: 'المدينة',
      address: 'العنوان الكامل',
      address_placeholder: 'مثال: أيام الأسبوع مساءً، عطلة نهاية الأسبوع',
      education: 'التعليم والعمل',
      education_level: 'المستوى التعليمي',
      field_of_study: 'مجال الدراسة',
      current_occupation: 'الوظيفة الحالية',
      skills: 'المهارات والاهتمامات',
      skills_check: 'المهارات (اختر ما ينطبق)',
      comm: 'التواصل',
      org: 'التنظيم',
      leadership: 'القيادة',
      design: 'التصميم',
      management: 'الإدارة',
      volunteer_areas: 'مجالات الاهتمام التطوعي',
      volunteer_areas_placeholder: 'مثال: العمل مع الأطفال، رعاية كبار السن، البيئة',
      previous_experience: 'الخبرات التطوعية السابقة',
      available_times: 'متى يمكنك التطوع؟',
      available_times_placeholder: 'مثال: أيام الأسبوع مساءً، عطلة نهاية الأسبوع',
      emergency: 'جهة الاتصال في حالات الطوارئ',
      emergency_name: 'الاسم',
      emergency_mobile: 'رقم الجوال',
      submit: 'تسجيل كمتطوع',
      home: 'الرئيسية',
      volunteering: 'التطوع',
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
            <Link to="/volunteer-opportunities" className="hover:text-[#0E4B33]">{t.volunteering}</Link>
            <span className="mx-2">/</span>
            <span className="text-[#0E4B33] font-medium">{t.title}</span>
          </nav>
        </Container>
      </div>
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2" style={{ color: '#0E4B33' }}>{t.form_title}</h2>
            <p className="text-gray-600 mb-8">{t.fill_form}</p>
            <form className="space-y-10">
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6"><User size={22} style={{ color: '#2563eb' }} /><h3 className="text-lg font-bold" style={{ color: '#0E4B33' }}>{t.personal}</h3></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700 mb-1">{t.full_name_ar}</label><input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" required /></div>
                  <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700 mb-1">{t.full_name_en}</label><input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.national_id}</label><input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.dob}</label><input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.gender}</label><select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]"><option>Male</option><option>Female</option></select></div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6"><Phone size={22} style={{ color: '#2563eb' }} /><h3 className="text-lg font-bold" style={{ color: '#0E4B33' }}>{t.contact}</h3></div>
                <div className="space-y-4">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.mobile}</label><input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.email}</label><input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.city}</label><input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.address}</label><textarea rows={3} placeholder={t.address_placeholder} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6"><Briefcase size={22} style={{ color: '#2563eb' }} /><h3 className="text-lg font-bold" style={{ color: '#0E4B33' }}>{t.education}</h3></div>
                <div className="space-y-4">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.education_level}</label><select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]"><option>High School</option><option>Bachelor</option><option>Master</option><option>PhD</option></select></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.field_of_study}</label><input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.current_occupation}</label><input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6"><Award size={22} style={{ color: '#2563eb' }} /><h3 className="text-lg font-bold" style={{ color: '#0E4B33' }}>{t.skills}</h3></div>
                <div className="space-y-4">
                  <div><label className="block text-sm font-medium text-gray-700 mb-2">{t.skills_check}</label><div className="flex flex-wrap gap-4"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded text-[#0E4B33]" /> {t.comm}</label><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded text-[#0E4B33]" /> {t.org}</label><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded text-[#0E4B33]" /> {t.leadership}</label><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded text-[#0E4B33]" /> {t.design}</label><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded text-[#0E4B33]" /> {t.management}</label></div></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.volunteer_areas}</label><textarea rows={2} placeholder={t.volunteer_areas_placeholder} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.previous_experience}</label><textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.available_times}</label><textarea rows={2} placeholder={t.available_times_placeholder} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6"><UserPlus size={22} style={{ color: '#2563eb' }} /><h3 className="text-lg font-bold" style={{ color: '#0E4B33' }}>{t.emergency}</h3></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.emergency_name}</label><input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.emergency_mobile}</label><input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                </div>
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

export default VolunteerRegistration

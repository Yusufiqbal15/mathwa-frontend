import React from 'react'
import { HeroSection, Section, Container } from '../components/Common'
import { Link } from 'react-router-dom'
import { Send, User, Phone, Home, Heart, UserPlus, FileText } from 'lucide-react'

const BeneficiaryRegistration = () => {
  const lang = localStorage.getItem('language') || 'en'
  const t = {
    en: {
      title: 'Beneficiary Registration',
      subtitle: 'Register your data to benefit from the services of the association',
      form_title: 'Beneficiary Registration Form',
      form_note: 'Please fill in the following data accurately. All information is confidential and will only be used for providing services.',
      personal: 'Personal Information',
      full_name_ar: 'Full name in Arabic',
      national_id: 'National ID / Residency Number',
      full_name_en: 'Full name in English',
      dob: 'Date of Birth',
      gender: 'Gender',
      male: 'Male',
      female: 'Female',
      marital: 'Marital Status',
      contact: 'Contact Information',
      mobile: 'Mobile Number',
      mobile_placeholder: '05xxxxxxxxx',
      email: 'Email Address',
      city: 'City',
      address: 'Full Address',
      address_placeholder: 'Please write the address in detail',
      family: 'Family and Financial Information',
      family_members: 'Number of Family Members',
      monthly_income: 'Monthly Income (SAR)',
      employment: 'Employment Status',
      social_security: 'Do you have social security?',
      yes: 'Yes',
      no: 'No',
      health: 'Health Status and Special Needs',
      health_status: 'Health Status',
      health_placeholder: 'Please mention any chronic diseases or special health conditions',
      special_needs: 'Special Needs',
      special_needs_placeholder: 'Please mention any special needs or disabilities',
      emergency: 'Emergency Contact Person',
      emergency_name: 'Full Name',
      emergency_mobile: 'Mobile Number',
      relationship: 'Relationship',
      relationship_placeholder: 'e.g. brother, son, friend',
      notes: 'Additional Notes',
      notes_placeholder: 'Any other information you would like to add',
      submit: 'Submit Request',
      home: 'Home',
      beneficiary_services: 'Beneficiary Services',
    },
    ar: {
      title: 'تسجيل المستفيدين',
      subtitle: 'سجل بياناتك للاستفادة من خدمات الجمعية',
      form_title: 'نموذج تسجيل المستفيدين',
      form_note: 'الرجاء تعبئة البيانات التالية بدقة. جميع المعلومات سرية ولا تستخدم إلا لأغراض تقديم الخدمات.',
      personal: 'المعلومات الشخصية',
      full_name_ar: 'الاسم الكامل بالعربي',
      national_id: 'رقم الهوية الوطنية / الإقامة',
      full_name_en: 'الاسم الكامل بالانجليزي',
      dob: 'تاريخ الميلاد',
      gender: 'الجنس',
      male: 'ذكر',
      female: 'أنثى',
      marital: 'الحالة الاجتماعية',
      contact: 'معلومات الاتصال',
      mobile: 'رقم الجوال',
      mobile_placeholder: '05xxxxxxxxx',
      email: 'البريد الإلكتروني',
      city: 'المدينة',
      address: 'العنوان الكامل',
      address_placeholder: 'الرجاء كتابة العنوان بالتفصيل',
      family: 'المعلومات العائلية والمالية',
      family_members: 'عدد أفراد الأسرة',
      monthly_income: 'الدخل الشهري (ريال)',
      employment: 'الحالة الوظيفية',
      social_security: 'هل لديك ضمان اجتماعي؟',
      yes: 'نعم',
      no: 'لا',
      health: 'الحالة الصحية والاحتياجات الخاصة',
      health_status: 'الحالة الصحية',
      health_placeholder: 'يرجى ذكر أي أمراض مزمنة أو حالات صحية خاصة',
      special_needs: 'الاحتياجات الخاصة',
      special_needs_placeholder: 'يرجى ذكر أي احتياجات خاصة أو إعاقات',
      emergency: 'جهة الاتصال في حالات الطوارئ',
      emergency_name: 'الاسم الكامل',
      emergency_mobile: 'رقم الجوال',
      relationship: 'صلة القرابة',
      relationship_placeholder: 'مثال: أخ، ابن، صديق',
      notes: 'ملاحظات إضافية',
      notes_placeholder: 'أي معلومات أخرى تود إضافتها',
      submit: 'إرسال الطلب',
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
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(59,130,246,0.15)' }}>
                <User size={24} style={{ color: '#2563eb' }} />
              </div>
              <h2 className="text-2xl font-bold" style={{ color: '#0E4B33' }}>{t.form_title}</h2>
            </div>
            <p className="text-gray-600 mb-8">{t.form_note}</p>

            <form className="space-y-10">
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <User size={22} style={{ color: '#2563eb' }} />
                  <h3 className="text-lg font-bold" style={{ color: '#0E4B33' }}>{t.personal}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700 mb-1">{t.full_name_ar}</label><input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" required /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.national_id}</label><input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.full_name_en}</label><input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.dob}</label><input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-2">{t.gender}</label><div className="flex gap-4"><label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="gender" value="male" className="text-[#0E4B33]" /> {t.male}</label><label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="gender" value="female" className="text-[#0E4B33]" /> {t.female}</label></div></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.marital}</label><select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]"><option>Single</option><option>Married</option><option>Widowed</option><option>Divorced</option></select></div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6"><Phone size={22} style={{ color: '#2563eb' }} /><h3 className="text-lg font-bold" style={{ color: '#0E4B33' }}>{t.contact}</h3></div>
                <div className="space-y-4">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.mobile}</label><input type="tel" placeholder={t.mobile_placeholder} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.email}</label><input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.city}</label><input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.address}</label><textarea rows={3} placeholder={t.address_placeholder} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6"><Home size={22} style={{ color: '#2563eb' }} /><h3 className="text-lg font-bold" style={{ color: '#0E4B33' }}>{t.family}</h3></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.family_members}</label><input type="number" min={0} defaultValue={0} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.monthly_income}</label><input type="number" min={0} defaultValue={0} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.employment}</label><select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]"><option>Employed</option><option>Unemployed</option><option>Retired</option><option>Student</option></select></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-2">{t.social_security}</label><div className="flex gap-4"><label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="social" value="yes" className="text-[#0E4B33]" /> {t.yes}</label><label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="social" value="no" className="text-[#0E4B33]" /> {t.no}</label></div></div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6"><Heart size={22} style={{ color: '#2563eb' }} /><h3 className="text-lg font-bold" style={{ color: '#0E4B33' }}>{t.health}</h3></div>
                <div className="space-y-4">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.health_status}</label><textarea rows={3} placeholder={t.health_placeholder} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.special_needs}</label><textarea rows={3} placeholder={t.special_needs_placeholder} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6"><UserPlus size={22} style={{ color: '#2563eb' }} /><h3 className="text-lg font-bold" style={{ color: '#0E4B33' }}>{t.emergency}</h3></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.emergency_name}</label><input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.emergency_mobile}</label><input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                  <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700 mb-1">{t.relationship}</label><input type="text" placeholder={t.relationship_placeholder} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4"><FileText size={22} style={{ color: '#2563eb' }} /><h3 className="text-lg font-bold" style={{ color: '#0E4B33' }}>{t.notes}</h3></div>
                <textarea rows={4} placeholder={t.notes_placeholder} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" />
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

export default BeneficiaryRegistration

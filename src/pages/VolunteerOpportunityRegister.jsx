import React from 'react'
import { HeroSection, Section, Container } from '../components/Common'
import { Link } from 'react-router-dom'
import { Send, Info, FileText, Users, Calendar, CheckSquare } from 'lucide-react'

const VolunteerOpportunityRegister = () => {
  const lang = localStorage.getItem('language') || 'en'
  const t = {
    en: {
      title: 'Volunteer Opportunity Registration',
      subtitle: 'Submit opportunity details for review and publication',
      note: 'Note: Please provide accurate information. It will be reviewed and approved before publication.',
      basic_info: 'Basic Opportunity Information',
      opportunity_name: 'Opportunity Name *',
      opportunity_desc: 'Opportunity Description *',
      category: 'Category *',
      location: 'Location *',
      requirements: 'Requirements and Qualifications',
      qualification: 'Academic Qualification *',
      qualification_placeholder: 'e.g. High school and above',
      volunteer_tasks: 'Volunteer Tasks *',
      appropriate_age: 'Appropriate Age *',
      opportunity_type: 'Opportunity Type',
      suitable_disabled: 'Suitable for disabled',
      entity_only: 'For entity volunteers only',
      city_only: 'For city volunteers only',
      requires_interview: 'Requires personal interview',
      dates_times: 'Dates and Times',
      num_volunteers: 'Number of Volunteers *',
      display_date: 'Opportunity Display Date *',
      start_date: 'Opportunity Start Date *',
      start_time: 'Opportunity Start Time *',
      end_date: 'Opportunity End Date *',
      end_time: 'Opportunity End Time *',
      volunteer_details: 'Volunteer Details',
      national_ids: 'National ID Numbers of Volunteers *',
      national_ids_placeholder: 'Enter one per line',
      volunteer_tasks_joined: 'Tasks of volunteers joining the opportunity',
      goal: 'Goal of Joining the Opportunity',
      goal_experience: 'Gain experience',
      goal_skills: 'Acquire skills',
      goal_certificate: 'Volunteer certificate',
      goal_reward: 'Reward',
      goal_belonging: 'National belonging',
      submit: 'Submit Opportunity for Approval',
      home: 'Home',
      volunteering: 'Volunteering',
    },
    ar: {
      title: 'تسجيل فرصة تطوعية',
      subtitle: 'قدم تفاصيل الفرصة للمراجعة والنشر',
      note: 'ملاحظة: يرجى تقديم معلومات دقيقة. سيتم مراجعتها والموافقة عليها قبل النشر.',
      basic_info: 'معلومات الفرصة الأساسية',
      opportunity_name: 'مسمى الفرصة *',
      opportunity_desc: 'وصف الفرصة *',
      category: 'التصنيف *',
      location: 'الموقع *',
      requirements: 'المتطلبات والمؤهلات',
      qualification: 'المؤهل العلمي *',
      qualification_placeholder: 'مثال: ثانوية عامة فأعلى',
      volunteer_tasks: 'مهام المتطوع *',
      appropriate_age: 'العمر المناسب *',
      opportunity_type: 'نوع الفرصة',
      suitable_disabled: 'مناسب لذوي الإعاقة',
      entity_only: 'لمتطوعي الجهة فقط',
      city_only: 'لمتطوعي المدينة فقط',
      requires_interview: 'يتطلب مقابلة شخصية',
      dates_times: 'التواريخ والأوقات',
      num_volunteers: 'عدد المتطوعين *',
      display_date: 'تاريخ ظهور الفرصة *',
      start_date: 'تاريخ بداية الفرصة *',
      start_time: 'وقت بداية الفرصة *',
      end_date: 'تاريخ نهاية الفرصة *',
      end_time: 'وقت نهاية الفرصة *',
      volunteer_details: 'تفاصيل المتطوعين',
      national_ids: 'أرقام الهوية الوطنية للمتطوعين *',
      national_ids_placeholder: 'أدخل رقماً في كل سطر',
      volunteer_tasks_joined: 'مهام المتطوعين المنضمين للفرصة',
      goal: 'الهدف من الانضمام للفرصة',
      goal_experience: 'اكتساب خبرة',
      goal_skills: 'اكتساب مهارات',
      goal_certificate: 'شهادة تطوع',
      goal_reward: 'مكافأة',
      goal_belonging: 'الانتماء الوطني',
      submit: 'إرسال الفرصة للاعتماد',
      home: 'الرئيسية',
      volunteering: 'فرص التطوع',
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
            <div className="flex items-start gap-3 p-4 rounded-lg mb-8" style={{ backgroundColor: 'rgba(59,130,246,0.1)' }}>
              <Info size={22} style={{ color: '#2563eb', flexShrink: 0 }} />
              <p className="text-gray-700 text-sm">{t.note}</p>
            </div>
            <form className="space-y-8">
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6"><FileText size={22} style={{ color: '#2563eb' }} /><h3 className="text-lg font-bold" style={{ color: '#0E4B33' }}>{t.basic_info}</h3></div>
                <div className="space-y-4">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.opportunity_name}</label><input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" required /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.opportunity_desc}</label><textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" required /></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.category}</label><select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" required><option>Education</option><option>Activities</option><option>Support</option></select></div>
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.location}</label><select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" required><option>Riyadh</option><option>Jeddah</option><option>Qatif</option><option>Dammam</option></select></div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6"><Users size={22} style={{ color: '#2563eb' }} /><h3 className="text-lg font-bold" style={{ color: '#0E4B33' }}>{t.requirements}</h3></div>
                <div className="space-y-4">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.qualification}</label><input type="text" placeholder={t.qualification_placeholder} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" required /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.volunteer_tasks}</label><textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" required /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.appropriate_age}</label><select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" required><option>18+</option><option>21+</option><option>25+</option><option>Any</option></select></div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4"><CheckSquare size={22} style={{ color: '#2563eb' }} /><h3 className="text-lg font-bold" style={{ color: '#0E4B33' }}>{t.opportunity_type}</h3></div>
                <div className="flex flex-wrap gap-6"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded text-[#0E4B33]" /> {t.suitable_disabled}</label><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded text-[#0E4B33]" /> {t.entity_only}</label><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded text-[#0E4B33]" /> {t.city_only}</label><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded text-[#0E4B33]" /> {t.requires_interview}</label></div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6"><Calendar size={22} style={{ color: '#2563eb' }} /><h3 className="text-lg font-bold" style={{ color: '#0E4B33' }}>{t.dates_times}</h3></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.num_volunteers}</label><input type="number" min={1} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" required /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.display_date}</label><input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" required /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.start_date}</label><input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" required /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.start_time}</label><input type="time" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" required /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.end_date}</label><input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" required /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.end_time}</label><input type="time" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" required /></div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4"><Users size={22} style={{ color: '#2563eb' }} /><h3 className="text-lg font-bold" style={{ color: '#0E4B33' }}>{t.volunteer_details}</h3></div>
                <div className="space-y-4">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.national_ids}</label><textarea rows={4} placeholder={t.national_ids_placeholder} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" required /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">{t.volunteer_tasks_joined}</label><textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4"><CheckSquare size={22} style={{ color: '#2563eb' }} /><h3 className="text-lg font-bold" style={{ color: '#0E4B33' }}>{t.goal}</h3></div>
                <div className="flex flex-wrap gap-4"><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded text-[#0E4B33]" /> {t.goal_experience}</label><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded text-[#0E4B33]" /> {t.goal_skills}</label><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded text-[#0E4B33]" /> {t.goal_certificate}</label><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded text-[#0E4B33]" /> {t.goal_reward}</label><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded text-[#0E4B33]" /> {t.goal_belonging}</label></div>
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
export default VolunteerOpportunityRegister

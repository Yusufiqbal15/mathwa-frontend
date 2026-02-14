import React from 'react'
import { HeroSection, Container, Card, Grid, Section } from '../components/Common'
import { Link } from 'react-router-dom'
import { Check, User, Crown, Coins, FileText, CreditCard, Building2, Smartphone, Send } from 'lucide-react'

const Membership = () => {
  const lang = localStorage.getItem('language') || 'en'
  const t = {
    en: {
      title: 'Membership Subscriptions',
      subtitle: 'Join as a member and support our mission',
      definition: 'Membership Definition',
      definition_text: 'Membership in the association grants you the right to participate in general assembly meetings, vote on decisions, and stay informed about our activities.',
      active_participation: 'Active Participation',
      right_to_vote: 'Right to Vote',
      continuous_communication: 'Continuous Communication',
      types: 'Types of Membership',
      honorary: 'Honorary Membership',
      honorary_by_decision: 'By Board decision',
      supporting: 'Supporting Membership',
      supporting_amount: '500+ Donation',
      regular: 'Regular Membership',
      regular_amount: '500',
      conditions: 'Membership Conditions',
      how_to_join: 'How to Join',
      step1: 'Fill the Form',
      step2: 'Pay Subscriptions',
      step3: 'Review',
      step4: 'Approval',
      how_to_pay: 'How to Pay Membership',
      bank_transfer: 'Bank Transfer',
      electronic: 'Electronic Payment',
      direct: 'Direct Payment',
      application_form: 'Membership Application Form',
      personal_info: 'Personal Information',
      contact_info: 'Contact Information',
      membership_type: 'Membership Type',
      payment_info: 'Payment Information',
      submit_application: 'Submit Application',
      home: 'Home',
      contribute: 'Contribute with Us',
    },
    ar: {
      title: 'اشتراكات العضوية',
      subtitle: 'انضم كعضو وادعم رسالتنا',
      definition: 'تعريف العضوية',
      definition_text: 'تمنحك العضوية في الجمعية الحق في المشاركة في اجتماعات الجمعية العمومية والتصويت على القرارات والاطلاع على أنشطتنا.',
      active_participation: 'المشاركة الفعالة',
      right_to_vote: 'حق التصويت',
      continuous_communication: 'التواصل المستمر',
      types: 'أنواع العضوية',
      honorary: 'العضوية الفخرية',
      honorary_by_decision: 'بقرار مجلس الإدارة',
      supporting: 'العضوية الداعمة',
      supporting_amount: '٥٠٠ + تبرع',
      regular: 'العضوية العادية',
      regular_amount: '٥٠٠',
      conditions: 'شروط العضوية',
      how_to_join: 'الية الانضمام للعضوية',
      step1: 'تعبئة النموذج',
      step2: 'سداد الاشتراكات',
      step3: 'المراجعة',
      step4: 'الموافقة',
      how_to_pay: 'كيفية سداد اشتراك العضوية',
      bank_transfer: 'التحويل البنكي',
      electronic: 'الدفع الإلكتروني',
      direct: 'الدفع المباشر',
      application_form: 'نموذج طلب العضوية',
      personal_info: 'المعلومات الشخصية',
      contact_info: 'معلومات التواصل',
      membership_type: 'نوع العضوية',
      payment_info: 'معلومات الدفع',
      submit_application: 'إرسال الطلب',
      home: 'الرئيسية',
      contribute: 'ساهم معنا',
    },
  }[lang]

  const benefits = [t.active_participation, t.right_to_vote, t.continuous_communication]
  const steps = [t.step1, t.step2, t.step3, t.step4]
  const payMethods = [t.bank_transfer, t.electronic, t.direct]

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
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-4">
              <User size={28} style={{ color: '#2563eb' }} />
              <h2 className="text-2xl font-bold" style={{ color: '#0E4B33' }}>{t.definition}</h2>
            </div>
            <p className="text-gray-600 mb-6">{t.definition_text}</p>
            <div className="flex flex-wrap gap-6">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check size={20} style={{ color: '#0E4B33' }} />
                  <span className="text-gray-700">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-8" style={{ color: '#0E4B33' }}>{t.types}</h2>
          <Grid cols={3}>
            <Card className="p-6 border border-gray-200 text-center">
              <Crown size={40} className="mx-auto mb-4 text-gray-600" />
              <h3 className="text-lg font-bold mb-2" style={{ color: '#0E4B33' }}>{t.honorary}</h3>
              <ul className="space-y-2 text-sm text-gray-600 mb-6 text-left">
                <li className="flex items-center gap-2"><Check size={16} style={{ color: '#16a34a' }} /> Benefit 1</li>
                <li className="flex items-center gap-2"><Check size={16} style={{ color: '#16a34a' }} /> Benefit 2</li>
              </ul>
              <button className="w-full py-2 rounded-lg font-semibold text-gray-700 bg-gray-200">{t.honorary_by_decision}</button>
            </Card>
            <Card className="p-6 border-2 border-[#C89B3C] text-center">
              <Coins size={40} className="mx-auto mb-4" style={{ color: '#C89B3C' }} />
              <h3 className="text-lg font-bold mb-2" style={{ color: '#0E4B33' }}>{t.supporting}</h3>
              <p className="text-lg font-bold mb-4" style={{ color: '#C89B3C' }}>{t.supporting_amount}</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6 text-left">
                <li className="flex items-center gap-2"><Check size={16} style={{ color: '#16a34a' }} /> Benefit 1</li>
                <li className="flex items-center gap-2"><Check size={16} style={{ color: '#16a34a' }} /> Benefit 2</li>
              </ul>
              <button className="w-full py-2 rounded-lg font-semibold text-white" style={{ backgroundColor: '#C89B3C' }}>{lang === 'en' ? 'Join' : 'انضم'}</button>
            </Card>
            <Card className="p-6 border border-gray-200 text-center">
              <User size={40} className="mx-auto mb-4" style={{ color: '#2563eb' }} />
              <h3 className="text-lg font-bold mb-2" style={{ color: '#0E4B33' }}>{t.regular}</h3>
              <p className="text-lg font-bold mb-4" style={{ color: '#2563eb' }}>{t.regular_amount}</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6 text-left">
                <li className="flex items-center gap-2"><Check size={16} style={{ color: '#16a34a' }} /> Benefit 1</li>
                <li className="flex items-center gap-2"><Check size={16} style={{ color: '#16a34a' }} /> Benefit 2</li>
              </ul>
              <button className="w-full py-2 rounded-lg font-semibold text-white" style={{ backgroundColor: '#2563eb' }}>{lang === 'en' ? 'Join' : 'انضم'}</button>
            </Card>
          </Grid>

          <div className="mt-16 mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#0E4B33' }}>{t.how_to_join}</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold" style={{ backgroundColor: '#0E4B33' }}>{i + 1}</div>
                  <p className="font-semibold text-gray-800">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#0E4B33' }}>{t.how_to_pay}</h2>
            <Grid cols={3}>
              <Card className="p-6 text-center border border-gray-200"><Building2 size={36} className="mx-auto mb-3" style={{ color: '#0E4B33' }} /><p className="font-semibold">{t.bank_transfer}</p></Card>
              <Card className="p-6 text-center border border-gray-200"><Smartphone size={36} className="mx-auto mb-3" style={{ color: '#0E4B33' }} /><p className="font-semibold">{t.electronic}</p></Card>
              <Card className="p-6 text-center border border-gray-200"><Building2 size={36} className="mx-auto mb-3" style={{ color: '#0E4B33' }} /><p className="font-semibold">{t.direct}</p></Card>
            </Grid>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#0E4B33' }}>{t.application_form}</h2>
            <Card className="p-8 border border-gray-200">
              <form className="space-y-6">
                <div><label className="block text-sm font-medium text-gray-700 mb-2">{t.personal_info}</label><input type="text" placeholder="Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-2">{t.contact_info}</label><input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /><input type="tel" placeholder="Phone" className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]" /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-2">{t.membership_type}</label><select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0E4B33]"><option>{t.regular}</option><option>{t.supporting}</option></select></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-2">{t.payment_info}</label><input type="file" className="w-full px-4 py-2 border border-gray-300 rounded-lg" /></div>
                <button type="submit" className="w-full py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2" style={{ backgroundColor: '#0E4B33' }}><Send size={20} />{t.submit_application}</button>
              </form>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default Membership

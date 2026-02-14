import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const translations = {
    en: {
      about_us: 'About Us',
      description: 'Mathwa is a leading charity organization dedicated to serving communities and making a positive impact through various programs and initiatives.',
      quick_links: 'Quick Links',
      contact_info: 'Contact Info',
      follow_us: 'Follow Us',
      phone: '+966 XX-XXXX-XXXX',
      email: 'info@mathwa.org',
      address: 'Riyadh, Saudi Arabia',
      rights: 'All rights reserved.',
      developed: 'Developed with',
    },
    ar: {
      about_us: 'عنا',
      description: 'جمعية مثوى هي جمعية خيرية رائدة مكرسة لخدمة المجتمعات والتأثير الإيجابي من خلال برامج مختلفة.',
      quick_links: 'روابط سريعة',
      contact_info: 'معلومات الاتصال',
      follow_us: 'تابعنا',
      phone: '+966 XX-XXXX-XXXX',
      email: 'info@mathwa.org',
      address: 'الرياض، المملكة العربية السعودية',
      rights: 'جميع الحقوق محفوظة.',
      developed: 'تم التطوير بـ',
    }
  }

  const [language] = React.useState(() => localStorage.getItem('language') || 'en')
  const t = translations[language]

  return (
    <footer className="bg-dark text-white pt-16 pb-8 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-xl">MATHWA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">{t.quick_links}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-all">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-all">About</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white transition-all">News</Link></li>
              <li><Link to="/donate" className="text-gray-400 hover:text-white transition-all">Donate</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-all">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">{t.contact_info}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-400">{t.phone}</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-accent mt-1 flex-shrink-0" />
                <a href="mailto:info@mathwa.org" className="text-gray-400 hover:text-white transition-all">{t.email}</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-400">{t.address}</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">{t.follow_us}</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary hover:bg-secondary transition-all flex items-center justify-center">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary hover:bg-secondary transition-all flex items-center justify-center">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary hover:bg-secondary transition-all flex items-center justify-center">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary hover:bg-secondary transition-all flex items-center justify-center">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} MATHWA. {t.rights}</p>
            <p>{t.developed} ❤️ by MATHWA Team</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import { HeroSection, SectionTitle, Container, Grid, Section } from '../components/Common'
import { Link } from 'react-router-dom'
import { Image as ImageIcon, Calendar, Eye } from 'lucide-react'

const PhotoAlbums = () => {
  const [language] = React.useState(() => localStorage.getItem('language') || 'en')
  const isAr = language === 'ar'

  const t = {
    en: {
      title: 'Photo Albums',
      subtitle: 'Gallery of photos of the association\'s activities and events',
      gallery_title: 'Photo Gallery',
      view_album: 'View Album',
      home: 'Home',
    },
    ar: {
      title: 'ألبومات الصور',
      subtitle: 'معرض صور أنشطة وفعاليات الجمعية',
      gallery_title: 'معرض الصور',
      view_album: 'عرض الألبوم',
      home: 'الرئيسية',
    },
  }[language]

  const albums = [
    { titleEn: 'Fasting Iftar Campaign 1445 AH', titleAr: 'حملة إفطار صائم 1445هـ', descEn: 'Community iftar campaign', descAr: 'حملة إفطار صائم', date: '2024/03/15' },
    { titleEn: 'Training workshop for preparing the deceased', titleAr: 'ورشة تدريبية لتجهيز الموتى', descEn: 'Professional training workshop', descAr: 'ورشة تدريبية', date: '2024/02/20' },
    { titleEn: 'Field visit to Al-Ikram Center', titleAr: 'زيارة ميدانية لمركز الإكرام', descEn: 'Field visit and inspection', descAr: 'زيارة ميدانية', date: '2024/01/10' },
    { titleEn: 'General Assembly Meeting 2024', titleAr: 'اجتماع الجمعية العمومية 2024', descEn: 'Annual general assembly', descAr: 'اجتماع الجمعية العمومية', date: '2024/01/05' },
  ]

  return (
    <>
      <HeroSection title={t.title} subtitle={t.subtitle} />
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
          <SectionTitle title={t.gallery_title} centered={false} />
          <Grid cols={3}>
            {albums.map((album, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 flex items-center justify-center bg-gray-100">
                  <ImageIcon size={48} className="text-gray-400" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#0E4B33' }}>{isAr ? album.titleAr : album.titleEn}</h3>
                  <p className="text-gray-600 text-sm mb-3">{isAr ? album.descAr : album.descEn}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar size={16} />
                    {album.date}
                  </div>
                  <Link
                    to={`/photo-albums/${idx + 1}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                    style={{ color: '#0E4B33' }}
                  >
                    <Eye size={16} />
                    {t.view_album}
                  </Link>
                </div>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  )
}

export default PhotoAlbums

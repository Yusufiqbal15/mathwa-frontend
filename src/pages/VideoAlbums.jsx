import React from 'react'
import { HeroSection, SectionTitle, Container, Grid, Section } from '../components/Common'

const VideoAlbums = () => {
  const [language] = React.useState(() => localStorage.getItem('language') || 'en')
  const t = language === 'en' ? { title: 'Video Albums', subtitle: 'Watch our video gallery' } : { title: 'ألبومات الفيديو', subtitle: 'شاهد معرض الفيديو' }

  const videos = [
    { title: 'Organization Overview', duration: '5:30' },
    { title: 'Volunteer Stories', duration: '8:45' },
    { title: 'Impact Report 2024', duration: '12:15' },
    { title: 'Community Support Program', duration: '6:20' },
    { title: 'Success Stories', duration: '10:00' },
    { title: 'How to Volunteer', duration: '4:50' },
  ]

  return (
    <>
      <HeroSection title={t.title} subtitle={t.subtitle} />
      <Section>
        <Container>
          <SectionTitle title={language === 'en' ? 'Our Videos' : 'مقاطعنا'} />
          <Grid cols={3}>
            {videos.map((video, idx) => (
              <div key={idx} className="relative group cursor-pointer overflow-hidden rounded-lg">
                <div className="h-48 bg-gradient-to-br from-secondary to-accent group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100">
                    <svg className="w-8 h-8 text-secondary ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all flex items-end p-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{video.title}</h3>
                    <p className="text-gray-300 text-sm">{video.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  )
}

export default VideoAlbums

import React from 'react'
import { HeroSection, SectionTitle, Container, Grid, Section } from '../components/Common'

const PhotoAlbums = () => {
  const [language] = React.useState(() => localStorage.getItem('language') || 'en')
  const t = language === 'en' ? { title: 'Photo Albums', subtitle: 'Explore our photo gallery' } : { title: 'ألبومات الصور', subtitle: 'استكشف معرض الصور' }

  const albums = [
    { title: 'Community Events', photos: 12 },
    { title: 'Volunteer Activities', photos: 15 },
    { title: 'Charity Drives', photos: 8 },
    { title: 'Team Meetings', photos: 10 },
    { title: 'Training Sessions', photos: 14 },
    { title: 'Fundraising Events', photos: 11 },
  ]

  return (
    <>
      <HeroSection title={t.title} subtitle={t.subtitle} />
      <Section>
        <Container>
          <SectionTitle title={language === 'en' ? 'Our Albums' : 'ألبوماتنا'} />
          <Grid cols={3}>
            {albums.map((album, idx) => (
              <div key={idx} className="relative group cursor-pointer overflow-hidden rounded-lg">
                <div className="h-48 bg-gradient-to-br from-primary to-secondary group-hover:scale-105 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all flex items-end p-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{album.title}</h3>
                    <p className="text-gray-300 text-sm">{album.photos} photos</p>
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

export default PhotoAlbums

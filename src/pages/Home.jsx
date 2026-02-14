import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Heart, Users, BookOpen, Award, Zap, Globe } from 'lucide-react'
import { SectionTitle, Container, Card, Button, Grid, Section, Badge } from '../components/Common'
import { newsAPI, statisticsAPI, partnersAPI } from '../services/api'

const SLIDER_INTERVAL_MS = 3000
const SLIDE_COUNT = 5

const Home = () => {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  const [activeSlide, setActiveSlide] = useState(0)

  const goToSlide = useCallback((index) => {
    setActiveSlide((i) => (typeof index === 'number' ? (index + SLIDE_COUNT) % SLIDE_COUNT : (i + 1) % SLIDE_COUNT))
  }, [])

  useEffect(() => {
    const timer = setInterval(() => goToSlide(activeSlide + 1), SLIDER_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [activeSlide, goToSlide])

  const slides = Array.from({ length: SLIDE_COUNT }, (_, i) => i + 1).map((n) => ({
    title: t(`home.slider_title_${n}`),
    subtitle: t(`home.slider_subtitle_${n}`),
    desc: t(`home.slider_desc_${n}`),
  }))

  const [stats, setStats] = useState({
    beneficiaries: 1250,
    volunteers: 380,
    projects: 45,
    donations: 2500000
  })
  const [news, setNews] = useState([])
  const [partners, setPartners] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        // Fetch news - API returns { data: { news: [], pagination } }
        const newsRes = await newsAPI.getAllNews({ limit: 3 }).catch(() => ({ data: {} }))
        const newsData = newsRes.data?.data?.news
        setNews(Array.isArray(newsData) ? newsData : [])

        // Fetch statistics - API returns { data: { beneficiaries: {...}, volunteers: {...}, donations: {...} } }
        const statsRes = await statisticsAPI.getStatistics().catch(() => ({ data: {} }))
        const s = statsRes.data?.data
        if (s) {
          setStats({
            beneficiaries: s.beneficiaries?.total_beneficiaries ?? s.beneficiaries ?? 1250,
            volunteers: s.volunteers?.total_volunteers ?? s.volunteers ?? 380,
            projects: s.volunteer_opportunities?.total_opportunities ?? s.news?.total_news ?? 45,
            donations: s.donations?.total_raised ?? s.donations ?? 2500000
          })
        }

        // Fetch partners - API returns { data: { partners: [], count } }
        const partnersRes = await partnersAPI.getAllPartners({ limit: 6 }).catch(() => ({ data: {} }))
        const partnersData = partnersRes.data?.data?.partners
        setPartners(Array.isArray(partnersData) ? partnersData : [])
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const services = [
    {
      title: t('common.volunteering'),
      desc: t('home.service_2_desc', 'Join our team'),
      icon: Users,
      link: '/volunteering'
    },
    {
      title: t('common.donations'),
      desc: t('home.service_1_desc', 'Help us serve'),
      icon: Heart,
      link: '/donate'
    },
    {
      title: t('common.membership'),
      desc: t('home.service_3_desc', 'Join our community'),
      icon: Award,
      link: '/membership'
    },
    {
      title: t('common.beneficiary_services'),
      desc: t('home.service_4_desc', 'Get support'),
      icon: BookOpen,
      link: '/beneficiary-services'
    }
  ]

  const whyChoose = [
    { title: t('home.transparency', 'Transparency'), desc: 'Full transparency in operations', icon: Globe },
    { title: t('home.impact', 'Real Impact'), desc: 'Measurable results and outcomes', icon: Zap },
    { title: t('home.community', 'Community'), desc: 'Built by passionate volunteers', icon: Users }
  ]

  return (
    <>
      {/* Hero Slider - content right side, slides move to right (exit left, enter from right) */}
      <section className="relative h-[85vh] min-h-[200px] max-h-[400px] overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {slides.map((slide, index) =>
            index === activeSlide ? (
              <motion.div
                key={index}
                initial={{ x: '100%', opacity: 0.8 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '-100%', opacity: 0.8 }}
                transition={{ duration: 0, ease: 'easeInOut' }}
                className="absolute inset-0 flex items-center justify-end pr-8 md:pr-16 lg:pr-24 text-center px-6"
                style={{
                  background: 'linear-gradient(90deg, #0E4B33 0%, #0a3525 35%, #1a4d38 60%, #2d3d2e 85%,rgb(74, 72, 40) 100%)',
                }}
              >
                <div className="relative z-10 max-w-2xl ml-auto">
                  <motion.h1
                    key={`title-${index}`}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading drop-shadow-sm"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    key={`subtitle-${index}`}
                    initial={{ opacity: 0, x: 32 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.28, duration: 0.4 }}
                    className="text-xl md:text-2xl lg:text-3xl text-white mb-3 font-body"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.p
                    key={`desc-${index}`}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="text-base md:text-lg text-white/90 max-w-xl ml-auto font-body"
                  >
                    {slide.desc}
                  </motion.p>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>

        {/* Line indicators - one per slide, active line fills over 2s */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 items-center">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveSlide(index)}
              className="flex flex-col items-center gap-1 group"
              aria-label={`Slide ${index + 1}`}
            >
              <div
                className="h-1.5 w-14 md:w-20 rounded-full overflow-hidden bg-white/25 flex"
                style={{ minWidth: '3.5rem' }}
              >
                {index === activeSlide ? (
                  <motion.div
                    key={activeSlide}
                    className="h-full w-full rounded-full bg-white flex-shrink-0"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: SLIDER_INTERVAL_MS / 1000, ease: 'linear' }}
                    style={{ transformOrigin: 'left' }}
                  />
                ) : null}
              </div>
              <span className="text-[10px] text-white/70 group-hover:text-white">
                {index + 1}
              </span>
            </button>
          ))}
        </div>

        {/* Optional prev/next */}
        <button
          type="button"
          onClick={() => goToSlide((activeSlide - 1 + SLIDE_COUNT) % SLIDE_COUNT)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          aria-label="Previous slide"
        >
          <span className="text-2xl font-light">{isArabic ? '›' : '‹'}</span>
        </button>
        <button
          type="button"
          onClick={() => goToSlide(activeSlide + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
          aria-label="Next slide"
        >
          <span className="text-2xl font-light">{isArabic ? '‹' : '›'}</span>
        </button>
      </section>
      {/* Statistics Section */}
      <Section className="bg-red-50">
        <Container>
          <SectionTitle title={t('home.statistics_title')} subtitle={t('home.statistics_subtitle')} />
          <Grid cols={4}>
            {[
              { label: t('home.beneficiaries'), value: stats.beneficiaries.toLocaleString() },
              { label: t('home.volunteers'), value: stats.volunteers.toLocaleString() },
              { label: t('home.partnerships'), value: stats.projects.toLocaleString() },
              { label: t('home.years_experience'), value: '15+' }
            ].map((stat, idx) => (
              <Card key={idx} className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.value}</div>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Welcome Section */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title={t('home.about_section_title')} centered={false} />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {t('home.about_section_text')}
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                {t('common.learn_more')} <ArrowRight size={20} />
              </Link>
            </div>
            <div className="w-full h-96 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl shadow-lg"></div>
          </div>
        </Container>
      </Section>

      
     

      {/* Services Section */}
      <Section>
        <Container>
          <SectionTitle title={t('home.services_title')} subtitle={t('home.services_subtitle')} />
          <Grid cols={4}>
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <Link key={idx} to={service.link}>
                  <Card className="hover:shadow-lg hover:scale-105 transition-all h-full">
                    <Icon size={48} className="text-red-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </Card>
                </Link>
              )
            })}
          </Grid>
        </Container>
      </Section>

      {/* Why Choose Section */}
      <Section className="bg-gray-50">
        <Container>
          <SectionTitle title={t('home.about_title', 'Why Choose Us')} />
          <Grid cols={3}>
            {whyChoose.map((item, idx) => {
              const Icon = item.icon
              return (
                <Card key={idx} className="text-center">
                  <Icon size={48} className="mx-auto text-red-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </Card>
              )
            })}
          </Grid>
        </Container>
      </Section>

      {/* Latest News Section */}
      <Section>
        <Container>
          <div className="flex justify-between items-center mb-12">
            <SectionTitle title={t('home.news_title')} centered={false} />
            <Link to="/news" className="text-red-600 hover:text-red-700 font-bold flex items-center gap-2">
              {t('home.view_all_news')} <ArrowRight size={20} />
            </Link>
          </div>
          {loading ? (
            <div className="text-center py-12"><p className="text-gray-500">{t('common.loading')}</p></div>
          ) : news.length > 0 ? (
            <Grid cols={3}>
              {news.slice(0, 3).map((item, idx) => {
                const title = item[`title_${isArabic ? 'ar' : 'en'}`] || item.title_en || item.title_ar || ''
                const desc = item[`excerpt_${isArabic ? 'ar' : 'en'}`] || item.excerpt_en || item.excerpt_ar || ''
                return (
                  <Link key={item.id || idx} to={`/news/${item.id}`}>
                    <Card className="overflow-hidden hover:shadow-2xl transition-shadow h-full">
                      {item.image && (
                        <div className="h-48 overflow-hidden">
                          <img src={item.image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                        </div>
                      )}
                      <div className="p-4">
                        <Badge variant="primary" className="mb-3">News</Badge>
                        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{title}</h3>
                        <p className="text-gray-600 text-sm line-clamp-2">{desc}</p>
                      </div>
                    </Card>
                  </Link>
                )
              })}
            </Grid>
          ) : (
            <div className="text-center py-12"><p className="text-gray-500">{t('home.no_news')}</p></div>
          )}
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-red-600 to-red-700 text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">{t('home.cta_title')}</h2>
            <p className="text-lg mb-8 text-red-100">{t('home.cta_subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate">
                <Button className="bg-white text-red-600 hover:bg-gray-100">{t('home.cta_donate')}</Button>
              </Link>
              <Link to="/volunteer-register">
                <Button variant="secondary" className="border-white text-white">{t('home.cta_volunteer')}</Button>
              </Link>
              <Link to="/partnership">
                <Button variant="secondary" className="border-white text-white">{t('home.cta_partner')}</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Partners Section */}
      {partners.length > 0 && (
        <Section className="bg-gray-50">
          <Container>
            <SectionTitle title={t('home.partners_title')} subtitle={t('home.partners_subtitle')} />
            <Grid cols={6}>
              {partners.slice(0, 6).map((partner, idx) => {
                const name = partner[`name_${isArabic ? 'ar' : 'en'}`] || partner.name_en || partner.name_ar || ''
                return (
                  <div key={partner.id || idx} className="flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-gray-200">
                    {partner.logo ? (
                      <img src={partner.logo} alt={name} className="max-w-full h-16 object-contain" />
                    ) : (
                      <p className="font-semibold text-gray-700 text-center text-sm">{name}</p>
                    )}
                  </div>
                )
              })}
            </Grid>
          </Container>
        </Section>
      )}
    </>
  )
}

export default Home

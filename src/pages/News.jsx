import React, { useState } from 'react'
import { HeroSection, SectionTitle, Container, Card, Grid, Section, Button } from '../components/Common'
import { Search, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const News = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const translations = {
    en: {
      title: 'News and Events',
      subtitle: 'Follow the latest news, events, and activities',
      search_placeholder: 'Search in news...',
      all: 'All',
      announcement: 'Announcement',
      news: 'News',
      announcements: 'Announcements',
      events: 'Events',
      updates: 'Updates',
      read_more: 'Read More',
      home: 'Home',
    },
    ar: {
      title: 'الأخبار والفعاليات',
      subtitle: 'تابع آخر الأخبار والفعاليات والأنشطة',
      search_placeholder: 'البحث في الأخبار.',
      all: 'الكل',
      announcement: 'إعلان',
      news: 'أخبار',
      announcements: 'الإعلانات',
      events: 'الأحداث',
      updates: 'التحديثات',
      read_more: 'اقرأ المزيد',
      home: 'الرئيسية',
    }
  }

  const [language] = React.useState(() => localStorage.getItem('language') || 'en')
  const t = translations[language]

  const newsItems = [
    { id: 1, title: 'Important Announcement', category: 'announcement', date: '2024-02-14', excerpt: 'We are pleased to announce a new initiative...' },
    { id: 2, title: 'Upcoming Volunteer Event', category: 'news', date: '2024-02-13', excerpt: 'Join us for our upcoming volunteer event...' },
    { id: 3, title: 'Service Expansion Update', category: 'news', date: '2024-02-12', excerpt: 'We are expanding our services to new areas...' },
    { id: 4, title: 'New Partnership', category: 'announcement', date: '2024-02-11', excerpt: 'We are partnering with leading organizations...' },
    { id: 5, title: 'Community Support Program', category: 'news', date: '2024-02-10', excerpt: 'New community support program launched...' },
    { id: 6, title: 'Fundraising Campaign', category: 'news', date: '2024-02-09', excerpt: 'Our latest fundraising campaign results...' },
  ]

  const filteredNews = newsItems.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <HeroSection 
        title={t.title}
        subtitle={t.subtitle}
      />
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
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder={t.search_placeholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary"
                />
                <Search className="absolute left-3 top-3 text-gray-400" size={24} />
              </div>
            </div>

            {/* Categories */}
            <div className="flex gap-3 mt-6 flex-wrap">
              {['all', 'announcement', 'news'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {t[cat] || cat}
                </button>
              ))}
            </div>
          </div>

          {/* News Grid */}
          {filteredNews.length > 0 ? (
            <Grid cols={3}>
              {filteredNews.map(news => (
                <Link key={news.id} to={`/news/${news.id}`}>
                  <Card className="h-full hover:shadow-2xl flex flex-col">
                    <div className="h-48 bg-gradient-to-br from-primary to-secondary rounded-lg mb-4"></div>
                    <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                    <h3 className="text-xl font-bold text-primary mb-2 flex-grow">{news.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{news.excerpt}</p>
                    <div className="flex items-center font-bold transition-all" style={{ color: '#0E4B33' }}>
                      {t.read_more} <ArrowRight size={16} className="ml-2" />
                    </div>
                  </Card>
                </Link>
              ))}
            </Grid>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No news found matching your search.</p>
            </div>
          )}
        </Container>
      </Section>
    </>
  )
}

export default News

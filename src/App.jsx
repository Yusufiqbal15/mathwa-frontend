import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Pages

import About from './pages/About'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'
import Donation from './pages/Donation'
import Contact from './pages/Contact'
import Volunteering from './pages/Volunteering'
import VolunteerOpportunities from './pages/VolunteerOpportunities'
import VolunteerRegistration from './pages/VolunteerRegistration'
import VolunteerApplication from './pages/VolunteerApplication'
import BeneficiaryRegistration from './pages/BeneficiaryRegistration'
import BeneficiaryServices from './pages/BeneficiaryServices'
import Membership from './pages/Membership'
import BoardMembers from './pages/BoardMembers'
import PhotoAlbums from './pages/PhotoAlbums'
import VideoAlbums from './pages/VideoAlbums'
import Partnership from './pages/Partnership'
import AnnualReports from './pages/AnnualReports'
import NotFound from './pages/NotFound'
import Home from './pages/Home'

function App() {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en')

  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'en'
    setLanguage(savedLang)
    i18n.changeLanguage(savedLang)
    document.documentElement.lang = savedLang
    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr'
  }, [])

  const switchLanguage = (lang) => {
    setLanguage(lang)
    i18n.changeLanguage(lang)
    localStorage.setItem('language', lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }

  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar language={language} onLanguageChange={switchLanguage} />
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/donate" element={<Donation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/volunteering" element={<Volunteering />} />
            <Route path="/volunteer-opportunities" element={<VolunteerOpportunities />} />
            <Route path="/volunteer-register" element={<VolunteerRegistration />} />
            <Route path="/volunteer-apply" element={<VolunteerApplication />} />
            <Route path="/beneficiary-register" element={<BeneficiaryRegistration />} />
            <Route path="/beneficiary-services" element={<BeneficiaryServices />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/board-members" element={<BoardMembers />} />
            <Route path="/photo-albums" element={<PhotoAlbums />} />
            <Route path="/video-albums" element={<VideoAlbums />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/annual-reports" element={<AnnualReports />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

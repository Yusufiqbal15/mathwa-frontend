import apiClient from '../utils/axiosConfig'

// News API
export const newsAPI = {
  getAllNews: (params = {}) => apiClient.get('/get_news.php', { params }),
  getNewsById: (id) => apiClient.get(`/get_news.php?id=${id}`),
  createNews: (data) => apiClient.post('/add-news.php', data),
  updateNews: (id, data) => apiClient.put(`/edit-news.php?id=${id}`, data),
  deleteNews: (id) => apiClient.delete(`/delete-news.php?id=${id}`)
}

// Donations API
export const donationsAPI = {
  getAllDonations: (params = {}) => apiClient.get('/get_donations.php', { params }),
  getDonationById: (id) => apiClient.get(`/get_donations.php?id=${id}`),
  createDonation: (data) => apiClient.post('/add-donation.php', data),
  submitDonation: (data) => apiClient.post('/submit-donation.php', data)
}

// Volunteers API
export const volunteersAPI = {
  getOpportunities: (params = {}) => apiClient.get('/get_volunteer_opportunities.php', { params }),
  getOpportunityById: (id) => apiClient.get(`/get_volunteer_opportunities.php?id=${id}`),
  registerVolunteer: (data) => apiClient.post('/volunteer-register.php', data),
  applyForOpportunity: (data) => apiClient.post('/volunteer-apply.php', data)
}

// Testimonials API
export const testimonialsAPI = {
  getAllTestimonials: (params = {}) => apiClient.get('/get_testimonials.php', { params }),
  submitTestimonial: (data) => apiClient.post('/submit-testimonial.php', data)
}

// Statistics API
export const statisticsAPI = {
  getStatistics: () => apiClient.get('/get_statistics.php')
}

// Partners API
export const partnersAPI = {
  getAllPartners: (params = {}) => apiClient.get('/get_partners.php', { params })
}

// Popups API
export const popupsAPI = {
  getActivePopups: () => apiClient.get('/get_active_popups.php'),
  recordPopupView: (id) => apiClient.post('/record_popup_view.php', { popup_id: id }),
  recordPopupClick: (id) => apiClient.post('/record_popup_click.php', { popup_id: id })
}

// Instagram Posts API
export const instagramAPI = {
  getPosts: (params = {}) => apiClient.get('/get_instagram_posts.php', { params })
}

// Annual Reports API
export const reportsAPI = {
  getAllReports: (params = {}) => apiClient.get('/get_annual_reports.php', { params })
}

// Contact/Messages API
export const contactAPI = {
  sendMessage: (data) => apiClient.post('/submit-message.php', data),
  sendTestimonial: (data) => apiClient.post('/submit-testimonial.php', data)
}

export default {
  newsAPI,
  donationsAPI,
  volunteersAPI,
  testimonialsAPI,
  statisticsAPI,
  partnersAPI,
  popupsAPI,
  instagramAPI,
  reportsAPI,
  contactAPI
}

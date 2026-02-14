import axios from 'axios'

const API_BASE_URL = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_URL) || '/api'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add request interceptor
apiClient.interceptors.request.use(
  (config) => {
    try {
      const token = typeof localStorage !== 'undefined' ? localStorage.getItem('authToken') : null
      if (token) config.headers.Authorization = `Bearer ${token}`
    } catch (_) {}
    return config
  },
  (error) => Promise.reject(error)
)

// Add response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      try { localStorage.removeItem('authToken') } catch (_) {}
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default apiClient

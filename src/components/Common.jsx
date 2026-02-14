import React from 'react'

export const HeroSection = ({ title, subtitle, backgroundImage }) => {
  return (
    <div
      className="relative h-96 flex items-center justify-center text-center text-white hero-gradient"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 container-custom">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">{title}</h1>
        <p className="text-lg md:text-xl text-gray-200 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          {subtitle}
        </p>
      </div>
    </div>
  )
}

export const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}

export const Container = ({ children, className = '' }) => {
  return (
    <div className={`container-custom ${className}`}>
      {children}
    </div>
  )
}

export const Section = ({ children, className = '', bg = 'white' }) => {
  const bgClass = bg === 'gray' ? 'bg-gray-50' : 'bg-white'
  return (
    <section className={`py-16 md:py-24 ${bgClass} ${className}`}>
      {children}
    </section>
  )
}

export const Card = ({ children, className = '', onClick }) => {
  return (
    <div onClick={onClick} className={`card ${onClick ? 'cursor-pointer' : ''} ${className}`}>
      {children}
    </div>
  )
}

export const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseClass = 'font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2'
  const variantClass = {
    primary: 'bg-primary text-white hover:bg-opacity-90',
    secondary: 'bg-secondary text-white hover:bg-opacity-90',
    accent: 'bg-accent text-white hover:bg-opacity-90',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  }[variant]
  
  const sizeClass = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }[size]

  return (
    <button className={`${baseClass} ${variantClass} ${sizeClass} ${className}`} {...props}>
      {children}
    </button>
  )
}

export const Badge = ({ children, variant = 'primary', className = '' }) => {
  const variantClass = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    accent: 'bg-accent text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-white',
    danger: 'bg-red-500 text-white',
  }[variant]

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${variantClass} ${className}`}>
      {children}
    </span>
  )
}

export const Grid = ({ children, cols = 3, className = '' }) => {
  const colClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
  }[cols] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'

  return (
    <div className={`grid ${colClass} gap-8 ${className}`}>
      {children}
    </div>
  )
}

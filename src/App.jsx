import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import StickyMobileBar from './components/StickyMobileBar'
import { siteConfig } from './data/site'
import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetailPage'

function App() {
  const location = useLocation()

  useEffect(() => {
    document.title = siteConfig.seo.title

    let descriptionTag = document.querySelector('meta[name="description"]')
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.setAttribute('name', 'description')
      document.head.appendChild(descriptionTag)
    }

    descriptionTag.setAttribute('content', siteConfig.seo.description)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/san-pham/:slug" element={<ProductDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <StickyMobileBar />
    </>
  )
}

export default App

import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import StickyMobileBar from './components/StickyMobileBar'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ProductDetailPage from './pages/ProductDetailPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/san-pham/:slug" element={<ProductDetailPage />} />
        <Route path="/khong-tim-thay" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/khong-tim-thay" replace />} />
      </Routes>
      <StickyMobileBar />
    </>
  )
}

export default App

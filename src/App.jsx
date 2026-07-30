import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import MobileActionBar from './components/MobileActionBar'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'
import IndustryPage from './pages/IndustryPage'
import ComparisonPage from './pages/ComparisonPage'
import NotFound from './pages/NotFound'
import { INDUSTRIES } from './data/industries'
import { COMPARISON_LIST } from './data/comparisons'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/zoho-crm-for-real-estate" element={<IndustryPage data={INDUSTRIES['real-estate']} />} />
        <Route path="/zoho-crm-for-jewellery" element={<IndustryPage data={INDUSTRIES.jewellery} />} />
        {COMPARISON_LIST.map((comparison) => (
          <Route
            key={comparison.slug}
            path={`/${comparison.slug}`}
            element={<ComparisonPage data={comparison} />}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
      <MobileActionBar />
    </div>
  )
}

export default App

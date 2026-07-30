import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'

export default function NotFound() {
  return (
    <>
      <SEOHead title="Page Not Found" description="The page you're looking for doesn't exist or may have moved." path="/404" />
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 text-center">
        <p className="font-display text-6xl font-extrabold text-brand-950">404</p>
        <h1 className="mt-4 font-display text-xl font-bold text-brand-950">Page not found</h1>
        <p className="mt-2 max-w-sm text-sm text-brand-950/60">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Link to="/" className="mt-6 rounded-full bg-brand-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-800">
          Back to Home
        </Link>
      </main>
    </>
  )
}

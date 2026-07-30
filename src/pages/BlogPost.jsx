import { useParams, Link, Navigate } from 'react-router-dom'
import { POSTS, formatDate } from '../data/posts'
import { COMPARISON_LIST } from '../data/comparisons'
import { CONTACT } from '../data/content'
import PostContent from '../components/blog/PostContent'
import BlogPostSchema from '../components/blog/BlogPostSchema'
import SEOHead from '../components/SEOHead'
import { Icon } from '../components/Icons'
import ComparisonPage from './ComparisonPage'

export default function BlogPost() {
  const { slug } = useParams()
  const post = POSTS.find((p) => p.slug === slug)

  if (!post) {
    const comparison = COMPARISON_LIST.find((c) => c.slug === slug)
    if (comparison) return <ComparisonPage data={comparison} />
    return <Navigate to="/blog" replace />
  }

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <>
      <SEOHead title={post.title} description={post.excerpt} path={`/blog/${post.slug}`} />
      <BlogPostSchema post={post} />

      <main className="pt-28 pb-20 sm:pt-32 sm:pb-28">
        <article className="container-app max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900">
            <Icon name="arrow-right" className="h-4 w-4 rotate-180" />
            Back to Blog
          </Link>

          <span className="mt-6 inline-block rounded-full bg-accent-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-600">
            {post.category}
          </span>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-brand-950 sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-brand-950/50">
            <span>ZohoGeeks Team</span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <div className="mt-10 border-t border-brand-100 pt-10">
            <PostContent blocks={post.content} />
          </div>

          <div className="mt-14 rounded-3xl bg-brand-950 p-8 sm:p-10">
            <h3 className="font-display text-xl font-bold text-white">Want this done for your business?</h3>
            <p className="mt-2 text-sm text-white/60">
              Talk to us for a free discovery call — no obligation, no sales pressure.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-accent-500/30 transition hover:brightness-110"
              >
                Get Free Consultation
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <Icon name="whatsapp" className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h3 className="font-display text-lg font-bold text-brand-950">More from the blog</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="rounded-2xl border border-brand-100 p-5 transition hover:border-brand-200 hover:shadow-sm"
                  >
                    <p className="font-display text-sm font-bold text-brand-950">{p.title}</p>
                    <p className="mt-1.5 text-xs text-brand-950/50">
                      {formatDate(p.date)} · {p.readTime}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
    </>
  )
}

import { Link } from 'react-router-dom'
import { formatDate } from '../../data/posts'

export default function PostCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/5"
    >
      <span className="w-fit rounded-full bg-accent-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-600">
        {post.category}
      </span>
      <h3 className="mt-4 font-display text-lg font-bold text-brand-950 transition-colors group-hover:text-brand-700">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-950/60">{post.excerpt}</p>
      <div className="mt-5 flex items-center justify-between border-t border-brand-100 pt-4 text-xs font-medium text-brand-950/40">
        <span>{formatDate(post.date)}</span>
        <span>{post.readTime}</span>
      </div>
    </Link>
  )
}

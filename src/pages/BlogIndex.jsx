import { POSTS } from '../data/posts'
import PostCard from '../components/blog/PostCard'
import SEOHead from '../components/SEOHead'
import { SectionHeading } from '../components/Services'

export default function BlogIndex() {
  return (
    <>
      <SEOHead
        title="Blog"
        description="Practical, no-fluff guides on Zoho CRM, Zoho Books GST setup, migrations and automation from the ZohoGeeks team."
        path="/blog"
      />
      <main className="pt-28 pb-20 sm:pt-32 sm:pb-28">
        <div className="container-app">
          <SectionHeading
            eyebrow="Blog"
            title="Zoho, explained without the jargon"
            desc="Practical guides on implementation, GST setup, migrations and automation — written from real project experience, not marketing copy."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

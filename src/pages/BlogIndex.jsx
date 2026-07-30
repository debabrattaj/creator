import { POSTS } from '../data/posts'
import { COMPARISON_LIST } from '../data/comparisons'
import PostCard from '../components/blog/PostCard'
import SEOHead from '../components/SEOHead'
import { SectionHeading } from '../components/Services'

export default function BlogIndex() {
  const comparisonCards = COMPARISON_LIST.map((c) => ({
    slug: c.slug,
    title: c.metaTitle,
    excerpt: c.metaDescription,
    category: 'Comparison',
    date: c.date,
    readTime: c.readTime,
  }))

  return (
    <>
      <SEOHead
        title="Blog"
        description="Practical, no-fluff guides and honest Zoho CRM comparisons — GST setup, migrations, automation and how Zoho stacks up against Salesforce, HubSpot and more."
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

          <div className="mt-20">
            <SectionHeading
              eyebrow="Comparisons"
              title="Zoho CRM vs. everything else"
              desc="Honest, no-hype comparisons to help you decide — not just a Zoho sales pitch."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {comparisonCards.map((card) => (
                <PostCard key={card.slug} post={card} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

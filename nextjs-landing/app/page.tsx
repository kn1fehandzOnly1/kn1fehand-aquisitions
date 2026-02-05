// Next.js Landing Page Template
// Built with Next.js 14, React, TypeScript, and Tailwind CSS
// Dependencies: next@14.0.0, react@^18, react-dom@^18, tailwindcss@^3.3.0

'use client'

import { useState } from 'react'

export default function Home() {
  const [billing, setBilling] = useState('yearly')
  const [navOpen, setNavOpen] = useState(false)

  const renderPrices = () => {
    // Since prices are fixed now, no need to change
  }

  const sendEmail = async (event: React.FormEvent) => {
    event.preventDefault()
    const emailInput = document.getElementById('email') as HTMLInputElement
    const email = emailInput.value

    if (!email) {
      alert('Please enter your email.')
      return
    }

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'noreply@christophergray.com',
          to: email,
          subject: 'Thank you for your interest!',
          html: '<p>Hi there,<br><br>Thank you for signing up. We\'ll be in touch soon!<br><br>Best,<br>Christopher Gray</p>'
        })
      })

      if (response.ok) {
        alert('Thank you! Check your email for confirmation.')
        emailInput.value = ''
      } else {
        const error = await response.json()
        alert('Error sending email: ' + error.message)
      }
    } catch (error) {
      alert('Network error. Please try again later.')
    }
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      {/* Background decor */}
      <div className="bg-blobs" aria-hidden="true">
        <div className="blob blob-a"></div>
        <div className="blob blob-b"></div>
        <div className="blob blob-c"></div>
      </div>

      {/* NAV */}
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#">
            <span className="brand-mark" aria-hidden="true"></span>
            <span className="brand-name">Christopher Gray</span>
          </a>

          <button className="nav-toggle" type="button" aria-expanded={navOpen} aria-controls="nav-menu" onClick={() => setNavOpen(!navOpen)}>
            <span className="sr-only">Open menu</span>
            <span aria-hidden="true">☰</span>
          </button>

          <nav id="nav-menu" className={`nav-menu ${navOpen ? 'is-open' : ''}`} aria-label="Primary">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a className="btn btn-primary" href="#cta">Get started</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main id="main">
        <section className="section hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Launch faster • Convert better</p>

              <h1>
                A landing page starter that doesn’t fight you
              </h1>

              <p className="lead">
                Drop in your copy, plug in your product screenshots, and ship. Built with design tokens,
                responsive layout, and sensible defaults.
              </p>

              <div className="hero-cta">
                <a className="btn btn-primary" href="#cta">Start free</a>
                <a className="btn btn-ghost" href="#features">See features</a>
              </div>

              <ul className="hero-bullets" role="list">
                <li>✅ Mobile-first layout</li>
                <li>✅ Accessible components</li>
                <li>✅ Fast to customize</li>
              </ul>
            </div>

            <div className="hero-card" role="img" aria-label="Product preview placeholder">
              <div className="mock-top">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                <span className="mock-url">yourbrand.com</span>
              </div>
              <div className="mock-body">
                <div className="mock-kpi">
                  <div className="kpi">
                    <div className="kpi-label">Signups</div>
                    <div className="kpi-value">1,284</div>
                  </div>
                  <div className="kpi">
                    <div className="kpi-label">Conversion</div>
                    <div className="kpi-value">4.9%</div>
                  </div>
                </div>
                <div className="mock-chart" aria-hidden="true"></div>
                <div className="mock-row">
                  <div className="pill">Auto-layout</div>
                  <div className="pill">Tokens</div>
                  <div className="pill">CTA-ready</div>
                </div>
              </div>
            </div>
          </div>

          <div className="container logo-cloud" aria-label="Trusted by">
            <span className="muted">Trusted by teams who like shipping</span>
            <div className="logos" aria-hidden="true">
              <span className="logo">Northwind</span>
              <span className="logo">Acme</span>
              <span className="logo">Stark</span>
              <span className="logo">Umbrella</span>
              <span className="logo">Wayne</span>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="section">
          <div className="container">
            <div className="section-head">
              <h2>Features that cover the 80/20</h2>
              <p className="muted">
                This is the stuff most landing pages need: clarity, proof, and a clean conversion path.
              </p>
            </div>

            <div className="grid3">
              <article className="card">
                <h3>Design tokens</h3>
                <p className="muted">
                  Update colors, spacing, radius, and shadows in one place. Everything adapts.
                </p>
              </article>

              <article className="card">
                <h3>Conversion layout</h3>
                <p className="muted">
                  Hero → proof → benefits → pricing → FAQ → CTA. No weird detours.
                </p>
              </article>

              <article className="card">
                <h3>Accessible by default</h3>
                <p className="muted">
                  Skip link, semantic sections, focus styles, keyboard-friendly nav, and &lt;details&gt; FAQ.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="section alt">
          <div className="container">
            <div className="section-head">
              <h2>How it works</h2>
              <p className="muted">Three steps. No ceremonies. Minimal suffering.</p>
            </div>

            <ol className="steps">
              <li className="step">
                <div className="step-num">1</div>
                <div>
                  <h3>Paste your copy</h3>
                  <p className="muted">Swap the headline, subhead, and CTAs to match your product.</p>
                </div>
              </li>
              <li className="step">
                <div className="step-num">2</div>
                <div>
                  <h3>Drop in visuals</h3>
                  <p className="muted">Replace the mock card with a screenshot/video/illustration.</p>
                </div>
              </li>
              <li className="step">
                <div className="step-num">3</div>
                <div>
                  <h3>Ship</h3>
                  <p className="muted">Deploy anywhere. This is just static files.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section">
          <div className="container">
            <div className="section-head">
              <h2>People saying nice things</h2>
              <p className="muted">Swap these for real testimonials when you have them.</p>
            </div>

            <div className="grid3">
              <figure className="card quote">
                <blockquote>
                  "We replaced our messy page with this structure and conversions jumped immediately."
                </blockquote>
                <figcaption className="muted">— Alex, Product</figcaption>
              </figure>

              <figure className="card quote">
                <blockquote>
                  "The token system is the difference between 'quick edit' and 'CSS archaeology.'"
                </blockquote>
                <figcaption className="muted">— Sam, Engineer</figcaption>
              </figure>

              <figure className="card quote">
                <blockquote>
                  "It's boring in the best way. Everything is where users expect it."
                </blockquote>
                <figcaption className="muted">— Jo, Growth</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="section alt">
          <div className="container">
            <div className="section-head">
              <h2>Pricing</h2>
              <p className="muted">Simple tiers. Edit freely. No pricing police here.</p>

              <div className="toggle" role="group" aria-label="Billing period">
                <button className={`toggle-btn ${billing === 'monthly' ? 'is-active' : ''}`} type="button" onClick={() => setBilling('monthly')}>Monthly</button>
                <button className={`toggle-btn ${billing === 'yearly' ? 'is-active' : ''}`} type="button" onClick={() => setBilling('yearly')}>Yearly <span className="badge">-20%</span></button>
              </div>
            </div>

            <div className="grid3">
              <article className="card price">
                <h3>Starter</h3>
                <p className="muted">For trying it out.</p>
                <div className="price-line">
                  <span className="price-val">$0</span>
                  <span className="muted">/ mo</span>
                </div>
                <ul className="list" role="list">
                  <li>Basic sections</li>
                  <li>Responsive layout</li>
                  <li>FAQ + CTA</li>
                </ul>
                <a className="btn btn-ghost" href="#cta">Try it</a>
              </article>

              <article className="card price featured">
                <div className="tag">Most popular</div>
                <h3>Pro</h3>
                <p className="muted">Unlimited maintenance.</p>
                <div className="price-line">
                  <span className="price-val">$150</span>
                  <span className="muted">initial + $25/mo</span>
                </div>
                <ul className="list" role="list">
                  <li>Everything in Starter</li>
                  <li>Polished sections</li>
                  <li>Great for MVPs</li>
                </ul>
                <a className="btn btn-primary" href="#cta">Get Pro</a>
              </article>

              <article className="card price">
                <h3>Business</h3>
                <p className="muted">Up to 5 extra pages and unlimited maintenance.</p>
                <div className="price-line">
                  <span className="price-val">$300</span>
                  <span className="muted">starting + $60/mo</span>
                </div>
                <ul className="list" role="list">
                  <li>Everything in Pro</li>
                  <li>Extra sections</li>
                  <li>Priority support</li>
                </ul>
                <a className="btn btn-ghost" href="#cta">Talk to sales</a>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section">
          <div className="container">
            <div className="section-head">
              <h2>FAQ</h2>
              <p className="muted">Using &lt;details&gt; means it works even with JS off.</p>
            </div>

            <div className="faq">
              <details className="faq-item">
                <summary>Can I use this in React / Next.js?</summary>
                <p className="muted">Yep. Copy the sections into components and keep the tokens in a global CSS file.</p>
              </details>

              <details className="faq-item">
                <summary>Is this optimized for performance?</summary>
                <p className="muted">It's static + minimal JS. Biggest wins will come from compressing your images.</p>
              </details>

              <details className="faq-item">
                <summary>How do I match my existing brand?</summary>
                <p className="muted">Edit the CSS variables in :root. That's the whole trick.</p>
              </details>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="cta" className="section cta">
          <div className="container cta-inner">
            <div>
              <h2>Ready to launch?</h2>
              <p className="muted">Replace this CTA block with your signup form or links.</p>
            </div>

            <form className="cta-form" onSubmit={sendEmail}>
              <label className="sr-only" htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@domain.com" autoComplete="email" />
              <button className="btn btn-primary" type="submit">Notify me</button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="brand footer-brand">
              <span className="brand-mark" aria-hidden="true"></span>
              <span className="brand-name">Christopher Gray</span>
            </div>
            <p className="muted">© {new Date().getFullYear()} Christopher Gray. All rights reserved.</p>
          </div>

          <div className="footer-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </>
  )
}
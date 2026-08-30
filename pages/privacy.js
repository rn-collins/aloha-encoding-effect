import Head from 'next/head'
const U='https://aloha-encoding-effect.vercel.app'
export default function Privacy(){return <><Head>
 <title>Privacy — The Encoding Effect</title>
 <meta name="description" content="What this site does with information: ratings stay in the open browser tab, no cookies are set, no form is embedded, and measurement is limited to cookieless page views and Core Web Vitals."/>
 <meta name="robots" content="index, follow"/>
 <link rel="canonical" href={U+'/privacy'}/>
 <meta property="og:title" content="Privacy — The Encoding Effect"/>
 <meta property="og:description" content="No cookies, no form, no stored ratings. What the site processes, and what it does not."/>
 <meta property="og:type" content="article"/>
 <meta property="og:url" content={U+'/privacy'}/>
 <meta property="og:image" content={U+'/og.png'}/>
 <meta property="og:image:width" content="1200"/>
 <meta property="og:image:height" content="630"/>
 <meta property="og:image:alt" content="The Encoding Effect — an interactive research note on how aesthetic worlds may move from screen to self."/>
 <meta name="twitter:card" content="summary_large_image"/>
 <meta name="twitter:image" content={U+'/og.png'}/>
</Head><main><a href="/">← Interactive note</a><h1>Privacy</h1>
<p><strong>Reviewed:</strong> 18 August 2026</p>
<p className="lead">This note describes what the site does with information. It is short because the site does little: there is no account, no form, no cookie, and no database behind it.</p>

<h2>The interactive canvas</h2>
<p>The four ratings you set on the hypothesis canvas live in the page’s own memory in the open tab. They are never written to local storage, never attached to an identifier, and never sent anywhere. Closing or refreshing the tab returns every dimension to its starting value. The prompt total and the interpretation line beneath it are computed in the page as you click, which means the canvas works identically with a network connection or without one. I never see which screen world you had in mind or what total you produced.</p>

<h2>Contact</h2>
<p>The site links to email and LinkedIn rather than embedding a form, so nothing you write passes through this domain on its way to me. Mail reaches a Northeastern University mailbox and is governed by that provider’s terms and retention schedule. Please keep confidential, privileged, health, student-record, and client information out of those channels.</p>

<h2>Hosting and measurement</h2>
<p>The site is hosted on Vercel. Ordinary request data — IP address, user agent, requested path, and timestamp — is processed to serve the page, secure it, and keep it available. Two first-party scripts load from this domain: Vercel Web Analytics, which counts page views without cookies and without following visitors between sites, and Vercel Speed Insights, which reports Core Web Vitals such as loading and interaction timing. Both give me aggregate numbers. Neither is configured with a user identifier, and neither builds a profile of an individual reader.</p>
<p>Every response carries a Content-Security-Policy that confines the page to its own origin, with a single exception for performance measurements posted to <code>vitals.vercel-insights.com</code>. Scripts, styles, fonts, and images all resolve to this domain, so opening the page contacts no advertising network, font host, tag manager, or social platform.</p>

<h2>Cookies</h2>
<p>This site sets no cookies. There is nothing to accept or dismiss, which is why you were not shown a consent banner.</p>

<h2>Following a link away</h2>
<p>Citations in the evidence ledger point to <code>doi.org</code>, which redirects to the publisher holding each paper, and the footer links to LinkedIn. Once you follow one, that destination’s own policy applies. The site sends a Referrer-Policy of <code>strict-origin-when-cross-origin</code>, so those destinations learn that a visitor came from this origin without receiving the full path.</p>

<h2>Access, correction, and deletion</h2>
<p>Because the site stores nothing about you, there is no record to export, amend, or erase. Requests of that kind, and corrections to the research note itself, go to <a href="mailto:collins.ra@northeastern.edu">collins.ra@northeastern.edu</a>.</p>

<h2>Changes to this notice</h2>
<p>Any material change to what the site processes updates the reviewed date at the top of this page, so the date is a reliable indicator of when these statements were last checked against the deployed build.</p>
</main><style jsx>{`main{width:min(720px,calc(100% - 40px));margin:60px auto 100px;line-height:1.75}h1{font:500 44px Georgia,serif}h2{font:500 26px Georgia,serif;margin:38px 0 10px}.lead{font-family:Georgia,serif;font-size:20px;line-height:1.7}code{background:#EFEBE3;border-radius:4px;padding:1px 5px;font-size:14px}a{color:#8A6020}`}</style></>}

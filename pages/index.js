import Head from 'next/head'
import { useState } from 'react'
import InquiryModal from '../components/InquiryModal';

const AM='#B8842A',AMB='#FAF0E0',AMD='#8A6020',BG='#F6F3EC',TX='#1C1B1F',MU='#5A5857',BD='#E2DDD6',G='#1B7A68',GL='#E8F5F2'

export default function EncodingEffect(){
  const [inquiryOpen,setInquiryOpen]=useState(false)
  return(<>
    <Head>
      <title>The Encoding Effect — RN Collins</title>
      <meta name="description" content="How Aesthetic Worlds Move from Screen to Self"/><meta name="viewport" content="width=device-width,initial-scale=1"/><link rel="canonical" href="https://aloha-encoding-effect.vercel.app"/><meta property="og:type" content="article"/><meta property="og:title" content="The Encoding Effect - RN Collins"/><meta property="og:description" content="A neuroscientific framework for why certain screen worlds become identity, not just trend."/><meta property="og:url" content="https://aloha-encoding-effect.vercel.app"/><meta property="og:site_name" content="Aloha AI Consulting"/><meta name="twitter:card" content="summary"/><meta name="twitter:title" content="The Encoding Effect - RN Collins"/><meta name="twitter:description" content="A neuroscientific framework for why certain screen worlds become identity, not just trend."/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Syne:wght@400;500;600;700&family=Manrope:wght@400;500&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet"/>      <link rel="sitemap" type="application/xml" href="/sitemap.xml"/>
      <meta name="robots" content="index, follow"/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {'@type':'Person','@id':'https://rn-portfolio-khaki.vercel.app/#rn-collins',
           'name':'RN Collins','jobTitle':'AI Educator & Consultant',
           'url':'https://rn-portfolio-khaki.vercel.app',
           'sameAs':['https://linkedin.com/in/rn-collins']},
          {'@type':'WebPage','name':'Aloha Encoding Effect — RN Collins',
           'url':'https://aloha-encoding-effect.vercel.app',
           'author':{'@id':'https://rn-portfolio-khaki.vercel.app/#rn-collins'}}
        ]
      })}} />

    </Head><style>{`@media(max-width:600px){.enc-main{padding:48px 20px 80px !important}.enc-case{padding:20px 18px !important}.enc-collab{padding:30px 22px !important}.enc-footer{padding:20px 24px !important}.enc-h1{font-size:36px !important}.enc-h2{font-size:24px !important}}`}</style>
    
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',background:BG}}>
      <div style={{background:AM,height:4}}/>
      <main className='enc-main' style={{flex:1,maxWidth:720,margin:'0 auto',padding:'80px 48px 120px',width:'100%'}}>

        {/* Masthead */}
        <div style={{marginBottom:64}}>
          <div style={{fontFamily:'Syne',fontSize:11,fontWeight:600,letterSpacing:'0.12em',textTransform:'uppercase',color:AM,marginBottom:16}}>Research note &nbsp;·&nbsp; RN Collins &nbsp;·&nbsp; June 2026</div>
          <h1 className='enc-h1' style={{fontFamily:'Cormorant Garamond',fontSize:50,fontWeight:500,lineHeight:1.1,color:TX,marginBottom:14}}>The Encoding Effect</h1>
          <p style={{fontFamily:'Cormorant Garamond',fontSize:22,fontStyle:'italic',color:MU,marginBottom:32,lineHeight:1.4}}>How Aesthetic Worlds Move from Screen to Self</p>
          <div style={{display:'flex',alignItems:'center',gap:16,paddingTop:28,borderTop:`1px solid ${BD}`}}>
            <div aria-hidden='true' style={{width:36,height:36,borderRadius:'50%',background:AM,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Syne',fontSize:11,fontWeight:600,color:'white',flexShrink:0}}>RN</div>
            <div style={{fontSize:13,color:MU}}>
              <strong style={{color:TX,fontWeight:500,display:'block',fontSize:14}}>RN Collins</strong>
              Neuroscientist (Harvard Business School, BU School of Medicine) &nbsp;·&nbsp; JD Candidate, Northeastern University School of Law
            </div>
          </div>
        </div>

        {/* Opening */}
        <div style={{fontFamily:'Cormorant Garamond',fontSize:23,fontStyle:'italic',lineHeight:1.6,color:TX,marginBottom:48,padding:'32px 36px',background:'white',borderRadius:4,borderLeft:`3px solid ${AM}`}}>
          The thesis that screen culture drives real-world style, taste, and identity is correct. But there's a neuroscientific mechanism underneath it that hasn't been named yet. This note names it.
        </div>

        {/* Section 1 */}
        <div style={{marginBottom:56}}>
          <div style={{fontFamily:'Syne',fontSize:10,fontWeight:600,letterSpacing:'0.15em',textTransform:'uppercase',color:AM,marginBottom:8}}>The core question</div>
          <h2 className='enc-h2' style={{fontFamily:'Cormorant Garamond',fontSize:30,fontWeight:500,color:TX,marginBottom:20,lineHeight:1.25}}>Why do some screen worlds become identity, while others just become trends?</h2>
          <p style={{fontFamily:'Manrope',fontSize:16,color:TX,lineHeight:1.85,marginBottom:20}}>Not everything that reaches audiences sticks. Most shows generate viewership and nothing else — people watch, enjoy, move on. A much smaller number of shows do something different. They hand audiences a complete aesthetic world, and audiences step into it and don't entirely step back out. They change how people dress, travel, shop, decorate. They create not just demand for objects, but demand for a way of being.</p>
          <p style={{fontFamily:'Manrope',fontSize:16,color:TX,lineHeight:1.85,marginBottom:20}}>The question isn't what makes something popular. It's what makes something identity-forming. And the answer sits in neuroscience that hasn't been applied to screen culture analysis yet.</p>
          <p style={{fontFamily:'Manrope',fontSize:16,color:TX,lineHeight:1.85}}>The mechanism is encoding. Not opinion, not preference, not taste — encoding. The difference is that encoded experiences form durable neurological structures, while preferences remain labile. When a show creates an encoded aesthetic world, the audience isn't following a trend — they're expressing a self-concept. That's why the Bridgerton effect generates £275 million in economic activity rather than a Pinterest board.</p>
        </div>

        <div style={{borderTop:`1px solid ${BD}`,margin:'48px 0'}}/>

        {/* Section 2 */}
        <div style={{marginBottom:56}}>
          <div style={{fontFamily:'Syne',fontSize:10,fontWeight:600,letterSpacing:'0.15em',textTransform:'uppercase',color:AM,marginBottom:8}}>The mechanism</div>
          <h2 style={{fontFamily:'Cormorant Garamond',fontSize:30,fontWeight:500,color:TX,marginBottom:20,lineHeight:1.25}}>Three neurological processes behind screen world encoding</h2>
          {[
            {title:'Parasocial identity formation',body:'Extended engagement with fictional characters creates genuine neurological bonds — the same brain networks activated in real relationships activate in response to characters we\'ve spent hours with. When those characters have strong, consistent aesthetic identities, that aesthetic becomes part of the parasocial bond. Separating from Maddy Perez\'s visual identity feels, neurologically, like separating from Maddy Perez.'},
            {title:'Mirror neuron activation during aspirational viewing',body:'When audiences watch characters inhabit spaces, wear clothes, and perform gestures that carry aspirational valence, the motor simulation system fires. The brain rehearses being that person. This is why certain costume choices don\'t just inspire copying. They inspire embodiment.'},
            {title:'Emotional memory encoding',body:'The limbic system tags experiences with emotional valence, and those tags determine which experiences move into long-term memory. A show that consistently delivers specific felt states — elegance, romance, belonging, wildness, nostalgia — encodes those states alongside the aesthetic that triggered them. Every subsequent encounter with that aesthetic reactivates the memory and the feeling simultaneously. The purchase is, literally, the experience.'}
          ].map((item,i)=>(<div key={i} style={{marginBottom:24,paddingLeft:20,borderLeft:`2px solid ${AMB}`}}>
            <div style={{fontFamily:'Syne',fontSize:14,fontWeight:600,color:TX,marginBottom:8}}>{item.title}</div>
            <p style={{fontFamily:'Manrope',fontSize:15,color:TX,lineHeight:1.8,margin:0}}>{item.body}</p>
          </div>))}
        </div>

        <div style={{borderTop:`1px solid ${BD}`,margin:'48px 0'}}/>

        {/* Section 3 - Case studies */}
        <div style={{marginBottom:56}}>
          <div style={{fontFamily:'Syne',fontSize:10,fontWeight:600,letterSpacing:'0.15em',textTransform:'uppercase',color:AM,marginBottom:8}}>Four case studies</div>
          <h2 style={{fontFamily:'Cormorant Garamond',fontSize:30,fontWeight:500,color:TX,marginBottom:28,lineHeight:1.25}}>The mechanism in action</h2>
          {[
            {n:'01',title:'Michael Jackson biopic — Gen Z aesthetic resurgence',signal:'102M monthly Spotify listeners post-biopic. 82% of post-biopic Spotify listeners are under 35 (Chartmetric, May 2026).',mechanism:'Retroactive Identity Encoding',body:'Gen Z adopting the aesthetic of a figure who died before most of them were teenagers represents a neurologically distinct behavior from trend-following. The film provides a coherent aesthetic world with an extraordinarily strong emotional signature, and audiences encode that aesthetic as a genuine self-concept, not a borrowed reference. They didn\'t live the original; the film is giving them the original for the first time. The encoding is durable because the emotional valence is felt, not performed.',tag:'Retroactive encoding · Nostalgia-adjacent affect'},
            {n:'02',title:'Bridgerton universe — brand ecosystem as identity infrastructure',signal:'£275M+ added to the UK economy. 52 brand partners across Season 4 (Netflix, March 2026). Netflix mobilizing the full ensemble cast across all channels.',mechanism:'Aesthetic World Encoding',body:'Bridgerton doesn\'t operate as a show — it operates as a felt world with multiple entry points. The aesthetic is coherent enough that associative memory networks link it to specific emotional states: aspiration, romance, elegance, belonging. Once those networks exist, any object that activates them becomes a portal back to the felt experience. The Dove campaign isn\'t adjacent to Bridgerton — it is Bridgerton, neurologically. The purchase is not transactional; it\'s participatory.',tag:'World encoding · Associative memory activation'},
            {n:'03',title:'Balenciaga "Keeppp Rolling" — the mechanics as the magic',signal:'Three one-minute films directed by Celine Song. A dedicated @keeppprolling Instagram. The film crew revealed in real time.',mechanism:'Parasocial Intimacy Through Craft Revelation',body:'Revealing the production process activates the same neurological response as parasocial intimacy — the sense that you are being shown something hidden creates a bond with the brand. The brain codes this as "I have been let in." And crucially, the aesthetic world remains intact, because what was revealed is not artifice but craft. This is exactly the mechanism behind why behind-the-scenes content from costume designers and set decorators performs so strongly — revealing the making deepens the encoding.',tag:'Parasocial intimacy · Craft-attribution encoding'},
            {n:'04',title:'Yellowstone / Dutton Ranch — place-based identity formation',signal:'2.1M visitors and $730M in tourist spending into Montana attributable to Yellowstone. UK searches for Texas trips up 203% after the Dutton Ranch trailer.',mechanism:'Place-Based Identity Encoding',body:'Yellowstone encodes Montana as an aspirational identity landscape — not a destination, but a self-concept. The Dutton family\'s relationship to land, inheritance, and American mythology activates an identity archetype (independence, rootedness, legacy) that viewers absorb as a genuine aspiration. The behavioral consequence is not "I want to visit Montana" — it\'s "I want to be the kind of person who would live there." Dutton Ranch in Texas is a deliberately constructed identity transfer to a new geography.',tag:'Place-identity encoding · Aspirational self-concept transfer'}
          ].map(cs=>(<div key={cs.n} style={{background:'white',border:`1px solid ${BD}`,borderRadius:6,padding:'28px 32px',marginBottom:16}}>
            <div style={{fontFamily:'Syne',fontSize:10,fontWeight:600,letterSpacing:'0.12em',textTransform:'uppercase',color:AM,marginBottom:10}}>Case study {cs.n}</div>
            <div style={{fontFamily:'Cormorant Garamond',fontSize:22,fontWeight:500,color:TX,marginBottom:12,lineHeight:1.3}}>{cs.title}</div>
            <div style={{fontFamily:'DM Mono',fontSize:12,color:MU,marginBottom:16,padding:'10px 14px',background:BG,borderRadius:4}}>{cs.signal}</div>
            <div style={{fontFamily:'Syne',fontSize:11,fontWeight:600,letterSpacing:'0.06em',textTransform:'uppercase',color:AM,marginBottom:8}}>{cs.mechanism}</div>
            <p style={{fontFamily:'Manrope',fontSize:14,color:TX,lineHeight:1.75,marginBottom:12}}>{cs.body}</p>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>{cs.tag.split(' · ').map(t=>(<span key={t} style={{display:'inline-block',fontFamily:'Syne',fontSize:11,fontWeight:600,padding:'4px 10px',background:AMB,color:AMD,borderRadius:3}}>{t}</span>))}</div>
          </div>))}
        </div>

        {/* Closing - collaboration + BIL pitch */}
        <div className='enc-collab' style={{background:AM,borderRadius:8,padding:'40px 44px',marginTop:48}}>
          <div style={{fontFamily:'Syne',fontSize:10,fontWeight:600,letterSpacing:'0.15em',textTransform:'uppercase',color:'rgba(255,255,255,.65)',marginBottom:16}}>A proposed collaboration</div>
          <h2 style={{fontFamily:'Cormorant Garamond',fontSize:28,fontWeight:500,color:'white',marginBottom:16}}>Where I think there's something to build together</h2>
          <p style={{fontFamily:'Manrope',fontSize:15,color:'rgba(255,255,255,.88)',lineHeight:1.75,marginBottom:16}}>What you're observing culturally — and documenting with real care — has a scientific layer underneath it that would make it significantly more powerful as both editorial content and a product. The encoding effect is not a metaphor. It's a measurable, research-backed mechanism, and it's the reason your analysis of why certain screen worlds generate lasting commercial impact is consistently right.</p>
          <p style={{fontFamily:'Manrope',fontSize:15,color:'rgba(255,255,255,.88)',lineHeight:1.75,marginBottom:24}}>I've been thinking about a research series that names and documents that mechanism alongside the cultural observation — something that would sit naturally in your editorial architecture and also function as an asset for brand partners trying to understand why certain screen worlds work and others don't.</p>
          <div style={{background:'rgba(255,255,255,.12)',border:'1px solid rgba(255,255,255,.22)',borderRadius:6,padding:'22px 24px'}}>
            <div style={{fontFamily:'Syne',fontSize:10,fontWeight:600,letterSpacing:'0.12em',textTransform:'uppercase',color:'rgba(255,255,255,.55)',marginBottom:8}}>The product</div>
            <div style={{fontFamily:'Syne',fontSize:15,fontWeight:700,color:'white',marginBottom:8}}>Behavioral Intelligence Layer</div>
            <p style={{fontFamily:'Manrope',fontSize:13,color:'rgba(255,255,255,.75)',lineHeight:1.65,marginBottom:12}}>Monthly intelligence reports covering 8–12 active screen culture moments with the behavioral science mechanism, the measurable commercial signal, and a brand action framework. Designed to be white-labelable for organizations that need to understand not just what is happening in culture, but why it is moving people.</p>
            <a href="https://aloha-behavioral-intelligence.vercel.app" target="_blank" rel="noreferrer" style={{display:'inline-block',fontFamily:'Syne',fontSize:12,fontWeight:600,padding:'8px 16px',background:'rgba(255,255,255,.2)',border:'1px solid rgba(255,255,255,.3)',borderRadius:4,color:'white',textDecoration:'none'}}>See a live sample report →</a>
          </div>
        </div>

        {/* Footer byline */}
        <div style={{marginTop:48,paddingTop:32,borderTop:`1px solid ${BD}`,fontSize:13,color:MU}}>
          <strong style={{color:TX,fontSize:14}}>RN Collins</strong><br/>
          Neuroscientist (Harvard Business School, BU School of Medicine) &nbsp;·&nbsp; JD Candidate, Northeastern University School of Law<br/>
          Published behavioral science research &nbsp;·&nbsp; Staff Writer, Fat Nugs Magazine &nbsp;·&nbsp; Contributor, Journal of Biophilic Design<br/>
          <button onClick={()=>setInquiryOpen(true)} style={{color:AM,background:'none',border:'none',padding:0,font:'inherit',textDecoration:'underline',cursor:'pointer'}}>Contact</button> &nbsp;·&nbsp; <a href="https://linkedin.com/in/rn-collins" target="_blank" rel="noreferrer" style={{color:AM}}>linkedin.com/in/rn-collins</a>
        </div>
            <InquiryModal source="encoding-effect" externalOpen={inquiryOpen} onExternalClose={()=>setInquiryOpen(false)}/>
    </main>

      <footer className='enc-footer' style={{background:TX,padding:'24px 48px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:24,flexWrap:'wrap'}}>
        <div><div style={{fontFamily:'Syne',fontSize:13,fontWeight:600,color:'white'}}>RN Collins · Aloha AI Consulting</div></div>
        <div style={{display:'flex',alignItems:'center',gap:20}}>
          <a href="https://linkedin.com/in/rn-collins" target="_blank" rel="noreferrer" style={{fontSize:13,color:'rgba(255,255,255,.6)'}}>LinkedIn</a>
          <button onClick={()=>setInquiryOpen(true)} style={{fontFamily:'Syne',fontSize:12,fontWeight:600,padding:'8px 18px',background:'rgba(255,255,255,.12)',border:'1px solid rgba(255,255,255,.25)',borderRadius:6,color:'white',cursor:'pointer'}}>Contact the Architect</button>
        </div>
      </footer>
    </div>

{/* Contact the Architect */}
<div style={{position:'fixed',bottom:'1.5rem',right:'1.5rem',zIndex:9999}}>
  <button onClick={()=>document.getElementById('ca-modal').style.display='flex'}
    style={{fontSize:'.65rem',textTransform:'uppercase',letterSpacing:'.08em',background:'#B8842A',
    color:'#fff',border:'none',padding:'.55rem 1.1rem',borderRadius:'2rem',cursor:'pointer',
    boxShadow:'0 2px 12px rgba(0,0,0,.35)'}}>Contact the Architect</button>
</div>
<div id="ca-modal" role="dialog" aria-modal="true"
  style={{display:'none',position:'fixed',inset:0,zIndex:10000,background:'rgba(0,0,0,.8)',
  alignItems:'center',justifyContent:'center'}}>
  <div style={{background:'#fff',maxWidth:420,width:'90%',padding:'2rem',borderRadius:4}}>
    <h2 style={{margin:'0 0 1rem'}}>Contact the Architect</h2>
    <input id="ca-name" placeholder="Name (optional)"
      style={{width:'100%',padding:'.6rem',marginBottom:'.75rem',border:'1px solid #ccc',boxSizing:'border-box'}}/>
    <input id="ca-email" type="email" placeholder="Email (required)"
      style={{width:'100%',padding:'.6rem',marginBottom:'.75rem',border:'1px solid #ccc',boxSizing:'border-box'}}/>
    <textarea id="ca-msg" rows={3} placeholder="Message"
      style={{width:'100%',padding:'.6rem',marginBottom:'.75rem',border:'1px solid #ccc',boxSizing:'border-box',resize:'vertical'}}></textarea>
    <div style={{display:'flex',gap:'.75rem',justifyContent:'flex-end'}}>
      <button onClick={()=>document.getElementById('ca-modal').style.display='none'}
        style={{background:'none',border:'1px solid #ccc',padding:'.5rem 1rem',cursor:'pointer'}}>Cancel</button>
      <button onClick={()=>{
        const e=document.getElementById('ca-email').value;
        if(!e){alert('Email is required');return;}
        fetch('/api/lead',{method:'POST',headers:{'Content-Type':'application/json'},
          body:JSON.stringify({name:document.getElementById('ca-name').value,email:e,
          message:document.getElementById('ca-msg').value,source:'contact-architect-aloha-encoding-effect'})})
        .then(()=>{document.getElementById('ca-modal').style.display='none';alert('Sent!');})
        .catch(()=>alert('Error. Please try again.'));
      }} style={{background:'#1B7A68',color:'#fff',border:'none',padding:'.5rem 1rem',cursor:'pointer'}}>Send</button>
    </div>
  </div>
</div>
<div style={{textAlign:'center',padding:'.75rem 1rem',fontSize:'.7rem',borderTop:'1px solid rgba(0,0,0,.1)',marginTop:'2rem'}}>
  Built by <a href="https://rn-portfolio-khaki.vercel.app" target="_blank" rel="noopener"
  style={{color:'#1B7A68',textDecoration:'none'}}>RN Builds</a> — explore all AI tools and projects.
</div>
  </>)
}
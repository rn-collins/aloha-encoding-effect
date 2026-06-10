import Head from 'next/head'
import { useState } from 'react'

const AM='#B8842A',AMB='#FAF0E0',AMD='#8A6020',BG='#F6F3EC',TX='#1C1B1F',MU='#5A5857',BD='#E2DDD6',G='#1B7A68',GL='#E8F5F2'

export default function EncodingEffect(){
  const [contactOpen,setContactOpen]=useState(false)
  return(<>
    <Head>
      <title>The Encoding Effect — RN Collins</title>
      <meta name="description" content="How Aesthetic Worlds Move from Screen to Self"/>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Syne:wght@400;500;600;700&family=Manrope:wght@400;500&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet"/>
    </Head>
    <ContactModal isOpen={contactOpen} onClose={()=>setContactOpen(false)}/>
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',background:BG}}>
      <div style={{background:AM,height:4}}/>
      <main style={{flex:1,maxWidth:720,margin:'0 auto',padding:'80px 48px 120px',width:'100%'}}>

        {/* Masthead */}
        <div style={{marginBottom:64}}>
          <div style={{fontFamily:'Syne',fontSize:11,fontWeight:600,letterSpacing:'0.12em',textTransform:'uppercase',color:AM,marginBottom:16}}>Research note &nbsp;·&nbsp; RN Collins &nbsp;·&nbsp; June 2026</div>
          <h1 style={{fontFamily:'Cormorant Garamond',fontSize:50,fontWeight:500,lineHeight:1.1,color:TX,marginBottom:14}}>The Encoding Effect</h1>
          <p style={{fontFamily:'Cormorant Garamond',fontSize:22,fontStyle:'italic',color:MU,marginBottom:32,lineHeight:1.4}}>How Aesthetic Worlds Move from Screen to Self</p>
          <div style={{display:'flex',alignItems:'center',gap:16,paddingTop:28,borderTop:`1px solid ${BD}`}}>
            <div style={{width:36,height:36,borderRadius:'50%',background:AM,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Syne',fontSize:11,fontWeight:600,color:'white',flexShrink:0}}>RN</div>
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
          <h2 style={{fontFamily:'Cormorant Garamond',fontSize:30,fontWeight:500,color:TX,marginBottom:20,lineHeight:1.25}}>Why do some screen worlds become identity, while others just become trends?</h2>
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
            {n:'01',title:'Michael Jackson biopic — Gen Z aesthetic resurgence',signal:'102M monthly Spotify listeners post-biopic. TikTok #Michael posts up 562% in one week, outpacing Euphoria. 58% of the opening weekend audience was under 35.',mechanism:'Retroactive Identity Encoding',body:'Gen Z adopting the aesthetic of a figure who died before most of them were teenagers represents a neurologically distinct behavior from trend-following. The film provides a coherent aesthetic world with an extraordinarily strong emotional signature, and audiences encode that aesthetic as a genuine self-concept, not a borrowed reference. They didn\'t live the original; the film is giving them the original for the first time. The encoding is durable because the emotional valence is felt, not performed.',tag:'Retroactive encoding · Nostalgia-adjacent affect'},
            {n:'02',title:'Bridgerton universe — brand ecosystem as identity infrastructure',signal:'£275M+ added to the UK economy. 12+ brand partnerships for Season 4. Netflix mobilizing the full ensemble cast across all channels.',mechanism:'Aesthetic World Encoding',body:'Bridgerton doesn\'t operate as a show — it operates as a felt world with multiple entry points. The aesthetic is coherent enough that associative memory networks link it to specific emotional states: aspiration, romance, elegance, belonging. Once those networks exist, any object that activates them becomes a portal back to the felt experience. The Dove campaign isn\'t adjacent to Bridgerton — it is Bridgerton, neurologically. The purchase is not transactional; it\'s participatory.',tag:'World encoding · Associative memory activation'},
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
        <div style={{background:AM,borderRadius:8,padding:'40px 44px',marginTop:48}}>
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
          <a href="mailto:collins.ra@northeastern.edu" style={{color:AM}}>collins.ra@northeastern.edu</a> &nbsp;·&nbsp; <a href="https://linkedin.com/in/rn-collins" style={{color:AM}}>linkedin.com/in/rn-collins</a>
        </div>
      </main>

      <footer style={{background:TX,padding:'24px 48px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:24,flexWrap:'wrap'}}>
        <div><div style={{fontFamily:'Syne',fontSize:13,fontWeight:600,color:'white'}}>RN Collins · Aloha AI Consulting</div></div>
        <div style={{display:'flex',alignItems:'center',gap:20}}>
          <a href="https://linkedin.com/in/rn-collins" target="_blank" rel="noreferrer" style={{fontSize:13,color:'rgba(255,255,255,.6)'}}>LinkedIn</a>
          <button onClick={()=>setContactOpen(true)} style={{fontFamily:'Syne',fontSize:12,fontWeight:600,padding:'8px 18px',background:'rgba(255,255,255,.12)',border:'1px solid rgba(255,255,255,.25)',borderRadius:6,color:'white',cursor:'pointer'}}>Contact the Architect</button>
        </div>
      </footer>
    </div>
  </>)
}

function ContactModal({isOpen,onClose}){
  const [form,setForm]=useState({name:'',email:'',inquiry:'',message:''})
  const [st,setSt]=useState(null)
  if(!isOpen)return null
  const submit=async(e)=>{e.preventDefault();setSt('sending');try{const r=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)});if(!r.ok)throw new Error();setSt('success')}catch{setSt('error')}}
  return(<><div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.5)',zIndex:200,backdropFilter:'blur(2px)'}}/>
    <div style={{position:'fixed',bottom:0,left:0,right:0,background:'white',borderRadius:'16px 16px 0 0',padding:'36px 40px 48px',zIndex:201,maxWidth:560,margin:'0 auto',boxShadow:'0 -8px 40px rgba(0,0,0,0.15)'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:24}}><div><div style={{fontFamily:'Syne',fontSize:20,fontWeight:700,color:TX}}>Contact the Architect</div><div style={{fontSize:13,color:MU,marginTop:4}}>RN Collins · Aloha AI Consulting</div><div style={{fontFamily:'monospace',fontSize:11,color:MU,marginTop:3}}>collins.ra@northeastern.edu</div></div><button onClick={onClose} style={{background:'none',border:'none',fontSize:20,cursor:'pointer',color:MU}}>✕</button></div>
      {st==='success'?(<div style={{textAlign:'center',padding:'32px 0'}}><div style={{fontSize:32,marginBottom:12}}>✓</div><div style={{fontFamily:'Syne',fontSize:16,fontWeight:600,color:TX,marginBottom:8}}>Message received</div><div style={{fontSize:14,color:MU}}>I'll be in touch within 48 hours.</div><button onClick={onClose} style={{marginTop:24,padding:'10px 24px',background:AM,border:'none',borderRadius:6,fontFamily:'Syne',fontSize:13,fontWeight:600,color:'white',cursor:'pointer'}}>Close</button></div>):
      (<form onSubmit={submit}>
        {[{k:'name',l:'Name',t:'text',p:'Your name'},{k:'email',l:'Email',t:'email',p:'your@email.com'}].map(f=>(<div key={f.k} style={{marginBottom:16}}><label style={{display:'block',fontFamily:'Syne',fontSize:11,fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase',color:MU,marginBottom:6}}>{f.l}</label><input type={f.t} required placeholder={f.p} value={form[f.k]} onChange={e=>setForm(p=>({...p,[f.k]:e.target.value}))} style={{width:'100%',padding:'10px 14px',border:`1px solid ${BD}`,borderRadius:6,fontFamily:'Manrope',fontSize:14,color:TX,background:BG,outline:'none'}}/></div>))}
        <div style={{marginBottom:16}}><label style={{display:'block',fontFamily:'Syne',fontSize:11,fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase',color:MU,marginBottom:6}}>Inquiry type</label><select required value={form.inquiry} onChange={e=>setForm(p=>({...p,inquiry:e.target.value}))} style={{width:'100%',padding:'10px 14px',border:`1px solid ${BD}`,borderRadius:6,fontFamily:'Manrope',fontSize:14,color:TX,background:BG,appearance:'none',outline:'none'}}><option value="">Select...</option>{['Write / research collaboration','Build a tool','Consulting','Speaking','Other'].map(o=><option key={o}>{o}</option>)}</select></div>
        <div style={{marginBottom:24}}><label style={{display:'block',fontFamily:'Syne',fontSize:11,fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase',color:MU,marginBottom:6}}>Message</label><textarea required rows={4} placeholder="What are you working on?" value={form.message} onChange={e=>setForm(p=>({...p,message:e.target.value}))} style={{width:'100%',padding:'10px 14px',border:`1px solid ${BD}`,borderRadius:6,fontFamily:'Manrope',fontSize:14,color:TX,background:BG,outline:'none',resize:'vertical'}}/></div>
        {st==='error'&&<div style={{fontSize:13,color:'#A32D2D',marginBottom:16}}>Something went wrong.</div>}
        <button type="submit" disabled={st==='sending'} style={{width:'100%',padding:14,background:st==='sending'?'#C9A870':AM,border:'none',borderRadius:8,fontFamily:'Syne',fontSize:15,fontWeight:600,color:'white',cursor:st==='sending'?'not-allowed':'pointer'}}>{st==='sending'?'Sending...':'Send message'}</button>
      </form>)}
    </div></>)
}

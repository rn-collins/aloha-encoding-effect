import Head from 'next/head'
const U='https://aloha-encoding-effect.vercel.app'
const refs=[['Sestir & Green (2010)','Character identification and temporary self-concept','https://doi.org/10.1080/15534510.2010.490672','Behavioral experiment','Supports temporary trait accessibility under high identification, not durable identity or purchase causation.'],['Rain & Mar (2021)','Adult attachment and engagement with fictional characters','https://doi.org/10.1177/02654075211018513','Behavioral association','Supports differentiated character engagement, not neurological equivalence with real relationships.'],['LaBar & Cabeza (2006)','Cognitive neuroscience of emotional memory','https://doi.org/10.1038/nrn1825','Research review','Supports qualified claims about emotional arousal and memory systems.'],['Richardson, Strange & Dolan (2004)','Encoding of emotional memories depends on amygdala and hippocampus and their interactions','https://doi.org/10.1038/nn1190','Clinical neuroimaging','Evidence from a clinical imaging population; the study addresses memory encoding, not media, brands, or consumer behavior.']]
const designs=[['Behavioral experiment','Participants are randomly assigned to conditions and an outcome is measured afterwards. A difference between conditions can support a causal claim about the manipulated variable, within the population tested and over the interval measured.'],['Behavioral association','Measured traits are correlated across a sample without assignment. Associations establish that two things travel together and constrain which explanations remain plausible; direction of effect stays open.'],['Research review','A specialist synthesises many primary studies. Reviews are the right authority for a general statement about a mature literature and the wrong one for a precise effect size in a new context.'],['Clinical neuroimaging','Brain activity or lesion outcomes are recorded, often in a patient population selected for a clinical reason. Findings describe the mechanism under study; they carry no automatic implication for healthy viewers watching television.']]
export default function Sources(){return <><Head>
 <title>Evidence ledger — The Encoding Effect</title>
 <meta name="description" content="Every source behind The Encoding Effect, each with its study design, the claim it supports, and the boundary past which it supports nothing — plus the selection method and the correction policy."/>
 <meta name="robots" content="index, follow"/>
 <link rel="canonical" href={U+'/sources'}/>
 <meta property="og:title" content="Evidence ledger — The Encoding Effect"/>
 <meta property="og:description" content="Four peer-reviewed sources, each with its design, its supported claim, and its boundary."/>
 <meta property="og:type" content="article"/>
 <meta property="og:url" content={U+'/sources'}/>
 <meta property="og:image" content={U+'/og.png'}/>
 <meta property="og:image:width" content="1200"/>
 <meta property="og:image:height" content="630"/>
 <meta property="og:image:alt" content="The Encoding Effect — an interactive research note on how aesthetic worlds may move from screen to self."/>
 <meta name="twitter:card" content="summary_large_image"/>
 <meta name="twitter:image" content={U+'/og.png'}/>
</Head><main><a href="/">← Interactive note</a><h1>Evidence ledger & methodology</h1>
<p><strong>Reviewed:</strong> 18 August 2026. <strong>Next review:</strong> 18 September 2026.</p>
<p className="lead">This ledger separates direct findings from interpretation and records where the proposed framework runs ahead of the evidence. Each entry names the study design, because the design is what fixes how far a finding travels.</p>

{refs.map(([a,t,u,kind,l])=><article key={u}><p className="kind">{kind}</p><h2><a href={u} target="_blank" rel="noreferrer">{t}</a></h2><p>{a}</p><p><strong>Use boundary:</strong> {l}</p></article>)}

<h2 className="sec">How to read a study design</h2>
<p>The four sources above sit at four different distances from the claim this note makes. Reading the design tells you which sentences a source can carry.</p>
<dl>{designs.map(([n,d])=><div key={n}><dt>{n}</dt><dd>{d}</dd></div>)}</dl>

<h2 className="sec">Selection method</h2>
<p>Sources were chosen for direct relevance to three linked questions: whether viewers identify with fictional characters, whether that identification shifts the traits a person reports about themselves, and how emotional arousal participates in memory encoding. A source qualified when it was peer-reviewed, retrievable through a registered DOI, and specific enough that its boundary could be written in one sentence. Commercial case studies and client attributions carried in an earlier version of this asset were removed, because their claims traced back to marketing summaries rather than to primary evidence.</p>
<p>The ledger is deliberately small. Four well-understood sources whose limits are stated make a stronger foundation than forty citations whose relevance has never been checked, and a short list can be re-verified in full at every review.</p>

<h2 className="sec">Where the framework exceeds the evidence</h2>
<p>“The Encoding Effect” names a proposed synthesis: that identification, emotional salience, repetition, and coherent world cues together help explain when a fictional world becomes personally meaningful. No study listed here tests those four conditions jointly, and none measures the combination in a media-consumption setting. The synthesis is therefore a research programme rather than a finding, and the canvas on the front page scores the strength of your observations rather than any property of a brain.</p>

<h2 className="sec">What would change the ledger</h2>
<p>A pre-registered study that manipulated identification and repetition together, measured self-relevance at more than one interval, and reported its null results would move the framework from proposal toward evidence. Findings that separated coherent world cues from ordinary narrative engagement would sharpen the fourth condition, which is currently the least specified. Contrary results are as welcome as confirming ones and will be recorded here in the same format.</p>

<h2 className="sec">Correction policy</h2>
<p>Corrections go to <a href="mailto:collins.ra@northeastern.edu">collins.ra@northeastern.edu</a>. A material correction updates both the reviewed date and the affected claim boundary, so a reader can always tell when a statement was last checked. Every DOI on this page is verified at each review; a source that stops resolving is replaced or removed rather than left in place.</p>
</main><style jsx>{`main{width:min(760px,calc(100% - 40px));margin:60px auto 100px;line-height:1.7}h1{font:500 44px Georgia,serif}.lead{font-family:Georgia,serif;font-size:20px;line-height:1.7}article{background:white;border:1px solid #E2DDD6;border-radius:10px;padding:22px;margin:14px 0}.kind{font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:#8A6020}h2{font-size:18px}h2.sec{font:500 27px Georgia,serif;margin:44px 0 10px}dl{margin:0}dl div{border-top:1px solid #E2DDD6;padding:16px 0}dt{font-weight:800;margin-bottom:5px}dd{margin:0;color:#4A4845}a{color:#8A6020}`}</style></>}

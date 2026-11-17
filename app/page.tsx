import Link from "next/link";

const values = [
  ["01", "Curiosity first", "Encouraging students to ask questions, explore ideas and enjoy learning."],
  ["02", "Character matters", "Making room for respect, responsibility, kindness and confidence."],
  ["03", "Every learner counts", "Recognising that every student has individual strengths and potential."],
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-image" /><div className="hero-shade" />
        <div className="wrap hero-content">
          <div className="eyebrow light"><span /> UNITED SCHOOL OF EXCELLENCE · PATTAN</div>
          <h1>Every child has<br /><em>the potential</em><br />to do something great.</h1>
          <p>A welcoming learning community in Hyderbeigh, Pattan, where young minds can discover their strengths and take their next steps with confidence.</p>
          <div className="hero-actions"><Link className="button button-light" href="/about">Discover our school <span>↗</span></Link><Link className="text-link light-link" href="/admissions">Admission information <span>→</span></Link></div>
          <div className="hero-location">⌖ &nbsp; HYDERBEIGH, PATTAN · BARAMULLA</div>
        </div>
        <div className="hero-index"><span>01</span><i /> A PLACE TO GROW</div>
      </section>

      <section className="section intro"><div className="wrap intro-grid">
        <div><div className="eyebrow"><span /> WELCOME TO UNITED</div><h2>A strong start.<br /><em>A brighter tomorrow.</em></h2></div>
        <div className="intro-copy"><p className="lead">Education is more than what happens inside a classroom. It is the confidence to try, the courage to ask, and the curiosity to keep discovering.</p><p>United School of Excellence is located in Hyderbeigh, Pattan, in the Baramulla district of Jammu & Kashmir. This website is a place for families to learn about the school, connect with its team and find admission information.</p><Link className="under-link" href="/about">More about our school <span>↗</span></Link></div>
      </div></section>

      <section className="photo-band"><div className="photo-band-image" /><div className="photo-note"><span>LEARNING IS A JOURNEY</span><strong>Make every<br />step count.</strong></div></section>

      <section className="section approach"><div className="wrap">
        <div className="section-heading"><div><div className="eyebrow"><span /> WHAT GUIDES US</div><h2>Learning with<br /><em>purpose.</em></h2></div><p>A positive school experience can help children grow academically, socially and personally. Discover the learning values we want this website to communicate.</p></div>
        <div className="value-grid">{values.map(([num,title,text],i)=><article className="value-card" key={num}><span className="value-number">{num}</span><div className="value-icon">{["✳","◇","↗"][i]}</div><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="center-link"><Link className="under-link" href="/academics">Explore academics <span>↗</span></Link></div>
      </div></section>

      <section className="quote-section"><div className="wrap quote-inner"><span className="quote-mark">“</span><blockquote>The future belongs to those who keep learning, keep growing and keep believing in what they can become.</blockquote><span className="quote-caption">A THOUGHT FOR EVERY LEARNER</span></div></section>

      <section className="section home-admissions"><div className="wrap admissions-grid">
        <div><div className="eyebrow"><span /> JOIN OUR COMMUNITY</div><h2>Take the first<br /><em>step forward.</em></h2><p className="admissions-copy">Interested in admission? Contact the school directly for current class availability, eligibility, required documents, fees and important dates.</p><Link className="button button-dark" href="/contact">Enquire about admission <span>↗</span></Link></div>
        <div className="admission-list">{[["01","Get in touch","Ask the school office about current classes and availability."],["02","Visit the campus","Arrange a visit and meet the school team."],["03","Complete enrolment","The school office will guide you through the next steps."]].map(([n,t,d])=><div className="admission-step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><b>↗</b></div>)}</div>
      </div></section>
      <section className="home-contact"><div className="wrap home-contact-inner"><div><div className="eyebrow light"><span /> HAVE A QUESTION?</div><h2>We'd love to<br /><em>hear from you.</em></h2></div><Link className="button button-light" href="/contact">Contact the school <span>↗</span></Link></div></section>
    </main>
  );
}
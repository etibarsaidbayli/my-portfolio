import React, { useEffect, useState } from 'react';
import { content, stack, WA_NUMBER, PHONE_LABEL } from './content';
import photo from './assets/etibar.jpg';
import face from './assets/etibar-face.jpg';

const ICONS = {
  db: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>,
  web: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01" /></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
  phone: <><rect x="6" y="2" width="12" height="20" rx="2.5" /><path d="M11 18h2" /></>,
  ai: <><path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z" /><path d="M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" /></>,
  link: <><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" /><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" /></>,
  app: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11" /></>,
  pwa: <><rect x="6" y="2" width="12" height="20" rx="2.5" /><path d="M12 7v7M9 11l3 3 3-3" /></>,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  x: <path d="M6 6l12 12M18 6L6 18" />,
  check: <path d="M5 12l5 5 9-10" />,
};
const Icon = ({ name, size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ICONS[name]}</svg>
);
const WaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z" /></svg>
);

const waLink = (text) => `https://wa.me/${WA_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

function readLang() {
  try {
    return localStorage.getItem('lang') === 'ru' ? 'ru' : 'az';
  } catch (e) {
    return 'az';
  }
}

function Diagram({ d }) {
  // six nodes on an ellipse around the business, connected by animated lines
  const pts = d.nodes.map((_, i) => {
    const a = (Math.PI * 2 * i) / d.nodes.length - Math.PI / 2;
    return [50 + 38 * Math.cos(a), 50 + 40 * Math.sin(a)];
  });
  return (
    <div className="diagram" aria-label={d.center}>
      <svg className="diagram-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {pts.map(([x, y], i) => <line key={i} x1="50" y1="50" x2={x} y2={y} />)}
      </svg>
      <div className="diagram-center"><span>{d.center}</span></div>
      {d.nodes.map((n, i) => (
        <div key={n} className="diagram-node" style={{ left: `${pts[i][0]}%`, top: `${pts[i][1]}%` }}>
          <Icon name={['web', 'db', 'phone', 'ai', 'grid', 'link'][i]} size={18} />
          <span>{n}</span>
        </div>
      ))}
    </div>
  );
}

function ContactForm({ f }) {
  const [form, setForm] = useState({ name: '', business: '', task: '' });
  const [err, setErr] = useState('');
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.business.trim()) {
      setErr(f.need);
      return;
    }
    setErr('');
    window.open(waLink(f.msg(form)), '_blank', 'noopener');
  };
  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="form-row">
        <label>{f.name}<input value={form.name} onChange={set('name')} autoComplete="name" /></label>
        <label>{f.business}<input value={form.business} onChange={set('business')} placeholder={f.businessPh} /></label>
      </div>
      <label>{f.task}<textarea rows="3" value={form.task} onChange={set('task')} placeholder={f.taskPh} /></label>
      {err && <div className="form-err">{err}</div>}
      <button className="btn btn-primary" type="submit"><WaIcon />{f.send}</button>
      <div className="form-alt">{f.or} <a href={waLink()} target="_blank" rel="noreferrer">{PHONE_LABEL}</a></div>
    </form>
  );
}

export default function App() {
  const [lang, setLang] = useState(readLang);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('lang', lang);
    } catch (e) {
      // storage unavailable (private mode) — language just won't persist
    }
  }, [lang]);

  return (
    <>
      <header className="top">
        <div className="wrap top-in">
          <a href="#top" className="logo"><span className="logo-mark">ES</span><span className="logo-name">Etibar Seyidbəyli</span></a>
          <nav className="nav">{t.nav.map(([h, l]) => <a key={h} href={h}>{l}</a>)}</nav>
          <div className="top-actions">
            <div className="lang" role="group" aria-label="Language">
              {['az', 'ru'].map((l) => <button key={l} className={l === lang ? 'on' : ''} onClick={() => setLang(l)}>{l.toUpperCase()}</button>)}
            </div>
            <a className="btn btn-dark btn-sm hide-sm" href="#elaqe">{t.ctaShort}</a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-in">
            <div>
              <div className="eyebrow">{t.hero.eyebrow}</div>
              <h1>{t.hero.title[0]} <em>{t.hero.title[1]}</em> {t.hero.title[2]}</h1>
              <p className="lead">{t.hero.lead}</p>
              <div className="cta">
                <a className="btn btn-primary" href="#elaqe">{t.hero.primary}<Icon name="arrow" size={18} /></a>
                <a className="btn btn-ghost" href="#isler">{t.hero.secondary}</a>
              </div>
              <div className="me">
                <img src={face} alt="Etibar Seyidbəyli" width="52" height="52" />
                <div><b>Etibar Seyidbəyli</b><span>{t.hero.me}</span></div>
              </div>
              <dl className="facts">
                {t.hero.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
              </dl>
            </div>
            <Diagram d={t.diagram} />
          </div>
        </section>

        <section className="pains">
          <div className="wrap">
            <div className="eyebrow">{t.pains.eyebrow}</div>
            <h2>{t.pains.title}</h2>
            <ul className="pain-list">
              {t.pains.items.map((p) => <li key={p}><span className="pain-x"><Icon name="x" size={14} /></span>{p}</li>)}
            </ul>
            <div className="solution"><Icon name="check" /><p>{t.pains.solution}</p></div>
          </div>
        </section>

        <section id="xidmetler">
          <div className="wrap">
            <div className="eyebrow">{t.services.eyebrow}</div>
            <h2>{t.services.title}</h2>
            <div className="services">
              {t.services.items.map((s) => (
                <article key={s.t} className="service">
                  <div className="service-ico"><Icon name={s.icon} /></div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="isler" className="alt">
          <div className="wrap">
            <div className="eyebrow">{t.cases.eyebrow}</div>
            <h2>{t.cases.title}</h2>
            <div className="cases">
              {t.cases.items.map((c, i) => (
                <article key={c.t} className={`case ${i < 2 ? 'case-big' : ''}`}>
                  <div className="case-tag">{c.tag}</div>
                  <h3>{c.t}</h3>
                  <p>{c.d}</p>
                  <div className="case-foot">
                    <span className="case-stack">{c.stack}</span>
                    {c.url && <a className="case-link" href={c.url} target="_blank" rel="noreferrer">{c.demo || t.cases.open}<Icon name="arrow" size={16} /></a>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proses">
          <div className="wrap">
            <div className="eyebrow">{t.process.eyebrow}</div>
            <h2>{t.process.title}</h2>
            <ol className="steps">
              {t.process.steps.map(([h, d], i) => (
                <li key={h}><span className="step-n">{String(i + 1).padStart(2, '0')}</span><h3>{h}</h3><p>{d}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="dark">
          <div className="wrap">
            <div className="eyebrow">{t.why.eyebrow}</div>
            <h2>{t.why.title}</h2>
            <div className="why-layout">
              <figure className="portrait">
                <img src={photo} alt="Etibar Seyidbəyli" loading="lazy" />
                <figcaption><b>Etibar Seyidbəyli</b><span>{t.why.role}</span></figcaption>
              </figure>
              <div>
                <p className="about">{t.why.about}</p>
                <div className="why">
                  {t.why.items.map(([h, d]) => <div key={h}><h3>{h}</h3><p>{d}</p></div>)}
                </div>
              </div>
            </div>
            <div className="stack">
              <span className="stack-title">{t.why.stackTitle}</span>
              {stack.map((s) => <span key={s} className="stack-chip">{s}</span>)}
            </div>
          </div>
        </section>

        <section id="suallar">
          <div className="wrap narrow">
            <div className="eyebrow">{t.faq.eyebrow}</div>
            <h2>{t.faq.title}</h2>
            <div className="faq">
              {t.faq.items.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
            </div>
          </div>
        </section>

        <section id="elaqe" className="final">
          <div className="wrap final-in">
            <div>
              <h2>{t.final.title}</h2>
              <p className="lead">{t.final.lead}</p>
            </div>
            <ContactForm f={t.final} />
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-in">
          <span>© {new Date().getFullYear()} Etibar Seyidbəyli</span>
          <span>{t.footer}</span>
        </div>
      </footer>

      <a className="wa-float" href={waLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp"><WaIcon /></a>
    </>
  );
}

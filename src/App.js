import React, { useEffect, useState } from 'react';
import { content, stack, WA_NUMBER, PHONE_LABEL } from './content';
import photo from './assets/etibar.jpg';
import face from './assets/etibar-face.jpg';
import demoShot from './assets/demo-clean.jpg';

const waLink = (text) => `https://wa.me/${WA_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

const WaIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z" /></svg>
);
const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10" /></svg>
);
const PhoneMissed = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /><path d="M16 3l5 5M21 3l-5 5" /></svg>
);

function readLang() {
  try {
    return localStorage.getItem('lang') === 'ru' ? 'ru' : 'az';
  } catch (e) {
    return 'az';
  }
}

// Hero board: the same four slots show the "manual" mess or the "automatic" order.
function Board({ b }) {
  const [auto, setAuto] = useState(false);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    // one orchestrated moment: tidy up once shortly after load, unless the visitor already toggled
    if (touched) return undefined;
    const id = setTimeout(() => setAuto(true), 1600);
    return () => clearTimeout(id);
  }, [touched]);

  const pick = (v) => { setTouched(true); setAuto(v); };

  return (
    <div className={`board ${auto ? 'is-auto' : 'is-manual'}`}>
      <div className="board-head">
        <span className="board-label">{b.label}</span>
        <div className="switch" role="group" aria-label={b.label}>
          <button type="button" aria-pressed={!auto} onClick={() => pick(false)}>{b.manual}</button>
          <button type="button" aria-pressed={auto} onClick={() => pick(true)}>{b.auto}</button>
          <span className="switch-thumb" aria-hidden="true" />
        </div>
      </div>
      <ol className="slots" aria-live="polite">
        {b.chaos.map((c, i) => (
          <li key={i} className={`slot slot-${i}`}>
            <div className={`face chaos chaos-${c.kind}`} aria-hidden={auto}>
              {c.kind === 'missed' && <PhoneMissed />}
              {c.kind === 'chat' && <WaIcon size={16} />}
              <div>
                <b>{c.text}</b>
                {c.meta && <small>{c.meta}</small>}
              </div>
            </div>
            <div className="face order" aria-hidden={!auto}>
              <span className="tick"><Check /></span>
              <div><b>{b.order[i].text}</b><small>{b.order[i].meta}</small></div>
            </div>
          </li>
        ))}
      </ol>
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
      {err && <p className="form-err" role="alert">{err}</p>}
      <button className="btn btn-wa" type="submit"><WaIcon />{f.send}</button>
      <p className="form-alt">{f.or} <a href={waLink()} target="_blank" rel="noreferrer">{PHONE_LABEL}</a></p>
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
          <a href="#top" className="logo">Etibar Seyidbəyli</a>
          <nav className="nav">{t.nav.map(([h, l]) => <a key={h} href={h}>{l}</a>)}</nav>
          <div className="lang" role="group" aria-label="Dil / Язык">
            {['az', 'ru'].map((l) => <button key={l} type="button" aria-pressed={l === lang} onClick={() => setLang(l)}>{l.toUpperCase()}</button>)}
          </div>
          <a className="btn btn-wa btn-sm hide-sm" href={waLink()} target="_blank" rel="noreferrer"><WaIcon size={18} />WhatsApp</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-in">
            <div className="hero-copy">
              <h1>{t.hero.title}</h1>
              <p className="lead">{t.hero.lead}</p>
              <div className="cta">
                <a className="btn btn-wa" href={waLink()} target="_blank" rel="noreferrer"><WaIcon />{t.write}</a>
                <a className="link" href="#xidmetler">{t.hero.how}</a>
              </div>
              <div className="me">
                <img src={face} alt="" width="48" height="48" />
                <p><b>Etibar Seyidbəyli</b><span>{t.hero.me}</span></p>
              </div>
            </div>
            <Board b={t.board} />
          </div>
        </section>

        <section id="xidmetler" className="services">
          <div className="wrap">
            <div className="sec-head">
              <h2>{t.services.title}</h2>
              <p className="lead">{t.services.lead}</p>
            </div>
            {t.services.groups.map((g) => (
              <div key={g.t} className="group">
                <h3 className="group-title">{g.t}</h3>
                <ul className="rows">
                  {g.items.map(([name, d, tech]) => (
                    <li key={name}>
                      <h4>{name}</h4>
                      <p>{d}</p>
                      <span className="tech">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="isler" className="cases">
          <div className="wrap">
            <h2>{t.cases.title}</h2>
            <div className="case-grid">
              <article className="case case-fc">
                <span className="tag">{t.cases.fastcall.tag}</span>
                <h3>{t.cases.fastcall.t}</h3>
                <p>{t.cases.fastcall.d}</p>
                <ol className="flow">{t.cases.fastcall.flow.map((s) => <li key={s}>{s}</li>)}</ol>
                <a className="link link-light" href="https://fastcall.az" target="_blank" rel="noreferrer">{t.cases.fastcall.link}</a>
              </article>
              <article className="case case-demo">
                <div>
                  <span className="tag">{t.cases.demo.tag}</span>
                  <h3>{t.cases.demo.t}</h3>
                  <p>{t.cases.demo.d}</p>
                  <a className="link" href="https://etibarsaidbayli.github.io/demo/numune-temizlik/" target="_blank" rel="noreferrer">{t.cases.demo.link}</a>
                </div>
                <a className="phone" href="https://etibarsaidbayli.github.io/demo/numune-temizlik/" target="_blank" rel="noreferrer" aria-label={t.cases.demo.link}>
                  <img src={demoShot} alt={t.cases.demo.t} loading="lazy" />
                </a>
              </article>
              <article className="case case-pos">
                <span className="tag tag-soon">{t.cases.pos.tag}</span>
                <h3>{t.cases.pos.t}</h3>
                <p>{t.cases.pos.d}</p>
              </article>
              <div className="case-team">
                <h3>{t.cases.team.t}</h3>
                <ul>
                  {t.cases.team.items.map(([n, d, u]) => (
                    <li key={n}><a href={u} target="_blank" rel="noreferrer">{n}</a><span>{d}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="process">
          <div className="wrap">
            <h2>{t.process.title}</h2>
            <ol className="steps">
              {t.process.steps.map(([h, d]) => <li key={h}><h3>{h}</h3><p>{d}</p></li>)}
            </ol>
          </div>
        </section>

        <section id="haqqimda" className="about">
          <div className="wrap about-in">
            <figure className="portrait">
              <img src={photo} alt="Etibar Seyidbəyli" loading="lazy" />
              <figcaption>{t.about.caption}</figcaption>
            </figure>
            <div className="letter">
              <h2>{t.about.title}</h2>
              {t.about.p.map((p) => <p key={p}>{p}</p>)}
              <ul className="facts">{t.about.facts.map((f) => <li key={f}>{f}</li>)}</ul>
              <p className="stack"><span>{t.about.stack}:</span> {stack.join(', ')}</p>
            </div>
          </div>
        </section>

        <section id="suallar" className="faq">
          <div className="wrap faq-in">
            <h2>{t.faq.title}</h2>
            <div>{t.faq.items.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
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

      <a className="wa-float" href={waLink()} target="_blank" rel="noreferrer" aria-label={t.write}><WaIcon size={28} /></a>
    </>
  );
}

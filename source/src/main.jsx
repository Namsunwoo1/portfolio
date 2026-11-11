import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Copy, Menu, Moon, Play, Search, Sun, X } from 'lucide-react';
import { projects } from './projects';
import './style.css';

const categories = ['전체', '모션그래픽', '영상 편집', '웹 · 디자인'];

function App() {
  const [category, setCategory] = useState('전체');
  const [featured, setFeatured] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(() => projectFromHash());
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const filtered = useMemo(() => projects.filter(p => (category === '전체' || p.category === category) && (!featured || p.featured) && (p.title + p.tagline + p.category).toLowerCase().includes(query.toLowerCase())), [category, featured, query]);

  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; }, [dark]);
  useEffect(() => {
    const onHash = () => setActive(projectFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : '';
    const escape = e => { if (e.key === 'Escape') closeProject(); };
    window.addEventListener('keydown', escape);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', escape); };
  }, [active]);

  function openProject(p) { window.location.hash = `project/${p.id}`; setActive(p); }
  function closeProject() { window.location.hash = 'projects'; setActive(null); }
  async function copy(value) {
    try { await navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 1800); }
    catch { window.prompt('주소를 복사해 주세요', value); }
  }

  return <>
    <header className="site-header" id="top">
      <a className="wordmark" href="#top" aria-label="남선우 포트폴리오 홈">NS<span className="wordmark-dot">.</span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="주요 메뉴">
        <a href="#projects" onClick={() => setMenuOpen(false)}>작업 <span>Work</span></a>
        <a href="#about" onClick={() => setMenuOpen(false)}>소개 <span>About</span></a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>연락 <span>Contact</span> <ArrowUpRight size={14}/></a>
      </nav>
      <div className="header-actions"><button className="icon-button" aria-label={dark ? '밝은 테마' : '어두운 테마'} onClick={() => setDark(!dark)}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button><button className="icon-button mobile-menu" aria-label="메뉴" onClick={() => setMenuOpen(!menuOpen)}><Menu size={20}/></button></div>
      <span className="header-year">PORTFOLIO — 2026</span>
    </header>

    <main>
      <section className="hero wrap" aria-labelledby="hero-heading">
        <p className="eyebrow">NAM SUNWOO · 남선우 <span>VIDEO EDITOR & MOTION DESIGNER</span></p>
        <h1 id="hero-heading">IDEAS IN<br/><em>MOTION<span>.</span></em></h1>
        <div className="hero-bottom"><div><p className="korean-heading">생각에, 움직임을.</p><p className="muted">영상의 흐름을 설계하고,<br/>그래픽에 리듬을 더합니다.</p><a className="round-link" href="#projects">작업 둘러보기 <ArrowRight size={18}/></a></div><div className="hero-film"><video src="/hero.mp4" autoPlay muted loop playsInline preload="metadata" poster="/nexus-poster.webp" aria-label="NEXUS STUDIO 무음 미리보기"/><div className="film-caption"><span>SELECTED FILM / 01<br/>NEXUS STUDIO — 2026</span><button onClick={() => openProject(projects[0])}><Play fill="currentColor" size={14}/> 전체 영상 · 32초</button></div></div></div>
        <div className="scroll-cue"><span>영상 편집 · 모션그래픽 · 디자인 & 코드</span><a href="#projects">SCROLL TO EXPLORE <ArrowDown size={15}/></a></div>
      </section>

      <section className="works-section" id="projects" aria-labelledby="works-heading"><div className="wrap">
        <div className="section-meta"><span>01</span><span>SELECTED WORK</span><span>2026 / PROJECT ARCHIVE</span></div>
        <div className="section-intro"><h2 id="works-heading">움직임으로 말하는<br/><em>작업들.</em></h2><p>짧은 영상부터 작동하는 화면까지.<br/>관심 있는 작업을 골라 자세히 살펴보세요.</p></div>
        <div className="filters"><div className="chips" role="group" aria-label="프로젝트 카테고리">{categories.map(c => <button key={c} className={category === c ? 'chip selected' : 'chip'} onClick={() => setCategory(c)} aria-pressed={category === c}>{c}<sup>{c === '전체' ? projects.length : projects.filter(p => p.category === c).length}</sup></button>)}</div><label className="featured"><input type="checkbox" checked={featured} onChange={e => setFeatured(e.target.checked)}/> 대표 작업만</label><label className="search"><Search size={17}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="프로젝트 검색" aria-label="프로젝트 검색"/></label></div>
        <p className="project-count">{String(filtered.length).padStart(2,'0')} / {String(projects.length).padStart(2,'0')} PROJECTS</p>
        <div className="projects-grid">{filtered.map((p, i) => <button className="project-card" key={p.id} onClick={() => openProject(p)}><div className="project-image"><img src={p.poster} alt={`${p.title} 대표 이미지`} loading="lazy"/><span className="duration">{p.featured ? 'SELECTED' : 'WEB PROJECT'} · {p.duration}</span><span className="image-arrow"><ArrowUpRight size={24}/></span></div><div className="project-meta"><span>{String(projects.indexOf(p)+1).padStart(2,'0')} / {p.category}</span><span>{p.year}</span></div><h3>{p.title}</h3><p>{p.tagline}</p><div className="tags">{p.tools.map(t => <span key={t}>{t}</span>)}</div></button>)}</div>
        {filtered.length === 0 && <div className="empty">검색 결과가 없어. 다른 키워드나 필터를 선택해 줘.</div>}
        <p className="section-footer">개인 프로젝트 · 학습과 실험의 기록</p>
      </div></section>

      <section className="about-section wrap" id="about"><div className="section-meta"><span>02</span><span>ABOUT ME</span><span>FROM DISCIPLINE TO CREATIVITY</span></div><div className="about-layout"><div><p className="eyebrow">남선우 <span>1994.02.08</span></p><h2>단단한 경험 위에<br/><em>새로운 감각을 쌓습니다.</em></h2></div><div className="about-copy"><p className="lead">새로운 방향, 같은 실행력.</p><p>가장 오래 이어온 경력은 직업군인입니다. 목표를 끝까지 수행하는 실행력과 책임감을 바탕으로, 이제 영상편집과 모션그래픽의 언어를 배우고 만듭니다.</p><p>타이포그래피의 작은 움직임부터 영상 전체의 흐름까지. 도구를 연결하고 직접 실험하며 아이디어를 구체적인 결과로 완성하는 과정에 집중합니다.</p><div className="experience"><span>EXPERIENCE</span><strong>직업군인 → 영상 · 모션 · 디자인</strong></div></div></div><div className="skills"><span>TOOLS & INTERESTS</span><h3>생각을 표현하는 도구들.</h3><div>{[['Ae','After Effects','Motion graphics'],['Pr','Premiere Pro','Video editing'],['Ai','Illustrator','Vector graphics'],['Ps','Photoshop','Image design'],['</>','Coding','Interactive web']].map(([initial,name,desc]) => <div className="skill" key={name}><b>{initial}</b><span>{name}<small>{desc}</small></span></div>)}</div></div></section>

      <section className="contact-section" id="contact"><div className="wrap"><div className="section-meta"><span>03</span><span>GET IN TOUCH</span><span>LET’S MAKE SOMETHING</span></div><h2>다음 장면을<br/><em>함께 만들어요.</em></h2><p>영상 편집, 모션그래픽, 새로운 아이디어.<br/>작업과 협업에 관한 이야기를 기다립니다.</p><div className="contact-actions"><a href="mailto:rast887@gmail.com?subject=%5B%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4%5D%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EB%AC%B8%EC%9D%98">EMAIL ME <strong>rast887@gmail.com</strong><ArrowUpRight size={20}/></a><button aria-label="이메일 주소 복사" onClick={() => copy('rast887@gmail.com')}>{copied ? <Check size={19}/> : <Copy size={19}/>}</button></div><p className="tiny">SEOUL, KR / KST · 이메일 앱이 열리지 않으면 주소를 복사해 보내주세요.</p></div></section>
    </main>
    <footer><div className="wrap"><span>© 2026 NAM SUNWOO</span><a href="#top">BACK TO TOP <ArrowUpRight size={16}/></a></div></footer>

    {active && <div className="modal-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) closeProject(); }}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-title"><div className="modal-bar"><span>PROJECT / {String(projects.indexOf(active)+1).padStart(2,'0')}</span><button onClick={closeProject}>닫기 <X size={19}/></button></div><div className="modal-content"><p className="eyebrow">{active.category} · {active.year} · 개인 프로젝트</p><h2 id="project-title">{active.title}</h2><p className="modal-tagline">{active.tagline}</p>{active.video ? <video className="detail-video" src={active.video} poster={active.poster} controls playsInline preload="metadata" aria-label={`${active.title} 전체 영상`}/> : <img className="detail-video detail-image" src={active.poster} alt="포트폴리오 웹사이트 대표 이미지"/>}<div className="detail-columns"><div><span className="detail-label">01 — OVERVIEW</span><h3>작업 소개</h3><p>{active.description}</p></div><div className="facts"><div><span>작업 유형</span><b>{active.category}</b></div><div><span>길이 / 형태</span><b>{active.duration}</b></div><div><span>도구</span><b>{active.tools.join(' · ')}</b></div></div></div><div className="detail-points">{active.details.map((d, i) => <div key={d}><span>{String(i+2).padStart(2,'0')} — PROJECT POINT</span><p>{d}</p></div>)}</div>{active.storyboard && <div className="storyboard"><span className="detail-label">STORYBOARD</span><h3>15초를 설계한 5개 핵심 장면</h3><div className="story-grid">{active.storyboard.map((s,i) => <div key={s.time}><img loading="lazy" src={s.image} alt={s.title}/><span>{String(i+1).padStart(2,'0')} / {s.time}</span><strong>{s.title}</strong></div>)}</div></div>}{active.note && <p className="project-note">PROJECT NOTE · {active.note}</p>}<div className="detail-actions"><button onClick={() => copy(window.location.href)}>{copied ? '복사 완료' : '작업 주소 복사'} <Copy size={16}/></button>{active.video && <a href={active.video} target="_blank" rel="noopener noreferrer">영상만 열기 <ArrowUpRight size={16}/></a>}</div><button className="next-project" onClick={() => openProject(projects[(projects.indexOf(active)+1)%projects.length])}>NEXT PROJECT <strong>{projects[(projects.indexOf(active)+1)%projects.length].title}</strong><ArrowRight/></button></div></section></div>}
  </>;
}

function projectFromHash() { const match = window.location.hash.match(/^#project\/([\w-]+)/); return match ? projects.find(p => p.id === match[1]) || null : null; }
createRoot(document.getElementById('root')).render(<App/>);
